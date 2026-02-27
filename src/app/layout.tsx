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
      "Voice, code, browser automation, image generation, knowledge graph, and multi-agent orchestration — all wired together in one AI OS.",
    type: "website",
    url: "https://nimbus.kallossoft.co",
    siteName: "Nimbus",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nimbus — Your AI Operating Environment",
    description:
      "Voice, code, browser automation, image generation, knowledge graph, and multi-agent orchestration — all wired together in one AI OS.",
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
