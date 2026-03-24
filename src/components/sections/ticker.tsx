const words = [
  "Importation",
  "Product Sourcing",
  "Export Services",
  "Guangzhou, China",
  "Global Trade",
  "Factory Direct",
  "Reliable Logistics",
  "Quality First",
];

const Dot = () => (
  <span className="mx-5 inline-block h-1.5 w-1.5 rounded-full bg-[#d1a854] opacity-70 align-middle" />
);

export function Ticker() {
  const repeated = [...words, ...words];

  return (
    <div className="relative overflow-hidden border-y border-white/10 bg-black/60 py-4 backdrop-blur">
      <div className="marquee-track select-none" aria-hidden="true">
        {repeated.map((word, i) => (
          <span
            key={i}
            className="inline-flex items-center whitespace-nowrap font-display text-sm font-medium italic tracking-wider text-white/55"
          >
            {word}
            <Dot />
          </span>
        ))}
      </div>
    </div>
  );
}
