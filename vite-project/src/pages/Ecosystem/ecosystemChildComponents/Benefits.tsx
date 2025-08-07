import React from "react";
import { createUseStyles } from "react-jss";
import { TrendingUp, Network } from "lucide-react";

const useStyles = createUseStyles({
  container: {
    padding: "48px 16px",
    backgroundColor: "#ffffff",
    color: "#111827",
    fontFamily: "'Inter', sans-serif",
    //textAlign: "center",
  },
  content: {
    maxWidth: "960px",
    margin: "0 auto",
  },
  heading: {
    fontSize: "36px",
    fontWeight: "700",
    marginBottom: "24px",
  },
  paragraph: {
    fontSize: "18px",
    lineHeight: "1.6",
    marginBottom: "16px",
    "& b": {
      fontWeight: "600",
    },
    "& span": {
      color: "#6b21a8",
      fontWeight: "600",
    },
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "32px",
    marginTop: "48px",
    "@media (min-width: 768px)": {
      gridTemplateColumns: "repeat(3, 1fr)",
    },
  },
  circleCard: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "16px",
  },
  circle: {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    backgroundColor: "#1e3a8a",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#ffffff",
    fontSize: "28px",
    fontWeight: "700",
  },
  circleLight: {
    backgroundColor: "#c7d2fe",
    color: "#1e3a8a",
  },
  circleText: {
    fontSize: "16px",
    lineHeight: "1.4",
    fontWeight: 500,
    maxWidth: "200px",
  },
  purpleText: {
    color: "#6b21a8",
    fontWeight: 600,
  },
});

const Benefits: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <h2 className={classes.heading}>Benefits</h2>

        <p className={classes.paragraph}>
          Collaborators develop digital competence <span>three times</span>{" "}
          faster in an ecosystem than standalone.
        </p>
        <p className={classes.paragraph}>
          Collaborators can learn, <span>support and motivate</span> each other
          through sharing of best practices, success stories and ways of
          working.
        </p>
        <p className={classes.paragraph}>
          Collaborators break the individual barriers and come together as{" "}
          <span>ONE team</span>, resulting in a transition from being a firm
          workforce to an ecosystem workforce.
        </p>

        <div className={classes.grid}>
          <div className={classes.circleCard}>
            <div className={classes.circle}>3X</div>
            <div className={classes.circleText}>
              Bridge <span className={classes.purpleText}>Digital Skills</span>{" "}
              Gap
            </div>
          </div>

          <div className={classes.circleCard}>
            <div className={`${classes.circle} ${classes.circleLight}`}>
              <TrendingUp size={36} />
            </div>
            <div className={classes.circleText}>
              <span className={classes.purpleText}>Support</span> and Motivation
            </div>
          </div>

          <div className={classes.circleCard}>
            <div className={`${classes.circle} ${classes.circleLight}`}>
              <Network size={36} />
            </div>
            <div className={classes.circleText}>
              ONE <span className={classes.purpleText}>Team</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
