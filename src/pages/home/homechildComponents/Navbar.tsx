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
import { FaLock } from "react-icons/fa";
import { Link, useNavigate, NavLink } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import logo from "../../../assets/digi_logo_new_updated.png";

const useStyles = createUseStyles({
  navbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
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
  logoImage: {
    width: "190px",
  },
  navGroup: {
    display: "flex",
    alignItems: "center",
    gap: "3rem",
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
    position: "relative",
    "&:hover": { color: "#E547ED" },
  },
  activeNavLink: {
    color: "#E547ED !important",
  },
  lockIcon: {
    fontSize: "2rem",
    color: "#ffffff",
    cursor: "pointer",
    "&:hover": { color: "#E547ED" },
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
  mobileMenuOpen: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    top: "100%",
    left: 0,
    right: 0,
    backgroundColor: "rgba(26, 26, 26, 0.95)",
    backdropFilter: "blur(10px)",
    borderTop: "1px solid rgba(255, 255, 255, 0.1)",
    padding: "1rem 0",
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
    "&:hover": { color: "#ff6ec7" },
  },
});

const Navbar: React.FC = () => {
  const classes = useStyles();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { logoutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const navItems = [
    { id: "Reskilling", label: "Reskilling", href: "/Reskilling" },
    { id: "Ecosystem", label: "Ecosystem", href: "/ecosystem" },
    { id: "Courses", label: "Courses", href: "/courses" },
    { id: "About", label: "About", href: "/about-us" },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    navigate(href);
  };

  const handleLogout = async () => {
    try {
      await fetch("/api/logout", { method: "POST", credentials: "include" });
      logoutUser();
      navigate("/");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <nav className={classes.navbar}>
      <Link to="/">
        <img src={logo} alt="Digiculum Logo" className={classes.logoImage} />
      </Link>

      <div className={classes.navGroup}>
        <ul className={classes.navLinks}>
          {navItems.map((item, index) => (
            <li
              key={item.id}
              className={
                index < navItems.length - 1 ? classes.navItemWithDivider : ""
              }
            >
              <NavLink
                to={item.href}
                className={({ isActive }) =>
                  `${classes.navLink} ${isActive ? classes.activeNavLink : ""}`
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Logout button */}
        <div className={classes.lockIcon} onClick={handleLogout}>
          <FaLock className={classes.lockIcon} />
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
          <div className={classes.mobileMenuItem}>
            <button
              onClick={handleLogout}
              style={{
                background: "transparent",
                border: "none",
                color: "#ffffff",
                fontSize: "1rem",
                cursor: "pointer",
              }}
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
