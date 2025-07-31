import AIReskillingJourney from "./homechildComponents/AIReskillingJourney";
import FAQ from "./homechildComponents/FAQ";
import FooterContact from "./homechildComponents/FooterContact";
import GenAILeadershipCard from "./homechildComponents/GenAILeadershipCard";
import GenAILeadershipCard2 from "./homechildComponents/GenAILeadershipCard2";
import GenAIMasterclassHero from "./homechildComponents/GenAIMasterclassHero";
import ReskillingProgram from "./homechildComponents/ReskillingProgram";
import ReskillingSectionComponent from "./homechildComponents/ReskillingSection";
import ThoughtLeadership from "./homechildComponents/ThoughtLeadership";
import HeroSection from "./homechildComponents/heroSection";
//import WhySection from "./homechildComponents/WhySection";
import AIHeroSection from "./homechildComponents/homeTop";

function Home() {
  return (
    <>
      <div>
        <AIHeroSection />

        <ReskillingProgram />
        <AIReskillingJourney />
        <HeroSection />
        {/* <WhySection /> */}
        {/* <AIReskillingJourney /> */}

        <ReskillingSectionComponent />
        <GenAILeadershipCard />
        <GenAIMasterclassHero />
        <GenAILeadershipCard2 />
        <ThoughtLeadership />
        <FAQ />
        <FooterContact />
      </div>
    </>
  );
}

export default Home;
