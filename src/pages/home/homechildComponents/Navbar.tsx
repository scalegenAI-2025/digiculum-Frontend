// import React, { useState } from "react";
// import { createUseStyles } from "react-jss";
// import { FaLock } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import logo from "../../../assets/digi_logo_new_updated.png";
// import { NavLink, useNavigate } from "react-router-dom";

// interface NavItem {
//   id: string;
//   label: string;
//   href: string;
// }

// const useStyles = createUseStyles({
//   navbar: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "space-between",
//     padding: "1rem 3rem",
//     backgroundColor: "black",
//     backdropFilter: "blur(10px)",
//     borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
//     position: "fixed",
//     top: 0,
//     left: 0,
//     right: 0,
//     width: "100%",
//     zIndex: 1000,
//     minHeight: "80px",
//     boxSizing: "border-box",
//     transition: "all 0.3s ease",

//     "@media (max-width: 768px)": {
//       padding: "1rem 1.5rem",
//     },
//   },
//   activeNavLink: {
//     color: "#E547ED !important",

//     "&:before": {
//       width: "100% !important",
//       backgroundColor: "#E547ED",
//     },
//   },

//   logo: {
//     fontSize: "1.5rem",
//     fontWeight: 600,
//     color: "#ffffff",
//     textDecoration: "none",
//     letterSpacing: "0.05em",
//     fontFamily: "Arial, sans-serif",

//     "&:hover": {
//       opacity: 0.9,
//     },
//   },

//   navGroup: {
//     display: "flex",
//     alignItems: "center",
//     gap: "9rem",

//     "@media (max-width: 768px)": {
//       display: "none",
//     },
//   },

//   navLinks: {
//     display: "flex",
//     alignItems: "center",
//     gap: "3rem",
//     listStyle: "none",
//     margin: 0,
//     padding: 0,
//     position: "relative",
//   },

//   navItem: {
//     position: "relative",
//   },

//   navItemWithDivider: {
//     "&::after": {
//       content: '""',
//       position: "absolute",
//       right: "-1.5rem",
//       top: "50%",
//       transform: "translateY(-50%)",
//       height: "1.5rem",
//       width: "1px",
//       backgroundColor: "rgba(255, 255, 255, 0.3)",
//     },
//   },

//   navLink: {
//     color: "#ffffff",
//     textDecoration: "none",
//     fontSize: "1rem",
//     fontWeight: 400,
//     padding: "0.5rem 0",
//     transition: "all 0.3s ease",
//     position: "relative",

//     "&:before": {
//       content: '""',
//       position: "absolute",
//       bottom: "-8px",
//       left: "50%",
//       transform: "translateX(-50%)",
//       width: "0",
//       height: "2px",
//       backgroundColor: "#E547ED",
//       transition: "width 0.3s ease",
//     },

//     "&:hover": {
//       color: "#E547ED",
//       "&:before": {
//         width: "100%",
//       },
//     },
//   },

//   lockIcon: {
//     fontSize: "2rem",
//     color: "#ffffff",
//     cursor: "pointer",
//     paddingLeft: "1rem",

//     "&:hover": {
//       color: "#E547ED",
//     },
//   },

//   mobileMenuButton: {
//     display: "none",
//     background: "none",
//     border: "none",
//     color: "#ffffff",
//     fontSize: "1.5rem",
//     cursor: "pointer",
//     padding: "0.5rem",

//     "@media (max-width: 768px)": {
//       display: "block",
//     },
//   },

//   mobileMenu: {
//     display: "none",
//     position: "absolute",
//     top: "100%",
//     left: 0,
//     right: 0,
//     backgroundColor: "rgba(26, 26, 26, 0.95)",
//     backdropFilter: "blur(10px)",
//     borderTop: "1px solid rgba(255, 255, 255, 0.1)",
//     padding: "1rem 0",

//     "@media (max-width: 768px)": {
//       display: "flex",
//       flexDirection: "column",
//     },
//   },

//   "@keyframes slideDown": {
//     from: {
//       opacity: 0,
//       transform: "translateY(-10px)",
//     },
//     to: {
//       opacity: 1,
//       transform: "translateY(0)",
//     },
//   },

//   mobileMenuOpen: {
//     extend: "mobileMenu",
//     animation: "$slideDown 0.3s ease-out",
//   },

//   mobileMenuItem: {
//     padding: "0.75rem 1.5rem",
//   },

//   mobileMenuLink: {
//     color: "#ffffff",
//     textDecoration: "none",
//     fontSize: "1rem",
//     fontWeight: 400,
//     display: "block",

//     "&:hover": {
//       color: "#ff6ec7",
//     },
//   },
//   logoImage: {
//     width: "190px",
//   },
// });

// const Navbar: React.FC = () => {
//   const classes = useStyles();
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const navigate = useNavigate();

//   const navItems: NavItem[] = [
//     { id: "Reskilling", label: "Reskilling", href: "/Reskilling" },
//     { id: "ecosystem", label: "Ecosystem", href: "/ecosystem" },

//     { id: "Courses", label: "Courses", href: "/courses" },

//     { id: "about-us", label: "About", href: "/about-us" },
//   ];

//   const handleNavClick = (href: string) => {
//     setIsMobileMenuOpen(false);
//     navigate(href);
//   };

//   return (
//     <nav className={classes.navbar}>
//       <a
//         href="/"
//         className={classes.logo}
//         onClick={(e) => {
//           e.preventDefault();
//           //  handleNavClick("/", " ");
//         }}
//       >
//         <Link to="/" className={classes.logo}>
//           <img src={logo} alt="Digiculum Logo" className={classes.logoImage} />
//         </Link>
//       </a>

//       <div className={classes.navGroup}>
//         <ul className={classes.navLinks}>
//           {navItems.map((item, index) => (
//             <li
//               key={item.id}
//               className={`${classes.navItem} ${
//                 index < navItems.length - 1 ? classes.navItemWithDivider : ""
//               }`}
//             >
//               <NavLink
//                 to={item.href}
//                 className={({ isActive }) =>
//                   `${classes.navLink} ${isActive ? classes.activeNavLink : ""}`
//                 }
//                 onClick={() => setIsMobileMenuOpen(false)} // close mobile menu on click
//               >
//                 {item.label}
//               </NavLink>
//             </li>
//           ))}
//         </ul>

//         <div className={classes.lockIcon}>
//           <Link to="/signup">
//             <FaLock className={classes.lockIcon} />
//           </Link>
//         </div>
//       </div>

//       <button
//         className={classes.mobileMenuButton}
//         onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//         aria-label="Toggle mobile menu"
//         aria-expanded={isMobileMenuOpen}
//       >
//         ☰
//       </button>

//       {isMobileMenuOpen && (
//         <div className={classes.mobileMenuOpen}>
//           {navItems.map((item) => (
//             <div key={item.id} className={classes.mobileMenuItem}>
//               <a
//                 href={item.href}
//                 className={classes.mobileMenuLink}
//                 onClick={(e) => {
//                   e.preventDefault();
//                   handleNavClick(item.href);
//                 }}
//               >
//                 {item.label}
//               </a>
//             </div>
//           ))}
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState, useContext } from "react";
import { createUseStyles } from "react-jss";
import { FaLock, FaBars, FaTimes } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../../assets/digi_logo_new_updated.png";
import { AuthContext } from "../../../context/AuthContext";

interface NavItem {
  id: string;
  label: string;
  href: string;
}

const useStyles = createUseStyles({
  navbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "1rem 3rem",
    backgroundColor: "black",
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
  navbarInner: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    maxWidth: "1200px",
  },
  logo: {
    fontSize: "1.5rem",
    fontWeight: 600,
    color: "#ffffff",
    textDecoration: "none",
    letterSpacing: "0.05em",
    fontFamily: "Arial, sans-serif",
    "&:hover": { opacity: 0.9 },
  },
  logoImage: {
    width: "190px",
    "@media (max-width: 768px)": { width: "140px" },
  },
  navGroup: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    "@media (max-width: 768px)": { display: "none" },
  },
  navLinks: {
    display: "flex",
    alignItems: "center",
    gap: "2rem",
    listStyle: "none",
    margin: 0,
    padding: 0,
    position: "relative",
  },
  navItem: { position: "relative" },
  navItemWithDivider: {
    "&::after": {
      content: '""',
      position: "absolute",
      right: "-1rem",
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
      backgroundColor: "#E547ED",
      transition: "width 0.3s ease",
    },
    "&:hover": {
      color: "#E547ED",
      "&:before": { width: "100%" },
    },
  },
  activeNavLink: {
    color: "#E547ED !important",
    "&:before": {
      width: "100% !important",
      backgroundColor: "#E547ED",
    },
  },
  authSection: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    "@media (max-width: 768px)": { display: "none" }, // hide on mobile
  },
  logoutButton: {
    background: "transparent",
    border: "1px solid #E547ED",
    borderRadius: "6px",
    padding: "0.4rem 1rem",
    color: "#E547ED",
    fontSize: "0.95rem",
    cursor: "pointer",
    transition: "all 0.3s ease",
    "&:hover": {
      backgroundColor: "#E547ED",
      color: "#fff",
    },
  },
  lockIcon: {
    fontSize: "1.3rem",
    color: "#ffffff",
    cursor: "pointer",
    marginLeft: "1rem",
    "&:hover": { color: "#E547ED" },
    "@media (max-width: 768px)": { display: "none" },
  },
  mobileMenuButton: {
    display: "none",
    background: "none",
    border: "none",
    color: "#ffffff",
    fontSize: "1.5rem",
    cursor: "pointer",
    padding: "0.5rem",
    "@media (max-width: 768px)": { display: "block" },
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
    "@media (max-width: 768px)": { display: "flex", flexDirection: "column" },
  },
  "@keyframes slideDown": {
    from: { opacity: 0, transform: "translateY(-10px)" },
    to: { opacity: 1, transform: "translateY(0)" },
  },
  mobileMenuOpen: {
    extend: "mobileMenu",
    animation: "$slideDown 0.3s ease-out",
  },
  mobileMenuItem: { padding: "0.75rem 1.5rem" },
  mobileMenuLink: {
    color: "#ffffff",
    textDecoration: "none",
    fontSize: "1rem",
    fontWeight: 400,
    display: "block",
    "&:hover": { color: "#ff6ec7" },
  },
});

const Navbar: React.FC = () => {
  const classes = useStyles();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, logoutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const navItems: NavItem[] = [
    { id: "Reskilling", label: "Reskilling", href: "/Reskilling" },
    { id: "ecosystem", label: "Ecosystem", href: "/ecosystem" },
    { id: "Courses", label: "Courses", href: "/courses" },
    { id: "about-us", label: "About", href: "/about-us" },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    navigate(href);
  };

  const handleLogout = () => {
    logoutUser();
    navigate("/");
    setIsMobileMenuOpen(false);
  };

  const handleStartJourney = () => {
    if (user) {
      navigate(`/profile/${user.email}`);
    } else {
      navigate("/login");
    }
    setIsMobileMenuOpen(false);
  };

  const AuthButtons: React.FC<{ isMobile?: boolean }> = ({ isMobile }) => {
    if (user) {
      return (
        <>
          <button className={classes.logoutButton} onClick={handleStartJourney}>
            My Page
          </button>
          <button className={classes.logoutButton} onClick={handleLogout}>
            Logout
          </button>
        </>
      );
    }

    return isMobile ? (
      <NavLink
        to="/login"
        className={classes.mobileMenuLink}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        Login
      </NavLink>
    ) : (
      <Link to="/login">
        <FaLock className={classes.lockIcon} />
      </Link>
    );
  };

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarInner}>
        {/* Logo */}
        <Link to="/" className={classes.logo}>
          <img src={logo} alt="Digiculum Logo" className={classes.logoImage} />
        </Link>

        {/* Nav Links */}
        <div className={classes.navGroup}>
          <ul className={classes.navLinks}>
            {navItems.map((item, index) => (
              <li
                key={item.id}
                className={`${classes.navItem} ${
                  index < navItems.length - 1 ? classes.navItemWithDivider : ""
                }`}
              >
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    `${classes.navLink} ${
                      isActive ? classes.activeNavLink : ""
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop Auth */}
        <div className={classes.authSection}>
          <AuthButtons />
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={classes.mobileMenuButton}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <ul id="mobile-menu" className={classes.mobileMenuOpen} role="menu">
          {navItems.map((item) => (
            <li
              key={item.id}
              role="menuitem"
              className={classes.mobileMenuItem}
            >
              <NavLink
                to={item.href}
                className={classes.mobileMenuLink}
                onClick={() => handleNavClick(item.href)}
              >
                {item.label}
              </NavLink>
            </li>
          ))}

          {/* Auth inside mobile menu */}
          <li className={classes.mobileMenuItem}>
            <div style={{ display: "flex", gap: "0.5rem" }}>
              <AuthButtons isMobile />
            </div>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
