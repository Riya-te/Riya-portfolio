import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className = "",
}: {
  id: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative mx-auto max-w-7xl scroll-mt-24 px-6 py-24 sm:py-32 ${className}`}>
      {(eyebrow || title || description) && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          {eyebrow && (
            <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              <span className="size-1.5 rounded-full bg-[#06B6D4] shadow-[0_0_10px_#06B6D4]" />
              {eyebrow}
            </span>
          )}
          {title && (
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              {title.split("|").map((part, i) =>
                i === 1 ? <span key={i} className="text-gradient">{part}</span> : <span key={i}>{part}</span>
              )}
            </h2>
          )}
          {description && (
            <p className="mt-4 text-base text-muted-foreground">{description}</p>
          )}
        </motion.div>
      )}
      {children}
    </section>
  );
}