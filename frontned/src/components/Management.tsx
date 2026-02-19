import { motion } from "framer-motion";
import { useState } from "react";

const founders = [
    {
        name: "Uttej Yadala",
        role: "CEO & Founder",
        image: "/assets/photos/uttej yadala/uttej2,3.jpeg",
    },
    {
        name: "Surya Yadala",
        role: "Director & Co-founder",
        image: "/assets/photos/surya yadala/1st person.png",
    },
];

const Management = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section className="relative w-full bg-[#0a0a0c] overflow-hidden">
            {/* Premium Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-[20%] -left-[10%] h-[140%] w-[120%] opacity-20"
                    style={{
                        background: "radial-gradient(circle at 20% 30%, #ff0044 0%, transparent 50%), radial-gradient(circle at 80% 70%, #0066ff 0%, transparent 50%)",
                        filter: "blur(80px)"
                    }}
                />
                <div className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
                        backgroundSize: '30px 30px'
                    }}
                />
            </div>
            <div className="relative flex min-h-[700px] w-full flex-col md:flex-row">
                {founders.map((founder, index) => (
                    <motion.div
                        key={founder.name}
                        className={`group relative min-h-[500px] flex-1 overflow-hidden transition-all duration-700 ease-in-out md:min-h-[700px] ${
                            index === 0 ? "md:border-r md:border-white/10" : ""
                        }`}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        style={{
                            zIndex: hoveredIndex === index ? 10 : 1,
                        }}
                    >
                        {/* Full image in panel: left panel = person on left side of frame, right panel = person on right side */}
                        <img
                            src={founder.image}
                            alt={founder.name}
                            className={`h-full w-full object-cover transition-all duration-1000 grayscale ${hoveredIndex === index ? "grayscale-0 scale-105" : "grayscale opacity-40 hover:opacity-60"}`}
                            style={{
                                objectPosition: index === 0 ? "left center" : "32% center",
                            }}
                        />

                        {/* Gradient overlay for readability */}
                        <div
                            className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-opacity duration-700 pointer-events-none"
                            style={{ opacity: hoveredIndex === index ? 1 : 0.4 }}
                        />

                        {/* Name & role at bottom, visible only on hover */}
                        <div className="absolute inset-x-0 bottom-0 flex flex-col items-center justify-end p-8 pb-12 text-center">
                            <motion.div
                                initial={false}
                                animate={{
                                    y: hoveredIndex === index ? 0 : 24,
                                    opacity: hoveredIndex === index ? 1 : 0,
                                }}
                                transition={{ duration: 0.35, ease: "easeOut" }}
                                className="flex flex-col items-center"
                            >
                                <h3 className="whitespace-nowrap text-2xl font-display font-black text-white md:text-4xl tracking-tight">
                                    {founder.name.split(' ')[0]}{" "}
                                    <span className="text-[#ff0044]">{founder.name.split(' ')[1]}</span>
                                </h3>
                                <p className="mt-3 text-xs font-bold uppercase tracking-[3px] text-white/80 md:text-sm">
                                    {founder.role}
                                </p>
                                <div className="mx-auto mt-4 h-1 w-12 bg-[#ff0044]" />
                            </motion.div>
                        </div>

                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Management;
