import { Reveal } from "@/components/reveal";

export function Contact() {
  return (
    <section id="contact" className="px-6 pt-20 pb-24 md:px-10 md:pt-28">
      <div className="mx-auto w-full max-w-7xl rounded-3xl border border-[#d1a854]/30 bg-white/[0.02] p-6 md:p-10">
        <Reveal className="space-y-6">
          <p className="text-xs tracking-[0.28em] text-[#f0ca7c] uppercase">
            Contact
          </p>
          <h2 className="font-display text-3xl font-semibold leading-tight text-white md:text-6xl">
            Let&apos;s move your next shipment.
          </h2>
          <p className="max-w-2xl text-white/70">
            Tell us what you need sourced or shipped, and we will revert with a
            practical path forward.
          </p>

          <div className="grid gap-3 text-white/85 md:grid-cols-3">
            <p className="rounded-2xl border border-white/12 bg-black/35 p-4">
              <span className="mb-1 block text-xs tracking-[0.16em] text-[#f0ca7c] uppercase">
                Phone
              </span>
              <span className="break-all text-base md:text-lg">+8613268345863</span>
            </p>
            <p className="rounded-2xl border border-white/12 bg-black/35 p-4">
              <span className="mb-1 block text-xs tracking-[0.16em] text-[#f0ca7c] uppercase">
                Email
              </span>
              <span className="break-all text-base md:text-lg">
                Cindyberry226@gmail.com
              </span>
            </p>
            <p className="rounded-2xl border border-white/12 bg-black/35 p-4">
              <span className="mb-1 block text-xs tracking-[0.16em] text-[#f0ca7c] uppercase">
                Location
              </span>
              <span className="text-base md:text-lg">
                Guangzhou, Guangdong, China
              </span>
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="https://wa.me/8613268345863"
              target="_blank"
              rel="noreferrer"
              className="btn-gold w-full sm:w-auto"
            >
              Message on WhatsApp
            </a>
            <a
              href="mailto:Cindyberry226@gmail.com"
              className="btn-ghost w-full sm:w-auto"
            >
              Send email
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
