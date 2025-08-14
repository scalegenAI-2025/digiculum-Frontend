// import React, { FC } from 'react';
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
    justifyContent: "space-around",
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
    fontSize: "0.8rem",
    color: "white",
    marginTop: "1rem",
    "& a": {
      color: "white",
      textDecoration: "underline",
      margin: "0 0.5rem",
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
});

const FooterContact: FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.layout}>
      {/* Left Section */}
      <div className={classes.leftSection}>
        <div>
          <div className={classes.nav}>
            <div className={classes.link}>Reskilling</div>
            <div className={classes.link}>Ecosystem</div>
            <div className={classes.link}>Assessment</div>
            <div className={classes.link}>Enterprises</div>
          </div>
          <div className={classes.contact}>info@digiculum.com</div>

          <FaLinkedin className={classes.icon} />
          <span> {"  "}</span>
          <FaYoutube className={classes.icon} />
          <span> {"  "}</span>
          <FaFacebook className={classes.icon} />
          <span> {"  "}</span>
          <FaInstagram className={classes.icon} />
          <span> {"  "}</span>
          <FaTwitter className={classes.icon} />
        </div>
        <div>
          <div className={classes.footerNote}>
            Copyright 2025 © Digiculum. All Rights Reserved.
          </div>
          <div className={classes.policies}>
            <a href="#">Privacy Policy</a>|<a href="#">Cookie Policy</a>|
            <a href="#">General Terms</a>|<a href="#">Refund Policy</a>
          </div>
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
