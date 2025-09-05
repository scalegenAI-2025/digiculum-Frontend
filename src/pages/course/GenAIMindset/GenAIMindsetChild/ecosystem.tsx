import React from "react";
import { createUseStyles } from "react-jss";
import ecosystem from "../../../../assets/super ecosystem image.jpg";

const useStyles = createUseStyles({
  container: {
    padding: "60px",
    backgroundColor: "#ffffff",
    maxWidth: "1400px",
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    alignItems: "center",
    justifyContent: "center",
  },
  leftSection: {
    flex: "1 1 400px",
    paddingRight: "40px",
    minWidth: "300px",
  },
  rightSection: {
    flex: "1 1 300px",
    display: "flex",
    justifyContent: "center",
    minWidth: "280px",
  },
  title: {
    fontSize: "40px",
    fontWeight: "bold",
    color: "#000000",
    marginBottom: "40px",
    marginTop: "0",
    "@media (max-width: 768px)": {
      fontSize: "40px",
    },
  },
  bulletList: {
    margin: 0,
    paddingLeft: "20px",
  },
  bulletItem: {
    fontSize: "16px",
    color: "#333333",
    marginBottom: "20px",
    lineHeight: "1.5",
  },
  boldText: {
    fontWeight: "bold",
  },
  blueText: {
    fontWeight: "bold",
  },
  rocketImage: {
    width: "100%",
    height: "auto",
    maxHeight: "500px",
    objectFit: "contain",
  },
  rocketWrapper: {
    position: "relative",
    width: "100%",
    maxWidth: "600px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

const EcosystemPage: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.leftSection}>
        <h1 className={classes.title}>Ecosystem</h1>

        <ul className={classes.bulletList}>
          <li className={classes.bulletItem}>
            An <span className={classes.boldText}>Ecosystem</span> is a cohort
            where people collaborate to seek and share knowledge, skills, and
            experiences with each other
          </li>
          <li className={classes.bulletItem}>
            <span className={classes.boldText}>Collaboration</span> is a
            powerful and effective learning technique
          </li>
          <li className={classes.bulletItem}>
            <span className={classes.blueText}>Future of Work</span> will be
            largely dependent on an individual's ability to work in ecosystems
          </li>
          <li className={classes.bulletItem}>
            Research shows that an individual learns{" "}
            <span className={classes.blueText}>3X faster</span> through
            ecosystems than standalone
          </li>
          <li className={classes.bulletItem}>
            <span className={classes.boldText}>AI/GenAI Transformation</span>{" "}
            requires diverse skillsets and expertise to be leveraged through
            ecosystems
          </li>
          <li className={classes.bulletItem}>
            Ecosystems enable a paradigm shift in the{" "}
            <span className={classes.boldText}>mindset</span>, from being an
            employee of a firm to an employee of an industry
          </li>
          <li className={classes.bulletItem}>
            After completion of the course, participants shall be automatically
            enrolled in an ecosystem of professionals belonging to{" "}
            <span className={classes.boldText}>
              different industries and geographical locations
            </span>
          </li>
        </ul>
      </div>

      <div className={classes.rightSection}>
        <div className={classes.rocketWrapper}>
          <img
            src={ecosystem}
            className={classes.rocketImage}
            alt="Diagram showing the collaborative structure of a professional ecosystem"
          />
        </div>
      </div>
    </div>
  );
};

export default EcosystemPage;
