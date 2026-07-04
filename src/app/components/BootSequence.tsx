"use client";

import { useEffect, useState } from "react";

const LOG_LINES = [
  { text: "Initializing workspace...", delay: 100 },
  { text: "Loading spatial intelligence modules", delay: 200 },
  { text: "RAG pipeline — <span class='ok'>OK</span>", delay: 300 },
  { text: "GIS engine — <span class='ok'>OK</span>", delay: 350 },
  { text: "Agent runtime — <span class='ok'>OK</span>", delay: 400 },
  { text: "Trading pipeline — <span class='warn'>PAPER MODE</span>", delay: 450 },
  { text: "VPS infrastructure — <span class='ok'>ONLINE</span>", delay: 500 },
  { text: "Calibrating bullshit detector...", delay: 550 },
  { text: "Workspace ready.", delay: 600 },
];

export default function BootSequence() {
  const [done, setDone] = useState(false);
  const [lines, setLines] = useState<number>(0);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    LOG_LINES.forEach((_, i) => {
      timers.push(setTimeout(() => setLines(i + 1), LOG_LINES[i].delay + i * 80));
    });
    timers.push(setTimeout(() => setDone(true), 2200));
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className={`boot-screen ${done ? "done" : ""}`}>
      <div className="boot-logo">
        TC<span className="cursor" />
      </div>
      <div className="boot-log">
        {LOG_LINES.slice(0, lines).map((line, i) => (
          <div
            key={i}
            className="boot-log-line"
            style={{ animationDelay: `${i * 0.02}s` }}
            dangerouslySetInnerHTML={{ __html: `> ${line.text}` }}
          />
        ))}
      </div>
      <div className="boot-bar">
        <div className="boot-bar-fill" />
      </div>
    </div>
  );
}