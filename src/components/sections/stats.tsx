import { Reveal } from "@/components/reveal";

const stats = [
  { value: "500+", label: "Products sourced" },
  { value: "30+", label: "Countries served" },
  { value: "100%", label: "Supplier-vetted" },
  { value: "24h", label: "Avg. response time" },
];

export function Stats() {
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-white/[0.015] px-6 py-14 md:px-10">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(209,168,84,0.07),transparent_65%)]" />
      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-2 gap-y-10 md:grid-cols-4">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} delayMs={i * 90} className="text-center">
            <p className="font-display text-4xl font-semibold leading-none text-white md:text-6xl">
              <span className="gold-shine">{stat.value}</span>
            </p>
            <p className="mt-3 text-xs tracking-[0.22em] text-white/55 uppercase">
              {stat.label}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
