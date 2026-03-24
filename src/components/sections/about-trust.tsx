import { Reveal } from "@/components/reveal";

export function AboutTrust() {
  return (
    <section id="about" className="relative overflow-hidden bg-[#faf9f5] px-6 py-20 md:px-10 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_30%,rgba(209,168,84,0.08),transparent_40%)]" />

      <div className="relative mx-auto grid w-full max-w-7xl gap-10 md:grid-cols-2">
        <Reveal className="space-y-6">
          <p className="text-xs tracking-[0.28em] text-[#a07730] uppercase">
            Trust & Reach
          </p>
          <h2 className="font-display text-3xl font-semibold leading-tight text-[#0c0c0c] md:text-5xl">
            Reliable sourcing from China, scaled globally.
          </h2>
          <p className="max-w-xl leading-relaxed text-[#4a4a4a]">
            We work close to the supply side in Guangzhou and move fast on your
            behalf. You get vetted suppliers, transparent progress, and a team
            that treats your timeline like it matters.
          </p>
          <p className="max-w-lg text-sm tracking-[0.18em] text-black/45 uppercase">
            Global reach. Local factory access. Consistent execution.
          </p>
        </Reveal>

        <Reveal delayMs={120} className="relative min-h-[280px] rounded-2xl border border-black/10 bg-[#0c0c0c] p-6 md:min-h-[340px]">
          <svg
            viewBox="0 0 500 340"
            className="h-full w-full"
            role="img"
            aria-label="Animated global trade routes"
          >
            <defs>
              <linearGradient id="route" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#fff7db" stopOpacity="0.1" />
                <stop offset="60%" stopColor="#d1a854" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#9f7727" stopOpacity="0.5" />
              </linearGradient>
            </defs>

            <circle cx="120" cy="90" r="5" fill="#f2d18a" />
            <circle cx="260" cy="55" r="5" fill="#f2d18a" />
            <circle cx="390" cy="160" r="5" fill="#f2d18a" />
            <circle cx="175" cy="250" r="5" fill="#f2d18a" />
            <circle cx="420" cy="265" r="5" fill="#f2d18a" />

            <path d="M120 90 C190 20, 230 20, 260 55" className="route-path" />
            <path d="M260 55 C320 70, 350 120, 390 160" className="route-path" />
            <path d="M120 90 C140 160, 150 220, 175 250" className="route-path" />
            <path d="M175 250 C260 280, 330 300, 420 265" className="route-path" />
            <path d="M390 160 C420 185, 430 220, 420 265" className="route-path" />

            <rect x="18" y="14" width="464" height="312" stroke="url(#route)" strokeOpacity="0.4" fill="none" />
          </svg>
        </Reveal>
      </div>
    </section>
  );
}
