import Navbar from "../../pages/home/homechildComponents/Navbar";
import FAQ from "../home/homechildComponents/FAQ";
import FooterContact from "../home/homechildComponents/FooterContact";
import StrongWhy from "../home/homechildComponents/WhySection";
import ReskillingDiagram from "./aboutUsChild/ReskillingDiagram";
//import ReskillingPage from "./aboutUsChild/ReskillingDiagram";
//import ReskillingDiagram from "./aboutUsChild/ReskillingDiagram";

function AboutAs() {
  return (
    <>
      <Navbar />

      <StrongWhy />
      <ReskillingDiagram />
      <FAQ />
      <FooterContact />
    </>
  );
}

export default AboutAs;
