import { Star } from "lucide-react";
import a1 from "@/assets/avatar-1.jpg";
import a2 from "@/assets/avatar-2.jpg";
import a3 from "@/assets/avatar-3.jpg";

const reviews = [
  { name: "Sarah Mitchell", role: "Product Lead, Google", img: a1, text: "Leo delivered beyond every expectation. The platform he built drove a 40% increase in conversions in the first quarter alone." },
  { name: "Marcus Reed", role: "CTO, Stripe", img: a2, text: "Rare to find someone equally fluent in design and engineering. Leo is that person — and the work shows it." },
  { name: "Aiko Tanaka", role: "Founder, Nimbus", img: a3, text: "Working with Leo felt like having a co-founder. Thoughtful, fast, and genuinely invested in the outcome." },
  { name: "James Whitfield", role: "VP Engineering, Uber", img: a2, text: "Sharp execution, sharper instincts. Our SaaS dashboard has never looked or performed better." },
  { name: "Elena Castro", role: "Design Director, Airbnb", img: a1, text: "An absolute craftsman. Every interaction, every micro-detail considered. Highly recommend." },
  { name: "Priya Shah", role: "PM, Mashable", img: a3, text: "Leo took a vague idea and shipped a product that our users genuinely love. That's a rare gift." },
];

export const Testimonials = () => {
  return (
    <section className="py-32 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-primary/10 blur-[140px]" />
      <div className="container relative z-10">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <p className="text-sm uppercase tracking-[0.3em] text-primary-glow mb-4">Testimonials</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold">
            What clients <span className="gradient-text">say</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="glass-card border-glow p-7 hover:shadow-[0_20px_50px_-10px_hsl(var(--primary)/0.3)] transition-all duration-500 hover:-translate-y-1"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary-glow text-primary-glow" />
                ))}
              </div>
              <p className="text-foreground/90 leading-relaxed mb-6">"{r.text}"</p>
              <div className="flex items-center gap-3 pt-5 border-t border-white/10">
                <img src={r.img} alt={r.name} loading="lazy" width={48} height={48} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <div className="font-semibold">{r.name}</div>
                  <div className="text-sm text-muted-foreground">{r.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
