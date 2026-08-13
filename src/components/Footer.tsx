import Container from "./ui/Container";
import { profile } from "../data/profile";
import { scrollToSection } from "../lib/scroll";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <Container className="flex flex-col items-center justify-between gap-3 text-sm text-ink-700 sm:flex-row">
        <span>
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </span>
        <a
          href="#hero"
          onClick={(e) => scrollToSection(e, "#hero")}
          className="hover:text-ink-300 transition-colors"
        >
          Back to top
        </a>
      </Container>
    </footer>
  );
}
