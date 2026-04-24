import { Link } from "react-router-dom";


export function EditorialHero() {
  return (
    <section className="relative bg-cream text-ink py-24 md:py-32 overflow-hidden">
      {/* Editorial top meta bar */}
      <div className="mx-auto max-w-400 px-6 md:px-10">
        <div className="flex items-center justify-between border-y border-ink/20 py-3 text-[11px] uppercase tracking-[0.2em] text-ink/70">
          <span className="flex items-center gap-3">
            <span className="font-display font-semibold">Issue 02</span>
            <span className="hidden md:inline opacity-50">·</span>
            <span className="hidden md:inline opacity-70">Editorial</span>
          </span>
          <span className="hidden md:inline italic font-serif normal-case tracking-normal text-sm">
            “Design is the silent ambassador of your brand.”
          </span>
          <span>MMXXV</span>
        </div>
      </div>

      <div className="mx-auto max-w-400 px-6 md:px-10 mt-16 md:mt-24">
        <div className="grid grid-cols-12 gap-6 md:gap-10">
          {/* LEFT — Big editorial title */}
          <div className="col-span-12 md:col-span-7 relative">
            <p className="text-xs uppercase tracking-[0.25em] text-ink/60 mb-8 reveal">
              <span className="inline-block h-px w-10 bg-ink/60 align-middle mr-3" />
              Volume 02 · Folio 001
            </p>

            <h2 className="font-display font-medium leading-[0.88] tracking-[-0.04em] text-[clamp(2.75rem,9vw,9rem)] reveal" style={{ animationDelay: "0.1s" }}>
              <span className="block">Branding</span>
              <span className="block italic font-serif font-normal text-ink/90">&amp; Visual</span>
              <span className="block relative w-fit">
                Design
                <span aria-hidden className="absolute -right-6 top-2 inline-block h-3 w-3 bg-yellow rotate-45" />
              </span>
            </h2>

            {/* Layered abstract blocks */}
            <div className="absolute -left-10 top-1/2 hidden md:block w-24 h-24 border border-ink/20 rotate-12 z-0" aria-hidden />
            <div className="absolute right-8 -top-4 hidden md:block w-16 h-16 bg-yellow/80 z-0 reveal" style={{ animationDelay: "0.4s" }} aria-hidden />

            <div className="mt-12 flex items-center gap-6 reveal" style={{ animationDelay: "0.5s" }}>
              <Link
                to="/work"
                className="group inline-flex items-center gap-3 text-sm uppercase tracking-[0.2em] font-medium border-b border-ink pb-2 hover:gap-5 hover:text-yellow hover:border-yellow transition-all"
              >
                Selected Works
                <span aria-hidden className="text-base">→</span>
              </Link>
              <span className="text-xs text-ink/50 italic font-serif">— pp. 04 / 28</span>
            </div>
          </div>

          {/* RIGHT — Manifesto block */}
          <aside className="col-span-12 md:col-span-5 md:pl-10 md:border-l border-ink/15 relative">
            <p className="text-xs uppercase tracking-[0.25em] text-ink/60 mb-6 reveal" style={{ animationDelay: "0.2s" }}>
              — Manifesto
            </p>

            <p className="font-serif italic text-2xl md:text-3xl leading-snug text-ink reveal" style={{ animationDelay: "0.3s" }}>
              <span className="text-yellow text-5xl font-display not-italic align-top leading-none mr-1">“</span>
              I create identities, not just visuals.
            </p>

            <p className="mt-8 text-ink/70 leading-relaxed max-w-md reveal" style={{ animationDelay: "0.45s" }}>
              Each project is a conversation between concept and craft — built with intention, shaped by detail, designed to outlive trends.
            </p>

            {/* Signature card */}
            <div className="mt-12 relative inline-block reveal" style={{ animationDelay: "0.6s" }}>
              <div className="bg-ink text-cream px-6 py-5 relative z-10">
                <p className="text-[10px] uppercase tracking-[0.3em] text-yellow mb-1">Art Direction</p>
                <p className="font-display text-xl font-medium">TOBOU Charmel</p>
                <p className="text-xs text-cream/50 mt-1 font-serif italic">Independent · 2020 — present</p>
              </div>
              <div aria-hidden className="absolute -bottom-2 -right-2 w-full h-full bg-yellow z-0" />
            </div>
          </aside>
        </div>

        {/* Bottom magazine ribbon */}
        <div className="mt-20 md:mt-28 grid grid-cols-12 gap-6 items-end border-t border-ink/20 pt-6">
          <div className="col-span-6 md:col-span-2 text-[11px] uppercase tracking-[0.25em] text-ink/60">
            <p className="font-display font-semibold text-ink">§ 01</p>
            <p className="mt-1">Identity</p>
          </div>
          <div className="col-span-6 md:col-span-2 text-[11px] uppercase tracking-[0.25em] text-ink/60">
            <p className="font-display font-semibold text-ink">§ 02</p>
            <p className="mt-1">Editorial</p>
          </div>
          <div className="col-span-6 md:col-span-2 text-[11px] uppercase tracking-[0.25em] text-ink/60">
            <p className="font-display font-semibold text-ink">§ 03</p>
            <p className="mt-1">Print</p>
          </div>
          <div className="col-span-6 md:col-span-2 text-[11px] uppercase tracking-[0.25em] text-ink/60">
            <p className="font-display font-semibold text-ink">§ 04</p>
            <p className="mt-1">Events</p>
          </div>
          <div className="col-span-12 md:col-span-4 text-right text-xs italic font-serif text-ink/60">
            Curated selection — Photography, motion &amp; design.
          </div>
        </div>
      </div>
    </section>
  );
}
