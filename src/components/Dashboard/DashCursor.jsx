import { useEffect, useRef } from "react";
import "./DashCursor.css";

export default function DashCursor({ containerRef }) {
  const dotRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    const dot = dotRef.current;
    if (!el || !dot) return;

    let x = 0, y = 0, tx = 0, ty = 0, raf;

    const move = (e) => {
      const r = el.getBoundingClientRect();
      tx = e.clientX - r.left;
      ty = e.clientY - r.top;
      dot.style.opacity = "1";
    };
    const leave = () => (dot.style.opacity = "0");
    const enterBtn = () => dot.classList.add("is-active");
    const leaveBtn = () => dot.classList.remove("is-active");

    const loop = () => {
      x += (tx - x) * 0.18;
      y += (ty - y) * 0.18;
      dot.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(loop);
    };
    loop();

    el.addEventListener("mousemove", move);
    el.addEventListener("mouseleave", leave);
    el.querySelectorAll("button, a").forEach((b) => {
      b.addEventListener("mouseenter", enterBtn);
      b.addEventListener("mouseleave", leaveBtn);
    });

    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("mousemove", move);
      el.removeEventListener("mouseleave", leave);
    };
  }, [containerRef]);

  return <span ref={dotRef} className="dash-cursor" aria-hidden="true" />;
}