import React from "react";
import { createUseStyles } from "react-jss";
import Framework from "../../../../assets/rocketFrame.png";

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

    height: "600px",
    borderRadius: "6px",
    //objectFit: "contain",
  },
});

const GenAIOperationalOverView: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <h2 className={classes.sectionTitleTop}>Course</h2>
      <div className={classes.container}>
        {/* PROBLEM */}
        <h3 className={classes.sectionTitle}>PROBLEM</h3>
        <ul className={classes.list}>
          <li>
            Most of the global business incumbents have embarked on the AI/GenAI
            transformation journey
          </li>
          <li>
            As per a study by BCG, only 10% of them have scaled genAI, whereas
            90% of them are still lagging.
          </li>
          <li>
            This has caused a huge gap between scaling and lagging companies.
          </li>
          <li>
            One of the key reasons for this huge gap is a lack of operational
            readiness, i.e most of the enterprises are not operationally ready
            to scale genAI.
          </li>
        </ul>

        {/* SOLUTION */}
        <h3 className={classes.sectionTitle}>SOLUTION</h3>
        <ul className={classes.list}>
          <li>
            Enterprises should implement the Operational Readiness, a.k.a
            Readiness Rocket Framework.
            <span className={classes.bold}>
              It comprises the 4 readiness areas: Customers, Technology, Data,
              People; boosters, launchpad, strategy and a maturity assessment.
            </span>
          </li>
          <li>
            A convertible pilot or a genAI solution or MVP should be developed
            in parallel with operational readiness
          </li>
        </ul>

        {/* DIGITAL LEADERSHIP FRAMEWORK */}
        <h3 className={classes.sectionTitle}>READINESS ROCKET FRAMEWORK</h3>
        <img
          src={Framework}
          alt="Digital Leadership Framework"
          className={classes.image}
        />

        {/* FORMAT */}
        <h3 className={classes.sectionTitle}>FORMAT</h3>
        <ul className={classes.list}>
          <li>Instructor-driven online or classroom-based</li>
          <li>Duration: 12 hours spanning over 2 days</li>
          <li>
            <span className={classes.purpleText}>Target Audience:</span> All
            Leaders/Managers at levels L1, L2, L3 and L4
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

export default GenAIOperationalOverView;
