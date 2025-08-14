import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  "@global": {
    "*, *::before, *::after": {
      boxSizing: "border-box",
    },
    body: {
      margin: 0,
      padding: 0,
      overflowX: "hidden",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      backgroundColor: "#000",
    },
  },

  blinkingBackground: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    zIndex: -1,
    overflow: "hidden",
    pointerEvents: "none",
  },

  shape: {
    position: "absolute",
    width: 30,
    height: 30,
    opacity: 0,
    animation: "$blink 1.5s infinite",
  },

  circle: {
    borderRadius: "50%",
    backgroundColor: "#00ffff",
  },

  square: {
    backgroundColor: "#ff00ff",
  },

  "@keyframes blink": {
    "0%, 100%": { opacity: 0 },
    "50%": { opacity: 1 },
  },

  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    background: "black",
    paddingTop: "150px",
    paddingLeft: "1rem",
    paddingRight: "1rem",
    minHeight: "100vh",
    color: "#fff",
    overflowX: "hidden",
    maxWidth: "100vw",
  },

  homeHeader: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "1.5rem",
    width: "100%",
    padding: "1rem 2rem",
    borderRadius: "12px",
  },

  homeHeaderLine: {
    margin: 0,
    fontSize: "clamp(2.2rem, 6vw, 5rem)",
    fontWeight: 700,
    lineHeight: 1.1,
    textShadow: "2px 2px 8px rgba(0, 0, 0, 0.7)",
  },

  homeHeader3: {
    marginTop: "1.5rem",
    fontWeight: 400,
    fontSize: "clamp(1.2rem, 4vw, 2rem)",
    color: "#ffffff",
    maxWidth: "90%",
    textShadow: "2px 2px 6px rgba(0, 0, 0, 0.7)",
  },

  "@media (max-width: 600px)": {
    container: {
      paddingTop: "100px",
      paddingBottom: "50px",
    },
    homeHeaderLine: {
      fontSize: "clamp(1.8rem, 8vw, 2.5rem)",
    },
    homeHeader3: {
      fontSize: "clamp(1rem, 5vw, 1.2rem)",
    },
  },
});

// Type-safe shape type
type Shape = {
  top: string;
  left: string;
  type: "circle" | "square";
  delay: string;
};

const shapes: Shape[] = [
  { top: "10%", left: "20%", type: "circle", delay: "0s" },
  { top: "30%", left: "50%", type: "square", delay: "0.5s" },
  { top: "60%", left: "80%", type: "circle", delay: "1s" },
  { top: "75%", left: "25%", type: "square", delay: "1.2s" },
  { top: "15%", left: "70%", type: "circle", delay: "1.4s" },
];

const EcosystemTop: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.blinkingBackground}>
        {shapes.map((shape, index) => (
          <div
            key={index}
            className={`${classes.shape} ${classes[shape.type]}`}
            style={{
              top: shape.top,
              left: shape.left,
              animationDelay: shape.delay,
            }}
          />
        ))}
      </div>

      <div className={classes.container}>
        <div className={classes.homeHeader}>
          <h1 className={classes.homeHeaderLine}>
            How fast a firm scales GenAI shall largely depend on a firm’s
            ability to work in Ecosystems
          </h1>
        </div>
        <h3 className={classes.homeHeader3}>Scale 3X through ecosystems</h3>
      </div>
    </>
  );
};

export default EcosystemTop;
