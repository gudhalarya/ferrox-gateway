import { createFileRoute } from "@tanstack/react-router";
import { CustomCursor } from "@/components/CustomCursor";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { PlatformStacking } from "@/components/PlatformStacking";
import { GlobalNetwork } from "@/components/GlobalNetwork";
import { Showcase } from "@/components/Showcase";
import { Testimonials } from "@/components/Testimonials";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ferrox — The Edge Layer for Modern APIs" },
      { name: "description", content: "Ferrox is a high-performance API gateway and edge platform. Route, cache, secure and accelerate every request across 300+ edge locations." },
      { property: "og:title", content: "Ferrox — The Edge Layer for Modern APIs" },
      { property: "og:description", content: "A modern API gateway built for teams who ship daily." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-background text-foreground">
      <SmoothScroll />
      <CustomCursor />
      <Navbar />
      <Hero />
      <Marquee />
      <PlatformStacking />
      <GlobalNetwork />
      <Showcase />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
