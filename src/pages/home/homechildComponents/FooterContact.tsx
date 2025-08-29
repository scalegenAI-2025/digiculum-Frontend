import { createUseStyles } from "react-jss";
import {
  FaLinkedin,
  FaYoutube,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import type { FC } from "react";

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
    textDecoration: "underline",
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
      opacity: 0.6, // subtle vertical bar
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
    //paddingTop: "1rem",
  },
});

const FooterContact: FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.layout}>
      {/* Left Section */}
      <div className={classes.leftSection}>
        <div className={classes.wrapper}>
          <div className={classes.nav}>
            <div className={classes.link}>Reskilling</div>
            <div className={classes.link}>Ecosystem</div>
            <div className={classes.link}>Assessment</div>
            <div className={classes.link}>Enterprises</div>
          </div>
          <div className={classes.nav}>
            <div className={classes.link}>Privacy Policy</div>
            <div className={classes.link}>Cookie Policy</div>
            <div className={classes.link}>General Terms</div>
            <div className={classes.link}>Refund Policy</div>
          </div>
        </div>
        <div className={classes.socialWrapper}>
          <FaLinkedin className={classes.icon} />
          <FaYoutube className={classes.icon} />
          <FaFacebook className={classes.icon} />
          <FaInstagram className={classes.icon} />
          <FaTwitter className={classes.icon} />
        </div>

        <div className={classes.contact}>info@digiculum.com</div>
        <div>
          <div className={classes.footerNote}>
            Copyright 2025 © Digiculum. All Rights Reserved.
          </div>

          {/* <div className={classes.policies}>
            <a href="#">Privacy Policy</a>
            <span>|</span>
            <a href="#">Cookie Policy</a>
            <span>|</span>
            <a href="#">General Terms</a>
            <span>|</span>
            <a href="#">Refund Policy</a>
          </div> */}
        </div>
      </div>

      {/* Right Section */}
      <div className={classes.formWrapper}>
        <div className={classes.heading}>Contact us</div>
        <form>
          <div className={classes.formRow}>
            <input
              type="text"
              placeholder="First name *"
              className={classes.input}
            />
            <input
              type="text"
              placeholder="Last name"
              className={classes.input}
            />
          </div>
          <input
            type="email"
            placeholder="Email *"
            className={classes.input}
            style={{ width: "100%", marginBottom: "1.2rem" }}
          />
          <textarea
            placeholder="Write a message"
            className={classes.textarea}
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
