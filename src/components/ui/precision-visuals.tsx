import { motion } from "framer-motion";

export const FocusModeVisual = () => {
    return (
        <div className="w-full h-full bg-[#050505] flex items-center justify-center relative overflow-hidden font-mono text-xs perspective-1000">
            {/* The Prism Scan Effect */}
            <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent z-20 pointer-events-none"
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
            />

            {/* Background Chaos -> Grid Transformation */}
            <div className="absolute inset-0 grid grid-cols-6 grid-rows-4 gap-4 p-8 opacity-20 transition-all duration-1000">
                {Array.from({ length: 24 }).map((_, i) => (
                    <motion.div
                        key={i}
                        className="bg-white/10 rounded-sm"
                        animate={{ 
                            scale: [0.8, 1, 0.8],
                            opacity: [0.2, 0.5, 0.2],
                            filter: ["blur(4px)", "blur(0px)", "blur(4px)"]
                        }}
                        transition={{ 
                            duration: 4, 
                            repeat: Infinity, 
                            delay: i * 0.1, 
                            times: [0, 0.5, 1] 
                        }}
                    />
                ))}
            </div>

            {/* Central Focal Point */}
            <motion.div 
                className="relative z-10 w-[220px] md:w-[280px] bg-[#0a0a0a] border border-white/10 rounded-xl p-4 md:p-6 shadow-2xl backdrop-blur-xl"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
            >
                {/* Header */}
                <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
                     <div className="flex gap-2">
                        <div className="w-2 h-2 rounded-full bg-red-500/50 animate-pulse" />
                        <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                        <div className="w-2 h-2 rounded-full bg-green-500/50" />
                     </div>
                     <div className="text-[10px] text-white/30 uppercase tracking-widest">Focus Level: Deep</div>
                </div>

                {/* Content Stream */}
                <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                        <motion.div 
                            key={i}
                            className="bg-white/5 rounded p-3 border border-white/5 relative overflow-hidden group"
                            whileHover={{ scale: 1.02, borderColor: "rgba(255,255,255,0.2)" }}
                        >
                            <div className="w-1/3 h-1.5 bg-white/20 rounded mb-2" />
                            <div className="w-3/4 h-1.5 bg-white/10 rounded" />
                            
                            {/* Scanning Highlight per item */}
                            <motion.div 
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                                animate={{ x: ["-100%", "200%"] }}
                                transition={{ duration: 2, repeat: Infinity, delay: i * 0.5, ease: "easeInOut" }}
                            />
                        </motion.div>
                    ))}
                </div>

                {/* Simulated "Disappearing" Sidebar Influence */}
                <motion.div
                    className="absolute -right-12 top-0 bottom-0 w-8 border-l border-white/5 flex flex-col gap-2 py-4 items-center opacity-0"
                    animate={{ opacity: [0, 0.5, 0], x: [10, 0, 10] }}
                    transition={{ duration: 5, repeat: Infinity }}
                >
                     <div className="w-4 h-4 rounded-sm bg-white/10" />
                     <div className="w-4 h-4 rounded-sm bg-white/10" />
                     <div className="w-4 h-4 rounded-sm bg-white/10" />
                </motion.div>
            </motion.div>
        </div>
    );
};

export const PrecisionControlVisual = () => {
    return (
        <div className="w-full h-full bg-[#050505] flex items-center justify-center relative overflow-hidden font-mono perspective-1000">
             
             {/* 3D Gyroscope Rings */}
             <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
                 <motion.div 
                    className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-full border border-white/20 border-dashed"
                    animate={{ rotate: 360, rotateX: 20 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                 />
                 <motion.div 
                    className="absolute w-[160px] h-[160px] md:w-[240px] md:h-[240px] rounded-full border border-white/30"
                    animate={{ rotate: -360, rotateY: 30 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                 />
             </div>

             {/* Center HUD */}
             <div className="relative z-10 flex gap-4 md:gap-8 items-end">
                 {[1, 2, 3].map((i) => (
                     <div key={i} className="flex flex-col gap-4 items-center group">
                         {/* Value Readout */}
                         <motion.div 
                            className="font-black text-xl text-white mix-blend-difference tabular-nums"
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity }}
                         >
                            8{i}.{i}
                         </motion.div>

                         {/* Active Slider Column */}
                         <div className="w-12 h-48 bg-[#0a0a0a] rounded-full relative overflow-hidden border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                             {/* Fill Bar */}
                             <motion.div 
                                className="absolute bottom-0 w-full bg-white transition-all will-change-transform"
                                animate={{ 
                                    height: [`${30 + i * 10}%`, `${60 + i * 10}%`, `${30 + i * 10}%`],
                                    boxShadow: ["0 0 0px rgba(255,255,255,0)", "0 0 20px rgba(255,255,255,0.5)", "0 0 0px rgba(255,255,255,0)"]
                                }}
                                transition={{ duration: 3 + i, repeat: Infinity, ease: "easeInOut" }}
                             />
                             
                             {/* Ticks */}
                             <div className="absolute inset-0 flex flex-col justify-between py-2 items-center opacity-30">
                                 {Array.from({ length: 10 }).map((_, j) => (
                                     <div key={j} className="w-4 h-[1px] bg-black" />
                                 ))}
                             </div>
                         </div>

                         {/* Base Indicator */}
                         <motion.div 
                            className="w-1.5 h-1.5 bg-orange-500 rounded-full shadow-[0_0_10px_orange]"
                            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                         />
                     </div>
                 ))}
             </div>

             {/* Crosshair Overlay */}
             <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-10">
                 <div className="w-[250px] md:w-[400px] h-[1px] bg-white absolute" />
                 <div className="h-[150px] md:h-[200px] w-[1px] bg-white absolute" />
             </div>
        </div>
    );
};
