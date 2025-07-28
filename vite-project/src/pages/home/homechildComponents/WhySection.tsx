import React from "react";
import { createUseStyles } from "react-jss";

interface CircleProps {
  size: number;
  color: string;
  zIndex: number;
  label: string;
  text: string;
}

const useStyles = createUseStyles({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 40,
    fontFamily: '"Segoe UI", sans-serif',
  },
  circleContainer: {
    position: "relative",
    width: 500,
    height: 500,
    marginRight: 60,
  },

  textBox: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
    maxWidth: 500,
  },
  title: {
    fontSize: 28,
    fontWeight: 700,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 1.5,
  },
  boldPurple: {
    color: "#6A0DAD",
    fontWeight: 600,
  },
  list: {
    marginTop: 10,
    paddingLeft: 20,
    "& li": {
      marginBottom: 8,
    },
  },
  circle: {
    position: "absolute",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    transform: "translate(-50%, -50%)",
    top: "50%",
    left: "50%",
  },
  circleText: {
    position: "absolute",
    bottom: 10,
    fontSize: 12,
    textAlign: "center",
    width: "100%",
    color: "#fff",
  },
});

const Circle: React.FC<CircleProps> = ({
  size,
  color,
  zIndex,
  label,
  text,
}) => {
  const classes = useStyles();
  return (
    <div
      className={classes.circle}
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        zIndex,
      }}
    >
      {label}
      <div className={classes.circleText}>{text}</div>
    </div>
  );
};

const StrongWhy: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.circleContainer}>
        <Circle
          size={450}
          color="#999"
          zIndex={1}
          label="What"
          text="do we offer?"
        />
        <Circle
          size={350}
          color="#555"
          zIndex={2}
          label="How"
          text="do we differentiate?"
        />
        <Circle
          size={250}
          color="#1f2d4c"
          zIndex={3}
          label="Why"
          text="do we exist?"
        />
      </div>

      <div className={classes.textBox}>
        <div className={classes.title}>A Strong WHY</div>
        <div className={classes.subtitle}>
          To offer individuals a personalized and continuous{" "}
          <span className={classes.boldPurple}>AI Reskilling Journey</span>
        </div>
        <div className={classes.subtitle}>
          Through the <strong>4C's</strong>:
          <ul className={classes.list}>
            <li>
              <strong>Content</strong>: <em>simple, high-quality</em>
            </li>
            <li>
              <strong>Coaching</strong>: <em>private 1-on-1</em>
            </li>
            <li>
              <strong>Competition</strong>: <em>peer benchmarking</em>
            </li>
            <li>
              <strong>Collaboration</strong>: <em>through ecosystems</em>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StrongWhy;
