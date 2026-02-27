import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nimbus — Your AI Operating Environment",
  description:
    "Nimbus is a complete AI operating environment. Multi-agent orchestration, voice conversations, knowledge graph, code intelligence, and more — all working together.",
  openGraph: {
    title: "Nimbus — Your AI Operating Environment",
    description:
      "A complete AI operating environment with 8 specialist agents working together.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased" style={{ background: "#050510", color: "#f0f0ff" }}>
        {children}
      </body>
    </html>
  );
}
