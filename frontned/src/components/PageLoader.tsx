import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const LoadingAnimation = ({ onComplete }: { onComplete: () => void }) => {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0c0d20]"
        >
            {/* Blur background overlay */}
            <div className="absolute inset-0 backdrop-blur-xl bg-[#0c0d20]/95" />

            {/* Logo animation */}
            <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{
                    scale: [0.5, 1.2, 1],
                    opacity: [0, 1, 1],
                }}
                transition={{
                    duration: 1.5,
                    times: [0, 0.6, 1],
                    ease: "easeInOut"
                }}
                className="relative z-10"
            >
                <motion.img
                    src="/assets/brand/ferret-logo-light.svg"
                    alt="Ferret Technologies"
                    className="h-24 md:h-32 w-auto"
                    animate={{
                        filter: [
                            "brightness(1) drop-shadow(0 0 0px rgba(255, 0, 68, 0))",
                            "brightness(1.2) drop-shadow(0 0 30px rgba(255, 0, 68, 0.6))",
                            "brightness(1) drop-shadow(0 0 20px rgba(255, 0, 68, 0.4))",
                        ]
                    }}
                    transition={{
                        duration: 1.5,
                        times: [0, 0.5, 1],
                        ease: "easeInOut"
                    }}
                />
            </motion.div>

            {/* Animated circles/rings around logo */}
            <motion.div
                className="absolute"
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                    scale: [0, 2.5, 3],
                    opacity: [0, 0.4, 0]
                }}
                transition={{
                    duration: 1.5,
                    times: [0, 0.6, 1],
                    ease: "easeOut"
                }}
            >
                <div className="w-64 h-64 rounded-full border-2 border-[#ff0044]" />
            </motion.div>

            <motion.div
                className="absolute"
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                    scale: [0, 2, 2.5],
                    opacity: [0, 0.3, 0]
                }}
                transition={{
                    duration: 1.5,
                    delay: 0.1,
                    times: [0, 0.6, 1],
                    ease: "easeOut"
                }}
            >
                <div className="w-64 h-64 rounded-full border-2 border-[#4f68ff]" />
            </motion.div>

        </motion.div>
    );
};

export const PageLoader = ({ children, skip = false }: { children: React.ReactNode; skip?: boolean }) => {
    const [isLoading, setIsLoading] = useState(!skip);

    useEffect(() => {
        if (skip) {
            setIsLoading(false);
            return;
        }

        // Set loading to false after 2 seconds
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, [skip]);

    return (
        <>
            <AnimatePresence mode="wait">
                {isLoading && (
                    <LoadingAnimation key="loader" onComplete={() => setIsLoading(false)} />
                )}
            </AnimatePresence>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isLoading ? 0 : 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                {children}
            </motion.div>
        </>
    );
};

export default PageLoader;
