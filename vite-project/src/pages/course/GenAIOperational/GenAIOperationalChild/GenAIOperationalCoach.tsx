import React from "react";
import coach from "../../../../assets/amitsirsecondpic.png";

const GenAIOperationalCoach: React.FC = () => {
  const styles = {
    container: {
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#ffffff",
      minHeight: "100vh",
      padding: "0",
      margin: "0",
    },
    content: {
      padding: "60px 80px",
      maxWidth: "1400px",
      margin: "0 auto",
    },
    title: {
      fontSize: "40px",
      fontWeight: "bold",
      color: "#000000",
      marginBottom: "40px",
      marginTop: "0",
      lineHeight: "1.1",
    },
    sectionIntro: {
      fontSize: "18px",
      color: "#333333",
      marginBottom: "30px",
      lineHeight: "1.4",
    },
    courseText: {
      fontStyle: "italic",
      fontWeight: "bold",
    },
    bulletList: {
      margin: "0 0 50px 0",
      paddingLeft: "20px",
    },
    bulletItem: {
      fontSize: "16px",
      color: "#333333",
      marginBottom: "12px",
      lineHeight: "1.5",
    },
    purpleText: {
      color: "#8B4F9F",
      fontWeight: "bold",
    },
    coachingText: {
      fontStyle: "italic",
      fontWeight: "bold",
    },
    lowerSection: {
      display: "flex",
      alignItems: "flex-start",
      gap: "60px",
    },
    leftSection: {
      flex: 1,
    },
    rightSection: {
      flex: "0 0 350px",
    },
    coachImage: {
      width: "100%",
      height: "auto",
      borderRadius: "8px",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.title}>Coaching</h1>

        {/* Upper content and image side-by-side */}
        <div style={styles.lowerSection}>
          <div style={styles.leftSection}>
            <p style={styles.sectionIntro}>
              In the <span style={styles.courseText}>course</span>, you will be
              introduced to:
            </p>

            <ul style={styles.bulletList}>
              <li style={styles.bulletItem}>
                <span style={styles.purpleText}>
                  Readiness Rocket Framework
                </span>{" "}
                an operational readiness framework for Scaling Generative AI
              </li>
              <li style={styles.bulletItem}>
                Assessments such as AI maturity, GenAI maturity, AI/GenAI
                Mindsets, VITA scores
              </li>
              <li style={styles.bulletItem}>
                Implementation of readiness areas: customer, technology, data,
                and people
              </li>
              <li style={styles.bulletItem}>
                Setting the foundations: boosters and launchpad, for readiness
                rocket
              </li>
            </ul>
          </div>

          {/* Image next to the course section */}
          <div style={styles.rightSection}>
            <img
              src={coach}
              alt="Professional coach working on laptop"
              style={styles.coachImage}
            />
          </div>
        </div>

        {/* Coaching section below */}
        <div>
          <p style={styles.sectionIntro}>
            In the <span style={styles.coachingText}>coaching</span>, there will
            be:
          </p>

          <ul style={styles.bulletList}>
            <li style={styles.bulletItem}>
              Commitment <span style={styles.purpleText}>contract</span> with
              the Coach
            </li>
            <li style={styles.bulletItem}>
              Continuous <span style={styles.purpleText}>check-ins</span> on
              strategy creation and execution
            </li>
            <li style={styles.bulletItem}>
              Problem-solving and{" "}
              <span style={styles.purpleText}>behavior</span> building
            </li>
            <li style={styles.bulletItem}>
              Continuous <span style={styles.purpleText}>feedback</span> on the
              operational readiness development
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GenAIOperationalCoach;
