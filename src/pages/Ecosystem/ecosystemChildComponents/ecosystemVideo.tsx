import React, { useRef, useEffect } from "react";
import { createUseStyles } from "react-jss";
import Navbar from "../../home/homechildComponents/Navbar"; // Importing the separated Navbar
import logo from "../../../assets/Ecosystem (1).mp4";

interface HeroProps {
  className?: string;
}

const useStyles = createUseStyles({
  heroContainer: {
    position: "relative",
    width: "100%",
    height: "100vh",
    overflow: "hidden",
    backgroundColor: "#000",
    display: "flex",
    flexDirection: "row",

    "@media (max-width: 768px)": {
      flexDirection: "column",
    },

    "@media (max-width: 500px)": {
      flexDirection: "column",
      // height: "auto",
      height: "90vh",
    },
  },

  videoBackground: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: 1,
  },

  videoSection: {
    flex: "1",
    position: "relative",
    height: "100%",
    zIndex: 1,
    overflow: "hidden",

    "@media (max-width: 768px)": {
      order: -1,
      height: "40vh",
    },

    "@media (max-width: 500px)": {
      marginTop: "100px",
      height: "30vh",
    },
  },

  videoOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background:
      "linear-gradient(135deg, rgba(0,0,0,0.3) 0%, rgba(20,20,40,0.5) 100%)",
    zIndex: 2,
  },

  heroContent: {
    flex: "1",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start", // <— default desktop
    paddingTop: "80px",
    color: "#ffffff",
    zIndex: 4,
    position: "relative",
    paddingLeft: "4rem",
    marginRight: "-10rem",

    "@media (max-width: 768px)": {
      marginRight: 0,
      padding: "80px 1.5rem 2rem",
    },

    "@media (max-width: 500px)": {
      paddingTop: "10px",
      paddingBottom: "10px",
      marginRight: 0,
      justifyContent: "center",
      alignItems: "center", // <-- center horizontally
      textAlign: "center", // <-- make text centered
    },
  },

  contentWrapper: {
    maxWidth: "600px",
    width: "100%",

    "@media (max-width: 768px)": {
      maxWidth: "100%",
    },

    "@media (max-width: 500px)": {
      maxWidth: "100%",
    },
  },

  heroTitle: {
    fontSize: "clamp(1.9rem, 5vw, 2.8rem)",
    fontWeight: 700,
    lineHeight: 1.1,
    margin: 0,
    //marginBottom: "1rem",
    fontFamily: "Arial, sans-serif",

    "@media (max-width: 400px)": {
      fontSize: "clamp(2rem, 7vw, 4rem)",
    },
  },

  ai: {
    background: "#E547ED",
    WebkitBackgroundClip: "text",
    fontSize: "70px",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    fontWeight: 700,
    lineHeight: 1.1,
    margin: 0,
    marginBottom: "1rem",
    fontFamily: "Arial, sans-serif",
    "@media (max-width: 500px)": {
      fontSize: "40px",
    },
  },

  gold: {
    background: "#FFC65C",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },

  heroDescription: {
    fontSize: "40px",
    fontWeight: 400,
    margin: 0,
    opacity: 0.8,
    maxWidth: "600px",

    "@media (max-width: 500px)": {
      fontSize: "24px",
    },
  },

  ctaButton: {
    marginTop: "2rem",
    padding: "1rem 2rem",
    fontSize: "1.1rem",
    fontWeight: 600,
    color: "#ffffff",
    border: "none",
    marginLeft: "130px", // desktop offset
    borderRadius: "8px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    textDecoration: "none",
    display: "inline-block",

    "&:hover": {
      transform: "translateY(-2px)",
      boxShadow: "0 8px 30px #FFC65C",
      color: "white",
    },

    "@media (max-width: 500px)": {
      padding: "0.8rem 1.5rem",
      fontSize: "1rem",
      marginLeft: 0, // <-- reset so it's centered
      alignSelf: "center", // <-- center the button
    },
  },
});

const EcosystemVideoSection: React.FC<HeroProps> = ({ className }) => {
  const classes = useStyles();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.warn("Video playback error:", err);
      });
    }
  }, []);

  return (
    <div className={`${classes.heroContainer} ${className || ""}`}>
      <Navbar />

      <div className={classes.heroContent}>
        <div className={classes.contentWrapper}>
          <h3 className={classes.heroTitle}>
            How fast an individual reskills largely depends <br></br>on his/her
            ability <br></br>to work in
            {/* <br />
            <span className={classes.gold}>Gold </span>
            <span>Rush</span> */}
          </h3>
          <span className={classes.ai}> Ecosystems</span>
        </div>
      </div>

      <div className={classes.videoSection}>
        <video
          ref={videoRef}
          className={classes.videoBackground}
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={logo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className={classes.videoOverlay} />
      </div>
    </div>
  );
};

export default EcosystemVideoSection;
