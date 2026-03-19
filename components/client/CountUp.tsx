"use client"
import { useEffect, useState, useRef } from "react";

type CountUpProps = {
  value: number; // final number
  duration?: number; // animation duration in ms
};

const CountUp = ({ value, duration = 1500 }: CountUpProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;

          let start = 0;
          const increment = value / (duration / 16);

          const counter = () => {
            start += increment;
            if (start < value) {
              setCount(Math.ceil(start));
              requestAnimationFrame(counter);
            } else {
              setCount(value);
            }
          };

          counter();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [value, duration]);

  return <span ref={ref}>{count}</span>;
};

export default CountUp;