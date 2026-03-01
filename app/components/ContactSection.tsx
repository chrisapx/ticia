"use client";

import { useState } from "react";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", company: "", role: "", message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-28 border-t border-white/5 overflow-hidden">
      <div className="orb orb-green w-80 h-80 bottom-0 right-1/4 opacity-25" />
      <div className="orb orb-blue w-64 h-64 top-0 left-0 opacity-20" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="label-accent">Get Access</span>
              <div className="h-px flex-1 bg-white/5" />
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6 leading-tight">
              Hire your first
              <br />
              <span className="text-white/25 font-light">AI employee today.</span>
            </h2>

            <p className="text-sm text-white/35 leading-relaxed mb-10 max-w-sm">
              We're onboarding select companies in private beta. Submit your request
              and our team will reach out within 48 hours.
            </p>

            <div className="flex flex-col gap-0 border border-white/8 overflow-hidden">
              {[
                { label: "Onboarding", value: "< 24 hours from approval", color: "#c8ff00" },
                { label: "Minimum term", value: "3 months", color: "#4f9cff" },
                { label: "Beta pricing", value: "50% off standard rates", color: "#a78bfa" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-6 px-5 py-4 border-b border-white/6 last:border-b-0"
                  style={{ borderLeftWidth: 2, borderLeftColor: item.color + "40" }}
                >
                  <span className="label w-28 flex-shrink-0">{item.label}</span>
                  <span className="text-xs text-white/55">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div>
            {submitted ? (
              <div className="glass p-10 flex flex-col items-center justify-center h-full gap-6 text-center min-h-[400px]">
                <div
                  className="w-14 h-14 flex items-center justify-center text-2xl"
                  style={{ background: "#c8ff00", color: "#000" }}
                >
                  ✓
                </div>
                <div>
                  <p className="text-white font-semibold text-lg mb-2">Request received.</p>
                  <p className="text-xs text-white/35 leading-relaxed">
                    We'll reach out to {form.email} within 48 hours to schedule
                    your onboarding call.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { id: "name" as const, label: "Full Name", placeholder: "Jane Smith", type: "text", required: true },
                    { id: "email" as const, label: "Work Email", placeholder: "jane@company.com", type: "email", required: true },
                  ].map((field) => (
                    <div key={field.id} className="flex flex-col gap-2">
                      <label className="label">{field.label}</label>
                      <input
                        type={field.type}
                        required={field.required}
                        value={form[field.id]}
                        onChange={(e) => setForm({ ...form, [field.id]: e.target.value })}
                        className="glass border border-white/8 px-4 py-3 text-xs text-white/80 placeholder-white/20 focus:outline-none focus:border-[#c8ff00]/40 bg-transparent transition-colors duration-200"
                        placeholder={field.placeholder}
                      />
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { id: "company" as const, label: "Company", placeholder: "Acme Corp", required: true },
                    { id: "role" as const, label: "Role Needed", placeholder: "e.g. Support Agent", required: false },
                  ].map((field) => (
                    <div key={field.id} className="flex flex-col gap-2">
                      <label className="label">{field.label}</label>
                      <input
                        type="text"
                        required={field.required}
                        value={form[field.id]}
                        onChange={(e) => setForm({ ...form, [field.id]: e.target.value })}
                        className="glass border border-white/8 px-4 py-3 text-xs text-white/80 placeholder-white/20 focus:outline-none focus:border-[#c8ff00]/40 bg-transparent transition-colors duration-200"
                        placeholder={field.placeholder}
                      />
                    </div>
                  ))}
                </div>

                <div className="flex flex-col gap-2">
                  <label className="label">Tell us about your use case</label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="glass border border-white/8 px-4 py-3 text-xs text-white/80 placeholder-white/20 focus:outline-none focus:border-[#c8ff00]/40 bg-transparent transition-colors duration-200 resize-none"
                    placeholder="Describe the roles you want to automate and your current team size..."
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 bg-[#c8ff00] text-black px-8 py-4 text-xs tracking-widest uppercase font-bold hover:bg-[#d4ff33] transition-colors duration-200 self-start"
                >
                  Submit Request
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
