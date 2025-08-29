import React from "react";
import { createUseStyles } from "react-jss";

interface Track {
  id: number;
  title: string;
  description: string;
}

const tracks: Track[] = [
  {
    id: 1,
    title: "Foundational Track",
    description:
      "For professionals/non-prof essionals from non-IT and non-technical aspiring to develop AI knowledge from scratch.",
  },
  {
    id: 2,
    title: "Technical Track",
    description:
      "For individuals with a technical background, desiring to delve deeper into the workings of generative AI.",
  },
  {
    id: 3,
    title: "Leadership Track",
    description:
      "For leaders at all levels (L1 to L4) empowered to decide, invest, influence, and act.",
  },
  {
    id: 4,
    title: "Compliance Track",
    description:
      "For legal, compliance, and risk management professionals focusing on the three pillars of Responsible AI framework: legal, ethics, and governance.",
  },
  {
    id: 5,
    title: "Agents Track",
    description:
      "For the SaaS 2.0 futurists determined to take generative AI to the next level through development and deployment of autonomous AI agents and their intelligent workflows.",
  },
  {
    id: 6,
    title: "Data",
    description:
      "For data enthusiasts eager to the master annotation, fine-tuning, and inference evaluation.",
  },
  {
    id: 7,
    title: "Developers",
    description:
      "For python missionaries set to build AI for the future leveraging APIs, SDKs, frameworks, and open-source communities",
  },
  {
    id: 8,
    title: "Creative",
    description:
      "For artists and designers ready to explore, experiment, and reinvent their craft by harnessing the power of AI.",
  },
  {
    id: 9,
    title: "Transformation",
    description:
      "For project and program managers, strategists, and change leaders driving enterprise-wide adoption and integration of AI/GenAI solutions.",
  },
  {
    id: 10,
    title: "Security",
    description:
      "For cybersecurity professionals dedicated to ensuring AI systems remain safe, resilient, and continuously monitored against evolving threats.",
  },
  {
    id: 11,
    title: "Infrastructure",
    description:
      "For individuals hands-on with GPUs, chips, datacenters, and cables, building the compute, connectivity, and cloud for your AI",
  },
];

const useStyles = createUseStyles({
  container: {
    minHeight: "100vh",
    backgroundColor: "#ffffff",
    padding: "40px 20px",
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
    overflowX: "hidden",
  },
  title: {
    textAlign: "center",
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "50px",
    letterSpacing: "1px",
  },
  cardsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "30px",
    maxWidth: "1200px",

    //margin: "0 auto",
    // padding: "0 20px",
  },

  card: {
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    padding: "30px",
    boxShadow: "0 8px 25px rgba(0, 0, 0, 0.15)",
    transition: "all 0.3s ease",
    cursor: "pointer",
    border: "1px solid #f0f0f0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    minHeight: "280px",
    "&:hover": {
      transform: "translateY(-8px)",
      boxShadow: "0 15px 40px rgba(0, 0, 0, 0.25)",
      backgroundColor: "#f8f9fa",
      borderColor: "#e0e0e0",
    },
  },
  cardNumber: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    backgroundColor: "#e9ecef",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.2rem",
    fontWeight: "bold",
    color: "#495057",
    marginBottom: "20px",
    transition: "all 0.3s ease",
  },
  cardTitle: {
    fontSize: "1.3rem",
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: "15px",
    lineHeight: "1.4",
  },
  cardDescription: {
    fontSize: "0.95rem",
    color: "#6c757d",
    lineHeight: "1.6",
    marginBottom: "25px",
    flex: 1,
  },
  moreInfoButton: {
    backgroundColor: "#ffc107",
    color: "#212529",
    border: "none",
    borderRadius: "6px",
    padding: "10px 20px",
    fontSize: "0.9rem",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease",

    // Center horizontally
    display: "block",
    margin: "40px auto 0", // 40px top spacing, auto centers horizontally

    "&:hover": {
      backgroundColor: "#ffb300",
      transform: "translateY(-2px)",
      boxShadow: "0 4px 12px rgba(255, 193, 7, 0.4)",
    },
  },

  "@media (max-width: 992px)": {
    cardsGrid: {
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: "20px",
    },
  },
  "@media (max-width: 768px)": {
    cardsGrid: {
      gridTemplateColumns: "1fr",
      gap: "20px",
    },
    title: {
      fontSize: "2rem",
    },
    card: {
      padding: "25px",
      minHeight: "250px",
    },
  },
});

const ReskillingTracks: React.FC = () => {
  const classes = useStyles();

  // const handleMoreInfo = (trackId: number) => {
  //   console.log(`More info clicked for track ${trackId}`);
  //   // Add your navigation or modal logic here
  // };

  return (
    <>
      <div className={classes.container}>
        <h1 className={classes.title}>Reskilling Tracks</h1>
        <div className={classes.cardsGrid}>
          {tracks.map((track) => (
            <div key={track.id} className={classes.card}>
              <div className={classes.cardNumber}>{track.id}</div>
              <h3 className={classes.cardTitle}>{track.title}</h3>
              <p className={classes.cardDescription}>{track.description}</p>
            </div>
          ))}
        </div>
        <button
          className={classes.moreInfoButton}
          //  onClick={() => handleMoreInfo(track.id)}
        >
          More Info
        </button>
      </div>
    </>
  );
};

export default ReskillingTracks;
