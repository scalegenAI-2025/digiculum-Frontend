import React from "react";
import { createUseStyles } from "react-jss";
import Framework from "../../../../assets/mindset.png";

const useStyles = createUseStyles({
  container: {
    padding: "2rem",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#fff",
    color: "#000",
    maxWidth: "1000px",
    margin: "0 auto",
  },
  sectionTitleTop: {
    fontSize: "40px",
    fontWeight: "bold",
    margin: "0px",
    fontFamily: "Arial, sans-serif",
    paddingLeft: "2rem",
    paddingTop: "1rem",
  },
  sectionTitle: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    margin: "2rem 0 1rem",
    color: "#002c3e",
  },
  list: {
    paddingLeft: "1.5rem",
    lineHeight: 1.6,
  },
  bold: {
    fontWeight: "bold",
  },
  purpleText: {
    color: "#8000ff",
  },
  image: {
    // width: "100%",

    height: "300px",
    borderRadius: "6px",
    //objectFit: "contain",
  },
});

const GenAIMindsetOverview: React.FC = () => {
  const classes = useStyles();

  return (
    <>
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
            <span className={classes.bold}>
              Right mindset should be cultivated by individuals at different
              levels in the corporate hierarchy
            </span>
          </li>
          <li>Based on the growth mindset framework</li>
        </ul>

        {/* DIGITAL LEADERSHIP FRAMEWORK */}
        <h3 className={classes.sectionTitle}>Growth Mindset Framework</h3>
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
        <h3 className={classes.sectionTitle}>INTRODUCTORY TALK</h3>
        <ul className={classes.list}>
          <li>30-minute overview + 15 minutes of Q&A</li>
          <li>Optional and free of charge</li>
        </ul>
      </div>
    </>
  );
};

export default GenAIMindsetOverview;
