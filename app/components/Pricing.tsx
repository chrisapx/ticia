const plans = [
  {
    name: "Starter",
    code: "STR-1",
    price: "$890",
    period: "/ agent / mo",
    description: "One specialized AI employee for a single function.",
    features: [
      "1 AI agent",
      "Company email provisioning",
      "3 tool integrations",
      "10 meetings / month",
      "50-doc knowledge base",
      "Email support",
    ],
    cta: "Get Started",
    highlight: false,
    accentColor: "#4f9cff",
  },
  {
    name: "Team",
    code: "TM-5",
    price: "$2,400",
    period: "/ mo",
    description: "A coordinated team of AI employees across multiple functions.",
    features: [
      "Up to 5 AI agents",
      "Full identity provisioning",
      "Unlimited integrations",
      "Unlimited meetings",
      "500-doc knowledge base",
      "Dedicated account manager",
      "Priority response",
    ],
    cta: "Deploy Your Team",
    highlight: true,
    accentColor: "#c8ff00",
  },
  {
    name: "Enterprise",
    code: "ENT-∞",
    price: "Custom",
    period: "",
    description: "Org-wide deployment with custom SLAs and dedicated infrastructure.",
    features: [
      "Unlimited agents",
      "Custom org-chart integration",
      "SSO & compliance controls",
      "On-premise option",
      "Unlimited knowledge base",
      "Custom model fine-tuning",
      "24/7 dedicated support",
    ],
    cta: "Talk to Sales",
    highlight: false,
    accentColor: "#a78bfa",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-28 border-t border-white/5 overflow-hidden">
      <div className="orb orb-purple w-96 h-96 top-0 right-0 opacity-25" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-6">
          <span className="label-accent">Pricing</span>
          <div className="h-px flex-1 bg-white/5" />
        </div>

        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4 leading-tight">
          Clear headcount costs.
        </h2>
        <p className="text-sm text-white/35 mb-14 max-w-lg leading-relaxed">
          A Ticia agent costs a fraction of a human hire — no benefits, no onboarding lag, no attrition.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`glass flex flex-col overflow-hidden relative transition-all duration-300 hover:border-white/16 ${
                plan.highlight ? "border-[#c8ff00]/25" : ""
              }`}
            >
              {/* Top accent */}
              <div
                className="h-0.5 w-full opacity-60"
                style={{ background: plan.accentColor }}
              />

              <div className="p-7 flex-1 flex flex-col">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <span
                      className="label text-[9px] block mb-1 font-mono"
                      style={{ color: plan.accentColor + "80" }}
                    >
                      {plan.code}
                    </span>
                    <span className="text-sm font-semibold text-white">{plan.name}</span>
                  </div>
                  {plan.highlight && (
                    <span
                      className="text-[9px] tracking-widest uppercase px-2 py-1 font-bold"
                      style={{
                        background: "#c8ff00",
                        color: "#000",
                      }}
                    >
                      Popular
                    </span>
                  )}
                </div>

                <div className="mb-2">
                  <span className="text-3xl font-bold text-white">{plan.price}</span>
                  {plan.period && (
                    <span className="text-xs text-white/30 ml-1">{plan.period}</span>
                  )}
                </div>
                <p className="text-xs text-white/30 mb-7 leading-relaxed">{plan.description}</p>

                <ul className="flex-1 flex flex-col gap-2.5 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-xs text-white/45">
                      <span
                        className="mt-0.5 flex-shrink-0 text-[10px]"
                        style={{ color: plan.accentColor + "60" }}
                      >
                        ✓
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`block text-center px-6 py-3 text-xs tracking-widest uppercase font-bold transition-all duration-200 ${
                    plan.highlight
                      ? "bg-[#c8ff00] text-black hover:bg-[#d4ff33]"
                      : "glass border border-white/10 text-white/65 hover:text-white hover:border-white/20"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
