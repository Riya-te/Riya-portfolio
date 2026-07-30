import { ExternalLink, Link, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mx-auto max-w-7xl border-t border-white/5 px-6 py-10">
      <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="text-sm text-muted-foreground">
            © 2026 <span className="text-gradient font-semibold">Riya Kumari</span>. All rights reserved.
          </p>
          <p className="mt-1 text-xs text-muted-foreground/80">
            Built with React, Tailwind CSS, Framer Motion & TypeScript.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <a href="https://github.com/Riya-te" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-muted-foreground transition-colors hover:text-foreground"><ExternalLink className="size-4" /></a>
          <a href="https://linkedin.com/in/riya-kumari-79a709302" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-muted-foreground transition-colors hover:text-foreground"><Link className="size-4" /></a>
          <a href="mailto:riyakumari1011.2006@gmail.com" aria-label="Email" className="text-muted-foreground transition-colors hover:text-foreground"><Mail className="size-4" /></a>
        </div>
      </div>
    </footer>
  );
}