import { useState, useEffect } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass border-b border-white/6" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <span className="w-7 h-7 bg-[#c8ff00] flex items-center justify-center flex-shrink-0">
            <span className="text-black font-black text-xs font-mono">T</span>
          </span>
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-white">Ticia</span>
        </a>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 glass border border-white/10 px-5 py-2 text-xs tracking-widest uppercase text-white/60 hover:text-white hover:border-white/20 transition-all duration-200"
        >
          Get in touch
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 flex flex-col gap-1.5"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span className={`block w-5 h-px bg-white/60 transition-all ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`block w-5 h-px bg-white/60 transition-all ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-px bg-white/60 transition-all ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden glass border-t border-white/6 px-6 py-5">
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="block text-center glass border border-white/10 py-3 text-xs tracking-widest uppercase text-white/60"
          >
            Get in touch
          </a>
        </div>
      )}
    </nav>
  );
}
