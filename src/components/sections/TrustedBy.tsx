const logos = ["Airbnb", "Google", "Nike", "Uber", "Stripe", "Mashable"];

export const TrustedBy = () => {
  return (
    <section className="py-20 border-y border-white/5">
      <div className="container">
        <p className="text-center text-sm uppercase tracking-[0.3em] text-muted-foreground mb-10">
          Trusted by industry leaders
        </p>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center">
          {logos.map((logo) => (
            <div
              key={logo}
              className="font-display text-2xl md:text-3xl font-bold text-center text-muted-foreground/50 hover:text-foreground transition-colors duration-500 cursor-default"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
