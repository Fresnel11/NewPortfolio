import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import portrait from "@/assets/leo-portrait.jpg";

const stack = ["React", "TypeScript", "Node.js", "Python", "Next.js", "PostgreSQL", "AWS", "Figma"];

const timeline = [
  { year: "2023", role: "Lead Engineer", company: "Postel Company" },
  { year: "2021", role: "Senior Developer", company: "Digital Core" },
  { year: "2019", role: "Full-Stack Engineer", company: "Smart Solutions" },
  { year: "2017", role: "Junior Developer", company: "Visionary Labs" },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative">
      <div className="container grid lg:grid-cols-[400px_1fr] gap-12">
        {/* Profile card */}
        <div className="glass-card border-glow p-8 h-fit lg:sticky lg:top-32">
          <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-6 glow-blue-sm">
            <img src={portrait} alt="Leo Carter" loading="lazy" width={400} height={400} className="w-full h-full object-cover" />
          </div>
          <h3 className="font-display text-2xl font-bold">Leo Carter</h3>
          <p className="text-primary-glow text-sm mb-6">Software Engineer & Designer</p>
          <div className="flex gap-3 mb-6">
            <a href="#" className="w-11 h-11 rounded-xl glass flex items-center justify-center hover:bg-primary/20 hover:text-primary-glow transition-all">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="w-11 h-11 rounded-xl glass flex items-center justify-center hover:bg-primary/20 hover:text-primary-glow transition-all">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="w-11 h-11 rounded-xl glass flex items-center justify-center hover:bg-primary/20 hover:text-primary-glow transition-all">
              <Mail className="w-5 h-5" />
            </a>
          </div>
          <Button className="w-full rounded-full bg-gradient-to-r from-primary-deep to-primary text-primary-foreground hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)] transition-all">
            Contact Me
          </Button>
        </div>

        {/* Right */}
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-primary-glow mb-4">About Me</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            A decade of building <span className="gradient-text">products people love</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            I'm a software engineer and product designer obsessed with the intersection of
            craft and engineering. Over the past 10 years, I've helped startups and Fortune 500
            companies ship digital products used by millions.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-10">
            My approach is opinionated but collaborative: deeply technical, design-led, and
            grounded in measurable business outcomes.
          </p>

          <h4 className="font-display text-xl font-semibold mb-4">Tech Stack</h4>
          <div className="flex flex-wrap gap-2 mb-12">
            {stack.map((t) => (
              <span key={t} className="glass px-4 py-2 rounded-full text-sm hover:border-primary/50 hover:text-primary-glow transition-all">
                {t}
              </span>
            ))}
          </div>

          <h4 className="font-display text-xl font-semibold mb-6">Experience</h4>
          <div className="relative pl-8 border-l border-white/10">
            {timeline.map((t, i) => (
              <div key={i} className="relative mb-8 last:mb-0">
                <div className="absolute -left-[37px] w-4 h-4 rounded-full bg-gradient-to-br from-primary to-primary-glow shadow-[0_0_20px_hsl(var(--primary)/0.6)]" />
                <div className="text-primary-glow text-sm font-mono">{t.year}</div>
                <div className="font-display text-lg font-semibold mt-1">{t.role}</div>
                <div className="text-muted-foreground text-sm">{t.company}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
