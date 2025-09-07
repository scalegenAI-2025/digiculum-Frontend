// import React, { useState } from "react";
// import { createUseStyles } from "react-jss";
// import { FaPlus, FaMinus } from "react-icons/fa";

// const useStyles = createUseStyles({
//   outer: {
//     background: "#f0f0f0", // light grey outer background
//     minHeight: "100vh",
//     padding: "2rem",
//   },
//   container: {
//     width: "100%",
//     maxWidth: "1000px",
//     margin: "0 auto",
//     background: "#ffffff",
//     borderRadius: 10,
//     boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
//     overflow: "hidden",
//     padding: "2rem",
//     minHeight: "80vh", // 👈 makes it taller (80% of viewport height)
//   },

//   title: {
//     fontSize: "2rem",
//     textAlign: "center",
//     padding: "1.5rem",
//     backgroundColor: "#ffffff",
//     // borderBottom: "2px solid rgba(106, 13, 173, 0.2)",
//   },
//   faqItem: {
//     background: "#ffffff",
//     borderBottom: "1px solid #eee",
//   },
//   question: {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     padding: "1.5rem 1.5rem",
//     cursor: "pointer",
//     fontSize: "1rem",
//     fontWeight: "normal",
//     borderBottom: "2px solid rgba(106, 13, 173, 0.2)",
//     backgroundColor: "#ffffff",
//   },
//   answer: {
//     padding: "1rem 1.5rem",
//     fontSize: "0.95rem",
//     lineHeight: 1.5,
//     color: "purple",
//     //  backgroundColor: "#f9f9f9", // subtle contrast inside white box
//   },
// });

// type FAQItem = {
//   question: string;
//   answer: string;
// };
import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import { FaPlus, FaMinus } from "react-icons/fa";

const useStyles = createUseStyles({
  outer: {
    background: "#f0f0f0",
    minHeight: "100vh",
    padding: "2rem",
    "@media (max-width: 500px)": {
      padding: "1rem",

      minHeight: "70vh",
    },
  },
  container: {
    width: "100%",
    maxWidth: "1000px",
    margin: "0 auto",
    background: "#ffffff",
    borderRadius: 10,
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    overflow: "hidden",
    padding: "2rem",
    minHeight: "80vh",
    "@media (max-width: 500px)": {
      padding: "1rem",
      minHeight: "auto", // let height shrink naturally on mobile
      marginTop: "40PX",
    },
  },
  title: {
    fontSize: "2rem",
    textAlign: "center",
    padding: "1.5rem",
    backgroundColor: "#ffffff",
    "@media (max-width: 500px)": {
      fontSize: "1.4rem",
      padding: "1rem",
    },
  },
  faqItem: {
    background: "#ffffff",
    borderBottom: "1px solid #eee",
  },
  question: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1.5rem 1.5rem",
    cursor: "pointer",
    fontSize: "1rem",
    fontWeight: "normal",
    borderBottom: "2px solid rgba(106, 13, 173, 0.2)",
    backgroundColor: "#ffffff",
    "@media (max-width: 500px)": {
      padding: "1rem",
      fontSize: "0.75rem",
    },
  },
  answer: {
    padding: "1rem 1.5rem",
    fontSize: "0.95rem",
    lineHeight: 1.5,
    color: "#585858ff",
    "@media (max-width: 500px)": {
      padding: "0.75rem 1rem",
      fontSize: "0.9rem",
    },
  },
});

type FAQItem = {
  question: string;
  answer: string;
};
const faqData: FAQItem[] = [
  {
    question: "What is the difference between upskilling and reskilling?",
    answer:
      "Upskilling and reskilling are often used interchangeably. Although both imply learning new skills, they have different meanings. In upskilling, you learn a new skill within your current role. The sole purpose is to upgrade your skillsets and move vertically to a new skill level. After upskilling, you stay in the same role. In reskilling, you learn a new skill outside your current role. The sole purpose is upgrade your skillsets to move horizontally or diagonally downward to the beginner level of the new skill. After reskilling, you can either stay in the same role or move to a new role.",
  },
  {
    question: "What is AI/GenAI Reskilling?",
    answer:
      "In AI/GenAI Reskilling, you learn a new AI/GenAI skill outside your current non-AI/GenAI role. The sole purpose is upgrade your skillsets. You move horizontally or diagonally downward to the beginner level of AI/GenAI role. Normally, the motivation behind reskilling is to stay relevant in the current role that has undergone modifications with AI/GenAI. Another, motivation behind reskilling is to explore or move to an altogether new AI/GenAI role. ",
  },
  {
    question: "Can one reskill directly to higher skill levels of AI/GenAI?",
    answer:
      "No. One can only reskill to the beginner level of AI/GenAI skill. Since AI/GenAI is the new technology, one has to develop the beginner skills to move to higher skills level such as intermediate or advanced. ",
  },
  {
    question:
      "I am already in AI/GenAI role. If I learn a new AI/GenAI skill, is it reskilling?",
    answer: "No. It is upskilling. ",
  },
  {
    question: "What is the difference between role, job, competence and skill?",
    answer:
      "Skill refers to specific abilities or expertise of an individual. Competence refers to the knowledge, ability, and experience needed to effectively apply skills in various contexts.Job implies specific competencies within an organization.Role implies broader competencies relevant to a career at an industry levelOne or more skills make up competence.Job or role comprises one or more competencies.For example, let us consider the role software developer. It is defined at a broad industry level. In a small company A, it could be defined as a job, say full stack developer, responsible for developing both front and back end. In a small company B, there could 2 separate jobs: front end developer and backend developer. Both come under the umbrella of software development.Skills required for a software developer could be programming languages such as java, python, angular, react etc. However, the competence requirements for java skill differs for different project. Project A might need competence A with advanced java skill with 10+ years experience and beginner python skill with 3 years experience.  Whereas project B might need competence A with with intermediate python skill with minimum 5 years experience.",
  },
  {
    question: "How does AI impact jobs?",
    answer:
      "AI will impact jobs in 2 ways: Eliminate current roles Create new roles Creation of new roles can be of 2 types: Modify current rolesOriginate new roles",
  },
  {
    question:
      "What are different learning journeys? What does Digiculum currently offer?",
    answer:
      "What are different learning journeys? What does Digiculum currently offer? There are four possible learning journeys in context of AI/GenAI:Upskilling within current role Reskilling from AI/GenAI role to non-AI/GenAI role Upskilling within AI/GenAI role Reskilling from current non-AI/GenAI role to AI/GenAI role Digiculum specializes in option 4. Reskilling from current non-AI/GenAI role to AI/GenAI role",
  },
];

// const FAQ: React.FC = () => {
//   const classes = useStyles();
//   const [openIndex, setOpenIndex] = useState<number | null>(null);

//   const toggleAnswer = (index: number) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <div className={classes.outer}>
//       <div className={classes.container}>
//         <h1 className={classes.title}>Frequently asked questions</h1>
//         {faqData.map((item, index) => (
//           <div key={index} className={classes.faqItem}>
//             <div
//               className={classes.question}
//               onClick={() => toggleAnswer(index)}
//             >
//               <span>{item.question}</span>
//               {openIndex === index ? <FaMinus /> : <FaPlus />}
//             </div>
//             {openIndex === index && (
//               <div className={classes.answer}>{item.answer}</div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FAQ;

const FAQ: React.FC = () => {
  const classes = useStyles();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={classes.outer}>
      <div className={classes.container}>
        <h1 className={classes.title}>Frequently Asked Questions</h1>
        {faqData.map((item, index) => (
          <div key={index} className={classes.faqItem}>
            <div
              className={classes.question}
              onClick={() => toggleAnswer(index)}
            >
              <span>{item.question}</span>
              {openIndex === index ? <FaMinus /> : <FaPlus />}
            </div>
            {openIndex === index && (
              <div className={classes.answer}>{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
