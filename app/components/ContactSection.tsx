"use client";

import { useState } from "react";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-32 border-t border-white/6">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <span className="num-label">GET ACCESS</span>
              <div className="h-px flex-1 bg-white/6" />
            </div>

            <h2 className="text-3xl md:text-4xl font-semibold text-white/85 mb-6 tracking-tight leading-tight">
              Ready to add your
              <br />
              first AI employee?
            </h2>

            <p className="text-sm text-white/35 leading-relaxed mb-10 max-w-sm">
              We&apos;re onboarding select companies in private beta. Submit your
              request and our team will reach out within 48 hours.
            </p>

            {/* Info blocks */}
            <div className="flex flex-col gap-4">
              {[
                { label: "Onboarding", value: "< 24 hours from approval" },
                { label: "Minimum term", value: "3 months" },
                { label: "Beta pricing", value: "50% off standard rates" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-6 py-4 border-b border-white/6"
                >
                  <span className="num-label w-28 flex-shrink-0">{item.label}</span>
                  <span className="text-xs text-white/55">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div>
            {submitted ? (
              <div className="glass border border-white/10 p-10 flex flex-col items-center justify-center h-full gap-6 text-center">
                <div className="w-12 h-12 border border-[#c8ff00]/30 flex items-center justify-center">
                  <span className="text-[#c8ff00] text-lg">✓</span>
                </div>
                <div>
                  <p className="text-white/80 font-medium mb-2">Request received.</p>
                  <p className="text-xs text-white/35 leading-relaxed">
                    We&apos;ll reach out to {form.email} within 48 hours to schedule
                    your onboarding call.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="num-label">Full Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="glass border border-white/10 px-4 py-3 text-xs text-white/80 placeholder-white/20 focus:outline-none focus:border-white/24 bg-transparent transition-colors duration-200"
                      placeholder="Jane Smith"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="num-label">Work Email</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="glass border border-white/10 px-4 py-3 text-xs text-white/80 placeholder-white/20 focus:outline-none focus:border-white/24 bg-transparent transition-colors duration-200"
                      placeholder="jane@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="num-label">Company</label>
                    <input
                      type="text"
                      required
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      className="glass border border-white/10 px-4 py-3 text-xs text-white/80 placeholder-white/20 focus:outline-none focus:border-white/24 bg-transparent transition-colors duration-200"
                      placeholder="Acme Corp"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="num-label">Role Needed</label>
                    <input
                      type="text"
                      value={form.role}
                      onChange={(e) => setForm({ ...form, role: e.target.value })}
                      className="glass border border-white/10 px-4 py-3 text-xs text-white/80 placeholder-white/20 focus:outline-none focus:border-white/24 bg-transparent transition-colors duration-200"
                      placeholder="e.g. Support Agent"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="num-label">Tell us about your use case</label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="glass border border-white/10 px-4 py-3 text-xs text-white/80 placeholder-white/20 focus:outline-none focus:border-white/24 bg-transparent transition-colors duration-200 resize-none"
                    placeholder="Describe what role(s) you want to automate and your current team size..."
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 bg-white text-black px-8 py-4 text-xs tracking-widest uppercase font-medium hover:bg-white/90 transition-colors duration-200 self-start"
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
