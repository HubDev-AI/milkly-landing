

const features = ["CURATION", "SYNTHESIS", "DISTRIBUTION", "ANALYTICS"];

export const FeaturesRoad = () => {
    return (
        <>
            {/* Slide 1: Kinetic Intro */}
            <section className="h-screen w-screen flex-shrink-0 flex items-center bg-white text-black overflow-hidden relative p-6 md:p-24">
                 <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center pointer-events-none opacity-5">
                     {features.map((f, i) => (
                         <div key={i} className="text-[15vw] font-black leading-none whitespace-nowrap">
                             {f} {f} {f} {f}
                         </div>
                     ))}
                 </div>

                 <div className="flex gap-10 md:gap-40 items-center z-10 pl-4 md:pl-20">
                     <div className="space-y-4 min-w-[280px] md:min-w-[500px]">
                         <h2 className="text-5xl md:text-8xl font-black tracking-tighter">
                            THE <br/> ENGINE
                         </h2>
                         <p className="text-lg md:text-2xl font-medium max-w-md">
                            Under the hood, Milkly uses a proprietary synthesis model to compress the noise of the internet into pure signal.
                         </p>
                     </div>
                 </div>
            </section>

            {/* Slide 2: Process Visualization (Blur to Focus) */}
            <section className="h-screen w-screen flex-shrink-0 flex items-center justify-center bg-black text-white p-6 md:p-24">
                <div className="flex gap-3 md:gap-24 items-center">
                    <div className="text-right space-y-2">
                        <span className="text-[10px] md:text-xs font-bold tracking-widest text-orange-500 uppercase">Input</span>
                        <p className="text-xl md:text-5xl font-serif italic text-white/50 blur-sm hover:blur-none transition-all duration-700 cursor-default">
                            Unstructured
                        </p>
                    </div>

                    <div className="h-12 md:h-32 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent flex-shrink-0" />

                    <div className="w-[100px] md:w-[400px] text-center space-y-4 md:space-y-6 flex-shrink-0">
                        <div className="w-10 h-10 md:w-16 md:h-16 border border-white/20 rounded-full mx-auto animate-pulse flex items-center justify-center">
                            <div className="w-2 h-2 bg-white rounded-full" />
                        </div>
                        <p className="font-mono text-[10px] md:text-xs opacity-50 tracking-widest uppercase">
                            Re-Synthesis Engine
                        </p>
                    </div>

                    <div className="h-12 md:h-32 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent flex-shrink-0" />

                    <div className="text-left space-y-2">
                        <span className="text-[10px] md:text-xs font-bold tracking-widest text-orange-500 uppercase">Output</span>
                        <p className="text-xl md:text-5xl font-bold text-white tracking-tighter">
                            Clarity
                        </p>
                    </div>
                </div>
            </section>

            {/* Slide 3: Ecosystem (Feature Marquee) */}
            <section className="h-screen w-screen flex-shrink-0 flex flex-col justify-center bg-white text-black p-6 md:p-24">
                 <div className="mb-12 md:mb-24">
                     <h3 className="text-4xl md:text-7xl font-black mb-4 md:mb-6 uppercase tracking-tighter">Core<br/>Capabilities</h3>
                     <p className="text-lg md:text-xl max-w-md opacity-60 font-serif italic">
                         Everything you need to master your content diet.
                     </p>
                 </div>

                 {/* Feature Marquee */}
                 <div className="w-full overflow-hidden border-y border-black/10 py-6 md:py-12">
                     <div className="flex flex-wrap justify-center gap-2 md:gap-0 md:flex-nowrap md:justify-between items-center opacity-40 hover:opacity-100 transition-all duration-500">
                         {["Smart Discovery", "AI Summaries", "Linked Streams", "Custom Templates", "News", "Video", "Social"].map(feature => (
                             <span key={feature} className="text-xs md:text-2xl font-black uppercase tracking-widest mx-2 md:mx-8 whitespace-nowrap">
                                 {feature}
                             </span>
                         ))}
                     </div>
                 </div>
            </section>

            {/* Slide 4: Philosophy (The Editorial Shift) */}
            <section className="h-screen w-screen flex-shrink-0 flex items-center justify-center bg-white text-black p-6 md:p-24 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'url("/noise.svg")' }} />

                <div className="max-w-5xl text-center relative z-10 space-y-8 md:space-y-12">
                    <p className="text-sm md:text-xl font-mono uppercase tracking-widest opacity-50">
                        The Milkly Standard
                    </p>
                    <blockquote className="text-3xl md:text-6xl lg:text-8xl font-serif leading-[0.9]">
                        "We don't just aggregate.<br/>
                        <span className="italic text-orange-500">We curate the noise away.</span>"
                    </blockquote>
                    <div className="w-px h-16 md:h-24 bg-black/10 mx-auto" />
                    <p className="text-base md:text-lg lg:text-xl max-w-2xl mx-auto opacity-70 font-medium leading-relaxed">
                        In an age of infinite content, the ultimate luxury is suppression.
                        Milkly's AI doesn't just find more—it finds <em>better</em>.
                    </p>
                </div>
            </section>
        </>
    );
};
