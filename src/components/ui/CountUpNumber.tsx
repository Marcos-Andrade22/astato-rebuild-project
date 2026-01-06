import { useEffect, useRef, useState } from 'react';
import { useCountUp } from '@/hooks/useCountUp';

interface CountUpNumberProps {
  end: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

const CountUpNumber = ({ end, suffix = '', duration = 2000, className = '' }: CountUpNumberProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  const { count, isComplete } = useCountUp({
    end,
    duration,
    startOnMount: isVisible && !hasAnimated
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const formatNumber = (num: number) => {
    return num.toLocaleString('pt-BR');
  };

  return (
    <span ref={ref} className={className}>
      {isVisible ? formatNumber(count) : '0'}{suffix}
    </span>
  );
};

export default CountUpNumber;
