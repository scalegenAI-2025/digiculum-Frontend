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
  links?: { label: string; url: string }[];
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
        <button className={classes.readMoreButton}>Enroll</button>
      </div>
    </div>
  );
};

const CoursesPage: React.FC = () => {
  const classes = useStyles();

  // Generate 56 cards with varied content
  const cardData: CardData[] = [
    {
      id: 1,
      title: "Generative AI Fundamentals",
      subtitle: "6 facts on Generative AI every professional should know",
    },
    {
      id: 2,
      title: "Prompt Engineering",
      subtitle: "Engineer precise prompts, drive accurate AI results",
    },
    {
      id: 3,
      title: "Bias and Hallucination",
      subtitle: "Understand the business impact, types, and causes",
    },
    {
      id: 4,
      title: "Key Technical Concepts of AI, ML , and GenAI",
      subtitle: "Mastering the core technologies driving AI",
    },
    {
      id: 5,
      title: "Natural Language Processing (NLP) Architectures",
      subtitle: "Explore the structures that power natural language processing",
    },
    {
      id: 6,
      title: "LLM Model selection",
      subtitle: "A strong prerequisite for Scaling GenAI and AI Agents",
    },
    {
      id: 7,
      title: "Fine-Tuning Techniques",
      subtitle: "Optimizing AI models for precision and performance",
    },
    {
      id: 8,
      title: "Retrieval-Augmented Generation",
      subtitle:
        "Technology that drives conversational AI chatbots , the topmost GenAI use case",
    },
    {
      id: 9,
      title: "Business Essentials of Generative AI",
      subtitle: "Harness GenAI for business growth",
    },
    {
      id: 10,
      title: "AI/GenAI Transformation Strategy",
      subtitle:
        "An instructor-led course based on end-to end Digital Strategy Framework",
    },
    {
      id: 11,
      title: "Responsible AI Framework (RAI)",
      subtitle: "Explore the three pillars: Legal, Ethics, and Governance",
    },
    {
      id: 12,
      title: "GenAI Multi-Industry Impact",
      subtitle: "Explore the industry specific use cases and solutions",
    },
    {
      id: 13,
      title: "Essential Competencies of AI/GenAI Leaders",
      subtitle:
        "An instructor-led course focusing on cultivating the four essential competencies of a digital leader",
    },
    {
      id: 14,
      title: "IT, Digital Transformation, and AI",
      subtitle: "Understanding the correlation between them",
    },
    {
      id: 15,
      title: "AI Audit Framework",
      subtitle: "Essential guidelines for conducting an AI Audit",
    },
    {
      id: 16,
      title: "Conducting an AI Audit",
      subtitle:
        "Locating current or potential AI in your firm and assessing it.",
    },
    {
      id: 17,
      title: "EU AI Act",
      subtitle: "Understanding the world’s first comprehensive AI regulation.",
    },
    {
      id: 18,
      title: "Key Technical concepts of AI Agents",
      subtitle:
        "Important concepts of AI Agents that every technical SME should know",
    },
    {
      id: 19,
      title: "Core Capabilities of AI Agents",
      subtitle: "The 5 capabilities that differentiate an AI Agent from a bot",
    },
    {
      id: 20,
      title: "Agents Architectures and Frameworks",
      subtitle:
        "Highlighting the popular Agentic AI architectures and their limitations",
    },
    {
      id: 21,
      title: "Business Essentials of AI Agents",
      subtitle:
        "Includes Agentic AI readiness, observability, evaluation, use cases, and workflows",
    },
    {
      id: 22,
      title: "Building AI Agents",
      subtitle:
        "Step-by-step hands-on lab for developing AI Agent capabilities",
    },
    {
      id: 23,
      title: "Data and AI Fundamentals",
      subtitle: "Analyzing how data is the fuel to driving AI",
    },
    {
      id: 24,
      title: "Data Annotation",
      subtitle: "Uncovering one of the most critical AI/GenAI roles",
    },
    {
      id: 25,
      title: "Inference Evaluation",
      subtitle:
        "Detecting, measuring, mitigating hallucinations to enhance output quality",
    },
    {
      id: 26,
      title: "Data and Fine-tuning Lab",
      subtitle:
        "Hands-on experimentation with annotation, fine-tuning, and inference evaluation",
    },
    {
      id: 27,
      title: "Python Programming Basics",
      subtitle: "No prior knowledge or experience in software coding is needed",
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
    },
    {
      id: 31,
      title: "UI/UX Fundamentals",
      subtitle:
        "Learn basic concepts of UX Design, UX Writing, and UX Research",
      links: [
        { label: "UXcel", url: "https://app.uxcel.com/courses?discipline=UX" },
      ],
    },
    {
      id: 32,
      title: "UX and AI",
      subtitle: "Explore the fundamentals of how AI impacts UX",
    },
    {
      id: 33,
      title: "Google PAIR",
      subtitle:
        "Set of methods, best practices and examples for designing with AI",
      links: [
        { label: "Guidebook", url: "https://pair.withgoogle.com/guidebook-v2" },
      ],
    },
    {
      id: 34,
      title: "Implementing VITA AI tools for UX",
      subtitle:
        "Proven hacks for video, image, text, and audio (VITA) AI tools",
    },
    {
      id: 35,
      title: "Creativity Overhaul",
      subtitle: "Redefining your creativity with relevant AI tools",
    },
    {
      id: 36,
      title: "Generative AI Project Management",
      subtitle: "Explore types of GenAI projects, MLOps, LLMOps, and AgentOps",
    },
    {
      id: 37,
      title: "AI-enabled Security Fundamentals",
      subtitle: "Understand how AI can amplify and combat security threats",
    },
    {
      id: 38,
      title: "LLM Adversarial Attacks",
      subtitle:
        "Covers a comprehensive list of LLM attacks and their mitigation",
    },
    {
      id: 39,
      title: "Data Security",
      subtitle:
        "A part of 7 courses series on Cybersecurity Operations Fundamentals Specialization by Cisco",
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
      // 🚨 will fill with 9 buttons in the next step
    },
    {
      id: 41,
      title: "Network Security",
      subtitle: "Explore the popular network security certifications",
      // 🚨 will fill with 4 buttons
    },
    {
      id: 42,
      title: "NVIDIA Deep Learning Institute",
      subtitle:
        "Coaching on selecting learning path and certification offered by Digiculum",
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
