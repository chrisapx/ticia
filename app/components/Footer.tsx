const footerLinks = {
  Product: ["Features", "How It Works", "Pricing", "Roadmap"],
  Company: ["About", "Blog", "Careers", "Press"],
  Legal: ["Privacy Policy", "Terms of Service", "Security"],
};

export default function Footer() {
  return (
    <footer className="border-t border-white/6 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-7 h-7 border border-[#c8ff00]/60 flex items-center justify-center">
                <span className="text-[#c8ff00] font-bold text-xs tracking-widest font-mono">T</span>
              </span>
              <span className="text-sm font-semibold tracking-[0.18em] uppercase text-white">
                Ticia
              </span>
            </div>
            <p className="text-xs text-white/25 leading-relaxed max-w-xs">
              AI employees that work inside your organization — onboarded like humans, deployed like software.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <span className="num-label block mb-4">{section}</span>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-xs text-white/25 hover:text-white/60 transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-t border-white/6 pt-8">
          <span className="num-label">© 2025 Ticia. All rights reserved.</span>
          <div className="flex items-center gap-6">
            <span className="num-label">WORKFORCE AI</span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span className="w-2 h-2 rounded-full bg-[#c8ff00] pulse-green" />
          </div>
        </div>
      </div>
    </footer>
  );
}
