import ReskillingProgram from "./homechildComponents/ReskillingProgram";
import ReskillingSectionComponent from "./homechildComponents/ReskillingSection";
import HeroSection from "./homechildComponents/heroSection";
//import WhySection from "./homechildComponents/WhySection";
import AIHeroSection from "./homechildComponents/homeTop";

function Home() {
  return (
    <>
      <div>
        <AIHeroSection />
        <ReskillingProgram />
        <HeroSection />
        {/* <WhySection /> */}
        <ReskillingSectionComponent />
      </div>
    </>
  );
}

export default Home;
