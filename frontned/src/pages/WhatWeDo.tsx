import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";
import {
    Smartphone,
    Cpu,
    Monitor,
    Watch,
    Palette,
    Globe,
    Terminal,
    ShieldCheck,
    Accessibility,
    Zap,
    Users,
    Bluetooth,
    Wifi,
    Code2,
    Tv,
    Apple,
    ArrowRight
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import TwinklingStars from "@/components/TwinklingStars";

type ContentPlace = "top-left" | "top-right" | "bottom-left" | "bottom-right" | "center";

interface ServiceBubble {
    id: string;
    label: string;
    slug: string;
    color: string;
    type: "center" | "corner" | "small-top" | "small-bottom" | "peripheral";
    x: number;
    y: number;
    width: number;
    height: number;
    contentPlace: ContentPlace;
    illustration?: "phone" | "watch" | "tablet" | "laptop" | "hand";
    labelSize?: "center" | "corner" | "small";
    shape?: string;
    hoverShape?: string;
    gradient?: string;
    titleFirst?: boolean;
    mobileX?: number;
    mobileY?: number;
    mobileWidth?: number;
    mobileHeight?: number;
}

const AndroidIcon = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
    <svg
        aria-hidden="true"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        className={className}
    >
        <path d="M7 10.25C7 7.9 9.02 6 11.5 6h1C14.98 6 17 7.9 17 10.25V16c0 1.1-.9 2-2 2H9c-1.1 0-2-.9-2-2v-5.75Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M9.1 6.7 7.9 5M14.9 6.7 16.1 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="10.25" cy="11.7" r="0.85" fill="currentColor" />
        <circle cx="13.75" cy="11.7" r="0.85" fill="currentColor" />
        <path d="M9.5 20v1.4M14.5 20v1.4M6.4 11.5v4.9M17.6 11.5v4.9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
);

const serviceBubbles: ServiceBubble[] = [
    { id: "mobile", label: "Mobile Development", slug: "mobile-development", color: "#3b62f6", type: "center", x: 0, y: 16, width: 404, height: 404, contentPlace: "center", illustration: "phone", labelSize: "center", shape: "46% 54% 49% 51% / 56% 50% 50% 44%", hoverShape: "50% 50% 46% 54% / 53% 47% 53% 47%", gradient: "linear-gradient(165deg,#6b82ff 0%,#4d67f8 48%,#3758df 100%)", titleFirst: true, mobileX: 176, mobileY: 108, mobileWidth: 392, mobileHeight: 392 },
    { id: "cutting-edge", label: "Cutting Edge", slug: "cutting-edge", color: "#4ade80", type: "corner", x: -214, y: -140, width: 374, height: 374, contentPlace: "top-left", illustration: "watch", labelSize: "corner", shape: "56% 44% 51% 49% / 48% 57% 43% 52%", hoverShape: "52% 48% 55% 45% / 51% 53% 47% 49%", gradient: "linear-gradient(165deg,#9be95f 0%,#62d663 56%,#47c35d 100%)", titleFirst: true, mobileX: -150, mobileY: -176, mobileWidth: 362, mobileHeight: 362 },
    { id: "digital", label: "Digital Transformation", slug: "digital-transformation", color: "#8b5cf6", type: "corner", x: 218, y: -138, width: 360, height: 360, contentPlace: "top-right", illustration: "tablet", labelSize: "corner", shape: "47% 53% 55% 45% / 52% 46% 54% 48%", hoverShape: "52% 48% 50% 50% / 55% 44% 56% 45%", gradient: "linear-gradient(165deg,#8f67f7 0%,#764fe7 55%,#653fda 100%)", titleFirst: true, mobileX: 182, mobileY: -180, mobileWidth: 360, mobileHeight: 360 },
    { id: "web", label: "Web Development", slug: "web-development", color: "#ff4350", type: "corner", x: -220, y: 186, width: 388, height: 388, contentPlace: "bottom-left", illustration: "laptop", labelSize: "corner", shape: "58% 42% 47% 53% / 53% 51% 49% 47%", hoverShape: "54% 46% 51% 49% / 56% 47% 53% 44%", gradient: "linear-gradient(165deg,#ff7982 0%,#ff4d5a 54%,#e63641 100%)", mobileX: -108, mobileY: 352, mobileWidth: 356, mobileHeight: 356 },
    { id: "design", label: "Design", slug: "design", color: "#f59e0b", type: "corner", x: 220, y: 188, width: 388, height: 388, contentPlace: "bottom-right", illustration: "hand", labelSize: "corner", shape: "45% 55% 53% 47% / 50% 58% 42% 50%", hoverShape: "49% 51% 55% 45% / 54% 52% 48% 46%", gradient: "linear-gradient(165deg,#ffc56a 0%,#f7ac33 54%,#ee9808 100%)", mobileX: -154, mobileY: 92, mobileWidth: 362, mobileHeight: 362 },
    { id: "ai-features", label: "AI Features Integration", slug: "ai-features", color: "#f43f5e", type: "small-top", x: 0, y: -238, width: 298, height: 162, contentPlace: "center", labelSize: "small", shape: "61% 39% 52% 48% / 56% 60% 40% 44%", hoverShape: "57% 43% 49% 51% / 53% 57% 43% 47%", gradient: "linear-gradient(165deg,#ff4d75 0%,#ff3f63 56%,#ef3358 100%)", mobileX: -188, mobileY: -414, mobileWidth: 246, mobileHeight: 126 },
    { id: "ai-assisted", label: "AI Assisted Development", slug: "ai-assisted", color: "#f43f5e", type: "small-bottom", x: 0, y: 270, width: 318, height: 152, contentPlace: "center", labelSize: "small", shape: "55% 45% 50% 50% / 61% 59% 41% 39%", hoverShape: "52% 48% 47% 53% / 58% 56% 44% 42%", gradient: "linear-gradient(165deg,#ff4d75 0%,#ff3f63 56%,#ef3358 100%)", mobileX: -214, mobileY: 594, mobileWidth: 244, mobileHeight: 126 },
    { id: "accessible", label: "Accessible & Compliant", slug: "accessible", color: "#e11d48", type: "peripheral", x: -412, y: -92, width: 184, height: 184, contentPlace: "center", labelSize: "small", shape: "66% 34% 58% 42% / 44% 63% 37% 56%", hoverShape: "61% 39% 53% 47% / 47% 59% 41% 53%", gradient: "linear-gradient(165deg,#ff4d7b 0%,#f43362 56%,#e61f4e 100%)", mobileX: -6, mobileY: -212, mobileWidth: 180, mobileHeight: 180 },
    { id: "discovery", label: "Discovery", slug: "discovery", color: "#0ea5e9", type: "peripheral", x: -344, y: 52, width: 196, height: 176, contentPlace: "center", labelSize: "small", shape: "45% 55% 62% 38% / 56% 45% 55% 44%", hoverShape: "49% 51% 58% 42% / 52% 48% 52% 48%", gradient: "linear-gradient(165deg,#35b8f4 0%,#18a8ed 56%,#0d93d4 100%)", mobileX: -14, mobileY: -46, mobileWidth: 188, mobileHeight: 154 },
    { id: "qa", label: "Quality Assurance", slug: "quality-assurance", color: "#a855f7", type: "peripheral", x: -420, y: 214, width: 178, height: 178, contentPlace: "center", labelSize: "small", shape: "53% 47% 49% 51% / 57% 46% 54% 43%", hoverShape: "50% 50% 46% 54% / 54% 49% 51% 46%", gradient: "linear-gradient(165deg,#b96bfa 0%,#a356f5 56%,#9348e4 100%)", mobileX: -272, mobileY: 432, mobileWidth: 176, mobileHeight: 176 },
    { id: "desktop", label: "Desktop Development", slug: "desktop-development", color: "#4ade80", type: "peripheral", x: 408, y: -18, width: 276, height: 158, contentPlace: "center", labelSize: "small", shape: "58% 42% 52% 48% / 62% 56% 44% 38%", hoverShape: "54% 46% 49% 51% / 58% 52% 48% 42%", gradient: "linear-gradient(165deg,#8ae45f 0%,#69d94e 56%,#49c944 100%)", mobileX: 158, mobileY: 344, mobileWidth: 224, mobileHeight: 124 },
    { id: "wearables", label: "Wearable Devices", slug: "wearables", color: "#ff3b99", type: "peripheral", x: 404, y: 120, width: 184, height: 162, contentPlace: "center", labelSize: "small", shape: "41% 59% 47% 53% / 63% 40% 60% 37%", hoverShape: "45% 55% 50% 50% / 60% 44% 56% 40%", gradient: "linear-gradient(165deg,#ff74b6 0%,#ff499f 56%,#e62e86 100%)", mobileX: 6, mobileY: -386, mobileWidth: 182, mobileHeight: 160 },
];

const bubbleSurfaceById: Record<string, string> = {
    mobile: "radial-gradient(120% 100% at 30% 16%,rgba(146,170,255,0.46) 0%,rgba(146,170,255,0) 55%),radial-gradient(90% 80% at 78% 90%,rgba(42,74,224,0.62) 0%,rgba(42,74,224,0) 64%),linear-gradient(165deg,#6b82ff 0%,#4d67f8 48%,#3758df 100%)",
    "cutting-edge": "radial-gradient(130% 90% at 20% 12%,rgba(212,255,150,0.52) 0%,rgba(212,255,150,0) 54%),radial-gradient(90% 80% at 82% 86%,rgba(49,161,64,0.46) 0%,rgba(49,161,64,0) 62%),linear-gradient(165deg,#9be95f 0%,#62d663 56%,#47c35d 100%)",
    digital: "radial-gradient(120% 95% at 24% 14%,rgba(182,143,255,0.47) 0%,rgba(182,143,255,0) 54%),radial-gradient(90% 90% at 78% 84%,rgba(90,52,198,0.56) 0%,rgba(90,52,198,0) 64%),linear-gradient(165deg,#8f67f7 0%,#764fe7 55%,#653fda 100%)",
    web: "radial-gradient(115% 94% at 24% 18%,rgba(255,188,194,0.52) 0%,rgba(255,188,194,0) 54%),radial-gradient(90% 90% at 82% 88%,rgba(215,35,46,0.48) 0%,rgba(215,35,46,0) 64%),linear-gradient(165deg,#ff7982 0%,#ff4d5a 54%,#e63641 100%)",
    design: "radial-gradient(120% 98% at 26% 16%,rgba(255,236,182,0.5) 0%,rgba(255,236,182,0) 56%),radial-gradient(90% 85% at 80% 86%,rgba(214,124,0,0.43) 0%,rgba(214,124,0,0) 64%),linear-gradient(165deg,#ffc56a 0%,#f7ac33 54%,#ee9808 100%)",
    "ai-features": "radial-gradient(115% 78% at 24% 16%,rgba(255,148,172,0.48) 0%,rgba(255,148,172,0) 52%),radial-gradient(80% 70% at 82% 90%,rgba(218,27,84,0.44) 0%,rgba(218,27,84,0) 62%),linear-gradient(165deg,#ff4d75 0%,#ff3f63 56%,#ef3358 100%)",
    "ai-assisted": "radial-gradient(115% 78% at 24% 16%,rgba(255,148,172,0.48) 0%,rgba(255,148,172,0) 52%),radial-gradient(80% 70% at 82% 90%,rgba(218,27,84,0.44) 0%,rgba(218,27,84,0) 62%),linear-gradient(165deg,#ff4d75 0%,#ff3f63 56%,#ef3358 100%)",
    accessible: "radial-gradient(120% 88% at 20% 14%,rgba(255,162,183,0.44) 0%,rgba(255,162,183,0) 56%),radial-gradient(80% 72% at 84% 88%,rgba(208,23,73,0.42) 0%,rgba(208,23,73,0) 63%),linear-gradient(165deg,#ff4d7b 0%,#f43362 56%,#e61f4e 100%)",
    discovery: "radial-gradient(120% 88% at 24% 12%,rgba(132,220,255,0.44) 0%,rgba(132,220,255,0) 56%),radial-gradient(88% 76% at 82% 86%,rgba(12,133,193,0.4) 0%,rgba(12,133,193,0) 62%),linear-gradient(165deg,#35b8f4 0%,#18a8ed 56%,#0d93d4 100%)",
    qa: "radial-gradient(120% 88% at 18% 12%,rgba(214,171,255,0.45) 0%,rgba(214,171,255,0) 54%),radial-gradient(84% 72% at 82% 86%,rgba(123,57,206,0.42) 0%,rgba(123,57,206,0) 62%),linear-gradient(165deg,#b96bfa 0%,#a356f5 56%,#9348e4 100%)",
    desktop: "radial-gradient(120% 88% at 22% 14%,rgba(192,255,152,0.44) 0%,rgba(192,255,152,0) 56%),radial-gradient(88% 74% at 82% 86%,rgba(62,162,47,0.4) 0%,rgba(62,162,47,0) 62%),linear-gradient(165deg,#8ae45f 0%,#69d94e 56%,#49c944 100%)",
    wearables: "radial-gradient(120% 88% at 20% 14%,rgba(255,178,210,0.44) 0%,rgba(255,178,210,0) 56%),radial-gradient(88% 76% at 84% 86%,rgba(206,24,103,0.42) 0%,rgba(206,24,103,0) 62%),linear-gradient(165deg,#ff74b6 0%,#ff499f 56%,#e62e86 100%)",
};

const zIndexByType: Record<ServiceBubble["type"], number> = {
    peripheral: 22,
    corner: 15,
    "small-top": 28,
    "small-bottom": 28,
    center: 50,
};

const contentPlaceClasses: Record<ContentPlace, string> = {
    center: "items-center justify-center text-center",
    "top-left": "items-start justify-start text-left pt-8 pl-8",
    "top-right": "items-end justify-start text-right pt-8 pr-8",
    "bottom-left": "items-start justify-end text-left pb-8 pl-8",
    "bottom-right": "items-end justify-end text-right pb-8 pr-8",
};

const labelLinesById: Record<string, string[]> = {
    mobile: ["Mobile", "Development"],
    "cutting-edge": ["Cutting Edge"],
    digital: ["Digital", "Transformation"],
    web: ["Web", "Development"],
    design: ["Design"],
    "ai-features": ["AI Features", "Integration"],
    "ai-assisted": ["AI Assisted", "Development"],
    accessible: ["Accessible &", "Compliant"],
    discovery: ["Discovery"],
    qa: ["Quality", "Assurance"],
    desktop: ["Desktop", "Development"],
    wearables: ["Wearable", "Devices"],
};

const labelSizeClass: Record<NonNullable<ServiceBubble["labelSize"]>, string> = {
    center: "text-[18px] leading-[1.1] md:text-[32px]",
    corner: "text-[16px] leading-[1.1] md:text-[22px]",
    small: "text-[12px] leading-[1.15] md:text-[16px]",
};

const BubbleCluster = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isMobileScreen, setIsMobileScreen] = React.useState(false);
    React.useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 767px)");
        const onViewportChange = (event: MediaQueryListEvent) => setIsMobileScreen(event.matches);

        setIsMobileScreen(mediaQuery.matches);
        mediaQuery.addEventListener("change", onViewportChange);

        return () => mediaQuery.removeEventListener("change", onViewportChange);
    }, []);

    const sorted = [...serviceBubbles].sort((a, b) => zIndexByType[a.type] - zIndexByType[b.type]);
    const clusterXScale = isMobileScreen ? 1.0 : 1.1;
    const clusterScale = isMobileScreen ? 0.52 : 0.92;
    const clusterWidthScale = isMobileScreen ? 1.0 : 1.08;

    const renderLabel = (bubble: ServiceBubble) => {
        const lines = labelLinesById[bubble.id] ?? [bubble.label];
        const sizeClass = labelSizeClass[bubble.labelSize ?? "small"];

        return (
            <span
                className={`font-body font-extrabold tracking-[-0.01em] text-white ${sizeClass}`}
                style={{ textShadow: "0 2px 10px rgba(0,0,0,0.25)" }}
            >
                {lines.map((line, index) => (
                    <React.Fragment key={`${bubble.id}-${line}`}>
                        {line}
                        {index < lines.length - 1 ? <br /> : null}
                    </React.Fragment>
                ))}
            </span>
        );
    };

    const renderBubbleBackdrop = (bubble: ServiceBubble) => {
        if (bubble.id === "mobile") {
            return (
                <>
                    <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full opacity-45">
                        <path d="M14 84 C25 66 33 64 42 71 C50 77 59 92 68 88" stroke="rgba(255,255,255,0.2)" strokeWidth="0.6" fill="none" />
                        <path d="M64 79 C74 63 82 61 88 67" stroke="rgba(255,255,255,0.2)" strokeWidth="0.6" fill="none" />
                        <path d="M23 73 L23 82 M26 73 L26 82 M29 73 L29 82 M32 73 L32 82" stroke="rgba(255,255,255,0.34)" strokeWidth="0.4" />
                        <path d="M69 76 L69 85 M72 76 L72 85 M75 76 L75 85 M78 76 L78 85" stroke="rgba(255,255,255,0.34)" strokeWidth="0.4" />
                    </svg>
                    <div className="absolute left-[7%] bottom-[12%] h-[40%] w-[22%] rounded-[40%] bg-white/8 blur-[1px] hidden md:block" />
                    <div className="absolute right-[6%] bottom-[10%] h-[42%] w-[24%] rounded-[42%] bg-white/7 blur-[1px] hidden md:block" />
                </>
            );
        }

        if (bubble.id === "cutting-edge") {
            return (
                <>
                    <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full opacity-45">
                        <path d="M8 58 C17 52 24 57 32 50 C41 43 53 43 62 49" stroke="rgba(255,255,255,0.24)" strokeWidth="0.45" fill="none" />
                        <path d="M8 66 C18 60 27 65 36 58 C46 50 57 52 68 58" stroke="rgba(255,255,255,0.22)" strokeWidth="0.45" fill="none" />
                        <path d="M8 74 C18 68 29 72 40 66 C50 60 62 61 75 70" stroke="rgba(255,255,255,0.2)" strokeWidth="0.45" fill="none" />
                    </svg>
                    <div className="absolute left-[8%] top-[43%] h-[34%] w-[34%] rounded-full border border-white/25" />
                    <div className="absolute left-[14%] top-[49%] h-[24%] w-[24%] rounded-full border border-white/18" />
                </>
            );
        }

        if (bubble.id === "digital") {
            return (
                <>
                    <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full opacity-5">
                        <path d="M15 26 L87 62" stroke="white" strokeWidth="0.8" />
                    </svg>
                    <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full opacity-45">
                        <ellipse cx="58" cy="71" rx="19" ry="8" fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth="0.6" />
                        <ellipse cx="58" cy="71" rx="24" ry="12" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="0.5" />
                        <path d="M47 58 C54 56 60 56 67 58" stroke="rgba(255,255,255,0.45)" strokeWidth="0.5" fill="none" />
                    </svg>
                    <div className="absolute left-[42%] top-[34%] h-[38%] w-[34%] rounded-[44px] border border-white/25" />
                </>
            );
        }

        if (bubble.id === "web") {
            return (
                <>
                    <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full opacity-45">
                        <circle cx="32" cy="70" r="33" fill="none" stroke="rgba(255,255,255,0.22)" strokeWidth="0.5" />
                        <circle cx="45" cy="74" r="27" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="0.45" />
                    </svg>
                </>
            );
        }

        if (bubble.id === "design") {
            return (
                <>
                    <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full opacity-45">
                        <path d="M61 40 L83 54" stroke="rgba(255,255,255,0.45)" strokeWidth="0.8" />
                        <path d="M58 43 L80 57" stroke="rgba(255,255,255,0.22)" strokeWidth="0.5" />
                        <path d="M35 78 C40 66 47 61 57 63 C63 65 67 65 74 62" stroke="rgba(255,255,255,0.6)" strokeWidth="0.8" fill="none" />
                        <rect x="71" y="62" width="11" height="14" rx="2" fill="none" stroke="rgba(255,255,255,0.65)" strokeWidth="0.65" />
                    </svg>
                    <div className="absolute right-[18%] bottom-[16%] h-[22%] w-[18%] rounded-[12px] border border-white/40" />
                </>
            );
        }

        if (bubble.id === "ai-features" || bubble.id === "ai-assisted") {
            return <div className="absolute left-[8%] top-[10%] h-[45%] w-[50%] rounded-full bg-white/10 blur-[1px] hidden md:block" />;
        }

        if (bubble.id === "accessible") {
            return (
                <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full opacity-55">
                    {Array.from({ length: 4 }).map((_, row) =>
                        Array.from({ length: 4 }).map((_, col) => (
                            <circle key={`a-${row}-${col}`} cx={20 + col * 4.6} cy={16 + row * 4.6} r="0.9" fill="rgba(255,255,255,0.75)" />
                        ))
                    )}
                </svg>
            );
        }

        if (bubble.id === "desktop" || bubble.id === "wearables") {
            return (
                <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full opacity-55">
                    {Array.from({ length: 4 }).map((_, row) =>
                        Array.from({ length: 4 }).map((_, col) => (
                            <circle key={`d-${row}-${col}`} cx={78 + col * 3.8} cy={58 + row * 3.8} r="0.8" fill="rgba(255,255,255,0.72)" />
                        ))
                    )}
                </svg>
            );
        }

        if (bubble.id === "discovery") {
            return <div className="absolute right-[6%] top-[28%] h-[44%] w-[34%] rounded-full border border-white/20" />;
        }

        if (bubble.id === "qa") {
            return (
                <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full opacity-[0.04]">
                    <circle cx="28" cy="28" r="18" fill="white" />
                </svg>
            );
        }

        return null;
    };

    const renderIllustration = (bubble: ServiceBubble) => {
        const isMobileSize = typeof window !== 'undefined' && window.innerWidth < 768;

        if (bubble.illustration === "phone") {
            return (
                <div className={`relative ${isMobileSize ? 'h-40 w-36 scale-75' : 'h-64 w-56'} flex items-center justify-center`}>
                    <svg viewBox="0 0 200 250" className="h-full drop-shadow-[0_12px_22px_rgba(0,0,0,0.4)]">
                        <rect x="62" y="24" width="78" height="156" rx="18" fill="rgba(7,12,44,0.74)" stroke="white" strokeOpacity="0.78" strokeWidth="2.5" />
                        <rect x="66" y="30" width="70" height="140" rx="14" fill="rgba(57,86,248,0.6)" stroke="white" strokeOpacity="0.3" strokeWidth="1.2" />
                        <rect x="92" y="36" width="20" height="3.5" rx="2" fill="rgba(255,255,255,0.65)" />
                        <circle cx="101" cy="182" r="5" fill="rgba(255,255,255,0.65)" />
                        <circle cx="73" cy="124" r="6.3" fill="#22d3ee" fillOpacity="0.8" stroke="white" strokeOpacity="0.8" />
                        <path d="M73 194 C85 176 95 177 101 194 L131 250 L90 250 Z" fill="white" fillOpacity="0.88" />
                    </svg>
                    <div className="absolute top-[84px] right-[28px] h-10 w-28 rounded-xl bg-[#ffd32a] shadow-[0_8px_20px_rgba(0,0,0,0.28)] hidden md:block">
                        <div className="ml-4 mt-2.5 h-2.5 w-14 rounded-full bg-white/85" />
                    </div>
                    <div className="absolute top-[104px] right-[14px] h-11 w-20 rounded-xl bg-white shadow-[0_8px_18px_rgba(0,0,0,0.24)] hidden md:block">
                        <div className="ml-2 mt-3 h-3 w-12 rounded-full bg-[#f3f4f6]" />
                    </div>
                </div>
            );
        }

        if (bubble.illustration === "watch") {
            return (
                <div className={`relative mt-4 ${isMobileSize ? 'h-24 w-24' : 'h-44 w-44'} flex items-center justify-center`}>
                    <svg viewBox="0 0 180 180" className="h-full rotate-[-18deg]">
                        <rect x="72" y="6" width="36" height="56" rx="10" fill="white" fillOpacity="0.24" />
                        <rect x="72" y="118" width="36" height="56" rx="10" fill="white" fillOpacity="0.24" />
                        <circle cx="90" cy="90" r="58" fill="rgba(255,255,255,0.12)" stroke="white" strokeOpacity="0.72" strokeWidth="2.4" />
                        <circle cx="90" cy="90" r="44" fill="rgba(45,178,72,0.48)" stroke="white" strokeOpacity="0.76" strokeWidth="1.8" />
                        <circle cx="90" cy="90" r="23" fill="none" stroke="white" strokeOpacity="0.62" strokeWidth="1.2" strokeDasharray="2 2" />
                    </svg>
                </div>
            );
        }

        if (bubble.illustration === "tablet") {
            return (
                <div className={`relative mt-4 ${isMobileSize ? 'h-24 w-32 -translate-y-3' : 'h-44 w-52'} flex items-center justify-center`}>
                    <svg viewBox="0 0 220 220" className="h-full">
                        <g transform="rotate(-32 110 110)">
                            <rect x="66" y="34" width="92" height="142" rx="16" fill="rgba(255,255,255,0.22)" stroke="white" strokeOpacity="0.86" strokeWidth="2.2" />
                            <rect x="72" y="48" width="80" height="102" rx="8" fill="rgba(255,255,255,0.78)" />
                            <circle cx="112" cy="162" r="4.5" fill="rgba(118,80,223,0.86)" />
                        </g>
                    </svg>
                </div>
            );
        }

        if (bubble.illustration === "laptop") {
            return (
                <div className={`relative mb-2 ${isMobileSize ? 'h-24 w-32 translate-y-3' : 'h-36 w-52'} flex items-center justify-center`}>
                    <svg viewBox="0 0 220 160" className="h-full">
                        <rect x="56" y="36" width="108" height="66" rx="8" fill="rgba(255,255,255,0.2)" stroke="white" strokeOpacity="0.82" strokeWidth="2.2" />
                        <rect x="62" y="42" width="96" height="52" rx="4" fill="rgba(255,255,255,0.26)" />
                        <path d="M44 102 L176 102 L194 118 L26 118 Z" fill="rgba(255,255,255,0.48)" />
                        <rect x="98" y="107" width="24" height="4" rx="2" fill="rgba(255,255,255,0.92)" />
                    </svg>
                </div>
            );
        }

        if (bubble.illustration === "hand") {
            return (
                <div className={`relative mb-2 ${isMobileSize ? 'h-28 w-32' : 'h-44 w-48'} flex items-center justify-center`}>
                    <svg viewBox="0 0 220 180" className="h-full">
                        <path d="M40 164 C58 121 81 105 109 113 C121 116 132 119 145 116 C160 113 169 104 179 88" stroke="white" strokeWidth="4" fill="none" strokeLinecap="round" />
                        <circle cx="106" cy="96" r="22" fill="rgba(255,255,255,0.1)" stroke="white" strokeOpacity="0.82" strokeWidth="1.8" />
                        <rect x="155" y="58" width="34" height="42" rx="5" fill="rgba(255,255,255,0.26)" stroke="white" strokeOpacity="0.9" strokeWidth="1.5" />
                    </svg>
                </div>
            );
        }

        return null;
    };

    return (
        <section className="relative min-h-[550px] md:min-h-[650px] overflow-hidden pt-8 pb-20 z-10">
            <div className="relative w-full flex items-center justify-center">
                <div className="relative h-[550px] md:h-[650px] w-full" style={{ maxWidth: "100%" }}>
                    {sorted.map((bubble) => {
                        const labelNode = renderLabel(bubble);
                        const illustrationNode = renderIllustration(bubble);
                        const isMobile = bubble.id === "mobile";
                        const movingIllustrationNode = illustrationNode ? (
                            <div className="transition-transform duration-300 ease-out group-hover:-translate-y-2 group-hover:translate-x-1">
                                {illustrationNode}
                            </div>
                        ) : null;

                        return (
                            <div
                                key={bubble.id}
                                className="absolute left-1/2 top-1/2"
                                style={{
                                    transform: `translate(calc(-50% + ${(isMobileScreen ? (bubble.mobileX ?? bubble.x) : bubble.x) * clusterXScale * clusterScale}px), calc(-50% + ${(isMobileScreen ? (bubble.mobileY ?? bubble.y) : bubble.y) * clusterScale}px))`,
                                    zIndex: zIndexByType[bubble.type],
                                }}
                            >
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1, rotate: 0, borderRadius: bubble.shape ?? "50%" }}
                                    whileHover={{
                                        scale: bubble.type === "center" ? 1.05 : bubble.type === "peripheral" ? 1.07 : 1.06,
                                        rotate: bubble.type === "center" ? 2.2 : bubble.type === "peripheral" ? 5.4 : 3.8,
                                        borderRadius: bubble.hoverShape ?? bubble.shape ?? "50%",
                                    }}
                                    transition={{
                                        opacity: { duration: 0.35, ease: "easeOut" },
                                        scale: { duration: 0.3, ease: "easeOut" },
                                        rotate: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
                                        borderRadius: { duration: 0.45, ease: "easeOut" },
                                    }}
                                    whileTap={{ scale: 0.99 }}
                                    onClick={() => {
                                        navigate(`/services/${bubble.slug}`, { state: { from: location.pathname } });
                                    }}
                                    className="group relative flex cursor-pointer overflow-hidden rounded-[50%] will-change-transform"
                                    style={{
                                        width: (isMobileScreen ? (bubble.mobileWidth ?? bubble.width) : bubble.width) * clusterScale * clusterWidthScale,
                                        height: (isMobileScreen ? (bubble.mobileHeight ?? bubble.height) : bubble.height) * clusterScale,
                                        background: bubbleSurfaceById[bubble.id] ?? bubble.gradient ?? bubble.color,
                                        borderRadius: bubble.shape ?? "50%",
                                        boxShadow: "0 24px 65px -20px rgba(0,0,0,0.52), inset 0 2px 10px rgba(255,255,255,0.16), inset 0 -8px 24px rgba(0,0,0,0.16)",
                                    }}
                                >
                                    <div className="absolute inset-0 z-[30] pointer-events-none">
                                        {renderBubbleBackdrop(bubble)}
                                    </div>
                                    {isMobileScreen ? (
                                        isMobile ? (
                                            <div className="relative z-[100] flex h-full w-full flex-col items-center px-6 pt-7 pb-7 pointer-events-none">
                                                <div className="mb-1 flex items-center gap-1.5 transition-transform duration-300 ease-out group-hover:-translate-y-1 group-hover:translate-x-1">
                                                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
                                                        <Apple size={12} className="text-white" />
                                                    </span>
                                                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
                                                        <Smartphone size={12} className="text-white" />
                                                    </span>
                                                </div>
                                                <div className="mb-2 text-center">{labelNode}</div>
                                                <div className="transition-transform duration-300 ease-out group-hover:-translate-y-2 group-hover:translate-x-1 scale-[0.68] origin-top">
                                                    {illustrationNode}
                                                </div>
                                            </div>
                                        ) : bubble.type === "corner" ? (
                                            <div className="relative z-[100] flex h-full w-full flex-col items-center justify-center px-4 py-4 text-center pointer-events-none">
                                                {bubble.titleFirst ? (
                                                    <>
                                                        {labelNode}
                                                        <div className="mt-2 scale-[0.9]">{movingIllustrationNode}</div>
                                                    </>
                                                ) : (
                                                    <>
                                                        <div className="mb-2 scale-[0.9]">{movingIllustrationNode}</div>
                                                        {labelNode}
                                                    </>
                                                )}
                                            </div>
                                        ) : (
                                            <div className="relative z-[100] flex h-full w-full items-center justify-center px-4 py-3 text-center pointer-events-none">
                                                {labelNode}
                                            </div>
                                        )
                                    ) : isMobile ? (
                                        <div className="relative z-[100] flex h-full w-full flex-col items-center px-6 pt-7 pb-7 pointer-events-none">
                                            <div className="mb-3 flex items-center gap-2 transition-transform duration-300 ease-out group-hover:-translate-y-1 group-hover:translate-x-1">
                                                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
                                                    <Apple size={16} className="text-white" />
                                                </span>
                                                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
                                                    <Smartphone size={16} className="text-white" />
                                                </span>
                                            </div>
                                            {labelNode}
                                            <div className="mt-5 transition-transform duration-300 ease-out group-hover:-translate-y-2 group-hover:translate-x-1">{illustrationNode}</div>
                                        </div>
                                    ) : (
                                        <div className="relative z-[100] flex h-full w-full flex-col px-6 py-5 pointer-events-none">
                                            <div className={`flex h-full w-full flex-col ${contentPlaceClasses[bubble.contentPlace]} ${bubble.id === "web" ? "translate-x-2 translate-y-3" : ""}`}>
                                                {isMobileScreen ? (
                                                    <>
                                                        <div className="mb-4 transition-transform duration-300 ease-out group-hover:-translate-y-2 group-hover:translate-x-1 scale-[0.65]">
                                                            {illustrationNode}
                                                        </div>
                                                        {labelNode}
                                                    </>
                                                ) : bubble.titleFirst ? (
                                                    <>
                                                        {labelNode}
                                                        {movingIllustrationNode}
                                                    </>
                                                ) : (
                                                    <>
                                                        {movingIllustrationNode}
                                                        {labelNode}
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                    )}
                                </motion.div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

type VerticalIconProps = {
    size?: number;
    className?: string;
};

const IndustryFocusedIcon = ({ size = 36, className }: VerticalIconProps) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
    >
        <path d="M8 38V16.5C8 15.1 9.1 14 10.5 14H20.5C21.9 14 23 15.1 23 16.5V38" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M25 38V21.5C25 20.1 26.1 19 27.5 19H37.5C38.9 19 40 20.1 40 21.5V38" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 38H40" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M12.5 20.5H18.5M12.5 25.5H18.5M12.5 30.5H18.5M29 25H36M29 30H36" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" />
        <path d="M15.5 38V33.5M32.5 38V33.5" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" />
    </svg>
);

const TailoredITIcon = ({ size = 36, className }: VerticalIconProps) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
    >
        <path d="M8 14H40M8 24H40M8 34H40" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="17" cy="14" r="3.5" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="31" cy="24" r="3.5" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="22" cy="34" r="3.5" stroke="currentColor" strokeWidth="2.5" />
        <path d="M34.5 9.5L38.5 13.5L31.5 20.5L27.5 16.5L34.5 9.5Z" stroke="currentColor" strokeWidth="2.3" strokeLinejoin="round" />
    </svg>
);

const ComprehensiveTechnologyIcon = ({ size = 36, className }: VerticalIconProps) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
    >
        <rect x="17" y="17" width="14" height="14" rx="3" stroke="currentColor" strokeWidth="2.5" />
        <path d="M24 8V14M24 34V40M8 24H14M34 24H40" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M13.5 13.5L17.5 17.5M34.5 34.5L30.5 30.5M34.5 13.5L30.5 17.5M13.5 34.5L17.5 30.5" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" />
        <circle cx="24" cy="24" r="3" stroke="currentColor" strokeWidth="2.3" />
    </svg>
);

const ClientCentricInnovationIcon = ({ size = 36, className }: VerticalIconProps) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
    >
        <circle cx="24" cy="24" r="14" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="24" cy="24" r="8" stroke="currentColor" strokeWidth="2.3" />
        <circle cx="24" cy="24" r="2.5" fill="currentColor" />
        <path d="M24 7V11M24 37V41M7 24H11M37 24H41" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" />
        <path d="M30 18L39 9M34 9H39V14" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const verticals = [
    {
        label: "Industry-Focused Solutions",
        icon: IndustryFocusedIcon,
        color: "from-blue-500 to-indigo-600",
        description: "We develop scalable software and applications across multiple industries, leveraging cutting-edge technologies to meet unique client needs and regulatory standards."
    },
    {
        label: "Tailored IT Services",
        icon: TailoredITIcon,
        color: "from-rose-400 to-rose-600",
        description: "Our expertise spans web design, mobile apps, AI/ML, cloud, and cybersecurity, delivering solutions customized to each industry’s operational and compliance requirements."
    },
    {
        label: "Comprehensive Technology Offerings",
        icon: ComprehensiveTechnologyIcon,
        color: "from-violet-500 to-fuchsia-600",
        description: "From SaaS products to DevOps and enterprise applications, we create solutions that enhance efficiency, user experience, and industry-specific compliance.",
        hasLearnMore: true
    },
    {
        label: "Client-Centric Innovation",
        icon: ClientCentricInnovationIcon,
        color: "from-orange-400 to-orange-600",
        description: "We combine agile development, advanced technologies, and industry insights to craft software solutions that address the unique challenges of each sector we serve."
    },
];

const techItems = [
    {
        id: "ble",
        label: "Bluetooth Low Energy",
        icon: Bluetooth,
        color: "bg-[#3b82f6]",
        detail: "specializes in BLE device solutions, serving both industrial sensor applications and consumer health technology markets."
    },
    {
        id: "ibeacon",
        label: "iBeacon",
        icon: Wifi,
        color: "bg-[#22c55e]",
        detail: "App for conferences leverages personal badges with integrated iBeacons to help trade show organizers engage visitors and get valuable metrics."
    },
    {
        id: "sdk",
        label: "SDK",
        icon: Code2,
        color: "bg-[#f59e0b]",
        detail: "Our team builds custom SDKs designed to ensure smooth interoperability with third-party services and connected hardware devices."
    },
    {
        id: "smart-tv",
        label: "Smart TV",
        icon: Tv,
        color: "bg-[#8b5cf6]",
        detail: "Smart TV apps enhance functionality and user engagement, and we deliver exceptional viewing experiences across all major smart TV platforms."
    },
    {
        id: "wearables",
        label: "Wearable Devices",
        icon: Watch,
        color: "bg-[#06b6d4]",
        detail: "We develop wearable apps that maximize hardware potential, from custom watch face design to sophisticated biometric data analysis."
    },
    {
        id: "androidtv",
        label: "Android TV",
        icon: AndroidIcon,
        color: "bg-[#f43f5e]",
        detail: "Our Android TV apps employ sophisticated video and audio algorithms to ensure optimal playback quality and superior user experiences."
    },
];

const mobileTechPanelBackgroundById: Record<string, string> = {
    ble: "linear-gradient(152deg,#42c1ff 0%,#2b8fff 48%,#1f64f2 100%)",
    ibeacon: "linear-gradient(152deg,#6eea44 0%,#35c935 52%,#1fa62c 100%)",
    sdk: "linear-gradient(152deg,#ffd178 0%,#f4a642 52%,#ea8d2d 100%)",
    "smart-tv": "linear-gradient(152deg,#a67bff 0%,#875eff 52%,#6c40f0 100%)",
    wearables: "linear-gradient(152deg,#3bd4e8 0%,#1db6dd 52%,#0f97c8 100%)",
    androidtv: "linear-gradient(152deg,#ff6f89 0%,#f44a66 52%,#de3553 100%)",
};

const WhatWeDo = () => {
    const navigate = useNavigate();
    const [isMobileScreen, setIsMobileScreen] = React.useState(false);
    React.useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 767px)");
        const onViewportChange = (event: MediaQueryListEvent) => setIsMobileScreen(event.matches);

        setIsMobileScreen(mediaQuery.matches);
        mediaQuery.addEventListener("change", onViewportChange);

        return () => mediaQuery.removeEventListener("change", onViewportChange);
    }, []);

    const [emblaRefVerticals] = useEmblaCarousel({ loop: true, align: "center", skipSnaps: false });

    return (
        <div className="min-h-screen bg-[#161618] text-white ferret-home">
            <Navbar />

            {/* Combined Hero & Bubble Section with shared background */}
            <div className="relative">
                <div className="absolute inset-x-0 top-0 z-0 h-full w-full">
                    <div className="absolute inset-0 bg-[#161618]" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(48,64,156,0.15)_0%,rgba(12,13,32,0)_70%)]" />
                    <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#ffffff 0.5px, transparent 0.5px)', backgroundSize: '30px 30px' }} />
                </div>

                <TwinklingStars />

                <div className="absolute inset-x-0 top-0 z-[1] h-full w-full pointer-events-none">
                    <motion.div animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute left-[10%] top-[10%] h-3 w-3 rotate-45 border border-white/20 bg-white/5" />
                    <motion.div animate={{ y: [0, 20, 0], opacity: [0.2, 0.5, 0.2] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute right-[15%] top-[15%] h-2 w-2 rotate-45 border border-white/20 bg-white/5" />
                    <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }} className="absolute left-[20%] top-[40%] h-4 w-4 rotate-45 border border-white/20 bg-white/5" />
                    <motion.div animate={{ rotate: [45, 225, 45], opacity: [0.1, 0.3, 0.1] }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} className="absolute right-[25%] top-[50%] h-6 w-6 border border-white/10" />
                </div>

                <section className="relative flex flex-col items-center justify-start overflow-hidden px-4 pt-32 pb-0 text-center z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="relative z-10 max-w-5xl"
                    >
                        <h1 className="mb-4 font-display text-4xl font-black leading-[1.05] tracking-tight text-white md:text-5xl lg:text-6xl">
                            Idea-to-Launch Development Services
                        </h1>
                        <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
                            From idea to deployment and support, Ferret Technologies guides you through every phase of development, making new product launches and enhancements to existing solutions seamless.
                        </p>
                    </motion.div>
                </section>

                <BubbleCluster />
            </div>

            {/* Verticals Section */}
            <section className="bg-[#161618] py-24 relative overflow-hidden">
                <div className="absolute top-1/2 left-1/4 -translate-y-1/2 opacity-5">
                    <Users size={300} />
                </div>
                <div className="container mx-auto px-6 text-center max-w-6xl relative z-10">
                    <h2 className="mb-3 font-display text-4xl font-black md:text-5xl">Verticals</h2>
                    <p className="mx-auto mb-12 max-w-2xl text-sm md:text-base text-white/60">
                        We have extensive experience developing apps across diverse industries, delivering solutions tailored to meet specific regulatory and business requirements.
                    </p>
                    {isMobileScreen ? (
                        <div className="embla overflow-hidden" ref={emblaRefVerticals}>
                            <div className="embla__container flex">
                                {verticals.map((v, i) => {
                                    const Icon = v.icon;
                                    return (
                                        <div key={i} className="embla__slide flex-[0_0_85%] min-w-0 pl-4">
                                            <div
                                                className={`group relative flex h-[480px] flex-col items-center justify-center overflow-hidden rounded-[32px] bg-gradient-to-b ${v.color} p-6 text-white`}
                                            >
                                                <div className="flex flex-col items-center">
                                                    <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-white text-rose-500 shadow-xl">
                                                        <Icon size={36} />
                                                    </div>
                                                    <h3 className="text-center text-xl font-black uppercase leading-tight px-2">
                                                        {v.label}
                                                    </h3>
                                                    <p className="mt-8 text-sm leading-relaxed opacity-90 font-medium text-center px-4">
                                                        {v.description}
                                                    </p>
                                                    <button className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-xs font-bold text-rose-500">
                                                        Learn More <Zap size={12} />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                            <div className="mt-8 flex justify-center gap-2">
                                {verticals.map((_, i) => (
                                    <div key={i} className="h-1.5 w-1.5 rounded-full bg-white/20" />
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
                            {verticals.map((v, i) => {
                                const Icon = v.icon;
                                return (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        className={`group relative flex h-[500px] flex-col items-center justify-center overflow-hidden rounded-[32px] bg-gradient-to-b ${v.color} p-6 text-white transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20`}
                                    >
                                        <div className="flex flex-col items-center transition-all duration-500 group-hover:-translate-y-24">
                                            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-white text-rose-500 shadow-xl">
                                                <Icon size={36} />
                                            </div>
                                            <h3 className="text-center text-xl font-black uppercase leading-tight md:text-2xl px-2">
                                                {v.label.split(' ').map((word, idx) => (
                                                    <React.Fragment key={idx}>{word}<br /></React.Fragment>
                                                ))}
                                            </h3>
                                        </div>
                                        <div className="absolute bottom-8 left-0 right-0 px-8 opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 text-center">
                                            <p className="mb-6 text-sm leading-relaxed opacity-90 font-medium line-clamp-4">
                                                {v.description}
                                            </p>
                                            <button className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-xs font-bold text-rose-500 hover:bg-rose-50 hover:scale-105 transition-all">
                                                Learn More <Zap size={12} />
                                            </button>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </section>

            {/* Cutting Edge Technologies */}
            <section className="bg-black py-0 text-center relative overflow-hidden">
                <div className="container mx-auto px-0 max-w-full">
                    <div className="bg-[#161618] py-24 px-4">
                        <h2 className="mb-6 font-display text-4xl font-black md:text-6xl">Cutting Edge Technologies</h2>
                        <p className="mx-auto  max-w-3xl text-base md:text-lg text-white/60">
                            We build scalable, future-ready digital solutions that help businesses grow and innovate.
                            Using modern technologies and strong architecture, we deliver secure and high-performance applications.
                            From idea to deployment, we create reliable tech that drives real business impact.
                        </p>
                    </div>

                    {isMobileScreen ? (
                        <div className="w-full">
                            {techItems.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <button
                                        key={item.id}
                                        type="button"
                                        onClick={() => navigate("/what-we-do/cutting-edge-details", { state: { from: "/what-we-do" } })}
                                        className="relative flex h-[340px] w-full items-center justify-center border-b border-black/20 px-6 text-white cursor-pointer text-center"
                                        style={{ background: mobileTechPanelBackgroundById[item.id] }}
                                    >
                                        <div className="flex flex-col items-center text-center">
                                            <Icon size={62} className="mb-7 drop-shadow-[0_8px_16px_rgba(0,0,0,0.24)]" />
                                            <h3 className="max-w-[250px] font-body text-[44px] font-black leading-[1.04] tracking-[-0.02em]">
                                                {item.label}
                                            </h3>
                                        </div>
                                    </button>
                                );
                            })}
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-4 min-h-[700px]">
                            {techItems.map((item, idx) => {
                                const Icon = item.icon;
                                // Custom sizing for specific grid placements to match reference
                                const isLarge = item.id === "ibeacon" || item.id === "androidtv";
                                return (
                                    <div
                                        key={item.id}
                                        className={`group relative flex items-center justify-center p-8 transition-all duration-500 ${item.color} ${isLarge ? 'md:col-span-2' : 'md:col-span-1'} min-h-[350px] overflow-hidden`}
                                    >
                                        {/* Default View: Icon + Label */}
                                        <div className="flex flex-col items-center transition-all duration-500 group-hover:opacity-0 group-hover:scale-90">
                                            <Icon size={isLarge ? 64 : 48} className="mb-6" />
                                            <h3 className={`${isLarge ? 'text-4xl' : 'text-2xl'} font-black uppercase text-center`}>
                                                {item.label}
                                            </h3>
                                        </div>

                                        {/* Hover View: Content Description */}
                                        <div className="absolute inset-0 flex flex-col items-center justify-center p-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none group-hover:pointer-events-auto text-left">
                                            <div className="w-full max-w-md">
                                                <h3 className="mb-4 text-3xl font-black uppercase">{item.label}</h3>
                                                <p className="text-base md:text-lg leading-relaxed mb-8 opacity-90 font-medium whitespace-pre-wrap">
                                                    {item.detail}
                                                </p>
                                                <button className="flex items-center gap-3 text-sm font-black uppercase tracking-widest hover:translate-x-2 transition-transform">
                                                    Read More
                                                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/50">
                                                        <ArrowRight size={14} />
                                                    </div>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </section>

            <Contact />
            <Footer />
        </div>
    );
};

export default WhatWeDo;
