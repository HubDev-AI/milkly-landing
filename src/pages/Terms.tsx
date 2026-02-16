import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

export default function Terms() {
  return (
    <div className="min-h-screen w-full bg-[#050505] text-[#Eaeaea] font-sans overflow-x-hidden selection:bg-white/20">
      <Helmet>
        <title>Terms of Service - Milkly</title>
        <meta name="description" content="Milkly's terms of service. Read our terms governing use of the AI-powered newsletter platform." />
        <link rel="canonical" href="https://milkly.xyz/terms" />
        <meta property="og:title" content="Terms of Service - Milkly" />
        <meta property="og:description" content="Milkly's terms of service. Read our terms governing use of the AI-powered newsletter platform." />
        <meta property="og:url" content="https://milkly.xyz/terms" />
      </Helmet>

      {/* Subtle Background Ambience (toned down for readability) */}
      <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute -left-[10%] -top-[10%] w-[50vw] h-[50vw] rounded-full bg-white/[0.02] blur-3xl" />
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
                    Terms of <br /> Service
                </h1>
                <p className="text-white/40 font-mono text-sm uppercase tracking-widest pt-4 border-t border-white/10 w-fit">
                    Last updated: January 30, 2026
                </p>
            </div>

            {/* Content Section - High Readability */}
            <div className="space-y-16 text-lg md:text-xl font-light leading-relaxed text-white/70">
                
                <section className="space-y-6">
                    <h2 className="text-2xl text-[#Eaeaea] font-medium">1. Acceptance of Terms</h2>
                    <p>
                        By accessing and using Milkly ("the Platform"), you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you must discontinue use of our services immediately.
                    </p>
                </section>

                <section className="space-y-6">
                    <h2 className="text-2xl text-[#Eaeaea] font-medium">2. Creative Content & Usage</h2>
                    <p>
                        Milkly is a canvas for expression. You retain ownership of all content you create, upload, or share on the Platform ("User Content"). However, by posting User Content, you grant Milkly a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and display such content solely for the purpose of operating and improving the Platform.
                    </p>
                </section>

                <section className="space-y-6">
                    <h2 className="text-2xl text-[#Eaeaea] font-medium">3. User Conduct</h2>
                    <p>
                        Our community thrives on respect and creativity. You agree not to use the Platform to:
                    </p>
                    <ul className="list-disc pl-5 space-y-3 marker:text-white/30">
                        <li>Distribute malicious software or content tailored to disrupt service.</li>
                        <li>Harass, abuse, or harm another person or group.</li>
                        <li>Violate any applicable local, state, national, or international law.</li>
                        <li>Infringe upon the intellectual property rights of others.</li>
                    </ul>
                </section>

                <section className="space-y-6">
                    <h2 className="text-2xl text-[#Eaeaea] font-medium">4. Intellectual Property</h2>
                    <p>
                        The design, code, and "Milkly" branding are the exclusive property of Milkly and are protected by copyright, trademark, and other intellectual property laws. "Liquid Silk" and "Editorial Dark" design systems are proprietary assets.
                    </p>
                </section>

                <section className="space-y-6">
                    <h2 className="text-2xl text-[#Eaeaea] font-medium">5. Termination</h2>
                    <p>
                        We reserve the right to suspend or terminate your access to the Platform at our sole discretion, without notice, for conduct that we believe violates these Terms of Service or is harmful to other users, us, or third parties, or for any other reason.
                    </p>
                </section>

                <section className="space-y-6">
                    <h2 className="text-2xl text-[#Eaeaea] font-medium">6. Changes to Terms</h2>
                    <p>
                        Milkly is an evolving ecosystem. We may modify these Terms at any time. We will provide notice of significant changes by posting the updated Terms on this page. Your continued use of the Platform after any such change constitutes your acceptance of the new Terms.
                    </p>
                </section>
                
                 <section className="pt-12 border-t border-white/10">
                    <p className="text-base text-white/40">
                        Questions? Reach out to us at <a href="mailto:legal@milkly.app" className="text-white hover:underline decoration-white/30 underline-offset-4 transition-all">legal@milkly.app</a>
                    </p>
                </section>
            </div>
        </motion.div>
      </div>
    </div>
  );
}
