import { HeroHeader } from "@/components/header";
import HeroSection from "@/components/hero-section";
import { main } from "motion/react-client";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <HeroHeader/>
      <HeroSection/>
    </main>
  );
}
