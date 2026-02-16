import { useMemo, useCallback, useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { AnimatePresence, motion } from "framer-motion";
import { HorizontalWrapper } from "@/components/layout/HorizontalWrapper";
import { Hero } from "@/components/sections/Hero";
import { ManifestoSection } from "@/components/sections/ManifestoSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { FinaleSection } from "@/components/sections/FinaleSection";
import { FeaturesRoad } from "@/components/roads/FeaturesRoad";
import { WorkRoad } from "@/components/roads/WorkRoad";
import { AccessRoad } from "@/components/roads/AccessRoad";
import { Header } from "@/components/layout/Header";
import Lenis from "lenis";

const ROAD_META: Record<string, { title: string; description: string; path: string }> = {
  home: {
    title: "Milkly - Turn the Internet Into Your Daily Newsletter",
    description: "Milkly curates content from news, YouTube, and social media, then uses AI to help you create beautiful newsletters your audience will love.",
    path: "/",
  },
  features: {
    title: "Features - Milkly AI Newsletter Engine",
    description: "Discover Milkly's AI-powered curation engine, smart discovery, linked streams, custom templates, and content synthesis capabilities.",
    path: "/features",
  },
  work: {
    title: "Case Studies - Milkly Newsletter Success Stories",
    description: "See how brands like FinTech Weekly achieve 62% open rates and 45k subscribers using Milkly's AI newsletter platform.",
    path: "/work",
  },
  access: {
    title: "Access - Milkly Newsletter Plans",
    description: "Choose your Milkly plan: Free essential tier, Professional at $19/mo, or Mastery at $49/mo with custom solutions and dedicated support.",
    path: "/access",
  },
};

const PATH_TO_ROAD: Record<string, string> = {
  "/": "home",
  "/features": "features",
  "/work": "work",
  "/access": "access",
};

const ROAD_TO_PATH: Record<string, string> = {
  home: "/",
  features: "/features",
  work: "/work",
  access: "/access",
};

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const activeRoad = useMemo(
    () => PATH_TO_ROAD[location.pathname] ?? "home",
    [location.pathname]
  );

  const setActiveRoad = useCallback(
    (road: string) => {
      const path = ROAD_TO_PATH[road] ?? "/";
      navigate(path);
    },
    [navigate]
  );

  const [headerTheme, setHeaderTheme] = useState<'light' | 'dark'>('light');
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const lenis = new Lenis({
      duration: prefersReducedMotion ? 0 : 1.2,
      orientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
    });

    lenisRef.current = lenis;

    lenis.on('scroll', ({ scroll }: { scroll: number }) => {
        const vh = window.innerHeight;

        if (activeRoad === 'home') {
            if (scroll > vh * 0.9 && scroll < vh * 2.8) {
                setHeaderTheme('dark');
            } else {
                setHeaderTheme('light');
            }
        } else if (activeRoad === 'features') {
             if (scroll > vh * 0.9 && scroll < vh * 1.9) {
                 setHeaderTheme('dark');
             } else {
                 setHeaderTheme('light');
             }
        } else if (activeRoad === 'work') {
            setHeaderTheme('dark');
        } else if (activeRoad === 'access') {
             setHeaderTheme('dark');
        }
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [activeRoad]);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (lenisRef.current) {
        lenisRef.current.scrollTo(0, { immediate: true });
    }
  }, [activeRoad]);

  const meta = ROAD_META[activeRoad] ?? ROAD_META.home;

  return (
    <div className="bg-background relative selection:bg-orange-500/30">
        <Helmet>
          <title>{meta.title}</title>
          <meta name="description" content={meta.description} />
          <link rel="canonical" href={`https://milkly.xyz${meta.path}`} />
          <meta property="og:title" content={meta.title} />
          <meta property="og:description" content={meta.description} />
          <meta property="og:url" content={`https://milkly.xyz${meta.path}`} />
          <meta name="twitter:title" content={meta.title} />
          <meta name="twitter:description" content={meta.description} />
        </Helmet>

        <Header activeRoad={activeRoad} setActiveRoad={setActiveRoad} theme={headerTheme} />

        <AnimatePresence mode="wait">
            {activeRoad === "home" && (
                <motion.div
                    key="home"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <HorizontalWrapper>
                        <div className="w-screen h-screen flex-shrink-0">
                            <Hero />
                        </div>
                        <ManifestoSection />
                        <GallerySection />
                        <FinaleSection />
                    </HorizontalWrapper>
                </motion.div>
            )}

            {activeRoad === "features" && (
                 <motion.div
                    key="features"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                >
                    <HorizontalWrapper>
                        <FeaturesRoad />
                    </HorizontalWrapper>
                </motion.div>
            )}

            {activeRoad === "work" && (
                 <motion.div
                    key="work"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                >
                    <HorizontalWrapper mode="dynamic">
                        <WorkRoad />
                    </HorizontalWrapper>
                </motion.div>
            )}

            {activeRoad === "access" && (
                 <motion.div
                    key="access"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                >
                    <HorizontalWrapper>
                         <AccessRoad />
                    </HorizontalWrapper>
                </motion.div>
            )}
        </AnimatePresence>
    </div>
  );
}

export default App;
