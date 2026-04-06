import {
  TrendingUp, Clock, ShieldCheck, Eye, Layers, Wifi,
  BarChart3, Lock, Zap, Globe,
} from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Increase OEE by 15–25%",
    description: "Real-time visibility into availability, performance, and quality losses enables targeted improvement across every production line.",
  },
  {
    icon: Clock,
    title: "Reduce Downtime by 30%",
    description: "Predictive maintenance alerts, automated work orders, and shift-to-shift handover insights keep lines running longer.",
  },
  {
    icon: ShieldCheck,
    title: "Audit-Ready in Minutes",
    description: "Pre-assembled evidence packages with clause mapping for BRCGS, SQF, FSSC 22000 — no more scrambling before audits.",
  },
  {
    icon: Eye,
    title: "100% Traceability",
    description: "End-to-end lot genealogy from raw material receipt through production to finished goods — one-click mock recalls in under 2 hours.",
  },
  {
    icon: Layers,
    title: "Unified Data Model",
    description: "MES, QMS, and CMS share a common data backbone. A CCP deviation in QMS instantly surfaces in the MES supervisor dashboard.",
  },
  {
    icon: Wifi,
    title: "Edge-First Architecture",
    description: "Purpose-built tablet apps for the factory floor work offline and sync when connected — no more paper forms or clipboard walks.",
  },
  {
    icon: BarChart3,
    title: "Actionable Analytics",
    description: "SPC capability studies, Pareto charts, trend analysis, and automated shift reports transform raw data into decisions.",
  },
  {
    icon: Lock,
    title: "Role-Based Access",
    description: "Operators, technicians, managers, and auditors each see exactly what they need — nothing more, nothing less.",
  },
  {
    icon: Zap,
    title: "Rapid Deployment",
    description: "Modular architecture means you can start with MES and add QMS and CMS as you grow — no big-bang implementation.",
  },
  {
    icon: Globe,
    title: "Multi-Site Ready",
    description: "Centralized compliance monitoring across all facilities with site-specific dashboards and consolidated reporting.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="absolute inset-0 hero-gradient opacity-50" />
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">
            Why <span className="gradient-text">CORTA-PL</span>?
          </h2>
          <p className="section-subtitle mx-auto">
            Measurable impact on your production line KPIs from day one.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="benefit-card group hover:border-primary/30 transition-all duration-300"
            >
              <div className="p-2.5 rounded-lg bg-primary/10 border border-primary/20 w-fit mb-4">
                <benefit.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold mb-2 text-sm">{benefit.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
