import { useTranslation } from "react-i18next";
import { FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

export const Footer = () => {
  const { t } = useTranslation();
  
  const links = [
    { label: t("footer.links.home"), href: "#home" },
    { label: t("footer.links.about"), href: "#about" },
    { label: t("footer.links.work"), href: "#work" },
    { label: t("footer.links.faqs"), href: "#faqs" },
    { label: t("footer.links.contact"), href: "#contact" },
  ];

  const socials = [
    { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/fresnel-jean-claude-00433938a/", label: "LinkedIn" },
    { icon: FaGithub, href: "https://github.com/Fresnel11", label: "GitHub" },
    { icon: FaWhatsapp, href: "https://wa.me/2290165832196", label: "WhatsApp" },
    { icon: MdOutlineEmail, href: "mailto:fresneljeanclaudecossou64@gmail.com", label: "Email" },
  ];

  return (
    <footer className="pt-20 pb-10 border-t border-white/5 relative">
      <div className="container">
        <div className="grid md:grid-cols-[1fr_auto] gap-10 items-end mb-16">
          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {links.map((l) => (
              <a key={l.label} href={l.href} className="text-muted-foreground hover:text-foreground transition-colors">
                {l.label}
              </a>
            ))}
          </nav>
          <div className="flex gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={label}
                className="w-11 h-11 rounded-xl glass flex items-center justify-center hover:bg-primary/20 hover:text-primary-glow transition-all"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div>{t("footer.rights")}</div>
        </div>
      </div>
    </footer>
  );
};
