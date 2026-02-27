"use client";

import { Sparkles, Zap, ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 hero-bg grid-bg overflow-hidden">
      {/* Animated orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute w-96 h-96 rounded-full blur-3xl animate-pulse-glow"
          style={{
            background: "radial-gradient(circle, rgba(167,139,250,0.15) 0%, transparent 70%)",
            top: "10%",
            left: "10%",
          }}
        />
        <div
          className="absolute w-80 h-80 rounded-full blur-3xl animate-pulse-glow"
          style={{
            background: "radial-gradient(circle, rgba(96,165,250,0.12) 0%, transparent 70%)",
            bottom: "15%",
            right: "10%",
            animationDelay: "1.2s",
          }}
        />
        <div
          className="absolute w-64 h-64 rounded-full blur-3xl animate-pulse-glow"
          style={{
            background: "radial-gradient(circle, rgba(52,211,153,0.1) 0%, transparent 70%)",
            top: "50%",
            right: "25%",
            animationDelay: "0.6s",
          }}
        />
      </div>

      {/* Badge */}
      <div className="relative z-10 mb-8 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
        <span className="tag-pill inline-flex items-center gap-2 px-4 py-2 text-sm font-medium" style={{ color: "#a78bfa" }}>
          <Sparkles size={14} className="animate-pulse-glow" />
          AI Operating Environment
        </span>
      </div>

      {/* Main headline */}
      <div className="relative z-10 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
        <h1 className="text-7xl sm:text-8xl md:text-9xl font-black tracking-tighter mb-6 leading-none">
          <span className="gradient-text">Nimbus</span>
        </h1>
      </div>

      {/* Subheadline */}
      <div className="relative z-10 animate-fade-in-up" style={{ animationDelay: "0.35s" }}>
        <p className="text-xl sm:text-2xl md:text-3xl font-light max-w-2xl mb-4 leading-relaxed" style={{ color: "rgba(240,240,255,0.75)" }}>
          Your AI companion that{" "}
          <span style={{ color: "#a78bfa", fontWeight: 500 }}>thinks</span>,{" "}
          <span style={{ color: "#60a5fa", fontWeight: 500 }}>coordinates</span>, and{" "}
          <span style={{ color: "#34d399", fontWeight: 500 }}>executes</span>
        </p>
        <p className="text-base sm:text-lg max-w-xl mx-auto" style={{ color: "rgba(240,240,255,0.45)" }}>
          8 specialist agents working in concert — so you don&apos;t have to think about it.
        </p>
      </div>

      {/* CTA */}
      <div className="relative z-10 flex flex-col sm:flex-row gap-4 mt-10 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
        <a
          href="#capabilities"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105"
          style={{
            background: "linear-gradient(135deg, #7c3aed, #3b82f6)",
            color: "#fff",
            boxShadow: "0 0 30px rgba(124, 58, 237, 0.4)",
          }}
        >
          <Zap size={16} />
          Explore Capabilities
        </a>
        <a
          href="#how-it-works"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105 gradient-border"
          style={{ color: "rgba(240,240,255,0.85)" }}
        >
          How it works
        </a>
      </div>

      {/* Agent orbit visualization */}
      <div className="relative z-10 mt-16 animate-fade-in-up" style={{ animationDelay: "0.65s" }}>
        <div className="flex flex-wrap justify-center gap-3 max-w-lg">
          {[
            "🧠 Planner",
            "💻 Coder",
            "🎤 Voice",
            "🌐 Browser",
            "📊 Data",
            "🔍 Research",
            "📁 Files",
            "🚀 Deploy",
          ].map((agent, i) => (
            <span
              key={agent}
              className="text-xs px-3 py-1 rounded-full font-mono animate-fade-in-up"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                color: "rgba(240,240,255,0.5)",
                animationDelay: `${0.7 + i * 0.05}s`,
                opacity: 0,
              }}
            >
              {agent}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float" style={{ color: "rgba(240,240,255,0.25)" }}>
        <ArrowDown size={20} />
      </div>
    </section>
  );
}
