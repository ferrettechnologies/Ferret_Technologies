import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { Cloud, Database, Layers, Rocket, ShieldCheck, Users } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Services from "@/components/Services";

interface DeliveryModel {
  icon: LucideIcon;
  name: string;
  summary: string;
  timeline: string;
}

const deliveryModels: DeliveryModel[] = [
  {
    icon: Users,
    name: "Dedicated Product Squad",
    summary: "A cross-functional team aligned to your roadmap, sprint goals, and release cadence.",
    timeline: "Best for 4-12 month builds",
  },
  {
    icon: Layers,
    name: "Team Extension",
    summary: "Senior engineers and designers embedded into your in-house workflow from day one.",
    timeline: "Best for ongoing delivery",
  },
  {
    icon: Rocket,
    name: "MVP Accelerator",
    summary: "Rapid build track focused on validating product-market fit with measurable milestones.",
    timeline: "Best for 6-10 week launches",
  },
];

const stackAreas = [
  "React / Next.js",
  "React Native",
  "Node.js",
  "Python",
  "PostgreSQL",
  "AWS",
  "Docker",
  "OpenAI APIs",
  "CI/CD",
  "Observability",
  "Microservices",
  "Security Hardening",
];

const qualityPillars = [
  {
    icon: ShieldCheck,
    title: "Security First",
    detail: "Threat modeling, secure coding standards, and production-ready controls are built in from sprint one.",
  },
  {
    icon: Cloud,
    title: "Cloud Native",
    detail: "We design for resilience, elasticity, and global performance from architecture to deployment.",
  },
  {
    icon: Database,
    title: "Data Reliability",
    detail: "Clear schemas, reliable migrations, and long-term maintainability keep product velocity high.",
  },
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <PageHero
        badge="Services"
        title="Execution That Scales"
        highlight="With Your Product"
        description="From discovery to delivery, we pair senior talent with disciplined systems so every release ships fast and stays stable."
        primaryCta={{ label: "Start a Project", to: "/contact" }}
        secondaryCta={{ label: "See Our Work", to: "/work" }}
      />

      <Services />

      <section className="section-padding bg-secondary/30">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-80px" }}
            className="mb-12 text-center"
          >
            <span className="text-sm font-medium uppercase tracking-wider text-primary">Delivery Models</span>
            <h2 className="mt-3 text-3xl font-display font-bold md:text-5xl">
              Flexible <span className="gradient-text">Engagement</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Pick a collaboration model that matches your timeline, internal bandwidth, and product maturity.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {deliveryModels.map((model, index) => {
              const Icon = model.icon;
              return (
                <motion.article
                  key={model.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-80px" }}
                  className="glass-card-hover p-7"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <Icon size={22} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-display font-semibold">{model.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{model.summary}</p>
                  <p className="mt-5 text-xs font-medium uppercase tracking-wider text-primary/90">{model.timeline}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.4fr_1fr]">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-80px" }}
              className="glass-card p-8"
            >
              <span className="text-sm font-medium uppercase tracking-wider text-primary">Tech We Ship</span>
              <h3 className="mt-3 text-2xl font-display font-bold md:text-3xl">
                Production-Ready <span className="gradient-text">Stack Coverage</span>
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Our squads work across modern frontend, backend, AI, cloud, and DevOps ecosystems to keep your platform coherent end to end.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {stackAreas.map((stack, index) => (
                  <motion.span
                    key={stack}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: index * 0.03 }}
                    viewport={{ once: true, margin: "-80px" }}
                    className="rounded-full border border-border bg-card px-3 py-1.5 text-xs text-muted-foreground"
                  >
                    {stack}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <div className="space-y-4">
              {qualityPillars.map((pillar, index) => {
                const Icon = pillar.icon;
                return (
                  <motion.div
                    key={pillar.title}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true, margin: "-80px" }}
                    className="glass-card p-6"
                  >
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <Icon size={20} className="text-primary" />
                    </div>
                    <h4 className="font-display text-lg font-semibold">{pillar.title}</h4>
                    <p className="mt-2 text-sm text-muted-foreground">{pillar.detail}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, margin: "-80px" }}
            className="mt-12 rounded-2xl border border-primary/30 bg-primary/10 p-7 text-center"
          >
            <h3 className="text-2xl font-display font-bold">Need custom delivery planning?</h3>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground">
              Share your roadmap and constraints, and we will recommend a model with team shape, timeline, and release plan.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 neon-glow"
            >
              Talk to the Team
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
