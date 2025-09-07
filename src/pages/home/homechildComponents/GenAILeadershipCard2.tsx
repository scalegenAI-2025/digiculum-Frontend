import React from "react";
import { createUseStyles } from "react-jss";
import starImage from "../../../assets/career_home.jpg"; // adjust path if needed

// const useStyles = createUseStyles({
//   container: {
//     display: "flex",
//     flexDirection: "row",
//     backgroundColor: "#ffffff",
//     // padding: "60px 0",
//     maxWidth: 1400,
//     height: "90vh",
//     margin: "0 auto",
//   },
//   textSection: {
//     flex: 1,
//     padding: "60px 40px",
//     display: "flex",
//     paddingRight: "0",
//     flexDirection: "column",
//     justifyContent: "center",
//   },
//   heading: {
//     fontSize: 44,
//     fontWeight: 400,
//     marginBottom: 20,
//     lineHeight: 1.4,
//     "& span": {
//       color: "#6a0dad",
//       fontWeight: 600,
//     },
//   },
//   subtext: {
//     fontSize: 20,
//     marginBottom: 30,
//     "& span": {
//       color: "#6a0dad",
//       fontWeight: 500,
//     },
//   },
//   button: {
//     backgroundColor: "#f9b233",
//     color: "#000",
//     border: "none",
//     padding: "12px 24px",
//     borderRadius: 4,
//     fontSize: 16,
//     cursor: "pointer",
//     transition: "background 0.3s ease",
//     alignSelf: "flex-start",
//     "&:hover": {
//       backgroundColor: "#e8a223",
//     },
//   },
//   imageSection: {
//     flex: 1,
//     backgroundImage: `url(${starImage})`,
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     borderTopLeftRadius: 0,
//     borderBottomLeftRadius: 0,
//   },
// });

const useStyles = createUseStyles({
  container: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#ffffff",
    maxWidth: 1400,
    minHeight: "60vh",
    margin: "0 auto",
    "@media (max-width: 768px)": {
      flexDirection: "column",
    },
    "@media (max-width: 500px)": {
      flexDirection: "column",
      minHeight: "60vh",
    },
  },
  textSection: {
    flex: 1,
    padding: "60px 40px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    "@media (max-width: 768px)": {
      padding: "40px 20px",
    },
    "@media (max-width: 500px)": {
      padding: "15px 15px",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
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
    "@media (max-width: 768px)": {
      fontSize: 32,
    },
    "@media (max-width: 500px)": {
      fontSize: 24,
      textAlign: "center", // ensure heading is centered
    },
  },
  subtext: {
    fontSize: 20,
    marginBottom: 30,
    "& span": {
      color: "#6a0dad",
      fontWeight: 500,
    },
    "@media (max-width: 768px)": {
      fontSize: 18,
    },
    "@media (max-width: 500px)": {
      fontSize: 14,
      textAlign: "center", // ensure subtext is centered
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
      fontSize: 14,
      padding: "10px 20px",
      alignSelf: "center", // center the button on small screens
    },
  },

  imageSection: {
    flex: 1,
    backgroundImage: `url(${starImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    "@media (max-width: 768px)": {
      height: 300, // slightly taller than before
    },
    "@media (max-width: 500px)": {
      height: 250, // bigger image on very small screens
      flex: "auto",
    },
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
          Start your <span>AI Reskilling Assessment </span>now
          {/* Cultivate the four essential <span>Competencies</span> */}
        </div>
        <button className={classes.button}>Find more</button>
      </div>
    </div>
  );
};

export default GenAILeadershipCard2;
