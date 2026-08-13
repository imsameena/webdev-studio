import { Dumbbell, Users, Flame } from "lucide-react";
import DemoBadge from "./DemoBadge";

const classes = [
  { name: "HIIT Burn", time: "6:00 AM · 45 min" },
  { name: "Strength Foundations", time: "9:00 AM · 60 min" },
  { name: "Yoga Flow", time: "5:30 PM · 50 min" },
  { name: "Boxing Circuit", time: "7:00 PM · 45 min" },
];

const plans = [
  { name: "Drop-in", price: "$15", period: "/ class" },
  { name: "Monthly", price: "$79", period: "/ month" },
  { name: "Annual", price: "$699", period: "/ year" },
];

export default function UrbanFitnessStudio() {
  return (
    <div className="min-h-screen bg-[#111214] font-[system-ui] text-white">
      <DemoBadge />

      <header className="flex items-center justify-between border-b border-white/10 px-6 py-6">
        <span className="text-xl font-black uppercase tracking-wider">
          Urban<span className="text-[#ff5b2e]">Fitness</span>
        </span>
        <a
          href="#pricing"
          className="rounded-full bg-[#ff5b2e] px-5 py-2 text-sm font-bold uppercase tracking-wide"
        >
          Join Now
        </a>
      </header>

      <section className="mx-auto max-w-3xl px-6 py-20 text-center">
        <Dumbbell size={36} className="mx-auto text-[#ff5b2e]" />
        <h1 className="mt-4 text-4xl font-black uppercase leading-tight sm:text-6xl">
          Train hard. <span className="text-[#ff5b2e]">Live stronger.</span>
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-white/60">
          A full-service studio with expert trainers, group classes, and
          flexible memberships — built for every fitness level.
        </p>
      </section>

      <section className="border-t border-white/10 px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="flex items-center justify-center gap-2 text-center text-2xl font-black uppercase">
            <Flame size={20} className="text-[#ff5b2e]" /> Today's Classes
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {classes.map((c) => (
              <div
                key={c.name}
                className="flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.03] px-5 py-4"
              >
                <span className="font-semibold">{c.name}</span>
                <span className="text-sm text-white/50">{c.time}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="border-t border-white/10 px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="flex items-center justify-center gap-2 text-center text-2xl font-black uppercase">
            <Users size={20} className="text-[#ff5b2e]" /> Membership Plans
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className="rounded-xl border border-white/10 bg-white/[0.03] p-6 text-center"
              >
                <p className="text-sm uppercase tracking-wider text-white/50">{plan.name}</p>
                <p className="mt-2 text-3xl font-black">
                  {plan.price}
                  <span className="text-sm font-normal text-white/50">{plan.period}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-6 text-center text-xs text-white/40">
        Concept demo built by Sameena — not a real business.
      </footer>
    </div>
  );
}
