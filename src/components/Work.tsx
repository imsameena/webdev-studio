import { motion } from "framer-motion";
import { Globe, ArrowRight } from "lucide-react";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import Badge from "./ui/Badge";
import { work } from "../data/work";

export default function Work() {
  return (
    <section id="work" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Sample Projects"
          title="A look at the kind of work I do."
          description="Concept projects showing the style and quality of sites I build — click one to open the demo. Real client work will go here as I take it on."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {work.map((item, i) => (
            <motion.a
              key={item.slug}
              href={`#/work/${item.slug}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group flex flex-col overflow-hidden rounded-2xl glass transition-all duration-300 hover:border-accent-violet/40 hover:-translate-y-1"
            >
              <div className="flex h-40 items-center justify-center bg-accent-gradient/10 border-b border-white/10">
                <Globe size={28} className="text-accent-cyan" />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <span className="font-mono text-xs uppercase tracking-wider text-ink-700">
                  {item.type}
                </span>
                <h3 className="mt-1.5 font-display text-lg font-semibold text-ink-100">
                  {item.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-500">
                  {item.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <Badge key={tag} className="px-3 py-1 text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <span className="mt-5 inline-flex items-center gap-1.5 font-mono text-xs text-accent-cyan group-hover:text-ink-100 transition-colors">
                  Open demo <ArrowRight size={14} />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </Container>
    </section>
  );
}
