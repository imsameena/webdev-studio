import { ArrowLeft } from "lucide-react";

export default function DemoBadge() {
  return (
    <div className="flex items-center justify-center gap-1.5 bg-black py-2 text-xs font-semibold text-white">
      <a href="#/" className="inline-flex items-center gap-1.5 hover:opacity-80">
        <ArrowLeft size={14} /> Demo project — back to Sameena's site
      </a>
    </div>
  );
}
