import {
  Factory, Activity, Wrench, Package, Zap, BarChart3,
  Shield, ClipboardCheck, AlertTriangle, Users, FlaskConical,
  FileCheck, Scale, Leaf, Globe, Award,
  Tablet, CheckSquare, ThermometerSun, UserCheck, Search,
  FileText, AlertCircle, Ship, Recycle,
  Timer, Gauge, Settings, CalendarCheck, Layers, Database,
  Microscope, BookOpen, FileWarning, Truck, Thermometer,
  Building, BadgeCheck, Landmark, ScrollText, FileSpreadsheet,
  TrendingDown, DollarSign, Clock, Target,
} from "lucide-react";
import type { ElementType } from "react";

import mesDashboard from "@/assets/mes-dashboard.jpg";
import qmsDashboard from "@/assets/qms-dashboard.jpg";
import cmsDashboard from "@/assets/cms-dashboard.jpg";
import edgeApps from "@/assets/edge-apps.jpg";

export interface ModuleFeature {
  icon: ElementType;
  title: string;
  desc: string;
}

export interface ImpactMetric {
  icon: ElementType;
  metric: string;
  label: string;
  description: string;
}

export interface ModuleData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  colorVar: string;
  features: ModuleFeature[];
  screens: string[];
  impact: ImpactMetric[];
}

export interface EdgeAppGroup {
  category: string;
  colorVar: string;
  apps: ModuleFeature[];
  screens: string[];
  impact: ImpactMetric[];
}

export const modules: ModuleData[] = [
  {
    id: "mes",
    title: "MES",
    subtitle: "Manufacturing Execution System",
    description:
      "Real-time production monitoring, OEE tracking, equipment management, and scheduling across all production lines. Provides ISA-95 Level 3 operations management with full station-level visibility — from raw material intake to finished goods packaging.",
    image: mesDashboard,
    colorVar: "--mes-color",
    impact: [
      { icon: TrendingDown, metric: "↓ 30%", label: "Downtime Reduction", description: "Predictive maintenance alerts and automated work orders catch failures before they happen, reducing unplanned stops by up to 30%." },
      { icon: DollarSign, metric: "↓ 18%", label: "Operating Costs", description: "Energy monitoring, optimized scheduling, and reduced changeover times cut operating costs across every production line." },
      { icon: Target, metric: "↑ 25%", label: "OEE Improvement", description: "Real-time Pareto analysis of availability, performance, and quality losses enables targeted improvement on the biggest bottlenecks." },
      { icon: Clock, metric: "↑ 40%", label: "Faster Changeovers", description: "Digital recipe dispatch and automated parameter loading slash changeover times between production runs." },
    ],
    features: [
      { icon: Activity, title: "Real-Time OEE Dashboard", desc: "Live Availability × Performance × Quality scoring with automatic Pareto analysis of the six big losses. Drill down from plant level to individual station in one click." },
      { icon: Factory, title: "Line & Station Management", desc: "Segment production lines into stations with per-station throughput, cycle time, and yield tracking. Visual line maps show bottleneck stations in real time." },
      { icon: Wrench, title: "Equipment Registry & PM", desc: "Complete asset registry with health scoring, preventive maintenance scheduling, spare parts inventory, and MTBF/MTTR analytics. Auto-generates work orders on threshold breaches." },
      { icon: Package, title: "Material & Recipe Management", desc: "Full lot tracking from raw material receipt to finished goods. Recipe dispatch with parameter versioning, BOM management, and automated material consumption recording." },
      { icon: Zap, title: "Energy & Sustainability", desc: "Real-time kWh, water, gas, and steam consumption per line and per unit produced. Benchmarking against historical baselines with automated anomaly alerts." },
      { icon: BarChart3, title: "SPC & Statistical Analysis", desc: "Control charts (X̄-R, X̄-S, CUSUM), capability indices (Cp, Cpk, Pp, Ppk), and automated out-of-control rule detection with trend analysis." },
      { icon: Timer, title: "Production Scheduling", desc: "Drag-and-drop Gantt scheduling with constraint-based optimization, shift patterns, planned downtime windows, and automatic conflict detection." },
      { icon: Gauge, title: "Downtime & Loss Tracking", desc: "Categorized downtime events (planned, unplanned, changeover, cleaning) with automatic duration capture, reason code trees, and shift-over-shift comparison." },
      { icon: Settings, title: "CIP & Cleaning Management", desc: "Clean-in-place scheduling, cycle verification, chemical concentration tracking, and automated cleaning validation records for food safety compliance." },
      { icon: CalendarCheck, title: "Shift Reports & Handover", desc: "Auto-generated end-of-shift reports summarizing OEE, downtime events, quality holds, and open actions. Digital handover with acknowledgement tracking." },
      { icon: Layers, title: "Work Order Management", desc: "Production work orders with status tracking, material allocation, labor assignment, and actual-vs-planned variance analysis." },
      { icon: Database, title: "Batch Genealogy", desc: "Complete batch tree from raw materials through intermediates to finished goods with full forward and backward traceability in seconds." },
    ],
    screens: [
      "Production Dashboard", "OEE Performance", "Production Lines", "Station Dashboard",
      "Equipment Registry", "Machine Detail", "Work Orders", "Recipe Management",
      "Material Management", "Production Scheduling", "SPC Analysis", "Energy Dashboard",
      "CIP Management", "Labor Management", "Non-conformance", "Reports Hub",
      "Downtime Analysis", "Shift Handover", "Batch Genealogy", "KPI Scorecard",
    ],
  },
  {
    id: "qms",
    title: "QMS",
    subtitle: "Quality Management System",
    description:
      "Comprehensive food safety and quality management with CAPA workflows, HACCP monitoring, supplier qualification, inspection management, and full BRCGS/SQF audit support. Drives continuous improvement through data-driven quality insights.",
    image: qmsDashboard,
    colorVar: "--qms-color",
    impact: [
      { icon: TrendingDown, metric: "↓ 65%", label: "Fewer Quality Failures", description: "Automated CCP monitoring and deviation alerts catch quality issues in real time, reducing customer complaints and product holds by up to 65%." },
      { icon: DollarSign, metric: "↓ 40%", label: "Waste Reduction", description: "Early defect detection, root cause analysis, and supplier qualification programs dramatically reduce scrap and rework costs." },
      { icon: Target, metric: "↑ 90%", label: "First-Time Audit Pass", description: "Pre-assembled evidence packages with clause mapping ensure audit readiness — no more last-minute scrambles before BRCGS/SQF visits." },
      { icon: Clock, metric: "↓ 75%", label: "Investigation Time", description: "Structured CAPA workflows with automated root cause tools (5-Why, Ishikawa) cut investigation cycle times from weeks to days." },
    ],
    features: [
      { icon: Shield, title: "CAPA Management", desc: "Full 7-stage workflow: Initiation → Investigation → Root Cause (5-Why, Ishikawa, FTA) → Action Planning → Implementation → Effectiveness Verification → Closure. Automated escalation on overdue actions." },
      { icon: ClipboardCheck, title: "HACCP & Food Safety Plans", desc: "Digital HACCP plans with CCP monitoring, critical limit validation, corrective action triggers, and automated deviation flagging. Links directly to edge app CCP checks." },
      { icon: AlertTriangle, title: "Deviation & Complaint Management", desc: "Full investigation workflows with severity scoring (minor/major/critical), CPMU metrics, trend analysis, and automatic CAPA generation for recurring issues." },
      { icon: Users, title: "Supplier Quality Management", desc: "Supplier qualification lifecycles, risk-based audit scheduling, performance scorecards (delivery, quality, responsiveness), COA management, and approved supplier list maintenance." },
      { icon: FlaskConical, title: "Environmental Monitoring (EMP)", desc: "Hygiene zone sampling programs with Listeria, Salmonella, and indicator organism tracking. Zone maps, sampling schedules, trending, and automatic corrective action triggers." },
      { icon: Search, title: "Traceability & Mock Recall", desc: "End-to-end lot genealogy from supplier through production to customer. One-click mock recall exercises with timed performance tracking and recall effectiveness scoring." },
      { icon: Microscope, title: "Incoming & In-Process Inspection", desc: "Configurable inspection plans with sampling tables (AQL), measurement recording, pass/fail with disposition workflows, and automatic supplier notification on rejections." },
      { icon: BookOpen, title: "Document Control & Training", desc: "Version-controlled document management with approval workflows, periodic review reminders, training matrix, and competency tracking with gap analysis." },
      { icon: FileWarning, title: "Risk Register & FMEA", desc: "Food safety and quality risk registers with severity × likelihood × detectability scoring. FMEA worksheets with automatic risk priority number calculation." },
      { icon: Thermometer, title: "Calibration Management", desc: "Instrument registry with calibration schedules, tolerance tracking, out-of-tolerance investigations, and calibration certificate management." },
      { icon: Truck, title: "Allergen Control Program", desc: "Allergen matrix management, changeover validation checklists, swab testing schedules, and cross-contamination risk assessment with visual production line mapping." },
      { icon: Building, title: "Audit Management", desc: "Internal and external audit scheduling, checklist creation, finding tracking, CAPA linkage, and trend reporting across audit cycles." },
    ],
    screens: [
      "Quality Dashboard", "CAPA List & Detail", "Complaint Management", "HACCP Plans",
      "Incoming Inspections", "Deviation Management", "Supplier Qualification",
      "Environmental Monitoring", "Allergen Control", "Traceability & Recall",
      "Audit Management", "Training Records", "Document Control", "Calibration",
      "Risk Register", "Management Review", "Reports Hub", "Mock Recall",
      "Supplier Scorecards", "Non-conformance Trends",
    ],
  },
  {
    id: "cms",
    title: "CMS",
    subtitle: "Compliance Management System",
    description:
      "Regulatory intelligence, certification lifecycle management, ESG reporting, trade compliance, and audit evidence packaging — keeping your operations ahead of evolving global regulations and reducing the risk of costly non-compliance.",
    image: cmsDashboard,
    colorVar: "--cms-color",
    impact: [
      { icon: TrendingDown, metric: "↓ 80%", label: "Compliance Risk", description: "Automated horizon scanning and rule-to-product impact assessment ensures you never miss a regulatory change that affects your products." },
      { icon: DollarSign, metric: "↓ 50%", label: "Compliance Costs", description: "Automated evidence packaging, label validation, and certification tracking eliminate manual compliance overhead and consultant dependency." },
      { icon: Target, metric: "100%", label: "Label Accuracy", description: "Automated artwork validation against EU 1169/2011, FDA, and local regulation databases catches labeling errors before they reach the shelf." },
      { icon: Clock, metric: "↓ 60%", label: "Audit Prep Time", description: "Pre-assembled evidence packages with clause-by-clause mapping for BRCGS, SQF, and FSSC 22000 reduce audit preparation from weeks to days." },
    ],
    features: [
      { icon: Scale, title: "Regulatory Intelligence & Horizon Scanning", desc: "Automated monitoring of regulatory changes across 50+ jurisdictions. Rule-to-product impact assessment with affected SKU identification and action item generation." },
      { icon: Award, title: "Certification Lifecycle Management", desc: "Track BRCGS, SQF, FSSC 22000, ISO 22000 certifications with renewal timelines, audit readiness scoring, gap analysis, and corrective action tracking." },
      { icon: FileCheck, title: "Label & Artwork Compliance", desc: "Automated validation of nutrition panels, allergen declarations, claims, and mandatory statements against EU 1169/2011, FDA 21 CFR, and Codex Alimentarius." },
      { icon: Leaf, title: "ESG & Carbon Tracking", desc: "Scope 1/2/3 greenhouse gas emissions calculation, product carbon footprint (PCF), water footprint, EPR material inventory, and sustainability KPI dashboards." },
      { icon: Globe, title: "Trade & Export Compliance", desc: "Sanctions screening, denied party list checks, export documentation generation, health certificate management, and market registration dossier tracking." },
      { icon: ClipboardCheck, title: "Evidence Package Builder", desc: "Automated evidence collection from MES and QMS with clause-by-clause mapping to certification standards. One-click evidence pack generation for auditors." },
      { icon: BadgeCheck, title: "FSMA 204 Traceability", desc: "FDA Food Traceability Rule compliance with KDE capture, CTE recording, sortable spreadsheet generation, and 24-hour response capability." },
      { icon: Landmark, title: "Market Registration Management", desc: "Track product registrations across multiple markets with document requirements, renewal dates, and submission status dashboards." },
      { icon: ScrollText, title: "Regulatory Change Management", desc: "Structured workflows for assessing, planning, and implementing regulatory changes with cross-functional task assignment and deadline tracking." },
      { icon: FileSpreadsheet, title: "Compliance Reporting & Analytics", desc: "Executive dashboards showing compliance status by product, market, and standard. Trend analysis, overdue action tracking, and board-ready reports." },
    ],
    screens: [
      "Compliance Dashboard", "Regulatory Intelligence", "Horizon Scanning",
      "Portfolio Analysis", "Formulation Check", "Certifications", "Label Compliance",
      "Registrations", "Recall Hub", "FSMA 204 Traceability", "ESG Dashboard",
      "Carbon Footprint", "EPR Management", "Trade Compliance", "Reports", "Admin",
      "Evidence Packages", "Market Registrations", "Change Management", "Audit Readiness",
    ],
  },
];

export const edgeAppGroups: EdgeAppGroup[] = [
  {
    category: "MES Edge Apps",
    colorVar: "--mes-color",
    impact: [
      { icon: Clock, metric: "↓ 85%", label: "Data Entry Time", description: "Operators log downtime, scrap, and run status with 2-tap interactions instead of paper forms." },
      { icon: TrendingDown, metric: "↓ 45%", label: "Response Time", description: "Real-time supervisor alerts and maintenance escalation cut response to production issues from hours to minutes." },
    ],
    apps: [
      { icon: Tablet, title: "EA1: Operator Run Status", desc: "Real-time line status with one-tap downtime logging, scrap recording, run start/stop, speed adjustments, and operator notes. Works offline with automatic sync." },
      { icon: UserCheck, title: "EA2: Supervisor Dashboard", desc: "Multi-line overview with color-coded status, active alerts, shift KPI summary, escalation management, and one-tap operator communication." },
      { icon: Wrench, title: "EA3: Maintenance Queue", desc: "Prioritized work order queue with equipment details, spare parts check, time logging, photo capture for fault documentation, and PM checklist execution." },
      { icon: Package, title: "EA4: Warehouse Receiving", desc: "Inbound material receiving with barcode/QR scanning, lot registration, COA attachment, quality hold management, and storage location assignment." },
      { icon: Zap, title: "EA5: Energy Monitoring", desc: "Real-time energy consumption dashboards with per-line kWh tracking, anomaly alerts, shift consumption summaries, and benchmark comparisons." },
    ],
    screens: [
      "EA1: Operator Run Status", "EA2: Supervisor Dashboard", "EA3: Maintenance Queue",
      "EA4: Warehouse Receiving", "EA5: Energy Monitoring",
    ],
  },
  {
    category: "QMS Edge Apps",
    colorVar: "--qms-color",
    impact: [
      { icon: TrendingDown, metric: "↓ 70%", label: "Paper-Based Errors", description: "Digital checklists with validation rules eliminate transcription errors and missing data on quality forms." },
      { icon: Clock, metric: "↓ 50%", label: "Inspection Cycle Time", description: "Pre-loaded inspection plans with auto-populated fields and one-tap pass/fail reduce inspection time by half." },
    ],
    apps: [
      { icon: CheckSquare, title: "QA1: QA Technician", desc: "13-screen suite: GMP walkthrough inspections, CCP monitoring with limit validation, EMP sampling with zone maps, allergen swab recording, label verification, and batch release recommendation." },
      { icon: UserCheck, title: "QA2: QA Manager", desc: "8-screen suite: Alert inbox with priority scoring, allergen changeover sign-off, CCP deviation review and disposition, NCR management, batch release approval, and line clearance." },
      { icon: ThermometerSun, title: "QA3: Kiosk", desc: "Self-service stations: Employee health declaration with symptom screening, PPE compliance verification with photo capture, and searchable training library with competency tracking." },
      { icon: Search, title: "QA4: Auditor", desc: "Audit-ready tools: Evidence pack browser with clause navigation, timed mock recall execution, interactive facility map with zone inspection history, and finding capture with photo annotation." },
    ],
    screens: [
      "QA1: GMP Inspection", "QA1: CCP Monitoring", "QA1: EMP Sampling",
      "QA1: Label Verification", "QA1: Batch Release",
      "QA2: Alert Inbox", "QA2: NCR Disposition", "QA2: Line Release",
      "QA3: Health Declaration", "QA3: PPE Verification",
      "QA4: Audit Evidence", "QA4: Mock Recall", "QA4: Facility Map",
    ],
  },
  {
    category: "CMS Edge Apps",
    colorVar: "--cms-color",
    impact: [
      { icon: TrendingDown, metric: "↓ 90%", label: "Missed Deadlines", description: "Automated alerts for certification renewals, regulatory deadlines, and document expiries eliminate compliance blind spots." },
      { icon: DollarSign, metric: "↓ 60%", label: "Recall Costs", description: "Rapid recall execution with pre-built authority notification templates and customer communication workflows minimize financial exposure." },
    ],
    apps: [
      { icon: FileText, title: "CA1: Regulatory Affairs (9 screens)", desc: "Compliance command center, product regulatory lookup, label approval workflows, FSMA 204 traceability capture, certification status dashboard, compliance alerts, deadline actions, horizon scan feed, and weekly regulatory brief." },
      { icon: AlertCircle, title: "CA2: Recall War Room (7 screens)", desc: "Recall initiation dashboard, authority notification with pre-built templates, customer communication management, real-time cost tracking, product recovery scanning, communications log, and recall closeout with effectiveness assessment." },
      { icon: Ship, title: "CA3: Export Documents (4 screens)", desc: "Shipment document completeness checks, document expiry tracking with renewal alerts, import requirement lookup by destination country, and sanctions/denied party screening." },
      { icon: Recycle, title: "CA4: Sustainability (5 screens)", desc: "Packaging material data capture, product carbon footprint calculation, EPR obligation status and reporting, environmental permit reading logs, and EUDR deforestation-free compliance data." },
    ],
    screens: [
      "CA1: Compliance Command", "CA1: Product Lookup", "CA1: Label Approval",
      "CA1: FSMA 204", "CA1: Certification Status", "CA1: Compliance Alerts",
      "CA1: Deadline Actions", "CA1: Horizon Scan", "CA1: Weekly Brief",
      "CA2: Recall Dashboard", "CA2: Authority Notification", "CA2: Customer Comms",
      "CA2: Recall Costs", "CA2: Product Recovery", "CA2: Comms Log", "CA2: Closeout",
      "CA3: Shipment Doc Check", "CA3: Document Expiry", "CA3: Import Requirements", "CA3: Sanctions Check",
      "CA4: Packaging Data", "CA4: Carbon Footprint", "CA4: EPR Status", "CA4: Permit Readings", "CA4: EUDR Data",
    ],
  },
];

export { edgeApps };
