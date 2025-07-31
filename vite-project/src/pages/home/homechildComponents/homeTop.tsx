import React, { useState, useRef, useEffect } from "react";
import { createUseStyles } from "react-jss";
import { FaLock } from "react-icons/fa";

interface NavItem {
  id: string;
  label: string;
  href: string;
}

interface HeroProps {
  className?: string;
}

const useStyles = createUseStyles({
  heroContainer: {
    position: "relative",
    width: "100%",
    height: "100vh",
    overflow: "hidden",
    backgroundColor: "#000",
    display: "flex",
    flexDirection: "row",

    "@media (max-width: 768px)": {
      flexDirection: "column",
    },
  },

  videoBackground: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: 1,
  },

  videoSection: {
    flex: "1",
    position: "relative",
    height: "100%",
    zIndex: 1,
    overflow: "hidden",

    "@media (max-width: 768px)": {
      order: -1,
      height: "40vh",
    },
  },

  videoOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background:
      "linear-gradient(135deg, rgba(0,0,0,0.3) 0%, rgba(20,20,40,0.5) 100%)",
    zIndex: 2,
  },

  navbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "1rem 3rem",
    backgroundColor: "rgba(26, 26, 26, 0.9)",
    backdropFilter: "blur(10px)",
    borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    width: "100%",
    zIndex: 1000,
    minHeight: "80px",
    boxSizing: "border-box",
    transition: "all 0.3s ease",

    "@media (max-width: 768px)": {
      padding: "1rem 1.5rem",
    },
  },

  logo: {
    fontSize: "1.5rem",
    fontWeight: 600,
    color: "#ffffff",
    textDecoration: "none",
    letterSpacing: "0.05em",
    fontFamily: "Arial, sans-serif",

    "&:hover": {
      opacity: 0.9,
    },
  },

  navGroup: {
    display: "flex",
    alignItems: "center",
    //marginRight: "auto",
    gap: "9rem",

    "@media (max-width: 768px)": {
      display: "none",
    },
  },

  navLinks: {
    display: "flex",
    alignItems: "center",
    gap: "3rem",
    listStyle: "none",
    margin: 0,
    padding: 0,
    position: "relative",
  },

  navItem: {
    position: "relative",
  },

  navItemWithDivider: {
    "&::after": {
      content: '""',
      position: "absolute",
      right: "-1.5rem",
      top: "50%",
      transform: "translateY(-50%)",
      height: "1.5rem",
      width: "1px",
      backgroundColor: "rgba(255, 255, 255, 0.3)",
    },
  },

  navLink: {
    color: "#ffffff",
    textDecoration: "none",
    fontSize: "1rem",
    fontWeight: 400,
    padding: "0.5rem 0",
    transition: "all 0.3s ease",
    position: "relative",

    "&:before": {
      content: '""',
      position: "absolute",
      bottom: "-8px",
      left: "50%",
      transform: "translateX(-50%)",
      width: "0",
      height: "2px",
      backgroundColor: "#ff6ec7",
      transition: "width 0.3s ease",
    },

    "&:hover": {
      color: "#ff6ec7",

      "&:before": {
        width: "100%",
      },
    },
  },

  lockIcon: {
    fontSize: "1.2rem",
    color: "#ffffff",
    cursor: "pointer",
    paddingLeft: "1rem",

    "&:hover": {
      color: "#ff6ec7",
    },
  },

  mobileMenuButton: {
    display: "none",
    background: "none",
    border: "none",
    color: "#ffffff",
    fontSize: "1.5rem",
    cursor: "pointer",
    padding: "0.5rem",

    "@media (max-width: 768px)": {
      display: "block",
    },
  },

  mobileMenu: {
    display: "none",
    position: "absolute",
    top: "100%",
    left: 0,
    right: 0,
    backgroundColor: "rgba(26, 26, 26, 0.95)",
    backdropFilter: "blur(10px)",
    borderTop: "1px solid rgba(255, 255, 255, 0.1)",
    padding: "1rem 0",

    "@media (max-width: 768px)": {
      display: "flex",
      flexDirection: "column",
    },
  },

  mobileMenuItem: {
    padding: "0.75rem 1.5rem",
  },

  mobileMenuLink: {
    color: "#ffffff",
    textDecoration: "none",
    fontSize: "1rem",
    fontWeight: 400,
    display: "block",

    "&:hover": {
      color: "#ff6ec7",
    },
  },

  heroContent: {
    flex: "1",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingTop: "80px",
    color: "#ffffff",
    backgroundColor: "#000",
    zIndex: 4,
    position: "relative",
    paddingLeft: "3rem",
    marginRight: "-5rem",

    "@media (max-width: 768px)": {
      marginRight: 0,
      padding: "80px 1.5rem 2rem",
    },
  },

  contentWrapper: {
    maxWidth: "600px",
    width: "100%",

    "@media (max-width: 768px)": {
      maxWidth: "100%",
    },
  },

  heroTitle: {
    fontSize: "clamp(3rem, 8vw, 6rem)",
    fontWeight: 700,
    lineHeight: 1.1,
    margin: 0,
    marginBottom: "1rem",
    fontFamily: "Arial, sans-serif",
  },

  ai: {
    background:
      "linear-gradient(135deg, #ff6ec7 0%, #7c3aed 50%, #06b6d4 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },

  gold: {
    background:
      "linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },

  heroDescription: {
    fontSize: "40px",
    fontWeight: 400,
    margin: 0,
    opacity: 0.8,
    maxWidth: "600px",
  },

  ctaButton: {
    marginTop: "2rem",
    padding: "1rem 2rem",
    fontSize: "1.1rem",
    fontWeight: 600,
    color: "#ffffff",
    background: "linear-gradient(135deg, #ff6ec7 0%, #7c3aed 100%)",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    textDecoration: "none",
    display: "inline-block",

    "&:hover": {
      transform: "translateY(-2px)",
      boxShadow: "0 10px 30px rgba(255, 110, 199, 0.3)",
    },
  },

  "@keyframes slideDown": {
    from: {
      opacity: 0,
      transform: "translateY(-10px)",
    },
    to: {
      opacity: 1,
      transform: "translateY(0)",
    },
  },

  mobileMenuOpen: {
    extend: "mobileMenu",
    animation: "$slideDown 0.3s ease-out",
  },
});

const AIHeroSection: React.FC<HeroProps> = ({ className }) => {
  const classes = useStyles();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const navItems: NavItem[] = [
    { id: "Journey", label: "Journey", href: "/Journey" },
    { id: "ecosystem", label: "Ecosystem", href: "/ecosystem" },
    { id: "Masterclass", label: "Masterclass", href: "/masterclass" },
    { id: "enterprises", label: "Enterprises", href: "/enterprises" },
  ];

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.warn("Video playback error:", err);
      });
    }
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (href: string, label: string) => {
    console.log(`Navigating to ${label}: ${href}`);
    setIsMobileMenuOpen(false);
    // window.location.href = href;
  };

  return (
    <div className={`${classes.heroContainer} ${className || ""}`}>
      <nav className={classes.navbar}>
        <a
          href="/"
          className={classes.logo}
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("/", "Home");
          }}
        >
          DIGICULUM
        </a>

        <div className={classes.navGroup}>
          <ul className={classes.navLinks}>
            {navItems.map((item, index) => (
              <li
                key={item.id}
                className={`${classes.navItem} ${
                  index < navItems.length - 1 ? classes.navItemWithDivider : ""
                }`}
              >
                <a
                  href={item.href}
                  className={classes.navLink}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href, item.label);
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className={classes.lockIcon}>
            <FaLock />
          </div>
        </div>

        <button
          className={classes.mobileMenuButton}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen}
        >
          ☰
        </button>

        {isMobileMenuOpen && (
          <div className={classes.mobileMenuOpen}>
            {navItems.map((item) => (
              <div key={item.id} className={classes.mobileMenuItem}>
                <a
                  href={item.href}
                  className={classes.mobileMenuLink}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href, item.label);
                  }}
                >
                  {item.label}
                </a>
              </div>
            ))}
          </div>
        )}
      </nav>

      {/* Left - Text Content */}
      <div className={classes.heroContent}>
        <div className={classes.contentWrapper}>
          <h1 className={classes.heroTitle}>
            <span className={classes.ai}>AI</span> is the new
            <br />
            <span className={classes.gold}>Gold </span>
            <span>Rush</span>
          </h1>
          <p className={classes.heroDescription}>Have you begun your QUEST?</p>
          <a href="/start-quest" className={classes.ctaButton}>
            Start Your Journey
          </a>
        </div>
      </div>

      {/* Right - Video */}
      <div className={classes.videoSection}>
        <video
          ref={videoRef}
          className={classes.videoBackground}
          autoPlay
          muted
          loop
          playsInline
        >
          <source
            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className={classes.videoOverlay} />
      </div>
    </div>
  );
};

export default AIHeroSection;
