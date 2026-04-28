import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "../LanguageSwitcher";

export const Navbar = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  
  const links = [
    { label: t("nav.home"), href: "#home" },
    { label: t("nav.work"), href: "#work" },
    { label: t("nav.services"), href: "#services" },
    { label: t("nav.about"), href: "#about" },
    { label: t("nav.faqs"), href: "#faqs" },
    { label: t("nav.contact"), href: "#contact" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="container py-5">
        <div className="glass rounded-full px-6 py-3 flex items-center justify-between">
          <a href="#home" className="font-display font-bold text-lg tracking-tight">
            FJC<span className="text-primary-glow">.</span>
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {l.label}
              </a>
            ))}
            <LanguageSwitcher />
          </nav>
          <a href="#contact" className="hidden md:inline-flex text-sm rounded-full px-4 py-2 bg-gradient-to-r from-primary-deep to-primary text-primary-foreground hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)] transition-all">
            {t("nav.contact")}
          </a>
          <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <div className="md:hidden mt-2 glass rounded-2xl p-4 flex flex-col gap-3 animate-fade-in">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm text-muted-foreground hover:text-foreground">
                {l.label}
              </a>
            ))}
            <LanguageSwitcher />
          </div>
        )}
      </div>
    </header>
  );
};
