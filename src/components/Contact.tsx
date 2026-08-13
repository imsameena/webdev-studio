import { Mail, Github, Linkedin } from "lucide-react";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import Button from "./ui/Button";
import { profile } from "../data/profile";

export default function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Have a project in mind?"
          description="Tell me a bit about your business and what you need — I'll get back to you within a day or two."
          align="center"
        />

        <div className="mx-auto flex max-w-md flex-col items-center gap-5">
          <Button as="a" href={`mailto:${profile.email}`} variant="primary" className="w-full">
            <Mail size={16} /> {profile.email}
          </Button>

          <div className="flex items-center gap-4">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-ink-500 transition-colors hover:text-ink-100"
            >
              <Github size={20} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-ink-500 transition-colors hover:text-ink-100"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
