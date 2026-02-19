import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface PageHeroProps {
  badge: string;
  title: string;
  highlight: string;
  description: string;
  primaryCta?: {
    label: string;
    to: string;
  };
  secondaryCta?: {
    label: string;
    to: string;
  };
}

const PageHero = ({
  badge,
  title,
  highlight,
  description,
  primaryCta,
  secondaryCta,
}: PageHeroProps) => {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-8 left-[18%] h-72 w-72 rounded-full bg-primary/20 blur-[110px] animate-pulse-glow" />
        <div
          className="absolute bottom-10 right-[15%] h-72 w-72 rounded-full bg-accent/15 blur-[110px] animate-pulse-glow"
          style={{ animationDelay: "1.2s" }}
        />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center rounded-full border border-border bg-card/50 px-4 py-2 text-sm text-muted-foreground backdrop-blur-sm"
        >
          {badge}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 text-4xl font-display font-bold leading-tight sm:text-5xl md:text-6xl"
        >
          {title} <span className="gradient-text">{highlight}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"
        >
          {description}
        </motion.p>

        {(primaryCta || secondaryCta) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            {primaryCta && (
              <Link
                to={primaryCta.to}
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground transition-all hover:opacity-90 neon-glow"
              >
                {primaryCta.label}
                <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
              </Link>
            )}
            {secondaryCta && (
              <Link
                to={secondaryCta.to}
                className="inline-flex rounded-full border border-border px-8 py-3.5 text-sm font-medium text-foreground transition-all hover:border-primary/50 hover:bg-card/50"
              >
                {secondaryCta.label}
              </Link>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default PageHero;
