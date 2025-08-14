import React from "react";

const GenAIMindsetContain: React.FC = () => {
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
        Instructor-led, in-person/virtual, 4 hours, 1-2-1 coaching (1 hour free)
      </p>

      <div style={styles.contentWrapper}>
        {/* DAY 1 */}
        <div style={styles.daySection}>
          <h2 style={styles.dayTitle}>DAY 1</h2>

          <div style={styles.sectionTitle}>Need for Right Mindset</div>
          <ul style={styles.bulletList}>
            <li style={styles.bulletItem}>The genAI hype</li>
            <li style={styles.bulletItem}>Three mindset approaches</li>
            <li style={styles.bulletItem}>Know your mindset type</li>
          </ul>

          <div style={styles.sectionTitle}>The Growth Mindset</div>
          <ul style={styles.bulletList}>
            <li style={styles.bulletItem}>Fixed mindset v Growth mindset</li>
            <li style={styles.bulletItem}>Anatomy of a growth mindset</li>
            <li style={styles.bulletItem}>
              How growth mindset fosters learning
            </li>
            <li style={styles.bulletItem}>
              Introduction to the growth mindset framework
            </li>
          </ul>
        </div>

        {/* DAY 2 */}
        <div style={styles.daySection}>
          <div style={styles.competencyTitle}>Cultivating Growth Mindset</div>
          <ul style={styles.bulletList}>
            <li style={styles.bulletItem}>
              More about the belief 🡪 action 🡪 focus framework
            </li>
            <li style={styles.bulletItem}>Building beliefs</li>
            <li style={styles.bulletItem}>Reinforcing actions</li>
            <li style={styles.bulletItem}>Monitoring progress</li>
          </ul>

          <div style={styles.competencyTitle}>
            Practical applications of Growth Mindset
          </div>
          <ul style={styles.bulletList}>
            <li style={styles.bulletItem}>Case study discussion</li>
            <li style={styles.bulletItem}>
              Business scenarios and simulations
            </li>
            <li style={styles.bulletItem}>Role-plays</li>
            <li style={styles.bulletItem}>Group activities</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GenAIMindsetContain;
