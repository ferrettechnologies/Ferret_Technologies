import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CEO, FinTrack",
    content: "Ferret Technologies transformed our vision into a world-class product. Their technical expertise and design sensibility are unmatched.",
    avatar: "SC",
  },
  {
    name: "Marcus Rodriguez",
    role: "Founder, EcoMarket",
    content: "Working with Ferret Technologies was a game-changer. They delivered a complex marketplace platform ahead of schedule with exceptional quality.",
    avatar: "MR",
  },
  {
    name: "Emily Watson",
    role: "CTO, MediConnect",
    content: "The team's ability to handle complex real-time features while maintaining clean architecture is truly impressive.",
    avatar: "EW",
  },
  {
    name: "David Kim",
    role: "Founder, TechStart",
    content: "Ferret Technologies provided the strategic guidance and technical execution we needed to launch our MVP in record time.",
    avatar: "DK",
  },
];

const Testimonials = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Testimonials</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-display font-bold">
            Client <span className="gradient-text">Reviews</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-8"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={16} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">"{t.content}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-sm font-medium text-primary">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-medium">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
