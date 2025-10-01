import React from "react";
import { createUseStyles } from "react-jss";
import { useNavigate } from "react-router-dom";

interface JobRole {
  id: string;
  title: string;
  description: string;
}

const jobRoles: JobRole[] = [
  {
    id: "01",
    title: "Fine Tuner",
    description: "Fine tunes LLM, engineer prompts, evaluates inference",
  },
  {
    id: "02",
    title: "Agent Architect",
    description: "Develops AI/GenAI apps and agents",
  },
  {
    id: "03",
    title: "VITA Creator",
    description: "Creates new video, image, text, audio (VITA) content",
  },
  {
    id: "04",
    title: "Data Annotator",
    description: "Develops quality datasets, evaluates inference",
  },
  {
    id: "05",
    title: "DAC Consultant",
    description: "Offers complete solution comprising data, AI, and cloud",
  },
  {
    id: "06",
    title: "Sales Advocate",
    description: "Expert in AI sales and legal",
  },
  {
    id: "07",
    title: "Compliance Guardian",
    description: "Ensures compliance with RAI framework and AI regulations",
  },
  {
    id: "08",
    title: "Domain Visionary",
    description: "Subject matter expert in a particular industry",
  },
  {
    id: "09",
    title: "Security Specialist",
    description:
      "Safeguard genAI models, assess vulnerabilities, prevent attacks",
  },
  {
    id: "10",
    title: "AI Executive",
    description: "Ensures AI sales, governance, and compliance",
  },
  {
    id: "11",
    title: "Program Overseer",
    description: "Manages the end-to-end AI/GenAI lifecycle",
  },
  {
    id: "12",
    title: "Infrastructure Catalyst",
    description:
      "Installation and configuration of compute: CPUs, TPUs, LPUs, VMs etc.",
  },
];

const useStyles = createUseStyles({
  container: {
    backgroundColor: "#2a2a2a",
    minHeight: "100vh",
    padding: "20px 20px",
    fontFamily: '"Inter", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    overflowX: "hidden",
  },
  title: {
    fontSize: "48px",
    fontWeight: "700",
    color: "#ffffff",
    marginBottom: "60px",
    textAlign: "center",
    "& span": {
      color: "#E547ED",
      "@media (max-width: 600px)": {
        paddingRight: "30px",
      },
    },
    maxWidth: "1400px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)", // exactly 4 columns
    gap: "20px",
    width: "100%",
    maxWidth: "1400px", // prevent overflow on large screens
    boxSizing: "border-box",
    "@media (max-width: 1024px)": {
      grid: {
        gridTemplateColumns: "repeat(2, 1fr)", // 2 per row on tablets
      },
    },
    "@media (max-width: 600px)": {
      grid: {
        gridTemplateColumns: "1fr", // 1 per row on phones
      },
    },
  },

  card: {
    backgroundColor: "#3a3a3a",
    borderRadius: "12px",
    padding: "20px",
    transition: "all 0.3s ease",
    border: "1px solid #4a4a4a",
    "&:hover": {
      backgroundColor: "#444444",
      transform: "translateY(-2px)",
      boxShadow: "0 8px 25px rgba(192, 132, 252, 0.15)",
    },
  },
  cardNumber: {
    fontSize: "24px",
    fontWeight: "700",
    color: "#E547ED",
    marginBottom: "12px",
  },
  cardTitle: {
    fontSize: "20px",
    fontWeight: "600",
    color: "#ffffff",
    marginBottom: "8px",
    lineHeight: "1.3",
  },
  cardDescription: {
    fontSize: "14px",
    color: "#cccccc",
    lineHeight: "1.5",
    opacity: "0.9",
  },
  "@media (max-width: 768px)": {
    title: {
      fontSize: "36px",
    },
    grid: {
      gridTemplateColumns: "1fr",
      gap: "20px",
    },
    card: {
      padding: "20px",
    },
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
});

const AIJobRoles: React.FC = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>
        12 New <span>AI/GenAI</span> Job Roles
      </h1>

      <div className={classes.grid}>
        {jobRoles.map((role) => (
          <div key={role.id} className={classes.card}>
            <div className={classes.cardNumber}>{role.id}.</div>
            <h3 className={classes.cardTitle}>{role.title}</h3>
            <p className={classes.cardDescription}>{role.description}</p>
          </div>
        ))}
      </div>
      <button
        className={classes.moreInfoButton}
        //  onClick={() => handleMoreInfo(track.id)}
        onClick={() => navigate("/tracks")}
      >
        More Info
      </button>
    </div>
  );
};

export default AIJobRoles;
