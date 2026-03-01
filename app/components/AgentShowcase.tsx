const agents = [
  {
    initials: "SC",
    name: "Sarah Chen",
    role: "Customer Support Agent",
    company: "Acme Corp",
    status: "In meeting",
    statusColor: "#4f9cff",
    metrics: [
      { label: "CSAT", value: "98%" },
      { label: "Tickets", value: "247" },
      { label: "Resp.", value: "1.4m" },
    ],
    tasks: ["Resolved 14 tickets", "Updated knowledge base", "Escalated 2 cases"],
    avatarBg: "from-[#4f9cff]/20 to-[#4f9cff]/5",
    accent: "#4f9cff",
  },
  {
    initials: "RK",
    name: "Ravi Kapoor",
    role: "Data Analyst",
    company: "Stratum Inc",
    status: "Processing data",
    statusColor: "#c8ff00",
    metrics: [
      { label: "Reports", value: "34" },
      { label: "Queries", value: "1.2k" },
      { label: "Accuracy", value: "99.6%" },
    ],
    tasks: ["Built Q3 dashboard", "Automated weekly report", "Flagged anomaly"],
    avatarBg: "from-[#c8ff00]/15 to-[#c8ff00]/5",
    accent: "#c8ff00",
  },
  {
    initials: "MJ",
    name: "Maya Johnson",
    role: "HR Coordinator",
    company: "NovaTech",
    status: "Onboarding session",
    statusColor: "#a78bfa",
    metrics: [
      { label: "Onboarded", value: "12" },
      { label: "Open Roles", value: "8" },
      { label: "Time-to-Fill", value: "4d" },
    ],
    tasks: ["Scheduled 3 interviews", "Sent offer letters", "Updated HRIS"],
    avatarBg: "from-[#a78bfa]/20 to-[#a78bfa]/5",
    accent: "#a78bfa",
  },
];

export default function AgentShowcase() {
  return (
    <section className="relative py-28 border-t border-white/5 overflow-hidden">
      <div className="orb orb-green w-80 h-80 top-1/4 left-0 opacity-20" />
      <div className="orb orb-blue w-80 h-80 bottom-0 right-0 opacity-20" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-6">
          <span className="label-accent">Meet the Agents</span>
          <div className="h-px flex-1 bg-white/5" />
        </div>

        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4 leading-tight max-w-2xl">
          Real agents.
          <br />
          <span className="text-white/25 font-light">Real work. Right now.</span>
        </h2>
        <p className="text-sm text-white/35 mb-14 max-w-lg leading-relaxed">
          Each Ticia agent is provisioned with a company identity and works inside
          your tools — visible to your team just like any colleague.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {agents.map((a) => (
            <div
              key={a.name}
              className="glass p-0 overflow-hidden group hover:border-white/14 transition-all duration-300"
            >
              {/* Card header */}
              <div className="p-5 border-b border-white/6">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-11 h-11 rounded-full bg-gradient-to-br ${a.avatarBg} border flex items-center justify-center text-sm font-bold flex-shrink-0`}
                    style={{ borderColor: a.accent + "30", color: a.accent }}
                  >
                    {a.initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-semibold text-white truncate">{a.name}</div>
                    <div className="text-xs text-white/35 truncate">{a.role}</div>
                  </div>
                </div>

                {/* Status */}
                <div
                  className="flex items-center gap-2 px-3 py-1.5 rounded-sm"
                  style={{ background: a.accent + "0d", borderWidth: 1, borderColor: a.accent + "20" }}
                >
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: a.statusColor }} />
                  <span className="text-xs" style={{ color: a.statusColor }}>{a.status}</span>
                  <span className="ml-auto label text-[9px] opacity-50">{a.company}</span>
                </div>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-3 divide-x divide-white/6 border-b border-white/6">
                {a.metrics.map((m) => (
                  <div key={m.label} className="p-3 text-center">
                    <div className="text-sm font-bold text-white mb-0.5">{m.value}</div>
                    <div className="label text-[8px]">{m.label}</div>
                  </div>
                ))}
              </div>

              {/* Tasks */}
              <div className="p-4">
                <div className="label mb-2.5">Recent Activity</div>
                {a.tasks.map((t, i) => (
                  <div key={i} className="flex items-center gap-2 py-1.5 text-xs text-white/40">
                    <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: a.accent + "60" }} />
                    {t}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
