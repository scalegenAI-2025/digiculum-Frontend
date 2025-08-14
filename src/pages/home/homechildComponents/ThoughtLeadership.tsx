import React from "react";
import { createUseStyles } from "react-jss";
import Image1 from "../../../assets/AI1.jpeg";
import Image2 from "../../../assets/AI2.jpeg";
import Image3 from "../../../assets/AI3.jpeg";

const useStyles = createUseStyles({
  container: {
    padding: "2rem",
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  heading: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginBottom: "2rem",
  },
  cardsWrapper: {
    display: "flex",
    gap: "2rem",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  card: {
    width: "280px",
    height: "420px", // Increased height
    backgroundColor: "#f3f3f3",
    borderRadius: 4,
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    "&:hover": {
      transform: "translateY(-5px)",
    },
  },

  imageWrapper: {
    width: "100%",
    height: "75%",
    padding: "10px", // white border space
    backgroundColor: "#fff", // white border background
    boxSizing: "border-box", // ensures padding doesn't overflow
    overflow: "hidden",
    border: "1px solid #e0e0e0", // subtle edge like a photo print
    borderRadius: "4px",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },

  title: {
    padding: "1rem",
    fontSize: "1rem",
    fontWeight: 600,
    color: "#000",
    textAlign: "left",
  },
});

type CardProps = {
  imageUrl: string;
  title: string;
};

const data: CardProps[] = [
  { imageUrl: Image1, title: "12 New AI/GenAI Job Roles" },
  { imageUrl: Image2, title: "Three piloting Mistakes" },
  {
    imageUrl: Image3,
    title:
      "Businesses Need a Digital Strategy Framework to Scale Generative AI",
  },
];

const ThoughtLeadership: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.heading}>Thought Leadership</div>
      <div className={classes.cardsWrapper}>
        {data.map((card, index) => (
          <div key={index} className={classes.card}>
            <div className={classes.imageWrapper}>
              <img
                src={card.imageUrl}
                alt={card.title}
                className={classes.image}
              />
            </div>
            <div className={classes.title}>{card.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThoughtLeadership;
