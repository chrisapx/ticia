const caps = [
  {
    icon: "✉",
    title: "Company Email & Identity",
    body: "Each agent gets a real email address under your domain, an org-chart profile, and an employee record. No shared accounts.",
    tag: "Identity",
    color: "#c8ff00",
  },
  {
    icon: "⬡",
    title: "Live Meeting Attendance",
    body: "Agents join video and audio calls in real time via advanced TTS/STT. They speak, listen, take notes, and follow up like any participant.",
    tag: "Meetings",
    color: "#4f9cff",
  },
  {
    icon: "⊞",
    title: "Full Tool Access",
    body: "CRM, project management, analytics, ticketing, code repos — the agent works inside your existing stack with real credentials.",
    tag: "Integrations",
    color: "#a78bfa",
  },
  {
    icon: "◈",
    title: "Institutional Memory",
    body: "Documents, SOPs, past decisions, Slack threads — the agent ingests and retains your company context, building knowledge over time.",
    tag: "Knowledge",
    color: "#2dd4bf",
  },
  {
    icon: "◎",
    title: "Continuous Learning",
    body: "Unlike static software, Ticia agents improve with every interaction, feedback loop, and task outcome. They grow with your org.",
    tag: "Adaptive",
    color: "#f97316",
  },
  {
    icon: "⋮",
    title: "Multi-Role Deployment",
    body: "Deploy the same capability base across support, ops, finance, HR. Specialize and configure each agent independently.",
    tag: "Scalable",
    color: "#ec4899",
  },
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="relative py-28 border-t border-white/5 overflow-hidden">
      <div className="orb orb-teal w-96 h-96 top-0 right-0 opacity-35" />
      <div className="orb orb-purple w-64 h-64 bottom-0 left-1/3 opacity-25" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-6">
          <span className="label-accent">Capabilities</span>
          <div className="h-px flex-1 bg-white/5" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight max-w-xl">
            Everything a real
            <br />
            employee has.
            <br />
            <span className="text-white/25 font-light">Nothing you don't need.</span>
          </h2>
          <a
            href="#contact"
            className="flex-shrink-0 glass px-6 py-3 text-xs tracking-widest uppercase text-white/60 hover:text-white hover:border-white/20 transition-all duration-200 self-start md:self-auto"
          >
            Full Capability List →
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {caps.map((c) => (
            <div
              key={c.title}
              className="glass p-7 group hover:border-white/16 transition-all duration-300 relative overflow-hidden"
            >
              <div className="flex items-start justify-between mb-6">
                <div
                  className="w-10 h-10 flex items-center justify-center text-lg border"
                  style={{
                    borderColor: c.color + "30",
                    color: c.color + "80",
                    background: c.color + "08",
                  }}
                >
                  {c.icon}
                </div>
                <span
                  className="label text-[9px] px-2 py-0.5 border"
                  style={{ borderColor: c.color + "30", color: c.color + "80" }}
                >
                  {c.tag}
                </span>
              </div>

              <h3 className="text-sm font-semibold text-white/80 mb-2.5 leading-snug group-hover:text-white transition-colors duration-200">
                {c.title}
              </h3>
              <p className="text-xs text-white/30 leading-relaxed font-light">{c.body}</p>

              {/* Bottom hover line */}
              <div
                className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-500 opacity-50"
                style={{ background: c.color }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
