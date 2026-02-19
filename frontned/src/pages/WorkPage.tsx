import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight, Gauge, Target, TrendingUp, ChevronLeft, ChevronRight, Laptop, Smartphone, Zap, Mail } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
import Management from "@/components/Management";


const whatWeDoCards = [
  {
    id: "web",
    title: "Web development",
    description: "We develop high-quality web applications and portals with advanced functionality, designed to handle heavy traffic efficiently.",
    icon: Laptop,
    hasReadMore: false,
  },
  {
    id: "mobile",
    title: "Mobile apps",
    description: "We create exceptional iOS and Android apps that are visually appealing, user-friendly, and accessible to a wide audience.",
    icon: Smartphone,
    hasReadMore: true,
  },
  {
    id: "cutting-edge",
    title: "Cutting EDGE",
    description: "We provide cutting-edge solutions to bring our clients’ ideas to life, leveraging innovative technologies such as proximity sensing.",
    icon: Zap,
    hasReadMore: false,
  },
];

const WorkPage = () => {
  const [activeTab, setActiveTab] = useState<"about" | "management">("about");
  const [cardIndex, setCardIndex] = useState(0);
  const navigate = useNavigate();

  const nextCard = () => setCardIndex((i) => (i + 1) % whatWeDoCards.length);
  const prevCard = () => setCardIndex((i) => (i - 1 + whatWeDoCards.length) % whatWeDoCards.length);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Tabs Navigation - Focused and Premium */}
      <div className="relative pt-[84px] pb-0 flex justify-center z-10 bg-background">
        <div className="inline-flex items-center gap-12 px-12 py-4 rounded-t-2xl bg-[#0a0a0c] border-t border-x border-white/10 shadow-[0_-4px_20px_rgba(0,0,0,0.5)]">
          <button
            onClick={() => setActiveTab("about")}
            className={`relative py-2 text-sm font-bold uppercase tracking-[3px] transition-all hover:text-white ${activeTab === "about" ? "text-white" : "text-white/40"
              }`}
          >
            About Us
            {activeTab === "about" && (
              <motion.div
                layoutId="work-tab-underline"
                className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#ff0044]"
              />
            )}
          </button>
          <button
            onClick={() => setActiveTab("management")}
            className={`relative py-2 text-sm font-bold uppercase tracking-[3px] transition-all hover:text-white ${activeTab === "management" ? "text-white" : "text-white/40"
              }`}
          >
            Management
            {activeTab === "management" && (
              <motion.div
                layoutId="work-tab-underline"
                className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#ff0044]"
              />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {activeTab === "about" ? (
          <motion.div
            key="about-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="relative overflow-hidden bg-[#0c0d15] text-white"
          >
            {/* Shared space background for hero + Why Ferret + What We Do */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(white_1px,transparent_1px)] bg-[size:40px_40px]" />
              <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-[#ff0044] opacity-40 blur-[130px]" />
              <div className="absolute top-[20%] right-[-10%] w-[300px] h-[300px] rounded-full bg-blue-500/20 blur-[100px]" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60" />
            </div>

            {/* Hero Section */}
            <section className="relative min-h-[85vh] flex items-center justify-center">
              <div className="relative z-10 w-full max-w-6xl px-6 text-center">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-sm font-bold uppercase tracking-[4px] text-[#ff0044]"
                >
                  About Us
                </motion.span>
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="mt-4 text-5xl md:text-7xl lg:text-8xl font-display font-black leading-[1.05] tracking-tight"
                >
                  <span className="text-[#ff0044]">Who We Are</span>
                  <br />
                  <span className="text-white">Ferret Technologies</span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="mx-auto mt-10 max-w-2xl text-lg md:text-xl text-white/70 leading-relaxed font-medium"
                >
                  We are a cutting-edge software development company. We build apps for iOS, Android, Web, and Windows, serving clients who trust Ferret as their technology partner—from startups to large-scale enterprises.
                </motion.p>
              </div>
            </section>

            {/* Why Ferret Section - same background */}
            <section className="relative py-20 md:py-28">
              <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-4xl md:text-6xl lg:text-7xl font-display font-black tracking-tight text-white"
                >
                  Why Ferret?
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="mt-8 text-lg md:text-xl text-white/75 leading-relaxed"
                >
                  We have been providing quality custom software development for a variety of platforms and industries. Our extensive platform expertise makes us the ideal partner for multi-platform, cross-platform and porting projects—from startups to enterprises.
                </motion.p>
              </div>
            </section>

            {/* What We Do Section - same background, cards + carousel */}
            <section className="relative py-16 md:py-24 pb-32">
              <div className="relative z-10 mx-auto max-w-6xl px-6">
                <h2 className="text-center text-4xl md:text-5xl font-display font-black tracking-tight text-white">
                  What We Do
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-white/70">
                  We develop successful apps for clients ranging from startup entrepreneurs to large-scale enterprises.
                </p>

                <div className="mt-16 relative group">
                  <div className="flex items-center justify-center gap-0 lg:gap-8 overflow-visible">
                    {/* Previous Card (Left) */}
                    {(() => {
                      const prevIdx = (cardIndex - 1 + whatWeDoCards.length) % whatWeDoCards.length;
                      const card = whatWeDoCards[prevIdx];
                      const Icon = card.icon;
                      return (
                        <div className="hidden lg:block w-72 shrink-0 opacity-40 scale-90 transition-all duration-700 blur-[1px]">
                          <div className="overflow-hidden rounded-2xl bg-[#f5f5f7] shadow-lg">
                            <div className="h-40 bg-[#ff0044] flex items-center justify-center p-8">
                              <Icon className="h-16 w-16 text-white/90" />
                            </div>
                            <div className="p-8 text-center text-[#0c0d15]">
                              <h3 className="text-xl font-display font-black uppercase tracking-tight">{card.title}</h3>
                            </div>
                          </div>
                        </div>
                      );
                    })()}

                    {/* Active Card (Center) - Highlighted */}
                    <div className="w-full max-w-sm lg:max-w-[420px] shrink-0 z-20 transition-all duration-700 transform">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={cardIndex}
                          initial={{ opacity: 0, y: 30, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1.05 }}
                          exit={{ opacity: 0, y: -30, scale: 0.95 }}
                          transition={{ duration: 0.5, ease: "circOut" }}
                          className="overflow-hidden rounded-3xl bg-white shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10"
                        >
                          <div className="h-64 flex items-center justify-center p-12 relative overflow-hidden bg-[#ff0044]">
                            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-[size:20px_20px]" />
                            <div className="flex items-center justify-center relative z-10">
                              {cardIndex === 1 ? (
                                <div className="flex gap-4">
                                  <Smartphone className="h-32 w-32 text-white drop-shadow-2xl" />
                                  <Smartphone className="h-24 w-24 text-white/70 mt-8 blur-[0.5px]" />
                                </div>
                              ) : (
                                (() => {
                                  const Icon = whatWeDoCards[cardIndex].icon;
                                  return <Icon className="h-32 w-32 text-white drop-shadow-2xl" />;
                                })()
                              )}
                            </div>
                          </div>
                          <div className="p-10 text-center text-[#0c0d15] bg-white">
                            <h3 className="text-3xl font-display font-black uppercase tracking-tight leading-none mb-4">
                              {whatWeDoCards[cardIndex].title}
                            </h3>
                            <p className="mt-4 text-base text-black/60 leading-relaxed line-clamp-3">
                              {whatWeDoCards[cardIndex].description}
                            </p>
                            <Link
                              to="/what-we-do"
                              className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#ff0044] px-10 py-4 text-sm font-black uppercase tracking-widest text-white transition-all hover:bg-[#e6003d] hover:scale-105 active:scale-95 shadow-xl shadow-[#ff0044]/30"
                            >
                              Read more <ChevronRight className="h-4 w-4" />
                            </Link>
                          </div>
                        </motion.div>
                      </AnimatePresence>
                    </div>

                    {/* Next Card (Right) */}
                    {(() => {
                      const nextIdx = (cardIndex + 1) % whatWeDoCards.length;
                      const card = whatWeDoCards[nextIdx];
                      const Icon = card.icon;
                      return (
                        <div className="hidden lg:block w-72 shrink-0 opacity-40 scale-90 transition-all duration-700 blur-[1px]">
                          <div className="overflow-hidden rounded-2xl bg-[#f5f5f7] shadow-lg">
                            <div className="h-40 bg-[#ff0044] flex items-center justify-center p-8">
                              <Icon className="h-16 w-16 text-white/90" />
                            </div>
                            <div className="p-8 text-center text-[#0c0d15]">
                              <h3 className="text-xl font-display font-black uppercase tracking-tight">{card.title}</h3>
                            </div>
                          </div>
                        </div>
                      );
                    })()}
                  </div>

                  {/* Navigation Arrows - Refined styling */}
                  <button
                    type="button"
                    onClick={prevCard}
                    className="absolute left-4 lg:left-12 top-1/2 -translate-y-1/2 z-30 flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white backdrop-blur-md transition-all hover:bg-[#ff0044] hover:border-[#ff0044] hover:scale-110 shadow-2xl"
                  >
                    <ChevronLeft className="h-10 w-10 font-bold" />
                  </button>
                  <button
                    type="button"
                    onClick={nextCard}
                    className="absolute right-4 lg:right-12 top-1/2 -translate-y-1/2 z-30 flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white backdrop-blur-md transition-all hover:bg-[#ff0044] hover:border-[#ff0044] hover:scale-110 shadow-2xl"
                  >
                    <ChevronRight className="h-10 w-10 font-bold" />
                  </button>
                </div>

                <div className="mt-16 text-center">
                  <p className="text-lg text-white/80 mb-6">
                    For Contact Us click the button
                  </p>
                  <button
                    type="button"
                    onClick={() => navigate("/contact")}
                    className="inline-flex items-center gap-2 rounded-full bg-[#ff0044] px-8 py-4 text-base font-bold text-white transition hover:bg-[#e6003d]"
                  >
                    <Mail className="h-5 w-5" />
                    Contact Us
                  </button>
                </div>
              </div>
            </section>
          </motion.div>
        ) : (
          <motion.div
            key="management-content"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
          >
            <Management />
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default WorkPage;
