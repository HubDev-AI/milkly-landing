import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from 'embla-carousel-react';

const projects = [
    { 
        cat: "Editorial", 
        title: "Vogue Adria", 
        growth: "Retention: +45%", 
        img: "/assets/milkly_fashion_studio_2.png" 
    },
    { 
        cat: "Tech", 
        title: "TechCrunch", 
        growth: "Scale: +120%", 
        img: "/assets/milkly_fashion_studio_1.png" 
    },
    { 
        cat: "Culture", 
        title: "Monocle", 
        growth: "Engagement: 2.5x", 
        img: "/assets/milkly_fashion_studio_3.png" 
    },
    { 
        cat: "Fashion", 
        title: "Hypebeast", 
        growth: "Clicks: +80%", 
        img: "/assets/milkly_fashion_studio_4.png" 
    }
];

const MobileCarousel = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
    const [selectedIndex, setSelectedIndex] = useState(0);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on('select', onSelect);
        return () => { emblaApi.off('select', onSelect); };
    }, [emblaApi, onSelect]);

    return (
        <div className="w-full h-full flex flex-col items-center justify-center">
            <div ref={emblaRef} className="overflow-hidden w-full">
                <div className="flex">
                    {projects.map((project, i) => (
                        <div key={i} className="flex-[0_0_100%] min-w-0 flex items-center justify-center px-6">
                            <div className="group relative w-full max-w-[280px]">
                                <div className="w-full aspect-[4/5] bg-[#050505] border border-white/20 shadow-2xl overflow-hidden">
                                    <img
                                        src={project.img}
                                        alt={`${project.title} - ${project.cat} newsletter showcase`}
                                        className="w-full h-full object-cover opacity-90"
                                    />
                                </div>
                                <div className="absolute top-4 left-4">
                                    <span className="font-serif italic text-xl text-white drop-shadow-lg">
                                        {project.cat}
                                    </span>
                                </div>
                                <div className="mt-4 text-center">
                                    <h4 className="text-xl font-bold text-white">{project.title}</h4>
                                    <span className="text-xs text-white uppercase tracking-widest font-bold opacity-70">{project.growth}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* Carousel indicators */}
            <div className="flex gap-2 mt-6">
                {projects.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => emblaApi?.scrollTo(i)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            i === selectedIndex ? 'bg-orange-500 w-6' : 'bg-white/30'
                        }`}
                        aria-label={`Go to slide ${i + 1}`}
                    />
                ))}
            </div>
            <p className="text-white/40 text-xs mt-3 font-mono">Swipe to explore</p>
        </div>
    );
};

const DesktopGrid = () => (
    <div className="grid grid-cols-2 gap-4 h-[80vh] max-h-[800px] w-auto mx-auto">
        {projects.map((project, i) => (
            <div key={i} className="group relative h-[calc(40vh-1rem)] max-h-[390px]">
                <div className="w-full h-full bg-[#050505] border border-white/20 shadow-2xl overflow-hidden transition-all duration-500 hover:scale-[1.02]">
                    <img
                        src={project.img}
                        alt={`${project.title} - ${project.cat} newsletter showcase`}
                        className="w-full h-full object-cover opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-1000"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                </div>
                <div className="absolute top-3 left-3">
                    <span className="font-serif italic text-xl text-white drop-shadow-lg">
                        {project.cat}
                    </span>
                </div>
                <div className="absolute bottom-3 left-3">
                    <h4 className="text-sm font-bold text-white drop-shadow-md">{project.title}</h4>
                    <span className="text-[10px] text-white uppercase tracking-widest font-bold opacity-70">{project.growth}</span>
                </div>
            </div>
        ))}
    </div>
);

export const WorkRoad = () => {
    return (
        <>
            {/* Slide 1: Intro */}
            <section className="h-screen w-screen flex-shrink-0 flex items-center bg-[#111] text-white overflow-hidden relative p-6 md:p-24">
                 <div className="min-w-[280px] md:min-w-[400px]">
                     <span className="text-xs font-bold tracking-[0.4em] uppercase text-orange-500 mb-8 block">
                        The Archive
                     </span>
                     <h2 className="text-4xl md:text-7xl font-serif text-white">
                        Selected <br/> <span className="italic text-white">Works</span>
                     </h2>
                 </div>
            </section>

             {/* Slide 2: Featured Case Study */}
            <section className="h-screen w-screen flex-shrink-0 flex flex-col md:flex-row items-center bg-[#111] text-white p-0 relative">
                 <div className="w-full md:w-[60%] h-[50vh] md:h-full bg-center bg-cover grayscale hover:grayscale-0 transition-all duration-700" style={{ backgroundImage: 'url("/assets/milkly_fashion_studio_1.png")' }}>
                    <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-transparent via-[#111]/50 to-[#111]" />
                 </div>
                 <div className="w-full md:w-[40%] h-[50vh] md:h-full p-6 md:p-24 relative z-10 flex flex-col justify-center">
                    <span className="text-xs font-mono opacity-100 font-bold mb-4 md:mb-8 block tracking-widest uppercase text-white">Featured Case Study</span>
                    <h3 className="text-3xl md:text-6xl font-bold mb-4 md:mb-8 leading-tight text-white drop-shadow-lg">FinTech <br/> Weekly</h3>
                    <p className="text-sm md:text-xl opacity-80 leading-relaxed mb-6 md:mb-12 font-light text-white">
                        How a leading financial institution automated their daily market briefing, saving 20 hours/week while increasing open rates by 15%.
                    </p>
                    <div className="grid grid-cols-2 gap-4 md:gap-8 border-t border-white/20 pt-4 md:pt-8">
                        <div>
                            <span className="block text-2xl md:text-4xl font-black text-white">45k</span>
                            <span className="text-xs uppercase opacity-60 tracking-widest font-bold">Subscribers</span>
                        </div>
                        <div>
                            <span className="block text-2xl md:text-4xl font-black text-white">62%</span>
                            <span className="text-xs uppercase opacity-60 tracking-widest font-bold">Open Rate</span>
                        </div>
                    </div>
                 </div>
            </section>

            {/* Slide 3: Gallery - Grid on Desktop, Carousel on Mobile */}
            <section className="h-screen w-screen flex-shrink-0 flex items-center justify-center bg-[#111] text-white p-6 md:p-12 overflow-hidden">
                 {/* Mobile Carousel */}
                 <div className="md:hidden w-full h-full">
                     <MobileCarousel />
                 </div>
                 {/* Desktop Grid */}
                 <div className="hidden md:flex w-full h-full items-center justify-center">
                     <DesktopGrid />
                 </div>
            </section>

             {/* Slide 4: Testimonials */}
             <section className="h-screen w-screen flex-shrink-0 flex items-center justify-center bg-[#111] text-white p-6 md:p-24">
                <div className="max-w-4xl text-center">
                    <span className="text-4xl md:text-6xl font-serif italic opacity-30">"</span>
                    <blockquote className="text-2xl md:text-4xl lg:text-6xl font-medium leading-snug text-white">
                        Milkly transformed our content strategy. <br/>
                        <span className="font-serif italic text-orange-400">It's not just a tool, it's an editor.</span>
                    </blockquote>
                    <div className="mt-12 flex justify-center gap-4 items-center opacity-60">
                        <div className="w-12 h-12 bg-white/10 rounded-full" />
                        <div className="text-left">
                            <span className="block font-bold text-sm uppercase">Sarah J.</span>
                             <span className="block text-xs font-mono">CMO, TechFlow</span>
                        </div>
                    </div>
                </div>
             </section>
        </>
    );
};
