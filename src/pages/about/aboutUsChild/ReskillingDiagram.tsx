import React from "react";
import { createUseStyles } from "react-jss";
import image from "../../../assets/reskill-img.png";

const useStyles = createUseStyles({
  outerContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center", // left-align header
    width: "100%", // span full width for proper left alignment
  },
  header: {
    fontWeight: 600,
    color: "black",
    textAlign: "left", // left align text inside h1
    marginLeft: 20, // optional spacing from left
    "@media (max-width: 500px)": {
      fontSize: "28px",
    },
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "90vw", // full viewport width
    height: "50vh", // full viewport height
    overflow: "hidden",
    boxSizing: "border-box",
    padding: 0,
    marginTop: 50,
    "@media (max-width: 500px)": {
      height: "20vh", // full viewport heigh marginTop: 50,
      marginTop: 0,
      marginBottom: 40,
    },
  },
  image: {
    maxWidth: "100%",
    maxHeight: "100%",
    width: "auto",
    height: "auto",
    objectFit: "contain", // scales image inside the box, no cropping
  },
});

const ReskillingDiagram: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.outerContainer}>
      <h1 className={classes.header}>
        <b>We focus on RESKILLING</b>
      </h1>
      <div className={classes.container}>
        <img src={image} alt="Reskilling Diagram" className={classes.image} />
      </div>
    </div>
  );
};

export default ReskillingDiagram;
