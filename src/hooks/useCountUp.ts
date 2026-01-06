import { useState, useEffect, useRef } from 'react';

interface UseCountUpOptions {
  end: number;
  duration?: number;
  startOnMount?: boolean;
}

export const useCountUp = ({ end, duration = 2000, startOnMount = true }: UseCountUpOptions) => {
  const [count, setCount] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const countRef = useRef<number>(0);
  const startTimeRef = useRef<number | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  const animate = (timestamp: number) => {
    if (!startTimeRef.current) {
      startTimeRef.current = timestamp;
    }

    const progress = Math.min((timestamp - startTimeRef.current) / duration, 1);
    
    // Easing function for smooth animation
    const easeOutQuart = 1 - Math.pow(1 - progress, 4);
    
    countRef.current = Math.floor(easeOutQuart * end);
    setCount(countRef.current);

    if (progress < 1) {
      animationFrameRef.current = requestAnimationFrame(animate);
    } else {
      setCount(end);
      setIsComplete(true);
    }
  };

  const start = () => {
    setCount(0);
    setIsComplete(false);
    startTimeRef.current = null;
    animationFrameRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    if (startOnMount) {
      start();
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [end, duration, startOnMount]);

  return { count, isComplete, start };
};

export default useCountUp;
