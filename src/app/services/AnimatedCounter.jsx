"use client";

import { useEffect, useRef, useState } from "react";

export default function AnimatedCounter({
  color = "black",
  value,
  suffix = "",
  duration = 1600,
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasRun = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasRun.current) {
            hasRun.current = true;
            animate();
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function animate() {
    const start = performance.now();

    function tick(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out for a natural "settle" at the end
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * value));

      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        setCount(value);
      }
    }

    requestAnimationFrame(tick);
  }

  return (
    <span ref={ref} className={`text-${color}`}>
      {count}
      {suffix}
    </span>
  );
}
