import type { MouseEvent } from "react";

// HashRouter owns the URL hash for routing (#/work/cafe-aroma), so same-page
// section links (#about, #contact, ...) must scroll manually instead of
// letting the browser update location.hash — otherwise the router would try
// to match "#about" as a route and render nothing.
export function scrollToSection(e: MouseEvent, id: string) {
  e.preventDefault();
  document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
}
