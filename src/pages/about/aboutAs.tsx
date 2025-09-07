import Navbar from "../../pages/home/homechildComponents/Navbar";
import FAQ from "../home/homechildComponents/FAQ";
import FooterContact from "../home/homechildComponents/FooterContact";
import AIReskillVideoAbout from "./aboutUsChild/AIReskillVideoAboutUs";
import CircleImage from "./aboutUsChild/circleImage";
import ReskillingDiagram from "./aboutUsChild/ReskillingDiagram";
//import ReskillingPage from "./aboutUsChild/ReskillingDiagram";
//import ReskillingDiagram from "./aboutUsChild/ReskillingDiagram";

function AboutAs() {
  return (
    <>
      <Navbar />
      <AIReskillVideoAbout />
      <CircleImage />

      <ReskillingDiagram />
      <FAQ />
      <FooterContact />
    </>
  );
}

export default AboutAs;
