const steps = [
  { num: "01", title: "Define & Architect", desc: "We align on goals, audience, and technical foundations. Wireframes, system design, and a clear roadmap." },
  { num: "02", title: "Build & Develop", desc: "Pixel-perfect interfaces meet robust engineering. Iterative sprints with continuous feedback." },
  { num: "03", title: "Deploy & Support", desc: "Launch with confidence. Performance monitoring, refinement, and long-term partnership." },
];

export const Process = () => {
  return (
    <section className="py-32 relative">
      <div className="container">
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <p className="text-sm uppercase tracking-[0.3em] text-primary-glow mb-4">My Process</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold">
            From idea to <span className="gradient-text">impact</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <div key={i} className="relative group">
              <div className="absolute -top-8 -left-2 font-display text-[8rem] md:text-[10rem] font-bold leading-none text-white/[0.04] group-hover:text-primary/10 transition-colors duration-700 select-none pointer-events-none">
                {s.num}
              </div>
              <div className="glass-card border-glow p-8 relative z-10 hover:shadow-[0_0_50px_hsl(var(--primary)/0.3)] transition-all duration-500 min-h-[280px] flex flex-col justify-end">
                <div className="text-primary-glow font-mono text-sm mb-3">{s.num}</div>
                <h3 className="font-display text-2xl font-bold mb-3">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
