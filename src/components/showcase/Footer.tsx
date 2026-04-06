import { Factory, Sparkles } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center">
            <Factory className="w-5 h-5 text-primary" />
          </div>
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
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm group hover:border-primary/40 transition-all duration-500">
          <Sparkles className="w-4 h-4 text-primary animate-pulse" />
          <span className="text-sm font-medium text-muted-foreground">
            Powered by{" "}
            <span className="gradient-text font-semibold tracking-tight">CortaneX AI</span>
          </span>
        </div>

        <div className="mt-8 text-xs text-muted-foreground/50">
          © 2026 CORTA-PL Production Suite. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;