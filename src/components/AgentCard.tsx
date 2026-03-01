import { useEffect, useState } from "react";

// Tasks cycle: complete one by one, then reset after all done
const TASKS = [
  "Reply to 12 support tickets",
  "Compile weekly analytics",
  "Schedule onboarding calls",
  "Attend Product Review",
];

// Live activity messages that type out
const ACTIVITY = [
  "Responding to customer inquiry…",
  "Pulling Q3 data from dashboard…",
  "Sending calendar invite to team…",
  "Joining meeting via voice channel…",
  "Updating CRM with call notes…",
];

export default function AgentCard() {
  const [completedTasks, setCompletedTasks] = useState<number[]>([]);
  const [activityIndex, setActivityIndex] = useState(0);
  const [activityText, setActivityText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  // Complete tasks one by one every 2.5 s, then reset
  useEffect(() => {
    if (completedTasks.length >= TASKS.length) {
      const t = setTimeout(() => setCompletedTasks([]), 2000);
      return () => clearTimeout(t);
    }
    const t = setTimeout(
      () => setCompletedTasks((p) => [...p, p.length]),
      2500
    );
    return () => clearTimeout(t);
  }, [completedTasks]);

  // Typewriter for activity feed
  useEffect(() => {
    const target = ACTIVITY[activityIndex];
    if (isTyping) {
      if (activityText.length < target.length) {
        const t = setTimeout(() => setActivityText(target.slice(0, activityText.length + 1)), 40);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setIsTyping(false), 1800);
        return () => clearTimeout(t);
      }
    } else {
      const t = setTimeout(() => {
        setActivityText("");
        setActivityIndex((i) => (i + 1) % ACTIVITY.length);
        setIsTyping(true);
      }, 400);
      return () => clearTimeout(t);
    }
  }, [activityText, isTyping, activityIndex]);

  return (
    <div className="relative w-full max-w-[340px]">
      {/* Glow behind card */}
      <div className="absolute inset-0 rounded-none pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, rgba(79,156,255,0.12) 0%, transparent 70%)", transform: "scale(1.3)" }} />

      {/* Main card */}
      <div className="relative glass float overflow-hidden">

        {/* Card header */}
        <div className="px-5 pt-5 pb-4 border-b border-white/6">
          <div className="flex items-center gap-3.5">
            {/* Avatar */}
            <div className="relative flex-shrink-0">
              <div className="w-11 h-11 rounded-full bg-[rgba(79,156,255,0.15)] border border-[rgba(79,156,255,0.25)] flex items-center justify-center text-sm font-bold text-[#4f9cff]">
                SC
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-[#c8ff00] border-2 border-[#080810] pulse-dot" />
            </div>
            {/* Name */}
            <div className="flex-1 min-w-0">
              <div className="text-sm font-semibold text-white leading-tight">Sarah Chen</div>
              <div className="text-xs text-white/35 mt-0.5">Customer Support Agent</div>
            </div>
            {/* Status badge */}
            <div className="glass px-2 py-1 flex-shrink-0">
              <span className="label-accent text-[9px]">Active</span>
            </div>
          </div>

          {/* Email identity */}
          <div className="mt-3 flex items-center gap-2 text-xs text-white/30">
            <span>✉</span>
            <span className="font-mono">sarah@yourcompany.com</span>
          </div>
        </div>

        {/* Live status */}
        <div className="px-5 py-3 border-b border-white/6 bg-[rgba(79,156,255,0.04)]">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4f9cff] flex-shrink-0 pulse-blue" />
            <span className="text-xs text-[#4f9cff]">In meeting · Product Review</span>
          </div>
        </div>

        {/* Task list */}
        <div className="px-5 py-4 border-b border-white/6">
          <div className="label mb-3">Today's tasks</div>
          {TASKS.map((task, i) => {
            const done = completedTasks.includes(i);
            return (
              <div
                key={i}
                className={`flex items-start gap-2.5 py-1.5 text-xs transition-all duration-500 ${done ? "opacity-40" : "opacity-75"}`}
              >
                <span
                  className={`mt-0.5 flex-shrink-0 w-3.5 h-3.5 border flex items-center justify-center transition-all duration-300 ${
                    done ? "border-[#c8ff00]/40 text-[#c8ff00]" : "border-white/15"
                  }`}
                >
                  {done && <span className="text-[8px] leading-none">✓</span>}
                </span>
                <span className={done ? "line-through" : ""}>{task}</span>
              </div>
            );
          })}
        </div>

        {/* Live activity typewriter */}
        <div className="px-5 py-4">
          <div className="label mb-2">Live activity</div>
          <div className="text-xs text-white/40 font-mono min-h-[18px]">
            {activityText}<span className="blink opacity-60">_</span>
          </div>
        </div>
      </div>
    </div>
  );
}
