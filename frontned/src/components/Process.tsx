import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { LucideIcon, Search, PenTool, Code, Rocket } from "lucide-react";

const steps = [
  { icon: Search, title: "Discovery", description: "We dive deep into your business, users, and goals to define the right strategy." },
  { icon: PenTool, title: "Design", description: "Crafting intuitive interfaces and experiences that delight your users." },
  { icon: Code, title: "Development", description: "Building robust, scalable solutions with clean, maintainable code." },
  { icon: Rocket, title: "Launch", description: "Deploying, monitoring, and iterating to ensure long-term success." },
];

interface Step {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ProcessStep = ({ step, index }: { step: Step; index: number }) => {
  const stepRef = useRef(null);
  const stepInView = useInView(stepRef, { once: true, margin: "-50px" });
  const Icon = step.icon;
  return (
    <motion.div
      key={step.title}
      ref={stepRef}
      initial={{ opacity: 0, y: 30 }}
      animate={stepInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="text-center relative"
    >
      <div className="relative z-10 w-20 h-20 rounded-2xl bg-card border border-border mx-auto flex items-center justify-center mb-6 group">
        <Icon size={28} className="text-primary" />
        <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
          {index + 1}
        </span>
      </div>
      <h3 className="font-display font-semibold mb-2">{step.title}</h3>
      <p className="text-sm text-muted-foreground">{step.description}</p>
    </motion.div>
  );
};

const Process = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">How We Work</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-display font-bold">
            Our <span className="gradient-text">Process</span>
          </h2>
        </motion.div>

        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-primary/50 via-accent/50 to-neon-cyan/50" />

          {steps.map((step, i) => (
            <ProcessStep key={step.title} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
