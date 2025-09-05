import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    padding: "60px",
    backgroundColor: "#ffffff",
    maxWidth: "1200px",
    margin: "0 auto",
    lineHeight: 1.4,
    "@media (max-width: 768px)": {
      padding: "2rem",
    },
  },
  title: {
    fontSize: "40px",
    fontWeight: "bold",
    color: "#000000",
    marginBottom: "10px",
    marginTop: 0,
  },
  subtitle: {
    fontSize: "18px",
    color: "#000",
    fontStyle: "italic",
    marginBottom: "40px",
    // fontWeight: "bold",
  },
  contentWrapper: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "60px",
    "@media (max-width: 768px)": {
      gridTemplateColumns: "1fr",
      gap: "0px",
    },
  },
  daySection: {
    marginBottom: "30px",
    "@media (max-width: 600px)": {
      marginBottom: "0px",
    },
  },
  dayTitle: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#000",
    marginBottom: "20px",
    marginTop: 0,
  },
  sectionTitle: {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#000",
    marginBottom: "8px",
    marginTop: "25px",
  },
  bulletList: {
    margin: 0,
    paddingLeft: "20px",
    marginBottom: "15px",
  },
  bulletItem: {
    fontSize: "16px",
    color: "#333333",
    marginBottom: "4px",
    lineHeight: 1.3,
  },
  competencyTitle: {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#000",
    marginBottom: "8px",
    marginTop: "25px",
  },
});

const GenAIOperationalContent: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Content</h1>
      <p className={classes.subtitle}>
        Instructor-led, in-person/virtual, 12 hours, 1-2-1 coaching (1 hour
        free)
      </p>

      <div className={classes.contentWrapper}>
        {/* DAY 1 */}
        <div className={classes.daySection}>
          <h2 className={classes.dayTitle}>DAY 1</h2>

          <div className={classes.sectionTitle}>Scaled Adoption of GenAI</div>
          <ul className={classes.bulletList}>
            <li className={classes.bulletItem}>KPIs for Scaled Adoption</li>
            <li className={classes.bulletItem}>Why will genAI scale?</li>
            <li className={classes.bulletItem}>
              Convertible and Nonconvertible pilots
            </li>
            <li className={classes.bulletItem}>GenAI solution or MVP</li>
            <li className={classes.bulletItem}>
              Dependencies between Operational Readiness, Convertible Pilots,
              and GenAI solution
            </li>
          </ul>

          <div className={classes.sectionTitle}>
            Introduction to Operational Readiness Framework
          </div>
          <ul className={classes.bulletList}>
            <li className={classes.bulletItem}>
              The need for operational readiness
            </li>
            <li className={classes.bulletItem}>GenAI Maturity Assessment</li>
            <li className={classes.bulletItem}>Scaled Adoption Strategy</li>
            <li className={classes.bulletItem}>
              Introduction to boosters, readiness areas, and launchpad
            </li>
          </ul>

          <div className={classes.sectionTitle}>Boosters</div>
          <ul className={classes.bulletList}>
            <li className={classes.bulletItem}>
              Booster 1 for Readiness Rocket: Assessment and preparation
            </li>
            <li className={classes.bulletItem}>
              Booster 2 for Readiness Rocket: Assessment and preparation
            </li>
            <li className={classes.bulletItem}>
              Booster 3 for Readiness Rocket: Assessment and preparation
            </li>
          </ul>

          <div className={classes.competencyTitle}>
            Readiness Area 1: Customer
          </div>
          <ul className={classes.bulletList}>
            <li className={classes.bulletItem}>
              Importance of customer engagement
            </li>
            <li className={classes.bulletItem}>Know your VITA score</li>
            <li className={classes.bulletItem}>
              Strategies for customer engagement
            </li>
            <li className={classes.bulletItem}>Customer Readiness Audit</li>
            <li className={classes.bulletItem}>
              High-readiness customers Selection Matrices
            </li>
          </ul>
        </div>

        {/* DAY 2 */}
        <div className={classes.daySection}>
          <h2 className={classes.dayTitle}>DAY 2</h2>

          <div className={classes.competencyTitle}>
            Readiness Area 2: Technology
          </div>
          <ul className={classes.bulletList}>
            <li className={classes.bulletItem}>
              Exploring AI/GenAI capabilities
            </li>
            <li className={classes.bulletItem}>
              Large Language Model Selection
            </li>
            <li className={classes.bulletItem}>Fine Tuning v RAG</li>
            <li className={classes.bulletItem}>Evaluating infrastructure</li>
            <li className={classes.bulletItem}>Managing technical debt</li>
          </ul>

          <div className={classes.competencyTitle}>Readiness Area 3: Data</div>
          <ul className={classes.bulletList}>
            <li className={classes.bulletItem}>
              Choosing the right data strategy
            </li>
            <li className={classes.bulletItem}>
              Three critical steps to Data Acquisition
            </li>
            <li className={classes.bulletItem}>
              Three critical steps to Data Preparation
            </li>
            <li className={classes.bulletItem}>
              Three critical steps to Data Production
            </li>
          </ul>

          <div className={classes.competencyTitle}>
            Readiness Area 4: People
          </div>
          <ul className={classes.bulletList}>
            <li className={classes.bulletItem}>
              Need for structures, governance, and frameworks
            </li>
            <li className={classes.bulletItem}>Responsible AI framework</li>
            <li className={classes.bulletItem}>
              Introduction to 12 New GenAI roles
            </li>
            <li className={classes.bulletItem}>Assessing the skills gap</li>
          </ul>

          <div className={classes.competencyTitle}>Launchpad</div>
          <ul className={classes.bulletList}>
            <li className={classes.bulletItem}>Need for launchpad</li>
            <li className={classes.bulletItem}>
              4 key areas of genAI investments
            </li>
            <li className={classes.bulletItem}>
              Cultivating the right competencies
            </li>
            <li className={classes.bulletItem}>Taking fast actions</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GenAIOperationalContent;
