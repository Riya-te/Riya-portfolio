import { useState } from "react";
import { motion } from "framer-motion";
import { Section } from "./Section";
import { ExternalLink, Link, Mail, Send } from "lucide-react";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("https://formsubmit.co/ajax/riyakumari1011.2006@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: "New portfolio contact message",
          _captcha: "false",
          _template: "table",
          _next: typeof window !== "undefined" ? window.location.origin : "https://riya-devspace.lovable.app",
        }).toString(),
      });

      if (!response.ok) {
        throw new Error("Unable to send message right now.");
      }

      setSent(true);
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setError("Your message could not be sent right now. Please email me directly at riyakumari1011.2006@gmail.com.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Section id="contact" eyebrow="Get in touch" title="Let's build |something great"
      description="Have a role, a project, or just want to say hi? My inbox is open.">
      <div className="grid gap-6 lg:grid-cols-[1fr_1.4fr]">
        <div className="glass flex flex-col justify-between rounded-2xl p-6">
          <div>
            <h3 className="font-display text-2xl font-bold">Riya Kumari</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              DevOps Engineer & Full Stack Developer based in Ranchi, Jharkhand, India.
            </p>
          </div>
          <div className="mt-8 space-y-3">
            <a href="mailto:riyakumari1011.2006@gmail.com" className="flex items-center gap-3 rounded-xl bg-white/[0.04] p-3 transition-colors hover:bg-white/[0.08]">
              <Mail className="size-4 text-[#06B6D4]" />
              <span className="text-sm break-all">riyakumari1011.2006@gmail.com</span>
            </a>
            <a href="tel:+916206772179" className="flex items-center gap-3 rounded-xl bg-white/[0.04] p-3 transition-colors hover:bg-white/[0.08]">
              <Mail className="size-4 text-[#10b981]" />
              <span className="text-sm">+91 6206772179</span>
            </a>
            <a href="https://github.com/Riya-te" target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-xl bg-white/[0.04] p-3 transition-colors hover:bg-white/[0.08]">
              <ExternalLink className="size-4 text-[#8B5CF6]" />
              <span className="text-sm">github.com/Riya-te</span>
            </a>
            <a href="https://linkedin.com/in/riya-kumari-79a709302" target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-xl bg-white/[0.04] p-3 transition-colors hover:bg-white/[0.08]">
              <Link className="size-4 text-[#3B82F6]" />
              <span className="text-sm">linkedin.com/in/riya-kumari</span>
            </a>
            <div className="flex items-center gap-3 rounded-xl bg-white/[0.04] p-3">
              <Mail className="size-4 text-[#F59E0B]" />
              <span className="text-sm">Ranchi, Jharkhand, India</span>
            </div>
          </div>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
          className="glass rounded-2xl p-6"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="flex flex-col gap-2">
              <span className="text-xs uppercase tracking-wider text-muted-foreground">Name</span>
              <input required type="text" placeholder="Your name" value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm outline-none transition-all placeholder:text-muted-foreground/60 focus:border-[#3B82F6] focus:bg-white/[0.06]" />
            </label>
            <label className="flex flex-col gap-2">
              <span className="text-xs uppercase tracking-wider text-muted-foreground">Email</span>
              <input required type="email" placeholder="you@email.com" value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm outline-none transition-all placeholder:text-muted-foreground/60 focus:border-[#3B82F6] focus:bg-white/[0.06]" />
            </label>
          </div>
          <label className="mt-4 flex flex-col gap-2">
            <span className="text-xs uppercase tracking-wider text-muted-foreground">Message</span>
            <textarea required rows={5} placeholder="Tell me about your project..." value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm outline-none transition-all placeholder:text-muted-foreground/60 focus:border-[#3B82F6] focus:bg-white/[0.06]" />
          </label>
          {(error || sent) && (
            <div className={`mt-4 rounded-xl border px-4 py-3 text-sm ${error ? "border-red-500/30 bg-red-500/10 text-red-300" : "border-emerald-500/30 bg-emerald-500/10 text-emerald-300"}`}>
              {error || "Message sent successfully. I’ll get back to you soon!"}
            </div>
          )}
          <button type="submit" disabled={isSubmitting}
            className="mt-6 inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-white shadow-[0_8px_32px_-8px_#3B82F6] transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70"
            style={{ background: "linear-gradient(135deg,#3B82F6,#8B5CF6)" }}>
            <Send className="size-4" />
            {isSubmitting ? "Sending..." : sent ? "Message sent — thank you!" : "Send message"}
          </button>
        </motion.form>
      </div>
    </Section>
  );
}