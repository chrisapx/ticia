const caps = [
  {
    icon: "✉",
    title: "Company Email & Identity",
    body: "Each agent gets a real email address under your domain, a profile, and an org-chart identity. No shared accounts, no ambiguity.",
    tag: "Identity",
  },
  {
    icon: "⬡",
    title: "Live Meeting Attendance",
    body: "Agents join video and audio meetings in real time using advanced TTS/STT. They speak, listen, take notes, and follow up — like any participant.",
    tag: "Meetings",
  },
  {
    icon: "⊞",
    title: "Tool & App Access",
    body: "Connect your CRM, project management, analytics dashboards, ticketing systems, and code repos. The agent works inside your existing stack.",
    tag: "Integrations",
  },
  {
    icon: "◈",
    title: "Institutional Memory",
    body: "Documents, SOPs, past decisions, team communications — the agent ingests and retains company context, building knowledge over time.",
    tag: "Knowledge",
  },
  {
    icon: "◎",
    title: "Continuous Learning",
    body: "Unlike static software, Ticia agents improve with every interaction, feedback loop, and task outcome. They grow with your organization.",
    tag: "Adaptive",
  },
  {
    icon: "⋮⋮",
    title: "Multi-Role Deployment",
    body: "Deploy the same capability base across multiple functions — support, ops, finance, HR. Specialize each agent independently.",
    tag: "Scalable",
  },
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="py-32 border-t border-white/6">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-4">
          <span className="num-label">CAPABILITIES</span>
          <div className="h-px flex-1 bg-white/6" />
        </div>

        <h2 className="text-3xl md:text-4xl font-semibold text-white/85 mb-16 max-w-2xl leading-tight tracking-tight">
          Everything a real employee has.
          <br />
          <span className="text-white/30 font-light">Nothing you don&apos;t need.</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/6">
          {caps.map((c) => (
            <div
              key={c.title}
              className="relative bg-[#0a0a0a] p-8 group glass-hover transition-all duration-300"
            >
              {/* Tag */}
              <div className="flex items-center justify-between mb-8">
                <span className="text-xl text-white/20 group-hover:text-white/40 transition-colors duration-200">
                  {c.icon}
                </span>
                <span className="num-label border border-white/8 px-2 py-0.5 text-[9px]">
                  {c.tag}
                </span>
              </div>

              <h3 className="text-sm font-medium text-white/75 mb-3 leading-snug group-hover:text-white/90 transition-colors duration-200">
                {c.title}
              </h3>
              <p className="text-xs text-white/30 leading-relaxed font-light">
                {c.body}
              </p>

              {/* Hover accent */}
              <div className="absolute bottom-0 left-0 w-0 h-px bg-[#c8ff00]/40 group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
