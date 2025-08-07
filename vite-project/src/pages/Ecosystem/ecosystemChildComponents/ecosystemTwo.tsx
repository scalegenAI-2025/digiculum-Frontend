import { useState, useRef, useEffect } from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  "@global": {
    "@keyframes blinkOnce": {
      "0%": { opacity: 1 },
      "20%": { opacity: 0 },
      "40%": { opacity: 1 },
      "60%": { opacity: 0 },
      "80%": { opacity: 1 },
      "100%": { opacity: 1 },
    },
    body: {
      margin: 0,
      padding: 0,
      fontFamily: 'Georgia, "Times New Roman", serif',
    },
    "*": {
      boxSizing: "border-box",
    },
  },
  container: {
    height: "600px", // Fixed height instead of viewport units
    backgroundColor: "#000000",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px 2rem",
    cursor: "default",
    overflow: "hidden", // Prevent content overflow
  },
  spacer: {
    height: "600px", // Fixed height instead of viewport units
    backgroundColor: "#111111",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#666666",
    fontSize: "1.2rem",
  },
  text: {
    fontSize: "clamp(2rem, 6vw, 6rem)", // Adjusted font sizes
    fontWeight: 400,
    lineHeight: "1.1",
    letterSpacing: "-0.02em",
    color: "#ffffff",
    fontFamily: 'Georgia, "Times New Roman", serif',
    textAlign: "center",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "2rem",
    paddingTop: "8rem",
    opacity: 1,
  },
  blinking: {
    animation: "$blinkOnce 2s ease-in-out",
  },
});

const EcosystemSecond = () => {
  const classes = useStyles();
  const [shouldBlink, setShouldBlink] = useState(false);
  const textRef = useRef<HTMLDivElement>(null);

  // Trigger animation on component mount
  useEffect(() => {
    setShouldBlink(true);
  }, []);

  // Handle mouse enter to retrigger animation
  const handleMouseEnter = () => {
    setShouldBlink(true);
  };

  // Reset animation state after completion
  useEffect(() => {
    const node = textRef.current;
    if (!node) return;

    const handleAnimationEnd = () => {
      setShouldBlink(false);
    };

    node.addEventListener("animationend", handleAnimationEnd);
    return () => {
      node.removeEventListener("animationend", handleAnimationEnd);
    };
  }, []);

  return (
    <>
      <div className={classes.container} onMouseEnter={handleMouseEnter}>
        <div
          ref={textRef}
          className={`${classes.text} ${shouldBlink ? classes.blinking : ""}`}
        >
          Instant download, exponential transformation
        </div>
      </div>
    </>
  );
};

export default EcosystemSecond;
