// import { createUseStyles } from "react-jss";

// import type { FC } from "react";
// import { Link } from "react-router-dom";

// const useStyles = createUseStyles({
//   layout: {
//     display: "flex",
//     flexDirection: "row",
//     backgroundColor: "#2c2b2b",
//     color: "white",
//     padding: "2rem",
//     justifyContent: "space-evenly",
//     fontFamily: "Arial, sans-serif",
//   },
//   leftSection: {
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "space-between",
//   },
//   nav: {
//     display: "flex",
//     flexDirection: "column",
//     gap: "1rem",
//     marginBottom: "2rem",
//   },
//   link: {
//     color: "white",
//     // textDecoration: "underline",
//     cursor: "pointer",
//     fontSize: "1rem",
//   },
//   contact: {
//     fontSize: "1rem",
//     marginBottom: "1rem",
//   },
//   icon: {
//     fontSize: "1.2rem",
//     opacity: 0.5,
//     color: "white",
//   },
//   footerNote: {
//     fontSize: "0.8rem",
//     color: "white",
//     marginTop: "3rem",
//   },
//   policies: {
//     display: "flex",
//     justifyContent: "flex-start",
//     alignItems: "center",
//     gap: "0.8rem",
//     marginTop: "1rem",
//     fontSize: "0.9rem",
//     "& a": {
//       color: "white",
//       textDecoration: "underline",
//     },
//     "& span": {
//       opacity: 0.6, // subtle vertical bar
//     },
//   },
//   formWrapper: {
//     background: "white",
//     padding: "2rem",
//     borderRadius: 4,
//     width: "400px",
//     color: "black",
//   },
//   heading: {
//     fontSize: "1.8rem",
//     marginBottom: "1.5rem",
//   },
//   formRow: {
//     display: "flex",
//     gap: "1rem",
//     marginBottom: "1.2rem",
//   },
//   input: {
//     flex: 1,
//     width: "90%",
//     border: "none",
//     borderBottom: "2px solid black",
//     padding: "0.5rem 0",
//     fontSize: "1rem",
//     background: "transparent",
//     outline: "none",
//   },
//   textarea: {
//     width: "100%",
//     height: "100px",
//     border: "none",
//     borderBottom: "2px solid black",
//     padding: "0.5rem 0",
//     fontSize: "1rem",
//     background: "transparent",
//     outline: "none",
//     marginBottom: "1.2rem",
//     fontFamily: "Arial, sans-serif",
//   },
//   checkboxRow: {
//     display: "flex",
//     alignItems: "center",
//     marginBottom: "1.5rem",
//     fontSize: "0.95rem",
//   },
//   checkbox: {
//     marginRight: "0.5rem",
//   },
//   submitButton: {
//     backgroundColor: "black",
//     color: "white",
//     padding: "0.7rem 1.5rem",
//     fontSize: "1rem",
//     borderRadius: "20px",
//     border: "none",
//     cursor: "pointer",
//   },
//   wrapper: {
//     display: "flex",
//     justifyContent: "space-between",
//   },
//   socialWrapper: {
//     display: "flex",
//     alignItems: "center",
//     gap: "12px",
//     //paddingTop: "1rem",
//   },
//   "@media (max-width: 700px)": {
//     layout: {
//       flexDirection: "column-reverse",
//       alignItems: "center",
//       gap: "50px",
//       padding: "1rem",
//     },
//     formWrapper: {
//       width: "100%",
//       padding: "1rem",
//       marginTop: "1.5rem",
//     },
//     heading: {
//       fontSize: "1.2rem",
//       marginBottom: "1rem",
//       textAlign: "center",
//     },
//     formRow: {
//       flexDirection: "column", // stack inputs vertically
//       gap: "0.8rem",
//     },
//     input: {
//       fontSize: "0.9rem",
//       width: "100%", // take full width
//     },
//     textarea: {
//       fontSize: "0.9rem",
//       height: "80px",
//     },
//     link: {
//       fontSize: "0.85rem",
//     },
//     checkboxRow: {
//       fontSize: "0.85rem",
//       flexDirection: "column",
//       alignItems: "flex-start",
//       gap: "0.5rem",
//     },
//     submitButton: {
//       width: "100%",
//       fontSize: "0.9rem",
//       padding: "0.6rem",
//     },
//     socialWrapper: {
//       justifyContent: "center",
//       color: "white",
//     },
//     contact: {
//       textAlign: "center",
//     },
//     footerNote: {
//       fontSize: "0.7rem",
//       textAlign: "center",
//       marginTop: "1rem",
//     },
//   },
//   follow: {
//     flex: "1 1 40%",
//     fontSize: "1.2rem", // increased from 1rem
//     "& strong": {
//       display: "block",
//       fontSize: "2.5rem", // increased from 2rem
//       marginTop: "0.3rem",
//       color: "#fff",
//       textDecoration: "none",
//       cursor: "pointer",
//       "&:hover": {
//         textDecoration: "underline",
//       },
//       "@media (max-width: 600px)": {
//         fontSize: "20px",
//       },
//     },
//   },
// });

// const FooterContact: FC = () => {
//   const classes = useStyles();
//  const handleClick = () => {
//     const mailtoLink =
//       "mailto:info@scalinggenai.com?subject=Scaling GenAI consultation request&body=Hello,%0D%0A%0D%0AI would like to know more about Scaling GenAI.%0D%0A%0D%0AName:%0D%0ACompany:%0D%0AEmail:%0D%0APhone:%0D%0A%0D%0ARegards,%0D%0Aname";
//     window.location.href = mailtoLink;
//   };
//   return (
//     <div className={classes.layout}>
//       {/* Left Section */}
//       <div className={classes.leftSection}>
//         <div className={classes.wrapper}>
//           <nav className={classes.nav}>
//             <Link to="/reskilling" className={classes.link}>
//               Reskilling
//             </Link>
//             <Link to="/ecosystem" className={classes.link}>
//               Ecosystem
//             </Link>
//             <Link to="/courses" className={classes.link}>
//               Courses
//             </Link>
//             <Link to="/about-us" className={classes.link}>
//               About
//             </Link>
//           </nav>

//           <nav className={classes.nav}>
//             <Link to="/privacy" className={classes.link}>
//               Privacy Policy
//             </Link>
//             <Link to="/cookies" className={classes.link}>
//               Cookie Policy
//             </Link>
//             <Link to="/terms" className={classes.link}>
//               General Terms
//             </Link>
//             <Link to="/refund" className={classes.link}>
//               Refund Policy
//             </Link>
//           </nav>
//         </div>

//         <div className={classes.socialWrapper}>
//           {/* <a
//             href="https://www.linkedin.com/in/amit-prabhu26"
//             target="_blank"
//             rel="noopener noreferrer"
//             aria-label="LinkedIn"
//           >
//             <FaLinkedin className={classes.icon} /> */}
//           <div className={classes.follow}>
//             Follow us on
//             <a
//               href="https://www.linkedin.com/company/digiculum/posts/?feedView=all"
//               target="_blank"
//               rel="noopener noreferrer"
//               className={classes.link}
//             >
//               <strong>LinkedIn</strong>
//             </a>
//           </div>

//           {/* <a
//             href="https://www.youtube.com/@theaiprabhu"
//             target="_blank"
//             rel="noopener noreferrer"
//             aria-label="YouTube"
//           >
//             <FaYoutube className={classes.icon} />
//           </a> */}

//           {/* <a
//             href="https://www.facebook.com/yourpage"
//             target="_blank"
//             rel="noopener noreferrer"
//             aria-label="Facebook"
//           >
//             <FaFacebook className={classes.icon} />
//           </a> */}

//           {/* <a
//             href="https://www.instagram.com/theaiprabhu"
//             target="_blank"
//             rel="noopener noreferrer"
//             aria-label="Instagram"
//           >
//             <FaInstagram className={classes.icon} />
//           </a> */}

//           {/* <a
//             href="https://twitter.com/yourhandle"
//             target="_blank"
//             rel="noopener noreferrer"
//             aria-label="Twitter"
//           >
//             <FaTwitter className={classes.icon} />
//           </a> */}
//         </div>

//         <div className={classes.contact}>info@digiculum.com</div>
//         <div>
//           <div className={classes.footerNote}>
//             Copyright 2026 © Digiculum. All Rights Reserved.
//           </div>

//           {/* <div className={classes.policies}>
//             <a href="#">Privacy Policy</a>
//             <span>|</span>
//             <a href="#">Cookie Policy</a>
//             <span>|</span>
//             <a href="#">General Terms</a>
//             <span>|</span>
//             <a href="#">Refund Policy</a>
//           </div> */}
//         </div>
//       </div>

//       {/* Right Section */}
//       <div className={classes.formWrapper}>
//         <div className={classes.heading}>Contact us</div>
//         <form>
//           <div className={classes.formRow}>
//             <input
//               type="text"
//               placeholder="First name *"
//               className={classes.input}
//             />
//             <input
//               type="text"
//               placeholder="Last name"
//               className={classes.input}
//             />
//           </div>
//           <input
//             type="email"
//             placeholder="Email *"
//             className={classes.input}
//             style={{ width: "100%", marginBottom: "1.2rem" }}
//           />
//           <textarea
//             placeholder="Write a message"
//             className={classes.textarea}
//           ></textarea>
//           <div className={classes.checkboxRow}>
//             <input type="checkbox" className={classes.checkbox} />
//             <label>Yes, subscribe me to your mailing list.</label>
//           </div>
//           <button type="submit" className={classes.submitButton} onClick={handleClick}>
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default FooterContact;

import { createUseStyles } from "react-jss";
import type { FC, FormEvent } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const useStyles = createUseStyles({
  layout: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#2c2b2b",
    color: "white",
    padding: "2rem",
    justifyContent: "space-evenly",
    fontFamily: "Arial, sans-serif",
  },
  leftSection: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  nav: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    marginBottom: "2rem",
  },
  link: {
    color: "white",
    cursor: "pointer",
    fontSize: "1rem",
  },
  contact: {
    fontSize: "1rem",
    marginBottom: "1rem",
  },
  icon: {
    fontSize: "1.2rem",
    opacity: 0.5,
    color: "white",
  },
  footerNote: {
    fontSize: "0.8rem",
    color: "white",
    marginTop: "3rem",
  },
  policies: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: "0.8rem",
    marginTop: "1rem",
    fontSize: "0.9rem",
    "& a": {
      color: "white",
      textDecoration: "underline",
    },
    "& span": {
      opacity: 0.6,
    },
  },
  formWrapper: {
    background: "white",
    padding: "2rem",
    borderRadius: 4,
    width: "400px",
    color: "black",
  },
  heading: {
    fontSize: "1.8rem",
    marginBottom: "1.5rem",
  },
  formRow: {
    display: "flex",
    gap: "1rem",
    marginBottom: "1.2rem",
  },
  input: {
    flex: 1,
    width: "90%",
    border: "none",
    borderBottom: "2px solid black",
    padding: "0.5rem 0",
    fontSize: "1rem",
    background: "transparent",
    outline: "none",
  },
  textarea: {
    width: "100%",
    height: "100px",
    border: "none",
    borderBottom: "2px solid black",
    padding: "0.5rem 0",
    fontSize: "1rem",
    background: "transparent",
    outline: "none",
    marginBottom: "1.2rem",
    fontFamily: "Arial, sans-serif",
  },
  checkboxRow: {
    display: "flex",
    alignItems: "center",
    marginBottom: "1.5rem",
    fontSize: "0.95rem",
  },
  checkbox: {
    marginRight: "0.5rem",
  },
  submitButton: {
    backgroundColor: "black",
    color: "white",
    padding: "0.7rem 1.5rem",
    fontSize: "1rem",
    borderRadius: "20px",
    border: "none",
    cursor: "pointer",
  },
  wrapper: {
    display: "flex",
    justifyContent: "space-between",
  },
  socialWrapper: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },
  "@media (max-width: 700px)": {
    layout: {
      flexDirection: "column-reverse",
      alignItems: "center",
      gap: "50px",
      padding: "1rem",
    },
    formWrapper: {
      width: "100%",
      padding: "1rem",
      marginTop: "1.5rem",
    },
    heading: {
      fontSize: "1.2rem",
      marginBottom: "1rem",
      textAlign: "center",
    },
    formRow: {
      flexDirection: "column",
      gap: "0.8rem",
    },
    input: {
      fontSize: "0.9rem",
      width: "100%",
    },
    textarea: {
      fontSize: "0.9rem",
      height: "80px",
    },
    link: {
      fontSize: "0.85rem",
    },
    checkboxRow: {
      fontSize: "0.85rem",
      flexDirection: "column",
      alignItems: "flex-start",
      gap: "0.5rem",
    },
    submitButton: {
      width: "100%",
      fontSize: "0.9rem",
      padding: "0.6rem",
    },
    socialWrapper: {
      justifyContent: "center",
      color: "white",
    },
    contact: {
      textAlign: "center",
    },
    footerNote: {
      fontSize: "0.7rem",
      textAlign: "center",
      marginTop: "1rem",
    },
  },
  follow: {
    flex: "1 1 40%",
    fontSize: "1.2rem",
    "& strong": {
      display: "block",
      fontSize: "2.5rem",
      marginTop: "0.3rem",
      color: "#fff",
      textDecoration: "none",
      cursor: "pointer",
      "&:hover": {
        textDecoration: "underline",
      },
      "@media (max-width: 600px)": {
        fontSize: "20px",
      },
    },
  },
});

const FooterContact: FC = () => {
  const classes = useStyles();

  // State hooks for form inputs
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const fullName = `${firstName} ${lastName}`.trim();

    const mailtoLink = `mailto:info@digiculum.com?subject=Digiculum consultation request&body=Hello,%0D%0A%0D%0AI would like to know more about Digiculum.%0D%0A%0D%0AName: ${fullName}%0D%0AEmail: ${email}%0D%0AMessage: ${message}%0D%0A%0D%0ARegards,%0D%0A${fullName}`;

    window.location.href = mailtoLink;

    // Reset form (optional)
    setFirstName("");
    setLastName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className={classes.layout}>
      {/* Left Section */}
      <div className={classes.leftSection}>
        <div className={classes.wrapper}>
          <nav className={classes.nav}>
            <Link to="/reskilling" className={classes.link}>
              Reskilling
            </Link>
            <Link to="/ecosystem" className={classes.link}>
              Ecosystem
            </Link>
            <Link to="/courses" className={classes.link}>
              Courses
            </Link>
            <Link to="/about-us" className={classes.link}>
              About
            </Link>
          </nav>

          <nav className={classes.nav}>
            <Link to="/privacy" className={classes.link}>
              Privacy Policy
            </Link>
            <Link to="/cookies" className={classes.link}>
              Cookie Policy
            </Link>
            <Link to="/terms" className={classes.link}>
              General Terms
            </Link>
            <Link to="/refund" className={classes.link}>
              Refund Policy
            </Link>
          </nav>
        </div>

        <div className={classes.socialWrapper}>
          <div className={classes.follow}>
            Follow us on
            <a
              href="https://www.linkedin.com/company/digiculum/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.link}
            >
              <strong>LinkedIn</strong>
            </a>
          </div>
        </div>

        <div className={classes.contact}>info@digiculum.com</div>
        <div>
          <div className={classes.footerNote}>
            Copyright 2026 © Digiculum. All Rights Reserved.
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className={classes.formWrapper}>
        <div className={classes.heading}>Contact us</div>
        <form onSubmit={handleSubmit}>
          <div className={classes.formRow}>
            <input
              type="text"
              placeholder="First name *"
              className={classes.input}
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Last name"
              className={classes.input}
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <input
            type="email"
            placeholder="Email *"
            className={classes.input}
            style={{ width: "100%", marginBottom: "1.2rem" }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            placeholder="Write a message"
            className={classes.textarea}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <div className={classes.checkboxRow}>
            <input type="checkbox" className={classes.checkbox} />
            <label>Yes, subscribe me to your mailing list.</label>
          </div>
          <button type="submit" className={classes.submitButton}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default FooterContact;
