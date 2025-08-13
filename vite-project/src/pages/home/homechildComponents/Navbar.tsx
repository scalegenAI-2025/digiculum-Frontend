/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import { FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

interface NavItem {
  id: string;
  label: string;
  href: string;
}

const useStyles = createUseStyles({
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
});

const Navbar: React.FC = () => {
  const classes = useStyles();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navItems: NavItem[] = [
    { id: "Journey", label: "Journey", href: "/Journey" },
    { id: "ecosystem", label: "Ecosystem", href: "/ecosystem" },

    { id: "Masterclass", label: "Masterclass", href: "/masterclass" },

    { id: "ecosystem", label: "Ecosystem", href: "/ecosystem" },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    navigate(href);
  };

  return (
    <nav className={classes.navbar}>
      <a
        href="/"
        className={classes.logo}
        onClick={(e) => {
          e.preventDefault();
          handleNavClick("/");
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
                  handleNavClick(item.href);
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className={classes.lockIcon}>
          <Link to="/register">
            <FaLock />
          </Link>
        </div>
      </div>

      <button
        className={classes.mobileMenuButton}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
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
                  handleNavClick(item.href);
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
