import { ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="relative py-16 px-4 border-t"
      style={{ borderColor: "rgba(255,255,255,0.06)" }}
    >
      {/* Gradient top fade */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(167,139,250,0.4), rgba(96,165,250,0.4), transparent)",
        }}
      />

      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="text-center sm:text-left">
            <div className="text-2xl font-black gradient-text mb-1">Nimbus</div>
            <p className="text-sm" style={{ color: "rgba(240,240,255,0.35)" }}>
              Your AI operating environment
            </p>
          </div>

          {/* Built by */}
          <div className="text-center">
            <p className="text-xs mb-2" style={{ color: "rgba(240,240,255,0.3)" }}>
              Built with ♥ by
            </p>
            <a
              href="https://kallossoft.co"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-semibold text-sm transition-colors duration-200 hover:opacity-80"
              style={{ color: "#a78bfa" }}
            >
              KallosSoft
              <ExternalLink size={12} />
            </a>
          </div>

          {/* Agent count */}
          <div className="text-center sm:text-right">
            <div className="text-xs mb-1" style={{ color: "rgba(240,240,255,0.3)" }}>
              Powered by
            </div>
            <div className="text-sm font-semibold" style={{ color: "rgba(240,240,255,0.6)" }}>
              8 specialist agents
            </div>
            <div className="flex gap-1.5 mt-2 justify-center sm:justify-end">
              {["🧠", "💻", "🎤", "🌐", "📊", "🔍", "📁", "🚀"].map((e, i) => (
                <span
                  key={i}
                  className="text-xs"
                  title="agent"
                  style={{ opacity: 0.5 + i * 0.06 }}
                >
                  {e}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 pt-6 border-t text-center text-xs"
          style={{
            borderColor: "rgba(255,255,255,0.05)",
            color: "rgba(240,240,255,0.2)",
          }}
        >
          © {new Date().getFullYear()} KallosSoft.Com S.R.L. · All rights reserved
        </div>
      </div>
    </footer>
  );
}
