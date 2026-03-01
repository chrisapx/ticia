const problems = [
  {
    id: "01",
    title: "AI tools exist but AI employees don't",
    body: "Every organization runs on people. Existing AI tools augment humans but never replace headcount. Critical workflows still require a human to initiate, oversee, and close.",
  },
  {
    id: "02",
    title: "Repetitive work consumes real talent",
    body: "Skilled professionals spend 60–70% of their time on repeatable tasks — status updates, data pulls, scheduling, tier-1 support. Work that a capable agent could own permanently.",
  },
  {
    id: "03",
    title: "Scaling headcount is expensive and slow",
    body: "A new hire takes months to find, weeks to onboard, and quarters to become productive. AI employees are ready in hours and compound in capability over time.",
  },
];

export default function ProblemSection() {
  return (
    <section id="product" className="py-32 border-t border-white/6">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="num-label">THE PROBLEM</span>
          <div className="h-px flex-1 bg-white/6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/6">
          {problems.map((p) => (
            <div
              key={p.id}
              className="relative bg-[#0a0a0a] p-8 glass-hover transition-all duration-300 group"
            >
              <span className="num-label block mb-6">{p.id}</span>
              <h3 className="text-lg font-medium text-white/85 leading-snug mb-4 group-hover:text-white transition-colors duration-200">
                {p.title}
              </h3>
              <p className="text-sm text-white/35 leading-relaxed font-light">
                {p.body}
              </p>
            </div>
          ))}
        </div>

        {/* Solution statement */}
        <div className="mt-16 glass border border-white/8 p-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#c8ff00]/[0.02] blur-2xl pointer-events-none" />
          <div className="relative">
            <span className="num-label block mb-6">THE TICIA ANSWER</span>
            <p className="text-2xl md:text-3xl font-light text-white/75 leading-relaxed max-w-3xl">
              We build AI agents that slot directly into your org chart — with
              identities, access, and accountability. Not tools. Employees.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
