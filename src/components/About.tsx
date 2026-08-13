import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";

const points = [
  "Clear communication from the first message to final handoff.",
  "Mobile-first, fast-loading sites built with modern tools.",
  "Fair, transparent pricing — no surprise costs.",
  "Ongoing support after your site goes live.",
];

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <SectionHeading
          eyebrow="Why work with me"
          title="I build sites people actually enjoy using."
          description="I care about the small details — fast load times, clean design, and a site that's easy for you to update long after launch."
        />

        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          {points.map((point) => (
            <li key={point} className="flex items-start gap-3 rounded-xl glass p-4">
              <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-accent-emerald" />
              <span className="text-sm text-ink-300">{point}</span>
            </li>
          ))}
        </motion.ul>
      </Container>
    </section>
  );
}
