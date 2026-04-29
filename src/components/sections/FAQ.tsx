import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useTranslation } from "react-i18next";

export const FAQ = () => {
  const { t } = useTranslation();
  
  const faqs = t("faqs.items", { returnObjects: true }) as any[];

  return (
    <section id="faqs" className="py-32 relative">
      <div className="container max-w-4xl">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-primary-glow mb-4">{t("faqs.label")}</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold">
            {t("faqs.title")} <span className="gradient-text">{t("faqs.titleHighlight")}</span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="glass-card border border-white/10 px-6 data-[state=open]:border-primary/40 data-[state=open]:shadow-[0_0_30px_hsl(var(--primary)/0.2)] transition-all"
            >
              <AccordionTrigger className="font-display text-lg font-semibold hover:no-underline py-6">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
