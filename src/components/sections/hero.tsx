import Image from "next/image";
import { Reveal } from "@/components/reveal";

export function Hero() {
  return (
    <section className="grain relative min-h-screen overflow-hidden border-b border-white/10 px-6 pt-24 pb-10 md:px-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(209,168,84,0.2),transparent_45%),radial-gradient(circle_at_80%_80%,rgba(209,168,84,0.15),transparent_40%)]" />
      <div className="absolute inset-0 opacity-20 [mask-image:linear-gradient(to_bottom,black,transparent)]">
        <div className="hero-grid h-full w-full" />
      </div>

      <div
        className="absolute inset-0 bg-cover bg-center opacity-35 mix-blend-screen"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1800&q=80')",
        }}
      />

      <div className="relative mx-auto flex min-h-[85vh] w-full max-w-7xl flex-col justify-between">
        <div className="grid items-end gap-10 pb-8 pt-40 md:grid-cols-[1.4fr_0.8fr]">
          <Reveal className="space-y-6 md:space-y-7" delayMs={100}>
            <h1 className="font-display max-w-4xl text-4xl font-semibold leading-[1.05] text-white sm:text-5xl md:text-[5.5rem] md:leading-[0.95]">
              Global sourcing,
              <span className="gold-shine block">handled right.</span>
            </h1>
            <p className="max-w-xl text-sm leading-relaxed text-white/75 sm:text-base md:text-lg">
              From factory floor to final destination, we source, negotiate, and
              move your goods with precision. Clean execution. Zero drama.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <a href="#contact" className="btn-gold w-full sm:w-auto">
                Start sourcing
              </a>
              <a href="#contact" className="btn-contact w-full sm:w-auto">
                Contact us
              </a>
            </div>
          </Reveal>

          <Reveal className="hidden self-end justify-self-end md:block" delayMs={260}>
            <div className="relative overflow-hidden rounded-2xl border border-[#d1a854]/35 bg-black/60 p-2 shadow-[0_18px_60px_rgba(0,0,0,0.55)] backdrop-blur">
              <Image
                src="/brand/logo-card.png"
                alt="Cindyberry Global Import brand card"
                width={370}
                height={420}
                priority
                className="h-[240px] w-[280px] rounded-xl object-cover md:h-[300px] md:w-[340px]"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
