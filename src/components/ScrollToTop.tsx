import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      onClick={scrollTop}
      aria-label="Retour en haut"
      className={`fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-gradient-to-br from-primary-deep to-primary text-primary-foreground flex items-center justify-center shadow-[0_0_20px_hsl(var(--primary)/0.5)] hover:shadow-[0_0_35px_hsl(var(--primary)/0.7)] hover:scale-110 transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <ChevronUp className="w-5 h-5" />
    </button>
  );
};
