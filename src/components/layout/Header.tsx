import { useState } from "react";
import { X, Menu } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";


interface HeaderProps {
    activeRoad: string;
    setActiveRoad: (road: string) => void;
    theme?: 'light' | 'dark';
}

export const Header = ({ activeRoad, setActiveRoad, theme = 'light' }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Styles based on theme
  const textColor = theme === 'light' ? 'text-black' : 'text-white';
  const buttonActive = theme === 'light' ? 'bg-black text-white' : 'bg-white text-black';
  const buttonInactive = theme === 'light' ? 'text-black/50 hover:text-black hover:bg-black/5' : 'text-white/50 hover:text-white hover:bg-white/10';

  const navItems = [
      { id: 'features', label: 'Features' },
      { id: 'work', label: 'Work' },
      { id: 'access', label: 'Access' }
  ];



  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-6",
        theme === 'light' ? "bg-white/0" : "bg-black/0" // Keep transparent, letting styling handle visibility
      )}
    >
      <div className="container px-4 mx-auto flex items-center justify-between">
        {/* Logo */}
        <button 
            onClick={() => {
                setActiveRoad('home');
                window.scrollTo(0, 0);
            }}
            className="flex flex-col items-start group"
        >
          <span className={cn("text-2xl font-black tracking-tighter uppercase font-['Bebas_Neue'] group-hover:opacity-80 transition-colors", textColor)}>
            Milkly
          </span>
          <span className={cn("text-[10px] font-mono tracking-[0.3em] opacity-40 group-hover:opacity-60 transition-colors", textColor)}>
            EST. 2026
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
           <button
                onClick={() => setActiveRoad('home')} 
                className={cn(
                    "px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all",
                    activeRoad === 'home' 
                        ? buttonActive 
                        : buttonInactive
                )}
           >
               [ Home ]
           </button>
           {navItems.map((item) => (
               <button
                    key={item.id}
                    onClick={() => setActiveRoad(item.id)}
                    className={cn(
                        "px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all",
                        activeRoad === item.id 
                            ? buttonActive 
                            : buttonInactive
                    )}
               >
                   [{item.label}]
               </button>
           ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={cn(
            "md:hidden p-2 rounded-full border",
            theme === 'light'
              ? 'text-black border-black/20 bg-white/60 backdrop-blur-sm'
              : 'text-white border-white/20 bg-black/60 backdrop-blur-sm'
          )}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className={cn(
              "md:hidden flex flex-col items-center gap-2 px-4 pb-6 pt-2",
              theme === 'light' ? 'bg-white/80 backdrop-blur-md' : 'bg-black/80 backdrop-blur-md'
            )}
          >
            {[{ id: 'home', label: 'Home' }, ...navItems].map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveRoad(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className={cn(
                  "w-full py-3 text-xs font-bold uppercase tracking-widest font-mono transition-all rounded-full",
                  activeRoad === item.id
                    ? buttonActive
                    : buttonInactive
                )}
              >
                [ {item.label} ]
              </button>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};
