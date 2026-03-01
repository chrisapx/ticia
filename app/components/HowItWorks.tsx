const steps = [
  {
    num: "01",
    title: "Request a Role",
    body: "Tell us the function, skills required, and access level. We match you with a Ticia agent profile built for that job.",
    badge: "< 2h",
    color: "#c8ff00",
    icon: "⊕",
  },
  {
    num: "02",
    title: "Agent Provisioning",
    body: "Your agent receives a company email, gets granted access to your tool stack, and ingests your documentation, processes, and institutional knowledge.",
    badge: "< 24h",
    color: "#4f9cff",
    icon: "⊞",
  },
  {
    num: "03",
    title: "Onboarding Sprint",
    body: "Like any new hire, the agent shadows workflows, attends orientation, asks clarifying questions, and learns your specific company context.",
    badge: "3–5 days",
    color: "#a78bfa",
    icon: "◑",
  },
  {
    num: "04",
    title: "Deployed & Working",
    body: "Joins your comms channels, attends meetings via live TTS/STT, responds to emails, and executes assigned tasks. Fully integrated.",
    badge: "Ongoing",
    color: "#2dd4bf",
    icon: "◉",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-28 border-t border-white/5 overflow-hidden">
      <div className="orb orb-blue w-96 h-96 bottom-0 left-0 opacity-30" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-6">
          <span className="label-accent">Process</span>
          <div className="h-px flex-1 bg-white/5" />
        </div>

        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-16 max-w-2xl leading-tight">
          From request
          <br />
          <span className="text-white/25 font-light">to fully operational.</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step) => (
            <div
              key={step.num}
              className="glass p-6 group hover:border-white/16 transition-all duration-300 relative overflow-hidden flex flex-col"
            >
              {/* Top accent */}
              <div
                className="absolute top-0 left-0 w-full h-0.5 opacity-50"
                style={{ background: step.color }}
              />

              {/* Icon + num */}
              <div className="flex items-center justify-between mb-8">
                <span className="text-2xl" style={{ color: step.color + "55" }}>
                  {step.icon}
                </span>
                <div
                  className="text-xs font-mono px-2 py-0.5 border"
                  style={{ color: step.color, borderColor: step.color + "40" }}
                >
                  {step.badge}
                </div>
              </div>

              {/* Step number */}
              <div className="label mb-2">{step.num}</div>
              <h3 className="text-sm font-semibold text-white/85 mb-3 group-hover:text-white transition-colors duration-200">
                {step.title}
              </h3>
              <p className="text-xs text-white/35 leading-relaxed font-light flex-1">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
