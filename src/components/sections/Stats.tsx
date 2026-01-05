import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 2.4, suffix: "B+", label: "Assets Under Management", prefix: "$" },
  { value: 15, suffix: "+", label: "Years of Excellence", prefix: "" },
  { value: 98, suffix: "%", label: "Client Retention Rate", prefix: "" },
  { value: 50, suffix: "K+", label: "Families Served", prefix: "" },
];

function useCountUp(end: number, duration: number = 2000, startOnView: boolean = true) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  
  useEffect(() => {
    if (!hasStarted) return;
    
    let startTime: number;
    let animationFrame: number;
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Ease out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(easeOut * end);
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };
    
    animationFrame = requestAnimationFrame(animate);
    
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, hasStarted]);
  
  return { count, start: () => setHasStarted(true) };
}

function StatItem({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { count, start } = useCountUp(stat.value, 2000);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          start();
        }
      },
      { threshold: 0.5 }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => observer.disconnect();
  }, [isVisible, start]);
  
  return (
    <div
      ref={ref}
      className={`text-center opacity-0 ${isVisible ? 'animate-fade-up' : ''}`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="stat-value text-primary-foreground">
        {stat.prefix}
        {count.toFixed(stat.value % 1 === 0 ? 0 : 1)}
        {stat.suffix}
      </div>
      <div className="stat-label text-primary-foreground/60">{stat.label}</div>
    </div>
  );
}

export function Stats() {
  return (
    <section className="py-20 section-navy relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-compass-pattern opacity-20" />
      <div className="absolute top-0 left-1/4 w-64 h-px bg-gradient-to-r from-transparent via-gold-400/30 to-transparent transform -rotate-12" />
      <div className="absolute bottom-0 right-1/4 w-48 h-px bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent transform rotate-12" />
      
      <div className="container-narrow relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <StatItem key={stat.label} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
