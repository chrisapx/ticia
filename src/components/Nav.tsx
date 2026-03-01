import { useState, useEffect } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass border-b border-white/5" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 flex-shrink-0">
          <span className="w-7 h-7 bg-[#c8ff00] flex items-center justify-center">
            <span className="text-black font-black text-xs font-mono tracking-tighter">T</span>
          </span>
          <span className="text-sm font-black tracking-[0.22em] uppercase text-white">Ticia</span>
        </a>

        {/* Center nav links */}
        <div className="hidden md:flex items-center gap-8">
          {["How it works", "About", "Careers"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-xs tracking-[0.14em] uppercase text-white/30 hover:text-white/70 transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </div>

        {/* CTA pill */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 border border-white/15 rounded-full px-5 py-2 text-xs tracking-[0.14em] uppercase text-white/50 hover:text-white hover:border-white/30 transition-all duration-200"
        >
          Get in touch
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span className={`block w-5 h-px bg-white/50 transition-all ${menuOpen ? "rotate-45 translate-y-[5px]" : ""}`} />
          <span className={`block w-4 h-px bg-white/50 transition-all ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-px bg-white/50 transition-all ${menuOpen ? "-rotate-45 -translate-y-[5px]" : ""}`} />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden glass border-t border-white/5 px-8 py-6 flex flex-col gap-4">
          {["How it works", "About", "Careers"].map((item) => (
            <a key={item} href="#" className="text-xs tracking-widest uppercase text-white/40">
              {item}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 border border-white/15 rounded-full py-3 text-center text-xs tracking-widest uppercase text-white/50"
          >
            Get in touch
          </a>
        </div>
      )}
    </nav>
  );
}
