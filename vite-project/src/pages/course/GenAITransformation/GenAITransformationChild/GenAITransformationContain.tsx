import React from "react";

const GenAITransformationContain: React.FC = () => {
  const styles = {
    container: {
      fontFamily: "Arial, sans-serif",
      padding: "2rem",
      backgroundColor: "#ffffff",
      maxWidth: "1200px",
      margin: "0 auto",
      lineHeight: "1.4",
    },
    title: {
      fontSize: "40px",
      fontWeight: "bold",
      color: "#000000",
      marginBottom: "10px",
      marginTop: "0",
    },
    subtitle: {
      fontSize: "18px",
      color: "#8000ff",
      fontStyle: "italic",
      marginBottom: "40px",
      fontWeight: "normal",
    },
    contentWrapper: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "60px",
    },
    daySection: {
      marginBottom: "30px",
    },
    dayTitle: {
      fontSize: "24px",
      fontWeight: "bold",
      color: "#00405a",
      marginBottom: "20px",
      marginTop: "0",
    },
    sectionTitle: {
      fontSize: "16px",
      fontWeight: "bold",
      color: "#00405a",
      marginBottom: "8px",
      marginTop: "25px",
    },
    bulletList: {
      margin: "0",
      paddingLeft: "20px",
      marginBottom: "15px",
    },
    bulletItem: {
      fontSize: "16px",
      color: "#333333",
      marginBottom: "4px",
      lineHeight: "1.3",
    },
    competencyTitle: {
      fontSize: "16px",
      fontWeight: "bold",
      color: "#00405a",
      marginBottom: "8px",
      marginTop: "25px",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Content</h1>
      <p style={styles.subtitle}>
        Instructor-led, in-person/virtual, 12 hours, 1-2-1 coaching (2 hours
        free)
      </p>

      <div style={styles.contentWrapper}>
        {/* DAY 1 */}
        <div style={styles.daySection}>
          <h2 style={styles.dayTitle}>DAY 1</h2>

          <div style={styles.sectionTitle}>Need for AI/GenAI Leadership</div>
          <ul style={styles.bulletList}>
            <li style={styles.bulletItem}>
              Why are business incumbents struggling to adopt genAI?
            </li>
            <li style={styles.bulletItem}>
              <em>Predigital v Digital</em> style of leadership
            </li>
          </ul>

          <div style={styles.sectionTitle}>
            6 facts about AI/GenAI every leader must know
          </div>
          <ul style={styles.bulletList}>
            <li style={styles.bulletItem}>
              Difference between AI, ML, DL, and genAI
            </li>
            <li style={styles.bulletItem}>Types of genAI content</li>
            <li style={styles.bulletItem}>
              Difference between traditional AI and genAI
            </li>
            <li style={styles.bulletItem}>Evolution of LLMs</li>
            <li style={styles.bulletItem}>Business architecture of genAI</li>
            <li style={styles.bulletItem}>How GPT works</li>
          </ul>

          <div style={styles.sectionTitle}>Developing a Leadership Brand</div>
          <ul style={styles.bulletList}>
            <li style={styles.bulletItem}>6 different styles of leadership</li>
            <li style={styles.bulletItem}>24 AI-conducive behaviours</li>
            <li style={styles.bulletItem}>
              Assessing the AI needs of your organization
            </li>
            <li style={styles.bulletItem}>
              Crafting a leadership brand statement
            </li>
          </ul>

          <div style={styles.competencyTitle}>Competency 1# Growth Mindset</div>
          <ul style={styles.bulletList}>
            <li style={styles.bulletItem}>Anatomy of growth mindset</li>
            <li style={styles.bulletItem}>
              How a growth mindset drives learning
            </li>
            <li style={styles.bulletItem}>
              Reskilling for 10 new AI/GenAI job roles
            </li>
            <li style={styles.bulletItem}>Cultivating a growth mindset</li>
          </ul>
        </div>

        {/* DAY 2 */}
        <div style={styles.daySection}>
          <h2 style={styles.dayTitle}>DAY 2</h2>

          <div style={styles.competencyTitle}>Competency 2# Empathy</div>
          <ul style={styles.bulletList}>
            <li style={styles.bulletItem}>
              Empathy framework: Think-Feel-Will Analysis
            </li>
            <li style={styles.bulletItem}>How empathy drives empowerment</li>
            <li style={styles.bulletItem}>
              Using empathy for team building, stakeholder management and
              influencing, networking, mentoring, and reverse mentoring
            </li>
            <li style={styles.bulletItem}>
              Implementing a 12-week empathy program
            </li>
          </ul>

          <div style={styles.competencyTitle}>
            Competency 3# Informed Decision-Making
          </div>
          <ul style={styles.bulletList}>
            <li style={styles.bulletItem}>Avoiding bias traps</li>
            <li style={styles.bulletItem}>Data driven Decision-making model</li>
            <li style={styles.bulletItem}>Assessing the right data</li>
            <li style={styles.bulletItem}>
              Tackling the most challenging decision: Should we invest in
              AI/GenAI?
            </li>
          </ul>

          <div style={styles.competencyTitle}>Competency 4# Fast Execution</div>
          <ul style={styles.bulletList}>
            <li style={styles.bulletItem}>The need for speed</li>
            <li style={styles.bulletItem}>
              Managing uncertainties using the Act-learn-Build model
            </li>
            <li style={styles.bulletItem}>
              7 key actions to be taken by AI/Gen Leaders
            </li>
            <li style={styles.bulletItem}>
              Scaling genAI using the Readiness Rocket Framework
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GenAITransformationContain;
