import React, { useRef, useEffect } from "react";
import { createUseStyles } from "react-jss";
import skillVideo from "../../../assets/Future_video.mp4";

interface AIReskillVideoProps {
  videoSrc?: string;
}

const useStyles = createUseStyles({
  outerContainer: {
    backgroundColor: "black",
  },

  container: {
    width: "98vw",
    height: "100vh",
    backgroundColor: "#000",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    overflow: "hidden",
  },

  mainContent: {
    position: "relative",
    maxWidth: "1200px",
    height: "80%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  videoSection: {
    position: "relative",
    width: "800px",
    height: "400px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  videoContainer: {
    position: "relative",
    zIndex: 2,
    width: "100%",
    height: "100%",
    overflow: "hidden",

    borderRadius: "8px",
  },

  video: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  startText: {
    fontSize: "1.8rem",
    lineHeight: "1.2",
    "@media (max-width: 500px)": {
      fontSize: "1.4rem",
    },
  },

  glowEffect: {
    position: "absolute",
    top: "-10px",
    left: "-10px",
    right: "-10px",
    bottom: "-10px",

    opacity: 0.7,
    animation: "$rotate 4s linear infinite",
    zIndex: 0,
  },

  textSection: {
    color: "white",
    textAlign: "left",
    maxWidth: "600px",
    marginLeft: "50px",
  },

  mainText: {
    fontSize: "3.5rem",
    fontWeight: "bold",
    // marginBottom: "30px",
    lineHeight: "1.2",
    fontFamily: "Arial, sans-serif",
    "& .ai": {
      color: "#E547ED",
    },
  },

  reskillText: {
    fontSize: "4rem",
    fontWeight: "bold",
    color: "#ffd700",
    marginBottom: "10px",
    fontFamily: "Arial, sans-serif",
  },

  nowText: {
    fontSize: "3rem",
    color: "#ffffff",
    fontWeight: "normal",
    fontFamily: "Arial, sans-serif",
  },

  "@media (max-width: 768px)": {
    mainContent: {
      flexDirection: "column",
      textAlign: "center",
      marginTop: "150px",
    },
    videoSection: {
      width: "300px",
      height: "250px",
      marginBottom: "30px",
    },
    textSection: {
      marginLeft: "0",
    },
    mainText: {
      fontSize: "40px",
    },
    reskillText: {
      fontSize: "2.8rem",
    },
    nowText: {
      fontSize: "2rem",
    },
  },

  "@media (max-width: 500px)": {
    container: {
      height: "auto",
      padding: "20px 0",
    },
    mainContent: {
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    videoSection: {
      width: "220px",
      height: "160px",
      marginBottom: "20px",
    },
    mainText: {
      fontSize: "1.8rem",
      // marginBottom: "15px",
      marginTop: "50px",
      paddingBottom: "30px",
    },

    reskillText: {
      fontSize: "1.6rem",
    },
    nowText: {
      fontSize: "1.2rem",
    },
    textSection: {
      maxWidth: "90%",
      marginLeft: 0,
      textAlign: "center",
    },
  },
});

const AIReskillVideoAbout: React.FC<AIReskillVideoProps> = ({
  videoSrc = skillVideo,
}) => {
  const classes = useStyles();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(console.error);
    }
  }, []);

  return (
    <div className={classes.outerContainer}>
      <div className={classes.container}>
        <div className={classes.mainContent}>
          <div className={classes.videoSection}>
            <div className={classes.videoContainer}>
              <video
                ref={videoRef}
                className={classes.video}
                src={videoSrc}
                loop
                muted
                autoPlay
                playsInline
              />
            </div>
          </div>

          <div className={classes.textSection}>
            <div className={classes.mainText}>
              <span className={classes.startText}> Start your </span>
              <br></br>Personalized Continuous <span className="ai"> AI</span>{" "}
              Reskilling Journey <br></br>
              <span className={classes.startText}> with </span> Digiculum
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIReskillVideoAbout;
