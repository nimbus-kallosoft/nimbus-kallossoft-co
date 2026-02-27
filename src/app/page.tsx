import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatIsNimbus from "@/components/WhatIsNimbus";
import Capabilities from "@/components/Capabilities";
import HowItWorks from "@/components/HowItWorks";
import UseCases from "@/components/UseCases";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden" style={{ background: "#050510" }}>
      <Navbar />
      <Hero />
      <WhatIsNimbus />
      <Capabilities />
      <HowItWorks />
      <UseCases />
      <Footer />
    </main>
  );
}
