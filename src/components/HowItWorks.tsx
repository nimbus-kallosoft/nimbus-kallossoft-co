import { MessageCircle, Cpu, CheckCircle2 } from "lucide-react";

const steps = [
  {
    icon: <MessageCircle size={28} />,
    number: "01",
    title: "You talk",
    desc: "Describe what you need in plain language — via text, voice, WhatsApp, or any connected channel. No commands, no syntax.",
    detail: "Natural language · Voice · Any channel",
    color: "#a78bfa",
    glow: "rgba(167,139,250,0.2)",
  },
  {
    icon: <Cpu size={28} />,
    number: "02",
    title: "Nimbus plans",
    desc: "The orchestrator breaks your request into subtasks, picks the right specialists, and sequences the work — automatically.",
    detail: "Orchestration · Planning · Context",
    color: "#60a5fa",
    glow: "rgba(96,165,250,0.2)",
  },
  {
    icon: <CheckCircle2 size={28} />,
    number: "03",
    title: "Agents execute",
    desc: "Specialist agents handle their piece in parallel — coding, browsing, deploying, communicating — and report back when done.",
    detail: "Parallel execution · Real results",
    color: "#34d399",
    glow: "rgba(52,211,153,0.2)",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-28 px-4 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 50% 50%, rgba(167,139,250,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <span
            className="tag-pill inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-widest mb-6"
            style={{ color: "#34d399" }}
          >
            How it works
          </span>
          <h2
            className="text-4xl sm:text-5xl font-bold mb-5 leading-tight"
            style={{ color: "#f0f0ff" }}
          >
            Three steps.{" "}
            <span className="gradient-text">Infinite possibilities.</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "rgba(240,240,255,0.5)" }}>
            The magic is in the coordination. You focus on what you want — Nimbus handles the how.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div
            className="absolute hidden lg:block top-16 left-1/2 -translate-x-1/2 h-0.5 step-line"
            style={{ width: "calc(100% - 200px)" }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
            {steps.map((step, i) => (
              <div key={step.number} className="relative flex flex-col items-center text-center group">
                {/* Step number bubble */}
                <div
                  className="relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: `radial-gradient(circle, ${step.glow}, rgba(5,5,16,0.5))`,
                    border: `1px solid ${step.color}44`,
                    color: step.color,
                    boxShadow: `0 0 24px ${step.glow}`,
                  }}
                >
                  {step.icon}
                </div>

                {/* Step number label */}
                <div
                  className="text-xs font-mono font-bold mb-2 tracking-widest"
                  style={{ color: step.color }}
                >
                  STEP {step.number}
                </div>

                <h3
                  className="text-2xl font-bold mb-4"
                  style={{ color: "#f0f0ff" }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-sm leading-relaxed mb-4 max-w-xs"
                  style={{ color: "rgba(240,240,255,0.5)" }}
                >
                  {step.desc}
                </p>
                <span
                  className="text-xs px-3 py-1 rounded-full font-mono"
                  style={{
                    background: `${step.color}11`,
                    border: `1px solid ${step.color}33`,
                    color: step.color,
                  }}
                >
                  {step.detail}
                </span>

                {/* Arrow between steps (mobile) */}
                {i < steps.length - 1 && (
                  <div
                    className="lg:hidden mt-8 text-2xl"
                    style={{ color: "rgba(240,240,255,0.15)" }}
                  >
                    ↓
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Example prompt */}
        <div className="mt-20 max-w-2xl mx-auto">
          <div
            className="rounded-2xl p-6 font-mono text-sm"
            style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full" style={{ background: "#ff5f57" }} />
              <div className="w-3 h-3 rounded-full" style={{ background: "#febc2e" }} />
              <div className="w-3 h-3 rounded-full" style={{ background: "#28c840" }} />
              <span className="ml-2 text-xs" style={{ color: "rgba(240,240,255,0.3)" }}>nimbus terminal</span>
            </div>
            <p style={{ color: "rgba(240,240,255,0.4)" }}>
              <span style={{ color: "#a78bfa" }}>you</span>
              <span style={{ color: "rgba(240,240,255,0.2)" }}> &gt; </span>
              <span style={{ color: "#f0f0ff" }}>
                &ldquo;Research the top 5 React component libraries, create a comparison doc, and post a summary to our team Slack.&rdquo;
              </span>
            </p>
            <p className="mt-3" style={{ color: "rgba(240,240,255,0.4)" }}>
              <span style={{ color: "#34d399" }}>nimbus</span>
              <span style={{ color: "rgba(240,240,255,0.2)" }}> &gt; </span>
              <span>Dispatching research agent... browser agent... writer agent... Done in 47s ✓</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
