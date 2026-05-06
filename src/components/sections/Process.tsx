import { useTranslation } from "react-i18next";
import { HiOutlineLightBulb } from "react-icons/hi";
import { BsCodeSlash } from "react-icons/bs";
import { MdRocketLaunch } from "react-icons/md";
import type { IconType } from "react-icons";

const stepIcons: IconType[] = [HiOutlineLightBulb, BsCodeSlash, MdRocketLaunch];

export const Process = () => {
  const { t } = useTranslation();

  const steps = (t("process.steps", { returnObjects: true }) as any[]).map((s, i) => ({
    ...s,
    num: `0${i + 1}`,
    Icon: stepIcons[i],
  }));

  return (
    <section className="py-32 relative">
      <div className="container">
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <p className="text-sm uppercase tracking-[0.3em] text-primary-glow mb-4">{t("process.label")}</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold">
            {t("process.title")} <span className="gradient-text">{t("process.titleHighlight")}</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <div key={i} className="relative group">
              <div className="absolute -top-8 -left-2 font-display text-[8rem] md:text-[10rem] font-bold leading-none text-white/[0.04] group-hover:text-primary/10 transition-colors duration-700 select-none pointer-events-none">
                {s.num}
              </div>
              <div className="glass-card border-glow p-8 relative z-10 hover:shadow-[0_0_50px_hsl(var(--primary)/0.3)] transition-all duration-500 min-h-[280px] flex flex-col justify-between">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:border-primary/40 group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)] transition-all duration-500">
                  <s.Icon className="w-7 h-7 text-primary-glow" />
                </div>
                <div>
                  <div className="text-primary-glow font-mono text-sm mb-3">{s.num}</div>
                  <h3 className="font-display text-2xl font-bold mb-3">{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
