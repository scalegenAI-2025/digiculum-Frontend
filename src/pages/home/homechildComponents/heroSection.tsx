import React from "react";
import { createUseStyles } from "react-jss";

type HeroSectionProps = unknown;

const useStyles = createUseStyles({
  hero: {
    backgroundColor: "#3a3a3a",
    minHeight: "250px",
    display: "flex",
    alignItems: "center",
    //  padding: "60px 40px",
    // fontFamily:
    //   '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "1fr 2fr",
    // gap: "80px",
    alignItems: "center",
    width: "100%",
    "@media (max-width: 768px)": {
      gridTemplateColumns: "1fr",
      gap: "40px",
      textAlign: "center",
    },
  },
  leftSection: {
    display: "flex",
    justifyContent: "center",
    "@media (max-width: 768px)": {
      justifyContent: "center",
    },
  },
  title: {
    fontSize: "44px",
    //  fontWeight: "300",
    color: "#ffffff",
    margin: 0,
    letterSpacing: "-0.02em",
    "@media (max-width: 768px)": {
      fontSize: "2.5rem",
    },
  },
  rightSection: {
    color: "#ffffff",
    fontSize: "1.1rem",
    lineHeight: "1.7",
    //fontWeight: "300",
  },
  highlight: {
    color: "#E547ED",
    //  fontWeight: "400",
  },
  divider: {
    width: "60px",
    height: "1px",
    backgroundColor: "#666",
    margin: "30px 0",
  },
  para: {
    fontSize: "24px",
    marginTop: "0px",
  },
  para1: {
    fontSize: "24px",
    marginBottom: "0px",
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
            potential to elevate humanity to unprecedented heights.
          </p>
          <p className={classes.para}>
            With a profound commitment to benefiting humanity, Digiculum was
            <br></br>
            founded.
          </p>
          <div className={classes.divider}></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
