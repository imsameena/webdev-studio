export interface WorkItem {
  slug: string;
  title: string;
  type: string;
  description: string;
  tags: string[];
}

// Sample/concept projects — swap these for real client work once you have some.
export const work: WorkItem[] = [
  {
    slug: "cafe-aroma",
    title: "Café Aroma",
    type: "Restaurant landing page",
    description:
      "A single-page site for a local café with a menu showcase, opening hours, location map, and a mobile-friendly table reservation form.",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
  },
  {
    slug: "urban-fitness-studio",
    title: "Urban Fitness Studio",
    type: "Business website",
    description:
      "A gym/studio site with class schedules, trainer profiles, membership pricing tiers, and a contact form for trial sign-ups.",
    tags: ["React", "Tailwind CSS"],
  },
  {
    slug: "bloom-co",
    title: "Bloom & Co.",
    type: "E-commerce storefront",
    description:
      "A small online store for a handmade goods brand, with a product catalog, cart, and checkout flow built as a front-end concept.",
    tags: ["React", "JavaScript", "CSS"],
  },
];
