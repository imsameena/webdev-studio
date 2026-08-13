import { motion } from "framer-motion";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`mb-12 ${align === "center" ? "text-center mx-auto max-w-2xl" : ""}`}
    >
      <span className="font-mono text-xs tracking-[0.2em] uppercase text-accent-cyan">
        {eyebrow}
      </span>
      <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-ink-100 text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-ink-500 text-base sm:text-lg leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
