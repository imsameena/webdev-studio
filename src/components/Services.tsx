import { motion } from "framer-motion";
import { Building2, ShoppingCart, UserRound, Rocket } from "lucide-react";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import { services } from "../data/services";

const icons = [Building2, ShoppingCart, UserRound, Rocket];

export default function Services() {
  return (
    <section id="services" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Services"
          title="What I can build for you."
          description="Whatever kind of site your business needs, built to look sharp and work well on any device."
        />

        <div className="grid gap-5 sm:grid-cols-2">
          {services.map((service, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group rounded-2xl glass p-6 transition-all duration-300 hover:border-accent-violet/40 hover:-translate-y-1"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent-violet/10 text-accent-cyan">
                  <Icon size={20} />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-ink-100">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
