import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { Send } from "lucide-react";

export const CTA = () => {
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Envoi via mailto comme fallback simple
    const mailto = `mailto:fresneljeanclaudecossou64@gmail.com?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(`Nom: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
    window.location.href = mailto;
    setTimeout(() => setStatus("sent"), 500);
  };

  const inputClass = "w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:bg-white/8 transition-all duration-300";

  return (
    <section id="contact" className="py-32 relative">
      <div className="absolute top-1/3 -left-40 w-[400px] h-[400px] rounded-full bg-primary/10 blur-[120px]" />
      <div className="absolute bottom-1/3 -right-40 w-[400px] h-[400px] rounded-full bg-primary-glow/10 blur-[120px]" />

      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <p className="text-sm uppercase tracking-[0.3em] text-primary-glow mb-4">{t("contact.label")}</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-4">
            {t("contact.title")} <span className="gradient-text">{t("contact.titleHighlight")}</span>
          </h2>
          <p className="text-muted-foreground text-lg">{t("contact.subtitle")}</p>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-10 max-w-5xl mx-auto">

          {/* Infos de contact */}
          <div className="flex flex-col gap-6">
            <div className="glass-card border-glow p-8 flex flex-col gap-6">
              <h3 className="font-display text-xl font-semibold">{t("contact.infoTitle")}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{t("contact.infoText")}</p>

              <div className="flex flex-col gap-4 mt-2">
                <a href="mailto:fresneljeanclaudecossou64@gmail.com" className="flex items-center gap-4 group">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-all">
                    <MdOutlineEmail className="w-5 h-5 text-primary-glow" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground uppercase tracking-widest mb-0.5">Email</div>
                    <div className="text-sm font-medium group-hover:text-primary-glow transition-colors">fresneljeanclaudecossou64@gmail.com</div>
                  </div>
                </a>

                <a href="https://wa.me/2290165832196" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-all">
                    <FaWhatsapp className="w-5 h-5 text-primary-glow" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground uppercase tracking-widest mb-0.5">WhatsApp</div>
                    <div className="text-sm font-medium group-hover:text-primary-glow transition-colors">+229 01 65 83 21 96</div>
                  </div>
                </a>

                <a href="https://www.linkedin.com/in/fresnel-jean-claude-00433938a/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-all">
                    <FaLinkedinIn className="w-5 h-5 text-primary-glow" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground uppercase tracking-widest mb-0.5">LinkedIn</div>
                    <div className="text-sm font-medium group-hover:text-primary-glow transition-colors">Fresnel Jean-Claude</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Disponibilité */}
            {/* <div className="glass-card p-6 flex items-center gap-4">
              <div className="relative shrink-0">
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <div className="absolute inset-0 w-3 h-3 rounded-full bg-green-400 animate-ping opacity-60" />
              </div>
              <div>
                <div className="text-sm font-medium">{t("contact.available")}</div>
                <div className="text-xs text-muted-foreground">{t("contact.availableDesc")}</div>
              </div>
            </div> */}
          </div>

          {/* Formulaire */}
          <div className="relative rounded-3xl p-[1px] animated-border">
            <div className="glass-card p-8 rounded-3xl relative z-10">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-widest text-muted-foreground">{t("contact.form.name")}</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder={t("contact.form.namePlaceholder")}
                    className={inputClass}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-widest text-muted-foreground">{t("contact.form.email")}</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder={t("contact.form.emailPlaceholder")}
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-widest text-muted-foreground">{t("contact.form.subject")}</label>
                <input
                  type="text"
                  name="subject"
                  required
                  value={form.subject}
                  onChange={handleChange}
                  placeholder={t("contact.form.subjectPlaceholder")}
                  className={inputClass}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-widest text-muted-foreground">{t("contact.form.message")}</label>
                <textarea
                  name="message"
                  required
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  placeholder={t("contact.form.messagePlaceholder")}
                  className={`${inputClass} resize-none`}
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending" || status === "sent"}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full px-8 py-3 bg-gradient-to-r from-primary-deep to-primary text-primary-foreground font-medium hover:shadow-[0_0_40px_hsl(var(--primary)/0.5)] transition-all duration-500 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "sent" ? (
                  t("contact.form.sent")
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    {status === "sending" ? t("contact.form.sending") : t("contact.form.send")}
                  </>
                )}
              </button>
            </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
