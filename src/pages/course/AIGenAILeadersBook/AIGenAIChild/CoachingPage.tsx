import React from "react";
import { createUseStyles } from "react-jss";
import coach from "../../../../assets/At the office-rafiki.png";

const useStyles = createUseStyles({
  container: {
    backgroundColor: "#ffffff",
    minHeight: "100vh",
    margin: 0,
    padding: 0,
  },
  content: {
    padding: "60px 60px",
    maxWidth: "1400px",
    margin: "0 auto",
    "@media (max-width: 600px)": {
      padding: "2rem",
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
    listStyleType: "disc",
  },
  bulletItem: {
    fontSize: "16px",
    color: "#333333",
    marginBottom: "12px",
    lineHeight: 1.5,
  },
  purpleText: {
    fontWeight: "bold",
    color: "#000",
  },
  coachingText: {
    fontStyle: "italic",
    fontWeight: "bold",
  },
  lowerSection: {
    display: "flex",
    alignItems: "flex-start",
    gap: "60px",
    flexDirection: "row",

    "@media (max-width: 600px)": {
      flexDirection: "column",
    },
  },
  leftSection: {
    flex: 1,
  },
  rightSection: {
    flex: "0 0 350px",
    maxWidth: "350px",
    width: "100%",
  },
  coachImage: {
    width: "100%",
    height: "auto",
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  },
});

const CoachingPage: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <h1 className={classes.title}>Coaching</h1>

        {/* Course section */}
        <div className={classes.lowerSection}>
          <div className={classes.leftSection}>
            <p className={classes.sectionIntro}>
              In the <span className={classes.courseText}>course</span>, you
              will be introduced to:
            </p>

            <ul className={classes.bulletList}>
              <li className={classes.bulletItem}>
                <span className={classes.purpleText}>
                  Growth Mindset Cultivation Framework
                </span>{" "}
                to ensure readiness to Reskilling for 12 New AI/GenAI Job Roles
              </li>
              <li className={classes.bulletItem}>
                Reinforcing connections with Key AI Stakeholders through{" "}
                <span className={classes.purpleText}>
                  12-Week Empathy program
                </span>
              </li>
              <li className={classes.bulletItem}>
                Identifying AI/GenAI{" "}
                <span className={classes.purpleText}>investment areas</span>{" "}
                based on Informed Decision-Making Framework
              </li>
              <li className={classes.bulletItem}>
                7 important{" "}
                <span className={classes.purpleText}>scaling actions</span> to
                be taken using the Fast Execution and{" "}
                <span className={classes.purpleText}>
                  Rocket Readiness Framework
                </span>
              </li>
            </ul>
          </div>

          {/* Right side image */}
          <div className={classes.rightSection}>
            <img
              src={coach}
              alt="Professional coach working on laptop"
              className={classes.coachImage}
            />
          </div>
        </div>

        {/* Coaching section */}
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
              on implementation of the four competencies
            </li>
            <li className={classes.bulletItem}>
              Problem-solving and{" "}
              <span className={classes.purpleText}>behavior</span> building
            </li>
            <li className={classes.bulletItem}>
              Continuous <span className={classes.purpleText}>feedback</span> on
              the personal development
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CoachingPage;
