import React, { useRef, useEffect } from "react";
import { createUseStyles } from "react-jss";
import skillVideo from "../../../assets/reskill.mp4";

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
    width: "500px",
    height: "400px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  futuristicShape: {
    position: "absolute",
    width: "100%",
    height: "100%",
    background: "linear-gradient(45deg, #00bfff, #0080ff, #4169e1)",
    clipPath:
      "polygon(15% 0%, 85% 0%, 100% 25%, 100% 75%, 85% 100%, 15% 100%, 0% 75%, 0% 25%)",
    filter: "drop-shadow(0 0 20px rgba(0, 191, 255, 0.5))",
    "&::before": {
      content: '""',
      position: "absolute",
      top: "3px",
      left: "3px",
      right: "3px",
      bottom: "3px",
      background: "#000",
      clipPath: "inherit",
      zIndex: 1,
    },
  },

  videoContainer: {
    position: "relative",
    zIndex: 2,
    width: "85%",
    height: "75%",
    overflow: "hidden",
    clipPath:
      "polygon(15% 0%, 85% 0%, 100% 25%, 100% 75%, 85% 100%, 15% 100%, 0% 75%, 0% 25%)",
    borderRadius: "8px",
  },

  video: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  glowEffect: {
    position: "absolute",
    top: "-10px",
    left: "-10px",
    right: "-10px",
    bottom: "-10px",
    background: "conic-gradient(from 0deg, #00bfff, #0080ff, #4169e1, #00bfff)",
    clipPath:
      "polygon(15% 0%, 85% 0%, 100% 25%, 100% 75%, 85% 100%, 15% 100%, 0% 75%, 0% 25%)",
    filter: "blur(15px)",
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
    marginBottom: "30px",
    lineHeight: "1.2",
    fontFamily: "Arial, sans-serif",
    "& .ai": {
      color: "#ff1493",
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

  circuitPattern: {
    position: "absolute",
    width: "200%",
    height: "200%",
    top: "-50%",
    left: "-50%",
    background: `
      radial-gradient(circle at 20% 20%, rgba(0, 191, 255, 0.1) 1px, transparent 1px),
      radial-gradient(circle at 80% 20%, rgba(0, 191, 255, 0.1) 1px, transparent 1px),
      radial-gradient(circle at 20% 80%, rgba(0, 191, 255, 0.1) 1px, transparent 1px),
      radial-gradient(circle at 80% 80%, rgba(0, 191, 255, 0.1) 1px, transparent 1px)
    `,
    backgroundSize: "50px 50px",
    animation: "$drift 20s linear infinite",
  },

  "@keyframes rotate": {
    "0%": { transform: "rotate(0deg)" },
    "100%": { transform: "rotate(360deg)" },
  },

  "@keyframes drift": {
    "0%": { transform: "translate(0, 0)" },
    "100%": { transform: "translate(-50px, -50px)" },
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

  // extra rules for very small phones
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
      marginBottom: "15px",
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

const AIReskillVideo: React.FC<AIReskillVideoProps> = ({
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
        <div className={classes.circuitPattern} />

        <div className={classes.mainContent}>
          <div className={classes.videoSection}>
            <div className={classes.glowEffect} />
            <div className={classes.futuristicShape} />
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
              Will you allow <span className="ai">AI</span> to take away your
              jobs?
            </div>

            <div className={classes.reskillText}>RESKILL</div>

            <div className={classes.nowText}>now...</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIReskillVideo;
