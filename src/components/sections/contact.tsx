import { Reveal } from "@/components/reveal";

export function Contact() {
  return (
    <section id="contact" className="bg-[#faf9f5] px-6 pt-20 pb-24 md:px-10 md:pt-28">
      <div className="mx-auto w-full max-w-7xl rounded-3xl border border-[#d1a854]/30 bg-white p-6 shadow-sm md:p-10">
        <Reveal className="space-y-6">
          <p className="text-xs tracking-[0.28em] text-[#a07730] uppercase">
            Contact
          </p>
          <h2 className="font-display text-3xl font-semibold leading-tight text-[#0c0c0c] md:text-6xl">
            Let&apos;s move your next shipment.
          </h2>
          <p className="max-w-2xl text-[#4a4a4a]">
            Tell us what you need sourced or shipped, and we will revert with a
            practical path forward.
          </p>

          <div className="grid gap-3 md:grid-cols-3">
            <p className="rounded-2xl border border-black/10 bg-[#faf9f5] p-4">
              <span className="mb-1 block text-xs tracking-[0.16em] text-[#a07730] uppercase">
                Phone
              </span>
              <span className="break-all text-base text-[#0c0c0c] md:text-lg">+8613268345863</span>
            </p>
            <p className="rounded-2xl border border-black/10 bg-[#faf9f5] p-4">
              <span className="mb-1 block text-xs tracking-[0.16em] text-[#a07730] uppercase">
                Email
              </span>
              <span className="break-all text-base text-[#0c0c0c] md:text-lg">
                Cindyberry226@gmail.com
              </span>
            </p>
            <p className="rounded-2xl border border-black/10 bg-[#faf9f5] p-4">
              <span className="mb-1 block text-xs tracking-[0.16em] text-[#a07730] uppercase">
                Location
              </span>
              <span className="text-base text-[#0c0c0c] md:text-lg">
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
              className="btn-dark w-full sm:w-auto"
            >
              Send email
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
