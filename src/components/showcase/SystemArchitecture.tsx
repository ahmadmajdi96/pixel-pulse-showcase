import { Factory, Shield, FileCheck, Tablet, ArrowRight } from "lucide-react";

const layers = [
  {
    title: "Enterprise Layer",
    subtitle: "Strategic Management & Analytics",
    systems: [
      { name: "Production Pulse", desc: "Manufacturing Execution System", icon: Factory, color: "mes" },
      { name: "Pixel Perfect", desc: "Quality Management System", icon: Shield, color: "qms" },
      { name: "Pixel Pulse Build", desc: "Compliance Management System", icon: FileCheck, color: "cms" },
    ],
  },
  {
    title: "Edge Layer",
    subtitle: "Factory Floor Applications",
    systems: [
      { name: "MES Edge Apps", desc: "5 Operator/Supervisor/Maintenance Apps", icon: Tablet, color: "mes" },
      { name: "QMS Edge Apps", desc: "4 Technician/Manager/Kiosk/Auditor Apps", icon: Tablet, color: "qms" },
    ],
  },
];

const SystemArchitecture = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">System Architecture</h2>
          <p className="section-subtitle mx-auto">
            Built on ISA-95 standards with a two-tier architecture — enterprise platforms for management 
            and lightweight edge apps for the factory floor.
          </p>
        </div>

        <div className="space-y-8">
          {layers.map((layer, idx) => (
            <div key={layer.title}>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px flex-1 bg-border" />
                <div className="px-4 py-1.5 rounded-full border border-border bg-secondary/50 text-sm font-medium text-muted-foreground">
                  {layer.title}
                </div>
                <div className="h-px flex-1 bg-border" />
              </div>
              <p className="text-center text-sm text-muted-foreground mb-6">{layer.subtitle}</p>

              <div className={`grid gap-4 ${layer.systems.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2 max-w-4xl mx-auto"}`}>
                {layer.systems.map((sys) => (
                  <div
                    key={sys.name}
                    className="data-card flex items-start gap-4 group"
                  >
                    <div className={`p-3 rounded-lg bg-${sys.color}/10 border border-${sys.color}/20 shrink-0`}
                      style={{
                        background: `hsl(var(--${sys.color === "mes" ? "mes-color" : sys.color === "qms" ? "qms-color" : "cms-color"}) / 0.1)`,
                        borderColor: `hsl(var(--${sys.color === "mes" ? "mes-color" : sys.color === "qms" ? "qms-color" : "cms-color"}) / 0.2)`,
                      }}
                    >
                      <sys.icon className="w-6 h-6" style={{
                        color: `hsl(var(--${sys.color === "mes" ? "mes-color" : sys.color === "qms" ? "qms-color" : "cms-color"}))`,
                      }} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{sys.name}</h3>
                      <p className="text-sm text-muted-foreground">{sys.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {idx === 0 && (
                <div className="flex justify-center my-6">
                  <div className="flex flex-col items-center gap-1 text-muted-foreground/40">
                    <ArrowRight className="w-5 h-5 rotate-90" />
                    <span className="text-xs uppercase tracking-wider">Data Flow</span>
                    <ArrowRight className="w-5 h-5 rotate-90" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SystemArchitecture;
