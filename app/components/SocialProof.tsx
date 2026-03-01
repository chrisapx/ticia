const companies = [
  "Acme Corp", "Vertex AI", "Horizon Labs", "NovaTech", "Axiom Group",
  "Pulse Media", "Stratum Inc", "Orbit Systems", "Zenith Co", "Apex Digital",
];

export default function SocialProof() {
  const doubled = [...companies, ...companies];

  return (
    <section className="py-16 border-t border-white/6 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <span className="num-label">TRUSTED BY FORWARD-THINKING TEAMS</span>
      </div>

      {/* Marquee */}
      <div className="relative overflow-hidden">
        <div className="flex whitespace-nowrap marquee-track">
          {doubled.map((name, i) => (
            <div
              key={i}
              className="inline-flex items-center gap-6 px-8 py-3 flex-shrink-0"
            >
              <span className="text-xs tracking-[0.2em] uppercase text-white/20 hover:text-white/45 transition-colors duration-200 cursor-default">
                {name}
              </span>
              <span className="w-1 h-1 rounded-full bg-white/8 flex-shrink-0" />
            </div>
          ))}
        </div>
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-[linear-gradient(to_right,#0a0a0a,transparent)] pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-[linear-gradient(to_left,#0a0a0a,transparent)] pointer-events-none" />
      </div>
    </section>
  );
}
