import { createUseStyles } from "react-jss";

import Navbar from "../../home/homechildComponents/Navbar";
import FooterContact from "../../home/homechildComponents/FooterContact";
import GenerativeAITop from "./GenerativeAIChild/GenerativeAITop";
import CourseOverview from "./GenerativeAIChild/GenerativeAIOverview";
import TechnicalAIContentPage from "./GenerativeAIChild/TechnicalAIContentPage";
import CoachingPage from "./GenerativeAIChild/GenerativeAICoach";
import EcosystemPage from "../GenAIMindset/GenAIMindsetChild/ecosystem";
import { useNavigate } from "react-router-dom";

const useStyles = createUseStyles({
  heroSection: {
    position: "relative",
    minHeight: "100vh",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  contentWrapper: {
    position: "relative",
    zIndex: 1,
    width: "100%",
  },
  button: {
    padding: "18px 36px",
    backgroundColor: "#002c3e",
    color: "#fff",
    border: "none",
    borderRadius: 6,
    fontSize: 20,
    fontWeight: 600,
    marginBottom: "20px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    "&:hover": {
      backgroundColor: "#021123",
    },
  },
});

function GenerativeAI() {
  const classes = useStyles();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/member");
  };
  return (
    <>
      <div className={classes.heroSection}>
        <div className={classes.contentWrapper}>
          <Navbar />
          <GenerativeAITop />
          <CourseOverview />
          <TechnicalAIContentPage />
          <CoachingPage />
          <EcosystemPage />
        </div>
        <button className={classes.button} onClick={handleClick}>
          Become a member →
        </button>
      </div>

      <FooterContact />
    </>
  );
}

export default GenerativeAI;
