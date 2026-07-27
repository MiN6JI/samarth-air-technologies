import { useMemo } from "react";

interface SolarArcGaugeProps {
  systemSizeKw: number;
  maxKw?: number;
}

export default function SolarArcGauge({ systemSizeKw = 0, maxKw = 10 }: SolarArcGaugeProps) {
  const fraction = useMemo(() => {
    if (!systemSizeKw) return 0;
    return Math.min(Math.max(systemSizeKw / maxKw, 0), 1);
  }, [systemSizeKw, maxKw]);

  // Arc geometry: a semicircle from (20,150) to (280,150) with radius 130
  const cx = 150;
  const cy = 150;
  const r = 120;
  const startAngle = Math.PI; // left horizon
  const endAngle = 0; // right horizon
  const angle = startAngle + (endAngle - startAngle) * fraction;

  const sunX = cx + r * Math.cos(angle);
  const sunY = cy - r * Math.sin(angle);

  const arcPoint = (t: number) => {
    const a = startAngle + (endAngle - startAngle) * t;
    return [cx + r * Math.cos(a), cy - r * Math.sin(a)];
  };

  const [litEndX, litEndY] = arcPoint(fraction);
  const largeArc = fraction > 0.5 ? 1 : 0;

  return (
    <div className="relative w-full max-w-[300px] mx-auto select-none">
      <svg
        viewBox="0 0 300 170"
        className="w-full h-auto"
        role="img"
        aria-label="Solar system size gauge"
      >
        <defs>
          <linearGradient id="arcTrack" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#DCEBFA" />
            <stop offset="100%" stopColor="#F3E7CE" />
          </linearGradient>
          <linearGradient id="arcLit" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#F5A524" />
            <stop offset="100%" stopColor="#E8622C" />
          </linearGradient>
          <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFD98A" />
            <stop offset="100%" stopColor="#F5A524" />
          </radialGradient>
        </defs>

        {/* horizon line */}
        <line
          x1="10"
          y1="150"
          x2="290"
          y2="150"
          stroke="#0F2540"
          strokeOpacity="0.12"
          strokeWidth="2"
        />

        {/* full track */}
        <path
          d={`M 30 150 A ${r} ${r} 0 0 1 270 150`}
          fill="none"
          stroke="url(#arcTrack)"
          strokeWidth="10"
          strokeLinecap="round"
        />

        {/* lit portion */}
        {fraction > 0 && (
          <path
            d={`M 30 150 A ${r} ${r} 0 ${largeArc} 1 ${litEndX} ${litEndY}`}
            fill="none"
            stroke="url(#arcLit)"
            strokeWidth="10"
            strokeLinecap="round"
          />
        )}

        {/* sun marker */}
        <circle
          cx={sunX}
          cy={sunY}
          r="16"
          fill="url(#sunGlow)"
          stroke="#FFFFFF"
          strokeWidth="3"
        />

        {/* horizon caps */}
        <circle cx="30" cy="150" r="3.5" fill="#0F2540" fillOpacity="0.35" />
        <circle cx="270" cy="150" r="3.5" fill="#0F2540" fillOpacity="0.35" />
      </svg>

      <div className="text-center -mt-2">
        <div className="font-display text-4xl font-semibold text-navy tabular-nums leading-none">
          {systemSizeKw ? systemSizeKw.toFixed(1) : "—"}
          <span className="text-lg font-medium text-navy/60 ml-1">kW</span>
        </div>
        <div className="text-xs uppercase tracking-wider text-navy/50 mt-1">
          Recommended system size
        </div>
      </div>
    </div>
  );
}
