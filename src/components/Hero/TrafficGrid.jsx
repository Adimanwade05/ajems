import { useEffect, useRef } from "react";
import "./TrafficGrid.css";

export default function TrafficGrid() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let raf;
    let w, h, cols, rows;
    const gap = 64; // grid cell size
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const vehicles = [];

    function resize() {
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cols = Math.ceil(w / gap);
      rows = Math.ceil(h / gap);
      spawn();
    }

    function spawn() {
      vehicles.length = 0;
      const count = Math.min(26, Math.floor((cols + rows) * 0.6));
      for (let i = 0; i < count; i++) {
        const horizontal = Math.random() > 0.5;
        const teal = Math.random() > 0.5;
        vehicles.push({
          horizontal,
          line: horizontal
            ? Math.floor(Math.random() * (rows + 1)) * gap
            : Math.floor(Math.random() * (cols + 1)) * gap,
          pos: Math.random() * (horizontal ? w : h),
          speed: (0.25 + Math.random() * 0.5) * (Math.random() > 0.5 ? 1 : -1),
          len: 30 + Math.random() * 50,
          color: teal ? "106,235,201" : "29,77,215",
        });
      }
    }

    function drawGrid() {
      ctx.lineWidth = 1;
      ctx.strokeStyle = "rgba(255,255,255,0.035)";
      for (let x = 0; x <= cols; x++) {
        ctx.beginPath();
        ctx.moveTo(x * gap, 0);
        ctx.lineTo(x * gap, h);
        ctx.stroke();
      }
      for (let y = 0; y <= rows; y++) {
        ctx.beginPath();
        ctx.moveTo(0, y * gap);
        ctx.lineTo(w, y * gap);
        ctx.stroke();
      }
    }

    function draw() {
      ctx.clearRect(0, 0, w, h);
      drawGrid();

      vehicles.forEach((v) => {
        v.pos += v.speed;
        const max = v.horizontal ? w : h;
        if (v.pos > max + v.len) v.pos = -v.len;
        if (v.pos < -v.len) v.pos = max + v.len;

        const x1 = v.horizontal ? v.pos : v.line;
        const y1 = v.horizontal ? v.line : v.pos;
        const x2 = v.horizontal ? v.pos - Math.sign(v.speed) * v.len : v.line;
        const y2 = v.horizontal ? v.line : v.pos - Math.sign(v.speed) * v.len;

        const grad = ctx.createLinearGradient(x1, y1, x2, y2);
        grad.addColorStop(0, `rgba(${v.color},0.55)`);
        grad.addColorStop(1, `rgba(${v.color},0)`);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();

        // glowing head
        ctx.fillStyle = `rgba(${v.color},0.9)`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = `rgba(${v.color},0.8)`;
        ctx.beginPath();
        ctx.arc(x1, y1, 1.6, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      if (!reduce) raf = requestAnimationFrame(draw);
    }

    resize();
    if (reduce) {
      drawGrid(); // static grid only
    } else {
      draw();
    }
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="traffic-grid" aria-hidden="true" />;
}