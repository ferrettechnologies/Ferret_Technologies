import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";

const navLinks = [
  { label: "SERVICES", to: "/what-we-do" },
  { label: "PORTFOLIO", to: "/work" },
  { label: "CAREERS", to: "/careers" },
  { label: "CONTACTS", to: "/contact" },
];
const logoMainLetters = "FERRET".split("");
const logoSubLetters = "TECHNOLOGIES".split("");

const MailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
    <path
      fill="currentColor"
      fillRule="nonzero"
      d="M3.485 5L10 11.514 16.515 5H3.485zM18 6.485l-6.55 6.55c-.801.8-2.099.8-2.9 0L2 6.484V14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V6.485zM3 3h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3z"
    />
  </svg>
);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMobileViewport, setIsMobileViewport] = useState(() => window.innerWidth <= 1024);
  const location = useLocation();
  const isTransparentRoute = ["/", "/what-we-do"].includes(location.pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1024px)");
    const onViewportChange = (event: MediaQueryListEvent) => setIsMobileViewport(event.matches);

    setIsMobileViewport(mediaQuery.matches);
    mediaQuery.addEventListener("change", onViewportChange);

    return () => mediaQuery.removeEventListener("change", onViewportChange);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const showSolidBackground = scrolled || !isTransparentRoute;
  const isLightNavbar = scrolled || isMobileViewport;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`header ${showSolidBackground ? "header--solid" : "header--transparent"} ${isLightNavbar ? "header--light" : ""
        } ${mobileOpen ? "header--mobile-open" : ""} ${isMobileViewport && scrolled && !mobileOpen ? "header--mobile-menu-only" : ""}`}
    >
      <div className="header__inner">
        <Link to="/" className="logo" aria-label="Ferret Technologies">
          <img
            src={isLightNavbar ? "/assets/brand/ferret-symbol.svg" : "/assets/brand/ferret-symbol-white.svg"}
            alt="Ferret Technologies"
            className="logo__img"
          />
          <div className={`logo__text logo__wordmark ${isLightNavbar ? "logo__wordmark--light" : "logo__wordmark--dark"}`}>
            <span className="logo__wordmark-main" aria-label="Ferret">
              {logoMainLetters.map((letter, index) => (
                <span
                  key={`${letter}-${index}`}
                  className={`logo__wordmark-main-letter${index === 2 ? " logo__wordmark-main-letter--gap-rr" : ""}${index === 3 ? " logo__wordmark-main-letter--gap-re" : ""}`}
                  aria-hidden="true"
                >
                  {letter}
                </span>
              ))}
            </span>
            <span className="logo__wordmark-sub" aria-label="Technologies">
              {logoSubLetters.map((letter, index) => (
                <span key={`${letter}-${index}`} className="logo__wordmark-sub-letter" aria-hidden="true">
                  {letter}
                </span>
              ))}
            </span>
          </div>
        </Link>

        <div className="nav">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `nav__link ${isActive ? "is-active" : ""} ${showSolidBackground ? "is-solid" : "is-transparent"}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="header__request">
          <Link to="/contact" className="button button--primary">
            <span className="button__content button__content--icon-text">
              <span className="button__icon">
                <MailIcon />
              </span>
              <span className="button__text">Let's Connect</span>
            </span>
          </Link>
        </div>

        <button onClick={() => setMobileOpen(!mobileOpen)} className="mobile-toggle" aria-label="Toggle menu">
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -20, height: 0 }}
            className="mobile-menu"
          >
            <div className="mobile-menu__inner">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `mobile-menu__link ${isActive ? "is-active" : ""}`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <Link to="/contact" className="button button--primary mobile-menu__request">
                <span className="button__content button__content--icon-text">
                  <span className="button__icon">
                    <MailIcon />
                  </span>
                  <span className="button__text">Lets connect</span>
                </span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
