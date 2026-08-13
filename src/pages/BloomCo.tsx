import { Flower2, Heart, Leaf } from "lucide-react";
import DemoBadge from "./DemoBadge";

const products = [
  { name: "Dried Wildflower Bundle", price: "$28" },
  { name: "Ceramic Bud Vase", price: "$34" },
  { name: "Eucalyptus Wreath", price: "$42" },
  { name: "Lavender Sachet Set", price: "$18" },
];

export default function BloomCo() {
  return (
    <div className="min-h-screen bg-[#fbf6f2] font-[system-ui] text-[#4a3b36]">
      <DemoBadge />

      <header className="flex items-center justify-between px-6 py-6">
        <span className="font-serif text-xl font-bold">Bloom &amp; Co.</span>
        <a
          href="#products"
          className="rounded-full border border-[#c98a7a] px-5 py-2 text-sm font-semibold text-[#c98a7a]"
        >
          Shop the Collection
        </a>
      </header>

      <section className="mx-auto max-w-3xl px-6 py-16 text-center">
        <Flower2 size={34} className="mx-auto text-[#c98a7a]" />
        <h1 className="mt-4 font-serif text-4xl font-bold sm:text-5xl">
          Handmade goods, made with heart.
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-[#8a746c]">
          Small-batch florals, ceramics, and home goods — thoughtfully made
          and shipped straight to your door.
        </p>
      </section>

      <section id="products" className="border-t border-[#eeded6] px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-serif text-2xl font-bold">Featured Products</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((p) => (
              <div
                key={p.name}
                className="rounded-2xl border border-[#eeded6] bg-white p-5 text-center shadow-sm"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#f6e4dd] text-[#c98a7a]">
                  <Leaf size={22} />
                </div>
                <p className="mt-3 text-sm font-semibold">{p.name}</p>
                <p className="mt-1 text-sm text-[#c98a7a]">{p.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#eeded6] px-6 py-16 text-center">
        <Heart size={26} className="mx-auto text-[#c98a7a]" />
        <p className="mx-auto mt-4 max-w-md text-sm text-[#8a746c]">
          Every piece is made in small batches by a two-person studio — thank
          you for supporting handmade.
        </p>
      </section>

      <footer className="border-t border-[#eeded6] py-6 text-center text-xs text-[#8a746c]">
        Concept demo built by Sameena — not a real business.
      </footer>
    </div>
  );
}
