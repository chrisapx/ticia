"use client";

import { useEffect, useRef, useState } from "react";

const roles = [
  "Customer Support Agent",
  "Data Analyst",
  "HR Coordinator",
  "Research Specialist",
  "Sales Dev Rep",
];

const tasks = [
  { label: "Reply to 14 support tickets", done: true, color: "bg-[#c8ff00]" },
  { label: "Compile Q3 analytics report", done: true, color: "bg-[#4f9cff]" },
  { label: "Schedule onboarding for new hire", done: false, color: "bg-[#a78bfa]" },
  { label: "Attend Product Review meeting", done: false, color: "bg-[#2dd4bf]" },
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
        }, 55);
      } else {
        timeoutRef.current = setTimeout(() => setTyping(false), 2200);
      }
    } else {
      if (displayed.length > 0) {
        timeoutRef.current = setTimeout(() => {
          setDisplayed(displayed.slice(0, -1));
        }, 28);
      } else {
        timeoutRef.current = setTimeout(() => {
          setRoleIndex((i) => (i + 1) % roles.length);
          setTyping(true);
        }, 60);
      }
    }
    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, [displayed, typing, roleIndex]);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden grid-lines">

      {/* Background orbs — these create the glass blur depth */}
      <div className="orb orb-green w-[500px] h-[500px] top-[-100px] left-[-100px] opacity-70" />
      <div className="orb orb-blue w-[400px] h-[400px] top-[20%] right-[-80px] opacity-80" />
      <div className="orb orb-purple w-[350px] h-[350px] bottom-[10%] left-[30%] opacity-60" />

      {/* Corner marks */}
      <div className="absolute top-20 left-0 w-10 h-px bg-[#c8ff00]/40" />
      <div className="absolute top-20 left-0 w-px h-10 bg-[#c8ff00]/40" />
      <div className="absolute top-20 right-0 w-10 h-px bg-[#c8ff00]/20" />
      <div className="absolute top-20 right-0 w-px h-10 bg-[#c8ff00]/20" />

      <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ── LEFT COLUMN ── */}
          <div>
            {/* Beta pill */}
            <div className="inline-flex items-center gap-2.5 glass-sm px-3 py-1.5 mb-10">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c8ff00] pulse-dot" />
              <span className="label-accent">Workforce AI — Private Beta</span>
            </div>

            <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight leading-[0.92] text-white mb-5">
              The world's first
              <br />
              <span className="text-white/20">truly autonomous</span>
              <br />
              AI Employee.
            </h1>

            {/* Typewriter */}
            <div className="flex items-center gap-3 mb-8 h-7">
              <span className="label text-white/30">Hiring now:</span>
              <span className="text-sm font-mono text-[#c8ff00]">
                {displayed}<span className="blink">|</span>
              </span>
            </div>

            <p className="text-white/45 text-base max-w-md leading-relaxed mb-10 font-light">
              Ticia agents are onboarded exactly like humans — company email,
              tool access, institutional knowledge, and live meeting presence via
              TTS / STT. Autonomous from day one.
            </p>

            {/* CTA row */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-[#c8ff00] text-black px-7 py-3.5 text-xs font-bold tracking-widest uppercase hover:bg-[#d4ff33] transition-colors duration-200"
              >
                Hire Your First Agent
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 glass px-7 py-3.5 text-xs tracking-widest uppercase text-white/60 hover:text-white hover:border-white/20 transition-all duration-200"
              >
                How It Works
                <span className="text-white/30">↓</span>
              </a>
            </div>

            {/* Stats */}
            <div className="mt-14 pt-8 border-t border-white/6 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {[
                { v: "< 24h", l: "To Deploy" },
                { v: "∞", l: "Parallel Roles" },
                { v: "100%", l: "Memory Retention" },
                { v: "Live", l: "Meeting Voice" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="text-xl font-bold text-white mb-1">{s.v}</div>
                  <div className="label">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT COLUMN — Agent card ── */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Glow behind card */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-72 h-72 rounded-full bg-[#4f9cff]/10 blur-3xl" />
            </div>

            {/* Main agent card */}
            <div className="relative glass w-full max-w-sm float-slow">
              {/* Card header */}
              <div className="p-5 border-b border-white/8">
                <div className="flex items-center gap-4">
                  {/* Avatar */}
                  <div className="relative flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-[#1a1a2e] border border-white/10 flex items-center justify-center text-lg font-bold text-white">
                      SC
                    </div>
                    <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-[#c8ff00] border-2 border-[#080810] pulse-dot" />
                  </div>
                  {/* Name block */}
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-semibold text-white">Sarah Chen</div>
                    <div className="text-xs text-white/40">Customer Support Agent</div>
                  </div>
                  {/* Company badge */}
                  <div className="glass-sm px-2 py-1 flex-shrink-0">
                    <span className="label-accent text-[9px]">ACTIVE</span>
                  </div>
                </div>
              </div>

              {/* Email & identity */}
              <div className="px-5 py-3 border-b border-white/8 flex items-center gap-3">
                <span className="text-white/25 text-xs">✉</span>
                <span className="text-xs text-white/50 font-mono">sarah@yourcompany.com</span>
                <span className="ml-auto label border border-white/10 px-1.5 py-0.5 text-[8px]">COMPANY EMAIL</span>
              </div>

              {/* Current activity */}
              <div className="px-5 py-3 border-b border-white/8">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4f9cff] pulse-blue flex-shrink-0" />
                  <span className="label text-[#4f9cff]">In Meeting · Product Review</span>
                </div>
                <div className="text-xs text-white/30 font-mono">00:24:07 elapsed · 3 participants</div>
              </div>

              {/* Task list */}
              <div className="px-5 py-3">
                <div className="label mb-3">Today's Tasks</div>
                {tasks.map((t, i) => (
                  <div key={i} className="task-row">
                    <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${t.color} ${t.done ? "opacity-100" : "opacity-30"}`} />
                    <span className={`text-xs flex-1 ${t.done ? "text-white/35 line-through" : "text-white/65"}`}>
                      {t.label}
                    </span>
                    {t.done && <span className="text-[10px] text-white/20">✓</span>}
                  </div>
                ))}
              </div>

              {/* Metrics bar */}
              <div className="px-5 py-3 border-t border-white/8 grid grid-cols-3 gap-3">
                {[
                  { v: "98%", l: "CSAT" },
                  { v: "1.4m", l: "Resp." },
                  { v: "247", l: "Tickets" },
                ].map((m) => (
                  <div key={m.l} className="text-center">
                    <div className="text-sm font-bold text-white">{m.v}</div>
                    <div className="label text-[8px] mt-0.5">{m.l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating mini card — second agent */}
            <div className="absolute -bottom-6 -left-4 glass-sm w-52 p-3 float" style={{ animationDelay: "1.5s" }}>
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-[#a78bfa]/20 border border-[#a78bfa]/30 flex items-center justify-center text-[10px] font-bold text-[#a78bfa]">
                  RK
                </div>
                <div>
                  <div className="text-[11px] font-medium text-white/80">Ravi Kapoor</div>
                  <div className="text-[9px] text-white/35">Data Analyst · Idle</div>
                </div>
                <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[#a78bfa]/50 flex-shrink-0" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/5" />
    </section>
  );
}
