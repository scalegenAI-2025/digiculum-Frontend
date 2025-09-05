import AssetBckground from "../../assets//assetsBackground.jpg";
import { createUseStyles } from "react-jss";
import Navbar from "../../pages/home/homechildComponents/Navbar";

import FooterContact from "../../pages/home/homechildComponents/FooterContact";
import EcosystemTop from "./ecosystemChildComponents/ecosystemTop";

import HowItWorks from "./ecosystemChildComponents/HowItWorks";
import EcosystemHero from "./ecosystemChildComponents/EcosystemHero";
import CollaborationHero from "./ecosystemChildComponents/CollabirationnHero";
import AIEcosystems from "./ecosystemChildComponents/AIEcosystems";
import Benefits from "./ecosystemChildComponents/Benefits";

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
      height: "80vh",
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
    backgroundImage: `
    linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0)), 
    url(${AssetBckground})
  `,
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
          <EcosystemTop />
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
