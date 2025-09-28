import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { createUseStyles } from "react-jss";
import { AuthContext } from "../../../context/AuthContext"; // adjust path

const useStyles = createUseStyles({
  wrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    maxHeight: "1400px",
    backgroundColor: "#F9F7F2",
    padding: 20,
  },
  container: {
    backgroundColor: "#fff",
    padding: 40,
    borderRadius: 8,
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    maxWidth: 900,
    width: "100%",
  },
  heading: {
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 2,
    color: "#222",
    "@media (max-width: 768px)": {
      fontSize: "33px",
      marginBottom: "30px",
    },
  },
  heading1: {
    fontSize: "1.4rem",
    color: "#5a6c7d",
    marginBottom: "40px",
    fontWeight: "400",
    "@media (max-width: 768px)": {
      fontSize: "1.1rem",
      marginBottom: "30px",
    },
  },
  description: {
    fontSize: 18,
    marginBottom: 40,
    color: "#555",
  },
  button: {
    backgroundColor: "#f9b233",
    color: "black",
    border: "none",
    borderRadius: "8px",
    padding: "16px 32px",
    fontSize: "1.1rem",
    fontWeight: "500",
    cursor: "pointer",
    transition: "all 0.3s ease",
    display: "inline-flex",
    alignItems: "center",
    gap: "10px",
    textDecoration: "none",
    "&:hover": {
      backgroundColor: "#2c4a6b",
      transform: "translateY(-2px)",
      boxShadow: "0 4px 12px rgba(30, 58, 95, 0.3)",
    },
    "&:active": {
      transform: "translateY(0)",
    },
    "@media (max-width: 768px)": {
      padding: "14px 28px",
      fontSize: "1rem",
    },
  },
});

const AIReskillingAssessment = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const handleClick = () => {
    if (!user) {
      navigate("/login");
      return;
    }
    navigate(`/profile/${user.email}`);
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <h1 className={classes.heading}>
          AI Reskilling Journey <br />
          <span className={classes.heading1}>for Individuals</span>
        </h1>
        <p className={classes.description}></p>
        <button className={classes.button} onClick={handleClick}>
          Reskilling Assessment →
        </button>
      </div>
    </div>
  );
};

export default AIReskillingAssessment;
