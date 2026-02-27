"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="relative py-16 px-4 border-t"
      style={{ borderColor: "rgba(255,255,255,0.06)" }}
    >
      {/* Gradient top line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(167,139,250,0.4), rgba(96,165,250,0.4), transparent)",
        }}
      />

      <div className="max-w-5xl mx-auto">
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-between gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Brand */}
          <div className="text-center sm:text-left">
            <div className="text-2xl font-black gradient-text mb-1">Nimbus</div>
            <p className="text-sm" style={{ color: "rgba(240,240,255,0.35)" }}>
              Your AI operating system
            </p>
          </div>

          {/* Capabilities list */}
          <div className="text-center hidden sm:block">
            <div className="flex flex-wrap gap-x-4 gap-y-1 justify-center max-w-xs">
              {["Voice", "Code", "Browser", "Agents", "Memory", "Automation"].map((cap) => (
                <span
                  key={cap}
                  className="text-xs"
                  style={{ color: "rgba(240,240,255,0.25)" }}
                >
                  {cap}
                </span>
              ))}
            </div>
          </div>

          {/* Built by */}
          <div className="text-center sm:text-right">
            <p className="text-xs mb-2" style={{ color: "rgba(240,240,255,0.3)" }}>
              Built with ♥ by
            </p>
            <a
              href="https://kallossoft.co"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-semibold text-sm transition-all duration-200 hover:opacity-80"
              style={{ color: "#a78bfa" }}
            >
              KallosSoft
              <ExternalLink size={12} />
            </a>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div
          className="mt-12 pt-6 border-t text-center text-xs"
          style={{
            borderColor: "rgba(255,255,255,0.05)",
            color: "rgba(240,240,255,0.2)",
          }}
        >
          © {new Date().getFullYear()} KallosSoft.Com S.R.L. · All rights reserved · Built with Nimbus
        </div>
      </div>
    </footer>
  );
}
