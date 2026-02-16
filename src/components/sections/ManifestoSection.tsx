import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export const ManifestoSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.5 });

    return (
        <section ref={ref} className="h-screen w-screen flex-shrink-0 flex items-center justify-center p-8 md:p-24 bg-[#050505] text-white overflow-hidden relative">
            <div className="max-w-5xl relative z-10">
                <motion.span 
                    className="text-xs md:text-sm font-bold tracking-[0.5em] uppercase text-white/40 block mb-12"
                    initial={{ opacity: 0, x: -50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    Chapter 01 — The Awakening
                </motion.span>
                
                <h2 className="text-4xl md:text-6xl lg:text-[8vw] leading-[0.85] font-serif font-medium text-[#Eaeaea]">
                    <motion.div
                         initial={{ y: 100, opacity: 0 }}
                         animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                         transition={{ duration: 1, delay: 0.4 }}
                    >
                        Step into a world
                    </motion.div>
                    <motion.div
                         className="italic text-white"
                         initial={{ y: 100, opacity: 0 }}
                         animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                         transition={{ duration: 1, delay: 0.6 }}
                    >
                        without noise.
                    </motion.div>
                </h2>

                <motion.p
                    className="max-w-xl text-base md:text-lg lg:text-2xl text-white/60 font-light leading-relaxed mt-8 md:mt-16"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                >
                    Where your content stream is curated not by algorithms designed to distract, but by intelligence designed to empower. Welcome to the new standard of consumption.
                </motion.p>
            </div>

             {/* Abstract Background Element */}
            <div className="absolute -right-[10%] -bottom-[20%] w-[60vw] h-[60vw] rounded-full bg-white/[0.03] blur-3xl pointer-events-none" />
        </section>
    );
};
