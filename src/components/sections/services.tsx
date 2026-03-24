import { Reveal } from "@/components/reveal";

const services = [
  {
    title: "Importation",
    text: "End-to-end handling from supplier to your port, including compliance, inspection, and timeline control.",
  },
  {
    title: "Product Sourcing",
    text: "Sharp supplier matchmaking in China with negotiation, vetting, and quality-first procurement workflows.",
  },
  {
    title: "Export Services",
    text: "Documentation, loading coordination, and shipment execution for outbound trade with confidence.",
  },
];

export function Services() {
  return (
    <section id="services" className="px-6 py-16 md:px-10 md:py-28">
      <div className="mx-auto w-full max-w-7xl">
        <Reveal className="mb-12">
          <p className="mb-3 text-xs tracking-[0.28em] text-[#f0ca7c] uppercase">
            Services
          </p>
          <h2 className="font-display max-w-2xl text-2xl font-semibold leading-tight text-white sm:text-3xl md:text-5xl">
            Built for serious trade, not checkbox logistics.
          </h2>
        </Reveal>

        <div className="grid gap-3 md:grid-cols-12">
          {services.map((service, index) => (
            <Reveal
              key={service.title}
              delayMs={index * 120}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 transition-colors hover:border-[#d1a854]/40 ${
                index === 0
                  ? "md:col-span-5"
                  : index === 1
                    ? "md:col-span-4 md:translate-y-10"
                    : "md:col-span-3"
              }`}
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d1a854]/80 to-transparent opacity-80" />
              <p className="mb-7 text-sm tracking-[0.2em] text-white/45 uppercase">
                0{index + 1}
              </p>
              <h3 className="mb-4 text-2xl leading-tight font-medium text-white sm:text-3xl">
                {service.title}
              </h3>
              <p className="max-w-sm leading-relaxed text-white/70">{service.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
