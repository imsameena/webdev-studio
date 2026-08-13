import { motion } from "framer-motion";
import { ArrowRight, Code2 } from "lucide-react";
import Button from "./ui/Button";
import Container from "./ui/Container";
import { scrollToSection } from "../lib/scroll";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-20"
    >
      <div className="absolute inset-0 bg-grid-glow" />

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 font-mono text-xs text-ink-300">
            <Code2 size={14} className="text-accent-cyan" />
            Available for freelance projects
          </span>

          <h1 className="mt-6 font-display text-4xl sm:text-6xl font-bold leading-[1.08] text-ink-100 text-balance">
            I build websites for{" "}
            <span className="text-gradient">businesses &amp; creators.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-ink-500 leading-relaxed">
            Fast, modern, mobile-friendly websites — built with React and
            designed to make your business look as good online as it does
            in person.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button as="a" href="#work" onClick={(e) => scrollToSection(e, "#work")} variant="primary">
              View My Work <ArrowRight size={16} />
            </Button>
            <Button as="a" href="#contact" onClick={(e) => scrollToSection(e, "#contact")} variant="secondary">
              Get a Quote
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
