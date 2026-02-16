import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { Rss, Youtube, Twitter } from "lucide-react";
import { useRef } from "react";
import { APP_URL } from "@/lib/config";

export const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section id="hero" ref={containerRef} className="relative min-h-screen flex flex-col pt-24 pb-0 overflow-hidden bg-background">
      {/* Background Grain */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none mix-blend-multiply" style={{ backgroundImage: 'url("/noise.svg")' }} />
      
      <div className="flex-1 flex flex-col justify-between max-w-[1920px] mx-auto w-full px-4 md:px-8 relative z-10">
        
        {/* Top Massive Heading Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-foreground/10 pb-6">
            <motion.h1 
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-[18vw] leading-[0.8] font-['Bebas_Neue'] text-foreground tracking-tighter uppercase"
            >
                Milkly
            </motion.h1>
            <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="md:text-right mb-2 md:mb-8"
            >
                <div className="inline-flex items-center gap-2 text-sm md:text-base font-medium font-mono text-muted-foreground">
                    <span>[ AI POWERED ]</span>
                    <span className="w-12 h-[1px] bg-foreground/20"></span>
                    <span>[ CURATION ]</span>
                </div>
            </motion.div>
        </div>

        {/* Middle Content Row */}
        <div className="flex-1 flex flex-col md:flex-row items-center justify-center py-12 md:py-24 relative">
             {/* Center Decorative Line (Vertical) */}
             <div className="absolute left-1/2 top-0 bottom-0 w-px bg-foreground/5 hidden md:block -ml-px" />
             
             <div className="max-w-xl text-center md:text-left relative z-10 bg-background/80 backdrop-blur-sm p-6 md:p-12 border border-foreground/5 md:border-none rounded-xl md:rounded-none">
                 <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                 >
                     <p className="text-lg md:text-xl lg:text-3xl font-serif text-foreground leading-snug">
                        Turn the <span className="italic text-accent">internet</span> into your daily <span className="font-bold">newsletter</span> using AI.
                     </p>
                     
                     <div className="mt-8 flex flex-col md:flex-row gap-4 items-center">
                        <Button variant="espresso" size="lg" className="rounded-none font-mono uppercase tracking-wide px-8 h-12" asChild>
                            <a href={APP_URL}>
                                [ Start Creating ]
                            </a>
                        </Button>
                        <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
                            No credit card required
                        </span>
                     </div>
                 </motion.div>
             </div>
        </div>

        {/* Bottom Visual Anchor */}
        <motion.div 
            style={{ y, opacity }}
            className="w-full relative mt-auto"
        >
            <div className="w-full h-[30vh] md:h-[50vh] bg-foreground/5 overflow-hidden relative border-t border-x border-foreground/10">
                {/* Mockup Container */}
                <img 
                    src="/assets/app-dashboard.png" 
                    alt="Milkly Dashboard Interface" 
                    className="w-full h-full object-cover object-top opacity-90 transition-transform duration-[2s] hover:scale-105"
                />
                
                {/* Overlay Details */}
                <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between items-end bg-gradient-to-t from-background via-background/50 to-transparent">
                    <div className="hidden md:block">
                        <span className="font-['Bebas_Neue'] text-6xl text-foreground/20">V 4.0</span>
                    </div>
                    
                    <div className="flex gap-4">
                        <div className="flex flex-col items-center gap-1">
                            <div className="w-10 h-10 border border-foreground/20 bg-background flex items-center justify-center rounded-full text-accent hover:bg-accent hover:text-white transition-colors">
                                <Rss size={16} />
                            </div>
                            <span className="text-[10px] font-mono uppercase opacity-50">News</span>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                            <div className="w-10 h-10 border border-foreground/20 bg-background flex items-center justify-center rounded-full text-accent hover:bg-accent hover:text-white transition-colors">
                                <Youtube size={16} />
                            </div>
                            <span className="text-[10px] font-mono uppercase opacity-50">Video</span>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                            <div className="w-10 h-10 border border-foreground/20 bg-background flex items-center justify-center rounded-full text-accent hover:bg-accent hover:text-white transition-colors">
                                <Twitter size={16} />
                            </div>
                            <span className="text-[10px] font-mono uppercase opacity-50">Social</span>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Scroll Indicator */}
            <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 flex flex-col items-end gap-2">
                <span className="text-[10px] uppercase tracking-widest font-mono opacity-50">Scroll to Explore</span>
                <div className="h-16 w-[1px] bg-foreground/30 overflow-hidden">
                     <div className="h-full w-full bg-foreground animate-slide-down" />
                </div>
            </div>
        </motion.div>
        
      </div>
    </section>
  );
};
