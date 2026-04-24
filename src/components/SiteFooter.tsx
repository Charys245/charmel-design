// import { Link } from "@tanstack/react-router";

import { Link } from "react-router-dom";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-cream relative overflow-hidden">
      <div className="mx-auto max-w-400 px-6 md:px-10 pt-24 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-7">
            <p className="eyebrow text-yellow mb-6">Let&apos;s collaborate</p>
            <h2 className="display-xl text-[clamp(3rem,7vw,7rem)] text-cream">
              Build something <em className="not-italic text-yellow">impactful.</em>
            </h2>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 mt-10 text-cream border-b border-cream/30 pb-2 hover:text-yellow hover:border-yellow transition-colors"
            >
              <span className="text-lg">hello@studio.design</span>
              <span aria-hidden>↗</span>
            </Link>
          </div>
          <div className="md:col-span-5 grid grid-cols-2 gap-8">
            <div>
              <p className="eyebrow text-cream/40 mb-4">Navigate</p>
              <ul className="space-y-2.5 text-sm">
                <li><Link to="/work" className="hover:text-yellow transition-colors">Selected Work</Link></li>
                <li><Link to="/studio" className="hover:text-yellow transition-colors">Studio</Link></li>
                <li><Link to="/services" className="hover:text-yellow transition-colors">Services</Link></li>
                <li><Link to="/contact" className="hover:text-yellow transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <p className="eyebrow text-cream/40 mb-4">Elsewhere</p>
              <ul className="space-y-2.5 text-sm">
                <li><a href="#" className="hover:text-yellow transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-yellow transition-colors">Behance</a></li>
                <li><a href="#" className="hover:text-yellow transition-colors">Dribbble</a></li>
                <li><a href="#" className="hover:text-yellow transition-colors">LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-cream/15 flex flex-col md:flex-row justify-between gap-4 text-xs text-cream/50">
          <p>© {new Date().getFullYear()} Studio — Brand & Visual Identity Design.</p>
          <p>Available worldwide · Based remotely</p>
        </div>
      </div>

      <div className="overflow-hidden border-t border-cream/10">
        <div className="marquee whitespace-nowrap py-8 flex gap-16 font-display text-[18vw] leading-none text-cream/5 font-bold">
          <span>Brand · Identity · Studio · Brand · Identity · Studio ·</span>
          <span>Brand · Identity · Studio · Brand · Identity · Studio ·</span>
        </div>
      </div>
    </footer>
  );
}
