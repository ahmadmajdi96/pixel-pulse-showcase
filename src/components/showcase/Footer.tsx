import { Sparkles } from "lucide-react";
import cortaLogo from "@/assets/corta-logo.png";

const Footer = () => {
  return (
    <footer className="py-12 sm:py-16 px-4 sm:px-6 border-t border-border">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <img src={cortaLogo} alt="CORTA-PL Logo" className="h-10 w-auto" height={40} loading="lazy" />
          <span className="font-bold text-2xl tracking-tight">CORTA-PL</span>
        </div>
        <p className="text-muted-foreground max-w-lg mx-auto mb-8">
          Enterprise Manufacturing Intelligence for the modern food production facility.
          From raw material to finished goods — every step monitored, every metric measured.
        </p>
        <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground mb-10">
          <span>MES</span>
          <span className="w-1 h-1 rounded-full bg-border" />
          <span>QMS</span>
          <span className="w-1 h-1 rounded-full bg-border" />
          <span>CMS</span>
          <span className="w-1 h-1 rounded-full bg-border" />
          <span>Edge Apps</span>
        </div>

        {/* Powered by CortaneX AI */}
        <a
          href="https://cortanexai.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm group hover:border-primary/40 hover:bg-primary/10 transition-all duration-500 hover-scale"
        >
          <Sparkles className="w-4 h-4 text-primary animate-pulse" />
          <span className="text-sm font-medium text-muted-foreground">
            Powered by{" "}
            <span className="gradient-text font-semibold tracking-tight group-hover:opacity-90">CortaneX AI</span>
          </span>
        </a>

        <div className="mt-8 text-xs text-muted-foreground/50">
          © 2026 CORTA-PL Production Suite. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;