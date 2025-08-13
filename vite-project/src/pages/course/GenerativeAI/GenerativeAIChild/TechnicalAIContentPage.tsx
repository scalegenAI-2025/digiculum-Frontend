import React from "react";

const TechnicalAIContentPage: React.FC = () => {
  const styles = {
    outerContainer: {
      padding: "50px",
    },
    container: {
      fontFamily: "Arial, sans-serif",
      padding: "10px",
      backgroundColor: "#ffffff",
      maxWidth: "1400px",
      margin: "0 auto",
      lineHeight: "1.4",
      //border: "2px solid #000000",
    },
    title: {
      fontSize: "48px",
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
    contentGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "5px",
      marginTop: "30px",
    },
    topicSection: {
      marginBottom: "30px",
    },
    topicTitle: {
      fontSize: "16px",
      fontWeight: "bold",
      color: "#00405a",
      marginBottom: "8px",
      marginTop: "0",
      lineHeight: "1.3",
    },
    topicDescription: {
      fontSize: "14px",
      color: "#333333",
      lineHeight: "1.4",
      margin: "0",
    },
  };

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
        "Evolution from probabilistic or statistical to neural networks based to transformer based",
    },
    {
      title: "Key Technical Concepts",
      description:
        "Important concepts like learning algorithms, output evals, machine learning principles etc.",
    },
    {
      title: "Transformer based Architecture",
      description:
        "Strong focus on self attention technique the heart of transformer based architecture",
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
      title: "Retrieval Augmentation Generation (RAG)",
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
    <div style={styles.outerContainer}>
      <div style={styles.container}>
        <h1 style={styles.title}>Content</h1>
        <p style={styles.subtitle}>
          Instructor-led, in-person/virtual, 30 hours, 1-2-1 coaching (2 hours
          free)
        </p>

        <div style={styles.contentGrid}>
          {topics.map((topic, index) => (
            <div key={index} style={styles.topicSection}>
              <h3 style={styles.topicTitle}>{topic.title}</h3>
              <p style={styles.topicDescription}>{topic.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechnicalAIContentPage;
