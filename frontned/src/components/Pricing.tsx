import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Starter",
    price: "$2,999",
    description: "Perfect for MVPs and small projects",
    features: ["Single page application", "Responsive design", "Basic SEO setup", "2 rounds of revisions", "30-day support"],
    highlight: false,
  },
  {
    name: "Pro",
    price: "$7,999",
    description: "For growing businesses needing scale",
    features: ["Multi-page application", "Custom UI/UX design", "API integration", "Database setup", "5 rounds of revisions", "90-day support", "Performance optimization"],
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Full-scale solutions for large teams",
    features: ["Full-stack development", "Dedicated team", "CI/CD pipeline", "Cloud infrastructure", "Unlimited revisions", "12-month support", "Priority SLA"],
    highlight: false,
  },
];

const Pricing = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="pricing" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Pricing</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-display font-bold">
            Simple <span className="gradient-text">Plans</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Transparent pricing for every stage of your business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`glass-card p-8 relative ${
                plan.highlight
                  ? "border-primary/50 shadow-[0_0_40px_-10px_hsl(var(--primary)/0.3)]"
                  : ""
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                  Most Popular
                </span>
              )}
              <h3 className="text-lg font-display font-semibold">{plan.name}</h3>
              <div className="mt-4 mb-2">
                <span className="text-4xl font-display font-bold">{plan.price}</span>
                {plan.price !== "Custom" && <span className="text-muted-foreground text-sm"> / project</span>}
              </div>
              <p className="text-sm text-muted-foreground mb-8">{plan.description}</p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm">
                    <Check size={16} className="text-primary shrink-0" />
                    <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={`block text-center py-3 rounded-full font-medium text-sm transition-all ${
                  plan.highlight
                    ? "bg-primary text-primary-foreground hover:opacity-90 neon-glow"
                    : "border border-border text-foreground hover:border-primary/50 hover:bg-card"
                }`}
              >
                Get Started
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
