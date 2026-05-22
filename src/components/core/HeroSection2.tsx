import { motion } from "framer-motion";
import {
  ArrowRight,
  MapPin,
  Star,
  Phone,
  Mail,
} from "lucide-react";

const works = [
  {
    title: "Afrik Summit",
    category: "Event Branding",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Nomad Collective",
    category: "Brand Identity",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Verde'ora",
    category: "Visual Identity",
    image:
      "https://images.unsplash.com/photo-1526947425960-945c6e72858f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Zola Studio",
    category: "Creative Direction",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Rwanda Design Week",
    category: "Event Branding",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop",
  },
];

const testimonials = [
  {
    name: "Sandra A.",
    role: "Founder, Zola Studio",
    text: "Charmel understood our vision from day one and brought it to life with so much creativity and professionalism.",
  },
  {
    name: "David M.",
    role: "Creative Director, Afrik Summit",
    text: "The identity he created for our event gave us a strong presence. Clean, bold and perfectly aligned with our message.",
    highlight: true,
  },
  {
    name: "Nadia K.",
    role: "Founder, Verde'Ora",
    text: "Professional, reliable and extremely talented. Our brand has never looked this good.",
  },
];

export default function HeroSection2() {
  return (
    <main className="bg-black text-white overflow-hidden min-h-screen">
      {/* Background */}
      <div className="fixed inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_top,rgba(255,196,0,0.4),transparent_30%)]" />

      {/* NAVBAR */}
      <header className="w-full px-8 md:px-16 py-8 flex items-center justify-between relative z-20">
        <div className="text-3xl font-semibold tracking-tight">
          CT<span className="text-yellow-400">.</span>
        </div>

        <nav className="hidden md:flex items-center gap-10 text-sm text-zinc-300">
          <a href="#">WORKS</a>
          <a href="#">ABOUT</a>
          <a href="#">TESTIMONIALS</a>
          <a href="#">CONTACT</a>
        </nav>

        <button className="w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-yellow-400" />
        </button>
      </header>

      {/* HERO */}
      <section className="relative px-8 md:px-16 pt-10 pb-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="relative z-10"
          >
            <p className="text-yellow-400 mb-6 tracking-wide">
              ● Minimal. Bold. Intentional.
            </p>

            <h1 className="text-[70px] md:text-[110px] leading-[0.9] font-light tracking-tight">
              Charmel
              <br />
              <span className="text-yellow-400">Tobou</span>
            </h1>

            <div className="mt-8">
              <h2 className="text-2xl md:text-3xl font-light text-zinc-100">
                Graphic Designer & Creative Developer
              </h2>

              <p className="mt-6 text-zinc-400 text-lg leading-relaxed max-w-xl">
                Creating bold visual identities and modern digital
                experiences for brands, entrepreneurs and cultural
                projects.
              </p>
            </div>

            {/* STATS */}
            <div className="flex flex-wrap items-center gap-10 mt-10">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full border border-yellow-400 flex items-center justify-center">
                  <Star className="w-4 h-4 text-yellow-400" />
                </div>

                <div>
                  <p className="text-white">5 years</p>
                  <p className="text-zinc-500 text-sm">
                    of experience
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full border border-yellow-400 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-yellow-400" />
                </div>

                <div>
                  <p className="text-white">Cotonou</p>
                  <p className="text-zinc-500 text-sm">Benin</p>
                </div>
              </div>
            </div>

            <button className="mt-12 px-8 py-4 rounded-full border border-zinc-700 hover:border-yellow-400 transition-all flex items-center gap-4 tracking-wide">
              VIEW MY WORKS
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Yellow Glow */}
            <div className="absolute w-112.5 h-112.5 rounded-full bg-yellow-400/80 blur-3xl opacity-30" />

            {/* Main Portrait */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop"
                className="w-125 h-175 object-cover rounded-[40px] grayscale brightness-75"
              />

              {/* Floating Circle */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                }}
                className="absolute bottom-24 -right-10 w-44 h-44 rounded-full border border-zinc-600 backdrop-blur-md bg-white/5 flex items-center justify-center"
              >
                <div className="text-center">
                  <p className="text-xs tracking-[0.3em] text-zinc-300">
                    AVAILABLE
                  </p>
                  <p className="text-yellow-400 mt-2 tracking-[0.3em] text-sm">
                    FOR PROJECTS
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* FLOATING WORKS */}
        <div className="relative mt-24">
          <div className="flex gap-6 overflow-x-auto pb-4 no-scrollbar">
            {works.map((work, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.1,
                  duration: 1,
                }}
                whileHover={{
                  y: -10,
                }}
                className={`relative min-w-62.5 ${
                  index === 2
                    ? "scale-110 z-20"
                    : "opacity-90"
                }`}
              >
                <div className="overflow-hidden rounded-[30px] border border-zinc-800 bg-zinc-900">
                  <img
                    src={work.image}
                    className={`w-full ${
                      index === 2 ? "h-105" : "h-85"
                    } object-cover`}
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-light">
                      {work.title}
                    </h3>

                    <p className="text-zinc-400 mt-1">
                      {work.category}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="px-8 md:px-16 py-28 border-t border-zinc-900">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <p className="text-yellow-400 tracking-[0.3em] text-sm mb-8">
              ABOUT
            </p>

            <h2 className="text-5xl md:text-6xl leading-tight font-light">
              Design with structure.
              <br />
              Create with{" "}
              <span className="text-yellow-400">
                intention.
              </span>
            </h2>
          </div>

          <div className="space-y-8">
            <p className="text-zinc-400 text-lg leading-relaxed">
              With a background in computer engineering, I
              combine creativity, structure and precision to
              craft impactful and meaningful visual
              experiences.
            </p>

            <div className="grid grid-cols-2 gap-6 text-zinc-300">
              <p>✦ Brand Identity</p>
              <p>✦ Visual Design</p>
              <p>✦ Social Media Design</p>
              <p>✦ Event Branding</p>
              <p>✦ Creative Direction</p>
              <p>✦ Digital Experiences</p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="px-8 md:px-16 py-24 border-t border-zinc-900">
        <p className="text-yellow-400 tracking-[0.3em] text-sm mb-12">
          TESTIMONIALS
        </p>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6 }}
              className={`rounded-[30px] p-8 border ${
                item.highlight
                  ? "bg-yellow-400 text-black border-yellow-400"
                  : "bg-zinc-950 border-zinc-800"
              }`}
            >
              <p className="leading-relaxed">{item.text}</p>

              <div className="mt-10">
                <h4 className="font-medium">{item.name}</h4>
                <p
                  className={`text-sm mt-1 ${
                    item.highlight
                      ? "text-black/70"
                      : "text-zinc-500"
                  }`}
                >
                  {item.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="px-8 md:px-16 py-28 border-t border-zinc-900">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <p className="text-yellow-400 tracking-[0.3em] text-sm mb-8">
              LET'S WORK TOGETHER
            </p>

            <h2 className="text-6xl md:text-7xl font-light leading-tight">
              Have a{" "}
              <span className="text-yellow-400">
                project
              </span>
              <br />
              in mind?
            </h2>
          </div>

          <div className="space-y-8">
            <p className="text-zinc-400 text-lg max-w-xl">
              I'm currently available for freelance and
              collaboration opportunities.
            </p>

            <button className="px-8 py-4 rounded-full border border-zinc-700 hover:border-yellow-400 transition-all flex items-center gap-4">
              LET'S TALK
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="space-y-5 pt-8">
              <div className="flex items-center gap-4 text-zinc-300">
                <Mail className="w-5 h-5 text-yellow-400" />
                hello@charmeltobou.com
              </div>

              <div className="flex items-center gap-4 text-zinc-300">
                <Phone className="w-5 h-5 text-yellow-400" />
                +229 01 23 45 67 89
              </div>

              <div className="flex items-center gap-4 text-zinc-300">
                <MapPin className="w-5 h-5 text-yellow-400" />
                Cotonou, Benin
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-8 md:px-16 py-10 border-t border-zinc-900 flex flex-col md:flex-row justify-between gap-6 text-zinc-500 text-sm">
        <p>© 2025 Charmel Tobou. All rights reserved.</p>

        <div className="flex gap-8">
          <a href="#">Behance</a>
          <a href="#">Dribbble</a>
          <a href="#">LinkedIn</a>
          <a href="#">Instagram</a>
        </div>
      </footer>
    </main>
  );
}