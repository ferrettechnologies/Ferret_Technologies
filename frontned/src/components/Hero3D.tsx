import { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, Stars, Text3D, Center } from "@react-three/drei";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import * as THREE from "three";

const AnimatedSphere = ({ position, color, speed = 1, distort = 0.4, scale = 1 }: { 
  position: [number, number, number]; 
  color: string; 
  speed?: number; 
  distort?: number;
  scale?: number;
}) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2 * speed;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3 * speed;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <Sphere ref={meshRef} args={[1, 64, 64]} position={position} scale={scale}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={distort}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
};

const FloatingCube = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[0.5, 0.5, 0.5]} />
      <meshStandardMaterial
        color="#8B5CF6"
        metalness={0.9}
        roughness={0.1}
        emissive="#8B5CF6"
        emissiveIntensity={0.2}
      />
    </mesh>
  );
};

const FloatingTorus = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.4;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
      <mesh ref={meshRef} position={position}>
        <torusGeometry args={[0.4, 0.15, 16, 32]} />
        <meshStandardMaterial
          color="#3B82F6"
          metalness={0.9}
          roughness={0.1}
          emissive="#3B82F6"
          emissiveIntensity={0.3}
        />
      </mesh>
    </Float>
  );
};

const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#8B5CF6" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#3B82F6" />
      <spotLight position={[0, 10, 0]} intensity={0.8} color="#06B6D4" angle={0.3} />

      <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />

      {/* Main spheres */}
      <AnimatedSphere position={[-3, 0, -2]} color="#8B5CF6" scale={1.5} distort={0.5} />
      <AnimatedSphere position={[3.5, 1, -3]} color="#3B82F6" scale={1.2} distort={0.4} speed={0.8} />
      <AnimatedSphere position={[0, -2, -4]} color="#06B6D4" scale={0.8} distort={0.3} speed={1.2} />

      {/* Floating shapes */}
      <FloatingCube position={[4, 2, -1]} />
      <FloatingCube position={[-4, -1, -2]} />
      <FloatingTorus position={[2, -2, -1]} />
      <FloatingTorus position={[-2, 2, -3]} />

      {/* Grid floor effect */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -4, 0]}>
        <planeGeometry args={[50, 50, 50, 50]} />
        <meshBasicMaterial color="#1a1a2e" wireframe opacity={0.3} transparent />
      </mesh>
    </>
  );
};

const Hero3D = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Canvas Background */}
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
      </div>

      {/* Gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background/60" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm text-sm text-muted-foreground mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Available for new projects
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.05] tracking-tight"
        >
          We Build{" "}
          <span className="gradient-text">Scalable</span>
          <br />
          Digital Products
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mt-6 md:mt-8 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
        >
          We are a premium software development agency specializing in building
          high-performance web & mobile applications for startups and enterprises.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="group px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-medium flex items-center gap-2 hover:opacity-90 transition-all neon-glow"
          >
            Get Started
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#portfolio"
            className="px-8 py-3.5 rounded-full border border-border text-foreground font-medium flex items-center gap-2 hover:border-primary/50 hover:bg-card/50 transition-all backdrop-blur-sm"
          >
            <Play size={16} />
            View Work
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero3D;
