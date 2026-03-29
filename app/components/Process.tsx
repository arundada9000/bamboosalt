import Image from "next/image";
import { PackagePlus, Cylinder, Flame, Sparkles } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Packed in Bamboo",
    desc: "Natural sea salt is carefully packed into large, fresh bamboo cylinders chosen for their rich mineral content.",
    img: "/images/image1.jpeg",
    Icon: PackagePlus,
  },
  {
    num: "02",
    title: "Sealed with Clay",
    desc: "Both ends are sealed using mineral-rich mountain clay, creating a pressurized roasting chamber.",
    img: "/images/image4.jpg",
    Icon: Cylinder,
  },
  {
    num: "03",
    title: "Roasted in Pine Fire",
    desc: "Burned in pine-wood fires at 800–1,500°C in repeated cycles to deeply absorb bamboo minerals.",
    img: "/images/image2.jpeg",
    Icon: Flame,
  },
  {
    num: "04",
    title: "Extracted & Purified",
    desc: "The resulting salt is extracted, toxin-free, highly alkaline, and packed with 70+ trace minerals.",
    img: "/images/image3.jpeg",
    Icon: Sparkles,
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 lg:py-32 bg-[#faf9f7] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-60">
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-[#edf7f1] rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-[#f0d49a]/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-xs font-bold tracking-widest text-[#296B46] uppercase mb-3 px-3 py-1 bg-[#edf7f1] rounded-full border border-[#c6ecd7]">
            Our Ancient Method
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-stone-900 tracking-tight mt-4 mb-4">
            The Traditional Journey
          </h2>
          <p className="text-stone-500 text-lg leading-relaxed">
            A meticulous, time-honored process that transforms ordinary salt into a medicinal powerhouse.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {steps.map(({ num, title, desc, img, Icon }, idx) => (
            <div key={idx} className="group relative flex flex-col">
              <div className="bg-white rounded-3xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 flex flex-col flex-1">
                {/* Image */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={img}
                    alt={title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/50 to-transparent" />

                  {/* Step badge */}
                  <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-[#296B46] text-white flex items-center justify-center font-extrabold text-sm shadow-lg">
                    {num}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="w-10 h-10 rounded-xl bg-[#edf7f1] border border-[#c6ecd7] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-[#296B46]" />
                  </div>
                  <h3 className="font-extrabold text-stone-900 text-lg mb-2">{title}</h3>
                  <p className="text-stone-500 text-sm leading-relaxed flex-1">{desc}</p>
                </div>
              </div>

              {/* Connector arrow */}
              {idx < steps.length - 1 && (
                <div className="hidden xl:flex absolute top-24 -right-3 z-10 w-6 h-6 items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-stone-300">
                    <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
