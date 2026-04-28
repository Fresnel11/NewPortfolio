import { Github, Linkedin, Twitter, Instagram } from "lucide-react";

const links = ["Home", "About", "Work", "FAQs", "Contact"];

export const Footer = () => {
  return (
    <footer className="pt-20 pb-10 border-t border-white/5 relative">
      <div className="container">
        <div className="grid md:grid-cols-[1fr_auto] gap-10 items-end mb-16">
          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {links.map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} className="text-muted-foreground hover:text-foreground transition-colors">
                {l}
              </a>
            ))}
          </nav>
          <div className="flex gap-3">
            {[Linkedin, Github, Twitter, Instagram].map((Icon, i) => (
              <a key={i} href="#" className="w-11 h-11 rounded-xl glass flex items-center justify-center hover:bg-primary/20 hover:text-primary-glow transition-all">
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        <h2 className="font-display font-black text-[20vw] md:text-[16vw] leading-[0.85] tracking-tighter gradient-text text-glow text-center select-none">
          LEO CARTER
        </h2>

        <div className="mt-10 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div>© 2026 Leo Carter. All rights reserved.</div>
          <div>Crafted with precision in San Francisco.</div>
        </div>
      </div>
    </footer>
  );
};
