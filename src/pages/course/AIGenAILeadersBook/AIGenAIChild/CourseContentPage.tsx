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
    "@media (max-width: 600px)": {
      textAlign: "center", // centers text inside the element
      margin: "0 auto 10px",
    },
  },
  subtitle: {
    fontSize: "18px",
    fontStyle: "italic",
    marginBottom: "40px",
    fontWeight: "normal",
  },
  contentWrapper: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "60px",

    "@media (max-width: 600px)": {
      gridTemplateColumns: "1fr",
    },
  },
  daySection: {
    marginBottom: "30px",
  },
  dayTitle: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
    marginTop: 0,
  },
  sectionTitle: {
    fontSize: "16px",
    fontWeight: "bold",
    marginBottom: "8px",
    marginTop: "25px",
  },
  bulletList: {
    margin: 0,
    paddingLeft: "20px",
    marginBottom: "15px",
    listStyleType: "disc",
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
    marginBottom: "8px",
    marginTop: "25px",
  },
});

const CourseContentPage: React.FC = () => {
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

          <div className={classes.sectionTitle}>
            Need for AI/GenAI Leadership
          </div>
          <ul className={classes.bulletList}>
            <li className={classes.bulletItem}>
              Why are business incumbents struggling to adopt genAI?
            </li>
            <li className={classes.bulletItem}>
              <em>Predigital v Digital</em> style of leadership
            </li>
          </ul>

          <div className={classes.sectionTitle}>
            6 facts about AI/GenAI every leader must know
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

          <div className={classes.sectionTitle}>
            Developing a Leadership Brand
          </div>
          <ul className={classes.bulletList}>
            <li className={classes.bulletItem}>
              6 different styles of leadership
            </li>
            <li className={classes.bulletItem}>24 AI-conducive behaviours</li>
            <li className={classes.bulletItem}>
              Assessing the AI needs of your organization
            </li>
            <li className={classes.bulletItem}>
              Crafting a leadership brand statement
            </li>
          </ul>

          <div className={classes.competencyTitle}>
            Competency 1# Growth Mindset
          </div>
          <ul className={classes.bulletList}>
            <li className={classes.bulletItem}>Anatomy of growth mindset</li>
            <li className={classes.bulletItem}>
              How a growth mindset drives learning
            </li>
            <li className={classes.bulletItem}>
              Reskilling for 12 new AI/GenAI job roles
            </li>
            <li className={classes.bulletItem}>Cultivating a growth mindset</li>
          </ul>
        </div>

        {/* DAY 2 */}
        <div className={classes.daySection}>
          <h2 className={classes.dayTitle}>DAY 2</h2>

          <div className={classes.competencyTitle}>Competency 2# Empathy</div>
          <ul className={classes.bulletList}>
            <li className={classes.bulletItem}>
              Empathy framework: Think-Feel-Will Analysis
            </li>
            <li className={classes.bulletItem}>
              How empathy drives empowerment
            </li>
            <li className={classes.bulletItem}>
              Using empathy for team building, stakeholder management and
              influencing, networking, mentoring, and reverse mentoring
            </li>
            <li className={classes.bulletItem}>
              Implementing a 12-week empathy program
            </li>
          </ul>

          <div className={classes.competencyTitle}>
            Competency 3# Informed Decision-Making
          </div>
          <ul className={classes.bulletList}>
            <li className={classes.bulletItem}>Avoiding bias traps</li>
            <li className={classes.bulletItem}>
              Data driven Decision-making model
            </li>
            <li className={classes.bulletItem}>Assessing the right data</li>
            <li className={classes.bulletItem}>
              Tackling the most challenging decision: Should we invest in
              AI/GenAI?
            </li>
          </ul>

          <div className={classes.competencyTitle}>
            Competency 4# Fast Execution
          </div>
          <ul className={classes.bulletList}>
            <li className={classes.bulletItem}>The need for speed</li>
            <li className={classes.bulletItem}>
              Managing uncertainties using the Act-learn-Build model
            </li>
            <li className={classes.bulletItem}>
              7 key actions to be taken by AI/Gen Leaders
            </li>
            <li className={classes.bulletItem}>
              Scaling genAI using the Readiness Rocket Framework
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CourseContentPage;
