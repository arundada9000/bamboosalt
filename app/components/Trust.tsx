import { Leaf, FlaskConical, Gem, Flame, MapPin } from "lucide-react";

const features = [
  { title: "100% Natural",         desc: "Zero additives or preservatives",     Icon: Leaf },
  { title: "Chemical-Free",        desc: "Pure, unprocessed mineral salt",       Icon: FlaskConical },
  { title: "High Mineral Content", desc: "70+ essential trace minerals",         Icon: Gem },
  { title: "Traditional Process",  desc: "Centuries-old roasting methods",       Icon: Flame },
  { title: "Made in Nepal 🇳🇵",    desc: "Proudly sourced & crafted locally",   Icon: MapPin },
];

export default function Trust() {
  return (
    <section className="relative z-10 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {features.map(({ title, desc, Icon }, idx) => (
            <div
              key={idx}
              className="group flex flex-col items-center text-center p-5 rounded-2xl border border-stone-200 hover:border-[#296B46]/40 hover:bg-[#edf7f1] transition-all duration-300 cursor-default hover:-translate-y-1 hover:shadow-md"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#edf7f1] group-hover:bg-[#296B46]/15 transition-colors mb-4">
                <Icon className="w-6 h-6 text-[#296B46]" />
              </div>
              <h3 className="font-bold text-stone-900 text-sm leading-tight mb-1">{title}</h3>
              <p className="text-xs text-stone-500">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
