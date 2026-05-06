import { useTranslation } from "react-i18next";
import { useEffect, useRef, useState } from "react";

const useCountUp = (target: number, duration: number = 1500, triggered: boolean = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!triggered) return;

    let startTime: number | null = null;
    const startValue = 0;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(startValue + eased * (target - startValue)));
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(step);
  }, [triggered, target, duration]);

  return count;
};

interface StatItemProps {
  value: number;
  suffix: string;
  label: string;
  triggered: boolean;
  delay?: number;
}

const StatItem = ({ value, suffix, label, triggered, delay = 0 }: StatItemProps) => {
  const [delayedTrigger, setDelayedTrigger] = useState(false);
  const count = useCountUp(value, 1400, delayedTrigger);

  useEffect(() => {
    if (!triggered) return;
    const timer = setTimeout(() => setDelayedTrigger(true), delay);
    return () => clearTimeout(timer);
  }, [triggered, delay]);

  return (
    <div className="text-center">
      <div className="font-display text-5xl md:text-7xl font-bold gradient-text text-glow mb-2">
        {count}{suffix}
      </div>
      <div className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </div>
    </div>
  );
};

export const StatsBand = () => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered) {
          setTriggered(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [triggered]);

  const stats = [
    { value: 2,    suffix: "+",  label: t("hero.stats.years") },
    { value: 10,   suffix: "+",  label: t("hero.stats.projects") },
    { value: 15,   suffix: "+",  label: t("hero.stats.technologies") },
    { value: 1000, suffix: "+",  label: t("hero.stats.codingHours") },
  ];

  return (
    <section ref={sectionRef} className="py-24 relative">
      <div className="container">
        <div className="glass-card border-glow p-12 md:p-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {stats.map((s, i) => (
              <StatItem
                key={i}
                value={s.value}
                suffix={s.suffix}
                label={s.label}
                triggered={triggered}
                delay={i * 100}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
