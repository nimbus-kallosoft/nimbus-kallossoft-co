"use client";

const capabilities = [
  {
    emoji: "🧩",
    title: "Multi-Agent Orchestration",
    desc: "8 specialist agents working together — planner, coder, researcher, voice, browser, data, files, and deploy — all coordinated by a smart dispatcher.",
    color: "#a78bfa",
    bg: "rgba(167,139,250,0.08)",
    border: "rgba(167,139,250,0.2)",
  },
  {
    emoji: "🎤",
    title: "Voice Conversations",
    desc: "Real-time speech-to-text and text-to-speech with Google Meet integration. Talk naturally, get things done.",
    color: "#f472b6",
    bg: "rgba(244,114,182,0.08)",
    border: "rgba(244,114,182,0.2)",
  },
  {
    emoji: "🧠",
    title: "Knowledge Graph",
    desc: "Persistent memory with relationships and project context. Nimbus remembers everything that matters.",
    color: "#34d399",
    bg: "rgba(52,211,153,0.08)",
    border: "rgba(52,211,153,0.2)",
  },
  {
    emoji: "⚡",
    title: "Code Intelligence",
    desc: "11,000+ node code graph with semantic search. Understand, navigate, and transform large codebases instantly.",
    color: "#fbbf24",
    bg: "rgba(251,191,36,0.08)",
    border: "rgba(251,191,36,0.2)",
  },
  {
    emoji: "🌐",
    title: "Browser Automation",
    desc: "Playwright-powered browsing, screenshots, web scraping, and form interaction — all hands-free.",
    color: "#60a5fa",
    bg: "rgba(96,165,250,0.08)",
    border: "rgba(96,165,250,0.2)",
  },
  {
    emoji: "💬",
    title: "WhatsApp & Email",
    desc: "Send and receive WhatsApp messages, voice notes, and Gmail — Nimbus handles your communications pipeline.",
    color: "#4ade80",
    bg: "rgba(74,222,128,0.08)",
    border: "rgba(74,222,128,0.2)",
  },
  {
    emoji: "🎨",
    title: "Image Generation",
    desc: "AI-powered image creation and analysis. Generate illustrations, diagrams, and visuals on demand.",
    color: "#fb923c",
    bg: "rgba(251,146,60,0.08)",
    border: "rgba(251,146,60,0.2)",
  },
  {
    emoji: "🗄️",
    title: "Database & Search",
    desc: "PostgreSQL, Supabase, and vector search — structured storage, embeddings, and semantic retrieval built in.",
    color: "#38bdf8",
    bg: "rgba(56,189,248,0.08)",
    border: "rgba(56,189,248,0.2)",
  },
  {
    emoji: "🍎",
    title: "macOS Integration",
    desc: "Deep system access — CLI tools, cron jobs, file management, app control, and native OS interactions.",
    color: "#e879f9",
    bg: "rgba(232,121,249,0.08)",
    border: "rgba(232,121,249,0.2)",
  },
  {
    emoji: "🚀",
    title: "Infrastructure",
    desc: "Vercel, Cloudflare, GitHub, Docker — deploy and manage your entire stack from a single conversation.",
    color: "#f87171",
    bg: "rgba(248,113,113,0.08)",
    border: "rgba(248,113,113,0.2)",
  },
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="relative py-28 px-4 overflow-hidden">
      {/* Background decoration */}
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
        <div className="text-center mb-16">
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
            Everything you need,{" "}
            <span className="gradient-text">already wired up</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "rgba(240,240,255,0.5)" }}>
            Ten specialized capabilities that work together seamlessly — no glue code required.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {capabilities.map((cap, i) => (
            <div
              key={cap.title}
              className="group rounded-2xl p-6 transition-all duration-300 cursor-default"
              style={{
                background: cap.bg,
                border: `1px solid ${cap.border}`,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
                (e.currentTarget as HTMLElement).style.boxShadow = `0 12px 40px ${cap.bg}`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              <div className="text-3xl mb-4">{cap.emoji}</div>
              <h3
                className="text-base font-bold mb-2"
                style={{ color: cap.color }}
              >
                {cap.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "rgba(240,240,255,0.5)" }}
              >
                {cap.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom stat */}
        <div className="mt-16 flex flex-wrap justify-center gap-12 text-center">
          {[
            { num: "8", label: "Specialist Agents" },
            { num: "10+", label: "Integrations" },
            { num: "11k+", label: "Code Graph Nodes" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-4xl font-black gradient-text mb-1">{stat.num}</div>
              <div className="text-sm" style={{ color: "rgba(240,240,255,0.4)" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
