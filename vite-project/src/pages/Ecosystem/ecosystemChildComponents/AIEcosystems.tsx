import React from "react";
import { createUseStyles } from "react-jss";
import {
  BarChart3,
  Mic,
  Hand,
  Heart,
  Shield,
  Users,
  Beaker,
  FileText,
  Brain,
  MessageCircle,
  Network,
  Code2,
  Database,
  MousePointerClick,
  Search,
  AlertCircle,
  Cloud,
  Bot,
  BadgeHelp,
  Table,
  Share2,
  Blocks,
  Settings,
  Lock,
  Spline,
  Smartphone,
  LineChart,
  Workflow,
} from "lucide-react";

const useStyles = createUseStyles({
  container: {
    backgroundColor: "#f9fafb",
    minHeight: "100vh",
    padding: "48px 16px",
    "@media (min-width: 640px)": {
      padding: "48px 24px",
    },
    "@media (min-width: 1024px)": {
      padding: "48px 32px",
    },
  },
  maxWidth: {
    maxWidth: "1280px",
    margin: "0 auto",
  },
  sectionTitle: {
    fontSize: "48px",
    fontWeight: "bold",
    color: "#374151",
    marginBottom: "32px",
  },
  sectionDescription: {
    color: "#6b7280",
    fontSize: "18px",
    marginBottom: "48px",
    maxWidth: "896px",
    lineHeight: "1.6",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "32px",
    "@media (min-width: 768px)": {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
    "@media (min-width: 1024px)": {
      gridTemplateColumns: "repeat(4, 1fr)",
    },
  },
  card: {
    borderRadius: "8px",
    padding: "32px",
    textAlign: "center",
    transition: "all 0.3s ease",
    cursor: "pointer",
    "&:hover": {
      boxShadow:
        "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      transform: "translateY(-2px)",
    },
  },
  iconContainer: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "24px",
  },
  iconWrapper: {
    padding: "16px",
    backgroundColor: "#f3f4f6",
    borderRadius: "50%",
    transition: "background-color 0.3s ease",
    "$card:hover &": {
      backgroundColor: "#e5e7eb",
    },
  },
  icon: {
    width: "40px",
    height: "40px",

    color: "#111827",
  },
  cardTitle: {
    fontSize: "16px",
    fontWeight: "600",
    color: "#8b5cf6",
    lineHeight: "1.4",
  },
});

const AIEcosystems: React.FC = () => {
  const classes = useStyles();

  const ecosystemItems = [
    { icon: <BarChart3 className={classes.icon} />, title: "Scaling GenAI" },
    { icon: <Mic className={classes.icon} />, title: "LLM Fine Tuning" },
    { icon: <Hand className={classes.icon} />, title: "Prompt Engineering" },
    { icon: <Heart className={classes.icon} />, title: "Responsible AI (RAI)" },
    {
      icon: <Shield className={classes.icon} />,
      title: "EU AI Act, Risk Assessment",
    },
    { icon: <Users className={classes.icon} />, title: "Explainable AI (EAI)" },
    {
      icon: <Beaker className={classes.icon} />,
      title: "Pilots and Proof of Concept (PoC)",
    },
    { icon: <FileText className={classes.icon} />, title: "GenAI Use Cases" },
    { icon: <Brain className={classes.icon} />, title: "Deep Learning (DL)" },
    {
      icon: <MessageCircle className={classes.icon} />,
      title: "Natural Language Processing (NLP)",
    },
    { icon: <Network className={classes.icon} />, title: "Neural Networks" },
    { icon: <Code2 className={classes.icon} />, title: "AI/GenAI Tools" },
    { icon: <Database className={classes.icon} />, title: "Data Annotation" },
    {
      icon: <MousePointerClick className={classes.icon} />,
      title: "Selecting a Large Language Model (LLM)",
    },
    {
      icon: <Search className={classes.icon} />,
      title: "Evaluating Inference",
    },
    {
      icon: <AlertCircle className={classes.icon} />,
      title: "Hallucinations and Guardrails",
    },
    { icon: <Cloud className={classes.icon} />, title: "Cloud" },
    { icon: <Bot className={classes.icon} />, title: "Machine Learning (ML)" },
    { icon: <BadgeHelp className={classes.icon} />, title: "Metaverse·XR" },
    { icon: <Table className={classes.icon} />, title: "Data Science" },
    { icon: <Share2 className={classes.icon} />, title: "Internet of Things" },
    { icon: <Blocks className={classes.icon} />, title: "Blockchain" },
    { icon: <Settings className={classes.icon} />, title: "Automation" },
    { icon: <Lock className={classes.icon} />, title: "Security" },
    { icon: <Spline className={classes.icon} />, title: "UI/UX" },
    {
      icon: <Smartphone className={classes.icon} />,
      title: "Digital Marketing",
    },
    {
      icon: <LineChart className={classes.icon} />,
      title: "Business Operations",
    },
    {
      icon: <Workflow className={classes.icon} />,
      title: "Strategy & Leadership",
    },
  ];

  return (
    <div className={classes.container}>
      <div className={classes.maxWidth}>
        <h2 className={classes.sectionTitle}>AI Ecosystems</h2>
        <p className={classes.sectionDescription}>
          We offer ecosystems on the following AI topics, adjacent technologies,
          and business topics:
        </p>
        <div className={classes.grid}>
          {ecosystemItems.map((item, index) => (
            <div key={index} className={classes.card}>
              <div className={classes.iconContainer}>
                <div className={classes.iconWrapper}>{item.icon}</div>
              </div>
              <h3 className={classes.cardTitle}>{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AIEcosystems;
