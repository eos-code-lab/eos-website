// import Image from "next/image";
import HeroCarousel from "@/components/sections/HeroCarousel";
import Services from "@/components/sections/Services";
import OurStory from "@/components/sections/OurStory";
import Features from "@/components/sections/Features";
import Partners from "@/components/sections/Partners";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <HeroCarousel />
      <Services />
      <OurStory />
      <Features />
      <Partners />
      <Contact />
    </main>
  );
}
