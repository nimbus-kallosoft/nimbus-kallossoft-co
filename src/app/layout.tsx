import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://nimbus.kallossoft.co"),
  title: "Nimbus — Your AI Operating Environment",
  description:
    "Nimbus is a complete AI operating environment. Multi-agent orchestration, voice conversations, knowledge graph, code intelligence, and more — all working together.",
  openGraph: {
    title: "Nimbus — Your AI Operating Environment",
    description:
      "8 specialist agents working in concert so you don't have to think about it.",
    type: "website",
    url: "https://nimbus.kallossoft.co",
    siteName: "Nimbus",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nimbus — Your AI Operating Environment",
    description:
      "8 specialist agents working in concert so you don't have to think about it.",
  },
  icons: {
    icon: "/favicon.ico",
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
