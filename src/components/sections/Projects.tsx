import { ArrowUpRight } from "lucide-react";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";
import p5 from "@/assets/project-5.jpg";
import p6 from "@/assets/project-6.jpg";

const projects = [
  { title: "Elevate Your Business with CloudPeak", category: "Web Development", img: p1 },
  { title: "Analytics Suite for Modern Teams", category: "SaaS", img: p2 },
  { title: "Luxe — Premium E-commerce Experience", category: "E-commerce", img: p3 },
  { title: "Nimbus Mobile Banking", category: "Mobile App", img: p4 },
  { title: "Aurora Creative Studio", category: "Branding", img: p5 },
  { title: "CryptaX Trading Dashboard", category: "Fintech", img: p6 },
];

export const Projects = () => {
  return (
    <section id="work" className="py-32 relative">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-primary-glow mb-4">Recent Work</p>
            <h2 className="font-display text-4xl md:text-6xl font-bold max-w-2xl">
              Projects that <span className="gradient-text">push boundaries</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            A curated selection of work spanning SaaS platforms, e-commerce, and immersive brand experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <article
              key={i}
              className="group relative rounded-3xl overflow-hidden border border-white/10 aspect-[4/3] cursor-pointer"
            >
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                width={1024}
                height={768}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/30 group-hover:to-primary-deep/40 transition-all duration-500" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ boxShadow: 'inset 0 0 80px hsl(var(--primary) / 0.5)' }} />

              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <span className="inline-block w-fit text-xs uppercase tracking-widest px-3 py-1 rounded-full glass mb-3">
                  {p.category}
                </span>
                <h3 className="font-display text-2xl md:text-3xl font-bold leading-tight max-w-md">
                  {p.title}
                </h3>
              </div>

              <div className="absolute top-6 right-6 w-12 h-12 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:rotate-0 -rotate-45 transition-all duration-500">
                <ArrowUpRight className="w-5 h-5 text-primary-glow" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
