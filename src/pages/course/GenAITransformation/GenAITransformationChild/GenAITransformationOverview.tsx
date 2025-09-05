import React from "react";
import { createUseStyles } from "react-jss";
import Framework from "../../../../assets/dsf1 (1).png";

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
    display: "flex",
    justifyContent: "center",
    // fontFamily: "Arial, sans-serif",
    //  paddingLeft: "2rem",
    paddingTop: "1rem",
    marginTop: "60px",
    "@media (max-width: 900px)": {
      paddingLeft: "0rem",
    },
  },
  sectionTitle: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    margin: "2rem 0 1rem",
    //color: "#002c3e",
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
    width: "75%",
    margin: "1rem 0",
    borderRadius: "6px",
    objectFit: "contain",
    "@media (max-width: 500px)": {
      width: "95%",
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

const CourseOverview: React.FC = () => {
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
          <li>
            Most of the global business incumbents have embarked on the AI/GenAI
            transformation journey
          </li>
          <li>
            Only a few have clarity where they are heading and what they want to
            do
          </li>
          <li>Most of them deployed genAI pilots without a scaling strategy</li>
          <li>As a result, 90% pilots will not make it to production</li>
          <li>
            And those with a scaling strategy, normally don’t have a
            comprehensive end-to-end framework
          </li>
        </ul>

        {/* SOLUTION */}
        <h3 className={classes.sectionTitle}>SOLUTION</h3>
        <ul className={classes.list}>
          <li>GenAI Pilots should be selected with a scaling strategy</li>
          <li>
            Scaling strategy can be developed using Digital Strategy Framework
          </li>
          <li>
            It is an end-to-end framework comprising strategy creation, strategy
            execution, along with wanted position and strategic priorities
          </li>
        </ul>

        {/* DIGITAL LEADERSHIP FRAMEWORK */}
        <h3 className={classes.sectionTitle}>DIGITAL STRATEGY FRAMEWORK</h3>
        <img
          src={Framework}
          alt="Digital Leadership Framework"
          className={classes.image}
        />

        {/* FORMAT */}
        <h3 className={classes.sectionTitle}>FORMAT</h3>
        <ul className={classes.list}>
          <li>Instructor-driven online or classroom-based</li>
          <li>Duration: 6 hours</li>
          <li>
            <span className={classes.purpleText}>Target Audience: </span>
            All Leaders/Managers at levels L1,L2,L3 and L4. strategists,
            transformation drivers, change agents, program/project managers
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

export default CourseOverview;
