import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  outerContainer: {
    padding: "50px",
    "@media (max-width: 600px)": {
      padding: "2rem",
    },
  },
  container: {
    padding: "10px",
    backgroundColor: "#ffffff",
    maxWidth: "1400px",
    margin: "0 auto",
    lineHeight: 1.4,
  },
  title: {
    fontSize: "40px",
    fontWeight: "bold",
    color: "#000000",
    marginBottom: "10px",
    marginTop: 0,
    "@media (max-width: 600px)": {
      fontSize: "40px",
      textAlign: "center", // centers text inside the element
      margin: "0 auto 10px", // keeps block element centered if it has a set width
    },
  },
  subtitle: {
    fontSize: "18px",
    color: "#000",
    fontStyle: "italic",
    marginBottom: "40px",
    fontWeight: "normal",
  },
  contentGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px",
    marginTop: "30px",

    "@media (max-width: 1024px)": {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
    "@media (max-width: 600px)": {
      gridTemplateColumns: "1fr",
    },
  },
  topicSection: {
    marginBottom: "20px",
    padding: "15px",
    borderRadius: "8px",
    background: "#fafafa",
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",

    "&:hover": {
      transform: "translateY(-4px)",
      boxShadow: "0 6px 14px rgba(0,0,0,0.1)",
    },
  },
  topicTitle: {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#000",
    marginBottom: "8px",
    marginTop: 0,
    lineHeight: 1.3,
  },
  topicDescription: {
    fontSize: "14px",
    color: "#333333",
    lineHeight: 1.4,
    margin: 0,
  },
});

const TechnicalAIContentPage: React.FC = () => {
  const classes = useStyles();

  const topics = [
    {
      title: "Generative AI Primer",
      description: "A quick recap of the prerequisite videos on generative AI",
    },
    {
      title: "Prompt Engineering",
      description: "Learn the techniques of crafting effective prompts",
    },
    {
      title: "Evolution to Transformer based Architecture",
      description:
        "Evolution from probabilistic/statistical → neural networks → transformer based",
    },
    {
      title: "Key Technical Concepts",
      description:
        "Important concepts like learning algorithms, output evals, machine learning principles etc.",
    },
    {
      title: "Transformer based Architecture",
      description:
        "Strong focus on self-attention technique at the heart of transformer architectures",
    },
    {
      title: "Fine Tuning LLMs",
      description:
        "Introduction to different types of LLM Fine Tuning techniques",
    },
    {
      title: "LLM Model Selection",
      description:
        "Proven best practices of selecting an LLM model based on business requirements",
    },
    {
      title: "Generative AI Deployment",
      description:
        "Know more about different data pipelines, LLMOps, and MLOps",
    },
    {
      title: "Agent-driven Workflows",
      description:
        "Key capabilities of agents and how they can add efficiencies in processes and workflows",
    },
    {
      title: "Retrieval-Augmented Generation (RAG)",
      description: "Need for RAGs, RAG architectures, different RAG techniques",
    },
    {
      title: "Biases and Hallucinations",
      description:
        "Understand the causes, detection, and mitigation of biases and hallucinations",
    },
    {
      title: "GenAI 2.0",
      description:
        "Scaling generative AI, operational readiness framework, advanced LLMs, technical ecosystem",
    },
    {
      title: "Responsible AI for Techies",
      description:
        "How technical professionals can ensure compliance with Responsible AI policies",
    },
    {
      title: "Pilot Selection",
      description:
        "Proven guidelines and best practices for selecting a scalable GenAI pilot",
    },
  ];

  return (
    <div className={classes.outerContainer}>
      <div className={classes.container}>
        <h1 className={classes.title}>Content</h1>
        <p className={classes.subtitle}>
          Instructor-led, in-person/virtual, 18 hours, 1-2-1 coaching (1 hour
          free)
        </p>

        <div className={classes.contentGrid}>
          {topics.map((topic, index) => (
            <div key={index} className={classes.topicSection}>
              <h3 className={classes.topicTitle}>{topic.title}</h3>
              <p className={classes.topicDescription}>{topic.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechnicalAIContentPage;
