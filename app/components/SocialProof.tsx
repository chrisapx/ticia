const companies = [
  "Acme Corp", "Vertex AI", "Horizon Labs", "NovaTech", "Axiom Group",
  "Pulse Media", "Stratum Inc", "Orbit Systems", "Zenith Co", "Apex Digital",
];

export default function SocialProof() {
  const doubled = [...companies, ...companies];

  return (
    <section className="py-14 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-7">
        <span className="label">Trusted by forward-thinking teams</span>
      </div>

      <div className="relative overflow-hidden">
        <div className="flex whitespace-nowrap marquee-track">
          {doubled.map((name, i) => (
            <div key={i} className="inline-flex items-center gap-5 px-6 flex-shrink-0">
              <span className="text-xs tracking-[0.18em] uppercase text-white/18 hover:text-white/40 transition-colors duration-200 cursor-default font-light">
                {name}
              </span>
              <span className="w-px h-3 bg-white/8 flex-shrink-0" />
            </div>
          ))}
        </div>
        <div className="absolute left-0 top-0 bottom-0 w-20 pointer-events-none"
          style={{ background: "linear-gradient(to right, #080810, transparent)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-20 pointer-events-none"
          style={{ background: "linear-gradient(to left, #080810, transparent)" }} />
      </div>
    </section>
  );
}
