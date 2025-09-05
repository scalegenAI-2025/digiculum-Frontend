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
    padding: "60px 80px",
    maxWidth: "1400px",
    margin: "0 auto",

    "@media (max-width: 768px)": {
      // padding: "40px 20px",
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
    paddingLeft: "20px",
  },
  bulletItem: {
    fontSize: "16px",
    color: "#333333",
    marginBottom: "12px",
    lineHeight: 1.5,
  },
  subList: {
    listStyleType: "circle",
    paddingLeft: "20px",
    marginTop: "8px",
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

    "@media (max-width: 900px)": {
      flexDirection: "column",
      gap: "30px",
    },
  },
  leftSection: {
    flex: 1,
  },
  rightSection: {
    flex: "0 0 350px",

    "@media (max-width: 900px)": {
      flex: "0 0 auto",
      width: "100%",
      maxWidth: "400px",
    },
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

        {/* Upper content and image side-by-side */}
        <div className={classes.lowerSection}>
          <div className={classes.leftSection}>
            {/* <p className={classes.sectionIntro}>
              In the <span className={classes.courseText}>course</span>, you
              will be introduced to:
            </p> */}

            <ul className={classes.bulletList}>
              <li className={classes.bulletItem}>
                Three types of technical professionls would enroll in the
                course:
                <ul className={classes.subList}>
                  <li>Type A: Same role, same job description, No AI/GenAI</li>
                  <li>
                    Type B: Same role, modified job description, Partial
                    AI/GenAI
                  </li>
                  <li>Type C: New role, new job description, Full AI/GenAI</li>
                </ul>
              </li>
              <li className={classes.bulletItem}>
                For Type A, coaching will include transition to Type B or Type
                C, based on participant’s interest
              </li>
              <li className={classes.bulletItem}>
                For Type B, coaching will include dealing with change in job
                description
              </li>
              <li className={classes.bulletItem}>
                For Type C, coaching will include bringing innovations and
                productivity into daily jobs
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
          <p className={classes.sectionIntro}>The coaching format comprises:</p>

          <ul className={classes.bulletList}>
            <li className={classes.bulletItem}>
              Commitment <span className={classes.purpleText}>contract</span>{" "}
              with the Coach
            </li>
            <li className={classes.bulletItem}>
              Continuous <span className={classes.purpleText}>check-ins</span>{" "}
              on implementation of the technical concepts
            </li>
            <li className={classes.bulletItem}>
              Problem-solving and{" "}
              <span className={classes.purpleText}>behavior</span> building
            </li>
            <li className={classes.bulletItem}>
              Continuous <span className={classes.purpleText}>feedback</span> on
              the technical competence development
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CoachingPage;
