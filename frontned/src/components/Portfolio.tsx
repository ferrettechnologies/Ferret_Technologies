import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "FinTrack Pro",
    description: "AI-powered financial analytics dashboard for enterprise clients.",
    tech: ["React", "Node.js", "Python", "AWS"],
    color: "from-[hsl(var(--neon-purple)/0.3)] to-[hsl(var(--neon-blue)/0.3)]",
  },
  {
    title: "MediConnect",
    description: "Telemedicine platform connecting patients with specialists globally.",
    tech: ["React Native", "Firebase", "WebRTC"],
    color: "from-[hsl(var(--neon-blue)/0.3)] to-[hsl(var(--neon-cyan)/0.3)]",
  },
  {
    title: "EcoMarket",
    description: "Sustainable e-commerce marketplace with carbon tracking features.",
    tech: ["Next.js", "Stripe", "PostgreSQL"],
    color: "from-[hsl(var(--neon-cyan)/0.3)] to-[hsl(var(--neon-purple)/0.3)]",
  },
  {
    title: "LearnFlow",
    description: "Adaptive learning platform with AI-driven personalized curricula.",
    tech: ["Vue.js", "Django", "TensorFlow"],
    color: "from-[hsl(var(--neon-purple)/0.4)] to-[hsl(var(--neon-cyan)/0.2)]",
  },
  {
    title: "CryptoWallet",
    description: "Secure multi-chain cryptocurrency wallet with DeFi integration.",
    tech: ["React Native", "Solidity", "Web3.js"],
    color: "from-[hsl(var(--neon-blue)/0.3)] to-[hsl(var(--neon-green)/0.3)]",
  },
  {
    title: "VirtualShowroom",
    description: "Interactive 3D product showcase for automotive retailers.",
    tech: ["Three.js", "WebGL", "React"],
    color: "from-[hsl(var(--neon-pink)/0.3)] to-[hsl(var(--neon-purple)/0.3)]",
  },
];

interface Project {
  title: string;
  description: string;
  tech: string[];
  color: string;
}

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <motion.div
      key={project.title}
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card-hover overflow-hidden group cursor-pointer"
    >
      <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center`}>
        <span className="text-5xl font-display font-bold text-foreground/10 group-hover:text-foreground/20 transition-colors">
          {project.title.charAt(0)}
        </span>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-display font-semibold">{project.title}</h3>
          <ExternalLink size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
        </div>
        <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t: string) => (
            <span key={t} className="px-3 py-1 text-xs rounded-full bg-muted text-muted-foreground">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Portfolio = () => {
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true });

  return (
    <section id="portfolio" className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Portfolio</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-display font-bold">
            Featured <span className="gradient-text">Work</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            A selection of projects that showcase our expertise and passion for building exceptional digital products.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
