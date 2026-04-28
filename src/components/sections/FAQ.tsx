import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "What's your typical project timeline?", a: "Most projects run 6–12 weeks from kickoff to launch. Smaller engagements can ship in 2–4 weeks; larger platforms may take 3–6 months. I'll give you a precise estimate after our discovery call." },
  { q: "How does the freelance process work?", a: "We start with a free 30-minute call to align on goals. I then send a proposal with scope, timeline, and pricing. Once approved, we move into design and development with weekly check-ins." },
  { q: "Do you collaborate with existing teams?", a: "Absolutely. I integrate seamlessly with internal product, design, and engineering teams — using your tools, your rituals, and your codebase standards." },
  { q: "What technologies do you specialize in?", a: "React, TypeScript, Next.js, Node.js, Python, and modern cloud infrastructure (AWS, Vercel, Supabase). For design I work in Figma with full design systems." },
  { q: "Do you offer ongoing support after launch?", a: "Yes — I offer monthly retainers covering maintenance, performance monitoring, feature iterations, and strategic advisory." },
  { q: "What's your pricing model?", a: "Project-based for defined scopes, or monthly retainers for ongoing work. Both are transparent and tailored to the engagement size." },
];

export const FAQ = () => {
  return (
    <section id="faqs" className="py-32 relative">
      <div className="container max-w-4xl">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-primary-glow mb-4">FAQs</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold">
            Frequently asked <span className="gradient-text">questions</span>
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
