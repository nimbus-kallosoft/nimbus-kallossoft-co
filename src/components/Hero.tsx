"use client";

import { motion } from "framer-motion";
import { Sparkles, Zap, ArrowDown } from "lucide-react";

const capabilities = [
  "Voice Conversations",
  "Browser Automation",
  "Code Intelligence",
  "Multi-Agent AI",
  "Image Generation",
  "Knowledge Graph",
  "WhatsApp & Email",
  "Infrastructure",
  "Cron & Scheduling",
  "macOS Integration",
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 hero-bg grid-bg overflow-hidden">
      {/* Animated orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute w-96 h-96 rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(167,139,250,0.18) 0%, transparent 70%)",
            top: "10%",
            left: "10%",
          }}
          animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.05, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-80 h-80 rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(96,165,250,0.14) 0%, transparent 70%)",
            bottom: "15%",
            right: "10%",
          }}
          animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.08, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
        />
        <motion.div
          className="absolute w-64 h-64 rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(52,211,153,0.1) 0%, transparent 70%)",
            top: "50%",
            right: "25%",
          }}
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
        />
      </div>

      {/* Badge */}
      <motion.div
        className="relative z-10 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <span className="tag-pill inline-flex items-center gap-2 px-4 py-2 text-sm font-medium" style={{ color: "#a78bfa" }}>
          <Sparkles size={14} />
          AI Operating System
        </span>
      </motion.div>

      {/* Main headline */}
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <h1 className="text-7xl sm:text-8xl md:text-9xl font-black tracking-tighter mb-6 leading-none">
          <span className="gradient-text">Nimbus</span>
        </h1>
      </motion.div>

      {/* Subheadline */}
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.35 }}
      >
        <p className="text-xl sm:text-2xl md:text-3xl font-light max-w-2xl mb-4 leading-relaxed" style={{ color: "rgba(240,240,255,0.8)" }}>
          Your AI companion that{" "}
          <span style={{ color: "#a78bfa", fontWeight: 500 }}>codes</span>,{" "}
          <span style={{ color: "#60a5fa", fontWeight: 500 }}>automates</span>,{" "}
          <span style={{ color: "#34d399", fontWeight: 500 }}>creates</span>, and{" "}
          <span style={{ color: "#f472b6", fontWeight: 500 }}>connects</span>
        </p>
        <p className="text-base sm:text-lg max-w-xl mx-auto" style={{ color: "rgba(240,240,255,0.45)" }}>
          A complete AI operating environment — voice, vision, code, automation, and memory, all wired together.
        </p>
      </motion.div>

      {/* CTA */}
      <motion.div
        className="relative z-10 flex flex-col sm:flex-row gap-4 mt-10"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
      >
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
      </motion.div>

      {/* Capability ticker */}
      <motion.div
        className="relative z-10 mt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.65 }}
      >
        <div className="flex flex-wrap justify-center gap-3 max-w-lg">
          {capabilities.map((cap, i) => (
            <motion.span
              key={cap}
              className="text-xs px-3 py-1 rounded-full font-mono"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                color: "rgba(240,240,255,0.5)",
              }}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.7 + i * 0.05 }}
            >
              {cap}
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        style={{ color: "rgba(240,240,255,0.25)" }}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowDown size={20} />
      </motion.div>
    </section>
  );
}
