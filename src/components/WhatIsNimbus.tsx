import { Brain, Layers, Workflow } from "lucide-react";

export default function WhatIsNimbus() {
  const pillars = [
    {
      icon: <Brain size={24} />,
      title: "Think",
      desc: "Nimbus understands context, remembers your preferences, and reasons across your entire world.",
    },
    {
      icon: <Workflow size={24} />,
      title: "Coordinate",
      desc: "A dispatcher orchestrates specialist agents — each an expert in its domain — to tackle complex tasks.",
    },
    {
      icon: <Layers size={24} />,
      title: "Execute",
      desc: "From writing code to sending emails to deploying infrastructure — Nimbus gets things done.",
    },
  ];

  return (
    <section id="about" className="relative py-28 px-4">
      {/* Section glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(167,139,250,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Label */}
        <div className="text-center mb-16">
          <span
            className="tag-pill inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-widest mb-6"
            style={{ color: "#60a5fa" }}
          >
            What is Nimbus
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight" style={{ color: "#f0f0ff" }}>
            A complete{" "}
            <span className="gradient-text">AI operating environment</span>
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: "rgba(240,240,255,0.55)" }}
          >
            Nimbus isn&apos;t a single chatbot. It&apos;s an entire ecosystem of AI agents — each specialized, all collaborative — living inside your development environment and daily workflow.
          </p>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className="gradient-border rounded-2xl p-8 text-center transition-all duration-300"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div
                className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-5 mx-auto"
                style={{
                  background: "rgba(167,139,250,0.1)",
                  color: "#a78bfa",
                }}
              >
                {p.icon}
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: "#f0f0ff" }}>
                {p.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(240,240,255,0.5)" }}>
                {p.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="mt-16 text-center">
          <p
            className="text-2xl sm:text-3xl font-light italic max-w-2xl mx-auto leading-relaxed"
            style={{ color: "rgba(240,240,255,0.6)" }}
          >
            &ldquo;Not another AI wrapper — a new way to work.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
