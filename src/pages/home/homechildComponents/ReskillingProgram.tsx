import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    fontFamily: '"Segoe UI", sans-serif',
    textAlign: "center",
  },
  topSection: {
    backgroundColor: "#fff",
    padding: "80px 20px",

    "@media (max-width: 500px)": {
      padding: "40px 16px",
    },
  },
  heading: {
    fontSize: 42,
    fontWeight: 500,
    marginBottom: 16,

    "@media (max-width: 500px)": {
      fontSize: 28,
      lineHeight: 1.3,
    },
  },
  subText: {
    fontSize: 18,
    color: "#555",
    marginBottom: 24,
    lineHeight: 1.5,

    "@media (max-width: 500px)": {
      fontSize: 15,
      marginBottom: 16,
    },
  },
  button: {
    backgroundColor: "#f5a623",
    color: "#000",
    border: "none",
    padding: [12, 24],
    fontSize: 16,
    cursor: "pointer",
    borderRadius: 4,
    transition: "background-color 0.3s ease",

    "&:hover": {
      backgroundColor: "#e49c1a",
    },

    "@media (max-width: 500px)": {
      fontSize: 14,
      padding: [10, 20],
    },
  },
  bottomSection: {
    padding: "80px 20px",
    paddingBottom: "50px",

    "@media (max-width: 500px)": {
      padding: "40px 16px",
    },
  },
  smallText: {
    fontSize: 18,
    color: "#555",
    marginBottom: 12,

    "@media (max-width: 500px)": {
      fontSize: 14,
      marginBottom: 8,
    },
  },
  largeText: {
    fontSize: 36,
    fontWeight: 500,
    marginBottom: 24,

    "@media (max-width: 500px)": {
      fontSize: 26,
      lineHeight: 1.3,
      marginBottom: 16,
    },
  },
  boldSpan: {
    fontWeight: "bold",
  },
});

const ReskillingProgram: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      {/* Top Section (uncomment if needed) */}
      {/* <div className={classes.topSection}>
        <h1 className={classes.heading}>
          AI/GenAI Reskilling Early Adopter Program
        </h1>
        <p className={classes.subText}>
          Be an early adopter and get a lifetime access to courses, coaching,
          <br />
          and collaboration through ecosystems
        </p>
        <button className={classes.button}>Enroll now</button>
      </div> */}

      {/* Bottom Section */}
      <div className={classes.bottomSection}>
        <p className={classes.smallText}>
          We do not offer just <span className={classes.boldSpan}>Courses</span>
        </p>
        <p className={classes.largeText}>
          We offer personalized and continuous{" "}
          <span className={classes.boldSpan}>AI Reskilling Journey</span>
        </p>
        {/* <button className={classes.button}>Assessment</button> */}
      </div>
    </div>
  );
};

export default ReskillingProgram;
