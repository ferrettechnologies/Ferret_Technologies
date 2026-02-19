import { motion } from "framer-motion";
import { Users, Star, GraduationCap } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import TwinklingStars from "@/components/TwinklingStars";

const CareersPage = () => {
    return (
        <div className="min-h-screen bg-[#0a0a0c] text-white">
            <Navbar />

            {/* Hero Section */}
            <section className="relative min-h-screen w-full pt-[84px] overflow-hidden flex flex-col items-center">
                {/* Background Elements */}
                <div className="absolute inset-0 z-0">
                    <TwinklingStars />
                    {/* Dark gradient for space depth */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-80" />
                </div>

                {/* Hero Content */}
                <div className="relative z-10 w-full max-w-5xl px-6 text-center mt-32">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-6xl md:text-8xl lg:text-[120px] font-display font-black tracking-tight leading-[0.9]"
                    >
                        Our Vacancies
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="mx-auto mt-14 max-w-3xl"
                    >
                        <p className="text-xl md:text-2xl text-white/70 leading-relaxed font-medium">
                            We are on a constant lookout for <span className="text-white">fresh minds</span> and <span className="text-white font-bold">bold thinkers</span>. At Ferret, we nurture the next generation of tech pioneers by providing an ecosystem where <span className="text-[#ff0044]">young talent</span> can thrive, innovate, and redefine the future.
                        </p>
                    </motion.div>
                </div>



                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-30"
                >
                    <div className="w-[1px] h-10 bg-gradient-to-b from-white to-transparent" />
                </motion.div>
            </section>

            <Footer />
        </div>
    );
};

export default CareersPage;
