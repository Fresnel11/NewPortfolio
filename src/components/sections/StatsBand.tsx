import { useTranslation } from "react-i18next";

export const StatsBand = () => {
  const { t } = useTranslation();

  const stats = [
    { value: "10+", label: t("hero.stats.years") },
    { value: "140+", label: t("hero.stats.projects") },
    { value: "500+", label: t("hero.stats.clients") },
    { value: "1M+", label: t("hero.stats.codingHours") },
  ];

  return (
    <section className="py-24 relative">
      <div className="container">
        <div className="glass-card border-glow p-12 md:p-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <div className="font-display text-5xl md:text-7xl font-bold gradient-text text-glow mb-2">
                  {s.value}
                </div>
                <div className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
