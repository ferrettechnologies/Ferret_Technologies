import { motion } from "framer-motion";
import { Box, Layers } from "lucide-react";

interface ViewModeToggleProps {
  is3D: boolean;
  onToggle: () => void;
}

const ViewModeToggle = ({ is3D, onToggle }: ViewModeToggleProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <button
        onClick={onToggle}
        className="group relative flex items-center gap-3 px-4 py-3 rounded-full bg-card/80 backdrop-blur-xl border border-border hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.4)]"
      >
        {/* Background indicator */}
        <div className="absolute inset-1 rounded-full overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-primary/20"
            initial={false}
            animate={{
              x: is3D ? "50%" : "0%",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            style={{ width: "50%" }}
          />
        </div>

        {/* 2D Option */}
        <div
          className={`relative z-10 flex items-center gap-2 px-3 py-1.5 rounded-full transition-colors duration-300 ${
            !is3D ? "text-primary" : "text-muted-foreground"
          }`}
        >
          <Layers size={18} />
          <span className="text-sm font-medium">2D</span>
        </div>

        {/* 3D Option */}
        <div
          className={`relative z-10 flex items-center gap-2 px-3 py-1.5 rounded-full transition-colors duration-300 ${
            is3D ? "text-primary" : "text-muted-foreground"
          }`}
        >
          <Box size={18} />
          <span className="text-sm font-medium">3D</span>
        </div>
      </button>

      {/* Label tooltip */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 1.5 }}
        className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-lg bg-card/90 backdrop-blur-sm border border-border text-xs text-muted-foreground whitespace-nowrap"
      >
        Toggle view mode
      </motion.div>
    </motion.div>
  );
};

export default ViewModeToggle;
