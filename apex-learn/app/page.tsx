import CallToAction from "@/components/call-to-action";
import Features from "@/components/features";
import Footer from "@/components/footer";
import { HeroHeader } from "@/components/header";
import HeroSection from "@/components/hero-section";
import { main } from "motion/react-client";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <HeroHeader/>
      <HeroSection/>
      <Features/>
      <CallToAction/>
      <Footer/>
    </main>
  );
}
