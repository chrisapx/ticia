import { useEffect, useRef, useState } from "react";
import AgentCard from "./AgentCard";
import ContactModal from "./ContactModal";

const roles = [
  "Customer Support Agent",
  "Data Analyst",
  "HR Coordinator",
  "Research Specialist",
  "Sales Dev Rep",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);
  const [contactOpen, setContactOpen] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const target = roles[roleIndex];
    if (typing) {
      if (displayed.length < target.length) {
        timer.current = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 58);
      } else {
        timer.current = setTimeout(() => setTyping(false), 2400);
      }
    } else {
      if (displayed.length > 0) {
        timer.current = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
      } else {
        timer.current = setTimeout(() => {
          setRoleIndex((i) => (i + 1) % roles.length);
          setTyping(true);
        }, 80);
      }
    }
    return () => { if (timer.current) clearTimeout(timer.current); };
  }, [displayed, typing, roleIndex]);

  return (
    <>
      <section className="relative min-h-screen flex items-center grid-lines overflow-hidden">
        {/* Orbs — give glass blur depth */}
        <div className="orb w-[480px] h-[480px] bg-[rgba(200,255,0,0.07)] top-[-80px] left-[-120px]" />
        <div className="orb w-[400px] h-[400px] bg-[rgba(79,156,255,0.1)] top-[15%] right-[-60px]" />
        <div className="orb w-[320px] h-[320px] bg-[rgba(167,139,250,0.08)] bottom-[5%] left-[35%]" />

        {/* Corner accent marks */}
        <div className="absolute top-20 left-0 w-8 h-px bg-[#c8ff00]/30 pointer-events-none" />
        <div className="absolute top-20 left-0 w-px h-8 bg-[#c8ff00]/30 pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-16 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* ── Left: copy ── */}
            <div>
              {/* Status chip */}
              <div className="inline-flex items-center gap-2 glass px-3 py-1.5 mb-10">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c8ff00] pulse-dot" />
                <span className="label-accent">Now hiring AI employees</span>
              </div>

              {/* Headline */}
              <h1 className="text-5xl sm:text-6xl xl:text-7xl font-bold tracking-tight leading-[0.9] text-white mb-6">
                Hire an AI
                <br />
                <span className="text-white/20">as your next</span>
                <br />
                Employee.
              </h1>

              {/* Typewriter role */}
              <div className="flex items-center gap-3 mb-8 h-6">
                <span className="label">Role:</span>
                <span className="text-sm font-mono text-[#c8ff00]">
                  {displayed}<span className="blink">|</span>
                </span>
              </div>

              <p className="text-white/40 text-sm leading-relaxed mb-10 max-w-md font-light">
                Ticia agents are onboarded like humans — given a company email,
                tool access, institutional knowledge, and live meeting presence.
                Autonomous from day one.
              </p>

              {/* Single CTA */}
              <button
                onClick={() => setContactOpen(true)}
                className="inline-flex items-center gap-2 bg-[#c8ff00] text-black px-7 py-3.5 text-xs font-bold tracking-widest uppercase hover:bg-[#d6ff33] transition-colors duration-200"
              >
                Get in touch
              </button>
            </div>

            {/* ── Right: animated agent card ── */}
            <div className="relative flex justify-center lg:justify-end">
              <AgentCard />
            </div>

          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, transparent, #080810)" }} />
      </section>

      {/* Simple footer line */}
      <footer className="border-t border-white/5 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
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
