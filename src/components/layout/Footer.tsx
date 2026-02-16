import { TWITTER_URL, INSTAGRAM_URL, LINKEDIN_URL, CONTACT_EMAIL } from "@/lib/config";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="border-t border-foreground/10 bg-background relative z-10 overflow-hidden">
      <div className="max-w-[1920px] mx-auto px-4 md:px-8 py-12 md:py-20 flex flex-col justify-between min-h-[50vh]">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            {CONTACT_EMAIL && (
            <div className="flex flex-col gap-4">
                 <div className="inline-flex items-center gap-2 text-sm font-mono text-muted-foreground uppercase tracking-widest">
                    <span>[ CONTACT ]</span>
                 </div>
                 <a href={`mailto:${CONTACT_EMAIL}`} className="text-2xl md:text-4xl font-serif italic hover:text-accent transition-colors">
                    {CONTACT_EMAIL}
                 </a>
            </div>
            )}

            <div className="flex gap-12 md:gap-24 text-sm font-mono uppercase tracking-wider text-muted-foreground">
                <div className="flex flex-col gap-4">
                    <span className="text-foreground">[ SOCIALS ]</span>
                    {TWITTER_URL && <a href={TWITTER_URL} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Twitter</a>}
                    {INSTAGRAM_URL && <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Instagram</a>}
                    {LINKEDIN_URL && <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">LinkedIn</a>}
                </div>
                <div className="flex flex-col gap-4">
                    <span className="text-foreground">[ LEGAL ]</span>
                    <Link to="/privacy" className="hover:text-accent transition-colors">Privacy</Link>
                    <Link to="/terms" className="hover:text-accent transition-colors">Terms</Link>
                </div>
            </div>
        </div>

        {/* Bottom Section - Massive Text */}
        <div className="mt-20">
             <div className="w-full h-px bg-foreground/10 mb-8" />
             <div className="flex flex-col md:flex-row justify-between items-end">
                <p className="font-mono text-xs text-muted-foreground mb-4 md:mb-0">
                    © 2026 MILKLY INC. ALL RIGHTS RESERVED.
                </p>
                <span className="text-[15vw] leading-[0.75] font-['Bebas_Neue'] text-foreground uppercase tracking-tighter mix-blend-overlay opacity-20 select-none block">
                    MILKLY
                </span>
             </div>
        </div>
      </div>
    </footer>
  );
};
