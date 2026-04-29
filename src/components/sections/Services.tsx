import { Code2, Smartphone, Palette } from "lucide-react";
import { useTranslation } from "react-i18next";

export const Services = () => {
  const { t } = useTranslation();

  const icons = [Code2, Smartphone, Palette];
  
  const services = (t("services.items", { returnObjects: true }) as any[]).map((s, i) => ({
    ...s,
    icon: icons[i]
  }));

  return (
    <section id="services" className="py-32 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px]" />
      <div className="container relative z-10">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <p className="text-sm uppercase tracking-[0.3em] text-primary-glow mb-4">{t("services.label")}</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold">
            {t("services.title")} <span className="gradient-text">{t("services.titleHighlight")}</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={i}
              className="glass-card border-glow p-8 group hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_20px_60px_-10px_hsl(var(--primary)/0.4)]"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-deep to-primary flex items-center justify-center mb-6 group-hover:shadow-[0_0_30px_hsl(var(--primary)/0.6)] transition-shadow">
                <s.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-3">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
