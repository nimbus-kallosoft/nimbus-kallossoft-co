"use client";

const useCases = [
  {
    icon: "💻",
    category: "Coding",
    title: "Build features in seconds",
    bullets: [
      "Describe the feature, get working code",
      "Semantic code search across 11k+ nodes",
      "Automated testing & deployment",
      "PR creation with description",
    ],
    accent: "#a78bfa",
  },
  {
    icon: "🔬",
    category: "Research",
    title: "Synthesize the web instantly",
    bullets: [
      "Browse, scrape & summarize sources",
      "Competitive analysis on demand",
      "Knowledge graph stores findings",
      "Export to docs or slides",
    ],
    accent: "#60a5fa",
  },
  {
    icon: "⚙️",
    category: "Automation",
    title: "Run complex workflows hands-free",
    bullets: [
      "Schedule cron jobs with a sentence",
      "WhatsApp / email pipelines",
      "Monitor & alert on conditions",
      "Connect any tool via API",
    ],
    accent: "#34d399",
  },
  {
    icon: "✍️",
    category: "Content Creation",
    title: "Generate, refine & publish",
    bullets: [
      "Blog posts, docs, copy — all styles",
      "AI image generation & editing",
      "Auto-post to channels",
      "SEO optimization built in",
    ],
    accent: "#f472b6",
  },
  {
    icon: "🛠️",
    category: "DevOps",
    title: "Ship & scale without friction",
    bullets: [
      "Vercel, Cloudflare, Docker management",
      "Infrastructure-as-conversation",
      "Incident triage & root cause",
      "Env & secrets management",
    ],
    accent: "#fbbf24",
  },
];

export default function UseCases() {
  return (
    <section id="use-cases" className="relative py-28 px-4 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(52,211,153,0.04) 0%, transparent 60%)",
        }}
      />
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="tag-pill inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-widest mb-6"
            style={{ color: "#fbbf24" }}
          >
            Use Cases
          </span>
          <h2
            className="text-4xl sm:text-5xl font-bold mb-5 leading-tight"
            style={{ color: "#f0f0ff" }}
          >
            What will you{" "}
            <span className="gradient-text">build with Nimbus?</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "rgba(240,240,255,0.5)" }}>
            From solo developers to teams — Nimbus adapts to how you work.
          </p>
        </div>

        {/* Use case grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {useCases.map((uc, i) => (
            <div
              key={uc.category}
              className="rounded-2xl p-6 transition-all duration-300 group"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = `${uc.accent}08`;
                el.style.borderColor = `${uc.accent}33`;
                el.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "rgba(255,255,255,0.02)";
                el.style.borderColor = "rgba(255,255,255,0.06)";
                el.style.transform = "translateY(0)";
              }}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{uc.icon}</span>
                <span
                  className="text-xs font-bold uppercase tracking-widest"
                  style={{ color: uc.accent }}
                >
                  {uc.category}
                </span>
              </div>

              <h3
                className="text-lg font-bold mb-4"
                style={{ color: "#f0f0ff" }}
              >
                {uc.title}
              </h3>

              <ul className="space-y-2">
                {uc.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-2 text-sm"
                    style={{ color: "rgba(240,240,255,0.5)" }}
                  >
                    <span style={{ color: uc.accent, marginTop: "2px", flexShrink: 0 }}>→</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* CTA card */}
          <div
            className="rounded-2xl p-6 flex flex-col items-center justify-center text-center"
            style={{
              background: "linear-gradient(135deg, rgba(124,58,237,0.15), rgba(59,130,246,0.15))",
              border: "1px solid rgba(167,139,250,0.3)",
            }}
          >
            <div className="text-4xl mb-4">✨</div>
            <h3 className="text-lg font-bold mb-2" style={{ color: "#f0f0ff" }}>
              Your workflow
            </h3>
            <p className="text-sm mb-6" style={{ color: "rgba(240,240,255,0.5)" }}>
              Nimbus adapts to any task. If you can describe it, Nimbus can do it.
            </p>
            <span
              className="text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 hover:scale-105 cursor-pointer"
              style={{
                background: "linear-gradient(135deg, #7c3aed, #3b82f6)",
                color: "#fff",
              }}
            >
              Get started →
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
