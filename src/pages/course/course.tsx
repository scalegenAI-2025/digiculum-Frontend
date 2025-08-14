import Navbar from "../home/homechildComponents/Navbar";
import CourseCards from "./courseChildComponents/courseCards";
import CourseTopPage from "./courseChildComponents/courseTop";
import QuestionOnAI from "./courseChildComponents/questionOnAI";
//import ContactUs from "../home/homeChildComponents/contactUs";

import FooterContact from "../home/homechildComponents/FooterContact";
import ContactUsCourse from "./courseChildComponents/contactUs";
//import EssentialCompetencies from "./courseChildComponents/AI/GenAILeaderBook";

function Course() {
  return (
    <>
      <div>
        <Navbar />
        <CourseTopPage />
        {/* <CourseCards /> */}
      </div>
      <QuestionOnAI />
      <CourseCards />
      {/* <ContactUs /> */}
      <ContactUsCourse />
      <FooterContact />
    </>
  );
}

export default Course;
