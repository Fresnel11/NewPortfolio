import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Layers, Briefcase, Award } from "lucide-react";
import portrait from "@/assets/profil_portfolio.png";
import { useTranslation } from "react-i18next";

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16">
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] rounded-full bg-primary/20 blur-[120px]" />
      <div className="absolute bottom-1/4 -right-40 w-[600px] h-[600px] rounded-full bg-primary-glow/15 blur-[140px]" />

      <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center">

        {/* IMAGE — en premier sur mobile, à droite sur desktop */}
        <div className="order-1 lg:order-2 relative flex items-center justify-center">

          {/* Halos décoratifs */}
          <div className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-br from-primary to-primary-glow opacity-30 blur-3xl animate-pulse-glow" />
          <div className="absolute w-[420px] h-[420px] rounded-full border border-primary/30" />
          <div className="absolute w-[480px] h-[480px] rounded-full border border-primary/15" />

          {/* Portrait */}
          <div className="relative w-[240px] h-[300px] sm:w-[320px] sm:h-[400px] lg:w-[400px] lg:h-[500px] rounded-[2rem] overflow-hidden border border-white/10 glow-blue">
            <img src={portrait} alt={t("hero.portraitAlt")} width={400} height={500} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
          </div>

          {/* Badges — visibles uniquement sur lg+ avec positions originales */}
          <div className="hidden lg:flex absolute -top-4 -left-4 glass-card p-4 animate-float" style={{ animationDelay: '0s' }}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                <Code2 className="w-5 h-5 text-primary-glow" />
              </div>
              <div>
                <div className="font-display font-bold text-lg">1M+</div>
                <div className="text-xs text-muted-foreground whitespace-nowrap">{t("hero.stats.codingHours")}</div>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex absolute top-1/3 -right-10 glass-card p-4 animate-float" style={{ animationDelay: '1.5s' }}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                <Layers className="w-5 h-5 text-primary-glow" />
              </div>
              <div>
                <div className="font-display font-bold text-lg">15+</div>
                <div className="text-xs text-muted-foreground whitespace-nowrap">{t("hero.stats.technologies")}</div>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex absolute bottom-12 -left-4 glass-card p-4 animate-float" style={{ animationDelay: '3s' }}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                <Briefcase className="w-5 h-5 text-primary-glow" />
              </div>
              <div>
                <div className="font-display font-bold text-lg">10+</div>
                <div className="text-xs text-muted-foreground whitespace-nowrap">{t("hero.stats.projects")}</div>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex absolute -bottom-4 -right-6 glass-card p-4 animate-float" style={{ animationDelay: '2s' }}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                <Award className="w-5 h-5 text-primary-glow" />
              </div>
              <div>
                <div className="font-display font-bold text-lg">2+</div>
                <div className="text-xs text-muted-foreground whitespace-nowrap">{t("hero.stats.years")}</div>
              </div>
            </div>
          </div>
        </div>

        {/* TEXTE — après l'image sur mobile, à gauche sur desktop */}
        <div className="order-2 lg:order-1 space-y-8 animate-fade-in-up">
          

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05]">
            {t("hero.title")}<br />
            {t("hero.titleBuilding")}{" "}
            <span className="gradient-text text-glow">{t("hero.titleHighlight")}</span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            {t("hero.subtitle")}
          </p>

          <div className="flex flex-wrap gap-4">
            <Button variant="outline" size="lg" asChild className="rounded-full border-white/20 bg-white/5 backdrop-blur-md  px-8">
              <a href="#about">{t("hero.learnMore")}</a>
            </Button>
            <Button size="lg" asChild className="rounded-full px-8 bg-gradient-to-r from-primary-deep to-primary text-primary-foreground hover:shadow-[0_0_40px_hsl(var(--primary)/0.6)] transition-all duration-500 group">
              <a href="#work">
                {t("hero.viewWork")}
                <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
};
