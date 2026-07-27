import React, { useEffect, useRef, useState } from "react";

/**
 * TrustSection
 * A "social proof" band for a solar company: headline stat, a featured
 * video testimonial, a Google-rating card, and three written testimonials.
 *
 * Design notes:
 * - No external image dependencies — the hero visual is a hand-built SVG
 *   (rooftop + panels + sun) so the component always renders identically,
 *   with no broken links and nothing to license.
 * - Signature element: an animated "sun-gauge" ring — a circular progress
 *   ring styled like sun rays — used to present the 90% stat, tying the
 *   data visualization back to the solar subject matter instead of a
 *   generic bar or plain number.
 * - Avatars are initials on a gradient chip (no third-party avatar CDN
 *   dependency required).
 */

type Testimonial = {
  quote: string;
  name: string;
  initials: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "From consultation to installation, everything was smooth! My plant generates 22\u201324 units daily, and I've seen a 70% drop in electricity bills.",
    name: "Dr. Sudhakar Shukla",
    initials: "SS",
  },
  {
    quote:
      "SolarSquare truly impressed me. The installation was clean, damage-free, and looked better than others. Overall, a smooth and satisfying experience.",
    name: "Samir Patil",
    initials: "SP",
  },
  {
    quote:
      "My solar journey with SolarSquare has been smooth and satisfying. Bills dropped from \u20b918,000 to \u20b90! Timely cleaning ensures 50\u201355 units generated daily.",
    name: "Santosh Singh",
    initials: "SS",
  },
];

/** Counts a number up from 0 to `end` once the element scrolls into view. */
function useCountUp(end: number, decimals = 0, duration = 1200) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(end * eased);
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [end, duration]);

  return { ref, display: value.toFixed(decimals) };
}

const SunGauge: React.FC<{ percent: number }> = ({ percent }) => {
  const size = 168;
  const stroke = 10;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const { ref, display } = useCountUp(percent, 0, 1400);
  const offset = circumference * (1 - Number(display) / 100);

  const rays = Array.from({ length: 16 });

  return (
    <div className="ts-gauge" ref={ref}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="var(--ts-ring-track)"
          strokeWidth={stroke}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="url(#ts-sun-gradient)"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
          className="ts-gauge-arc"
        />
        <defs>
          <linearGradient id="ts-sun-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FDB022" />
            <stop offset="100%" stopColor="#F59E0B" />
          </linearGradient>
        </defs>
      </svg>
      <div className="ts-gauge-rays" aria-hidden="true">
        {rays.map((_, i) => (
          <span
            key={i}
            style={{ transform: `rotate(${(360 / rays.length) * i}deg)` }}
          />
        ))}
      </div>
      <div className="ts-gauge-label">
        <span className="ts-gauge-number">{display}%</span>
        <span className="ts-gauge-caption">recommend us</span>
      </div>
    </div>
  );
};

/** Small hand-built illustration standing in for the video thumbnail. */
const RooftopIllustration: React.FC = () => (
  <svg viewBox="0 0 480 320" className="ts-illustration" preserveAspectRatio="xMidYMax slice">
    <defs>
      <linearGradient id="ts-sky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#141B33" />
        <stop offset="100%" stopColor="#0B0F1F" />
      </linearGradient>
      <linearGradient id="ts-panel" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#3B4A7A" />
        <stop offset="100%" stopColor="#232E52" />
      </linearGradient>
    </defs>
    <rect width="480" height="320" fill="url(#ts-sky)" />
    <circle cx="390" cy="70" r="46" fill="#FDB022" opacity="0.9" />
    <g stroke="#FDB022" strokeWidth="3" opacity="0.6" strokeLinecap="round">
      <line x1="390" y1="4" x2="390" y2="20" />
      <line x1="454" y1="70" x2="438" y2="70" />
      <line x1="435" y1="25" x2="424" y2="36" />
      <line x1="345" y1="25" x2="356" y2="36" />
    </g>
    {/* distant skyline */}
    <g fill="#1B2340">
      <rect x="20" y="150" width="46" height="120" />
      <rect x="74" y="120" width="40" height="150" />
      <rect x="120" y="170" width="50" height="100" />
    </g>
    {/* roof */}
    <polygon points="60,270 420,270 360,190 130,190" fill="#1E2648" />
    {/* panel array */}
    <g transform="translate(140,196)">
      {[0, 1, 2].map((row) =>
        [0, 1, 2, 3].map((col) => (
          <rect
            key={`${row}-${col}`}
            x={col * 42}
            y={row * 24}
            width={38}
            height={20}
            rx={2}
            fill="url(#ts-panel)"
            stroke="#4E5FA0"
            strokeWidth="1"
          />
        ))
      )}
    </g>
    {/* worker */}
    <g transform="translate(300,150)">
      <circle cx="0" cy="0" r="10" fill="#F1B26B" />
      <path d="M0 10 L2 46 L-14 78" stroke="#2C3560" strokeWidth="10" fill="none" strokeLinecap="round" />
      <path d="M0 10 L-8 46 L4 78" stroke="#232C56" strokeWidth="10" fill="none" strokeLinecap="round" />
      <path d="M0 20 L26 4" stroke="#3A4478" strokeWidth="8" fill="none" strokeLinecap="round" />
      <polygon points="-11,-6 11,-6 8,-16 -8,-16" fill="#FDB022" />
    </g>
  </svg>
);

const TrustSection: React.FC = () => {
  const { ref: ratingRef, display: ratingDisplay } = useCountUp(4.8, 1, 1200);
  const { ref: countRef, display: countDisplay } = useCountUp(15000, 0, 1600);

  return (
    <section className="ts-root">
      <style>{CSS}</style>

      <div className="ts-inner">
        <div className="ts-header">
          <span className="ts-eyebrow">Real homes, real savings</span>
          <h2 className="ts-headline">
            <span className="ts-headline-accent">90%</span> of our customers
            recommend us
          </h2>
        </div>

        <div className="ts-top-grid">
          {/* Featured video testimonial */}
          <article className="ts-video-card">
            <div className="ts-video-media">
              <RooftopIllustration />
              <span className="ts-badge">
                <svg width="18" height="13" viewBox="0 0 18 13" fill="none">
                  <rect width="18" height="13" rx="3.5" fill="#FF0000" />
                  <path d="M7 3.5L12 6.5L7 9.5V3.5Z" fill="white" />
                </svg>
                YouTube
              </span>
              <button className="ts-play" aria-label="Play testimonial video">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="12" fill="rgba(255,255,255,0.16)" />
                  <path d="M9.5 7.5L17 12L9.5 16.5V7.5Z" fill="#fff" />
                </svg>
              </button>
            </div>
            <div className="ts-video-copy">
              <svg className="ts-quote-mark" width="28" height="20" viewBox="0 0 28 20" fill="none">
                <path
                  d="M0 20V13.3C0 7.6 3.4 2.9 10.2 0L12.3 3.4C7.9 5.6 6 8.4 6 11.4H10.2V20H0ZM17.5 20V13.3C17.5 7.6 20.9 2.9 27.7 0L29.8 3.4C25.4 5.6 23.5 8.4 23.5 11.4H27.7V20H17.5Z"
                  fill="#FDB022"
                  opacity="0.5"
                />
              </svg>
              <p className="ts-video-quote">{"\u20b915,000 in bills to \u20b93,000"}</p>
              <span className="ts-video-name">Rajendra</span>
            </div>
          </article>

          {/* Rating + sun-gauge card */}
          <article className="ts-rating-card">
            <SunGauge percent={90} />
            <div className="ts-rating-stat" ref={ratingRef}>
              <span className="ts-rating-number">{ratingDisplay}</span>
              <span className="ts-stars" aria-hidden="true">
                {"★★★★★"}
              </span>
            </div>
            <p className="ts-rating-caption" ref={countRef}>
              Rated {ratingDisplay} on Google with{" "}
              {Math.round(Number(countDisplay)).toLocaleString("en-IN")}+ ratings
            </p>
          </article>
        </div>

        <div className="ts-grid">
          {TESTIMONIALS.map((t) => (
            <article className="ts-card" key={t.name}>
              <svg className="ts-quote-mark ts-quote-mark--card" width="26" height="18" viewBox="0 0 28 20" fill="none">
                <path
                  d="M0 20V13.3C0 7.6 3.4 2.9 10.2 0L12.3 3.4C7.9 5.6 6 8.4 6 11.4H10.2V20H0ZM17.5 20V13.3C17.5 7.6 20.9 2.9 27.7 0L29.8 3.4C25.4 5.6 23.5 8.4 23.5 11.4H27.7V20H17.5Z"
                  fill="#D7DCEA"
                />
              </svg>
              <p className="ts-card-quote">{t.quote}</p>
              <div className="ts-card-footer">
                <span className="ts-avatar">{t.initials}</span>
                <span className="ts-card-name">{t.name}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

const CSS = `
.ts-root {
  --ts-bg: #F3F5FB;
  --ts-ink: #10162B;
  --ts-muted: #5B6478;
  --ts-amber: #FDB022;
  --ts-amber-deep: #F59E0B;
  --ts-ring-track: #E7EAF3;
  --ts-card: #FFFFFF;
  --ts-border: #E7E9F3;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  background: var(--ts-bg);
  padding: 88px 24px;
}
.ts-inner { max-width: 1160px; margin: 0 auto; }
.ts-header { margin-bottom: 40px; }
.ts-eyebrow {
  display: inline-block;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--ts-amber-deep);
  margin-bottom: 12px;
}
.ts-headline {
  font-family: 'Sora', 'Inter', sans-serif;
  font-size: clamp(28px, 4vw, 44px);
  line-height: 1.15;
  font-weight: 700;
  color: var(--ts-ink);
  margin: 0;
  letter-spacing: -0.02em;
}
.ts-headline-accent {
  background: linear-gradient(120deg, var(--ts-amber), var(--ts-amber-deep));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.ts-top-grid {
  display: grid;
  grid-template-columns: 1.6fr 1fr;
  gap: 24px;
  margin-bottom: 24px;
}
@media (max-width: 860px) {
  .ts-top-grid { grid-template-columns: 1fr; }
}

.ts-video-card {
  background: var(--ts-card);
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid var(--ts-border);
  box-shadow: 0 12px 32px -18px rgba(16, 22, 43, 0.25);
  display: flex;
  flex-direction: column;
}
.ts-video-media {
  position: relative;
  aspect-ratio: 16 / 10;
  overflow: hidden;
}
.ts-illustration { width: 100%; height: 100%; display: block; }
.ts-badge {
  position: absolute;
  top: 18px;
  left: 20px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: rgba(11, 15, 31, 0.55);
  backdrop-filter: blur(4px);
  color: #fff;
  font-size: 13px;
  font-weight: 600;
  padding: 6px 12px;
  border-radius: 999px;
}
.ts-play {
  position: absolute;
  bottom: 18px;
  right: 18px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  transition: transform 0.2s ease;
}
.ts-play:hover { transform: scale(1.08); }
.ts-video-copy {
  padding: 22px 26px 26px;
  position: relative;
}
.ts-quote-mark { display: block; margin-bottom: 6px; }
.ts-quote-mark--card { margin-bottom: 10px; }
.ts-video-quote {
  font-family: 'Sora', sans-serif;
  font-size: 21px;
  font-weight: 600;
  color: var(--ts-ink);
  margin: 0 0 6px;
}
.ts-video-name { color: var(--ts-muted); font-size: 14px; }

.ts-rating-card {
  background: linear-gradient(165deg, #FFF7E6 0%, #FFEFD1 100%);
  border-radius: 20px;
  border: 1px solid #F6E3B4;
  padding: 28px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  gap: 14px;
}
.ts-gauge { position: relative; width: 168px; height: 168px; display: flex; align-items: center; justify-content: center; }
.ts-gauge-arc { transition: stroke-dashoffset 0.3s ease; }
.ts-gauge-rays { position: absolute; inset: 0; }
.ts-gauge-rays span {
  position: absolute;
  top: 2px;
  left: 50%;
  width: 2px;
  height: 6px;
  background: var(--ts-amber);
  opacity: 0.35;
  transform-origin: 50% 82px;
}
.ts-gauge-label {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.ts-gauge-number {
  font-family: 'Sora', sans-serif;
  font-size: 30px;
  font-weight: 700;
  color: var(--ts-ink);
}
.ts-gauge-caption { font-size: 12px; color: var(--ts-muted); margin-top: 2px; }
.ts-rating-stat { display: flex; align-items: baseline; gap: 10px; }
.ts-rating-number { font-family: 'Sora', sans-serif; font-size: 30px; font-weight: 700; color: var(--ts-ink); }
.ts-stars { color: var(--ts-amber-deep); font-size: 18px; letter-spacing: 2px; }
.ts-rating-caption { color: var(--ts-muted); font-size: 14px; margin: 0; max-width: 240px; }

.ts-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
@media (max-width: 860px) {
  .ts-grid { grid-template-columns: 1fr; }
}
.ts-card {
  background: var(--ts-card);
  border: 1px solid var(--ts-border);
  border-radius: 18px;
  padding: 26px 24px;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}
.ts-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 32px -20px rgba(16, 22, 43, 0.3);
}
.ts-card-quote {
  color: var(--ts-ink);
  font-size: 15px;
  line-height: 1.6;
  margin: 0 0 20px;
}
.ts-card-footer { display: flex; align-items: center; gap: 12px; }
.ts-avatar {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 700;
  color: #fff;
  background: linear-gradient(135deg, #3B4A7A, #232E52);
  flex-shrink: 0;
}
.ts-card-name { font-weight: 600; color: var(--ts-ink); font-size: 14.5px; }
`;

export default TrustSection;
