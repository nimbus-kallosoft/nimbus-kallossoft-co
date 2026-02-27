"use client";

import { motion } from "framer-motion";
import { Brain, Layers, Workflow } from "lucide-react";

const pillars = [
  {
    icon: <Brain size={24} />,
    title: "Think",
    desc: "Nimbus understands context, remembers your projects, and reasons across your entire world — not just the current conversation.",
  },
  {
    icon: <Workflow size={24} />,
    title: "Coordinate",
    desc: "A smart dispatcher orchestrates specialist agents and tools — each an expert in its domain — to tackle complex multi-step tasks effortlessly.",
  },
  {
    icon: <Layers size={24} />,
    title: "Execute",
    desc: "From writing code to sending voice notes to deploying infrastructure — Nimbus gets real things done across all your systems.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] as const } },
};

export default function WhatIsNimbus() {
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
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
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
            Nimbus isn&apos;t a chatbot. It&apos;s an entire ecosystem — voice, code, browser, memory, communication, and automation — living inside your workflow and responding to plain language.
          </p>
        </motion.div>

        {/* Pillars */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {pillars.map((p) => (
            <motion.div
              key={p.title}
              className="gradient-border rounded-2xl p-8 text-center"
              variants={itemVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
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
            </motion.div>
          ))}
        </motion.div>

        {/* Quote */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p
            className="text-2xl sm:text-3xl font-light italic max-w-2xl mx-auto leading-relaxed"
            style={{ color: "rgba(240,240,255,0.6)" }}
          >
            &ldquo;Not another AI wrapper — a new way to work.&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  );
}
