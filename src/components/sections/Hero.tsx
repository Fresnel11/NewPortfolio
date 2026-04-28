import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Users, Briefcase, Award } from "lucide-react";
import portrait from "@/assets/leo-portrait.jpg";

const stats = [
  { icon: Code2, value: "1M+", label: "Coding Hours" },
  { icon: Users, value: "500+", label: "Satisfied Clients" },
  { icon: Briefcase, value: "140+", label: "Projects Done" },
  { icon: Award, value: "10+", label: "Years Experience" },
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16">
      {/* Background effects */}
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] rounded-full bg-primary/20 blur-[120px]" />
      <div className="absolute bottom-1/4 -right-40 w-[600px] h-[600px] rounded-full bg-primary-glow/15 blur-[140px]" />

      <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div className="space-y-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-sm">
            {/* <span className="w-2 h-2 rounded-full bg-primary-glow animate-pulse" /> */}
            <span className="text-muted-foreground">Available for new projects</span>
          </div>

          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05]">
            Hi I'm Leo Carter,<br />
            building{" "}
            <span className="gradient-text text-glow">Digital Experiences.</span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            Senior product designer & engineer crafting elegant web applications,
            scalable SaaS platforms, and human-centered digital products.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button variant="outline" size="lg" className="rounded-full border-white/20 bg-white/5 backdrop-blur-md hover:bg-white/10 px-8">
              Learn More
            </Button>
            <Button size="lg" className="rounded-full px-8 bg-gradient-to-r from-primary-deep to-primary text-primary-foreground hover:shadow-[0_0_40px_hsl(var(--primary)/0.6)] transition-all duration-500 group">
              View Work
              <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Right */}
        <div className="relative flex items-center justify-center">
          {/* Halo */}
          <div className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-br from-primary to-primary-glow opacity-30 blur-3xl animate-pulse-glow" />
          <div className="absolute w-[420px] h-[420px] rounded-full border border-primary/30" />
          <div className="absolute w-[480px] h-[480px] rounded-full border border-primary/15" />

          <div className="relative w-[340px] h-[420px] md:w-[400px] md:h-[500px] rounded-[2rem] overflow-hidden border border-white/10 glow-blue">
            <img
              src={portrait}
              alt="Leo Carter portrait"
              width={400}
              height={500}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
          </div>

          {/* Floating stat badges */}
          <div className="absolute -top-4 -left-4 md:-left-12 glass-card p-4 animate-float" style={{ animationDelay: '0s' }}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                <Code2 className="w-5 h-5 text-primary-glow" />
              </div>
              <div>
                <div className="font-display font-bold text-lg">1M+</div>
                <div className="text-xs text-muted-foreground">Coding Hours</div>
              </div>
            </div>
          </div>

          <div className="absolute top-1/3 -right-4 md:-right-10 glass-card p-4 animate-float" style={{ animationDelay: '1.5s' }}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                <Users className="w-5 h-5 text-primary-glow" />
              </div>
              <div>
                <div className="font-display font-bold text-lg">500+</div>
                <div className="text-xs text-muted-foreground">Clients</div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-12 -left-4 md:-left-10 glass-card p-4 animate-float" style={{ animationDelay: '3s' }}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-primary-glow" />
              </div>
              <div>
                <div className="font-display font-bold text-lg">140+</div>
                <div className="text-xs text-muted-foreground">Projects</div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-4 right-4 md:-right-6 glass-card p-4 animate-float" style={{ animationDelay: '2s' }}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                <Award className="w-5 h-5 text-primary-glow" />
              </div>
              <div>
                <div className="font-display font-bold text-lg">10+</div>
                <div className="text-xs text-muted-foreground">Years</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
