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
        <div className="rounded-full px-6 py-3 flex items-center justify-between backdrop-blur-xl bg-white/10 border border-white/20 shadow-[0_4px_24px_hsl(222_47%_4%/0.6),inset_0_1px_0_hsl(var(--primary)/0.15)]">
          <a href="#home" className="font-display font-bold text-lg tracking-tight">
            FJC<span className="text-primary-glow">.</span>
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {l.label}
              </a>
            ))}
          </nav>
          
          <div className="hidden md:flex items-center gap-3">
            <LanguageSwitcher />
            <a href="#contact" className="inline-flex text-sm rounded-full px-5 py-2.5 bg-gradient-to-r from-primary-deep to-primary text-primary-foreground hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)] transition-all font-medium">
              {t("nav.contact")}
            </a>
          </div>
          <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <div className="md:hidden mt-2 rounded-2xl p-4 flex flex-col gap-3 animate-fade-in backdrop-blur-xl bg-white/10 border border-white/20 shadow-[0_4px_24px_hsl(222_47%_4%/0.6)]">
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
