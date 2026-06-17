import Link from "next/link";
import { ChevronRight } from "lucide-react";

// Shared layout for simple text/content pages (policies, info, etc.).
export default function InfoPage({ title, intro, children }) {
  return (
    <div className="container-page py-10">
      <nav className="mb-6 flex items-center gap-1 text-sm text-silver-dark">
        <Link href="/" className="hover:text-royal">Home</Link>
        <ChevronRight size={14} />
        <span className="text-navy">{title}</span>
      </nav>

      <h1 className="text-3xl font-bold text-navy">{title}</h1>
      {intro && <p className="mt-3 max-w-3xl text-ink/70">{intro}</p>}

      <div className="prose-info mt-8 max-w-3xl space-y-6 text-sm leading-relaxed text-ink/80">
        {children}
      </div>
    </div>
  );
}

// Small helpers for consistent section styling inside InfoPage.
export function Section({ heading, children }) {
  return (
    <section>
      {heading && (
        <h2 className="mb-2 text-lg font-bold text-navy">{heading}</h2>
      )}
      <div className="space-y-2">{children}</div>
    </section>
  );
}
