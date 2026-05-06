import { 
  SiReact, SiVuedotjs, SiDjango, SiFastapi, SiJavascript, 
  SiSpringboot, SiAngular, SiNodedotjs, SiMongodb, 
  SiPostgresql, SiMysql, SiTypescript, SiTailwindcss, SiDocker 
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const techStack = [
  { icon: SiReact, label: "React", color: "#61DAFB" },
  { icon: SiVuedotjs, label: "Vue.js", color: "#4FC08D" },
  { icon: SiAngular, label: "Angular", color: "#DD0031" },
  { icon: SiJavascript, label: "JavaScript", color: "#F7DF1E" },
  { icon: SiTypescript, label: "TypeScript", color: "#3178C6" },
  { icon: SiNodedotjs, label: "Node.js", color: "#339933" },
  { icon: SiSpringboot, label: "Spring Boot", color: "#6DB33F" },
  { icon: FaJava, label: "Java", color: "#007396" },
  { icon: SiDjango, label: "Django", color: "#092E20" },
  { icon: SiFastapi, label: "FastAPI", color: "#05998B" },
  { icon: SiPostgresql, label: "PostgreSQL", color: "#4169E1" },
  { icon: SiMysql, label: "MySQL", color: "#4479A1" },
  { icon: SiMongodb, label: "MongoDB", color: "#47A248" },
  { icon: SiTailwindcss, label: "Tailwind CSS", color: "#06B6D4" },
  { icon: SiDocker, label: "Docker", color: "#2496ED" },
];

export const TechStack = () => {
  const { t } = useTranslation();
  // Doubler la liste pour créer l'effet infini sans couture
  const marqueeItems = [...techStack, ...techStack];

  return (
    <section className="py-16 border-y border-white/5 overflow-hidden">
      <div className="container mb-8">
        <p className="text-center text-sm uppercase tracking-[0.3em] text-muted-foreground">
          {t("techStack.label")}
        </p>
      </div>
      
      <div className="relative flex items-center">
        <div className="animate-marquee flex items-center gap-16 py-2">
          {marqueeItems.map((tech, index) => (
            <div
              key={index}
              className="flex items-center gap-4 transition-all duration-500 group cursor-default"
            >
              <div className="flex items-center justify-center w-10 h-10">
                <tech.icon 
                  className="w-full h-full transition-all duration-500 group-hover:scale-110 group-hover:filter group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]" 
                  style={{ color: tech.color }} 
                />
              </div>
              <span className="font-display font-medium text-xl text-muted-foreground/70 group-hover:text-foreground transition-colors whitespace-nowrap">
                {tech.label}
              </span>
            </div>
          ))}
        </div>
        
        {/* Gradient overlays pour un effet de fondu sur les bords */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
};
