import BootSequence from "./components/BootSequence";
import SignalCanvas from "./components/SignalCanvas";
import LiveClock from "./components/LiveClock";
import Reveal from "./components/Reveal";

const work = [
  {
    name: "Urban Planning RAG",
    kind: "Document Intelligence",
    summary: "A source-cited retrieval system for planning regulations. Dense PDFs become searchable answers with clause and page references.",
    proves: "Messy documents can become reliable software when citation, parsing, and retrieval quality are treated as the product.",
    stack: ["RAG", "PDF parsing", "Embeddings", "Citations"],
    link: "https://github.com/tanmayxchoudhary/urban-planning-rag",
  },
  {
    name: "Spatial Atlases",
    kind: "GIS & Planning Evidence",
    summary: "City-scale evidence work across LULC, LST, NDVI, surveys, suitability models, and map-based decision support.",
    proves: "I can move between planning questions and the technical pipeline behind the map without losing the plot.",
    stack: ["QGIS", "Remote sensing", "NDVI", "Suitability"],
    link: "#",
  },
  {
    name: "Agent Workspace",
    kind: "Automation Infrastructure",
    summary: "A VPS-based workspace for long-running agents, cron reports, Discord handoffs, monitoring, and autonomous research loops.",
    proves: "Useful automation is not the demo. It's the part that keeps running after the demo stops being exciting.",
    stack: ["Agents", "Cron", "Discord", "VPS"],
    link: "#",
  },
  {
    name: "ATLAS",
    kind: "ML & Live Data",
    summary: "A tennis prediction and odds pipeline with daily cards, value detection, paper-trading settlement, and feedback loops.",
    proves: "I build around live data, evaluation, and uncomfortable reality checks instead of flattering metrics.",
    stack: ["Python", "ML", "Odds API", "Evaluation"],
    link: "#",
  },
  {
    name: "ICT Trading Pipeline",
    kind: "Live Trading Systems",
    summary: "An ICT-based trading bot running against OANDA with MT5 crypto execution, confluence detection, and live paper settlement.",
    proves: "Money is a bullshit detector. If the system doesn't survive live data, the backtest is fiction.",
    stack: ["OANDA", "MT5", "Python", "Live"],
    link: "#",
  },
  {
    name: "Niney",
    kind: "Autonomous Agent",
    summary: "A persistent AI agent on a VPS — memory, skills, sessions, cron loops, multi-model routing, and self-improvement with receipts.",
    proves: "The most interesting system I've built is the one building alongside me. Continuity is external.",
    stack: ["Agents", "Memory", "Cron", "Multi-model"],
    link: "#",
  },
];

const capabilities = [
  ["AI Automation", "Agents, cron loops, autonomous research, and workflow orchestration that keeps running."],
  ["RAG & Document Systems", "Retrieval pipelines with citations, parsing, embeddings, and quality as the product."],
  ["GIS & Spatial Analysis", "QGIS, remote sensing, suitability models, and map-backed decision support."],
  ["Scrapers & APIs", "Data collection pipelines that survive rate limits, captchas, and schema drift."],
  ["Dashboards & Reporting", "Real-time monitoring, operational dashboards, and automated report generation."],
  ["VPS Infrastructure", "Self-hosted, privacy-first systems with agents, monitoring, and zero downtime tolerance."],
];

const monitor = [
  { label: "Projects Shipped", value: "6", unit: "above the waistline", pct: 75 },
  { label: "GATE Score", value: "656", unit: "AIR 123 · OBC-NCL", pct: 91 },
  { label: "Uptime", value: "99.9%", unit: "VPS never sleeps", pct: 99 },
  { label: "Systems Running", value: "12+", unit: "agents, crons, pipelines", pct: 80 },
];

export default function Home() {
  return (
    <>
      <BootSequence />

      <div className="shell">
        {/* NAV */}
        <nav className="nav">
          <a href="#top" className="nav-brand">
            <span className="mark">T</span>
            <span>Tanmay Choudhary</span>
          </a>
          <div className="nav-status">
            <span className="dot" />
            <span>SYSTEMS ONLINE</span>
          </div>
          <div className="nav-links">
            <a href="#work">Work</a>
            <a href="#system">System</a>
            <a href="#capabilities">Capabilities</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        {/* HERO */}
        <section className="hero" id="top">
          <div className="hero-eyebrow">
            <span>Systems &amp; Spatial Intelligence</span>
            <span className="line" />
            <span>Bhopal, India</span>
          </div>
          <h1 className="hero-title">
            I build systems that <span className="accent">survive</span> contact with reality.
          </h1>
          <p className="hero-sub">
            <strong>Tanmay Choudhary.</strong>{" "}Urban planner turned systems builder.
            I make RAG tools, GIS evidence, scrapers, autonomous agents, trading pipelines,
            and the infrastructure that keeps them running. The standard is simple:
            it runs, it survives real inputs, and it&apos;s clear enough to hand off.
          </p>
          <div className="hero-meta">
            <div className="hero-meta-item">
              <span className="label">Base</span>
              <span className="value">MANIT Bhopal</span>
            </div>
            <div className="hero-meta-item">
              <span className="label">Gate</span>
              <span className="value">656 · AIR 123</span>
            </div>
            <div className="hero-meta-item">
              <span className="label">Focus</span>
              <span className="value">Systems, maps, agents</span>
            </div>
            <div className="hero-meta-item">
              <span className="label">Mode</span>
              <span className="value">Freelance builds</span>
            </div>
            <div className="hero-meta-item">
              <span className="label">Time</span>
              <span className="value"><LiveClock /></span>
            </div>
          </div>
        </section>

        {/* SIGNAL CANVAS */}
        <section className="section" id="signal">
          <Reveal>
            <div className="section-header">
              <h2>Signal field</h2>
              <span className="tag">live · cursor reactive</span>
            </div>
            <SignalCanvas />
            <p className="section-lede" style={{ marginTop: "24px" }}>
              This isn&apos;t a stock graphic. It&apos;s a live canvas — drawing 80 drifting particles,
              7 concentric rings, and a cursor-tracking crosshair at 60fps. Move your cursor over it.
              The signal follows you. This is how I think about systems: they should respond to what&apos;s actually there,
              not what looks good in a screenshot.
            </p>
          </Reveal>
        </section>

        {/* WORK */}
        <section className="section" id="work">
          <Reveal>
            <div className="section-header">
              <h2>Selected work</h2>
              <span className="tag">evidence, not decoration</span>
            </div>
            <p className="section-lede">
              No fake logos, no inflated numbers, no stock case-study cosplay.
              This is the proof layer: what was built, what it demonstrates, what it says about how I work.
            </p>
          </Reveal>
          <div className="work-grid">
            {work.map((item, i) => (
              <Reveal key={item.name} delay={i * 60}>
                <a href={item.link} className="work-card" style={{ textDecoration: "none" }}>
                  <span className="index">{String(i + 1).padStart(2, "0")} / {String(work.length).padStart(2, "0")}</span>
                  <span className="kind">{item.kind}</span>
                  <h3>{item.name}</h3>
                  <p className="summary">{item.summary}</p>
                  <div className="tags">
                    {item.stack.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                  <p className="proves"><b>Proves:</b> {item.proves}</p>
                </a>
              </Reveal>
            ))}
          </div>
        </section>

        {/* SYSTEM MONITOR */}
        <section className="section" id="system">
          <Reveal>
            <div className="section-header">
              <h2>System monitor</h2>
              <span className="tag">current state</span>
            </div>
            <p className="section-lede">
              Builder, planner, automation gremlin, currently for hire.
              B.Plan from MANIT Bhopal. GATE 2026 score 656, AIR 123 OBC-NCL.
              I work across AI systems, geospatial analysis, document intelligence,
              and production automation.
            </p>
          </Reveal>
          <div className="monitor">
            {monitor.map((cell, i) => (
              <Reveal key={cell.label} delay={i * 80}>
                <div className="monitor-cell">
                  <div className="label">{cell.label}</div>
                  <div className="value">{cell.value}</div>
                  <div className="unit">{cell.unit}</div>
                  <div className="bar">
                    <div className="bar-fill" style={{ width: `${cell.pct}%` }} />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* CAPABILITIES */}
        <section className="section" id="capabilities">
          <Reveal>
            <div className="section-header">
              <h2>Capabilities</h2>
              <span className="tag">where I&apos;m useful</span>
            </div>
            <p className="section-lede">
              I&apos;m best when the work has technical ambiguity, scattered inputs,
              and a need for a working artifact rather than a strategy document.
            </p>
          </Reveal>
          <div className="cap-list">
            {capabilities.map(([title, desc], i) => (
              <Reveal key={title} delay={i * 40}>
                <div className="cap-row">
                  <span className="num">{String(i + 1).padStart(2, "0")}</span>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                  <span className="arrow">→</span>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section className="section" id="contact">
          <Reveal>
            <div className="section-header">
              <h2>Contact</h2>
              <span className="tag">let&apos;s build</span>
            </div>
          </Reveal>
          <div className="contact-grid">
            <Reveal>
              <div className="contact-cell">
                <div className="label">Available for work</div>
                <h3>Send a brief.</h3>
                <p>
                  Have a workflow, data problem, map, scraper, dashboard, or AI prototype
                  that needs to become real? I build the proof first so scope stops being theater.
                </p>
                <a
                  href="mailto:tanmayxchoudhary@gmail.com?subject=Work%20brief"
                  className="cta"
                >
                  Send a brief →
                </a>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="contact-cell">
                <div className="label">Elsewhere</div>
                <div className="contact-links">
                  <a
                    href="https://x.com/0x9T9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link"
                  >
                    <span className="platform">
                      <span className="icon">X</span>
                      <span>X / Twitter</span>
                    </span>
                    <span className="handle">@0x9T9</span>
                  </a>
                  <a
                    href="https://github.com/tanmayxchoudhary"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link"
                  >
                    <span className="platform">
                      <span className="icon">G</span>
                      <span>GitHub</span>
                    </span>
                    <span className="handle">tanmayxchoudhary</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/tanmayxchoudhary"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link"
                  >
                    <span className="platform">
                      <span className="icon">in</span>
                      <span>LinkedIn</span>
                    </span>
                    <span className="handle">tanmayxchoudhary</span>
                  </a>
                  <a
                    href="mailto:tanmayxchoudhary@gmail.com?subject=Work%20brief"
                    className="contact-link"
                  >
                    <span className="platform">
                      <span className="icon">@</span>
                      <span>Email</span>
                    </span>
                    <span className="handle">tanmayxchoudhary@gmail.com</span>
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="footer">
          <div className="footer-row">
            <span className="sig">Tanmay Choudhary · Bhopal, India</span>
            <span>B.Plan · MANIT · GATE 656 · AIR 123</span>
            <span>Designed &amp; built end-to-end</span>
          </div>
        </footer>
      </div>
    </>
  );
}