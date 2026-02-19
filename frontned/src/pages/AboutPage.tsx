import { motion } from "framer-motion";
import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import { Lightbulb, ShieldCheck, TrendingUp, Users } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import About from "@/components/About";
import Management from "@/components/Management";

interface ValueItem {
  icon: LucideIcon;
  title: string;
  detail: string;
}

const values: ValueItem[] = [
  {
    icon: Users,
    title: "People Over Process",
    detail: "Great communication and ownership beat heavyweight process every time.",
  },
  {
    icon: Lightbulb,
    title: "Bold Product Thinking",
    detail: "We combine fast experiments with clear product strategy to de-risk decisions.",
  },
  {
    icon: ShieldCheck,
    title: "Quality as a Habit",
    detail: "Testing, performance, and security are planned early, not bolted on later.",
  },
  {
    icon: TrendingUp,
    title: "Measured Outcomes",
    detail: "Every release ties back to real business outcomes and user behavior signals.",
  },
];

const milestones = [
  { year: "2018", title: "Studio Launch", detail: "Started as a compact engineering team helping startups ship v1 products." },
  { year: "2020", title: "Global Expansion", detail: "Opened remote collaboration pods across North America and Europe." },
  { year: "2023", title: "Enterprise Programs", detail: "Scaled delivery for regulated and high-compliance industries." },
  { year: "2026", title: "AI Product Focus", detail: "Expanded into AI-powered workflows and intelligent product automation." },
];

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState<"about" | "management">("about");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <PageHero
        badge="About"
        title="A Team Built for"
        highlight="Ambitious Products"
        description="We are designers, engineers, and product strategists who turn complex ideas into reliable digital experiences."
        primaryCta={{ label: "Meet Us in Action", to: "/work" }}
        secondaryCta={{ label: "Explore Services", to: "/services" }}
      />

      {/* Tabs Section */}
      <div className="flex border-b border-white/10 bg-black/20 backdrop-blur-sm sticky top-[84px] z-30">
        <div className="mx-auto flex w-full max-w-7xl px-4">
          <button
            onClick={() => setActiveTab("about")}
            className={`relative py-6 text-sm font-bold uppercase tracking-widest transition-colors hover:text-white ${activeTab === "about" ? "text-white" : "text-white/50"
              }`}
          >
            About Us
            {activeTab === "about" && (
              <motion.div
                layoutId="tab-underline"
                className="absolute bottom-0 left-0 right-0 h-1 bg-[#ff0044]"
              />
            )}
          </button>
          <button
            onClick={() => setActiveTab("management")}
            className={`relative ml-12 py-6 text-sm font-bold uppercase tracking-widest transition-colors hover:text-white ${activeTab === "management" ? "text-white" : "text-white/50"
              }`}
          >
            Management
            {activeTab === "management" && (
              <motion.div
                layoutId="tab-underline"
                className="absolute bottom-0 left-0 right-0 h-1 bg-[#ff0044]"
              />
            )}
          </button>
        </div>
      </div>

      {activeTab === "about" ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <About />

          <section className="section-padding bg-secondary/30">
            <div className="mx-auto max-w-7xl">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-80px" }}
                className="mb-12 text-center"
              >
                <span className="text-sm font-medium uppercase tracking-wider text-primary">Core Principles</span>
                <h2 className="mt-3 text-3xl font-display font-bold md:text-5xl">
                  What Guides <span className="gradient-text">Our Work</span>
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {values.map((value, index) => {
                  const Icon = value.icon;
                  return (
                    <motion.article
                      key={value.title}
                      initial={{ opacity: 0, y: 26 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true, margin: "-80px" }}
                      className="glass-card-hover p-7"
                    >
                      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                        <Icon size={22} className="text-primary" />
                      </div>
                      <h3 className="text-xl font-display font-semibold">{value.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{value.detail}</p>
                    </motion.article>
                  );
                })}
              </div>
            </div>
          </section>

          <section className="section-padding">
            <div className="mx-auto max-w-5xl">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-80px" }}
                className="mb-12 text-center"
              >
                <span className="text-sm font-medium uppercase tracking-wider text-primary">Milestones</span>
                <h2 className="mt-3 text-3xl font-display font-bold md:text-5xl">
                  How We <span className="gradient-text">Grew</span>
                </h2>
              </motion.div>

              <div className="space-y-4">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={milestone.year}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.45, delay: index * 0.1 }}
                    viewport={{ once: true, margin: "-80px" }}
                    className="glass-card flex flex-col gap-4 p-6 md:flex-row md:items-center md:gap-8"
                  >
                    <div className="w-full md:w-32">
                      <span className="text-2xl font-display font-bold gradient-text">{milestone.year}</span>
                    </div>
                    <div className="h-px w-full bg-border md:h-14 md:w-px" />
                    <div className="flex-1">
                      <h3 className="font-display text-lg font-semibold">{milestone.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{milestone.detail}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Management />
        </motion.div>
      )}

      <Footer />
    </div>
  );
};

export default AboutPage;

