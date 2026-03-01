const problems = [
  {
    id: "01",
    icon: "⊘",
    title: "AI tools ≠ AI employees",
    body: "Every org runs on people. Existing AI tools augment humans but never replace headcount — critical workflows still need someone to own them start to finish.",
    accent: "#c8ff00",
  },
  {
    id: "02",
    icon: "◈",
    title: "60% of skilled work is repetitive",
    body: "Status updates, data pulls, scheduling, tier-1 support. Work that a capable agent could own permanently, freeing your team for high-leverage decisions.",
    accent: "#4f9cff",
  },
  {
    id: "03",
    icon: "◎",
    title: "Hiring is slow and expensive",
    body: "A new hire takes months to find, weeks to onboard, quarters to be productive. Ticia agents deploy in hours and compound in capability over time.",
    accent: "#a78bfa",
  },
];

export default function ProblemSection() {
  return (
    <section id="product" className="relative py-28 border-t border-white/5 overflow-hidden">
      {/* Background orbs */}
      <div className="orb orb-purple w-96 h-96 top-0 right-1/4 opacity-40" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-6">
          <span className="label-accent">The Problem</span>
          <div className="h-px flex-1 bg-white/5" />
        </div>

        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-16 max-w-2xl leading-tight">
          The workforce gap
          <br />
          <span className="text-white/25 font-light">no one has solved yet.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {problems.map((p) => (
            <div
              key={p.id}
              className="glass p-7 group hover:border-white/16 transition-all duration-300 relative overflow-hidden"
            >
              {/* Color accent line */}
              <div
                className="absolute top-0 left-0 w-full h-0.5 opacity-60"
                style={{ background: p.accent }}
              />

              <div className="flex items-start justify-between mb-6">
                <span className="text-2xl" style={{ color: p.accent + "66" }}>
                  {p.icon}
                </span>
                <span className="label opacity-40">{p.id}</span>
              </div>

              <h3 className="text-base font-semibold text-white/85 mb-3 leading-snug group-hover:text-white transition-colors duration-200">
                {p.title}
              </h3>
              <p className="text-sm text-white/35 leading-relaxed font-light">
                {p.body}
              </p>
            </div>
          ))}
        </div>

        {/* Answer banner */}
        <div className="mt-6 glass p-8 md:p-10 relative overflow-hidden border-[#c8ff00]/15">
          <div className="orb orb-green w-64 h-64 -right-16 -top-16 opacity-30" />
          <div className="relative flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex-shrink-0">
              <span className="label-accent block mb-2">The Ticia Answer</span>
              <p className="text-xl md:text-2xl font-light text-white/75 leading-relaxed max-w-2xl">
                We build AI agents that slot directly into your org chart —
                with identities, access, and accountability.{" "}
                <span className="text-white font-medium">Not tools. Employees.</span>
              </p>
            </div>
            <a
              href="#contact"
              className="flex-shrink-0 bg-[#c8ff00] text-black px-6 py-3 text-xs font-bold tracking-widest uppercase hover:bg-[#d4ff33] transition-colors duration-200 md:ml-auto self-start md:self-auto"
            >
              See a Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
