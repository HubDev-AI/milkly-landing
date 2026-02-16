import { ArrowRight } from "lucide-react";
import { APP_URL, TWITTER_URL, INSTAGRAM_URL } from "@/lib/config";
import { Link } from "react-router-dom";

export const FinaleSection = () => {
    return (
        <section className="h-screen w-screen flex-shrink-0 flex flex-col justify-between p-6 md:p-24 bg-white text-black overflow-hidden relative">
            <div className="flex-1 flex flex-col justify-center items-center text-center space-y-8 md:space-y-12">
                 <h2 className="text-[15vw] md:text-[12vw] leading-none font-serif font-black tracking-tighter hover:text-orange-500 transition-colors duration-500 cursor-default">
                    CREATE
                 </h2>
                 <p className="max-w-md text-base md:text-xl font-light text-black/60">
                    Your audience is waiting. <br/>
                    Give them something worth reading.
                 </p>

                 <a
                    href={APP_URL}
                    className="group flex items-center gap-4 text-base md:text-xl font-bold tracking-widest uppercase hover:text-orange-500 transition-colors"
                 >
                    Start Now
                    <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                 </a>
            </div>

            <footer className="w-full flex flex-col gap-4 md:flex-row md:gap-0 justify-between items-center md:items-end border-t border-black/10 pt-6 md:pt-8">
                 <div className="flex flex-col gap-1 md:gap-2 items-center md:items-start">
                    <span className="text-xs font-bold uppercase tracking-widest opacity-50">Milkly Inc.</span>
                    <span className="text-xs font-mono opacity-50">© 2026</span>
                 </div>
                <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-xs font-bold uppercase tracking-widest">
                    {TWITTER_URL && <a href={TWITTER_URL} target="_blank" rel="noopener noreferrer" className="hover:text-orange-500">Twitter</a>}
                    {INSTAGRAM_URL && <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-orange-500">Instagram</a>}
                    <Link to="/terms" className="hover:text-orange-500">Terms</Link>
                    <Link to="/privacy" className="hover:text-orange-500">Privacy</Link>
                </div>
            </footer>
        </section>
    );
};
