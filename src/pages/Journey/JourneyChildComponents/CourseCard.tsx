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
import C17 from "../../../assets/c17.png";
import C18 from "../../../assets/C18.png";
import C19 from "../../../assets/c19.png";
import C20 from "../../../assets/C20.png";
import C21 from "../../../assets/C21.png";
import C22 from "../../../assets/C22.png";
import C23 from "../../../assets/C23.png";
import C24 from "../../../assets/C24.png";
import C25 from "../../../assets/c25.png";
//import C26 from "../../../assets/C26.png";
import C27 from "../../../assets/C27.png";
import C28 from "../../../assets/C28.png";
import C29 from "../../../assets/c29.png";
import C30 from "../../../assets/C30.png";
import C31 from "../../../assets/C31.png";
import C32 from "../../../assets/c32.png";
///import C33 from "../../../assets/c33.png";
//import C34 from "../../../assets/c34.png";
//import C35 from "../../../assets/C35.png";
import C36 from "../../../assets/c36.png";
import C37 from "../../../assets/c37.png";
import C38 from "../../../assets/C38.png";
import C39 from "../../../assets/C39.png";
import C40 from "../../../assets/C40.png";
import C41 from "../../../assets/C41.png";
//import C42 from "../../../assets/C42.png";
//import C43 from "../../../assets/C43.png";
//import C44 from "../../../assets/C44.png";
import C45 from "../../../assets/c45.png";
//import C46 from "../../../assets/C46.png";
import Infra_lab from "../../../assets/Infra_lab.png";
import AIInfra from "../../../assets/AI Infra.png";
import HPC from "../../../assets/HPC.png";
import sec from "../../../assets/sec.png";
//**** */
import AIBasics from "../../../assets/AI Basics.png";
import DT_tech from "../../../assets/DT_tech.png";
import everyday_tools from "../../../assets/everyday_tools.png";
import Funda from "../../../assets/Funda.png";
import Who_is from "../../../assets/Who_is.png";

import Creativity1 from "../../../assets/Creativity1.png";
import VITA_UX from "../../../assets/VITA_UX.png";
import UXnAI from "../../../assets/UXnAI.png";

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
      links: [
        {
          label: "Enroll",
          url: "https://reskill.digiculum.com/courses/generative_ai_fundamentals_amitprabhu-66c652b908d17d33be03c70f",
        },
      ],
    },
    {
      id: 2,
      title: "Prompt Engineering",
      subtitle: "Engineer precise prompts, drive accurate AI results",
      image: `${C2}`,
      links: [
        {
          label: "Enroll",
          url: "https://reskill.digiculum.com/courses/Prompt-Engineering-self-paced-online-course-amitprabhu-67d70eb6496c757ddfae3596",
        },
      ],
    },
    {
      id: 3,
      title: "Bias and Hallucination",
      subtitle: "Understand the business impact, types, and causes",
      image: `${C3}`,
      links: [
        {
          label: "Enroll",
          url: "https://reskill.digiculum.com/courses/Bias-and-Hallucination-67eac099addd4b156262d0b3",
        },
      ],
    },
    {
      id: 4,
      title: "Key Technical Concepts of AI, ML , and GenAI",
      subtitle: "Mastering the core technologies driving AI",
      image: `${C4}`,
      links: [
        {
          label: "Enroll",
          url: "https://reskill.digiculum.com/courses/Key-Technical-Concepts-of-AI-ML-and-GenAI-680c76a6acf10500435c73c1",
        },
      ],
    },
    {
      id: 5,
      title: "Natural Language Processing (NLP) Architectures",
      subtitle: "Explore the structures that power natural language processing",
      image: `${C5}`,
      links: [
        {
          label: "Enroll",
          url: "https://reskill.digiculum.com/courses/NLP-Architectures-amitprabhu-66c8487609618632efca7819",
        },
      ],
    },
    {
      id: 6,
      title: "LLM Model selection",
      subtitle: "A strong prerequisite for Scaling GenAI and AI Agents",
      image: `${C6}`,
      links: [
        {
          label: "Enroll",
          url: "https://reskill.digiculum.com/courses/Large-Language-Models-LLM-Selection-6835454eab402e04cdbe8b0d",
        },
      ],
    },
    {
      id: 7,
      title: "Fine-Tuning Techniques",
      subtitle: "Optimizing AI models for precision and performance",
      image: `${C7}`,
      links: [
        {
          label: "Enroll",
          url: "https://reskill.digiculum.com/courses/Fine-Tuning-Techniques-6818136c4e4cb332c4a52c60",
        },
      ],
    },
    {
      id: 8,
      title: "Retrieval-Augmented Generation",
      subtitle:
        "Technology that drives conversational AI chatbots , the topmost GenAI use case",
      image: `${C8}`,
      links: [
        {
          label: "Enroll",
          url: "https://reskill.digiculum.com/courses/Retrieval-Augmented-Generation-RAG-68380444ac137e437984141d",
        },
      ],
    },
    {
      id: 9,
      title: "Business Essentials of Generative AI",
      subtitle: "Harness GenAI for business growth",
      image: `${C9}`,
      links: [
        {
          label: "Enroll",
          url: "https://reskill.digiculum.com/courses/Business-Essentials-of-Generative-AI-6847e5f8ad129a62ea6931f4",
        },
      ],
    },
    {
      id: 10,
      title: "AI/GenAI Transformation Strategy",
      subtitle:
        "An instructor-led course based on end-to end Digital Strategy Framework",
      image: `${C10}`,
      links: [
        {
          label: "Enroll",
          url: "https://reskill.digiculum.com/courses/AIGenAI-Transformation-Strategy-68b53c97d5d42652b56409d4",
        },
      ],
    },
    {
      id: 11,
      title: "Responsible AI (RAI) Framework ",
      subtitle: "Explore the three pillars: Legal, Ethics, and Governance",
      image: `${C11}`,
      links: [
        {
          label: "Enroll",
          url: "https://reskill.digiculum.com/courses/Responsible-AI-RAI-Framework-685545364606544ee1e3b928",
        },
      ],
    },
    {
      id: 12,
      title: "GenAI Multi-Industry Impact",
      subtitle: "Explore the industry specific use cases and solutions",
      image: `${C12}`,
      links: [
        {
          label: "Enroll",
          url: "https://reskill.digiculum.com/courses/Generative-AI-Multi-Industry-Impact-68491397c3b9eb56fd8077b1",
        },
      ],
    },
    {
      id: 13,
      title: "Essential Competencies of AI/GenAI Leaders",
      subtitle:
        "An instructor-led course focusing on cultivating the four essential competencies of a digital leader",
      image: `${C13}`,
      links: [
        {
          label: "Enroll",
          url: "https://reskill.digiculum.com/courses/Essential-Competencies-for-AIGenAI-Leaders-677934d8ad9a9e545b5210b1",
        },
      ],
    },
    {
      id: 14,
      title: "IT, Digital Transformation, and AI",
      subtitle: "Understanding the correlation between them",
      image: `${C14}`,
      links: [
        {
          label: "Enroll",
          url: "https://reskill.digiculum.com/courses/IT-Digital-Transformation-and-AI-685540029666370d85b3a661",
        },
      ],
    },
    {
      id: 15,
      title: "AI Audit Framework",
      subtitle: "Essential guidelines for conducting an AI Audit",
      image: `${C15}`,
      links: [
        {
          label: "Enroll",
          url: "https://reskill.digiculum.com/courses/AI-Audit-Framework-68615ffa257df93f91f003ec",
        },
      ],
    },
    {
      id: 16,
      title: "Conducting an AI Audit",
      subtitle:
        "Locating current or potential AI in your firm and assessing it.",
      image: `${C16}`,
      links: [
        {
          label: "Enroll",
          url: "https://reskill.digiculum.com/courses/Conducting-an-AI-Audit-6861678705222e7e13582198",
        },
      ],
    },
    {
      id: 17,
      title: "EU AI Act",
      subtitle: "Understanding the world’s first comprehensive AI regulation.",
      image: `${C17}`,
      links: [
        {
          label: "Enroll",
          url: "https://reskill.digiculum.com/courses/EU-AI-Act-6855a16524d16135686d8fbc",
        },
      ],
    },
    {
      id: 18,
      title: "Key Technical concepts of AI Agents",
      subtitle:
        "Important concepts of AI Agents that every technical SME should know",
      image: `${C18}`,
      links: [
        {
          label: "Enroll",
          url: "https://reskill.digiculum.com/courses/Key-Technical-Concepts-of-AI-Agents-687de8f0a7198c4c13d3e650",
        },
      ],
    },
    {
      id: 19,
      title: "Core Capabilities of AI Agents",
      subtitle: "The 5 capabilities that differentiate an AI Agent from a bot",
      image: `${C19}`,
      links: [
        {
          label: "Enroll",
          url: "https://reskill.digiculum.com/courses/Core-Capabilities-of-AI-Agents-687e068a65008d7776ffdf42",
        },
      ],
    },
    {
      id: 20,
      title: "AI Agents Architectures and Frameworks",
      subtitle:
        "Highlighting the popular Agentic AI architectures and their limitations",
      image: `${C20}`,
      links: [
        {
          label: "Enroll",
          url: "https://reskill.digiculum.com/courses/AI-Agents-Architectures-and-Frameworks-687f89390735b77086acfebf",
        },
      ],
    },
    {
      id: 21,
      title: "Business Essentials of AI Agents",
      subtitle:
        "Includes Agentic AI readiness, observability, evaluation, use cases, and workflows",
      image: `${C21}`,
      links: [
        {
          label: "Enroll",
          url: "https://reskill.digiculum.com/courses/Business-Essentials-of-AI-Agents-687fa452deeb00464bb6a65f",
        },
      ],
    },
    {
      id: 22,
      title: "Building AI Agents",
      subtitle:
        "Step-by-step hands-on lab for developing AI Agent capabilities",
      image: `${C22}`,
      links: [
        {
          label: "Enroll",
          url: "https://reskill.digiculum.com/courses/Building-AI-Agents--68b53a32e36066036b6cf150",
        },
      ],
    },
    {
      id: 23,
      title: "Data and AI Fundamentals",
      subtitle: "Analyzing how data is the fuel to driving AI",
      image: `${C23}`,
      links: [
        {
          label: "Enroll",
          url: "https://reskill.digiculum.com/courses/Data-and-AI-Fundamentals-68b53e8ab6aa493fb8eec865",
        },
      ],
    },
    {
      id: 24,
      title: "Data Annotation",
      subtitle: "Uncovering one of the most critical AI/GenAI roles",
      image: `${C24}`,
      links: [
        {
          label: "Enroll",
          url: "https://reskill.digiculum.com/courses/Data-Annotation-68b4ddfc824cfb0c2ddc867a",
        },
      ],
    },
    {
      id: 25,
      title: "Inference Evaluation",
      subtitle:
        "Detecting, measuring, mitigating hallucinations to enhance output quality",
      image: `${C25}`,
      links: [
        {
          label: "Enroll",
          url: "https://reskill.digiculum.com/courses/Inference-Evaluation-68a3a1b60f3db50fe70a01fe",
        },
      ],
    },
    {
      id: 26,
      title: "Data and Fine-tuning Lab",
      subtitle:
        "Hands-on experimentation with annotation, fine-tuning, and inference evaluation",
      image: `${C27}`,
      links: [
        {
          label: "Enroll",
          url: "https://reskill.digiculum.com/courses/Data-and-Fine-tuning-Lab-68b54a75b6aa493fb8eecd84",
        },
      ],
    },
    {
      id: 27,
      title: "Python Programming Basics",
      subtitle: "No prior knowledge or experience in software coding is needed",
      image: `${C28}`,
      links: [
        {
          label: "Coursera",
          url: "https://www.coursera.org/learn/practical-python-for-ai-coding--preparation-for-coding",
        },
        {
          label: "DeepLearning",
          url: "https://www.coursera.org/learn/ai-python-for-beginners",
        },
      ],
    },
    {
      id: 28,
      title: "Practical Machine Learning",
      subtitle: "Building and applying prediction functions",
      image: `${C29}`,
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
      image: `${C30}`,
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
      image: `${C31}`,
      links: [
        {
          label: "Enroll",
          url: "https://reskill.digiculum.com/courses/GenAI-Apps-Development-Lab-68b55058c8bb53737ce92870",
        },
      ],
    },
    {
      id: 31,
      title: "UI/UX Fundamentals",
      subtitle:
        "Learn basic concepts of UX Design, UX Writing, and UX Research",
      image: `${C32}`,
      links: [
        { label: "UXcel", url: "https://app.uxcel.com/courses?discipline=UX" },
      ],
    },
    {
      id: 32,
      title: "UX and AI",
      subtitle: "Explore the fundamentals of how AI impacts UX",
      image: `${UXnAI}`,
      links: [
        {
          label: "Enroll",
          url: "https://reskill.digiculum.com/courses/UX-and-AI-68a1b55d491e104ef8987592",
        },
      ],
    },
    {
      id: 33,
      title: "Implementing VITA AI Tools for UX",
      subtitle:
        "Set of methods, best practices and examples for designing with AI",
      image: `${VITA_UX}`,
      links: [
        {
          label: "Enroll",
          url: "https://reskill.digiculum.com/courses/Implementing-VITA-AI-Tools-for-UX-68b5595612f99d67de97b5d7",
        },
      ],
    },
    {
      id: 34,
      title: "Creativity Overhaul Basics",
      subtitle:
        "Proven hacks for video, image, text, and audio (VITA) AI tools",
      image: `${Creativity1}`,
      links: [
        {
          label: "Enroll",
          url: "https://reskill.digiculum.com/courses/Creativity-Overhaul-Basics-68b55d735efb9d556692677e",
        },
      ],
    },
    {
      id: 35,
      title: "Creativity Overhaul Advanced",
      subtitle: "Redefining your creativity with relevant AI tools",
      image: `${Creativity1}`,
      links: [
        {
          label: "Enroll",
          url: "https://reskill.digiculum.com/courses/Creativity-Overhaul-Advanced-68b55e7912f99d67de97b7d4",
        },
      ],
    },
    {
      id: 36,
      title: "Generative AI Project Management",
      subtitle: "Explore types of GenAI projects, MLOps, LLMOps, and AgentOps",
      image: `${C36}`,
      links: [
        {
          label: "Enroll",
          url: "https://reskill.digiculum.com/courses/Generative-AI-Project-Management-68a33b220302ef7de2240935",
        },
      ],
    },
    {
      id: 37,
      title: "AI-enabled Security Fundamentals",
      subtitle: "Understand how AI can amplify and combat security threats",
      image: `${C37}`,
      links: [
        {
          label: "Enroll",
          url: "https://reskill.digiculum.com/courses/AI-Enabled-Security--68a0b3cbbf94974b911db958",
        },
      ],
    },
    {
      id: 38,
      title: "LLM Adversarial Attacks",
      subtitle:
        "Covers a comprehensive list of LLM attacks and their mitigation",
      image: `${C38}`,
      links: [
        {
          label: "Enroll",
          url: "https://reskill.digiculum.com/courses/LLM-Adversarial-Attacks-68a0bbe29e213062276464a3",
        },
      ],
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
      links: [
        {
          label: "Coursera",
          url: "https://www.coursera.org/learn/data-security",
        },
        {
          label: "Coursera",
          url: "https://www.coursera.org/learn/data-security",
        },
        {
          label: "Coursera",
          url: "https://www.coursera.org/learn/data-security",
        },
        {
          label: "Coursera",
          url: "https://www.coursera.org/learn/data-security",
        },
        {
          label: "Coursera",
          url: "https://www.coursera.org/learn/data-security",
        },
        {
          label: "Coursera",
          url: "https://www.coursera.org/learn/data-security",
        },
        {
          label: "Coursera",
          url: "https://www.coursera.org/learn/data-security",
        },
        {
          label: "Coursera",
          url: "https://www.coursera.org/learn/data-security",
        },
        {
          label: "Coursera",
          url: "https://www.coursera.org/learn/data-security",
        },
      ],
      // 🚨 will fill with 9 buttons
    },
    {
      id: 41,
      title: "Network Security",
      subtitle: "Explore the popular network security certifications",
      image: `${C41}`,
      // 🚨 will fill with 4 buttons
      links: [
        {
          label: "Coursera",
          url: "https://www.coursera.org/learn/introduction-to-cloud",
        },
        {
          label: "Coursera",
          url: "https://www.coursera.org/learn/introduction-to-cloud",
        },
        {
          label: "Coursera",
          url: "https://www.coursera.org/learn/introduction-to-cloud",
        },
        {
          label: "Coursera",
          url: "https://www.coursera.org/learn/introduction-to-cloud",
        },
      ],
    },
    {
      id: 42,
      title: "Introduction to cloud computing",
      subtitle:
        "Coaching on selecting learning path and certification offered by Digiculum",
      image: `${C45}`,
      links: [
        {
          label: "Coursera",
          url: "https://www.coursera.org/learn/introduction-to-cloud",
        },
      ],
    },
    {
      id: 43,
      title: "High Performance and Parallel Computing",
      subtitle:
        "Coaching on selecting learning path and certification offered by Digiculum",
      image: `${HPC}`,
      links: [
        {
          label: "Coursera",
          url: "https://www.coursera.org/learn/introduction-high-performance-computing",
        },
      ],
    },
    {
      id: 44,
      title: "AI Infrastructure and Operations Fundamentals",
      subtitle: "In partnership with NVIDIA",
      image: `${AIInfra}`,
      links: [
        {
          label: "Coursera",
          url: "https://www.coursera.org/learn/ai-infrastructure-operations-fundamentals",
        },
      ],
    },
    {
      id: 45,
      title: "Datacenter security management",
      subtitle: "Explore the solutions by AWS, Azure, and Google Cloud",
      image: `${sec}`,
      links: [
        {
          label: "Coursera",
          url: "https://www.coursera.org/learn/data-center-security-management-with-microsoft-system-center",
        },
      ],
    },
    {
      id: 46,
      title: "AI Infrastructure Building Lab",
      subtitle: "Understanding the fundamentals of datacenter",
      image: `${Infra_lab}`,
      links: [
        {
          label: "Enroll",
          url: "https://reskill.digiculum.com/courses/AI-Infrastructure-Building-Lab-68b5609b349e923e6cf960fe",
        },
      ],
    },

    //************ */

    {
      id: 47,
      title: "Fundamentals of IT and AI",
      subtitle: "Exploring the foundation and correlation",
      image: `${Funda}`,
      links: [
        {
          label: "Enroll",
          url: "https://reskill.digiculum.com/courses/Fundamentals-of-IT-and-AI-68ce7b66dd716708c70a9851",
        },
      ],
    },
    {
      id: 48,
      title: "AI Basics",
      subtitle: "AI fundamentals simplified",
      image: `${AIBasics}`,
      links: [
        {
          label: "Enroll",
          url: "https://reskill.digiculum.com/courses/AI-Basics-68ce7bdd9c1f5517a576af64",
        },
      ],
    },
    {
      id: 49,
      title: "Digital transformation Technologies",
      subtitle: "Digital transformation technologies made easy",
      image: `${DT_tech}`,
      links: [
        {
          label: "Enroll",
          url: "https://reskill.digiculum.com/courses/Digital-Transformation-Technologies-68ce7cad3425e77d71738c41",
        },
      ],
    },
    {
      id: 50,
      title: "Who is who in AI world",
      subtitle: "Meet the pioneers shaping AI",
      image: `${Who_is}`,
      links: [
        {
          label: "Enroll",
          url: "https://reskill.digiculum.com/courses/Who-is-Who-in-AI-World-68ce7d17ec572f61374fa0b3",
        },
      ],
    },
    {
      id: 51,
      title: "Everyday AI tools",
      subtitle: "Use practical AI to simplify daily tasks",
      image: `${everyday_tools}`,
      links: [
        {
          label: "Enroll",
          url: "https://reskill.digiculum.com/courses/Everyday-AI-Tools-68ce7d8d4f54af69249a80e4",
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
