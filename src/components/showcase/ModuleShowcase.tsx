import { modules, edgeAppGroups, edgeApps } from "./ModuleData";
import ImpactCard from "./ImpactCard";

const ModuleShowcase = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="section-title mb-4">Platform Modules</h2>
          <p className="section-subtitle mx-auto">
            Each module is a fully-featured application, deployable independently or as a unified suite.
          </p>
        </div>

        {/* Core Platforms */}
        <div className="space-y-32">
          {modules.map((mod, idx) => (
            <div key={mod.id} id={mod.id} className="scroll-mt-8">
              {/* Module Header */}
              <div className={`flex flex-col ${idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-10 items-center mb-12`}>
                <div className="lg:w-3/5">
                  <div className="module-card overflow-hidden">
                    <div className="p-1">
                      <img
                        src={mod.image}
                        alt={`${mod.title} dashboard`}
                        className="w-full rounded-lg"
                        loading="lazy"
                        width={1920}
                        height={1080}
                      />
                    </div>
                  </div>
                </div>

                <div className="lg:w-2/5">
                  <div
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4"
                    style={{
                      background: `hsl(var(${mod.colorVar}) / 0.1)`,
                      color: `hsl(var(${mod.colorVar}))`,
                      border: `1px solid hsl(var(${mod.colorVar}) / 0.25)`,
                    }}
                  >
                    {mod.subtitle}
                  </div>
                  <h3 className="text-3xl font-bold mb-4">{mod.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">{mod.description}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="font-mono font-semibold text-foreground">{mod.screens.length}+</span> screens ·
                    <span className="font-mono font-semibold text-foreground">{mod.features.length}</span> feature areas
                  </div>
                </div>
              </div>

              {/* Impact Metrics */}
              <ImpactCard metrics={mod.impact} colorVar={mod.colorVar} />

              {/* Features Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {mod.features.map((feat) => (
                  <div key={feat.title} className="benefit-card group">
                    <div className="flex items-start gap-3">
                      <div
                        className="p-2 rounded-md shrink-0"
                        style={{ background: `hsl(var(${mod.colorVar}) / 0.1)` }}
                      >
                        <feat.icon
                          className="w-5 h-5"
                          style={{ color: `hsl(var(${mod.colorVar}))` }}
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm mb-1">{feat.title}</h4>
                        <p className="text-xs text-muted-foreground leading-relaxed">{feat.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Screen List */}
              <div className="data-card">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Available Screens</h4>
                <div className="flex flex-wrap gap-2">
                  {mod.screens.map((screen) => (
                    <span
                      key={screen}
                      className="px-3 py-1.5 rounded-md text-xs font-medium border border-border bg-secondary/30"
                    >
                      {screen}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Edge Applications */}
        <div id="edge" className="scroll-mt-8 mt-32">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Edge Application Suite</h2>
            <p className="section-subtitle mx-auto">
              Purpose-built edge applications for operators, technicians, managers, and auditors — designed for rugged tablets and kiosks on the production floor.
            </p>
          </div>

          <div className="mb-12">
            <div className="module-card overflow-hidden max-w-4xl mx-auto">
              <div className="p-1">
                <img
                  src={edgeApps}
                  alt="Edge applications on factory floor tablets"
                  className="w-full rounded-lg"
                  loading="lazy"
                  width={1920}
                  height={1080}
                />
              </div>
            </div>
          </div>

          <div className="space-y-16">
            {edgeAppGroups.map((group) => (
              <div key={group.category}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-px flex-1 bg-border" />
                  <div
                    className="px-4 py-1.5 rounded-full text-sm font-semibold"
                    style={{
                      background: `hsl(var(${group.colorVar}) / 0.1)`,
                      color: `hsl(var(${group.colorVar}))`,
                      border: `1px solid hsl(var(${group.colorVar}) / 0.25)`,
                    }}
                  >
                    {group.category}
                  </div>
                  <div className="h-px flex-1 bg-border" />
                </div>

                {/* Edge Impact */}
                <ImpactCard metrics={group.impact} colorVar={group.colorVar} />

                {/* App cards */}
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {group.apps.map((app) => (
                    <div key={app.title} className="benefit-card group">
                      <div className="flex items-start gap-3">
                        <div
                          className="p-2 rounded-md shrink-0"
                          style={{ background: `hsl(var(${group.colorVar}) / 0.1)` }}
                        >
                          <app.icon
                            className="w-5 h-5"
                            style={{ color: `hsl(var(${group.colorVar}))` }}
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm mb-1">{app.title}</h4>
                          <p className="text-xs text-muted-foreground leading-relaxed">{app.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Screen list */}
                <div className="data-card">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                    Screens ({group.screens.length})
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {group.screens.map((screen) => (
                      <span
                        key={screen}
                        className="px-3 py-1.5 rounded-md text-xs font-medium border border-border bg-secondary/30"
                      >
                        {screen}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModuleShowcase;
