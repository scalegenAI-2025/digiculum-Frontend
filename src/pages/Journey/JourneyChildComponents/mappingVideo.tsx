import React from "react";
import { createUseStyles } from "react-jss";
import ccd from "../../../assets/ccd.png";

const useStyles = createUseStyles({
  outerContainer: {
    backgroundColor: "black",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    // justifyContent: "center",
    //alignItems: "center",
    // paddingBottom: "150px",
    "@media (max-width: 500px)": {
      height: "60vh",
    },
  },
  container: {
    width: "85%", // full width
    height: "84%",
    display: "flex",
    justifyContent: "center",
    marginTop: "100px",
    "@media (max-width: 500px)": {
      marginBottom: "50px",
      marginTop: "140px",
    },
  },
  image: {
    width: "100%", // scale image to fit container width
    height: "auto", // maintain aspect ratio
    display: "block", // remove inline spacing
    marginLeft: "200px",
    "@media (max-width: 1000px)": {
      marginLeft: "0px",
    },
    "@media (max-width: 500px)": {
      marginLeft: "70px",
    },
  },
  text: {
    color: "white",
    paddingLeft: 70,
    paddingRight: 70,
    paddingBottom: 60,
    fontSize: "3rem",
    textAlign: "center",

    "@media (max-width: 500px)": {
      fontSize: "1rem", // or whatever looks right
      paddingLeft: 20,
      paddingRight: 20,
      paddingBottom: 30,
      marginTop: "0px",
    },
  },
  highlight: {
    color: "#E547ED",
    fontSize: "3.2rem",
    "@media (max-width: 500px)": {
      fontSize: "1.2rem", // or whatever looks right
    },
  },
  para: {
    color: "black",
    fontSize: "20px",
    //textAlign: "center",
    paddingLeft: "70px",
    paddingTop: "30px",
    paddingRight: "70px",
    "@media (max-width: 500px)": {
      fontSize: "18px", // or whatever looks right
    },
  },
});

const images: string[] = [ccd];

const AIReskillVideo: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.outerContainer}>
        <div className={classes.container}>
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`AI Journey ${idx}`}
              className={classes.image}
            />
          ))}
        </div>
        <h3 className={classes.text}>
          AI/GenAI Reskilling <span className={classes.highlight}>Journey</span>{" "}
          Explained
        </h3>
      </div>
      <p className={classes.para}>
        After completing the AI/GenAI Reskilling Assessment, a target role is
        allocated to the user from the list of 12 new AI/GenAI Roles. Based on
        the target role, certain reskilling tracks are assigned. See the mapping
        below:{" "}
      </p>
    </>
  );
};

export default AIReskillVideo;
