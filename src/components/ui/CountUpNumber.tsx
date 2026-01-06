import { useEffect, useRef, useState, useCallback } from 'react';

interface CountUpNumberProps {
  end: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

const CountUpNumber = ({ end, suffix = '', duration = 2000, className = '' }: CountUpNumberProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const hasAnimatedRef = useRef(false);  // ← Controle via ref

  const animate = useCallback(() => {
    const startTime = performance.now();

    const step = (currentTime: number) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);

      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    animationFrameRef.current = requestAnimationFrame(step);
  }, [end, duration]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimatedRef.current) {
          console.log('CountUp triggered!');  // ← Debug opcional
          hasAnimatedRef.current = true;
          animate();
        }
      },
      { threshold: 0.1 }  // ← Threshold mais sensível
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [animate]);  // ← Só animate (estável)

  const formatNumber = (num: number) => {
    return num.toLocaleString('pt-BR');
  };

  return (
    <span ref={ref} className={className}>
      {formatNumber(count)}{suffix}
    </span>
  );
};

export default CountUpNumber;
