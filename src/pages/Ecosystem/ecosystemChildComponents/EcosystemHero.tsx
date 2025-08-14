import React from "react";
import { createUseStyles } from "react-jss";
import AssetBckground from "../../../assets/super ecosystem image.jpg";
import { useNavigate } from "react-router-dom";

const useStyles = createUseStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "50vh",
    padding: "40px 20px",
    backgroundColor: "#d6cfc8",
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
  },
  description: {
    fontSize: "48px",
    fontWeight: "400",
    // color: "#6b7280",
    textAlign: "center",
    lineHeight: "1.3",
    maxWidth: "1000px",
    marginBottom: "40px",
    letterSpacing: "-0.5px",
    "@media (max-width: 768px)": {
      fontSize: "32px",
      lineHeight: "1.4",
      marginBottom: "30px",
    },
    "@media (max-width: 480px)": {
      fontSize: "24px",
      lineHeight: "1.5",
    },
  },
  button: {
    padding: "18px 36px",
    backgroundColor: "#002c3e",
    color: "#fff",
    fontSize: "16px",
    fontWeight: "600",
    // padding: "12px 32px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 12px rgba(251, 191, 36, 0.3)",
    "&:hover": {
      backgroundColor: "#f59e0b",
      transform: "translateY(-2px)",
      boxShadow: "0 6px 16px rgba(251, 191, 36, 0.4)",
    },
    "&:active": {
      transform: "translateY(0)",
      boxShadow: "0 2px 8px rgba(251, 191, 36, 0.3)",
    },
  },
});

const EcosystemHero: React.FC = () => {
  const classes = useStyles();

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/member");
  };

  return (
    <>
      <div className={classes.container}>
        <p className={classes.description}>
          An ecosystem is a cohort where people share AI knowledge, skills, and
          best practices related to a certain AI topic with each other.
        </p>

        <button className={classes.button} onClick={handleClick}>
          Become a member →
        </button>
      </div>
      <div>
        <img
          src={AssetBckground}
          alt="Ecosystem visual representation"
          style={{
            width: "100%",
            //height: "auto",
            // marginTop: "20px",
            display: "block",
            //marginLeft: "auto",
            //marginRight: "auto",
          }}
        />
      </div>
    </>
  );
};

export default EcosystemHero;
