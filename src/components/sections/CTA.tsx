import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaWhatsapp, FaLinkedinIn } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import { Toast } from "@/components/Toast";

export const CTA = () => {
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending">("idle");
  const [toast, setToast] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        { from_name: form.name, from_email: form.email, subject: form.subject, message: form.message },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setForm({ name: "", email: "", subject: "", message: "" });
      setToast({ type: "success", message: t("contact.form.sent") });
    } catch {
      setToast({ type: "error", message: t("contact.form.error") });
    } finally {
      setStatus("idle");
    }
  };

  const inputClass = "w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-all duration-300";

  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
      {/* Halos décoratifs */}
      <div className="absolute top-1/3 -left-40 w-[400px] h-[400px] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 -right-40 w-[400px] h-[400px] rounded-full bg-primary-glow/10 blur-[120px] pointer-events-none" />

      <div className="container relative z-10 px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-12 md:mb-16 max-w-2xl mx-auto">
          <p className="text-sm uppercase tracking-[0.3em] text-primary-glow mb-4">{t("contact.label")}</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-6xl font-bold mb-4">
            {t("contact.title")} <span className="gradient-text">{t("contact.titleHighlight")}</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">{t("contact.subtitle")}</p>
        </div>

        {/* Grille — colonne unique sur mobile, deux colonnes sur lg */}
        <div className="flex flex-col lg:grid lg:grid-cols-[1fr_1.6fr] gap-6 w-full max-w-5xl mx-auto">

          {/* Infos de contact */}
          <div className="glass-card border-glow p-6 flex flex-col gap-5 w-full">
            <h3 className="font-display text-lg font-semibold">{t("contact.infoTitle")}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{t("contact.infoText")}</p>

            <div className="flex flex-col gap-3">
              <a href="mailto:fresneljeanclaudecossou64@gmail.com" className="flex items-center gap-3 group overflow-hidden">
                <div className="w-10 h-10 shrink-0 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-all">
                  <MdOutlineEmail className="w-5 h-5 text-primary-glow" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xs text-muted-foreground uppercase tracking-widest mb-0.5">Email</div>
                  <div className="text-sm font-medium group-hover:text-primary-glow transition-colors truncate">
                    fresneljeanclaudecossou64@gmail.com
                  </div>
                </div>
              </a>

              <a href="https://wa.me/2290165832196" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                <div className="w-10 h-10 shrink-0 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-all">
                  <FaWhatsapp className="w-5 h-5 text-primary-glow" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs text-muted-foreground uppercase tracking-widest mb-0.5">WhatsApp</div>
                  <div className="text-sm font-medium group-hover:text-primary-glow transition-colors">+229 01 65 83 21 96</div>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/fresnel-jean-claude-00433938a/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                <div className="w-10 h-10 shrink-0 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-all">
                  <FaLinkedinIn className="w-5 h-5 text-primary-glow" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs text-muted-foreground uppercase tracking-widest mb-0.5">LinkedIn</div>
                  <div className="text-sm font-medium group-hover:text-primary-glow transition-colors">Fresnel Jean-Claude</div>
                </div>
              </a>
            </div>
          </div>

          {/* Formulaire avec bordure animée */}
          <div className="animated-border rounded-3xl p-[1px] w-full">
            <div className="glass-card p-6 rounded-3xl w-full">
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="flex flex-col sm:grid sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs uppercase tracking-widest text-muted-foreground">{t("contact.form.name")}</label>
                    <input type="text" name="name" required value={form.name} onChange={handleChange}
                      placeholder={t("contact.form.namePlaceholder")} className={inputClass} />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs uppercase tracking-widest text-muted-foreground">{t("contact.form.email")}</label>
                    <input type="email" name="email" required value={form.email} onChange={handleChange}
                      placeholder={t("contact.form.emailPlaceholder")} className={inputClass} />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs uppercase tracking-widest text-muted-foreground">{t("contact.form.subject")}</label>
                  <input type="text" name="subject" required value={form.subject} onChange={handleChange}
                    placeholder={t("contact.form.subjectPlaceholder")} className={inputClass} />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs uppercase tracking-widest text-muted-foreground">{t("contact.form.message")}</label>
                  <textarea name="message" required rows={5} value={form.message} onChange={handleChange}
                    placeholder={t("contact.form.messagePlaceholder")} className={`${inputClass} resize-none`} />
                </div>

                <button type="submit" disabled={status === "sending"}
                  className="w-full mt-1 inline-flex items-center justify-center gap-2 rounded-full px-8 py-3 bg-gradient-to-r from-primary-deep to-primary text-primary-foreground font-medium hover:shadow-[0_0_40px_hsl(var(--primary)/0.5)] transition-all duration-500 disabled:opacity-60 disabled:cursor-not-allowed">
                  <Send className="w-4 h-4" />
                  {status === "sending" ? t("contact.form.sending") : t("contact.form.send")}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>

      {toast && <Toast type={toast.type} message={toast.message} onClose={() => setToast(null)} />}
    </section>
  );
};
