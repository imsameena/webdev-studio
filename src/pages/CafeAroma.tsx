import { Coffee, Clock, MapPin } from "lucide-react";
import DemoBadge from "./DemoBadge";

const menu = [
  { name: "House Espresso", price: "$3.50", note: "Rich, dark-roast single origin" },
  { name: "Vanilla Oat Latte", price: "$5.00", note: "Oat milk, house vanilla syrup" },
  { name: "Almond Croissant", price: "$4.25", note: "Baked fresh every morning" },
  { name: "Avocado Toast", price: "$8.50", note: "Sourdough, chili flake, lime" },
];

export default function CafeAroma() {
  return (
    <div className="min-h-screen bg-[#faf3e9] font-[system-ui] text-[#3b2a1e]">
      <DemoBadge />

      <header className="border-b border-[#e4d3bc] px-6 py-6 text-center">
        <span className="font-serif text-2xl font-bold tracking-wide">☕ Café Aroma</span>
        <p className="mt-1 text-sm text-[#8a6f52]">Neighborhood coffee, roasted with care</p>
      </header>

      <section className="mx-auto max-w-3xl px-6 py-16 text-center">
        <Coffee size={36} className="mx-auto text-[#a9744f]" />
        <h1 className="mt-4 font-serif text-4xl font-bold sm:text-5xl">
          Good coffee, good mornings.
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-[#6b5842]">
          A cozy corner café serving small-batch coffee, fresh pastries, and
          brunch favorites — open daily from 7am.
        </p>
        <a
          href="#reserve"
          className="mt-8 inline-block rounded-full bg-[#a9744f] px-8 py-3 font-semibold text-white shadow-md transition-transform hover:-translate-y-0.5"
        >
          Reserve a Table
        </a>
      </section>

      <section className="border-t border-[#e4d3bc] bg-white/50 px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-serif text-2xl font-bold">Menu Highlights</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {menu.map((item) => (
              <div
                key={item.name}
                className="flex items-start justify-between rounded-xl border border-[#e4d3bc] bg-[#faf3e9] p-4"
              >
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-[#8a6f52]">{item.note}</p>
                </div>
                <span className="font-semibold text-[#a9744f]">{item.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reserve" className="px-6 py-16">
        <div className="mx-auto grid max-w-3xl gap-8 sm:grid-cols-2">
          <div className="flex items-start gap-3">
            <Clock size={22} className="mt-1 text-[#a9744f]" />
            <div>
              <p className="font-semibold">Opening Hours</p>
              <p className="text-sm text-[#6b5842]">Mon–Sun · 7:00am – 6:00pm</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <MapPin size={22} className="mt-1 text-[#a9744f]" />
            <div>
              <p className="font-semibold">Location</p>
              <p className="text-sm text-[#6b5842]">12 Maple Street, your city</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#e4d3bc] py-6 text-center text-xs text-[#8a6f52]">
        Concept demo built by Sameena — not a real business.
      </footer>
    </div>
  );
}
