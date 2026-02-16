import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

export default function Privacy() {
  return (
    <div className="min-h-screen w-full bg-[#050505] text-[#Eaeaea] font-sans overflow-x-hidden selection:bg-white/20">
      <Helmet>
        <title>Privacy Policy - Milkly</title>
        <meta name="description" content="Milkly's privacy policy. Learn how we collect, use, and protect your personal information." />
        <link rel="canonical" href="https://milkly.xyz/privacy" />
        <meta property="og:title" content="Privacy Policy - Milkly" />
        <meta property="og:description" content="Milkly's privacy policy. Learn how we collect, use, and protect your personal information." />
        <meta property="og:url" content="https://milkly.xyz/privacy" />
      </Helmet>

      {/* Subtle Background Ambience */}
      <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute -right-[10%] -bottom-[10%] w-[50vw] h-[50vw] rounded-full bg-white/[0.02] blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-12 md:py-24">
        {/* Minimalist Header */}
        <header className="mb-24 flex justify-start">
             <Link to="/" className="group relative">
                <span className="font-heading text-2xl font-bold tracking-tight text-[#Eaeaea] transition-colors group-hover:text-white">
                    Milkly.
                </span>
            </Link>
        </header>

        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-20"
        >
             {/* Title Section */}
            <div className="space-y-6">
                <h1 className="font-heading text-6xl md:text-8xl font-medium tracking-tight text-[#Eaeaea] leading-[0.9]">
                    Privacy <br /> Policy
                </h1>
                <p className="text-white/40 font-mono text-sm uppercase tracking-widest pt-4 border-t border-white/10 w-fit">
                    Last updated: January 30, 2026
                </p>
            </div>

            {/* Content Section - High Readability */}
            <div className="space-y-16 text-lg md:text-xl font-light leading-relaxed text-white/70">
                
                <section className="space-y-6">
                    <h2 className="text-2xl text-[#Eaeaea] font-medium">1. Introduction</h2>
                    <p>
                        At Milkly, we value your privacy as much as your creativity. This policy outlines how we collect, use, and protect your personal information when you use our Platform. We believe in transparency and giving you control over your digital footprint.
                    </p>
                </section>

                <section className="space-y-6">
                    <h2 className="text-2xl text-[#Eaeaea] font-medium">2. Information We Collect</h2>
                    <div className="grid md:grid-cols-2 gap-8 mt-8">
                        <div className="p-8 border border-white/10 bg-white/[0.02]">
                             <h3 className="font-heading text-2xl mb-4 text-[#Eaeaea]">Information You Provide</h3>
                             <p className="text-base text-white/60 leading-relaxed">
                                Account details (email, username), profile information, and the content you create and share using our tools.
                             </p>
                        </div>
                        <div className="p-8 border border-white/10 bg-white/[0.02]">
                             <h3 className="font-heading text-2xl mb-4 text-[#Eaeaea]">Usage Data</h3>
                             <p className="text-base text-white/60 leading-relaxed">
                                Metrics on how you interact with the Platform, device information, and log data to help us improve performance.
                             </p>
                        </div>
                    </div>
                </section>

                <section className="space-y-6">
                    <h2 className="text-2xl text-[#Eaeaea] font-medium">3. How We Use Your Data</h2>
                    <p>
                        We use the collected information for specific, legitimate purposes:
                    </p>
                    <ul className="list-disc pl-5 space-y-3 marker:text-white/30">
                        <li>To provide, maintain, and improve the Milkly Platform.</li>
                        <li>To personalize your experience and deliver relevant content.</li>
                        <li>To communicate with you about updates, security alerts, and support.</li>
                        <li>To analyze trends and usage to optimize our design systems.</li>
                    </ul>
                </section>

                <section className="space-y-6">
                    <h2 className="text-2xl text-[#Eaeaea] font-medium">4. Data Storage & Security</h2>
                    <p>
                        Your data is stored on secure servers with robust encryption measures. We employ industry-standard security practices to protect against unauthorized access, alteration, or destruction of your personal information.
                    </p>
                </section>

                <section className="space-y-6">
                    <h2 className="text-2xl text-[#Eaeaea] font-medium">5. Cookies & Tracking</h2>
                    <p>
                        We use cookies and similar technologies to enhance your browsing experience and understand how you use our Platform. You can control cookie preferences through your browser settings, though this may affect some functionality.
                    </p>
                </section>
                
                 <section className="space-y-6">
                    <h2 className="text-2xl text-[#Eaeaea] font-medium">6. Your Rights</h2>
                    <p>
                       You have the right to access, correct, or delete your personal data. You may also object to processing or request data portability.
                    </p>
                </section>

                <section className="pt-12 border-t border-white/10">
                    <p className="text-base text-white/40">
                        For privacy-related inquiries, contact our Data Protection Officer at <a href="mailto:privacy@milkly.app" className="text-white hover:underline decoration-white/30 underline-offset-4 transition-all">privacy@milkly.app</a>
                    </p>
                </section>
            </div>
        </motion.div>
      </div>
    </div>
  );
}
