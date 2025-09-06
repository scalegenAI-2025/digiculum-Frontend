import React from "react";
import { createUseStyles } from "react-jss";

type HeroSectionProps = unknown;

const useStyles = createUseStyles({
  hero: {
    backgroundColor: "#3a3a3a",
    minHeight: "250px",
    display: "flex",
    alignItems: "center",
    padding: "40px 20px",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "1fr 2fr",
    alignItems: "center",
    width: "100%",
    gap: "60px",
    "@media (max-width: 768px)": {
      gridTemplateColumns: "1fr",
      gap: "40px",
      textAlign: "center",
    },
    "@media (max-width: 500px)": {
      gap: "20px",
      padding: "0 10px",
    },
  },
  leftSection: {
    display: "flex",
    justifyContent: "center",
  },
  title: {
    fontSize: "44px",
    color: "#ffffff",
    margin: 0,
    letterSpacing: "-0.02em",
    "@media (max-width: 768px)": {
      fontSize: "2.5rem",
    },
    "@media (max-width: 500px)": {
      fontSize: "2rem",
    },
  },
  rightSection: {
    color: "#ffffff",
    fontSize: "1.1rem",
    lineHeight: "1.7",
    "@media (max-width: 500px)": {
      fontSize: "1rem",
    },
  },
  highlight: {
    color: "#E547ED",
  },
  divider: {
    width: "60px",
    height: "1px",
    backgroundColor: "#666",
    margin: "30px 0",
    "@media (max-width: 500px)": {
      width: "40px",
      margin: "20px auto",
    },
  },
  para: {
    fontSize: "24px",
    marginTop: "0px",
    "@media (max-width: 500px)": {
      fontSize: "18px",
    },
  },
  para1: {
    fontSize: "24px",
    marginBottom: "0px",
    "@media (max-width: 500px)": {
      fontSize: "18px",
    },
  },
});

const HeroSection: React.FC<HeroSectionProps> = () => {
  const classes = useStyles();

  return (
    <section className={classes.hero}>
      <div className={classes.container}>
        <div className={classes.leftSection}>
          <h1 className={classes.title}>We Believe...</h1>
        </div>
        <div className={classes.rightSection}>
          <p className={classes.para1}>
            that <span className={classes.highlight}>AI</span> holds the
            potential to elevate humanity to unprecedented heights. With a
            profound commitment to benefiting humanity, Digiculum was founded.
          </p>
          <p className={classes.para}></p>

          {/* </p> */}
          <div className={classes.divider}></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
