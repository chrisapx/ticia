import { useState, useEffect } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function ContactModal({ open, onClose }: Props) {
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "" });

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const fn = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [open, onClose]);

  // Reset state when reopened
  useEffect(() => {
    if (open) setDone(false);
  }, [open]);

  if (!open) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setDone(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(8,8,16,0.85)", backdropFilter: "blur(12px)" }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="glass w-full max-w-md relative overflow-hidden">
        {/* Accent line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-[#c8ff00]/40" />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/30 hover:text-white/70 transition-colors text-sm"
          aria-label="Close"
        >
          ✕
        </button>

        <div className="p-8">
          {done ? (
            <div className="flex flex-col items-center gap-5 py-6 text-center">
              <div className="w-12 h-12 bg-[#c8ff00] flex items-center justify-center text-black text-xl font-bold">
                ✓
              </div>
              <div>
                <p className="text-white font-semibold mb-1.5">We'll be in touch.</p>
                <p className="text-xs text-white/35">
                  Expect a reply to <span className="text-white/60">{form.email}</span> within 48 hours.
                </p>
              </div>
              <button onClick={onClose} className="label hover:text-white/60 transition-colors mt-2">
                Close
              </button>
            </div>
          ) : (
            <>
              <div className="mb-6">
                <div className="label-accent mb-1.5">Get in touch</div>
                <p className="text-xs text-white/35 leading-relaxed">
                  Tell us about your team and we'll reach out within 48 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {[
                  { id: "name" as const, label: "Name", placeholder: "Jane Smith", type: "text", required: true },
                  { id: "email" as const, label: "Work email", placeholder: "jane@company.com", type: "email", required: true },
                  { id: "company" as const, label: "Company", placeholder: "Acme Corp", type: "text", required: true },
                ].map((f) => (
                  <div key={f.id} className="flex flex-col gap-1.5">
                    <label className="label">{f.label}</label>
                    <input
                      type={f.type}
                      required={f.required}
                      value={form[f.id]}
                      onChange={(e) => setForm({ ...form, [f.id]: e.target.value })}
                      placeholder={f.placeholder}
                      className="glass border border-white/8 px-4 py-3 text-xs text-white/80 placeholder-white/20 bg-transparent focus:outline-none focus:border-[#c8ff00]/30 transition-colors duration-200"
                    />
                  </div>
                ))}

                <button
                  type="submit"
                  className="mt-2 bg-[#c8ff00] text-black px-6 py-3.5 text-xs font-bold tracking-widest uppercase hover:bg-[#d6ff33] transition-colors duration-200"
                >
                  Send request
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
