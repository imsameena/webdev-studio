import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Container from "./ui/Container";
import Button from "./ui/Button";
import { navLinks } from "../data/nav";
import { scrollToSection } from "../lib/scroll";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass" : "bg-transparent border-b border-transparent"
      }`}
    >
      <Container className="flex items-center justify-between py-4">
        <a
          href="#hero"
          onClick={(e) => scrollToSection(e, "#hero")}
          className="font-display text-lg font-bold text-ink-100"
        >
          Sameena<span className="text-accent-cyan">.</span>dev
        </a>

        <nav className="hidden items-center gap-8 sm:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-sm text-ink-300 transition-colors hover:text-ink-100"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden sm:block">
          <Button
            as="a"
            href="#contact"
            onClick={(e) => scrollToSection(e, "#contact")}
            variant="primary"
            className="px-5 py-2.5 text-xs"
          >
            Get a Quote
          </Button>
        </div>

        <button
          aria-label="Toggle menu"
          className="text-ink-100 sm:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </Container>

      {open && (
        <div className="glass border-t border-white/10 sm:hidden">
          <Container className="flex flex-col gap-4 py-5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  scrollToSection(e, link.href);
                  setOpen(false);
                }}
                className="text-sm text-ink-300 hover:text-ink-100"
              >
                {link.label}
              </a>
            ))}
            <Button
              as="a"
              href="#contact"
              onClick={(e) => {
                scrollToSection(e, "#contact");
                setOpen(false);
              }}
              variant="primary"
              className="w-full"
            >
              Get a Quote
            </Button>
          </Container>
        </div>
      )}
    </header>
  );
}
