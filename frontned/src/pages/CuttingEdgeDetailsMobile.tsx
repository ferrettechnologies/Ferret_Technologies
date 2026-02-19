import { ArrowLeft, Bluetooth, Code2, Tv, Watch, Wifi } from "lucide-react";
import { Link, Navigate } from "react-router-dom";
import Navbar from "@/components/Navbar";

const AndroidIcon = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
  <svg
    aria-hidden="true"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
  >
    <path
      d="M7 10.25C7 7.9 9.02 6 11.5 6h1C14.98 6 17 7.9 17 10.25V16c0 1.1-.9 2-2 2H9c-1.1 0-2-.9-2-2v-5.75Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <path d="M9.1 6.7 7.9 5M14.9 6.7 16.1 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <circle cx="10.25" cy="11.7" r="0.85" fill="currentColor" />
    <circle cx="13.75" cy="11.7" r="0.85" fill="currentColor" />
    <path d="M9.5 20v1.4M14.5 20v1.4M6.4 11.5v4.9M17.6 11.5v4.9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const cuttingEdgeItems = [
  {
    id: "ble",
    label: "Bluetooth Low Energy",
    icon: Bluetooth,
    color: "from-[#42c1ff] to-[#1f64f2]",
    detail: "specializes in BLE device solutions, serving both industrial sensor applications and consumer health technology markets.",
  },
  {
    id: "ibeacon",
    label: "iBeacon",
    icon: Wifi,
    color: "from-[#6eea44] to-[#1fa62c]",
    detail:
      "App for conferences leverages personal badges with integrated iBeacons to help trade show organizers engage visitors and get valuable metrics.",
  },
  {
    id: "sdk",
    label: "SDK",
    icon: Code2,
    color: "from-[#ffd178] to-[#ea8d2d]",
    detail: "Our team builds custom SDKs designed to ensure smooth interoperability with third-party services and connected hardware devices.",
  },
  {
    id: "smart-tv",
    label: "Smart TV",
    icon: Tv,
    color: "from-[#a67bff] to-[#6c40f0]",
    detail: "Smart TV apps enhance functionality and user engagement, and we deliver exceptional viewing experiences across all major smart TV platforms.",
  },
  {
    id: "wearables",
    label: "Wearable Devices",
    icon: Watch,
    color: "from-[#3bd4e8] to-[#0f97c8]",
    detail: "We develop wearable apps that maximize hardware potential, from custom watch face design to sophisticated biometric data analysis.",
  },
  {
    id: "androidtv",
    label: "Android TV",
    icon: AndroidIcon,
    color: "from-[#ff6f89] to-[#de3553]",
    detail: "Our Android TV apps employ sophisticated video and audio algorithms to ensure optimal playback quality and superior user experiences.",
  },
];

const CuttingEdgeDetailsMobile = () => {
  if (typeof window !== "undefined" && window.innerWidth >= 768) {
    return <Navigate to="/what-we-do" replace />;
  }

  return (
    <div className="min-h-screen bg-[#161618] text-white">
      <Navbar />

      <main className="mx-auto max-w-3xl px-4 pb-12 pt-24">
        <Link to="/what-we-do" className="mb-6 inline-flex items-center gap-2 text-white/70 hover:text-[#ff0044] transition-colors">
          <ArrowLeft size={18} />
          <span>Back</span>
        </Link>

        <section className="mb-8 rounded-2xl bg-black/30 px-5 py-8 text-center">
          <h1 className="mb-4 font-display text-4xl font-black leading-[1.04]">Cutting Edge Technologies</h1>
          <p className="text-base leading-relaxed text-white/70">
            We build scalable, future-ready digital solutions that help businesses grow and innovate. Using modern technologies and
            strong architecture, we deliver secure and high-performance applications.
          </p>
        </section>

        <div className="space-y-4">
          {cuttingEdgeItems.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.id} className={`rounded-2xl bg-gradient-to-br ${item.color} p-5 text-white`}>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/15">
                  <Icon size={24} />
                </div>
                <h2 className="mb-3 font-display text-2xl font-black leading-tight">{item.label}</h2>
                <p className="text-sm leading-relaxed text-white/90">{item.detail}</p>
              </article>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default CuttingEdgeDetailsMobile;
