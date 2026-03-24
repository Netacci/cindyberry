const footerLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/60 px-6 py-10 md:px-10">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <div>
          <p className="font-display text-xl font-semibold text-white">
            <span className="gold-shine">CINDY</span>BERRY
          </p>
          <p className="mt-1 text-xs tracking-widest text-white/40 uppercase">
            Global Import
          </p>
        </div>

        <nav className="flex flex-wrap gap-6">
          {footerLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-white/50 transition-colors hover:text-[#f2d18a]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="text-right">
          <p className="text-xs text-white/35">
            Guangzhou, Guangdong, China
          </p>
          <p className="mt-1 text-xs text-white/35">
            &copy; {new Date().getFullYear()} Cindyberry Globals Trading Co., Ltd
          </p>
        </div>
      </div>
    </footer>
  );
}
