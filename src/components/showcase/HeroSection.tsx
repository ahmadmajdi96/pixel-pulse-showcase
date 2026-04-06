import heroFactory from "@/assets/hero-factory.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroFactory}
          alt="Modern food manufacturing production line"
          className="w-full h-full object-cover"
          width={1920}
          height={800}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
        <div className="absolute inset-0 hero-gradient" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm mb-8">
          <span className="pulse-dot bg-accent" />
          <span className="text-sm font-medium text-muted-foreground">Enterprise Manufacturing Intelligence Platform</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
          <span className="gradient-text">Pixel Pulse</span>
          <br />
          <span className="text-foreground">Production Suite</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
          A unified ecosystem of MES, QMS, and CMS applications purpose-built for 
          food manufacturing — from the control room to the factory floor.
        </p>

        {/* Key stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { value: "3", label: "Core Platforms" },
            { value: "9+", label: "Edge Applications" },
            { value: "100+", label: "Feature Screens" },
            { value: "ISA-95", label: "Compliant" },
          ].map((stat) => (
            <div key={stat.label} className="data-card text-center backdrop-blur-sm bg-card/60">
              <div className="metric-value text-primary">{stat.value}</div>
              <div className="metric-label mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-3 rounded-full bg-primary animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
