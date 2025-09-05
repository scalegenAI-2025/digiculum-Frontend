import { createUseStyles } from "react-jss";

import CourseAI from "../../assets/Courses.jpg";

import CourseCards from "./courseChildComponents/courseCards";
import CourseTopPage from "./courseChildComponents/courseTop";
import QuestionOnAI from "./courseChildComponents/questionOnAI";
//import ContactUs from "../home/homeChildComponents/contactUs";

//import ContactUsCourse from "./courseChildComponents/contactUs";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
//import ContactUs from "../home/homeChildComponents/contactUs";
import AIReskilling from "./courseChildComponents/AIReskilling";
import Navbar from "../home/homechildComponents/Navbar";
import FooterContact from "../home/homechildComponents/FooterContact";

//import EssentialCompetencies from "./courseChildComponents/AI/GenAILeaderBook";

const useStyles = createUseStyles({
  "@global": {
    "html, body": {
      margin: 0,
      padding: 0,
      fontFamily: 'Georgia, "Times New Roman", serif',
    },
  },
  backgroundWrapper: {
    position: "relative",
    height: "100vh",
    margin: 0,
    //overflow: "hidden",
  },
  // backgroundOverlay: {
  //   backgroundImage: `url(${CourseAI})`,
  //   backgroundSize: "cover",
  //   backgroundRepeat: "no-repeat",
  //   backgroundPosition: "left 36%", // shifted downward
  //   position: "absolute",
  //   top: 0,
  //   left: 0,
  //   right: 0,
  //   bottom: 0,
  //   opacity: 1,
  //   zIndex: 0,
  // },

  backgroundOverlay: {
    backgroundImage: `
    linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0)), 
    url(${CourseAI})
  `,
    backgroundSize: "contain, cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top center, center center",
    // backgroundColor: "#000000",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 0,
    //filter: "blur(8px)", // <-- adds the blur effect here
  },

  contentWrapper: {
    position: "relative",
    zIndex: 1,
  },
});

function Course() {
  //useGlobalStyles();
  const classes = useStyles();
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location]);
  return (
    <>
      <div className={classes.backgroundWrapper}>
        <div className={classes.backgroundOverlay}></div>
        <div className={classes.contentWrapper}>
          <Navbar />
          <CourseTopPage />
          {/* <CourseCards /> */}
        </div>
      </div>
      <QuestionOnAI />
      <div>
        <div id="middle-section">
          <CourseCards />
        </div>
      </div>
      <AIReskilling />

      <FooterContact />
    </>
  );
}

export default Course;
