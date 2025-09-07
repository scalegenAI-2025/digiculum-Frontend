import React from "react";
import { createUseStyles } from "react-jss";
import Navbar from "./Navbar";
import FooterContact from "./FooterContact";

const useStyles = createUseStyles({
  container: {
    //  maxWidth: 800,
    margin: "0 auto",
    padding: "2rem",
    // fontFamily: "'Segoe UI', sans-serif",
    lineHeight: 1.6,
    backgroundColor: "#f9f9f9",
    borderRadius: "12px",
    marginTop: "100px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
  },
  header: {
    fontSize: "2rem",
    fontWeight: "bold",
    marginBottom: "1rem",
    color: "#333",
  },
  content: {
    fontSize: "1rem",
    color: "#555",
  },
});

const RefundPolicy: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <Navbar />
      <div className={classes.container}>
        <h1 className={classes.header}>Refund Policy</h1>
        <p className={classes.content}>
          Our courses and services are not refundable.
        </p>
      </div>
      <FooterContact />
    </>
  );
};

export default RefundPolicy;
