import { createUseStyles } from "react-jss";
import Navbar from "../../pages/home/homechildComponents/Navbar";

import FooterContact from "../../pages/home/homechildComponents/FooterContact";
//import EcosystemTop from "./ecosystemChildComponents/ecosystemTop";

import HowItWorks from "./ecosystemChildComponents/HowItWorks";
import EcosystemHero from "./ecosystemChildComponents/EcosystemHero";
import CollaborationHero from "./ecosystemChildComponents/CollabirationnHero";
import AIEcosystems from "./ecosystemChildComponents/AIEcosystems";
import Benefits from "./ecosystemChildComponents/Benefits";
import EcosystemVideoSection from "./ecosystemChildComponents/ecosystemVideo";

// JSS styles
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
    "@media (max-width: 500px)": {
      height: "75vh",
    },
  },
  // backgroundOverlay: {
  //   backgroundImage: `url(${AssetBckground})`,
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
    backgroundSize: "contain, cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top center, center center",
    backgroundColor: "#000000",
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

function Ecosystem() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.backgroundWrapper}>
        <div className={classes.backgroundOverlay}></div>
        <div className={classes.contentWrapper}>
          <Navbar />
          {/* <EcosystemTop /> */}
          <EcosystemVideoSection />
        </div>
      </div>
      <EcosystemHero />
      <HowItWorks />
      <CollaborationHero />

      <AIEcosystems />
      <Benefits />

      <FooterContact />
    </>
  );
}

export default Ecosystem;
