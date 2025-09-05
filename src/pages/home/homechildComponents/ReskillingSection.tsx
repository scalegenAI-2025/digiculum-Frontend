import React from "react";
import { createUseStyles } from "react-jss";
import logo from "../../../assets/reskilling_home.jpg"; // Adjust path

const useStyles = createUseStyles({
  container: {
    display: "flex",
    backgroundColor: "#f0eff1",
    justifyContent: "center",
    padding: "60px 20px",
  },
  wrapper: {
    display: "flex",
    maxWidth: 1200,
    width: "100%",
    alignItems: "flex-start",
    position: "relative",
    "@media (max-width: 768px)": {
      flexDirection: "column",
      alignItems: "center",
    },
    "@media (max-width: 500px)": {
      padding: "20px 10px",
    },
  },
  imageContainer: {
    flex: 1,
    borderRadius: 8,
    overflow: "hidden",
    "@media (max-width: 768px)": {
      width: "100%",
    },
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },
  contentCard: {
    flex: 1,
    backgroundColor: "#fff",
    padding: "40px",
    borderRadius: 8,
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    marginLeft: "-190px", // overlap for large screens
    marginTop: "150px",
    zIndex: 2,
    position: "relative",
    minHeight: 340,
    paddingRight: "0px",
    paddingBottom: "0px",

    "@media (max-width: 768px)": {
      marginLeft: 0,
      marginTop: 30,
      width: "90%",
      minHeight: "auto",
    },
    "@media (max-width: 500px)": {
      padding: "20px",
      width: "100%",
      marginTop: -20,
      minHeight: "auto",
    },
  },
  title: {
    fontSize: 44,
    fontWeight: 500,
    marginBottom: 20,
    "& span": {
      color: "#6a0dad",
    },
    "@media (max-width: 768px)": {
      fontSize: 36,
      textAlign: "center",
    },
    "@media (max-width: 500px)": {
      fontSize: 28,
    },
  },
  paragraph: {
    fontSize: 20,
    marginBottom: 30,
    lineHeight: 1.6,
    "& strong": {
      fontWeight: "bold",
    },
    "& em": {
      fontStyle: "italic",
    },
    "@media (max-width: 768px)": {
      fontSize: 18,
      textAlign: "center",
    },
    "@media (max-width: 500px)": {
      fontSize: 16,
    },
  },
  button: {
    backgroundColor: "#f9b233",
    color: "#000",
    border: "none",
    padding: "12px 20px",
    borderRadius: 4,
    fontSize: 16,
    cursor: "pointer",
    transition: "background 0.3s ease",
    "&:hover": {
      backgroundColor: "#e8a223",
    },
    "@media (max-width: 768px)": {
      display: "block",
      margin: "0 auto",
    },
    "@media (max-width: 500px)": {
      fontSize: 14,
      padding: "10px 16px",
    },
  },
});

const ReskillingCard: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.imageContainer}>
          <img src={logo} alt="Reskilling visual" className={classes.image} />
        </div>
        <div className={classes.contentCard}>
          <div className={classes.title}>
            <span>Re</span>skilling
          </div>
          <div className={classes.paragraph}>
            The question should not be{" "}
            <strong>Will AI take away my job?</strong>
            <br />
            It should be{" "}
            <em>
              <strong>Will you allow AI to take away your job?</strong>
            </em>
          </div>
          <button className={classes.button}>Find more</button>
        </div>
      </div>
    </div>
  );
};

export default ReskillingCard;
