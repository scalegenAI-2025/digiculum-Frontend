import React from "react";

const GenAIOperationalContent: React.FC = () => {
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

          <div style={styles.sectionTitle}>Scaled Adoption of GenAI</div>
          <ul style={styles.bulletList}>
            <li style={styles.bulletItem}>KPIs for Scaled Adoption</li>
            <li style={styles.bulletItem}>Why will genAI scale?</li>
            <li style={styles.bulletItem}>
              Convertible and Nonconvertible pilots
            </li>
            <li style={styles.bulletItem}>GenAI solution or MVP</li>
            <li style={styles.bulletItem}>
              Dependencies between Operational Readiness, Convertible Pilots,
              and GenAI solution
            </li>
          </ul>

          <div style={styles.sectionTitle}>
            Introduction to Operational Readiness Framework
          </div>
          <ul style={styles.bulletList}>
            <li style={styles.bulletItem}>
              The need for operational readiness
            </li>
            <li style={styles.bulletItem}>GenAI Maturity Assessment</li>
            <li style={styles.bulletItem}>Scaled Adoption Strategy</li>
            <li style={styles.bulletItem}>
              Introduction to boosters, readiness areas, and lauchpad
            </li>
          </ul>

          <div style={styles.sectionTitle}>Boosters</div>
          <ul style={styles.bulletList}>
            <li style={styles.bulletItem}>
              Booster 1 for Readiness Rocket: Assessment and preparation
            </li>
            <li style={styles.bulletItem}>
              Booster 2 for Readiness Rocket: Assessment and preparation
            </li>
            <li style={styles.bulletItem}>
              Booster 3 for Readiness Rocket: Assessment and preparation
            </li>
          </ul>

          <div style={styles.competencyTitle}>Readiness Area 1: Customer</div>
          <ul style={styles.bulletList}>
            <li style={styles.bulletItem}>Importance of customer engagement</li>
            <li style={styles.bulletItem}>Know your VITA score</li>
            <li style={styles.bulletItem}>
              Strategies for customer engagement
            </li>
            <li style={styles.bulletItem}>Customer Readiness Audit</li>
            <li style={styles.bulletItem}>
              High-readiness customers Selection Matrices
            </li>
          </ul>
        </div>

        {/* DAY 2 */}
        <div style={styles.daySection}>
          <h2 style={styles.dayTitle}>DAY 2</h2>

          <div style={styles.competencyTitle}>Readiness Area 2: Technology</div>
          <ul style={styles.bulletList}>
            <li style={styles.bulletItem}>Exploring AI/GenAI capabilities</li>
            <li style={styles.bulletItem}>Large Language Model Selection</li>
            <li style={styles.bulletItem}>Fine Tuning v RAG</li>
            <li style={styles.bulletItem}>Evaluating infrastructure</li>
            <li style={styles.bulletItem}>Managing technical debt</li>
          </ul>

          <div style={styles.competencyTitle}>Readiness Area 3: Data</div>
          <ul style={styles.bulletList}>
            <li style={styles.bulletItem}>Choosing the right data strategy</li>
            <li style={styles.bulletItem}>
              Three critical steps to Data Acquisition
            </li>
            <li style={styles.bulletItem}>
              Three critical steps to Data Preparation
            </li>
            <li style={styles.bulletItem}>
              Three critical steps to Data Production
            </li>
          </ul>

          <div style={styles.competencyTitle}>Readiness Area 4: People</div>
          <ul style={styles.bulletList}>
            <li style={styles.bulletItem}>
              Need for structures, governance, and frameworks
            </li>
            <li style={styles.bulletItem}>Responsible AI framework</li>
            <li style={styles.bulletItem}>
              Introduction to 12 New GenAI roles
            </li>
            <li style={styles.bulletItem}>Assessing the skills gap</li>
          </ul>
          <div style={styles.competencyTitle}>Launchpad</div>
          <ul style={styles.bulletList}>
            <li style={styles.bulletItem}>Need for launchpad</li>
            <li style={styles.bulletItem}>4 key areas of genAI investments</li>
            <li style={styles.bulletItem}>
              Cultivating the right competencies
            </li>
            <li style={styles.bulletItem}>Taking fast actions</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GenAIOperationalContent;
