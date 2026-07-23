"use client";

import { useEffect, useRef } from "react";

/**
 * AnimatedDotsBackground
 * -----------------------------------------------------------------------
 * A canvas layer of soft glowing dots. On mouse move, every dot drifts
 * toward the cursor — dots close to the cursor move noticeably more,
 * dots far away barely move — then ease back to their resting position
 * when the mouse leaves.
 *
 * Usage:
 *   <section className="relative overflow-hidden">
 *     <AnimatedDotsBackground />
 *     <div className="relative z-10"> ...your hero content... </div>
 *   </section>
 *
 * IMPORTANT: the parent element needs `relative` (or any positioning
 * context) and ideally `overflow-hidden`. This component fills its
 * parent with `absolute inset-0`, so it never affects layout, and
 * `pointer-events-none` means it never blocks clicks/hover on your
 * buttons/links — the parent still receives the mousemove events that
 * drive the animation.
 *
 * Colors default to your brand palette:
 *   primary:   oklch(52.7% 0.154 150.069)
 *   secondary: #0b3d1d
 * Pass `primaryColor` / `secondaryColor` props to override.
 * ----------------------------------------------------------------------- */

const DEFAULT_PRIMARY = "#218047";
const DEFAULT_PRIMARY_LIGHT = "#51c672"; // brighter tint of primary, for glow variety
const DEFAULT_SECONDARY = "#0b3d1d";

// Resolve any CSS color (oklch, hex, etc.) to [r, g, b] via the browser's
// own color engine — this avoids relying on <canvas> parsing oklch()
// directly, which some engines still handle inconsistently.
function resolveRgb(cssColor) {
  if (typeof document === "undefined") return [22, 101, 52];
  const el = document.createElement("div");
  el.style.color = cssColor;
  el.style.display = "none";
  document.body.appendChild(el);
  const computed = getComputedStyle(el).color;
  document.body.removeChild(el);
  const nums = computed.match(/[\d.]+/g);
  return nums ? nums.slice(0, 3).map(Number) : [22, 101, 52];
}

export default function AnimatedDotsBackground({
  primaryColor = DEFAULT_PRIMARY,
  primaryLightColor = DEFAULT_PRIMARY_LIGHT,
  secondaryColor = DEFAULT_SECONDARY,
  density = 1, // multiply default dot count; increase for denser field
  maxPull = 22, // px the nearest dot can be pulled toward the cursor
  className = "",
}) {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: null, y: null });
  const dotsRef = useRef([]);
  const sizeRef = useRef({ width: 0, height: 0 });
  const rafRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const parent = canvas.parentElement;
    const ctx = canvas.getContext("2d");

    const primaryRgb = resolveRgb(primaryColor);
    const primaryLightRgb = resolveRgb(primaryLightColor);
    const secondaryRgb = resolveRgb(secondaryColor);
    const palette = [primaryRgb, primaryRgb, primaryLightRgb, secondaryRgb];

    function initDots(width, height) {
      const area = width * height;
      const count = Math.min(180, Math.max(40, Math.round((area / 9000) * density)));
      dotsRef.current = Array.from({ length: count }, () => {
        const ox = Math.random() * width;
        const oy = Math.random() * height;
        return {
          ox,
          oy,
          x: ox,
          y: oy,
          r: Math.random() * 1.6 + 0.9,
          baseAlpha: Math.random() * 0.45 + 0.35,
          twinkleSpeed: Math.random() * 0.03 + 0.008,
          twinklePhase: Math.random() * Math.PI * 2,
          rgb: palette[Math.floor(Math.random() * palette.length)],
        };
      });
    }

    function resize() {
      const rect = parent.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = rect.width;
      const height = rect.height;
      sizeRef.current = { width, height };
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      initDots(width, height);
    }

    function handleMouseMove(e) {
      const rect = parent.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    }
    function handleMouseLeave() {
      mouseRef.current = { x: null, y: null };
    }

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(parent);
    parent.addEventListener("mousemove", handleMouseMove);
    parent.addEventListener("mouseleave", handleMouseLeave);
    resize();

    let time = 0;

    function animate() {
      time += 1;
      const { width, height } = sizeRef.current;
      ctx.clearRect(0, 0, width, height);
      const { x: mx, y: my } = mouseRef.current;
      const maxDist = Math.sqrt(width * width + height * height) || 1;

      for (const dot of dotsRef.current) {
        let targetX = dot.ox;
        let targetY = dot.oy;

        if (mx !== null && my !== null) {
          const dx = mx - dot.ox;
          const dy = my - dot.oy;
          const dist = Math.sqrt(dx * dx + dy * dy) || 1;
          // t: 1 when the dot is right at the cursor, ~0 when it's at
          // the far corner of the section — so nearby dots get pulled
          // much more than distant ones.
          const t = Math.max(0, 1 - dist / maxDist);
          const eased = t * t; // ease-in makes the falloff feel more natural
          const pull = eased * maxPull;
          targetX = dot.ox + (dx / dist) * pull;
          targetY = dot.oy + (dy / dist) * pull;
        }

        // smoothly ease current position toward target (and back to
        // rest position when the mouse leaves)
        dot.x += (targetX - dot.x) * 0.07;
        dot.y += (targetY - dot.y) * 0.07;

        const twinkle = Math.sin(time * dot.twinkleSpeed + dot.twinklePhase) * 0.3 + 0.7;
        const alpha = dot.baseAlpha * twinkle;
        const [r, g, b] = dot.rgb;

        ctx.save();
        ctx.shadowBlur = 6;
        ctx.shadowColor = `rgba(${r}, ${g}, ${b}, ${alpha})`;
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      rafRef.current = requestAnimationFrame(animate);
    }
    animate();

    return () => {
      cancelAnimationFrame(rafRef.current);
      resizeObserver.disconnect();
      parent.removeEventListener("mousemove", handleMouseMove);
      parent.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [primaryColor, primaryLightColor, secondaryColor, density, maxPull]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 ${className}`}
    />
  );
}
