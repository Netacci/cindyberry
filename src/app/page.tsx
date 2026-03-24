import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { AboutTrust } from "@/components/sections/about-trust";
import { Contact } from "@/components/sections/contact";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Stats } from "@/components/sections/stats";
import { Ticker } from "@/components/sections/ticker";
import { WhyUs } from "@/components/sections/why-us";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="overflow-x-hidden bg-[#050505] text-white">
        <Hero />
        <Ticker />
        <Services />
        <Stats />
        <AboutTrust />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
