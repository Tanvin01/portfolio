"use client";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Send, Mail, MapPin, Github, Linkedin, CheckCircle, Loader2 } from "lucide-react";
import { PERSON } from "@/data/portfolio";
import SectionHeading from "./ui/SectionHeading";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Opens email client — works without a backend
    window.location.href = `mailto:${PERSON.email}?subject=Portfolio Inquiry from ${form.name}&body=${encodeURIComponent(form.message + "\n\nFrom: " + form.email)}`;
    setTimeout(() => setStatus("sent"), 500);
  };

  return (
    <section id="contact" ref={ref} className="py-24">
      <div className="container mx-auto px-6">
        <SectionHeading title="Get In Touch" subtitle="Let's work together" />

        <div className="mt-14 grid lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Open to new opportunities
            </h3>
            <p className="text-slate-400 leading-relaxed mb-8">
              Whether you have a project in mind, a role you think I'd be great for, or just want to connect —
              I'd love to hear from you. I typically respond within 24 hours.
            </p>

            <div className="space-y-4">
              {[
                { icon: Mail, label: "Email", value: PERSON.email, href: `mailto:${PERSON.email}` },
                { icon: MapPin, label: "Location", value: PERSON.location, href: null },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-violet-500/10 border border-violet-500/20 rounded-xl flex items-center justify-center">
                    <Icon className="w-4 h-4 text-violet-400" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">{label}</p>
                    {href ? (
                      <a href={href} className="text-slate-300 hover:text-violet-400 transition-colors text-sm">{value}</a>
                    ) : (
                      <p className="text-slate-300 text-sm">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-3 mt-8">
              {[
                { href: PERSON.social.github, icon: Github },
                { href: PERSON.social.linkedin, icon: Linkedin },
              ].filter(s => s.href).map(({ href, icon: Icon }) => (
                <motion.a key={href} href={href} target="_blank" rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 bg-slate-800 border border-slate-700 hover:border-violet-500/50 rounded-xl flex items-center justify-center text-slate-400 hover:text-violet-400 transition-all">
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {status === "sent" ? (
              <div className="h-full flex items-center justify-center">
                <div className="text-center">
                  <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-slate-400">Your email client should have opened. I'll be in touch soon.</p>
                  <button onClick={() => setStatus("idle")} className="mt-4 text-violet-400 hover:underline text-sm">Send another</button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm text-slate-300 mb-1.5">Your Name</label>
                  <input type="text" required value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    placeholder="John Smith"
                    className="w-full bg-slate-900/80 border border-slate-700 focus:border-violet-500 rounded-xl px-4 py-3 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-violet-500/30 transition-all" />
                </div>
                <div>
                  <label className="block text-sm text-slate-300 mb-1.5">Email Address</label>
                  <input type="email" required value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    placeholder="john@company.com"
                    className="w-full bg-slate-900/80 border border-slate-700 focus:border-violet-500 rounded-xl px-4 py-3 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-violet-500/30 transition-all" />
                </div>
                <div>
                  <label className="block text-sm text-slate-300 mb-1.5">Message</label>
                  <textarea required rows={5} value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    placeholder="Tell me about your project or opportunity..."
                    className="w-full bg-slate-900/80 border border-slate-700 focus:border-violet-500 rounded-xl px-4 py-3 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-violet-500/30 transition-all resize-none" />
                </div>
                <motion.button
                  type="submit"
                  disabled={status === "sending"}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 disabled:opacity-70 text-white font-semibold py-3 rounded-xl transition-all shadow-lg shadow-violet-500/25"
                >
                  {status === "sending" ? <><Loader2 className="w-4 h-4 animate-spin" />Sending...</> : <><Send className="w-4 h-4" />Send Message</>}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
