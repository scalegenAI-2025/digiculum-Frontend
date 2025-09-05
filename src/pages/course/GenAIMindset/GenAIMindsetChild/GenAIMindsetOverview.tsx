import React from "react";
import { createUseStyles } from "react-jss";
import Framework from "../../../../assets/gm.png";

const useStyles = createUseStyles({
  container: {
    padding: "2rem",
    // fontFamily: "Arial, sans-serif",
    backgroundColor: "#fff",
    color: "#000",
    maxWidth: "1000px",
    margin: "0 auto",
  },
  sectionTitleTop: {
    fontSize: "40px",
    fontWeight: "bold",
    margin: "0px",
    // fontFamily: "Arial, sans-serif",
    // paddingLeft: "2rem",
    paddingTop: "1rem",
    display: "flex",
    justifyContent: "center",
    marginTop: "60px",
    "@media (max-width: 600px)": {
      paddingLeft: "0rem",
    },
  },
  sectionTitle: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    margin: "2rem 0 1rem",
    color: "#000",
  },
  list: {
    paddingLeft: "1.5rem",
    lineHeight: 1.6,
  },
  bold: {
    fontWeight: "bold",
  },
  purpleText: {
    color: "#000",
    fontWeight: "bold",
  },
  image: {
    // width: "100%",

    height: "300px",
    borderRadius: "6px",
    //objectFit: "contain",
    "@media (max-width: 600px)": {
      height: "180px",
    },
    "@media (max-width: 500px)": {
      height: "140px",
    },
    "@media (max-width: 450px)": {
      height: "120px",
    },
  },
  button: {
    backgroundColor: "#1e3a5f",
    color: "white",
    border: "none",
    //  margin: "20px",
    borderRadius: "8px",
    padding: "16px 32px",
    fontSize: "1.1rem",
    fontWeight: "500",
    cursor: "pointer",
    transition: "all 0.3s ease",
    margin: "-30px auto" /* auto margins center block elements horizontally */,
    display: "block",
    boxShadow: "0 6px 12px rgba(92, 94, 95, 0.6)",
    gap: "10px",
    textDecoration: "none",
    "&:hover": {
      backgroundColor: "#2c4a6b",
      transform: "translateY(-2px)",
      boxShadow: "0 4px 12px rgba(30, 58, 95, 0.3)",
    },
    "&:active": {
      transform: "translateY(0)",
    },
    "@media (max-width: 768px)": {
      padding: "14px 28px",
      fontSize: "1rem",
    },
  },
});

const GenAIMindsetOverview: React.FC = () => {
  const classes = useStyles();
  const handleClick = () => {
    const mailtoLink =
      "mailto:info@scalinggenai.com?subject=Scaling GenAI consultation request&body=Hello,%0D%0A%0D%0AI would like to know more about Scaling GenAI.%0D%0A%0D%0AName:%0D%0ACompany:%0D%0AEmail:%0D%0APhone:%0D%0A%0D%0ARegards,%0D%0Aname";
    window.location.href = mailtoLink;
  };
  return (
    <>
      <button className={classes.button} onClick={handleClick}>
        Book a Consultation →
      </button>
      <h2 className={classes.sectionTitleTop}>Course</h2>
      <div className={classes.container}>
        {/* PROBLEM */}
        <h3 className={classes.sectionTitle}>PROBLEM</h3>
        <ul className={classes.list}>
          <li>Different people have reacted differently to the genAI hype</li>
          <li>The reaction depends on an individual mindset</li>
          <li>
            Like individuals, the organizations have a mindset too, which is the
            weighted average of the mindset of all the indviduals
          </li>
          <li>
            Different organizations have reacted differently to the genAI hype
            based on their mindsets
          </li>
          <li>
            Scaled adoption of genAI is very slow in organizations with skeptic
            mindsets
          </li>
        </ul>

        {/* SOLUTION */}
        <h3 className={classes.sectionTitle}>SOLUTION</h3>
        <ul className={classes.list}>
          <li>
            Inorder to scale generative AI, an organization should cultivate
            right mindset
          </li>
          <li>
            Right mindset should be cultivated by individuals at different
            levels in the corporate hierarchy
          </li>
          <li>Based on the growth mindset framework</li>
        </ul>

        {/* DIGITAL LEADERSHIP FRAMEWORK */}

        <h3 className={classes.sectionTitle}>GROWTH MINDSET FRAMEWORK</h3>
        <img
          src={Framework}
          alt="Digital Leadership Framework"
          className={classes.image}
        />

        {/* FORMAT */}
        <h3 className={classes.sectionTitle}>FORMAT</h3>
        <ul className={classes.list}>
          <li>Instructor-driven online or classroom-based</li>
          <li>Duration: 4 hours</li>
          <li>
            <span className={classes.purpleText}>Target Audience:</span>{" "}
            Employees at all levels in the organization hierarchy
          </li>
        </ul>

        {/* WHAT MAKES THIS COURSE UNIQUE */}
        <h3 className={classes.sectionTitle}>WHAT MAKES THIS COURSE UNIQUE?</h3>
        <ul className={classes.list}>
          <li>
            <span className={classes.purpleText}>Coaching</span> to ensure
            practical application of competencies at workplace
          </li>
          <li>
            <span className={classes.purpleText}>Call-to-Action</span> to speed
            up your organization's AI/GenAI deployment
          </li>
          <li>
            <span className={classes.purpleText}>Content</span> customization to
            differentiate from competitors
          </li>
          <li>
            <span className={classes.purpleText}>Collaboration</span> through
            ecosystem
          </li>
        </ul>

        {/* INTRODUCTORY TALK */}
      </div>
    </>
  );
};

export default GenAIMindsetOverview;
