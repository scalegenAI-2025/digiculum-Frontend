import React from "react";
import ecosystem from "../../../../assets/super ecosystem image.jpg";

const EcosystemPage: React.FC = () => {
  const styles: { [key: string]: React.CSSProperties } = {
    container: {
      fontFamily: "Arial, sans-serif",
      padding: "40px",
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
      fontSize: "48px",
      fontWeight: "bold",
      color: "#000000",
      marginBottom: "40px",
      marginTop: "0",
    },
    bulletList: {
      margin: "0",
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
      color: "#2F4F4F",
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
  };

  return (
    <div style={styles.container}>
      <div style={styles.leftSection}>
        <h1 style={styles.title}>Ecosystem</h1>

        <ul style={styles.bulletList}>
          <li style={styles.bulletItem}>
            An <span style={styles.boldText}>Ecosystem</span> is a cohort where
            people collaborate to seek and share knowledge, skills, and
            experiences with each other
          </li>
          <li style={styles.bulletItem}>
            <span style={styles.boldText}>Collaboration</span> is a powerful and
            effective learning technique
          </li>
          <li style={styles.bulletItem}>
            <span style={styles.blueText}>Future of Work</span> will be largely
            dependent on an individual's ability to work in ecosystems
          </li>
          <li style={styles.bulletItem}>
            Research shows that an individual learns{" "}
            <span style={styles.blueText}>3X faster</span> through ecosystems
            than standalone
          </li>
          <li style={styles.bulletItem}>
            <span style={styles.boldText}>AI/GenAI Transformation</span>{" "}
            requires diverse skillsets and expertise to be leveraged through
            ecosystems
          </li>
          <li style={styles.bulletItem}>
            Ecosystems enable a paradigm shift in the{" "}
            <span style={styles.boldText}>mindset</span>, from being an employee
            of a firm to an employee of an industry
          </li>
          <li style={styles.bulletItem}>
            After completion of the course, participants shall be automatically
            enrolled in an ecosystem of professionals belonging to{" "}
            <span style={styles.boldText}>
              different industries and geographical locations
            </span>
          </li>
        </ul>
      </div>

      <div style={styles.rightSection}>
        <div style={styles.rocketWrapper}>
          <img
            src={ecosystem}
            style={styles.rocketImage}
            alt="Diagram showing the collaborative structure of a professional ecosystem"
          />
        </div>
      </div>
    </div>
  );
};

export default EcosystemPage;
