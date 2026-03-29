import Image from "next/image";
import { Wind, UtensilsCrossed, Shield, Sparkles, Gauge } from "lucide-react";

const benefits = [
  {
    title: "Detoxifies Body",
    desc: "Draws out heavy metals, impurities, and toxins naturally at the cellular level.",
    Icon: Wind,
  },
  {
    title: "Supports Digestion",
    desc: "Stimulates enzymes and gastric acid for better nutrient absorption and gut health.",
    Icon: UtensilsCrossed,
  },
  {
    title: "Boosts Immunity",
    desc: "Rich mineral profile fortifies your body's natural defenses against disease.",
    Icon: Shield,
  },
  {
    title: "Rich in Minerals",
    desc: "Contains 70+ essential trace minerals including potassium, calcium, and zinc.",
    Icon: Sparkles,
  },
  {
    title: "Maintains pH Balance",
    desc: "Highly alkaline nature neutralizes acidic waste, restoring your body's balance.",
    Icon: Gauge,
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#edf7f1] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-[#f0d49a]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center">
          {/* Image column */}
          <div className="relative order-2 lg:order-1">
            <div className="relative h-[500px] lg:h-[620px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/image.jpg"
                alt="Health benefits of bamboo salt"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#1b4a30]/40 to-transparent" />
            </div>

            {/* Floating stat */}
            <div className="absolute -bottom-6 -right-4 lg:-right-8 bg-white rounded-2xl shadow-xl p-5 border border-stone-100 max-w-[190px]">
              <div className="text-4xl font-extrabold text-[#296B46] leading-none">70+</div>
              <div className="text-sm text-stone-500 mt-1 font-medium">Essential minerals per serving</div>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-5 -left-4 lg:-left-8 bg-[#296B46] text-white rounded-2xl shadow-xl p-4 text-center min-w-[70px]">
              <div className="text-2xl font-extrabold leading-none">9x</div>
              <div className="text-xs font-semibold mt-0.5 opacity-90">Max Roasted</div>
            </div>
          </div>

          {/* Content column */}
          <div className="order-1 lg:order-2">
            <span className="inline-block text-xs font-bold tracking-widest text-[#296B46] uppercase mb-3 px-3 py-1 bg-[#edf7f1] rounded-full border border-[#c6ecd7]">
              Why Bamboo Salt?
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-stone-900 tracking-tight mt-4 mb-5 leading-tight">
              Modern Health from <br />
              <span className="text-[#296B46]">Ancient Wisdom</span>
            </h2>
            <p className="text-stone-500 text-lg mb-10 leading-relaxed">
              For centuries, bamboo salt has been used in traditional holistic medicine across Asia. We bring this powerful, mineral-rich superfood straight to your table.
            </p>

            <div className="space-y-4">
              {benefits.map(({ title, desc, Icon }, idx) => (
                <div
                  key={idx}
                  className="flex gap-4 items-start group p-4 rounded-2xl hover:bg-[#edf7f1] border border-transparent hover:border-[#c6ecd7] transition-all duration-300 cursor-default"
                >
                  <div className="flex-shrink-0 w-11 h-11 flex items-center justify-center rounded-xl bg-[#edf7f1] border border-[#c6ecd7] group-hover:bg-[#296B46]/15 transition-colors">
                    <Icon className="w-5 h-5 text-[#296B46]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-900 mb-1">{title}</h3>
                    <p className="text-stone-500 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
