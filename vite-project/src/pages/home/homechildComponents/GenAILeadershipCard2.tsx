import React from "react";
import { createUseStyles } from "react-jss";
import starImage from "../../../assets/write.jpg"; // adjust path if needed

const useStyles = createUseStyles({
  container: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#ffffff",
    // padding: "60px 0",
    maxWidth: 1400,
    height: "90vh",
    margin: "0 auto",
  },
  textSection: {
    flex: 1,
    padding: "60px 40px",
    display: "flex",
    paddingRight: "0",
    flexDirection: "column",
    justifyContent: "center",
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
  },
  subtext: {
    fontSize: 20,
    marginBottom: 30,
    "& span": {
      color: "#6a0dad",
      fontWeight: 500,
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
  },
  imageSection: {
    flex: 1,
    backgroundImage: `url(${starImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
});

const GenAILeadershipCard2: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.imageSection}></div>
      <div className={classes.textSection}>
        <div className={classes.heading}>
          Are you still unsure about your AI/GenAI path?
        </div>
        <div className={classes.subtext}>
          Start your <span>Career Assessment </span>now
          {/* Cultivate the four essential <span>Competencies</span> */}
        </div>
        <button className={classes.button}>Find more</button>
      </div>
    </div>
  );
};

export default GenAILeadershipCard2;
