"use client";

import { motion } from "framer-motion";

const clusters = [
  {
    id: "intelligence",
    label: "Intelligence",
    emoji: "🧩",
    color: "#a78bfa",
    bg: "rgba(167,139,250,0.08)",
    border: "rgba(167,139,250,0.2)",
    glow: "rgba(167,139,250,0.15)",
    title: "Multi-Agent Orchestration",
    desc: "Specialist agents working in concert — planner, coder, researcher, voice, browser, data, files, and deploy. Smart dispatching, parallel execution, zero friction.",
    bullets: ["8 specialist agents", "Parallel task execution", "Model selection: Claude, Gemini, GLM, Kimi"],
  },
  {
    id: "communication",
    label: "Communication",
    emoji: "💬",
    color: "#4ade80",
    bg: "rgba(74,222,128,0.08)",
    border: "rgba(74,222,128,0.2)",
    glow: "rgba(74,222,128,0.15)",
    title: "All Your Channels",
    desc: "WhatsApp voice notes, Telegram, Discord, Signal, Gmail — Nimbus is where your conversations happen, not just where you work.",
    bullets: ["WhatsApp & Telegram", "Gmail integration", "Discord & Signal"],
  },
  {
    id: "development",
    label: "Development",
    emoji: "⚡",
    color: "#fbbf24",
    bg: "rgba(251,191,36,0.08)",
    border: "rgba(251,191,36,0.2)",
    glow: "rgba(251,191,36,0.15)",
    title: "Code Intelligence",
    desc: "11,000+ node code graph with semantic search. GitHub integration, Claude Code CLI, database management — understand and transform any codebase instantly.",
    bullets: ["11k+ node code graph", "GitHub: repos, PRs, issues", "Bash, Python, Node execution"],
  },
  {
    id: "automation",
    label: "Automation",
    emoji: "⚙️",
    color: "#60a5fa",
    bg: "rgba(96,165,250,0.08)",
    border: "rgba(96,165,250,0.2)",
    glow: "rgba(96,165,250,0.15)",
    title: "Automation & Control",
    desc: "Cron jobs by conversation. Browser automation with Playwright. Background process management, heartbeat monitoring, and macOS deep integration.",
    bullets: ["Cron & scheduling", "Playwright browser control", "macOS system access"],
  },
  {
    id: "media",
    label: "Media & Voice",
    emoji: "🎤",
    color: "#f472b6",
    bg: "rgba(244,114,182,0.08)",
    border: "rgba(244,114,182,0.2)",
    glow: "rgba(244,114,182,0.15)",
    title: "Voice & AI Media",
    desc: "Real-time TTS/STT with Kokoro, Whisper, and Google Meet integration. Image generation and analysis with Gemini — see and speak, not just type.",
    bullets: ["TTS: Kokoro, Edge TTS", "STT: Whisper, Google STT", "Image gen & vision analysis"],
  },
  {
    id: "memory",
    label: "Memory & Data",
    emoji: "🧠",
    color: "#34d399",
    bg: "rgba(52,211,153,0.08)",
    border: "rgba(52,211,153,0.2)",
    glow: "rgba(52,211,153,0.15)",
    title: "Knowledge & Memory",
    desc: "A living Knowledge Graph of entities and relationships. Structured memory in PostgreSQL, vector search, file management — Nimbus never forgets.",
    bullets: ["Knowledge Graph", "PostgreSQL + vector search", "File operations & storage"],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] as const } },
};

export default function Capabilities() {
  return (
    <section id="capabilities" className="relative py-28 px-4 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(96,165,250,0.04) 0%, transparent 70%)",
        }}
      />
      <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <span
            className="tag-pill inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-widest mb-6"
            style={{ color: "#a78bfa" }}
          >
            Capabilities
          </span>
          <h2
            className="text-4xl sm:text-5xl font-bold mb-5 leading-tight"
            style={{ color: "#f0f0ff" }}
          >
            Six domains.{" "}
            <span className="gradient-text">Infinite leverage.</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "rgba(240,240,255,0.5)" }}>
            Nimbus isn&apos;t a single tool — it&apos;s a complete operating environment. Every cluster works together.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {clusters.map((cap) => (
            <motion.div
              key={cap.id}
              className="group rounded-2xl p-6 transition-all duration-300 cursor-default"
              style={{
                background: cap.bg,
                border: `1px solid ${cap.border}`,
              }}
              variants={cardVariants}
              whileHover={{
                y: -4,
                boxShadow: `0 16px 48px ${cap.glow}`,
                borderColor: cap.color + "55",
              }}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{cap.emoji}</span>
                <span
                  className="text-xs font-bold uppercase tracking-widest"
                  style={{ color: cap.color }}
                >
                  {cap.label}
                </span>
              </div>

              <h3
                className="text-base font-bold mb-2"
                style={{ color: "#f0f0ff" }}
              >
                {cap.title}
              </h3>
              <p
                className="text-sm leading-relaxed mb-4"
                style={{ color: "rgba(240,240,255,0.5)" }}
              >
                {cap.desc}
              </p>

              {/* Bullets */}
              <ul className="space-y-1">
                {cap.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-center gap-2 text-xs"
                    style={{ color: "rgba(240,240,255,0.4)" }}
                  >
                    <span style={{ color: cap.color }}>→</span>
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          className="mt-16 flex flex-wrap justify-center gap-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {[
            { num: "8", label: "Specialist Agents" },
            { num: "6", label: "Capability Clusters" },
            { num: "11k+", label: "Code Graph Nodes" },
            { num: "∞", label: "Possibilities" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-4xl font-black gradient-text mb-1">{stat.num}</div>
              <div className="text-sm" style={{ color: "rgba(240,240,255,0.4)" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
