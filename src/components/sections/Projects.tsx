import { ArrowUpRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import elocation from "@/assets/projects/elocation.png";
import gestionScolaire from "@/assets/projects/gestion_scolaire.png";
import hotchik from "@/assets/projects/hotchik.png";
import mpgroup from "@/assets/projects/mpgroup.png";

export const Projects = () => {
  const { t } = useTranslation();
  
  const projectImages = [elocation, gestionScolaire, hotchik, mpgroup];
  
  const projects = (t("projects.items", { returnObjects: true }) as any[]).map((p, i) => ({
    ...p,
    img: projectImages[i]
  }));

  return (
    <section id="work" className="py-32 relative">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-primary-glow mb-4">{t("projects.label")}</p>
            <h2 className="font-display text-4xl md:text-6xl font-bold max-w-2xl">
              {t("projects.title")} <span className="gradient-text">{t("projects.titleHighlight")}</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            {t("projects.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <a
              key={i}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-3xl overflow-hidden border border-white/10 cursor-pointer bg-[hsl(222_40%_7%)] block hover:border-primary/30 transition-colors duration-300"
            >
              <div className="w-full flex items-center justify-center p-6 min-h-[260px]">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="w-full h-auto max-h-[340px] object-contain transition-transform duration-700 group-hover:scale-105 rounded-xl"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/20 group-hover:to-primary-deep/30 transition-all duration-500 pointer-events-none" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ boxShadow: 'inset 0 0 80px hsl(var(--primary) / 0.5)' }} />

              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <span className="inline-block w-fit text-xs uppercase tracking-widest px-3 py-1 rounded-full glass mb-3">
                  {p.category}
                </span>
                <h3 className="font-display text-2xl md:text-3xl font-bold leading-tight max-w-md mb-2">
                  {p.title}
                </h3>
                <p className="text-sm text-white/70 leading-relaxed max-w-md opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                  {p.desc}
                </p>
              </div>

              <div className="absolute top-6 right-6 w-12 h-12 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:rotate-0 -rotate-45 transition-all duration-500">
                <ArrowUpRight className="w-5 h-5 text-primary-glow" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
