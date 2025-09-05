import React from "react";
import { createUseStyles } from "react-jss";
import coach from "../../../../assets/At the office-rafiki.png";

const useStyles = createUseStyles({
  container: {
    backgroundColor: "#ffffff",
    minHeight: "100vh",
    padding: 0,
    margin: 0,
  },
  content: {
    padding: "60px 60px",
    maxWidth: "1400px",
    margin: "0 auto",
    "@media (max-width: 768px)": {
      //  padding: "60px 40px",
      "@media (max-width: 600px)": {
        padding: "2rem",
      },
    },
  },
  title: {
    fontSize: "40px",
    fontWeight: "bold",
    color: "#000000",
    marginBottom: "40px",
    marginTop: 0,
    lineHeight: 1.1,
  },
  sectionIntro: {
    fontSize: "18px",
    color: "#333333",
    marginBottom: "30px",
    lineHeight: 1.4,
  },
  courseText: {
    fontStyle: "italic",
    fontWeight: "bold",
  },
  bulletList: {
    margin: "0 0 50px 0",
    paddingLeft: "20px",
  },
  bulletItem: {
    fontSize: "16px",
    color: "#333333",
    marginBottom: "12px",
    lineHeight: 1.5,
  },
  purpleText: {
    color: "#000",
    fontWeight: "bold",
  },
  coachingText: {
    fontStyle: "italic",
    fontWeight: "bold",
  },
  lowerSection: {
    display: "flex",
    alignItems: "flex-start",
    gap: "60px",

    // ✅ Mobile responsive
    "@media (max-width: 768px)": {
      flexDirection: "column",
      gap: "30px",
    },
  },
  leftSection: {
    flex: 1,
  },
  rightSection: {
    flex: "0 0 350px",

    "@media (max-width: 768px)": {
      flex: "1 1 auto",
    },
  },
  coachImage: {
    width: "100%",
    height: "auto",
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  },
});

const GenAITransformationCoach: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <h1 className={classes.title}>Coaching</h1>

        {/* Upper content and image side-by-side */}
        <div className={classes.lowerSection}>
          <div className={classes.leftSection}>
            <p className={classes.sectionIntro}>
              In the <span className={classes.courseText}>course</span>, you
              will be introduced to:
            </p>

            <ul className={classes.bulletList}>
              <li className={classes.bulletItem}>
                <span className={classes.purpleText}>
                  Digital Strategy Framework
                </span>{" "}
                to set a guidline for end-to-end strategy creation and execution
              </li>
              <li className={classes.bulletItem}>
                Assessments such as digital maturity, AI maturity and GenAI
                maturity{" "}
              </li>
              <li className={classes.bulletItem}>
                Situation analysis to create strategy using Porters 5 forces
                analysis
              </li>
              <li className={classes.bulletItem}>
                Critical steps for AI/GenAI strategy execution
              </li>
            </ul>
          </div>

          {/* Image next to the course section */}
          <div className={classes.rightSection}>
            <img
              src={coach}
              alt="Professional coach working on laptop"
              className={classes.coachImage}
            />
          </div>
        </div>

        {/* Coaching section below */}
        <div>
          <p className={classes.sectionIntro}>
            In the <span className={classes.coachingText}>coaching</span>, there
            will be:
          </p>

          <ul className={classes.bulletList}>
            <li className={classes.bulletItem}>
              Commitment <span className={classes.purpleText}>contract</span>{" "}
              with the Coach
            </li>
            <li className={classes.bulletItem}>
              Continuous <span className={classes.purpleText}>check-ins</span>{" "}
              on strategy creation and execution
            </li>
            <li className={classes.bulletItem}>
              Problem-solving and{" "}
              <span className={classes.purpleText}>behavior</span> building
            </li>
            <li className={classes.bulletItem}>
              Continuous <span className={classes.purpleText}>feedback</span> on
              the strategy development
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GenAITransformationCoach;
