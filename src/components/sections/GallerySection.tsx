import { useRef } from "react";
import { FocusModeVisual, PrecisionControlVisual } from "@/components/ui/precision-visuals";



export const GallerySection = () => {
    const ref = useRef<HTMLDivElement>(null);

    return (
        <section ref={ref} className="h-screen w-screen flex-shrink-0 flex items-center bg-[#080808] text-white overflow-hidden relative p-6 md:p-12 lg:p-16">
             <div className="flex gap-6 md:gap-12 items-center w-full max-w-full">
                 <div className="space-y-4 md:space-y-6 w-[200px] md:w-[280px] lg:w-[320px] flex-shrink-0">
                     <span className="text-xs font-bold tracking-[0.4em] uppercase text-blue-400">
                        Chapter 02 — The Tools
                     </span>
                     <h3 className="text-2xl md:text-4xl lg:text-5xl font-serif">
                        Craft with <br/>
                        <span className="italic text-white/50">precision.</span>
                     </h3>
                     <p className="text-white/60 text-sm md:text-base font-light">
                        Explore an interface that disappears when you don't need it and appears exactly when you do.
                     </p>
                 </div>

                 {/* Horizontal Strip of "Images" - hidden on mobile */}
                 <div className="hidden md:flex gap-4 md:gap-8 flex-1 min-w-0">
                     <div className="flex-1 min-w-0 aspect-[16/10] bg-[#0a0a0a] border border-white/10 rounded-lg overflow-hidden shadow-2xl relative group">
                        <FocusModeVisual />
                        <div className="absolute bottom-3 left-3 md:bottom-6 md:left-6 text-[10px] md:text-xs font-mono opacity-50 bg-black/50 backdrop-blur px-2 py-1 rounded border border-white/10">
                            MODE::FOCUS_IMMERSE
                        </div>
                     </div>

                     <div className="flex-1 min-w-0 aspect-[16/10] bg-[#0a0a0a] border border-white/10 rounded-lg overflow-hidden shadow-2xl relative group">
                        <PrecisionControlVisual />
                        <div className="absolute bottom-3 left-3 md:bottom-6 md:left-6 text-[10px] md:text-xs font-mono opacity-50 bg-black/50 backdrop-blur px-2 py-1 rounded border border-white/10">
                            MODE::FINE_TUNE
                        </div>
                     </div>
                 </div>
             </div>
        </section>
    );
};
