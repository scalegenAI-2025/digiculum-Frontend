import React, { useRef, useEffect } from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    minHeight: "100vh",
    padding: "0 80px",

    backgroundColor: "#1a1a1a",
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
    position: "relative",
    overflow: "hidden",
    "@media (max-width: 1024px)": {
      flexDirection: "column",
      padding: "60px 40px",
      gap: "40px",
      textAlign: "center",
    },
    "@media (max-width: 768px)": {
      padding: "40px 20px",
      gap: "30px",
    },
  },
  textSection: {
    flex: "1",
    maxWidth: "600px",
    zIndex: 2,
    "@media (max-width: 1024px)": {
      maxWidth: "100%",
    },
  },
  title: {
    fontSize: "48px",
    fontWeight: "400",
    color: "#ffffff",
    lineHeight: "1.1",
    marginBottom: "40px",
    "@media (max-width: 1024px)": {
      fontSize: "48px",
      marginBottom: "30px",
    },
    "@media (max-width: 768px)": {
      fontSize: "36px",
      marginBottom: "20px",
    },
  },
  ecosystems: {
    color: "#e879f9",
    fontWeight: "600",
  },
  learningText: {
    fontSize: "48px",
    fontWeight: "400",
    color: "#ffffff",
    lineHeight: "1.1",
    "@media (max-width: 1024px)": {
      fontSize: "48px",
    },
    "@media (max-width: 768px)": {
      fontSize: "36px",
    },
  },
  multiplier: {
    color: "#fbbf24",
    fontWeight: "700",
  },
  videoSection: {
    flex: "1",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    "@media (max-width: 1024px)": {
      width: "100%",
      maxWidth: "500px",
    },
  },
  videoContainer: {
    position: "relative",
    width: "600px",
    height: "320px",
    borderRadius: "50%",
    overflow: "hidden",
    transform: "rotate(-8deg)",
    "@media (max-width: 768px)": {
      width: "450px",
      height: "240px",
      transform: "rotate(-6deg)",
    },
    "@media (max-width: 480px)": {
      width: "350px",
      height: "186px",
      transform: "rotate(-5deg)",
    },
  },
  video: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background:
      "linear-gradient(135deg, rgba(59, 130, 246, 0.3) 0%, rgba(147, 51, 234, 0.3) 100%)",
    borderRadius: "50%",
    zIndex: 1,
  },
  // Background decoration
  backgroundDecoration: {
    position: "absolute",
    top: "50%",
    right: "10%",
    width: "600px",
    height: "600px",
    background:
      "radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)",
    borderRadius: "50%",
    transform: "translateY(-50%)",
    zIndex: 0,
    "@media (max-width: 1024px)": {
      display: "none",
    },
  },
});

interface CollaborationHeroProps {
  videoSrc?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
}

const CollaborationHero: React.FC<CollaborationHeroProps> = ({
  videoSrc = "https://videos.pexels.com/video-files/5725953/5725953-hd_1920_1080_30fps.mp4",
  autoPlay = true,
  loop = true,
  muted = true,
}) => {
  const classes = useStyles();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current && autoPlay) {
      videoRef.current.play().catch((error) => {
        console.log("Video autoplay failed:", error);
      });
    }
  }, [autoPlay]);

  return (
    <div className={classes.container}>
      <div className={classes.backgroundDecoration} />

      <div className={classes.textSection}>
        <h1 className={classes.title}>
          Explore the power of
          <br />
          collaboration through
          <br />
          <span className={classes.ecosystems}>Ecosystems</span>
        </h1>

        <div className={classes.learningText}>
          <span className={classes.multiplier}>3X</span> your learning...
        </div>
      </div>

      <div className={classes.videoSection}>
        <div className={classes.videoContainer}>
          <video
            ref={videoRef}
            className={classes.video}
            autoPlay={autoPlay}
            loop={loop}
            muted={muted}
            playsInline
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className={classes.overlay} />
        </div>
      </div>
    </div>
  );
};

export default CollaborationHero;
