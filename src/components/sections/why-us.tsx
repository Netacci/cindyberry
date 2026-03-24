import { Reveal } from "@/components/reveal";

const points = [
  {
    lead: "No vague promises.",
    copy: "Clear timelines, clear updates, clear ownership. You always know where your order stands.",
  },
  {
    lead: "Supplier drama, filtered out.",
    copy: "We vet deeply and negotiate hard so you never babysit suppliers or chase confirmations.",
  },
  {
    lead: "China expertise on speed dial.",
    copy: "On-ground understanding in Guangzhou — where supply chain decisions actually get made.",
  },
];

export function WhyUs() {
  return (
    <section className="relative overflow-hidden px-6 py-20 md:px-10 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_60%,rgba(209,168,84,0.1),transparent_40%)]" />

      <div className="relative mx-auto w-full max-w-7xl">
        <Reveal className="mb-16 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-xs tracking-[0.28em] text-[#f0ca7c] uppercase">
              Why choose us
            </p>
            <h2 className="font-display text-4xl font-semibold leading-tight text-white md:text-6xl">
              Built for businesses<br className="hidden md:block" /> that expect more.
            </h2>
          </div>
          <p className="max-w-xs text-sm text-white/50 md:text-right">
            Most sourcing agents are middlemen. We operate like a partner.
          </p>
        </Reveal>

        <div className="divide-y divide-white/10">
          {points.map((point, index) => (
            <Reveal
              key={point.lead}
              delayMs={index * 100}
              className="group grid gap-4 py-10 md:grid-cols-[3rem_1fr_1.5fr] md:gap-10 md:py-12"
            >
              <span className="font-display text-3xl font-semibold leading-none text-[#d1a854]/50 transition-colors group-hover:text-[#d1a854] md:text-4xl">
                0{index + 1}
              </span>
              <p className="text-2xl font-medium leading-tight text-white md:text-3xl">
                {point.lead}
              </p>
              <p className="text-base leading-relaxed text-white/65 md:text-lg">
                {point.copy}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
