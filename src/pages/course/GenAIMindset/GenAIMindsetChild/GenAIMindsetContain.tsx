import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    padding: "60PX",
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
    "@media (max-width: 768px)": {
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
    "@media (max-width: 768px)": {
      marginBottom: "0px",
    },
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
    "@media (max-width: 768px)": {
      marginBottom: "0px",
    },
  },
});

const GenAIMindsetContain: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Content</h1>
      <p className={classes.subtitle}>
        Instructor-led, in-person/virtual, 4 hours, 1-2-1 coaching (1 hour free)
      </p>

      <div className={classes.contentWrapper}>
        {/* DAY 1 */}
        <div className={classes.daySection}>
          {/* <h2 className={classes.dayTitle}>DAY 1</h2> */}

          <div className={classes.sectionTitle}>Need for Right Mindset</div>
          <ul className={classes.bulletList}>
            <li className={classes.bulletItem}>The genAI hype</li>
            <li className={classes.bulletItem}>Three mindset approaches</li>
            <li className={classes.bulletItem}>Know your mindset type</li>
          </ul>

          <div className={classes.sectionTitle}>The Growth Mindset</div>
          <ul className={classes.bulletList}>
            <li className={classes.bulletItem}>
              Fixed mindset v Growth mindset
            </li>
            <li className={classes.bulletItem}>Anatomy of a growth mindset</li>
            <li className={classes.bulletItem}>
              How growth mindset fosters learning
            </li>
            <li className={classes.bulletItem}>
              Introduction to the growth mindset framework
            </li>
          </ul>
        </div>

        {/* DAY 2 */}
        <div className={classes.daySection}>
          <div className={classes.competencyTitle}>
            Cultivating Growth Mindset
          </div>
          <ul className={classes.bulletList}>
            <li className={classes.bulletItem}>
              More about the belief 🡪 action 🡪 focus framework
            </li>
            <li className={classes.bulletItem}>Building beliefs</li>
            <li className={classes.bulletItem}>Reinforcing actions</li>
            <li className={classes.bulletItem}>Monitoring progress</li>
          </ul>

          <div className={classes.competencyTitle}>
            Practical applications of Growth Mindset
          </div>
          <ul className={classes.bulletList}>
            <li className={classes.bulletItem}>Case study discussion</li>
            <li className={classes.bulletItem}>
              Business scenarios and simulations
            </li>
            <li className={classes.bulletItem}>Role-plays</li>
            <li className={classes.bulletItem}>Group activities</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GenAIMindsetContain;
