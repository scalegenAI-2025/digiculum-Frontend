import React from "react";
import { createUseStyles } from "react-jss";
import image from "../../../assets/WHY1 (1).png";

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
    width: "95vw", // viewport width for image container
    height: "100vh", // viewport height for image container
    overflow: "hidden",
    boxSizing: "border-box",
    padding: 0,
    marginTop: 50,
    "@media (max-width: 500px)": {
      height: "40vh", // full viewport height
      marginTop: 0,
    },
  },
  image: {
    maxWidth: "100%",
    maxHeight: "100%",
    width: "auto",
    height: "auto",
    objectFit: "contain",
  },
});

const CircleImage: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.outerContainer}>
      <h1 className={classes.header}>
        <b>A Strong WHY</b>
      </h1>
      <div className={classes.container}>
        <img src={image} alt="Reskilling Diagram" className={classes.image} />
      </div>
    </div>
  );
};

export default CircleImage;
