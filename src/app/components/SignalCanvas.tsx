"use client";

import { useEffect, useRef } from "react";

/**
 * SignalCanvas — a live procedural signal field.
 * Renders concentric rings + drifting particles that react to cursor proximity.
 * The visual is a metaphor for "systems that keep running after the demo stops."
 */
export default function SignalCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let W = 0, H = 0, raf = 0, frame = 0;
    const pointer = { x: 0.5, y: 0.5, active: false };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      W = rect.width; H = rect.height;
      canvas.width = Math.max(1, W * dpr);
      canvas.height = Math.max(1, H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = (e.clientX - rect.left) / rect.width;
      pointer.y = (e.clientY - rect.top) / rect.height;
      pointer.active = true;
    };
    const onLeave = () => { pointer.active = false; };

    const draw = () => {
      frame += reduced ? 0 : 1;
      ctx.clearRect(0, 0, W, H);

      const cx = (pointer.active ? pointer.x : 0.5 + Math.sin(frame * 0.003) * 0.12) * W;
      const cy = (pointer.active ? pointer.y : 0.5 + Math.cos(frame * 0.004) * 0.08) * H;
      const grid = Math.max(30, Math.min(48, W / 12));

      // Grid
      ctx.strokeStyle = "rgba(245,241,232,0.06)";
      ctx.lineWidth = 1;
      for (let x = 0; x < W + grid; x += grid) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
      }
      for (let y = 0; y < H + grid; y += grid) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
      }

      // Rings
      ctx.globalCompositeOperation = "screen";
      for (let ring = 0; ring < 7; ring++) {
        const r = 40 + ring * 36 + Math.sin(frame * 0.012 + ring) * 5;
        ctx.beginPath();
      ctx.ellipse(cx, cy, r * 1.3, r, Math.sin(frame * 0.002) * 0.2, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(232, 31, 22, ${0.3 - ring * 0.03})`;
        ctx.lineWidth = ring % 3 === 0 ? 2 : 1;
        ctx.stroke();
      }

      // Particles
      for (let i = 0; i < 80; i++) {
        const a = i * 2.399 + frame * 0.002;
        const r = 20 + ((i * 31 + frame * 0.6) % Math.max(180, W * 0.5));
        const x = cx + Math.cos(a) * r * 1.15;
        const y = cy + Math.sin(a * 1.2) * r * 0.6;
        if (x < 0 || x > W || y < 0 || y > H) continue;
        ctx.fillStyle = `rgba(232, 31, 22, ${0.12 + (i % 5) * 0.03})`;
        ctx.fillRect(x, y, i % 9 === 0 ? 18 : 4, 1.5);
      }
      ctx.globalCompositeOperation = "source-over";

      // Crosshair
      ctx.strokeStyle = "rgba(245,241,232,0.3)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(cx - 32, cy); ctx.lineTo(cx + 32, cy);
      ctx.moveTo(cx, cy - 32); ctx.lineTo(cx, cy + 32);
      ctx.stroke();

      // Giant ghost letter
      ctx.font = `${Math.max(72, W * 0.2)}px Georgia, serif`;
      ctx.fillStyle = "rgba(245,241,232,0.04)";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("T", W * 0.5, H * 0.52);

      if (!reduced) raf = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    canvas.addEventListener("pointermove", onMove);
    canvas.addEventListener("pointerleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div className="canvas-wrap">
      <canvas ref={canvasRef} />
      <div className="canvas-overlay">
        <div className="top">
          <span>signal field · live</span>
          <span className="live"><span className="dot" /> ACTIVE</span>
        </div>
        <div className="bottom">
          <span>cursor reactive</span>
          <span>no stock art</span>
        </div>
      </div>
    </div>
  );
}