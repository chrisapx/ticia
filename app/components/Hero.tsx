"use client";

import { useEffect, useRef, useState } from "react";

const roles = [
  "Customer Support Agent",
  "Data Analyst",
  "HR Coordinator",
  "Research Specialist",
  "Sales Development Rep",
  "Operations Manager",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const current = roles[roleIndex];
    if (typing) {
      if (displayed.length < current.length) {
        timeoutRef.current = setTimeout(() => {
          setDisplayed(current.slice(0, displayed.length + 1));
        }, 60);
      } else {
        timeoutRef.current = setTimeout(() => setTyping(false), 2000);
      }
    } else {
      if (displayed.length > 0) {
        timeoutRef.current = setTimeout(() => {
          setDisplayed(displayed.slice(0, -1));
        }, 30);
      } else {
        timeoutRef.current = setTimeout(() => {
          setRoleIndex((i) => (i + 1) % roles.length);
          setTyping(true);
        }, 80);
      }
    }
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [displayed, typing, roleIndex]);

  return (
    <section className="relative min-h-screen flex flex-col justify-center dot-grid scanline overflow-hidden">
      {/* Corner grid accents */}
      <div className="absolute top-0 left-0 w-48 h-48 border-r border-b border-white/5 pointer-events-none" />
      <div className="absolute top-0 right-0 w-48 h-48 border-l border-b border-white/5 pointer-events-none" />

      {/* Subtle orb — no gradient, just a blurred solid */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full bg-white/[0.012] blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20 w-full">
        {/* Status badge */}
        <div className="flex items-center gap-2 mb-10">
          <span className="w-2 h-2 rounded-full bg-[#c8ff00] pulse-green inline-block" />
          <span className="num-label tracking-widest">WORKFORCE AI — PRIVATE BETA</span>
        </div>

        {/* Main headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[0.95] text-white mb-6 max-w-5xl">
          Hire an AI
          <br />
          <span className="text-white/30">as your next</span>
          <br />
          Employee.
        </h1>

        {/* Typewriter subtitle */}
        <div className="flex items-center gap-3 mb-10 h-8">
          <span className="text-white/35 text-sm tracking-widest uppercase font-mono">Role:</span>
          <span className="text-white/75 text-sm tracking-wide font-mono">
            {displayed}
            <span className="blink text-[#c8ff00]">_</span>
          </span>
        </div>

        <p className="text-white/40 text-base max-w-xl leading-relaxed mb-12 font-light">
          Ticia agents are onboarded like humans — given company email, access
          credentials, institutional knowledge, and attend live meetings. They
          work autonomously from day one.
        </p>

        {/* CTA row */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#contact"
            className="glass border border-white/14 px-8 py-4 text-xs tracking-[0.2em] uppercase text-white/90 hover:border-white/30 hover:bg-white/8 transition-all duration-200 text-center"
          >
            Hire Your First Agent
          </a>
          <a
            href="#how-it-works"
            className="px-8 py-4 text-xs tracking-[0.2em] uppercase text-white/35 hover:text-white/65 transition-colors duration-200 flex items-center justify-center gap-2"
          >
            See how it works
            <span className="text-white/20">→</span>
          </a>
        </div>

        {/* Stats row */}
        <div className="mt-20 flex flex-wrap gap-x-12 gap-y-6 border-t border-white/6 pt-10">
          {[
            { value: "< 24h", label: "Onboarding time" },
            { value: "∞", label: "Simultaneous roles" },
            { value: "100%", label: "Institutional memory" },
            { value: "Live", label: "Meeting attendance" },
          ].map((s) => (
            <div key={s.label} className="flex flex-col gap-1">
              <span className="text-2xl font-semibold text-white tracking-tight">{s.value}</span>
              <span className="num-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom edge line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/6" />
    </section>
  );
}
