import mesDashboard from "@/assets/mes-dashboard.jpg";
import qmsDashboard from "@/assets/qms-dashboard.jpg";
import cmsDashboard from "@/assets/cms-dashboard.jpg";
import edgeApps from "@/assets/edge-apps.jpg";
import {
  Factory, Activity, Wrench, Package, Zap, BarChart3,
  Shield, ClipboardCheck, AlertTriangle, Users, FlaskConical,
  FileCheck, Scale, Leaf, Globe, Award,
  Tablet, CheckSquare, ThermometerSun, UserCheck, Search,
} from "lucide-react";

interface ModuleData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  colorVar: string;
  features: { icon: React.ElementType; title: string; desc: string }[];
  screens: string[];
}

const modules: ModuleData[] = [
  {
    id: "mes",
    title: "Production Pulse",
    subtitle: "Manufacturing Execution System (MES)",
    description:
      "Real-time production monitoring, OEE tracking, equipment management, and scheduling across all production lines. Provides ISA-95 Level 3 operations management with full station-level visibility.",
    image: mesDashboard,
    colorVar: "--mes-color",
    features: [
      { icon: Activity, title: "Real-Time OEE", desc: "Availability × Performance × Quality with Pareto loss analysis" },
      { icon: Factory, title: "Line Station Management", desc: "Segment lines into stations with per-station throughput and cycle time" },
      { icon: Wrench, title: "Equipment Registry", desc: "Asset health monitoring, PM scheduling, and work order management" },
      { icon: Package, title: "Material & Recipe", desc: "Lot tracking, recipe dispatch, and finished goods management" },
      { icon: Zap, title: "Energy & Sustainability", desc: "kWh/water consumption per line with efficiency benchmarks" },
      { icon: BarChart3, title: "SPC & Reports", desc: "Statistical process control with capability analysis and shift reports" },
    ],
    screens: [
      "Production Dashboard", "OEE Performance", "Production Lines", "Station Dashboard",
      "Equipment Registry", "Machine Detail", "Work Orders", "Recipe Management",
      "Material Management", "Production Scheduling", "SPC Analysis", "Energy Dashboard",
      "CIP Management", "Labor Management", "Non-conformance", "Reports Hub",
    ],
  },
  {
    id: "qms",
    title: "Pixel Perfect",
    subtitle: "Quality Management System (QMS)",
    description:
      "Comprehensive food safety and quality management with CAPA workflows, HACCP monitoring, supplier qualification, inspection management, and full BRCGS/SQF audit support.",
    image: qmsDashboard,
    colorVar: "--qms-color",
    features: [
      { icon: Shield, title: "CAPA Management", desc: "7-stage corrective action workflow with root cause analysis and effectiveness verification" },
      { icon: ClipboardCheck, title: "HACCP & Food Safety", desc: "CCP monitoring, critical limit validation, and automated deviation flagging" },
      { icon: AlertTriangle, title: "Deviations & Complaints", desc: "Full investigation workflows with severity scoring and CPMU metrics" },
      { icon: Users, title: "Supplier Quality", desc: "Qualification lifecycles, performance scorecards, and COA management" },
      { icon: FlaskConical, title: "Environmental Monitoring", desc: "Hygiene zone sampling (EMP), allergen control, and pest management" },
      { icon: Search, title: "Traceability & Recall", desc: "End-to-end lot genealogy with one-click mock recall exercises" },
    ],
    screens: [
      "Quality Dashboard", "CAPA List & Detail", "Complaint Management", "HACCP Plans",
      "Incoming Inspections", "Deviation Management", "Supplier Qualification",
      "Environmental Monitoring", "Allergen Control", "Traceability & Recall",
      "Audit Management", "Training Records", "Document Control", "Calibration",
      "Risk Register", "Management Review", "Reports Hub",
    ],
  },
  {
    id: "cms",
    title: "Pixel Pulse Build",
    subtitle: "Compliance Management System (CMS)",
    description:
      "Regulatory intelligence, certification lifecycle management, ESG reporting, trade compliance, and audit evidence packaging — keeping your operations ahead of evolving global regulations.",
    image: cmsDashboard,
    colorVar: "--cms-color",
    features: [
      { icon: Scale, title: "Regulatory Intelligence", desc: "Horizon scanning with automated rule-to-product impact assessment" },
      { icon: Award, title: "Certification Lifecycle", desc: "Track BRCGS, SQF, FSSC 22000 certifications with audit readiness scoring" },
      { icon: FileCheck, title: "Label Compliance", desc: "Artwork validation against regulation databases (EU 1169/2011, FDA)" },
      { icon: Leaf, title: "ESG & Carbon Tracking", desc: "Scope 1/2/3 emissions, EPR material inventory, and sustainability dashboards" },
      { icon: Globe, title: "Trade Compliance", desc: "Sanctions screening, export documentation, and market registration dossiers" },
      { icon: ClipboardCheck, title: "Evidence Packages", desc: "Pre-assembled audit evidence with clause mapping for certification bodies" },
    ],
    screens: [
      "Compliance Dashboard", "Regulatory Intelligence", "Horizon Scanning",
      "Portfolio Analysis", "Formulation Check", "Certifications", "Label Compliance",
      "Registrations", "Recall Hub", "FSMA 204 Traceability", "ESG Dashboard",
      "Carbon Footprint", "EPR Management", "Trade Compliance", "Reports", "Admin",
    ],
  },
  {
    id: "edge",
    title: "Edge Application Suite",
    subtitle: "Factory Floor & Field Applications",
    description:
      "Purpose-built edge applications for operators, technicians, managers, and auditors — designed for rugged tablets and kiosks on the production floor with simplified, task-focused interfaces.",
    image: edgeApps,
    colorVar: "--edge-color",
    features: [
      { icon: Tablet, title: "MES Edge (5 Apps)", desc: "Operator run status, Supervisor alerts, Maintenance WOs, Warehouse receiving, Energy monitoring" },
      { icon: CheckSquare, title: "QA Technician (13 Screens)", desc: "GMP inspection, CCP monitoring, EMP sampling, allergen swabs, pest sighting, calibration" },
      { icon: UserCheck, title: "QA Manager (8 Screens)", desc: "Alert inbox, allergen sign-off, CCP deviation review, batch release, CAPA approvals" },
      { icon: ThermometerSun, title: "Kiosk & Auditor", desc: "Self-service health declaration, PPE check, training library, audit evidence packs" },
    ],
    screens: [
      "EA1: Operator Run Status", "EA2: Supervisor Dashboard", "EA3: Maintenance Queue",
      "EA4: Warehouse Receiving", "EA5: Energy Monitoring",
      "QA1: GMP Inspection", "QA1: CCP Monitoring", "QA1: EMP Sampling",
      "QA1: Label Verification", "QA1: Batch Release Recommendation",
      "QA2: Alert Inbox", "QA2: NCR Disposition", "QA2: Line Release",
      "QA3: Health Declaration", "QA3: PPE Verification",
      "QA4: Audit Evidence", "QA4: Mock Recall", "QA4: Facility Map",
    ],
  },
];

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

        <div className="space-y-32">
          {modules.map((mod, idx) => (
            <div key={mod.id} id={mod.id} className="scroll-mt-8">
              {/* Module Header */}
              <div className={`flex flex-col ${idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-10 items-center mb-12`}>
                {/* Image */}
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

                {/* Description */}
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
                    <span className="font-mono font-semibold text-foreground">{mod.screens.length}+</span> screens available
                  </div>
                </div>
              </div>

              {/* Features Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {mod.features.map((feat) => (
                  <div key={feat.title} className="benefit-card group">
                    <div className="flex items-start gap-3">
                      <div
                        className="p-2 rounded-md shrink-0"
                        style={{
                          background: `hsl(var(${mod.colorVar}) / 0.1)`,
                        }}
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
      </div>
    </section>
  );
};

export default ModuleShowcase;
