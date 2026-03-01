const steps = [
  {
    num: "01",
    title: "Request a Role",
    body: "Specify the job function, required skills, and access level. We match you with the right Ticia agent profile.",
    detail: "avg. response < 2h",
  },
  {
    num: "02",
    title: "Agent Provisioning",
    body: "Your agent receives a company email address, is granted access to your tools, and ingests your documentation, processes, and institutional knowledge.",
    detail: "< 24h setup",
  },
  {
    num: "03",
    title: "Onboarding Sprint",
    body: "Like any new hire, the agent shadows workflows, attends orientation, and asks clarifying questions. It learns your specific company context — not just generic knowledge.",
    detail: "3–5 day ramp",
  },
  {
    num: "04",
    title: "Deployed & Working",
    body: "The agent joins your communication channels, attends meetings via live TTS/STT, responds to emails, and executes assigned tasks. Fully integrated.",
    detail: "ongoing",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-32 border-t border-white/6">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-16">
          <span className="num-label">HOW IT WORKS</span>
          <div className="h-px flex-1 bg-white/6" />
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-6 top-10 bottom-10 w-px bg-white/6 hidden md:block" />

          <div className="flex flex-col gap-0">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className="relative flex flex-col md:flex-row gap-6 md:gap-12 p-8 border-b border-white/6 glass-hover transition-all duration-300 group"
              >
                {/* Number node */}
                <div className="flex-shrink-0 flex items-start gap-4 md:w-48">
                  <div className="w-3 h-3 border border-white/20 bg-[#0a0a0a] mt-1 group-hover:border-[#c8ff00]/50 transition-colors duration-300 flex-shrink-0" />
                  <div>
                    <span className="num-label">{step.num}</span>
                    <div className="text-[10px] text-white/20 tracking-widest mt-1 uppercase font-mono">
                      {step.detail}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-base font-medium text-white/80 mb-3 group-hover:text-white transition-colors duration-200 tracking-wide">
                    {step.title}
                  </h3>
                  <p className="text-sm text-white/35 leading-relaxed font-light max-w-lg">
                    {step.body}
                  </p>
                </div>

                {/* Visual accent */}
                <div className="hidden lg:flex items-center justify-end w-24">
                  <span className="text-5xl font-bold text-white/[0.04] group-hover:text-white/[0.07] transition-colors duration-300 select-none font-mono">
                    {i + 1}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
