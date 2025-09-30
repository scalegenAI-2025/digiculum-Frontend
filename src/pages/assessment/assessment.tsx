// /* eslint-disable @typescript-eslint/no-unused-vars */
// "use client";
// import { useContext, useState } from "react";
// import { createUseStyles } from "react-jss";
// import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../../context/AuthContext";

// type Option = {
//   value: string;
//   label: string;
//   disabled?: boolean;
//   requireText?: boolean;
// };

// type Question = {
//   id: string;
//   text: string;
//   options?: Option[];
// };

// const useStyles = createUseStyles({
//   container: {
//     maxWidth: 800,
//     margin: "2rem auto",
//     padding: "1.5rem",
//     background: "#fff",
//     borderRadius: "16px",
//     boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
//     fontFamily: "sans-serif",
//   },
//   title: { fontSize: "1.25rem", fontWeight: 700, marginBottom: "1rem" },
//   questionText: { marginBottom: "1rem", fontSize: "1rem", lineHeight: 1.5 },
//   option: {
//     display: "flex",
//     alignItems: "flex-start",
//     gap: "0.5rem",
//     marginBottom: "0.75rem",
//     cursor: "pointer",
//     "& input[type='radio']": { marginTop: "0.25rem" },
//     "& span": { flex: 1 },
//   },
//   disabledOption: { opacity: 0.6, cursor: "not-allowed" },
//   textInput: {
//     marginTop: "0.5rem",
//     marginLeft: "1.5rem",
//     padding: "0.4rem 0.6rem",
//     border: "1px solid #ccc",
//     borderRadius: "6px",
//     width: "90%",
//   },
//   card: {
//     marginTop: "1.5rem",
//     padding: "1rem",
//     background: "#f9fafb",
//     border: "1px solid #e5e7eb",
//     borderRadius: "12px",
//     boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
//   },
//   cardTitle: {
//     fontSize: "1.1rem",
//     fontWeight: 700,
//     marginBottom: "0.5rem",
//     color: "#111827",
//   },
//   cardText: {
//     marginBottom: "1rem",
//     fontSize: "0.95rem",
//     lineHeight: 1.5,
//     color: "#374151",
//   },
//   nav: {
//     display: "flex",
//     justifyContent: "space-between",
//     marginTop: "1.5rem",
//   },
//   button: {
//     padding: "0.5rem 1rem",
//     borderRadius: "8px",
//     border: "none",
//     cursor: "pointer",
//     fontWeight: 600,
//     "&:disabled": { opacity: 0.5, cursor: "not-allowed" },
//   },
//   prevButton: { background: "#f0f0f0", color: "#333" },
//   nextButton: { background: "#2563eb", color: "#fff" },
//   scrollBox: {
//     maxHeight: 250,
//     overflowY: "auto",
//     border: "1px solid #ddd",
//     borderRadius: "8px",
//     padding: "0.75rem",
//     marginBottom: "1rem",
//   },
// });

// /*
//   Q3 -> role mapping (used when fallback from uncertain)
// */

// // const q3ToRole_A: Record<string, string> = {
// //   A1: "Agent Architect", // IT
// //   A2: "Agent Architect", // Data and AI
// //   A3: "VITA Creator", // Marketing
// //   A4: "Sales Advocate", // Sales
// //   A5: "Sales Advocate", // Legal
// //   A6: "Sales Advocate", // Product Development
// //   A7: "Program Overseer", // Project Management
// //   A8: "Program Overseer", // Business Ops
// //   A9: "Compliance Guardian", // HR
// //   A10: "Compliance Guardian", // Finance
// //   A11: "AI Executive", // Executives
// //   A12: "Compliance Guardian", // Other (fallback)
// // };

// const q3ToRole: Record<string, string> = {
//   C1: "Agent Architect",
//   C2: "Agent Architect",
//   C3: "VITA Creator",
//   C4: "Sales Advocate",
//   C5: "Sales Advocate",
//   C6: "Sales Advocate",
//   C7: "Program Overseer",
//   C8: "Program Overseer",
//   C9: "Compliance Guardian",
//   C10: "Compliance Guardian",
//   C11: "AI Executive",
//   C12: "Compliance Guardian",
// };

// const majorToRole_Q94: Record<string, string> = {
//   L1: "Agent Architect", // Technical/STEM
//   L2: "Sales Advocate", // Business & Management
//   L3: "Compliance Guardian", // Social Sciences
//   L4: "Compliance Guardian", // Humanities
//   L5: "VITA Creator", // Creativity & Design
//   L6: "Compliance Guardian", // Health & Life Sciences
//   L7: "Compliance Guardian", // Law & Policy
//   L8: "Compliance Guardian", // Education
// };

// const majorToRole_Q95: Record<string, string> = {
//   M1: "Sales Advocate", // Business & Management
//   M2: "Compliance Guardian", // Social Sciences
//   M3: "Compliance Guardian", // Humanities
//   M4: "VITA Creator", // Creativity & Design
//   M5: "Compliance Guardian", // Health & Life Sciences
//   M6: "Compliance Guardian", // Law & Policy
//   M7: "Compliance Guardian", // Education
// };

// /*
//   Questions (full text & options as provided)
// */
// const questions: Question[] = [
//   // Q1
//   {
//     id: "1",
//     text: " Rate your current AI/GenAI competence level on a scale of 1 to 10.",
//     options: [
//       {
//         value: "A1",
//         label: "1) Nil (No IT skills, no experience with AI/GenAI)",
//       },
//       {
//         value: "A2",
//         label: "2) Remarkably low (No IT skills, minimal AI exposure)",
//       },
//       {
//         value: "A3",
//         label: "3) Very low (Basic computer skills, no AI experience)",
//       },
//       {
//         value: "A4",
//         label: "4) Low (Preliminary IT skills, some AI understanding)",
//       },
//       {
//         value: "A5",
//         label: "5) Lower Moderate (Moderate IT skills, limited AI knowledge)",
//       },
//       {
//         value: "A6",
//         label: "6) Mid-Moderate (Can use ChatGPT but no deep AI knowledge)",
//       },
//       {
//         value: "A7",
//         label: "7) Upper-Moderate (Clear differentiation of AI/ML/DL concepts)",
//       },
//       {
//         value: "A8",
//         label: "8) High (Architect IT solutions, good AI theory knowledge)",
//       },
//       {
//         value: "A9",
//         label: "9) Very High (Can confidently develop AI solutions)",
//       },
//       {
//         value: "A10",
//         label: "10) Superhuman (Grayed out fictional)",
//         disabled: true,
//       },
//     ],
//   },

//   // Q2
//   {
//     id: "2",
//     text: " Which of the following describes your current role or background?.",
//     options: [
//       {
//         value: "B1",
//         label: "1) Technical/IT-related (Please specify)",
//         requireText: true,
//       },
//       {
//         value: "B2",
//         label: "2) Non-technical/non-IT related (Please specify)",
//         requireText: true,
//       },
//       {
//         value: "B3",
//         label: "3) Business/Management/Consulting (Please specify)",
//         requireText: true,
//       },
//       {
//         value: "B4",
//         label: "4) Academic/Research (Please specify)",
//         requireText: true,
//       },
//       {
//         value: "B5",
//         label: "5) Entrepreneur/Startup Founder (Please specify)",
//         requireText: true,
//       },
//       {
//         value: "B6",
//         label: "6) Creative/Design/Fine-arts (Please specify)",
//         requireText: true,
//       },
//       { value: "B7", label: "7)Student (Please specify)", requireText: true },
//     ],
//   },

//   // Q3-Q7 (common)
//   {
//     id: "3",
//     text: " Which of the following describes your function/team?.",
//     options: [
//       { value: "C1", label: "1) IT" },
//       { value: "C2", label: "2) Data and AI" },
//       { value: "C3", label: "3) Marketing" },
//       { value: "C4", label: "4) Sales" },
//       { value: "C5", label: "5) Legal" },
//       { value: "C6", label: "6) Product Development" },
//       { value: "C7", label: "7) Project Management" },
//       { value: "C8", label: "8) Business Operations/Service Delivery" },
//       { value: "C9", label: "9) HR" },
//       { value: "C10", label: "10) Finance" },
//       { value: "C11", label: "11) Executives/Leadership" },
//       { value: "C12", label: "12) Other", requireText: true },
//     ],
//   },
//   {
//     id: "4",
//     text: " How do you rate your skills or competencies in your current role?",
//     options: [
//       { value: "D1", label: "1) Very high" },
//       { value: "D2", label: "2) High" },
//       { value: "D3", label: "3) Medium" },
//       { value: "D4", label: "4) Low" },
//       { value: "D5", label: "5) Very Low" },
//       { value: "D6", label: "6) Not applicable" },
//     ],
//   },
//   {
//     id: "5",
//     text: " Would you like to stay in your current role?",
//     options: [
//       { value: "E1", label: "Yes" },
//       { value: "E2", label: "No" },
//       { value: "E3", label: "Uncertain" },
//     ],
//   },
//   {
//     id: "6",
//     text: " To what extent is your current role impacted or will be impacted by AI?",
//     options: [
//       { value: "F1", label: "1) Completely eliminated by AI" },
//       { value: "F2", label: "2) Will continue but high AI impact" },
//       { value: "F3", label: "3) Moderate AI impact" },
//       { value: "F4", label: "4) Low AI impact" },
//       { value: "F5", label: "5) No AI impact" },
//       { value: "F6", label: "6) Not sure" },
//     ],
//   },
//   {
//     id: "7",
//     text: " Please select your industry.",
//     options: [
//       { value: "G1", label: "1) Agriculture, Forestry, Fishing & Mining" },
//       { value: "G2", label: "2) Automotive" },
//       { value: "G3", label: "3) Aerospace & Defense" },
//       { value: "G4", label: "4) Biotechnology / Life Sciences" },
//       { value: "G5", label: "5) Chemicals & Materials" },
//       { value: "G6", label: "6) Construction & Real Estate" },
//       { value: "G7", label: "7) Consumer Goods / FMCG" },
//       { value: "G8", label: "8) Education & Training" },
//       { value: "G9", label: "9) Energy & Utilities" },
//       { value: "G10", label: "10) Entertainment, Media & Publishing" },
//       { value: "G11", label: "11) Financial Services & Banking" },
//       { value: "G12", label: "12) Government & Public Sector" },
//       { value: "G13", label: "13) Healthcare & Pharmaceuticals" },
//       { value: "G14", label: "14) Hospitality, Travel & Tourism" },
//       { value: "G15", label: "15) Insurance" },
//       { value: "G16", label: "16) Legal Services" },
//       { value: "G17", label: "17) Logistics, Supply Chain & Transportation" },
//       { value: "G18", label: "18) Manufacturing & Industrial" },
//       { value: "G19", label: "19) Marketing, Advertising & PR" },
//       { value: "G20", label: "20) Nonprofit / NGOs / Social Impact" },
//       { value: "G21", label: "21) Professional Services & Consulting" },
//       { value: "G22", label: "22) Retail & E-commerce" },
//       { value: "G23", label: "23) Software & IT Services" },
//       { value: "G24", label: "24) Telecommunications" },
//       { value: "G25", label: "25) Venture Capital & Private Equity" },
//       { value: "G26", label: "26) Wholesale & Distribution" },
//       { value: "G27", label: "27) Other (please specify)", requireText: true },
//       { value: "G28", label: "28) Not applicable" },
//     ],
//   },

//   // Q8
//   {
//     id: "8",
//     text: " Would you like to be a domain expert in your industry? ",
//     options: [
//       { value: "H1", label: "Yes" },
//       { value: "H2", label: "No" },
//     ],
//   },

//   // Q9.1 (role selection 1-10 else uncertain)
//   {
//     id: "9.1",
//     text: " If you are absolutely certain and clear about the new AI/GenAI role you would like to move to then select the role from the options 1 to 10, else select option 11 uncertain.",
//     options: [
//       { value: "I1", label: "1) Fine Tuner" },
//       { value: "I2", label: "2) Agent Architect" },
//       { value: "I3", label: "3) Data Annotator" },
//       { value: "I4", label: "4) DAC Consultant" },
//       { value: "I5", label: "5) Sales Advocate" },
//       { value: "I6", label: "6) Compliance Guardian" },
//       { value: "I7", label: "7) Security Specialist" },
//       { value: "I8", label: "8) AI Executive" },
//       { value: "I9", label: "9) Program Overseer" },
//       { value: "I10", label: "10) Infrastructure Catalyst" },
//       { value: "I11", label: "11) Uncertain" },
//     ],
//   },

//   // Q9.2 (role options / uncertain fallback to Q3 mapping)
//   {
//     id: "9.2",
//     text: "If you are absolutely certain and clear about the new AI/GenAI role then select the role from the options 1 to 6 else select option 7 uncertain.",
//     options: [
//       { value: "J1", label: "1) Agent Architect" },
//       { value: "J2", label: "2) fine tuner" },
//       { value: "J3", label: "3) Data Annotator" },
//       { value: "J4", label: "4) DAC Consultant" },
//       { value: "J5", label: "5) Security Specialist" },
//       { value: "J6", label: "6) Infrastructure Catalyst" },
//       { value: "J7", label: "7) Uncertain" },
//     ],
//   },

//   // Q9.3
//   {
//     id: "9.3",
//     text: "If you are absolutely certain and clear about the new AI/GenAI role then select the role from the options 1 to 5 else select option 6 uncertain.",
//     options: [
//       { value: "K1", label: "1) DAC Consultant" },
//       { value: "K2", label: "2) Sales Advocate" },
//       { value: "K3", label: "3) Compliance Guardian" },
//       { value: "K4", label: "4) AI Executive" },
//       { value: "K5", label: "5) Program Overseer" },
//       { value: "K6", label: "6) Uncertain" },
//     ],
//   },

//   // Q9.4 (major -> role)
//   {
//     id: "9.4",
//     text: " Which of the following best describes your major?",
//     options: [
//       { value: "L1", label: "1) Technical/STEM" },
//       { value: "L2", label: "2) Business & Management" },
//       { value: "L3", label: "3) Social Sciences" },
//       { value: "L4", label: "4) Humanities" },
//       { value: "L5", label: "5) Creativity & Design" },
//       { value: "L6", label: "6) Health & Life Sciences" },
//       { value: "L7", label: "7) Law & Policy" },
//       { value: "L8", label: "8) Education" },
//     ],
//   },

//   // Q9.5 (education degree/major -> role)
//   {
//     id: "9.5",
//     text: " Which of the following best describes your education degree/major?",
//     options: [
//       { value: "M1", label: "1) Business & Management" },
//       { value: "M2", label: "2) Social Sciences" },
//       { value: "M3", label: "3) Humanities" },
//       { value: "M4", label: "4) Creativity & Design" },
//       { value: "M5", label: "5) Health & Life Sciences" },
//       { value: "M6", label: "6) Law & Policy" },
//       { value: "M7", label: "7) Education" },
//     ],
//   },
// ];

// export default function Assessment() {
//   const classes = useStyles();
//   const navigate = useNavigate();
//   const { user } = useContext(AuthContext);
//   // component state
//   const [current, setCurrent] = useState(0);
//   const [answers, setAnswers] = useState<Record<string, string>>({});
//   const [details, setDetails] = useState<Record<string, string>>({});
//   const [_history, setHistory] = useState<string[]>([]);

//   const [terminated, setTerminated] = useState(false);
//   const [card, setCard] = useState<{ title: string; text: string } | null>(
//     null
//   );

//   const question = questions[current];
//   const currentAnswer = answers[question.id];
//   const currentDetail = details[question.id];

//   const handleAnswer = (value: string) => {
//     setAnswers({ ...answers, [question.id]: value });
//     // reset detail for that question when option changes
//     setDetails({ ...details, [question.id]: "" });
//   };
//   const handleDetail = (value: string) => {
//     setDetails({ ...details, [question.id]: value });
//   };

//   // helper: show termination card with role (title) and explanation
//   const showRoleCard = (roleName: string, explanation?: string) => {
//     setTerminated(true);
//     setCard({
//       title: `${roleName}`,
//       text:
//         explanation ??
//         `Based on your responses, your recommended target role is: ${roleName}`,
//     });
//   };

//   // goNext implements all branching rules
//   const goNext = () => {
//     setHistory((prev) => [...prev, question.id]);
//     // ---------- Q2-level checks (these check Q1 + Q2 + Q5 where needed)
//     if (question.id === "2") {
//       // If Q1 was A1 or A2 -> Foundational track recommended (terminate)
//       if (answers["1"] === "A1" || answers["1"] === "A2") {
//         setTerminated(true);
//         setCard({
//           title: "Foundational Track",
//           text: "At this moment, no AI/GenAI target role will be provided to you. We recommend you complete the foundational track first to gain basic knowledge and understanding of IT and AI.For further guidance or coaching, write to us at info@digiculum.com",
//         });
//         return;
//       }

//       // If Q2 = B6 AND Q5 = E1 -> VITA Creator
//       if (currentAnswer === "B6" && answers["5"] === "E1") {
//         showRoleCard("VITA Creator", "Your Target role is VITA Creator");
//         return;
//       }

//       // If Q2 = B4 or B5 -> Domain Visionary (terminate)
//       if (currentAnswer === "B4" || currentAnswer === "B5") {
//         showRoleCard(
//           "Domain Visionary",
//           "Assessment terminates here with recommended track: Domain Visionary."
//         );
//         return;
//       }
//     }

//     // ---------- Q8 branching (domain expert question)
//     // if (question.id === "8") {
//     //   // If Q8 = Yes -> terminate with Domain Visionary
//     //   if (currentAnswer === "H1") {
//     //     showRoleCard(
//     //       "Domain Visionary",
//     //       "You chose to be a domain expert — recommended track: Domain Visionary."
//     //     );
//     //     return;
//     //   }

//     //   // If Q8 = No
//     //   if (currentAnswer === "H2") {
//     //     const q2 = answers["2"];
//     //     const q5 = answers["5"];

//     //     // 🔥 New rule: If Q2 ∈ {B1..B7 except B6} AND Q5 = E3 (Uncertain)
//     //     if (["B1", "B2", "B3", "B4", "B5", "B7"].includes(q2) && q5 === "E3") {
//     //       const q3 = answers["3"];
//     //       const mapped = q3ToRole_A[q3];
//     //       if (mapped) {
//     //         showRoleCard(
//     //           mapped,
//     //           `Based on your Q3 selection (${q3}), your recommended role is: ${mapped}.`
//     //         );
//     //         return;
//     //       }
//     //     }

//     //     // Existing rule: Q5 = E1 → go to specialized Q9.x
//     //     if (q5 === "E1") {
//     //       if (q2 === "B1") {
//     //         setCurrent(questions.findIndex((q) => q.id === "9.2"));
//     //         return;
//     //       } else if (q2 === "B2") {
//     //         setCurrent(questions.findIndex((q) => q.id === "9.5"));
//     //         return;
//     //       } else if (q2 === "B3") {
//     //         setCurrent(questions.findIndex((q) => q.id === "9.3"));
//     //         return;
//     //       } else if (q2 === "B7") {
//     //         setCurrent(questions.findIndex((q) => q.id === "9.4"));
//     //         return;
//     //       } else {
//     //         setCurrent((c) => c + 1);
//     //         return;
//     //       }
//     //     } else {
//     //       // If Q5 !== E1 we simply continue
//     //       setCurrent((c) => c + 1);
//     //       return;
//     //     }
//     //   }
//     // }
//     // ---------- Q8 branching (domain expert question)
//     // ---------- Q8 branching (domain expert question)
//     if (question.id === "8") {
//       // If Q8 = Yes -> terminate with Domain Visionary
//       if (currentAnswer === "H1") {
//         showRoleCard(
//           "Domain Visionary",
//           "You chose to be a domain expert — recommended track: Domain Visionary."
//         );
//         return;
//       }

//       // If Q8 = No
//       if (currentAnswer === "H2") {
//         const q2 = answers["2"];
//         const q5 = answers["5"];

//         // NEW RULE: If Q2 = B1..B7 except B6 AND Q5 = E3 (Uncertain) → map Q3 → Role
//         if (["B1", "B2", "B3", "B4", "B5", "B7"].includes(q2) && q5 === "E3") {
//           const q3 = answers["3"];
//           const mapped = q3ToRole[q3]; // ✅ uses your existing mapping (C1..C12)
//           if (mapped) {
//             showRoleCard(
//               mapped,
//               `Based on your Q3 selection (${q3}), your recommended role is: ${mapped}.`
//             );
//             return;
//           }
//         }

//         // Existing rule: Q5 = E1 → go to specialized Q9.x
//         if (q5 === "E1") {
//           if (q2 === "B1") {
//             setCurrent(questions.findIndex((q) => q.id === "9.2"));
//             return;
//           } else if (q2 === "B2") {
//             setCurrent(questions.findIndex((q) => q.id === "9.5"));
//             return;
//           } else if (q2 === "B3") {
//             setCurrent(questions.findIndex((q) => q.id === "9.3"));
//             return;
//           } else if (q2 === "B7") {
//             setCurrent(questions.findIndex((q) => q.id === "9.4"));
//             return;
//           } else {
//             setCurrent((c) => c + 1);
//             return;
//           }
//         } else {
//           // If Q5 !== E1 we simply continue
//           setCurrent((c) => c + 1);
//           return;
//         }
//       }
//     }

//     // ---------- Q8 branching (domain expert question)
//     if (question.id === "8") {
//       // If Q8 = Yes -> terminate with Domain Visionary
//       if (currentAnswer === "H1") {
//         showRoleCard(
//           "Domain Visionary",
//           "You chose to be a domain expert — recommended track: Domain Visionary."
//         );
//         return;
//       }

//       // If Q8 = No -> decide which Q9.x to show (based on Q2 + Q5)
//       if (currentAnswer === "H2") {
//         const q2 = answers["2"];
//         const q5 = answers["5"];

//         // Only when Q2 ∈ {B1..B7} and Q5=E1 we route to specialized Q9.x per your last mapping
//         if (q5 === "E1") {
//           if (q2 === "B1") {
//             setCurrent(questions.findIndex((q) => q.id === "9.2"));
//             return;
//           } else if (q2 === "B2") {
//             setCurrent(questions.findIndex((q) => q.id === "9.5"));
//             return;
//           } else if (q2 === "B3") {
//             setCurrent(questions.findIndex((q) => q.id === "9.3"));
//             return;
//           } else if (q2 === "B7") {
//             setCurrent(questions.findIndex((q) => q.id === "9.4"));
//             return;
//           } else {
//             // default: if Q2 is other values, continue to next question (or you can add extra mappings)
//             setCurrent((c) => c + 1);
//             return;
//           }
//         } else {
//           // If Q5 !== E1 we simply continue
//           setCurrent((c) => c + 1);
//           return;
//         }
//       }
//     }
//     // ---------- Q5-level checks (stay in current role?)
//     if (question.id === "5") {
//       const q2 = answers["2"];
//       const q5 = currentAnswer; // this is the answer for Q5

//       if (q2 === "B6" && q5 === "E1") {
//         showRoleCard(
//           "VITA Creator",
//           "Assessment terminates here with recommended role: VITA Creator."
//         );
//         return;
//       }
//     }

//     // ---------- Q9.1: if user picks a role -> stop or "Uncertain" fallback to next
//     // ---------- Q9.1: if user picks a role -> stop or "Uncertain" fallback
//     if (question.id === "9.1") {
//       if (!currentAnswer) return;

//       if (currentAnswer === "I11") {
//         // Uncertain (option 11) -> fallback similar to Q9.3
//         const q3 = answers["3"];
//         const mapped = q3ToRole[q3];
//         if (mapped) {
//           showRoleCard(
//             mapped,
//             `Fallback from Q9.1 uncertain — mapped from your Q3 (${q3}) to ${mapped}.`
//           );
//           return;
//         } else {
//           // If Q3 empty, move to next question or handle another fallback
//           setCurrent((c) => c + 1);
//           return;
//         }
//       } else {
//         // definite role selected
//         const opt = question.options?.find((o) => o.value === currentAnswer);
//         showRoleCard(opt?.label ?? "Selected Role");
//         return;
//       }
//     }

//     // ---------- Q9.2 behavior:
//     // Q9.2 options are role choices (J1..J5) with J6 = Uncertain.
//     // If user picks J1..J5 -> stop and show that role; if J6 -> fall back to Q3->mapping.
//     //     if (question.id === "9.2") {
//     //       if (!currentAnswer) return;
//     //       if (currentAnswer === "J6") {
//     //         // Uncertain -> check Q3 mapping
//     //         const q3 = answers["3"];
//     //         const mapped = q3ToRole[q3];
//     //         if (mapped) {
//     //           showRoleCard(
//     //             mapped,
//     //             `Fallback from Q9.2 uncertain — mapped from your Q3 (${q3}) to ${mapped}.`
//     //           );
//     //           return;
//     //         } else {
//     //           // If Q3 empty, move to next question (ask Q9.5 or stop)
//     //           setCurrent((c) => c + 1);
//     //           return;
//     //         }
//     //       } else {
//     //         // definite role selected
//     //         const opt = question.options?.find((o) => o.value === currentAnswer);
//     //         showRoleCard(opt?.label ?? "Selected Role");
//     //         return;
//     //       }
//     //     }
//     // ---------- Q9.2 behavior:
//     if (question.id === "9.2") {
//       if (!currentAnswer) return;

//       if (currentAnswer === "J7") {
//         // Uncertain (option 7) -> fallback similar to Q9.3 / Q9.1
//         const q3 = answers["3"];
//         const mapped = q3ToRole[q3];
//         if (mapped) {
//           showRoleCard(
//             mapped,
//             `Fallback from Q9.2 uncertain — mapped from your Q3 (${q3}) to ${mapped}.`
//           );
//           return;
//         } else {
//           // If Q3 empty, move to next question or handle another fallback
//           setCurrent((c) => c + 1);
//           return;
//         }
//       } else {
//         // definite role selected
//         const opt = question.options?.find((o) => o.value === currentAnswer);
//         showRoleCard(opt?.label ?? "Selected Role");
//         return;
//       }
//     }

//     // ---------- Q9.3 behavior:
//     // If K1..K5 -> stop and show selected role. If K6 (Uncertain) -> fallback to Q3 mapping.
//     if (question.id === "9.3") {
//       if (!currentAnswer) return;
//       if (currentAnswer === "K6") {
//         const q3 = answers["3"];
//         const mapped = q3ToRole[q3];
//         if (mapped) {
//           showRoleCard(
//             mapped,
//             `Fallback from Q9.3 uncertain — mapped from your Q3 (${q3}) to ${mapped}.`
//           );
//           return;
//         } else {
//           setCurrent((c) => c + 1);
//           return;
//         }
//       } else {
//         const opt = question.options?.find((o) => o.value === currentAnswer);
//         showRoleCard(opt?.label ?? "Selected Role");
//         return;
//       }
//     }

//     // ---------- Q9.4 behavior (major -> role mapping) -> always stop
//     if (question.id === "9.4") {
//       if (!currentAnswer) return;
//       const role = majorToRole_Q94[currentAnswer];
//       if (role) {
//         showRoleCard(role, `Mapped from your major selection to ${role}.`);
//         return;
//       } else {
//         // if somehow undefined, fallback to Q3 mapping
//         const q3 = answers["3"];
//         const mapped = q3ToRole[q3];
//         if (mapped) {
//           showRoleCard(mapped, `Fallback to Q3 mapping => ${mapped}.`);
//           return;
//         } else {
//           setCurrent((c) => c + 1);
//           return;
//         }
//       }
//     }

//     // ---------- Q9.5 behavior (education degree -> role mapping) -> always stop
//     if (question.id === "9.5") {
//       if (!currentAnswer) return;
//       const role = majorToRole_Q95[currentAnswer];
//       if (role) {
//         showRoleCard(role, `Mapped from your education selection to ${role}.`);
//         return;
//       } else {
//         // fallback to Q3 mapping
//         const q3 = answers["3"];
//         const mapped = q3ToRole[q3];
//         if (mapped) {
//           showRoleCard(mapped, `Fallback to Q3 mapping => ${mapped}.`);
//           return;
//         } else {
//           setCurrent((c) => c + 1);
//           return;
//         }
//       }
//     }

//     // default: go to next question
//     setCurrent((c) => c + 1);
//   };
//   const handleBack = () => {
//     setHistory((prev) => {
//       if (prev.length === 0) return prev; // no previous question
//       const lastQ = prev[prev.length - 1];
//       setCurrent(questions.findIndex((q) => q.id === lastQ));
//       return prev.slice(0, -1); // remove last
//     });
//   };

//   const handleExit = () => {
//     window.location.href = "/";
//   };

//   const isNextDisabled =
//     !currentAnswer ||
//     (question.options?.find((o) => o.value === currentAnswer)?.requireText &&
//       !currentDetail?.trim());

//   // Card Back handler — bring user back one step so they can change answers
//   //   const handleCardBack = () => {
//   //     setTerminated(false);
//   //     setCard(null);
//   //     // move back to previous question index where decision was made.
//   //     // For safety, move back one question unless we can detect a more appropriate previous.
//   //     setCurrent((c) => (c > 0 ? c - 1 : 0));
//   //   };

//   // const handleCardBack = () => {
//   //   setTerminated(false);
//   //   setCard(null);

//   //   setHistory((prev) => {
//   //     if (prev.length === 0) {
//   //       setCurrent(0);
//   //       return prev;
//   //     }
//   //     const lastQ = prev[prev.length - 1];
//   //     setCurrent(questions.findIndex((q) => q.id === lastQ));
//   //     return prev.slice(0, -1); // remove last
//   //   });
//   // };
//   // const handleBack = () => {
//   //   setHistory((prev) => {
//   //     if (prev.length === 0) return prev; // no previous question
//   //     const lastQ = prev[prev.length - 1];
//   //     setCurrent(questions.findIndex((q) => q.id === lastQ));
//   //     return prev.slice(0, -1); // remove last
//   //   });
//   // };

//   return (
//     <div className={classes.container}>
//       <h2 className={classes.title}>Question {question.id}</h2>
//       <p className={classes.questionText}>{question.text}</p>

//       {!terminated && question.options && (
//         <div className={question.id === "7" ? classes.scrollBox : ""}>
//           {question.options.map((opt) => (
//             <div key={opt.value}>
//               <label
//                 className={`${classes.option} ${
//                   opt.disabled ? classes.disabledOption : ""
//                 }`}
//               >
//                 <input
//                   type="radio"
//                   name={`q-${question.id}`}
//                   value={opt.value}
//                   checked={answers[question.id] === opt.value}
//                   onChange={(e) => handleAnswer(e.target.value)}
//                   disabled={opt.disabled}
//                 />
//                 <span>{opt.label}</span>
//               </label>

//               {opt.requireText && answers[question.id] === opt.value && (
//                 <input
//                   type="text"
//                   placeholder="Please specify..."
//                   className={classes.textInput}
//                   value={details[question.id] || ""}
//                   onChange={(e) => handleDetail(e.target.value)}
//                 />
//               )}
//             </div>
//           ))}
//         </div>
//       )}

//       {card && (
//         <div className={classes.card}>
//           <p className={classes.cardTitle}>{card.title}</p>
//           <p className={classes.cardText}>{card.text}</p>

//           <div
//             style={{
//               display: "flex",
//               justifyContent: "flex-end",
//               marginTop: "1rem",
//               gap: "0.5rem",
//             }}
//           >
//             {/* Back button to edit answers */}
//             {/* <button
//               onClick={handleCardBack}
//               className={`${classes.button} ${classes.prevButton}`}
//             >
//               Back
//             </button> */}
//             {/* Exit button to go to /profile */}
//             {/* <button
//               onClick={() => (window.location.href = "/profile")}
//               className={`${classes.button} ${classes.nextButton}`}
//             >
//               Exit
//             </button> */}

//             <button
//               onClick={() => {
//                 if (!user?.email) return;
//                 // Navigate to Profile page and send the role as state
//                 navigate(`/profile/${user.email}`, {
//                   state: { targetRole: card?.title },
//                 });
//               }}
//               className={`${classes.button} ${classes.nextButton}`}
//             >
//               Exit
//             </button>
//           </div>
//         </div>
//       )}

//       {!terminated && (
//         <div className={classes.nav}>
//           <button
//             onClick={handleBack}
//             className={`${classes.button} ${classes.prevButton}`}
//             disabled={current === 0}
//           >
//             Back
//           </button>

//           <button
//             onClick={handleExit}
//             className={`${classes.button} ${classes.prevButton}`}
//           >
//             Exit
//           </button>

//           <button
//             onClick={goNext}
//             className={`${classes.button} ${classes.nextButton}`}
//             disabled={isNextDisabled}
//           >
//             Next
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

/* eslint-disable @typescript-eslint/no-unused-vars */

"use client";
import { useContext, useState } from "react";
import { createUseStyles } from "react-jss";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

type Option = {
  value: string;
  label: string;
  disabled?: boolean;
  requireText?: boolean;
};

type Question = {
  id: string;
  text: string;
  options?: Option[];
};

const useStyles = createUseStyles({
  container: {
    maxWidth: 800,
    margin: "2rem auto",
    padding: "1.5rem",
    background: "#fff",
    borderRadius: "16px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    fontFamily: "sans-serif",
  },
  title: { fontSize: "1.25rem", fontWeight: 700, marginBottom: "1rem" },
  questionText: { marginBottom: "1rem", fontSize: "1rem", lineHeight: 1.5 },
  option: {
    display: "flex",
    alignItems: "flex-start",
    gap: "0.5rem",
    marginBottom: "0.75rem",
    cursor: "pointer",
    "& input[type='radio']": { marginTop: "0.25rem" },
    "& span": { flex: 1 },
  },
  disabledOption: { opacity: 0.6, cursor: "not-allowed" },
  textInput: {
    marginTop: "0.5rem",
    marginLeft: "1.5rem",
    padding: "0.4rem 0.6rem",
    border: "1px solid #ccc",
    borderRadius: "6px",
    width: "90%",
  },
  card: {
    marginTop: "1.5rem",
    padding: "1rem",
    background: "#f9fafb",
    border: "1px solid #e5e7eb",
    borderRadius: "12px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
  },
  cardTitle: {
    fontSize: "1.1rem",
    fontWeight: 700,
    marginBottom: "0.5rem",
    color: "#111827",
  },
  cardText: {
    marginBottom: "1rem",
    fontSize: "0.95rem",
    lineHeight: 1.5,
    color: "#374151",
  },
  nav: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "1.5rem",
  },
  button: {
    padding: "0.5rem 1rem",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    fontWeight: 600,
    "&:disabled": { opacity: 0.5, cursor: "not-allowed" },
  },
  prevButton: { background: "#f0f0f0", color: "#333" },
  nextButton: { background: "#2563eb", color: "#fff" },
  scrollBox: {
    maxHeight: 250,
    overflowY: "auto",
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "0.75rem",
    marginBottom: "1rem",
  },
});

/*
  Q3 -> role mapping (used when fallback from uncertain)
*/

// const q3ToRole_A: Record<string, string> = {
//   A1: "Agent Architect", // IT
//   A2: "Agent Architect", // Data and AI
//   A3: "VITA Creator", // Marketing
//   A4: "Sales Advocate", // Sales
//   A5: "Sales Advocate", // Legal
//   A6: "Sales Advocate", // Product Development
//   A7: "Program Overseer", // Project Management
//   A8: "Program Overseer", // Business Ops
//   A9: "Compliance Guardian", // HR
//   A10: "Compliance Guardian", // Finance
//   A11: "AI Executive", // Executives
//   A12: "Compliance Guardian", // Other (fallback)
// };

const q3ToRole: Record<string, string> = {
  C1: "Agent Architect",
  C2: "Agent Architect",
  C3: "VITA Creator",
  C4: "Sales Advocate",
  C5: "Sales Advocate",
  C6: "Sales Advocate",
  C7: "Program Overseer",
  C8: "Program Overseer",
  C9: "Compliance Guardian",
  C10: "Compliance Guardian",
  C11: "AI Executive",
  C12: "Compliance Guardian",
};

const majorToRole_Q94: Record<string, string> = {
  L1: "Agent Architect", // Technical/STEM
  L2: "Sales Advocate", // Business & Management
  L3: "Compliance Guardian", // Social Sciences
  L4: "Compliance Guardian", // Humanities
  L5: "VITA Creator", // Creativity & Design
  L6: "Compliance Guardian", // Health & Life Sciences
  L7: "Compliance Guardian", // Law & Policy
  L8: "Compliance Guardian", // Education
};

const majorToRole_Q95: Record<string, string> = {
  M1: "Sales Advocate", // Business & Management
  M2: "Compliance Guardian", // Social Sciences
  M3: "Compliance Guardian", // Humanities
  M4: "VITA Creator", // Creativity & Design
  M5: "Compliance Guardian", // Health & Life Sciences
  M6: "Compliance Guardian", // Law & Policy
  M7: "Compliance Guardian", // Education
};

/*
  Questions (full text & options as provided)
*/
const questions: Question[] = [
  // Q1
  {
    id: "1",
    text: " Rate your current AI/GenAI competence level on a scale of 1 to 10.",
    options: [
      {
        value: "A1",
        label: "1) Nil (No IT skills, no experience with AI/GenAI)",
      },
      {
        value: "A2",
        label: "2) Remarkably low (No IT skills, minimal AI exposure)",
      },
      {
        value: "A3",
        label: "3) Very low (Basic computer skills, no AI experience)",
      },
      {
        value: "A4",
        label: "4) Low (Preliminary IT skills, some AI understanding)",
      },
      {
        value: "A5",
        label: "5) Lower Moderate (Moderate IT skills, limited AI knowledge)",
      },
      {
        value: "A6",
        label: "6) Mid-Moderate (Can use ChatGPT but no deep AI knowledge)",
      },
      {
        value: "A7",
        label: "7) Upper-Moderate (Clear differentiation of AI/ML/DL concepts)",
      },
      {
        value: "A8",
        label: "8) High (Architect IT solutions, good AI theory knowledge)",
      },
      {
        value: "A9",
        label: "9) Very High (Can confidently develop AI solutions)",
      },
      {
        value: "A10",
        label: "10) Superhuman (Grayed out fictional)",
        disabled: true,
      },
    ],
  },

  // Q2
  {
    id: "2",
    text: " Which of the following describes your current role or background?.",
    options: [
      {
        value: "B1",
        label: "1) Technical/IT-related (Please specify)",
        requireText: true,
      },
      {
        value: "B2",
        label: "2) Non-technical/non-IT related (Please specify)",
        requireText: true,
      },
      {
        value: "B3",
        label: "3) Business/Management/Consulting (Please specify)",
        requireText: true,
      },
      {
        value: "B4",
        label: "4) Academic/Research (Please specify)",
        requireText: true,
      },
      {
        value: "B5",
        label: "5) Entrepreneur/Startup Founder (Please specify)",
        requireText: true,
      },
      {
        value: "B6",
        label: "6) Creative/Design/Fine-arts (Please specify)",
        requireText: true,
      },
      { value: "B7", label: "7)Student (Please specify)", requireText: true },
    ],
  },

  // Q3-Q7 (common)
  {
    id: "3",
    text: " Which of the following describes your function/team?.",
    options: [
      { value: "C1", label: "1) IT" },
      { value: "C2", label: "2) Data and AI" },
      { value: "C3", label: "3) Marketing" },
      { value: "C4", label: "4) Sales" },
      { value: "C5", label: "5) Legal" },
      { value: "C6", label: "6) Product Development" },
      { value: "C7", label: "7) Project Management" },
      { value: "C8", label: "8) Business Operations/Service Delivery" },
      { value: "C9", label: "9) HR" },
      { value: "C10", label: "10) Finance" },
      { value: "C11", label: "11) Executives/Leadership" },
      { value: "C12", label: "12) Other", requireText: true },
    ],
  },
  {
    id: "4",
    text: " How do you rate your skills or competencies in your current role?",
    options: [
      { value: "D1", label: "1) Very high" },
      { value: "D2", label: "2) High" },
      { value: "D3", label: "3) Medium" },
      { value: "D4", label: "4) Low" },
      { value: "D5", label: "5) Very Low" },
      { value: "D6", label: "6) Not applicable" },
    ],
  },
  {
    id: "5",
    text: " Would you like to stay in your current role?",
    options: [
      { value: "E1", label: "Yes" },
      { value: "E2", label: "No" },
      { value: "E3", label: "Uncertain" },
    ],
  },
  {
    id: "6",
    text: " To what extent is your current role impacted or will be impacted by AI?",
    options: [
      { value: "F1", label: "1) Completely eliminated by AI" },
      { value: "F2", label: "2) Will continue but high AI impact" },
      { value: "F3", label: "3) Moderate AI impact" },
      { value: "F4", label: "4) Low AI impact" },
      { value: "F5", label: "5) No AI impact" },
      { value: "F6", label: "6) Not sure" },
    ],
  },
  {
    id: "7",
    text: " Please select your industry.",
    options: [
      { value: "G1", label: "1) Agriculture, Forestry, Fishing & Mining" },
      { value: "G2", label: "2) Automotive" },
      { value: "G3", label: "3) Aerospace & Defense" },
      { value: "G4", label: "4) Biotechnology / Life Sciences" },
      { value: "G5", label: "5) Chemicals & Materials" },
      { value: "G6", label: "6) Construction & Real Estate" },
      { value: "G7", label: "7) Consumer Goods / FMCG" },
      { value: "G8", label: "8) Education & Training" },
      { value: "G9", label: "9) Energy & Utilities" },
      { value: "G10", label: "10) Entertainment, Media & Publishing" },
      { value: "G11", label: "11) Financial Services & Banking" },
      { value: "G12", label: "12) Government & Public Sector" },
      { value: "G13", label: "13) Healthcare & Pharmaceuticals" },
      { value: "G14", label: "14) Hospitality, Travel & Tourism" },
      { value: "G15", label: "15) Insurance" },
      { value: "G16", label: "16) Legal Services" },
      { value: "G17", label: "17) Logistics, Supply Chain & Transportation" },
      { value: "G18", label: "18) Manufacturing & Industrial" },
      { value: "G19", label: "19) Marketing, Advertising & PR" },
      { value: "G20", label: "20) Nonprofit / NGOs / Social Impact" },
      { value: "G21", label: "21) Professional Services & Consulting" },
      { value: "G22", label: "22) Retail & E-commerce" },
      { value: "G23", label: "23) Software & IT Services" },
      { value: "G24", label: "24) Telecommunications" },
      { value: "G25", label: "25) Venture Capital & Private Equity" },
      { value: "G26", label: "26) Wholesale & Distribution" },
      { value: "G27", label: "27) Other (please specify)", requireText: true },
      { value: "G28", label: "28) Not applicable" },
    ],
  },

  // Q8
  {
    id: "8",
    text: " Would you like to be a domain expert in your industry? ",
    options: [
      { value: "H1", label: "Yes" },
      { value: "H2", label: "No" },
    ],
  },

  // Q9.1 (role selection 1-10 else uncertain)
  {
    id: "9.1",
    text: " If you are absolutely certain and clear about the new AI/GenAI role you would like to move to then select the role from the options 1 to 10, else select option 11 uncertain.",
    options: [
      { value: "I1", label: "1) Fine Tuner" },
      { value: "I2", label: "2) Agent Architect" },
      { value: "I3", label: "3) Data Annotator" },
      { value: "I4", label: "4) DAC Consultant" },
      { value: "I5", label: "5) Sales Advocate" },
      { value: "I6", label: "6) Compliance Guardian" },
      { value: "I7", label: "7) Security Specialist" },
      { value: "I8", label: "8) AI Executive" },
      { value: "I9", label: "9) Program Overseer" },
      { value: "I10", label: "10) Infrastructure Catalyst" },
      { value: "I11", label: "11) Uncertain" },
    ],
  },

  // Q9.2 (role options / uncertain fallback to Q3 mapping)
  {
    id: "9.2",
    text: "If you are absolutely certain and clear about the new AI/GenAI role then select the role from the options 1 to 6 else select option 7 uncertain.",
    options: [
      { value: "J1", label: "1) Agent Architect" },
      { value: "J2", label: "2) fine tuner" },
      { value: "J3", label: "3) Data Annotator" },
      { value: "J4", label: "4) DAC Consultant" },
      { value: "J5", label: "5) Security Specialist" },
      { value: "J6", label: "6) Infrastructure Catalyst" },
      { value: "J7", label: "7) Uncertain" },
    ],
  },

  // Q9.3
  {
    id: "9.3",
    text: "If you are absolutely certain and clear about the new AI/GenAI role then select the role from the options 1 to 5 else select option 6 uncertain.",
    options: [
      { value: "K1", label: "1) DAC Consultant" },
      { value: "K2", label: "2) Sales Advocate" },
      { value: "K3", label: "3) Compliance Guardian" },
      { value: "K4", label: "4) AI Executive" },
      { value: "K5", label: "5) Program Overseer" },
      { value: "K6", label: "6) Uncertain" },
    ],
  },

  // Q9.4 (major -> role)
  {
    id: "9.4",
    text: " Which of the following best describes your major?",
    options: [
      { value: "L1", label: "1) Technical/STEM" },
      { value: "L2", label: "2) Business & Management" },
      { value: "L3", label: "3) Social Sciences" },
      { value: "L4", label: "4) Humanities" },
      { value: "L5", label: "5) Creativity & Design" },
      { value: "L6", label: "6) Health & Life Sciences" },
      { value: "L7", label: "7) Law & Policy" },
      { value: "L8", label: "8) Education" },
    ],
  },

  // Q9.5 (education degree/major -> role)
  {
    id: "9.5",
    text: " Which of the following best describes your education degree/major?",
    options: [
      { value: "M1", label: "1) Business & Management" },
      { value: "M2", label: "2) Social Sciences" },
      { value: "M3", label: "3) Humanities" },
      { value: "M4", label: "4) Creativity & Design" },
      { value: "M5", label: "5) Health & Life Sciences" },
      { value: "M6", label: "6) Law & Policy" },
      { value: "M7", label: "7) Education" },
    ],
  },
];

export default function Assessment() {
  const classes = useStyles();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  // component state
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [details, setDetails] = useState<Record<string, string>>({});
  const [_history, setHistory] = useState<string[]>([]);

  const [terminated, setTerminated] = useState(false);
  const [card, setCard] = useState<{ title: string; text: string } | null>(
    null
  );
  const [pendingRole, setPendingRole] = useState<string | null>(null);

  const question = questions[current];
  const currentAnswer = answers[question.id];
  const currentDetail = details[question.id];

  const handleAnswer = (value: string) => {
    setAnswers({ ...answers, [question.id]: value });
    // reset detail for that question when option changes
    setDetails({ ...details, [question.id]: "" });
  };
  const handleDetail = (value: string) => {
    setDetails({ ...details, [question.id]: value });
  };

  // helper: show termination card with role (title) and explanation
  const showRoleCard = (roleName: string, explanation?: string) => {
    setTerminated(true);
    setCard({
      title: `${roleName}`,
      text:
        explanation ??
        `Based on your responses, your recommended target role is: ${roleName}`,
    });
  };

  // goNext implements all branching rules
  const goNext = () => {
    setHistory((prev) => [...prev, question.id]);
    // ---------- Q2-level checks (these check Q1 + Q2 + Q5 where needed)
    if (question.id === "2") {
      // If Q1 was A1 or A2 -> Foundational track recommended (terminate)
      if (answers["1"] === "A1" || answers["1"] === "A2") {
        setTerminated(true);
        setCard({
          title: "Foundational Track",
          text: "At this moment, no AI/GenAI target role will be provided to you. We recommend you complete the foundational track first to gain basic knowledge and understanding of IT and AI.For further guidance or coaching, write to us at info@digiculum.com",
        });
        return;
      }

      // If Q2 = B6 AND Q5 = E1 -> VITA Creator
      if (currentAnswer === "B6" && answers["5"] === "E1") {
        showRoleCard("VITA Creator", "Your Target role is VITA Creator");
        return;
      }

      // If Q2 = B4 or B5 -> Domain Visionary (terminate)
      // if (currentAnswer === "B4" || currentAnswer === "B5") {
      //   showRoleCard(
      //     "Domain Visionary",
      //     "Assessment terminates here with recommended track: Domain Visionary."
      //   );
      //   return;
      // }
      if (currentAnswer === "B4" || currentAnswer === "B5") {
        // Instead of terminating now, mark it pending
        setPendingRole("Domain Visionary");
        setCurrent((c) => c + 1); // continue to next question
        return;
      }
    }

    // ---------- Q8 branching (domain expert question)
    // if (question.id === "8") {
    //   // If Q8 = Yes -> terminate with Domain Visionary
    //   if (currentAnswer === "H1") {
    //     showRoleCard(
    //       "Domain Visionary",
    //       "You chose to be a domain expert — recommended track: Domain Visionary."
    //     );
    //     return;
    //   }

    //   // If Q8 = No
    //   if (currentAnswer === "H2") {
    //     const q2 = answers["2"];
    //     const q5 = answers["5"];

    //     // 🔥 New rule: If Q2 ∈ {B1..B7 except B6} AND Q5 = E3 (Uncertain)
    //     if (["B1", "B2", "B3", "B4", "B5", "B7"].includes(q2) && q5 === "E3") {
    //       const q3 = answers["3"];
    //       const mapped = q3ToRole_A[q3];
    //       if (mapped) {
    //         showRoleCard(
    //           mapped,
    //           `Based on your Q3 selection (${q3}), your recommended role is: ${mapped}.`
    //         );
    //         return;
    //       }
    //     }

    //     // Existing rule: Q5 = E1 → go to specialized Q9.x
    //     if (q5 === "E1") {
    //       if (q2 === "B1") {
    //         setCurrent(questions.findIndex((q) => q.id === "9.2"));
    //         return;
    //       } else if (q2 === "B2") {
    //         setCurrent(questions.findIndex((q) => q.id === "9.5"));
    //         return;
    //       } else if (q2 === "B3") {
    //         setCurrent(questions.findIndex((q) => q.id === "9.3"));
    //         return;
    //       } else if (q2 === "B7") {
    //         setCurrent(questions.findIndex((q) => q.id === "9.4"));
    //         return;
    //       } else {
    //         setCurrent((c) => c + 1);
    //         return;
    //       }
    //     } else {
    //       // If Q5 !== E1 we simply continue
    //       setCurrent((c) => c + 1);
    //       return;
    //     }
    //   }
    // }
    // ---------- Q8 branching (domain expert question)
    // ---------- Q8 branching (domain expert question)
    if (question.id === "8") {
      // If Q8 = Yes -> terminate with Domain Visionary
      if (currentAnswer === "H1") {
        showRoleCard(
          "Domain Visionary",
          "You chose to be a domain expert — recommended track: Domain Visionary."
        );
        return;
      }

      // If Q8 = No
      if (currentAnswer === "H2") {
        const q2 = answers["2"];
        const q5 = answers["5"];

        // NEW RULE: If Q2 = B1..B7 except B6 AND Q5 = E3 (Uncertain) → map Q3 → Role
        if (["B1", "B2", "B3", "B4", "B5", "B7"].includes(q2) && q5 === "E3") {
          const q3 = answers["3"];
          const mapped = q3ToRole[q3]; // ✅ uses your existing mapping (C1..C12)
          if (mapped) {
            showRoleCard(
              mapped,
              `Based on your Q3 selection (${q3}), your recommended role is: ${mapped}.`
            );
            return;
          }
        }

        // Existing rule: Q5 = E1 → go to specialized Q9.x
        if (q5 === "E1") {
          if (q2 === "B1") {
            setCurrent(questions.findIndex((q) => q.id === "9.2"));
            return;
          } else if (q2 === "B2") {
            setCurrent(questions.findIndex((q) => q.id === "9.5"));
            return;
          } else if (q2 === "B3") {
            setCurrent(questions.findIndex((q) => q.id === "9.3"));
            return;
          } else if (q2 === "B7") {
            setCurrent(questions.findIndex((q) => q.id === "9.4"));
            return;
          } else {
            setCurrent((c) => c + 1);
            return;
          }
        } else {
          // If Q5 !== E1 we simply continue
          setCurrent((c) => c + 1);
          return;
        }
      }
    }

    // ---------- Q8 branching (domain expert question)
    if (question.id === "8") {
      // If Q8 = Yes -> terminate with Domain Visionary
      if (currentAnswer === "H1") {
        showRoleCard(
          "Domain Visionary",
          "You chose to be a domain expert — recommended track: Domain Visionary."
        );
        return;
      }

      // If Q8 = No -> decide which Q9.x to show (based on Q2 + Q5)
      if (currentAnswer === "H2") {
        const q2 = answers["2"];
        const q5 = answers["5"];

        // Only when Q2 ∈ {B1..B7} and Q5=E1 we route to specialized Q9.x per your last mapping
        if (q5 === "E1") {
          if (q2 === "B1") {
            setCurrent(questions.findIndex((q) => q.id === "9.2"));
            return;
          } else if (q2 === "B2") {
            setCurrent(questions.findIndex((q) => q.id === "9.5"));
            return;
          } else if (q2 === "B3") {
            setCurrent(questions.findIndex((q) => q.id === "9.3"));
            return;
          } else if (q2 === "B7") {
            setCurrent(questions.findIndex((q) => q.id === "9.4"));
            return;
          } else {
            // default: if Q2 is other values, continue to next question (or you can add extra mappings)
            setCurrent((c) => c + 1);
            return;
          }
        } else {
          // If Q5 !== E1 we simply continue
          setCurrent((c) => c + 1);
          return;
        }
      }
    }
    // ---------- Q5-level checks (stay in current role?)
    if (question.id === "5") {
      const q2 = answers["2"];
      const q5 = currentAnswer; // this is the answer for Q5

      if (q2 === "B6" && q5 === "E1") {
        showRoleCard(
          "VITA Creator",
          "Assessment terminates here with recommended role: VITA Creator."
        );
        return;
      }
    }
    // After moving to next question
    if (question.id === "7" && pendingRole) {
      showRoleCard(
        pendingRole,
        "Based on your responses, your recommended track is Domain Visionary."
      );
      setPendingRole(null); // clear
      return;
    }

    // ---------- Q9.1: if user picks a role -> stop or "Uncertain" fallback to next
    // ---------- Q9.1: if user picks a role -> stop or "Uncertain" fallback
    if (question.id === "9.1") {
      if (!currentAnswer) return;

      if (currentAnswer === "I11") {
        // Uncertain (option 11) -> fallback similar to Q9.3
        const q3 = answers["3"];
        const mapped = q3ToRole[q3];
        if (mapped) {
          showRoleCard(
            mapped,
            `Fallback from Q9.1 uncertain — mapped from your Q3 (${q3}) to ${mapped}.`
          );
          return;
        } else {
          // If Q3 empty, move to next question or handle another fallback
          setCurrent((c) => c + 1);
          return;
        }
      } else {
        // definite role selected
        const opt = question.options?.find((o) => o.value === currentAnswer);
        //   showRoleCard(opt?.label ?? "Selected Role");
        const cleanLabel = opt?.label.replace(/^\d+(\.\d+)?\)\s*/, ""); // remove number prefix
        showRoleCard(cleanLabel ?? "Selected Role");

        return;
      }
    }

    // ---------- Q9.2 behavior:
    // Q9.2 options are role choices (J1..J5) with J6 = Uncertain.
    // If user picks J1..J5 -> stop and show that role; if J6 -> fall back to Q3->mapping.
    //     if (question.id === "9.2") {
    //       if (!currentAnswer) return;
    //       if (currentAnswer === "J6") {
    //         // Uncertain -> check Q3 mapping
    //         const q3 = answers["3"];
    //         const mapped = q3ToRole[q3];
    //         if (mapped) {
    //           showRoleCard(
    //             mapped,
    //             `Fallback from Q9.2 uncertain — mapped from your Q3 (${q3}) to ${mapped}.`
    //           );
    //           return;
    //         } else {
    //           // If Q3 empty, move to next question (ask Q9.5 or stop)
    //           setCurrent((c) => c + 1);
    //           return;
    //         }
    //       } else {
    //         // definite role selected
    //         const opt = question.options?.find((o) => o.value === currentAnswer);
    //         showRoleCard(opt?.label ?? "Selected Role");
    //         return;
    //       }
    //     }
    // ---------- Q9.2 behavior:
    if (question.id === "9.2") {
      if (!currentAnswer) return;

      if (currentAnswer === "J7") {
        // Uncertain (option 7) -> fallback similar to Q9.3 / Q9.1
        const q3 = answers["3"];
        const mapped = q3ToRole[q3];
        if (mapped) {
          showRoleCard(
            mapped,
            `Fallback from Q9.2 uncertain — mapped from your Q3 (${q3}) to ${mapped}.`
          );
          return;
        } else {
          // If Q3 empty, move to next question or handle another fallback
          setCurrent((c) => c + 1);
          return;
        }
      } else {
        // definite role selected
        const opt = question.options?.find((o) => o.value === currentAnswer);
        //showRoleCard(opt?.label ?? "Selected Role");
        const cleanLabel = opt?.label.replace(/^\d+(\.\d+)?\)\s*/, ""); // remove number prefix
        showRoleCard(cleanLabel ?? "Selected Role");

        return;
      }
    }

    // ---------- Q9.3 behavior:
    // If K1..K5 -> stop and show selected role. If K6 (Uncertain) -> fallback to Q3 mapping.
    if (question.id === "9.3") {
      if (!currentAnswer) return;
      if (currentAnswer === "K6") {
        const q3 = answers["3"];
        const mapped = q3ToRole[q3];
        if (mapped) {
          showRoleCard(
            mapped,
            `Fallback from Q9.3 uncertain — mapped from your Q3 (${q3}) to ${mapped}.`
          );
          return;
        } else {
          setCurrent((c) => c + 1);
          return;
        }
      } else {
        const opt = question.options?.find((o) => o.value === currentAnswer);
        //showRoleCard(opt?.label ?? "Selected Role");

        const cleanLabel = opt?.label.replace(/^\d+(\.\d+)?\)\s*/, "");
        showRoleCard(cleanLabel ?? "Selected Role");

        return;
      }
    }

    // ---------- Q9.4 behavior (major -> role mapping) -> always stop
    if (question.id === "9.4") {
      if (!currentAnswer) return;
      const role = majorToRole_Q94[currentAnswer];
      if (role) {
        showRoleCard(role, `Mapped from your major selection to ${role}.`);
        return;
      } else {
        // if somehow undefined, fallback to Q3 mapping
        const q3 = answers["3"];
        const mapped = q3ToRole[q3];
        if (mapped) {
          showRoleCard(mapped, `Fallback to Q3 mapping => ${mapped}.`);
          return;
        } else {
          setCurrent((c) => c + 1);
          return;
        }
      }
    }

    // ---------- Q9.5 behavior (education degree -> role mapping) -> always stop
    if (question.id === "9.5") {
      if (!currentAnswer) return;
      const role = majorToRole_Q95[currentAnswer];
      if (role) {
        showRoleCard(role, `Mapped from your education selection to ${role}.`);
        return;
      } else {
        // fallback to Q3 mapping
        const q3 = answers["3"];
        const mapped = q3ToRole[q3];
        if (mapped) {
          showRoleCard(mapped, `Fallback to Q3 mapping => ${mapped}.`);
          return;
        } else {
          setCurrent((c) => c + 1);
          return;
        }
      }
    }

    // default: go to next question
    setCurrent((c) => c + 1);
  };
  const handleBack = () => {
    setHistory((prev) => {
      if (prev.length === 0) return prev; // no previous question
      const lastQ = prev[prev.length - 1];
      setCurrent(questions.findIndex((q) => q.id === lastQ));
      return prev.slice(0, -1); // remove last
    });
  };

  const handleExit = () => {
    window.location.href = "/";
  };

  const isNextDisabled =
    !currentAnswer ||
    (question.options?.find((o) => o.value === currentAnswer)?.requireText &&
      !currentDetail?.trim());

  // Card Back handler — bring user back one step so they can change answers
  //   const handleCardBack = () => {
  //     setTerminated(false);
  //     setCard(null);
  //     // move back to previous question index where decision was made.
  //     // For safety, move back one question unless we can detect a more appropriate previous.
  //     setCurrent((c) => (c > 0 ? c - 1 : 0));
  //   };

  // const handleCardBack = () => {
  //   setTerminated(false);
  //   setCard(null);

  //   setHistory((prev) => {
  //     if (prev.length === 0) {
  //       setCurrent(0);
  //       return prev;
  //     }
  //     const lastQ = prev[prev.length - 1];
  //     setCurrent(questions.findIndex((q) => q.id === lastQ));
  //     return prev.slice(0, -1); // remove last
  //   });
  // };
  // const handleBack = () => {
  //   setHistory((prev) => {
  //     if (prev.length === 0) return prev; // no previous question
  //     const lastQ = prev[prev.length - 1];
  //     setCurrent(questions.findIndex((q) => q.id === lastQ));
  //     return prev.slice(0, -1); // remove last
  //   });
  // };

  return (
    <div className={classes.container}>
      {/* <h2 className={classes.title}>Question {question.id}</h2>
      <p className={classes.questionText}>{question.text}</p> */}
      {!terminated ? (
        <>
          <h2 className={classes.title}>Question {question.id}</h2>
          <p className={classes.questionText}>{question.text}</p>
        </>
      ) : (
        <>
          <h2 className={classes.title}>Reskilling Assessment Finished</h2>
          <p className={classes.questionText}>
            Thank you for completing the assessment. Your recommended target
            role is shown below.
          </p>
        </>
      )}

      {!terminated && question.options && (
        <div className={question.id === "7" ? classes.scrollBox : ""}>
          {question.options.map((opt) => (
            <div key={opt.value}>
              <label
                className={`${classes.option} ${
                  opt.disabled ? classes.disabledOption : ""
                }`}
              >
                <input
                  type="radio"
                  name={`q-${question.id}`}
                  value={opt.value}
                  checked={answers[question.id] === opt.value}
                  onChange={(e) => handleAnswer(e.target.value)}
                  disabled={opt.disabled}
                />
                <span>{opt.label}</span>
              </label>

              {opt.requireText && answers[question.id] === opt.value && (
                <input
                  type="text"
                  placeholder="Please specify..."
                  className={classes.textInput}
                  value={details[question.id] || ""}
                  onChange={(e) => handleDetail(e.target.value)}
                />
              )}
            </div>
          ))}
        </div>
      )}

      {card && (
        <div className={classes.card}>
          <p className={classes.cardTitle}>{card.title}</p>
          <p className={classes.cardText}>{card.text}</p>

          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "1rem",
              gap: "0.5rem",
            }}
          >
            {/* Back button to edit answers */}
            {/* <button
              onClick={handleCardBack}
              className={`${classes.button} ${classes.prevButton}`}
            >
              Back
            </button> */}
            {/* Exit button to go to /profile */}
            {/* <button
              onClick={() => (window.location.href = "/profile")}
              className={`${classes.button} ${classes.nextButton}`}
            >
              Exit
            </button> */}

            <button
              onClick={() => {
                if (!user?.email) return;
                // Navigate to Profile page and send the role as state
                console.log("➡️ Sending targetRole:", card?.title);
                navigate(`/profile/${user.email}`, {
                  state: { targetRole: card?.title },
                });
              }}
              className={`${classes.button} ${classes.nextButton}`}
            >
              Exit
            </button>
          </div>
        </div>
      )}

      {!terminated && (
        <div className={classes.nav}>
          <button
            onClick={handleBack}
            className={`${classes.button} ${classes.prevButton}`}
            disabled={current === 0}
          >
            Back
          </button>

          <button
            onClick={handleExit}
            className={`${classes.button} ${classes.prevButton}`}
          >
            Exit
          </button>

          <button
            onClick={goNext}
            className={`${classes.button} ${classes.nextButton}`}
            disabled={isNextDisabled}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
