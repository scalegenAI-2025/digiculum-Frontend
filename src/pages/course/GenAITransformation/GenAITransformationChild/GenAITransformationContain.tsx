import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    padding: "60px",
    backgroundColor: "#ffffff",
    maxWidth: "1200px",
    margin: "0 auto",
    lineHeight: 1.4,

    "@media (max-width: 600px)": {
      padding: "2rem",
    },
  },
  title: {
    fontSize: "40px",
    fontWeight: "bold",
    color: "#000000",
    marginBottom: "10px",
    marginTop: 0,

    "@media (max-width: 768px)": {
      fontSize: "40px",
    },
  },
  subtitle: {
    fontSize: "18px",
    color: "#000",
    fontStyle: "italic",
    marginBottom: "40px",
    fontWeight: "normal",
  },
  contentWrapper: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "60px",

    "@media (max-width: 900px)": {
      gridTemplateColumns: "1fr",
      gap: "0px",
    },
  },
  daySection: {
    marginBottom: "30px",
    "@media (max-width: 900px)": {
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
    "@media (max-width: 900px)": {
      marginTop: "0px",
    },
  },
});

const GenAITransformationContain: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Content</h1>
      <p className={classes.subtitle}>
        Instructor-led, in-person/virtual, 6 hours, 1-2-1 coaching (1 hour free)
      </p>

      <div className={classes.contentWrapper}>
        {/* DAY 1 */}
        <div className={classes.daySection}>
          {/* <h2 className={classes.dayTitle}>DAY 1</h2> */}

          <div className={classes.sectionTitle}>
            Digital Transformation Overview
          </div>
          <ul className={classes.bulletList}>
            <li className={classes.bulletItem}>Busines areas and technology</li>
            <li className={classes.bulletItem}>
              Digital landscape and disruptions
            </li>
            <li className={classes.bulletItem}>
              Three types of transformations
            </li>
            <li className={classes.bulletItem}>Customers in Digital Economy</li>
            <li className={classes.bulletItem}>Ecosystems and platforms</li>
            <li className={classes.bulletItem}>
              Role of AI/GenAI in digital transformation
            </li>
            <li className={classes.bulletItem}>
              AI, Digital Transformation, and Corporate Strategy
            </li>
          </ul>

          <div className={classes.sectionTitle}>
            6 facts about AI/GenAI every professional must know
          </div>
          <ul className={classes.bulletList}>
            <li className={classes.bulletItem}>
              Difference between AI, ML, DL, and genAI
            </li>
            <li className={classes.bulletItem}>Types of genAI content</li>
            <li className={classes.bulletItem}>
              Difference between traditional AI and genAI
            </li>
            <li className={classes.bulletItem}>Evolution of LLMs</li>
            <li className={classes.bulletItem}>
              Business architecture of genAI
            </li>
            <li className={classes.bulletItem}>How GPT works</li>
          </ul>

          <div className={classes.sectionTitle}>Strategy Creation</div>
          <ul className={classes.bulletList}>
            <li className={classes.bulletItem}>
              Evaluating the results of Digital Maturity, AI Maturity, and GenAI
              Maturity Assessment
            </li>
            <li className={classes.bulletItem}>Situation Analysis</li>
            <li className={classes.bulletItem}>
              Learnings from best cases studies
            </li>
            <li className={classes.bulletItem}>
              Preparing a generic DT Strategy
            </li>
            <li className={classes.bulletItem}>
              Preparing a specific AI/GenAI Strategy
            </li>
          </ul>

          {/* <div className={classes.competencyTitle}>
            Wanted Position and Strategic Priorities
          </div>
          <ul className={classes.bulletList}>
            <li className={classes.bulletItem}>Anatomy of growth mindset</li>
            <li className={classes.bulletItem}>
              How a growth mindset drives learning
            </li>
            <li className={classes.bulletItem}>
              Reskilling for 10 new AI/GenAI job roles
            </li>
            <li className={classes.bulletItem}>Cultivating a growth mindset</li>
          </ul> */}
        </div>

        {/* DAY 2 */}
        <div className={classes.daySection}>
          {/* <h2 className={classes.dayTitle}>DAY 2</h2> */}

          <div className={classes.competencyTitle}>
            Wanted Position and Strategic Priorities
          </div>
          <ul className={classes.bulletList}>
            <li className={classes.bulletItem}>Defining a wanted position</li>
            <li className={classes.bulletItem}>
              Listing the key strategic priorities
            </li>
            <li className={classes.bulletItem}>
              Learnings from best case studies
            </li>
            {/* <li className={classes.bulletItem}>
              Implementing a 12-week empathy program
            </li> */}
          </ul>

          <div className={classes.competencyTitle}>Strategy Execution- 1</div>
          <ul className={classes.bulletList}>
            <li className={classes.bulletItem}>Choose transformation type</li>
            <li className={classes.bulletItem}>
              Selecting pilot or genAI solution (no-pilot) approach
            </li>
            <li className={classes.bulletItem}>
              Greenfield v Brownfield strategy
            </li>
            <li className={classes.bulletItem}>
              Positioning in the genAI value chain
            </li>
          </ul>

          <div className={classes.competencyTitle}>Strategy Execution-2</div>
          <ul className={classes.bulletList}>
            <li className={classes.bulletItem}>
              Business models, business case, use case, and productivity gain
            </li>
            <li className={classes.bulletItem}>
              Identify the key change areas
            </li>
            <li className={classes.bulletItem}>LLM and vendor selection</li>
            <li className={classes.bulletItem}>
              Mapping adjacent technologies
            </li>
            <li className={classes.bulletItem}>Defining key metrics</li>
            <li className={classes.bulletItem}>
              Continuous monitoring and improvement
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GenAITransformationContain;
