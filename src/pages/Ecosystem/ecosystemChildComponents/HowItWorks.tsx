import React from "react";
import { createUseStyles } from "react-jss";
import earth from "../../../assets/how does it work pic_ecosystem.jpg";
interface Step {
  number: string;
  title: string;
  description: string;
}

const useStyles = createUseStyles({
  container: {
    display: "flex",
    maxWidth: "2000px",
    // margin: "0 auto",
    padding: "60px 20px",
    gap: "60px",
    backgroundColor: "lightgrey",
    alignItems: "center",
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
    "@media (max-width: 768px)": {
      flexDirection: "column",
      gap: "40px",
      padding: "40px 20px",
    },
  },
  imageSection: {
    flex: "1",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    maxWidth: "500px",
    height: "auto",
    borderRadius: "12px",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
  },
  contentSection: {
    flex: "1",
    paddingLeft: "20px",
    "@media (max-width: 768px)": {
      paddingLeft: "0",
    },
  },
  title: {
    fontSize: "42px",
    fontWeight: "600",
    color: "#2d3748",
    marginBottom: "50px",
    letterSpacing: "-0.5px",
    "@media (max-width: 768px)": {
      fontSize: "32px",
      textAlign: "center",
      marginBottom: "30px",
    },
  },
  stepsContainer: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "40px",
    "@media (max-width: 768px)": {
      gridTemplateColumns: "1fr",
      gap: "30px",
    },
  },
  step: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  stepNumber: {
    fontSize: "28px",
    fontWeight: "700",
    color: "#4a5568",
    marginBottom: "8px",
  },
  stepTitle: {
    fontSize: "16px",
    fontWeight: "600",
    color: "#2d3748",
    marginBottom: "4px",
  },
  stepDescription: {
    fontSize: "14px",
    lineHeight: "1.6",
    color: "#718096",
  },
  collaborators: {
    fontWeight: "600",
    color: "#2d3748",
  },
  seek: {
    fontWeight: "600",
    color: "#2d3748",
  },
  share: {
    fontWeight: "600",
    color: "#2d3748",
  },
});

const HowItWorks: React.FC = () => {
  const classes = useStyles();

  const steps: Step[] = [
    {
      number: "01",
      title: "Ecosystem Members",
      description:
        "The individuals belonging to a particular ecosystem are called Collaborators.",
    },
    {
      number: "02",
      title: "Multi-Ecosystem Participation",
      description:
        "An individual can be a collaborator in one or more than one ecosystems.",
    },
    {
      number: "03",
      title: "Knowledge Sharing",
      description:
        "The collaborators share and seek knowledge from each other.",
    },
    {
      number: "04",
      title: "Question Posting",
      description:
        "When a collaborator wants to seek knowledge, he/she can post a new question by creating a new discussion thread on the collaboration forum, after specifying a knowledge category.",
    },
    {
      number: "05",
      title: "Response Sharing",
      description:
        "The collaborators share knowledge by posting response to the question on the collaboration forum.",
    },
  ];

  return (
    <div className={classes.container}>
      <div className={classes.imageSection}>
        <img src={earth} alt="Team collaboration" className={classes.image} />
      </div>

      <div className={classes.contentSection}>
        <h2 className={classes.title}>How does it work?</h2>

        <div className={classes.stepsContainer}>
          {steps.map((step, index) => (
            <div key={index} className={classes.step}>
              <div className={classes.stepNumber}>{step.number}</div>
              <div className={classes.stepTitle}>{step.title}</div>
              <div className={classes.stepDescription}>
                {step.description.includes("Collaborators") ? (
                  <>
                    The individuals belonging to a particular ecosystem are
                    called{" "}
                    <span className={classes.collaborators}>Collaborators</span>
                    .
                  </>
                ) : step.description.includes("seek knowledge, he/she") ? (
                  <>
                    When a collaborator wants to{" "}
                    <span className={classes.seek}>seek knowledge</span>, he/she
                    can post a new question by creating a new discussion thread
                    on the collaboration forum, after specifying a knowledge
                    category.
                  </>
                ) : step.description.includes("share knowledge by") ? (
                  <>
                    The collaborators{" "}
                    <span className={classes.share}>share</span> knowledge by
                    posting response to the question on the collaboration forum.
                  </>
                ) : (
                  step.description
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
