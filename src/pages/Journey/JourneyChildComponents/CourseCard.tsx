import C1 from "../../../assets/C1.png";
import C2 from "../../../assets/C2.png";
import C3 from "../../../assets/C3.png";
import C4 from "../../../assets/C4.png";
import C5 from "../../../assets/C5.png";
import C6 from "../../../assets/C6.png";
import C7 from "../../../assets/C7.png";
import C8 from "../../../assets/c8.png";
import C9 from "../../../assets/C9.png";
import C10 from "../../../assets/c10.png";
import C11 from "../../../assets/c11.png";
import C12 from "../../../assets/c12.png";
import C13 from "../../../assets/c13.png";
import C14 from "../../../assets/C14.png";
import C15 from "../../../assets/c15.png";
import C16 from "../../../assets/C16.png";
import C17 from "../../../assets/C17.png";
import C18 from "../../../assets/C18.png";
import C19 from "../../../assets/C19.png";
import C20 from "../../../assets/C20.png";
import C21 from "../../../assets/C21.png";
import C22 from "../../../assets/C22.png";
import C23 from "../../../assets/C23.png";
import C24 from "../../../assets/C24.png";
import C25 from "../../../assets/C25.png";
import C26 from "../../../assets/C26.png";
import C27 from "../../../assets/C27.png";
import C28 from "../../../assets/C28.png";
import C29 from "../../../assets/C29.png";
import C30 from "../../../assets/C30.png";
import C31 from "../../../assets/C31.png";
import C32 from "../../../assets/C32.png";
import C33 from "../../../assets/C33.png";
import C34 from "../../../assets/C34.png";
import C35 from "../../../assets/C35.png";
import C36 from "../../../assets/C36.png";
import C37 from "../../../assets/C37.png";
import C38 from "../../../assets/C38.png";
import C39 from "../../../assets/C39.png";
import C40 from "../../../assets/C40.png";
import C41 from "../../../assets/C41.png";
import C42 from "../../../assets/C42.png";
import C43 from "../../../assets/C43.png";
import C44 from "../../../assets/C44.png";
import C45 from "../../../assets/C45.png";
import C46 from "../../../assets/C46.png";

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
    "@media (max-width: 640px)": {
      fontSize: "2rem",
    },
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
    borderRadius: "12px",
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
    objectFit: "contain",
    display: "block",
    backgroundColor: "white",
  },
  textSection: {
    flex: 1,
    color: "white",
  },
  cardTitle: {
    fontSize: "1.2rem",
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
  links?: { label: string; url: string }[];
  image?: string; // new optional image
}

const CourseCard: React.FC<{ card: CardData }> = ({ card }) => {
  const classes = useStyles();

  return (
    <div className={classes.card}>
      <div className={classes.cardContent}>
        <div className={classes.cardLayout}>
          <div className={classes.imageSection}>
            <img
              src={
                card.image ||
                "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=300&h=200&fit=crop&auto=format"
              }
              alt={card.title}
              className={classes.brainImage}
            />
          </div>
          <div className={classes.textSection}>
            <h3 className={classes.cardTitle}>{card.title}</h3>
            <p className={classes.cardSubtitle}>{card.subtitle}</p>
          </div>
        </div>

        {card.links && card.links.length > 0 ? (
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            {card.links.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className={classes.readMoreButton}>{link.label}</button>
              </a>
            ))}
          </div>
        ) : (
          <button className={classes.readMoreButton}>Enroll</button>
        )}
      </div>
    </div>
  );
};

const CoursesPage: React.FC = () => {
  const classes = useStyles();
  const cardData: CardData[] = [
    {
      id: 1,
      title: "Generative AI Fundamentals",
      subtitle: "6 facts on Generative AI every professional should know",
      image: `${C1}`,
    },
    {
      id: 2,
      title: "Prompt Engineering",
      subtitle: "Engineer precise prompts, drive accurate AI results",
      image: `${C2}`,
    },
    {
      id: 3,
      title: "Bias and Hallucination",
      subtitle: "Understand the business impact, types, and causes",
      image: `${C3}`,
    },
    {
      id: 4,
      title: "Key Technical Concepts of AI, ML , and GenAI",
      subtitle: "Mastering the core technologies driving AI",
      image: `${C4}`,
    },
    {
      id: 5,
      title: "Natural Language Processing (NLP) Architectures",
      subtitle: "Explore the structures that power natural language processing",
      image: `${C5}`,
    },
    {
      id: 6,
      title: "LLM Model selection",
      subtitle: "A strong prerequisite for Scaling GenAI and AI Agents",
      image: `${C6}`,
    },
    {
      id: 7,
      title: "Fine-Tuning Techniques",
      subtitle: "Optimizing AI models for precision and performance",
      image: `${C7}`,
    },
    {
      id: 8,
      title: "Retrieval-Augmented Generation",
      subtitle:
        "Technology that drives conversational AI chatbots , the topmost GenAI use case",
      image: `${C8}`,
    },
    {
      id: 9,
      title: "Business Essentials of Generative AI",
      subtitle: "Harness GenAI for business growth",
      image: `${C9}`,
    },
    {
      id: 10,
      title: "AI/GenAI Transformation Strategy",
      subtitle:
        "An instructor-led course based on end-to end Digital Strategy Framework",
      image: `${C10}`,
    },
    {
      id: 11,
      title: "Responsible AI Framework (RAI)",
      subtitle: "Explore the three pillars: Legal, Ethics, and Governance",
      image: `${C11}`,
    },
    {
      id: 12,
      title: "GenAI Multi-Industry Impact",
      subtitle: "Explore the industry specific use cases and solutions",
      image: `${C12}`,
    },
    {
      id: 13,
      title: "Essential Competencies of AI/GenAI Leaders",
      subtitle:
        "An instructor-led course focusing on cultivating the four essential competencies of a digital leader",
      image: `${C13}`,
    },
    {
      id: 14,
      title: "IT, Digital Transformation, and AI",
      subtitle: "Understanding the correlation between them",
      image: `${C14}`,
    },
    {
      id: 15,
      title: "AI Audit Framework",
      subtitle: "Essential guidelines for conducting an AI Audit",
      image: `${C15}`,
    },
    {
      id: 16,
      title: "Conducting an AI Audit",
      subtitle:
        "Locating current or potential AI in your firm and assessing it.",
      image: `${C16}`,
    },
    {
      id: 17,
      title: "EU AI Act",
      subtitle: "Understanding the world’s first comprehensive AI regulation.",
      image: `${C17}`,
    },
    {
      id: 18,
      title: "Key Technical concepts of AI Agents",
      subtitle:
        "Important concepts of AI Agents that every technical SME should know",
      image: `${C18}`,
    },
    {
      id: 19,
      title: "Core Capabilities of AI Agents",
      subtitle: "The 5 capabilities that differentiate an AI Agent from a bot",
      image: `${C19}`,
    },
    {
      id: 20,
      title: "Agents Architectures and Frameworks",
      subtitle:
        "Highlighting the popular Agentic AI architectures and their limitations",
      image: `${C20}`,
    },
    {
      id: 21,
      title: "Business Essentials of AI Agents",
      subtitle:
        "Includes Agentic AI readiness, observability, evaluation, use cases, and workflows",
      image: `${C21}`,
    },
    {
      id: 22,
      title: "Building AI Agents",
      subtitle:
        "Step-by-step hands-on lab for developing AI Agent capabilities",
      image: `${C22}`,
    },
    {
      id: 23,
      title: "Data and AI Fundamentals",
      subtitle: "Analyzing how data is the fuel to driving AI",
      image: `${C23}`,
    },
    {
      id: 24,
      title: "Data Annotation",
      subtitle: "Uncovering one of the most critical AI/GenAI roles",
      image: `${C24}`,
    },
    {
      id: 25,
      title: "Inference Evaluation",
      subtitle:
        "Detecting, measuring, mitigating hallucinations to enhance output quality",
      image: `${C25}`,
    },
    {
      id: 26,
      title: "Data and Fine-tuning Lab",
      subtitle:
        "Hands-on experimentation with annotation, fine-tuning, and inference evaluation",
      image: `${C26}`,
    },
    {
      id: 27,
      title: "Python Programming Basics",
      subtitle: "No prior knowledge or experience in software coding is needed",
      image: `${C27}`,
      links: [
        {
          label: "Coursera Prep Course",
          url: "https://www.coursera.org/learn/practical-python-for-ai-coding--preparation-for-coding",
        },
        {
          label: "Coursera Beginners Course",
          url: "https://www.coursera.org/learn/ai-python-for-beginners",
        },
      ],
    },
    {
      id: 28,
      title: "Practical Machine Learning",
      subtitle: "Building and applying prediction functions",
      image: `${C28}`,
      links: [
        {
          label: "Coursera",
          url: "https://www.coursera.org/learn/practical-machine-learning?utm_source=chatgpt.com",
        },
      ],
    },
    {
      id: 29,
      title: "Computer Vision",
      subtitle:
        "Practical exercises with image classification and object detection tools",
      image: `${C29}`,
      links: [
        {
          label: "Coursera",
          url: "https://www.coursera.org/learn/introduction-computer-vision-watson-opencv?utm_source=chatgpt.com",
        },
        {
          label: "OpenCV University",
          url: "https://opencv.org/university/free-opencv-course/?utm_source=opcvu&utm_medium=menu&utm_campaign=obc",
        },
        {
          label: "Hugging Face",
          url: "https://huggingface.co/learn/computer-vision-course/en/unit0/welcome/welcome?utm_source=chatgpt.com",
        },
      ],
    },
    {
      id: 30,
      title: "GenAI Apps Development Lab",
      subtitle: "Step-by-step hands-on lab for developing GenAI capabilities",
      image: `${C30}`,
    },
    {
      id: 31,
      title: "UI/UX Fundamentals",
      subtitle:
        "Learn basic concepts of UX Design, UX Writing, and UX Research",
      image: `${C31}`,
      links: [
        { label: "UXcel", url: "https://app.uxcel.com/courses?discipline=UX" },
      ],
    },
    {
      id: 32,
      title: "UX and AI",
      subtitle: "Explore the fundamentals of how AI impacts UX",
      image: `${C32}`,
    },
    {
      id: 33,
      title: "Google PAIR",
      subtitle:
        "Set of methods, best practices and examples for designing with AI",
      image: `${C33}`,
      links: [
        { label: "Guidebook", url: "https://pair.withgoogle.com/guidebook-v2" },
      ],
    },
    {
      id: 34,
      title: "Implementing VITA AI tools for UX",
      subtitle:
        "Proven hacks for video, image, text, and audio (VITA) AI tools",
      image: `${C34}`,
    },
    {
      id: 35,
      title: "Creativity Overhaul",
      subtitle: "Redefining your creativity with relevant AI tools",
      image: `${C35}`,
    },
    {
      id: 36,
      title: "Generative AI Project Management",
      subtitle: "Explore types of GenAI projects, MLOps, LLMOps, and AgentOps",
      image: `${C36}`,
    },
    {
      id: 37,
      title: "AI-enabled Security Fundamentals",
      subtitle: "Understand how AI can amplify and combat security threats",
      image: `${C37}`,
    },
    {
      id: 38,
      title: "LLM Adversarial Attacks",
      subtitle:
        "Covers a comprehensive list of LLM attacks and their mitigation",
      image: `${C38}`,
    },
    {
      id: 39,
      title: "Data Security",
      subtitle:
        "A part of 7 courses series on Cybersecurity Operations Fundamentals Specialization by Cisco",
      image: `${C39}`,
      links: [
        {
          label: "Coursera",
          url: "https://www.coursera.org/learn/data-security",
        },
      ],
    },
    {
      id: 40,
      title: "Cloud Security",
      subtitle:
        "Vendor-specific, vendor neutral, and relevant cloud security solutions",
      image: `${C40}`,
      // 🚨 will fill with 9 buttons in the next step
    },
    {
      id: 41,
      title: "Network Security",
      subtitle: "Explore the popular network security certifications",
      image: `${C41}`,
      // 🚨 will fill with 4 buttons
    },
    {
      id: 42,
      title: "NVIDIA Deep Learning Institute",
      subtitle:
        "Coaching on selecting learning path and certification offered by Digiculum",
      image: `${C42}`,
      links: [
        {
          label: "NVIDIA Training",
          url: "https://www.nvidia.com/en-us/training/",
        },
      ],
    },
    {
      id: 43,
      title: "HPE AI Training and Certification",
      subtitle:
        "Coaching on selecting learning path and certification offered by Digiculum",
      image: `${C43}`,
      links: [
        {
          label: "HPE Education",
          url: "https://education.hpe.com/ww/en/training/portfolio/artificial-intelligence.html",
        },
      ],
    },
    {
      id: 44,
      title: "Dell Technologies AI Server & Infrastructure Foundations",
      subtitle: "In partnership with NVIDIA",
      image: `${C44}`,
      links: [
        {
          label: "Dell Learning",
          url: "https://learning.dell.com/content/dell/en-us/home/certification-overview/available-exams/ai-server---infrastructure-foundations-with-nvidia.html",
        },
      ],
    },
    {
      id: 45,
      title: "Cloud Hyperscaler Solutions",
      subtitle: "Explore the solutions by AWS, Azure, and Google Cloud",
      image: `${C45}`,
      links: [
        {
          label: "AWS Docs",
          url: "https://docs.aws.amazon.com/dlami/latest/devguide/what-is-dlami.html",
        },
        {
          label: "Azure Docs",
          url: "https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/scenarios/ai/",
        },
        {
          label: "Google Cloud Docs",
          url: "https://cloud.google.com/gpu#documentation",
        },
      ],
    },
    {
      id: 46,
      title: "Cisco Datacenter certifications",
      subtitle: "Understanding the fundamentals of datacenter",
      image: `${C46}`,
      links: [
        {
          label: "Cisco Training",
          url: "https://www.cisco.com/site/us/en/learn/training-certifications/certifications/datacenter/index.html",
        },
      ],
    },
  ];

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
