import { Hero } from "@/components/sections/Hero";
import { Manifesto } from "@/components/sections/Manifesto";
import { HowWeOperate } from "@/components/sections/HowWeOperate";
import { Industries } from "@/components/sections/Industries";
import { Portfolio } from "@/components/sections/Portfolio";
import { WhyPahlass } from "@/components/sections/WhyPahlass";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Manifesto />
      <HowWeOperate />
      <Industries />
      <Portfolio />
      <WhyPahlass />
      <ContactCTA />
    </>
  );
}
