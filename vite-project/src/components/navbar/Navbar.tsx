import React, { useState } from "react";
import { createUseStyles } from "react-jss";

// Define types
interface NavItem {
  id: string;
  label: string;
  href: string;
}

interface NavbarProps {
  className?: string;
}

// JSS Styles
const useStyles = createUseStyles({
  navbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "1rem 3rem",
    backgroundColor: "#1a1a1a",
    borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    width: "100%",
    zIndex: 1000,
    minHeight: "80px",
    boxSizing: "border-box",

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
    fontFamily: "system-ui, -apple-system, sans-serif",

    "&:hover": {
      opacity: 0.9,
    },
  },

  navLinks: {
    display: "flex",
    alignItems: "center",
    gap: "3rem",
    listStyle: "none",
    margin: 0,
    padding: 0,
    marginRight: "2rem",

    "@media (max-width: 768px)": {
      display: "none",
    },
  },

  navItem: {
    position: "relative",
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
      backgroundColor: "#4ade80",
      transition: "width 0.3s ease",
    },

    "&:hover": {
      color: "#4ade80",

      "&:before": {
        width: "100%",
      },
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
    backgroundColor: "#1a1a1a",
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
      color: "#4ade80",
    },
  },

  // Animation for mobile menu
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

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const classes = useStyles();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems: NavItem[] = [
    { id: "Journey", label: "Journey", href: "/Journey" },
    { id: "ecosystem", label: "Ecosystem", href: "/ecosystem" },
    { id: "assessment", label: "Assessment", href: "/assessment" },
    { id: "enterprises", label: "Enterprises", href: "/enterprises" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (href: string, label: string) => {
    console.log(`Navigating to ${label}: ${href}`);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`${classes.navbar} ${className || ""}`}>
      {/* Logo */}
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

      {/* Desktop Navigation */}
      <ul className={classes.navLinks}>
        {navItems.map((item) => (
          <li key={item.id} className={classes.navItem}>
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

      {/* Mobile Menu Button */}
      <button
        className={classes.mobileMenuButton}
        onClick={toggleMobileMenu}
        aria-label="Toggle mobile menu"
        aria-expanded={isMobileMenuOpen}
      >
        ☰
      </button>

      {/* Mobile Menu */}
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
  );
};

export default Navbar;
