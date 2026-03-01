import { useEffect, useState } from "react";

const TASKS = [
  "Reply to 14 support tickets",
  "Compile Q3 analytics report",
  "Schedule onboarding for new hire",
  "Attend Product Review meeting",
];

const ACTIVITY = [
  "Responding to customer inquiry…",
  "Pulling Q3 data from dashboard…",
  "Sending calendar invite to team…",
  "Joining meeting via voice channel…",
  "Updating CRM with call notes…",
];

// Seed the meeting timer mid-session so it looks like the agent has been in the meeting a while
const INITIAL_MEETING_ELAPSED_SECONDS = 1447; // ~24 minutes

export default function AgentCard() {
  const [completedTasks, setCompletedTasks] = useState<number[]>([]);
  const [activityIndex, setActivityIndex] = useState(0);
  const [activityText, setActivityText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [elapsed, setElapsed] = useState(INITIAL_MEETING_ELAPSED_SECONDS);

  // Meeting timer counts up
  useEffect(() => {
    const t = setInterval(() => setElapsed((s) => s + 1), 1000);
    return () => clearInterval(t);
  }, []);

  // Complete tasks one by one every 3s, then reset
  useEffect(() => {
    if (completedTasks.length >= TASKS.length) {
      const t = setTimeout(() => setCompletedTasks([]), 2000);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setCompletedTasks((p) => [...p, p.length]), 3000);
    return () => clearTimeout(t);
  }, [completedTasks]);

  // Typewriter for activity feed
  useEffect(() => {
    const target = ACTIVITY[activityIndex];
    if (isTyping) {
      if (activityText.length < target.length) {
        const t = setTimeout(() => setActivityText(target.slice(0, activityText.length + 1)), 38);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setIsTyping(false), 2000);
        return () => clearTimeout(t);
      }
    } else {
      const t = setTimeout(() => {
        setActivityText("");
        setActivityIndex((i) => (i + 1) % ACTIVITY.length);
        setIsTyping(true);
      }, 300);
      return () => clearTimeout(t);
    }
  }, [activityText, isTyping, activityIndex]);

  const mm = String(Math.floor(elapsed / 60)).padStart(2, "0");
  const ss = String(elapsed % 60).padStart(2, "0");

  return (
    <div className="relative float">
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 60% 40%, rgba(79,156,255,0.13) 0%, transparent 65%)",
          transform: "scale(1.5)",
        }}
      />

      {/* ── Main agent card ── */}
      <div className="relative glass w-[320px]" style={{ boxShadow: "0 32px 80px rgba(0,0,0,0.5)" }}>

        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-[#4f9cff]/40 pointer-events-none" />

        {/* Header */}
        <div className="px-5 pt-5 pb-4 border-b border-white/5">
          <div className="flex items-center gap-3.5">
            <div className="relative flex-shrink-0">
              <div className="w-11 h-11 rounded-full bg-[rgba(79,156,255,0.18)] border border-[rgba(79,156,255,0.30)] flex items-center justify-center text-sm font-bold text-[#4f9cff]">
                SC
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-[#c8ff00] border-2 border-[#09090f] pulse-dot" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-semibold text-white leading-tight">Sarah Chen</div>
              <div className="text-[11px] text-white/35 mt-0.5">Customer Support Agent</div>
            </div>
            <div className="flex-shrink-0 glass px-2.5 py-1 border border-[#c8ff00]/20">
              <span className="label-accent text-[8px]">Active</span>
            </div>
          </div>
          {/* Email */}
          <div className="mt-3 flex items-center gap-2 text-[11px] text-white/25 font-mono">
            <span className="text-[9px]">✉</span>
            sarah@yourcompany.com
            <span className="ml-auto glass px-2 py-0.5">
              <span className="label text-[8px]">Company email</span>
            </span>
          </div>
        </div>

        {/* Live meeting */}
        <div className="px-5 py-3 border-b border-white/5 bg-[rgba(79,156,255,0.04)]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4f9cff] flex-shrink-0 pulse-blue" />
              <span className="text-[11px] text-[#4f9cff] font-medium">In meeting · Product Review</span>
            </div>
            <span className="label text-[9px]">{mm}:{ss} elapsed · 3 participants</span>
          </div>
        </div>

        {/* Tasks */}
        <div className="px-5 py-4 border-b border-white/5">
          <div className="label mb-3">Today's tasks</div>
          {TASKS.map((task, i) => {
            const done = completedTasks.includes(i);
            return (
              <div
                key={i}
                className={`flex items-start gap-2.5 py-1.5 text-[11px] transition-all duration-700 ${done ? "opacity-35" : "opacity-70"}`}
              >
                <span
                  className={`mt-0.5 flex-shrink-0 w-3 h-3 border flex items-center justify-center transition-all duration-500 ${
                    done ? "border-[#c8ff00]/50 bg-[#c8ff00]/10" : "border-white/12"
                  }`}
                >
                  {done && <span className="text-[7px] text-[#c8ff00] leading-none">✓</span>}
                </span>
                <span className={done ? "line-through text-white/30" : "text-white/70"}>{task}</span>
              </div>
            );
          })}
        </div>

        {/* Performance */}
        <div className="px-5 py-4 grid grid-cols-3 gap-3 border-b border-white/5">
          {[["98%", "CSAT"], ["1.4m", "RESP."], ["247", "TICKETS"]].map(([v, l]) => (
            <div key={l} className="text-center">
              <div className="text-base font-bold text-white leading-tight">{v}</div>
              <div className="label text-[8px] mt-0.5">{l}</div>
            </div>
          ))}
        </div>

        {/* Live activity */}
        <div className="px-5 py-3.5">
          <div className="label mb-1.5">Live activity</div>
          <div className="text-[11px] text-white/35 font-mono min-h-[16px]">
            {activityText}<span className="blink opacity-50">_</span>
          </div>
        </div>
      </div>

      {/* ── Floating mini card — second agent ── */}
      <div
        className="absolute -bottom-8 -left-12 glass w-[160px]"
        style={{ boxShadow: "0 16px 40px rgba(0,0,0,0.45)" }}
      >
        <div className="absolute top-0 left-0 right-0 h-px bg-[#c8ff00]/25 pointer-events-none" />
        <div className="p-3 flex items-center gap-2.5">
          <div className="relative flex-shrink-0">
            <div className="w-7 h-7 rounded-full bg-[rgba(167,139,250,0.18)] border border-[rgba(167,139,250,0.25)] flex items-center justify-center text-[9px] font-bold text-[#a78bfa]">
              RK
            </div>
            <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#2dd4bf] border border-[#09090f]" />
          </div>
          <div className="min-w-0">
            <div className="text-[10px] font-semibold text-white/80 leading-tight truncate">Ravi Kapoor</div>
            <div className="text-[9px] text-white/30 mt-0.5">Data Analyst · Idle</div>
          </div>
        </div>
      </div>
    </div>
  );
}
