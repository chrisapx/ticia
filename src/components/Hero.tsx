import { useState } from "react";
import AgentCard from "./AgentCard";
import ContactModal from "./ContactModal";

const STATS = [
  { value: "< 24h", label: "To deploy" },
  { value: "∞", label: "Parallel roles" },
  { value: "100%", label: "Memory retention" },
  { value: "Live", label: "Meeting voice" },
];

export default function Hero() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background orbs */}
        <div className="orb w-[600px] h-[600px] bg-[rgba(79,156,255,0.07)] top-[-100px] left-[-80px]" />
        <div className="orb w-[400px] h-[400px] bg-[rgba(200,255,0,0.05)] bottom-[10%] right-[5%]" />
        <div className="orb w-[300px] h-[300px] bg-[rgba(167,139,250,0.06)] top-[30%] left-[38%]" />

        <div className="relative max-w-7xl mx-auto px-8 pt-20 pb-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* ── LEFT: Agent card visual ── */}
            <div className="flex justify-center lg:justify-start pl-0 lg:pl-8 pt-10">
              <AgentCard />
            </div>

            {/* ── RIGHT: Headline + CTA ── */}
            <div className="lg:pl-8">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2.5 glass border border-white/8 px-4 py-2 mb-10">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c8ff00] flex-shrink-0 pulse-dot" />
                <span className="label-accent">Workforce AI — Private Beta</span>
              </div>

              {/* Headline — very large, bold, like CrypLock */}
              <h1 className="font-black uppercase leading-[0.88] tracking-tight mb-8"
                style={{ fontSize: "clamp(52px, 7vw, 88px)" }}>
                <span className="text-white">The world's<br/>first truly</span>
                <br/>
                <span className="text-white/25">autonomous</span>
                <br/>
                <span className="text-white">AI Employee.</span>
              </h1>

              <p className="text-sm text-white/35 leading-relaxed mb-10 max-w-sm font-light">
                Ticia agents are onboarded exactly like humans — company email,
                tool access, institutional knowledge, and live meeting presence
                via TTS/STT. Autonomous from day one.
              </p>

              {/* CTA row */}
              <div className="flex items-center gap-4 mb-14">
                <button
                  onClick={() => setContactOpen(true)}
                  className="inline-flex items-center gap-2.5 bg-[#c8ff00] text-black px-8 py-3.5 text-xs font-black tracking-[0.16em] uppercase hover:bg-[#d8ff33] transition-colors duration-150"
                >
                  Hire your first agent
                </button>
                <button className="inline-flex items-center gap-2 glass border border-white/10 px-6 py-3.5 text-xs tracking-[0.14em] uppercase text-white/40 hover:text-white/70 hover:border-white/20 transition-all duration-200">
                  How it works ↓
                </button>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-4 gap-6 pt-8 border-t border-white/6">
                {STATS.map(({ value, label }) => (
                  <div key={label}>
                    <div className="text-xl font-black text-white leading-tight">{value}</div>
                    <div className="label mt-1 text-[9px]">{label}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, transparent, #09090f)" }} />
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8">
        <div className="max-w-7xl mx-auto px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-5 h-5 bg-[#c8ff00] flex items-center justify-center">
              <span className="text-black font-black text-[9px] font-mono">T</span>
            </span>
            <span className="label">Ticia AI Inc.</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c8ff00] pulse-dot" />
            <span className="label-accent text-[9px]">Private Beta</span>
          </div>
        </div>
      </footer>

      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
}
