import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    padding: "40px 20px",
    backgroundColor: "#f5f5f5",
    minHeight: "100vh",
  },
  title: {
    fontSize: "4rem",
    fontWeight: "bold",
    textAlign: "center",
    color: "#333",
    marginBottom: "40px",
    fontFamily: "Arial, sans-serif",
  },
  cardsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "30px",
    maxWidth: "1200px",
    margin: "0 auto",
    "@media (max-width: 968px)": {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
    "@media (max-width: 640px)": {
      gridTemplateColumns: "1fr",
    },
  },
  card: {
    backgroundColor: "#4a4a4a",
    //  borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
    "&:hover": {
      transform: "translateY(-5px)",
      boxShadow: "0 12px 32px rgba(0, 0, 0, 0.2)",
    },
  },
  cardContent: {
    padding: "24px",
  },
  cardLayout: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    marginBottom: "20px",
  },
  imageSection: {
    flex: "0 0 140px",
    height: "100px",
    backgroundColor: "#2a2a2a",
    borderRadius: "8px",
    overflow: "hidden",
    position: "relative",
  },
  brainImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },
  textSection: {
    flex: 1,
    color: "white",
  },
  cardTitle: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginBottom: "8px",
    lineHeight: "1.3",
  },
  cardSubtitle: {
    fontSize: "0.9rem",
    color: "#ccc",
    marginBottom: "16px",
  },
  readMoreButton: {
    backgroundColor: "#ffb347",
    color: "#333",
    border: "none",
    padding: "10px 20px",
    borderRadius: "6px",
    fontSize: "0.9rem",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease",
    "&:hover": {
      backgroundColor: "#ff9f33",
      transform: "translateY(-1px)",
    },
  },
});

interface CardData {
  id: number;
  title: string;
  subtitle: string;
}

const CourseCard: React.FC<{ card: CardData }> = ({ card }) => {
  const classes = useStyles();

  return (
    <div className={classes.card}>
      <div className={classes.cardContent}>
        <div className={classes.cardLayout}>
          <div className={classes.imageSection}>
            <img
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=300&h=200&fit=crop&auto=format"
              alt="AI Brain Circuit"
              className={classes.brainImage}
            />
          </div>
          <div className={classes.textSection}>
            <h3 className={classes.cardTitle}>{card.title}</h3>
            <p className={classes.cardSubtitle}>{card.subtitle}</p>
          </div>
        </div>
        <button className={classes.readMoreButton}>Read More</button>
      </div>
    </div>
  );
};

const CoursesPage: React.FC = () => {
  const classes = useStyles();

  // Generate 56 cards with varied content
  const cardData: CardData[] = Array.from({ length: 56 }, (_, index) => {
    const topics = [
      "Generative AI Fundamentals",
      "Machine Learning Basics",
      "Neural Networks Deep Dive",
      "Natural Language Processing",
      "Computer Vision Essentials",
      "AI Ethics & Responsibility",
      "Data Science Foundations",
      "Deep Learning Advanced",
      "AI Model Training",
      "Transformer Architecture",
      "Large Language Models",
      "AI in Business Applications",
      "Reinforcement Learning",
      "AI Safety & Alignment",
      "Prompt Engineering",
    ];

    const subtitles = [
      "6 facts every professional should know",
      "Essential concepts for beginners",
      "Advanced techniques and methods",
      "Core principles and applications",
      "Practical skills for professionals",
      "Industry best practices",
      "Comprehensive guide for experts",
      "Key insights and strategies",
    ];

    return {
      id: index + 1,
      title: topics[index % topics.length],
      subtitle: subtitles[index % subtitles.length],
    };
  });

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Courses</h1>
      <div className={classes.cardsGrid}>
        {cardData.map((card) => (
          <CourseCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;
