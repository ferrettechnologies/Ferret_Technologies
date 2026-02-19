import { useParams, Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Smartphone, Globe, Monitor, UsersRound, Cpu, ArrowLeft, Watch, Palette, Zap, Search, ShieldCheck, Accessibility, Terminal, Brain } from "lucide-react";
import Navbar from "@/components/Navbar";

const serviceData = {
    "cutting-edge": {
        title: "Cutting Edge",
        icon: Zap,
        color: "#65d75e",
        description: "We combine new platforms, modern architecture, and practical experimentation to deliver products that feel ahead of the market, not behind it.",
        features: [
            "Rapid technology evaluation",
            "Modern architecture blueprints",
            "Prototype-to-production acceleration",
            "Performance-focused implementation",
            "Innovation roadmap planning"
        ]
    },
    "digital-transformation": {
        title: "Digital Transformation",
        icon: Cpu,
        color: "#7d59f0",
        description: "Transform legacy workflows into scalable digital systems with improved speed, visibility, and operational control across your organization.",
        features: [
            "Legacy platform modernization",
            "Process automation strategy",
            "Cloud migration planning",
            "Data platform integration",
            "Change enablement support"
        ]
    },
    "mobile-development": {
        title: "Mobile Development",
        icon: Smartphone,
        color: "#5A75FF",
        description: "Build cutting-edge mobile applications that provide seamless experiences across iOS and Android. Our mobile development team focuses on performance, scalability, and user-centric design.",
        features: [
            "Native iOS & Android Development",
            "Cross-platform Solutions (React Native, Flutter)",
            "Mobile UI/UX Design",
            "App Store Optimization",
            "Ongoing Maintenance & Updates"
        ]
    },
    "web-development": {
        title: "Web Development",
        icon: Globe,
        color: "#FF6C5A",
        description: "Creating responsive, fast, and secure web applications tailored to your business needs. We use the latest technologies to ensure your web presence is powerful and effective.",
        features: [
            "Full-stack Web Development",
            "Progressive Web Apps (PWA)",
            "E-commerce Solutions",
            "Custom CMS Development",
            "API Integration & Development"
        ]
    },
    "design": {
        title: "Design",
        icon: Palette,
        color: "#f0a327",
        description: "Create intuitive, memorable digital experiences through product design systems that align business goals with user behavior.",
        features: [
            "Product UX strategy",
            "UI systems and components",
            "Interactive prototyping",
            "Usability testing workflows",
            "Design-to-dev handoff process"
        ]
    },
    "ai-features": {
        title: "AI Features Integration",
        icon: Cpu,
        color: "#f84273",
        description: "Integrate practical AI features into your product to improve automation, personalization, and decision support with measurable value.",
        features: [
            "LLM-assisted feature design",
            "Model API orchestration",
            "Prompt and workflow engineering",
            "Safety and guardrail patterns",
            "Monitoring and iteration loops"
        ]
    },
    "ai-assisted": {
        title: "AI Assisted Development",
        icon: Terminal,
        color: "#f84273",
        description: "Use AI-accelerated delivery practices to reduce build cycles while preserving quality, test coverage, and long-term maintainability.",
        features: [
            "AI-augmented engineering workflows",
            "Code generation quality gates",
            "Test scaffolding acceleration",
            "Developer productivity automation",
            "Team enablement and standards"
        ]
    },
    "accessible": {
        title: "Accessible & Compliant",
        icon: Accessibility,
        color: "#f33f6b",
        description: "Build inclusive products that meet accessibility and compliance expectations from the start, reducing risk and improving reach.",
        features: [
            "WCAG-focused implementation",
            "Accessibility audits and fixes",
            "Compliance-ready UI patterns",
            "Assistive technology validation",
            "Documentation and governance"
        ]
    },
    "discovery": {
        title: "Discovery",
        icon: Search,
        color: "#23acee",
        description: "Validate product direction early through structured discovery, helping teams prioritize the right scope before full-scale development.",
        features: [
            "Stakeholder alignment workshops",
            "Technical and product audits",
            "Requirement refinement",
            "Risk and feasibility analysis",
            "Execution-ready delivery plan"
        ]
    },
    "quality-assurance": {
        title: "Quality Assurance",
        icon: ShieldCheck,
        color: "#9f58f3",
        description: "Ship confidently with a QA process designed for speed and reliability across functional, integration, and release-level testing.",
        features: [
            "Manual and automated QA strategy",
            "Regression test planning",
            "API and integration testing",
            "Release readiness validation",
            "Defect triage and reporting"
        ]
    },
    "desktop-development": {
        title: "Desktop Development",
        icon: Monitor,
        color: "#64d65a",
        description: "Robust and high-performance desktop applications for Windows, macOS, and Linux. We build powerful tools that take full advantage of desktop hardware.",
        features: [
            "Cross-platform Desktop Apps",
            "Performance Optimization",
            "System Integration",
            "Offline Functionality",
            "Custom Enterprise Tools"
        ]
    },
    "wearables": {
        title: "Wearable Devices",
        icon: Watch,
        color: "#f74671",
        description: "Build connected wearable experiences that blend hardware data, real-time interaction, and performance-efficient mobile integration.",
        features: [
            "Wear OS and watchOS app support",
            "Sensor and health data pipelines",
            "BLE device communication",
            "Battery-conscious app architecture",
            "Companion app integration"
        ]
    },
    "staff-augmentation": {
        title: "Staff Augmentation",
        icon: UsersRound,
        color: "#FFB56A",
        description: "Scale your team quickly with our skilled developers and designers. We provide the expertise you need to accelerate your project without the overhead of full-time hiring.",
        features: [
            "Dedicated Project Teams",
            "Technical Lead & Architecture Support",
            "UI/UX Designers & Researchers",
            "QA & DevOps Specialists",
            "Flexible Engagement Models"
        ]
    },
    "ai-ml-development": {
        title: "AI/ML Development",
        icon: Brain,
        color: "#7FD34C",
        description: "Scale smarter with our end-to-end AI and Machine Learning solutions. We build predictive models, recommendation engines, and high-performance neural networks that solve complex business challenges.",
        features: [
            "Natural Language Processing (NLP)",
            "Computer Vision & Image Analysis",
            "Predictive Analytics & Forecasting",
            "Machine Learning Model Operations (MLOps)",
            "Generative AI & LLM Integration"
        ]
    }
};

const ServiceDetails = () => {
    const { id } = useParams<{ id: string }>();
    const location = useLocation();
    const navigate = useNavigate();
    const service = serviceData[id as keyof typeof serviceData];
    const sourcePath = (location.state as { from?: string } | null)?.from;
    const backTarget = sourcePath === "/" || sourcePath === "/what-we-do" || sourcePath === "/services"
        ? sourcePath
        : "/what-we-do";

    const handleBack = () => {
        if (backTarget === "/") {
            navigate({ pathname: "/", hash: "#services" }, { state: { skipLoader: true } });
            return;
        }

        navigate(backTarget);
    };

    if (!service) {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
                    <Link to="/" className="text-primary hover:underline">Return to Home</Link>
                </div>
            </div>
        );
    }

    const Icon = service.icon;
    const hasLongTitleWord = service.title
        .split(/\s+/)
        .some((word) => word.replace(/[^A-Za-z0-9]/g, "").length >= 12);
    const titleSizeClass = hasLongTitleWord ? "md:text-5xl lg:text-6xl" : "md:text-7xl";

    return (
        <div className="min-h-screen overflow-x-hidden bg-[#0c0d16] text-white">
            <Navbar />

            <main className="pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
                <button
                    type="button"
                    onClick={handleBack}
                    className="inline-flex items-center gap-2 bg-transparent border-0 p-0 text-white/60 hover:text-[#ff0044] transition-colors mb-12"
                >
                    <ArrowLeft size={20} />
                    <span>Back</span>
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div
                            className="w-20 h-20 rounded-2xl flex items-center justify-center mb-8"
                            style={{ backgroundColor: service.color, boxShadow: `0 10px 30px ${service.color}44` }}
                        >
                            <Icon size={40} className="text-white" />
                        </div>

                        <h1 className={`mb-8 break-normal hyphens-none text-4xl font-display font-black uppercase leading-[0.95] sm:text-5xl ${titleSizeClass}`}>
                            {service.title}
                        </h1>

                        <p className="text-xl md:text-2xl text-white/80 leading-relaxed mb-10">
                            {service.description}
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-xl"
                    >
                        <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                            <span className="w-2 h-8 bg-[#ff0044] rounded-full"></span>
                            Key Capabilities
                        </h2>

                        <ul className="space-y-6">
                            {service.features.map((feature, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 + index * 0.1 }}
                                    className="flex items-center gap-4 text-lg text-white/70"
                                >
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#ff0044]" />
                                    {feature}
                                </motion.li>
                            ))}
                        </ul>

                        <div className="mt-12 p-8 rounded-2xl bg-[#ff0044]/10 border border-[#ff0044]/20">
                            <h3 className="text-xl font-bold mb-4 text-[#ff0044]">Ready to Start?</h3>
                            <p className="text-white/60 mb-6">Let's discuss how our {service.title} expertise can help your business grow.</p>
                            <Link
                                to="/contact"
                                className="inline-block w-full py-4 bg-[#ff0044] hover:bg-[#ff0044]/90 text-white font-bold rounded-xl text-center transition-colors"
                            >
                                Schedule a Consultation
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </main>

            {/* Decorative background elements */}
            <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-[#ff0044] opacity-[0.03] blur-[100px] pointer-events-none" />
            <div className="fixed bottom-0 left-0 w-[500px] h-[500px] bg-[#4f68ff] opacity-[0.03] blur-[100px] pointer-events-none" />
        </div>
    );
};

export default ServiceDetails;
