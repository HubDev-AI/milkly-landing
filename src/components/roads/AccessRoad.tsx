import { APP_URL, SALES_EMAIL } from "@/lib/config";

const tiers = [
    {
        name: "Essential",
        price: "Free",
        features: ["1 stream", "100 subscribers", "News & Videos"],
    },
    {
        name: "Professional",
        price: "$19/mo",
        features: ["10 streams", "1,000 subscribers", "All categories"],
    },
    {
        name: "Mastery",
        price: "$49/mo",
        features: ["50 streams", "100,000 subscribers", "Priority support"],
    },
];

export const AccessRoad = () => {
    return (
        <>
            {/* Slide 1: Intro */}
            <section className="h-screen w-screen flex-shrink-0 flex items-center justify-center bg-[#050505] text-white overflow-hidden relative">
                 <span className="text-[12vw] font-serif italic text-white/10 absolute pointer-events-none block">
                    Exclusivity
                 </span>
                 <div className="z-10 text-center max-w-2xl px-6 md:px-0">
                     <p className="text-lg md:text-2xl font-light leading-relaxed">
                        Access to Milkly is limited to ensure quality of service and purity of the curation engine.
                        <br/>Choose your key carefully.
                     </p>
                 </div>
            </section>

            {/* Slide 2: The Keys */}
            <section className="h-screen w-screen flex-shrink-0 flex flex-col justify-center items-center bg-[#050505] text-white p-6 md:p-0">
                 <div className="relative z-10 flex gap-4 md:gap-24 items-center">
                     {tiers.map((tier, i) => (
                         <div key={tier.name} className="group relative cursor-pointer">
                             <div className="w-[28vw] md:w-[20vw] h-[40vh] md:h-[50vh] border border-white/20 bg-white/5 backdrop-blur-sm flex flex-col items-center justify-center px-2 md:px-0 transition-all duration-500 group-hover:bg-white group-hover:text-black group-hover:scale-105">
                                 <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] md:tracking-[0.5em] uppercase mb-4 md:mb-8 opacity-50 group-hover:opacity-100">
                                     Key 0{i+1}
                                 </span>
                                 <h3 className="text-sm md:text-4xl font-serif italic mb-2 md:mb-4 text-center">{tier.name}</h3>
                                 <span className="text-xs md:text-xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                                     {tier.price}
                                 </span>
                             </div>

                             <div className="absolute top-full mt-4 md:mt-8 left-0 w-full text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                 <ul className="text-xs md:text-sm space-y-1 md:space-y-2 text-white/50">
                                     {tier.features.map((feature) => (
                                         <li key={feature}>{feature}</li>
                                     ))}
                                 </ul>
                             </div>
                         </div>
                     ))}
                 </div>
            </section>

             {/* Slide 3: Mastery */}
             <section className="h-screen w-screen flex-shrink-0 flex items-center bg-[#050505] text-white p-6 md:p-24">
                 <div className="max-w-4xl mx-auto text-center">
                     <span className="text-orange-500 text-xs tracking-widest uppercase mb-6 block">Mastery</span>
                     <h3 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-8 md:mb-16 tracking-tight text-white drop-shadow-lg">Custom Solutions</h3>

                     {/* Paisana-style Single Line List */}
                     <div className="border-t border-b border-white/10 py-6 md:py-8 mb-8 md:mb-16">
                         <p className="text-base md:text-xl lg:text-2xl font-light text-white/60 leading-relaxed font-serif italic">
                             Single Sign On <span className="mx-4 opacity-20">•</span>
                             Audit Logs <span className="mx-4 opacity-20">•</span>
                             SLA Guarantee <span className="mx-4 opacity-20">•</span>
                             Custom Models <span className="mx-4 opacity-20">•</span>
                             Dedicated Support
                         </p>
                     </div>

                     {SALES_EMAIL && (
                         <a href={`mailto:${SALES_EMAIL}`}>
                             <button className="text-lg text-white border-b border-white pb-1 uppercase tracking-widest hover:text-orange-500 hover:border-orange-500 transition-colors">
                                Contact Sales
                             </button>
                         </a>
                     )}
                 </div>
             </section>

              {/* Slide 4: Finale */}
             <section className="h-screen w-screen flex-shrink-0 flex items-center justify-center bg-[#050505] text-white p-6 md:p-24">
                 <a href={APP_URL} className="text-center group cursor-pointer">
                     <p className="text-xs uppercase tracking-[0.5em] opacity-40 mb-8 group-hover:opacity-100 transition-opacity">
                         The Next Step
                     </p>
                     <span className="text-[6vw] font-serif italic leading-none hover:text-orange-500 transition-colors duration-500 block">
                        Get Started
                     </span>
                 </a>
             </section>
        </>
    );
};
