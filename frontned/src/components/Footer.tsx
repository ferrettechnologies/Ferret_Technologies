import { Facebook, Instagram, Linkedin, X } from "lucide-react";
import { Link } from "react-router-dom";

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/ferret-private-limited/?viewAsMember=true", icon: Linkedin },
  // { label: "Instagram", href: "https://www.instagram.com", icon: Instagram },
  { label: "X", href: "https://x.com/FERRET_Pvt_Ltd", icon: X },
  // { label: "Facebook", href: "https://www.facebook.com", icon: Facebook },
];

const footerBadges = [
  { title: "Top Quality", subtitle: "Top Software Developers", variant: "pill" },
  // { title: "Top Wearable App", subtitle: "Creators 2018", variant: "text" },
  { title: "Discover The Best", subtitle: "Software Development", variant: "pill" },
  // { title: "UpCity", subtitle: "Top Local Agency", variant: "text" },
  { title: "Top Developers", subtitle: "Top Mobile App Developer", variant: "pill" },
  // { title: "appfutura", subtitle: "", variant: "text" },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[linear-gradient(90deg,#141827_0%,#1A1E31_50%,#141827_100%)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_10%,rgba(255,255,255,0.04),transparent_36%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.025),transparent_42%)]" />

      <div className="relative mx-auto w-[min(1150px,calc(100%-34px))] py-16 md:py-20 text-center md:text-left">
        <div className="flex flex-col gap-12 md:flex-row md:items-center md:justify-between items-center text-center md:items-start md:text-left">
          <div className="text-white flex flex-col items-center md:items-start">
            <Link to="/" className="inline-flex items-center">
              <img src="/assets/brand/ferret-logo-light.svg" alt="Ferret Technologies" className="h-[60px] w-auto" />
            </Link>
            <p className="mt-6 text-[13px] font-bold uppercase tracking-[1px] opacity-80">(c) 2025 Ferret private limited</p>
            <a
              href="mailto:info@ferrettechnologies.com"
              className="mt-3 inline-block text-[14px] font-medium text-white/90 transition-colors hover:text-[#ff0044]"
            >
              info@ferrettechnologies.com
            </a>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-[#252838] border border-white/10 text-white/80 transition-all hover:bg-[#ff0044] hover:text-white hover:scale-110"
              >
                <Icon size={20} strokeWidth={2} />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-8 md:gap-10">
            <Link
              to="/contact"
              className="text-[13px] font-bold uppercase tracking-[1px] text-white/70 hover:text-white transition-colors"
            >
              Support
            </Link>
            <Link
              to="/contact"
              className="text-[13px] font-bold uppercase tracking-[1px] text-white/70 hover:text-white transition-colors"
            >
              Customer Login
            </Link>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-y-10 items-center justify-items-center md:flex md:flex-wrap md:justify-between md:gap-x-5 md:gap-y-4">
          {footerBadges.map((badge) => (
            <div key={badge.title} className="opacity-60 transition-opacity hover:opacity-100">
              {badge.variant === "pill" ? (
                <div className="inline-flex flex-col items-center rounded-full border border-white/20 bg-white/5 px-5 py-2 text-white/90">
                  <span className="text-[15px] font-bold leading-none">{badge.title}</span>
                  <span className="mt-1 text-[8px] font-bold uppercase tracking-[1px] opacity-70">{badge.subtitle}</span>
                </div>
              ) : (
                <div className="text-center md:text-left md:min-w-[140px] text-white/90">
                  <p className="text-[15px] font-bold leading-none tracking-[0.2px]">{badge.title}</p>
                  {badge.subtitle ? (
                    <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.8px] opacity-60">{badge.subtitle}</p>
                  ) : null}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
