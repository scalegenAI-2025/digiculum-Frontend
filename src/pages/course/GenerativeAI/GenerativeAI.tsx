import { createUseStyles } from "react-jss";
//import Navbar from "../../../components/navbar/navbar";

import GenerativeAITop from "./GenerativeAIChild/GenerativeAITop";
import CourseOverview from "./GenerativeAIChild/GenerativeAIOverview";
import TechnicalAIContentPage from "./GenerativeAIChild/TechnicalAIContentPage";
import CoachingPage from "./GenerativeAIChild/GenerativeAICoach";
import EcosystemPage from "../GenAIMindset/GenAIMindsetChild/ecosystem";
//import { useNavigate } from "react-router-dom";
import OrderFirstBook from "./GenerativeAIChild/orderBookfive";
import Navbar from "../../home/homechildComponents/Navbar";
import FooterContact from "../../home/homechildComponents/FooterContact";
//import OrderFirstBook from "../AIGenAILeadersBook/AIGenAIChild/orderBook";

const useStyles = createUseStyles({
  heroSection: {
    position: "relative",
    minHeight: "100vh",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    "@media (max-width: 600px)": {
      minHeight: "60vh",
    },
  },

  contentWrapper: {
    position: "relative",
    zIndex: 1,
    width: "100%",
  },
  button: {
    backgroundColor: "#002c3e",
    color: "white",
    border: "none",
    padding: "15px 30px",
    fontSize: "18px",
    fontWeight: "bold",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    "&:hover": {
      backgroundColor: "#1e4a66",
      transform: "translateY(-2px)",
    },
  },
});

function GenerativeAI() {
  const classes = useStyles();
  //const navigate = useNavigate();
  // const handleClick = () => {
  //   navigate("/member");
  // };
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
        {/* <button className={classes.button} onClick={handleClick}>
          Become a member →
        </button> */}
      </div>
      <OrderFirstBook />
      <FooterContact />
    </>
  );
}

export default GenerativeAI;
