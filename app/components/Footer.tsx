const footerLinks = {
  Product: ["Features", "How It Works", "Pricing", "Roadmap"],
  Company: ["About", "Blog", "Careers", "Press"],
  Legal: ["Privacy Policy", "Terms of Service", "Security"],
};

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-14">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-8 bg-[#c8ff00] flex items-center justify-center">
                <span className="text-black font-black text-sm font-mono">T</span>
              </span>
              <span className="text-sm font-bold tracking-[0.18em] uppercase text-white">Ticia</span>
            </div>
            <p className="text-xs text-white/22 leading-relaxed max-w-xs">
              AI employees that work inside your organization — onboarded like humans, deployed like software.
            </p>
          </div>

          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <span className="label block mb-4">{section}</span>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-xs text-white/22 hover:text-white/55 transition-colors duration-200">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-t border-white/5 pt-7">
          <span className="label opacity-50">© 2025 Ticia AI Inc. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <span className="label opacity-35">WORKFORCE AI</span>
            <span className="w-px h-3 bg-white/10" />
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c8ff00] pulse-dot" />
              <span className="label-accent text-[9px]">Systems Operational</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
