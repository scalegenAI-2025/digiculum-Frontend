import React from "react";
import { createUseStyles } from "react-jss";
import starImage from "../../../assets/Leaders_home.jpg";
import { useNavigate } from "react-router-dom";

const useStyles = createUseStyles({
  container: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#ffffff",
    maxWidth: 1400,
    height: "90vh",
    margin: "0 auto",

    "@media (max-width: 500px)": {
      display: "flex",
      flexDirection: "column", // stack
      height: "auto",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  textSection: {
    flex: 1,
    padding: "60px 40px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    paddingRight: 0,

    "@media (max-width: 500px)": {
      padding: "24px 16px",
      textAlign: "center",

      justifyContent: "center",
      alignItems: "center",
      order: 2, // text shows AFTER the image
    },
  },
  heading: {
    fontSize: 44,
    fontWeight: 400,
    marginBottom: 20,
    lineHeight: 1.4,
    "& span": {
      color: "#6a0dad",
      fontWeight: 600,
    },
    "@media (max-width: 500px)": {
      fontSize: 28,
      lineHeight: 1.3,
    },
  },
  subtext: {
    fontSize: 20,
    marginBottom: 30,
    "& span": {
      color: "#6a0dad",
      fontWeight: 500,
    },
    "@media (max-width: 500px)": {
      fontSize: 16,
      marginBottom: 20,
    },
  },
  button: {
    backgroundColor: "#f9b233",
    color: "#000",
    border: "none",
    padding: "12px 24px",
    borderRadius: 4,
    fontSize: 16,
    cursor: "pointer",
    transition: "background 0.3s ease",
    alignSelf: "flex-start",
    "&:hover": {
      backgroundColor: "#e8a223",
    },
    "@media (max-width: 500px)": {
      alignSelf: "center",
      fontSize: 14,
      padding: "10px 20px",
    },
  },
  imageSection: {
    flex: 1,
    backgroundImage: `url(${starImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    "@media (max-width: 500px)": {
      aspectRatio: "16/9", // keeps it visible
      width: "100%",
      order: 1, // image FIRST
    },
  },
});

const GenAILeadershipCard: React.FC = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <div className={classes.container}>
      <div className={classes.imageSection}></div>
      <div className={classes.textSection}>
        <div className={classes.heading}>
          Will GenAI <span>scale</span> or fail?
          <br />
          It depends on how
          <br />
          leaders act.
        </div>
        <div className={classes.subtext}>
          Cultivate the four essential <span>Competencies</span>
        </div>
        {/* <button className={classes.button}>Find more</button> */}
        <button
          className={classes.button}
          onClick={() =>
            navigate("/courses/Essential-Competencies-of-AI/GenAI-Leader")
          }
        >
          Find more
        </button>
      </div>
    </div>
  );
};

export default GenAILeadershipCard;
