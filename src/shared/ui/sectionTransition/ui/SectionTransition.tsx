import { useState, useEffect, useRef, type ReactNode } from "react";
import "./SectionTransition.css";
interface SectionTransitionProps {
  children: ReactNode;
  delay?: number;
}

export function SectionTransition({
  children,
  delay = 0,
}: SectionTransitionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current || isVisible) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [isVisible]);

  const className = `section-transition ${isVisible ? "section-transition--visible" : ""}`.trim();

  return (
    <div
      ref={ref}
      className={className}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
