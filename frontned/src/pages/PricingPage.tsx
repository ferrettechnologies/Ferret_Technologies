import { motion } from "framer-motion";
import { CircleHelp, Puzzle, Sparkles, Timer } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Pricing from "@/components/Pricing";

const addOns = [
  {
    icon: Puzzle,
    name: "Product Discovery Sprint",
    price: "$1,200",
    detail: "A one-week sprint to map user flows, scope architecture, and define release priorities.",
  },
  {
    icon: Sparkles,
    name: "AI Feature Pack",
    price: "$2,400",
    detail: "Add AI-powered search, automations, summaries, and workflow intelligence to your product.",
  },
  {
    icon: Timer,
    name: "Priority Delivery Lane",
    price: "$1,800",
    detail: "Reserved sprint capacity for urgent roadmap items and accelerated critical releases.",
  },
];

const faq = [
  {
    question: "Can we start with a smaller scope first?",
    answer: "Yes. Most teams begin with discovery or a focused MVP phase, then scale into broader delivery.",
  },
  {
    question: "Do plans include post-launch support?",
    answer: "Every plan includes support windows, and longer retained support can be added as an extension.",
  },
  {
    question: "How quickly can a project start?",
    answer: "Typical onboarding takes 1-2 weeks depending on readiness, assets, and integration complexity.",
  },
];

const PricingPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <PageHero
        badge="Pricing"
        title="Clear Investment for"
        highlight="Every Stage"
        description="Choose a package that fits your growth phase, with optional add-ons for deeper strategy, speed, and AI capabilities."
        primaryCta={{ label: "Book a Pricing Call", to: "/contact" }}
        secondaryCta={{ label: "Explore Services", to: "/services" }}
      />

      <Pricing />

      <section className="section-padding bg-secondary/30">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-80px" }}
            className="mb-12 text-center"
          >
            <span className="text-sm font-medium uppercase tracking-wider text-primary">Add-Ons</span>
            <h2 className="mt-3 text-3xl font-display font-bold md:text-5xl">
              Optional <span className="gradient-text">Enhancements</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Layer in specialized support based on your roadmap priorities and product constraints.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {addOns.map((addOn, index) => {
              const Icon = addOn.icon;
              return (
                <motion.article
                  key={addOn.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-80px" }}
                  className="glass-card-hover p-7"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <Icon size={21} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-display font-semibold">{addOn.name}</h3>
                  <p className="mt-2 text-sm font-semibold gradient-text">{addOn.price}</p>
                  <p className="mt-4 text-sm text-muted-foreground">{addOn.detail}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-80px" }}
            className="mb-12 text-center"
          >
            <span className="text-sm font-medium uppercase tracking-wider text-primary">FAQ</span>
            <h2 className="mt-3 text-3xl font-display font-bold md:text-5xl">
              Pricing <span className="gradient-text">Questions</span>
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faq.map((item, index) => (
              <motion.article
                key={item.question}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                viewport={{ once: true, margin: "-80px" }}
                className="glass-card p-6"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-md bg-primary/10">
                    <CircleHelp size={16} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold">{item.question}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{item.answer}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PricingPage;
