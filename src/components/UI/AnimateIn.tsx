import React, { useEffect, useRef, useState } from "react";

export type AnimationVariant =
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "zoom-in"
  | "fade";

interface AnimateInProps {
  children: React.ReactNode;
  variant?: AnimationVariant;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

export default function AnimateIn({
  children,
  variant = "fade-up",
  delay = 0,
  duration = 700,
  className = "",
  once = true,
}: AnimateInProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.unobserve(node);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [once]);

  const getTransform = () => {
    if (isVisible) return "translate3d(0, 0, 0) scale(1)";
    switch (variant) {
      case "fade-up":
        return "translate3d(0, 36px, 0) scale(1)";
      case "fade-down":
        return "translate3d(0, -36px, 0) scale(1)";
      case "fade-left":
        return "translate3d(-36px, 0, 0) scale(1)";
      case "fade-right":
        return "translate3d(36px, 0, 0) scale(1)";
      case "zoom-in":
        return "translate3d(0, 0, 0) scale(0.92)";
      case "fade":
      default:
        return "translate3d(0, 0, 0) scale(1)";
    }
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transitionProperty: "opacity, transform",
        transitionDuration: `${duration}ms`,
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        transitionDelay: `${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
