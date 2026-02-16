import { useRef, useState, useLayoutEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface HorizontalWrapperProps {
  children: React.ReactNode;
  className?: string;
  mode?: 'fixed' | 'dynamic';
}

export const HorizontalWrapper = ({ children, className, mode = 'fixed' }: HorizontalWrapperProps) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [scrollRange, setScrollRange] = useState(0);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  useLayoutEffect(() => {
    if (mode === 'fixed') return;

    const updateScrollRange = () => {
        if (contentRef.current) {
            setScrollRange(contentRef.current.scrollWidth - window.innerWidth);
        }
    };

    updateScrollRange();
    window.addEventListener("resize", updateScrollRange);
    return () => window.removeEventListener("resize", updateScrollRange);
  }, [children, mode]);

  const x = useTransform(
    scrollYProgress, 
    [0, 1], 
    mode === 'fixed' ? ["0%", "-75%"] : ["0px", `-${scrollRange}px`]
  );

  return (
    <div ref={targetRef} className={cn("relative h-[400vh] bg-background", className)}>
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div 
            ref={contentRef} 
            style={{ x }} 
            className={cn("flex", mode === 'dynamic' && "w-max")}
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
};
