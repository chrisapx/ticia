const plans = [
  {
    name: "Starter",
    code: "STR",
    price: "$890",
    period: "/ agent / mo",
    description: "One specialized AI employee for a single function.",
    features: [
      "1 AI agent",
      "Company email provisioning",
      "3 tool integrations",
      "Meeting attendance (up to 10 / month)",
      "Standard knowledge ingestion (50 docs)",
      "Email support",
    ],
    cta: "Get Started",
    highlight: false,
  },
  {
    name: "Team",
    code: "TM",
    price: "$2,400",
    period: "/ mo",
    description: "A coordinated team of AI employees across multiple functions.",
    features: [
      "Up to 5 AI agents",
      "Full identity & email provisioning",
      "Unlimited tool integrations",
      "Unlimited meeting attendance",
      "Extended knowledge base (500 docs)",
      "Dedicated account manager",
      "Priority response",
    ],
    cta: "Deploy Your Team",
    highlight: true,
  },
  {
    name: "Enterprise",
    code: "ENT",
    price: "Custom",
    period: "",
    description: "Org-wide AI workforce deployment with custom SLAs.",
    features: [
      "Unlimited agents",
      "Custom org-chart integration",
      "SSO & compliance controls",
      "On-premise deployment option",
      "Unlimited knowledge ingestion",
      "Custom model fine-tuning",
      "24/7 dedicated support",
    ],
    cta: "Talk to Us",
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-32 border-t border-white/6">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-4">
          <span className="num-label">PRICING</span>
          <div className="h-px flex-1 bg-white/6" />
        </div>

        <h2 className="text-3xl md:text-4xl font-semibold text-white/85 mb-4 tracking-tight">
          Transparent headcount costs.
        </h2>
        <p className="text-sm text-white/35 mb-16 max-w-lg leading-relaxed">
          A Ticia agent costs a fraction of a human hire with none of the overhead — no benefits, no onboarding lag, no attrition.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-[#0a0a0a] p-8 flex flex-col ${
                plan.highlight ? "ring-1 ring-white/14 z-10" : ""
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-0 right-0 h-px bg-[#c8ff00]/40" />
              )}

              <div className="flex items-start justify-between mb-8">
                <div>
                  <span className="num-label block mb-2">{plan.code}</span>
                  <span className="text-sm font-medium text-white/80">{plan.name}</span>
                </div>
                {plan.highlight && (
                  <span className="text-[9px] tracking-widest uppercase border border-[#c8ff00]/30 text-[#c8ff00]/70 px-2 py-1">
                    Popular
                  </span>
                )}
              </div>

              <div className="mb-2">
                <span className="text-3xl font-semibold text-white tracking-tight">
                  {plan.price}
                </span>
                {plan.period && (
                  <span className="text-xs text-white/30 ml-1">{plan.period}</span>
                )}
              </div>

              <p className="text-xs text-white/30 mb-8 leading-relaxed">{plan.description}</p>

              <ul className="flex-1 flex flex-col gap-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-xs text-white/45">
                    <span className="text-white/20 mt-0.5 flex-shrink-0">—</span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block text-center px-6 py-3 text-xs tracking-widest uppercase transition-all duration-200 ${
                  plan.highlight
                    ? "bg-white text-black hover:bg-white/90"
                    : "glass border border-white/12 text-white/70 hover:border-white/24 hover:text-white"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
