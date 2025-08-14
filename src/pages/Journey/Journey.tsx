import Navbar from "../../pages/home/homechildComponents/Navbar";
import FooterContact from "../home/homechildComponents/FooterContact";
import AIJobRoles from "./JourneyChildComponents/AIJobRoles";
import AIReskillVideo from "./JourneyChildComponents/AIReskillVideo";
import CourseCard from "./JourneyChildComponents/CourseCard";
import ReskillingTracks from "./JourneyChildComponents/ReskillingTracks";

function Journey() {
  return (
    <>
      <Navbar />
      <AIReskillVideo />
      <ReskillingTracks />
      <AIJobRoles />
      <CourseCard />
      <FooterContact />
    </>
  );
}

export default Journey;
