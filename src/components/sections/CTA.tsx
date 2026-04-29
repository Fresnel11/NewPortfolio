import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

export const CTA = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-32 relative">
      <div className="container">
        <div className="relative rounded-[2.5rem] overflow-hidden p-12 md:p-20 text-center" style={{ background: 'var(--gradient-cta)' }}>
          <div className="absolute inset-0 grid-pattern opacity-20" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-white/20 blur-[100px]" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="font-display text-4xl md:text-6xl font-bold leading-tight mb-6 text-white">
              {t("cta.title")}<br />
              {t("cta.titleEnd")} <span className="italic">{t("cta.titleHighlight")}</span>
            </h2>
            <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
              {t("cta.subtitle")}
            </p>
            <Button size="lg" className="rounded-full bg-background text-foreground hover:bg-background/90 px-8 group shadow-2xl">
              {t("cta.button")}
              <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
