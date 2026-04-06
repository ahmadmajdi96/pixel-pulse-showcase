import { Component, type ErrorInfo, type ReactNode } from "react";
import { RefreshCcw, TriangleAlert } from "lucide-react";

type AppErrorBoundaryProps = {
  children: ReactNode;
};

type AppErrorBoundaryState = {
  hasError: boolean;
  errorMessage?: string;
};

class AppErrorBoundary extends Component<AppErrorBoundaryProps, AppErrorBoundaryState> {
  state: AppErrorBoundaryState = {
    hasError: false,
  };

  static getDerivedStateFromError(error: Error): AppErrorBoundaryState {
    return {
      hasError: true,
      errorMessage: error.message,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("CORTA-PL render error", error, errorInfo);
  }

  render() {
    if (!this.state.hasError) {
      return this.props.children;
    }

    return (
      <main className="min-h-screen bg-background text-foreground">
        <div className="container mx-auto flex min-h-screen max-w-3xl items-center justify-center px-6 py-20">
          <div className="w-full rounded-3xl border border-border/60 bg-card/80 p-8 text-center shadow-2xl backdrop-blur">
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10 text-primary">
              <TriangleAlert className="h-7 w-7" aria-hidden="true" />
            </div>

            <p className="text-sm font-medium uppercase tracking-[0.3em] text-primary">Preview recovery</p>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight">The page hit a render issue.</h1>
            <p className="mt-4 text-base text-muted-foreground">
              Refresh the preview to reload the CORTA-PL showcase. If this happens again, the app will show this recovery screen instead of a blank page.
            </p>

            {this.state.errorMessage ? (
              <p className="mt-4 rounded-2xl border border-border/60 bg-background/70 px-4 py-3 text-sm text-muted-foreground">
                {this.state.errorMessage}
              </p>
            ) : null}

            <button
              type="button"
              onClick={() => window.location.reload()}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              <RefreshCcw className="h-4 w-4" aria-hidden="true" />
              Reload preview
            </button>
          </div>
        </div>
      </main>
    );
  }
}

export default AppErrorBoundary;