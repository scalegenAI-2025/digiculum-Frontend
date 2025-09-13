"use client";
import { useState } from "react";
import { createUseStyles } from "react-jss";

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

/*
  Q9.4 and Q9.5 major->role mapping (stops immediately)
  Q9.4: L1..L8
  Q9.5: M1..M7
*/
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
    text: "Q.1 Rate your current AI/GenAI competence level on a scale of 1 to 10",
    options: [
      { value: "A1", label: "Nil (No IT skills, no experience with AI/GenAI)" },
      {
        value: "A2",
        label: "Remarkably low (No IT skills, minimal AI exposure)",
      },
      {
        value: "A3",
        label: "Very low (Basic computer skills, no AI experience)",
      },
      {
        value: "A4",
        label: "Low (Preliminary IT skills, some AI understanding)",
      },
      {
        value: "A5",
        label: "Lower Moderate (Moderate IT skills, limited AI knowledge)",
      },
      {
        value: "A6",
        label: "Mid-Moderate (Can use ChatGPT but no deep AI knowledge)",
      },
      {
        value: "A7",
        label: "Upper-Moderate (Clear differentiation of AI/ML/DL concepts)",
      },
      {
        value: "A8",
        label: "High (Architect IT solutions, good AI theory knowledge)",
      },
      {
        value: "A9",
        label: "Very High (Can confidently develop AI solutions)",
      },
      {
        value: "A10",
        label: "Superhuman (Grayed out fictional)",
        disabled: true,
      },
    ],
  },

  // Q2
  {
    id: "2",
    text: "Q.2 Which of the following describes your current role or background?",
    options: [
      {
        value: "B1",
        label: "Technical/IT-related (Please specify)",
        requireText: true,
      },
      {
        value: "B2",
        label: "Non-technical/non-IT related (Please specify)",
        requireText: true,
      },
      {
        value: "B3",
        label: "Business/Management/Consulting (Please specify)",
        requireText: true,
      },
      {
        value: "B4",
        label: "Academic/Research (Please specify)",
        requireText: true,
      },
      {
        value: "B5",
        label: "Entrepreneur/Startup Founder (Please specify)",
        requireText: true,
      },
      {
        value: "B6",
        label: "Creative/Design/Fine-arts (Please specify)",
        requireText: true,
      },
      { value: "B7", label: "Student (Please specify)", requireText: true },
    ],
  },

  // Q3-Q7 (common)
  {
    id: "3",
    text: "Q.3 Which of the following describes your function/team?",
    options: [
      { value: "C1", label: "IT" },
      { value: "C2", label: "Data and AI" },
      { value: "C3", label: "Marketing" },
      { value: "C4", label: "Sales" },
      { value: "C5", label: "Legal" },
      { value: "C6", label: "Product Development" },
      { value: "C7", label: "Project Management" },
      { value: "C8", label: "Business Operations/Service Delivery" },
      { value: "C9", label: "HR" },
      { value: "C10", label: "Finance" },
      { value: "C11", label: "Executives/Leadership" },
      { value: "C12", label: "None (Please specify)", requireText: true },
    ],
  },
  {
    id: "4",
    text: "Q.4 How do you rate your skills or competencies in your current role?",
    options: [
      { value: "D1", label: "Very high" },
      { value: "D2", label: "High" },
      { value: "D3", label: "Medium" },
      { value: "D4", label: "Low" },
      { value: "D5", label: "Very Low" },
      { value: "D6", label: "Not applicable" },
    ],
  },
  {
    id: "5",
    text: "Q.5 Would you like to stay in your current role?",
    options: [
      { value: "E1", label: "Yes" },
      { value: "E2", label: "No" },
      { value: "E3", label: "Uncertain" },
    ],
  },
  {
    id: "6",
    text: "Q.6 To what extent is your current role impacted or will be impacted by AI?",
    options: [
      { value: "F1", label: "Completely eliminated by AI" },
      { value: "F2", label: "Will continue but high AI impact" },
      { value: "F3", label: "Moderate AI impact" },
      { value: "F4", label: "Low AI impact" },
      { value: "F5", label: "No AI impact" },
      { value: "F6", label: "Not sure" },
    ],
  },
  {
    id: "7",
    text: "Q.7 Please select your industry",
    options: [
      { value: "G1", label: "Agriculture, Forestry, Fishing & Mining" },
      { value: "G2", label: "Automotive" },
      { value: "G3", label: "Aerospace & Defense" },
      { value: "G4", label: "Biotechnology / Life Sciences" },
      { value: "G5", label: "Chemicals & Materials" },
      { value: "G6", label: "Construction & Real Estate" },
      { value: "G7", label: "Consumer Goods / FMCG" },
      { value: "G8", label: "Education & Training" },
      { value: "G9", label: "Energy & Utilities" },
      { value: "G10", label: "Entertainment, Media & Publishing" },
      { value: "G11", label: "Financial Services & Banking" },
      { value: "G12", label: "Government & Public Sector" },
      { value: "G13", label: "Healthcare & Pharmaceuticals" },
      { value: "G14", label: "Hospitality, Travel & Tourism" },
      { value: "G15", label: "Insurance" },
      { value: "G16", label: "Legal Services" },
      { value: "G17", label: "Logistics, Supply Chain & Transportation" },
      { value: "G18", label: "Manufacturing & Industrial" },
      { value: "G19", label: "Marketing, Advertising & PR" },
      { value: "G20", label: "Nonprofit / NGOs / Social Impact" },
      { value: "G21", label: "Professional Services & Consulting" },
      { value: "G22", label: "Retail & E-commerce" },
      { value: "G23", label: "Software & IT Services" },
      { value: "G24", label: "Telecommunications" },
      { value: "G25", label: "Venture Capital & Private Equity" },
      { value: "G26", label: "Wholesale & Distribution" },
      { value: "G27", label: "Other (please specify)", requireText: true },
      { value: "G28", label: "Not applicable" },
    ],
  },

  // Q8
  {
    id: "8",
    text: "Q.8 Would you like to be a domain expert in your industry?",
    options: [
      { value: "H1", label: "Yes" },
      { value: "H2", label: "No" },
    ],
  },

  // Q9.1 (role selection 1-10 else uncertain)
  {
    id: "9.1",
    text: "Q.9.1 If you are absolutely certain and clear about the new AI/GenAI role you would like to move to then select the role from the options 1 to 10, else select option 11 uncertain",
    options: [
      { value: "I1", label: "Fine Tuner" },
      { value: "I2", label: "Agent Architect" },
      { value: "I3", label: "Data Annotator" },
      { value: "I4", label: "DAC Consultant" },
      { value: "I5", label: "Sales Advocate" },
      { value: "I6", label: "Compliance Guardian" },
      { value: "I7", label: "Security Specialist" },
      { value: "I8", label: "AI Executive" },
      { value: "I9", label: "Program Overseer" },
      { value: "I10", label: "Infrastructure Catalyst" },
      { value: "I11", label: "Uncertain" },
    ],
  },

  // Q9.2 (role options / uncertain fallback to Q3 mapping)
  {
    id: "9.2",
    text: "Q.9.2 If you are absolutely certain and clear about the new AI/GenAI role then select the role from the options 1 to 6 else select option 7 uncertain",
    options: [
      { value: "J1", label: "Agent Architect" },
      { value: "J2", label: "Data Annotator" },
      { value: "J3", label: "DAC Consultant" },
      { value: "J4", label: "Security Specialist" },
      { value: "J5", label: "Infrastructure Catalyst" },
      { value: "J6", label: "Uncertain" },
    ],
  },

  // Q9.3
  {
    id: "9.3",
    text: "Q.9.3 If you are absolutely certain and clear about the new AI/GenAI role then select the role from the options 1 to 5 else select option 6 uncertain",
    options: [
      { value: "K1", label: "DAC Consultant" },
      { value: "K2", label: "Sales Advocate" },
      { value: "K3", label: "Compliance Guardian" },
      { value: "K4", label: "AI Executive" },
      { value: "K5", label: "Program Overseer" },
      { value: "K6", label: "Uncertain" },
    ],
  },

  // Q9.4 (major -> role)
  {
    id: "9.4",
    text: "Q.9.4 Which of the following best describes your major?",
    options: [
      { value: "L1", label: "Technical/STEM" },
      { value: "L2", label: "Business & Management" },
      { value: "L3", label: "Social Sciences" },
      { value: "L4", label: "Humanities" },
      { value: "L5", label: "Creativity & Design" },
      { value: "L6", label: "Health & Life Sciences" },
      { value: "L7", label: "Law & Policy" },
      { value: "L8", label: "Education" },
    ],
  },

  // Q9.5 (education degree/major -> role)
  {
    id: "9.5",
    text: "Q.9.5 Which of the following best describes your education degree/major?",
    options: [
      { value: "M1", label: "Business & Management" },
      { value: "M2", label: "Social Sciences" },
      { value: "M3", label: "Humanities" },
      { value: "M4", label: "Creativity & Design" },
      { value: "M5", label: "Health & Life Sciences" },
      { value: "M6", label: "Law & Policy" },
      { value: "M7", label: "Education" },
    ],
  },
];

export default function Assessment() {
  const classes = useStyles();

  // component state
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [details, setDetails] = useState<Record<string, string>>({});
  const [terminated, setTerminated] = useState(false);
  const [card, setCard] = useState<{ title: string; text: string } | null>(
    null
  );

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
    // ---------- Q2-level checks (these check Q1 + Q2 + Q5 where needed)
    if (question.id === "2") {
      // If Q1 was A1 or A2 -> Foundational track recommended (terminate)
      if (answers["1"] === "A1" || answers["1"] === "A2") {
        setTerminated(true);
        setCard({
          title: "Foundational Track Recommended",
          text: "At this moment, no AI/GenAI target role will be provided to you. We recommend you complete the foundational track first to gain basic knowledge and understanding of IT and AI. For further guidance or coaching, click the button below.",
        });
        return;
      }

      // If Q2 = B6 AND Q5 = E1 -> VITA Creator
      if (currentAnswer === "B6" && answers["5"] === "E1") {
        showRoleCard(
          "VITA Creator",
          "Assessment terminates here with recommended role: VITA Creator."
        );
        return;
      }

      // If Q2 = B4 or B5 -> Domain Visionary (terminate)
      if (currentAnswer === "B4" || currentAnswer === "B5") {
        showRoleCard(
          "Domain Visionary",
          "Assessment terminates here with recommended track: Domain Visionary."
        );
        return;
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

    // ---------- Q9.1: if user picks a role -> stop or "Uncertain" fallback to next
    if (question.id === "9.1") {
      if (currentAnswer && currentAnswer !== "I11") {
        // any definite choice maps directly to role label
        const opt = question.options?.find((o) => o.value === currentAnswer);
        showRoleCard(opt?.label ?? "Selected Role");
        return;
      }
      // if "Uncertain" (I11) -> fall through to next question (or fallback)
    }

    // ---------- Q9.2 behavior:
    // Q9.2 options are role choices (J1..J5) with J6 = Uncertain.
    // If user picks J1..J5 -> stop and show that role; if J6 -> fall back to Q3->mapping.
    if (question.id === "9.2") {
      if (!currentAnswer) return;
      if (currentAnswer === "J6") {
        // Uncertain -> check Q3 mapping
        const q3 = answers["3"];
        const mapped = q3ToRole[q3];
        if (mapped) {
          showRoleCard(
            mapped,
            `Fallback from Q9.2 uncertain — mapped from your Q3 (${q3}) to ${mapped}.`
          );
          return;
        } else {
          // If Q3 empty, move to next question (ask Q9.5 or stop)
          setCurrent((c) => c + 1);
          return;
        }
      } else {
        // definite role selected
        const opt = question.options?.find((o) => o.value === currentAnswer);
        showRoleCard(opt?.label ?? "Selected Role");
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
        showRoleCard(opt?.label ?? "Selected Role");
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

  const isNextDisabled =
    !currentAnswer ||
    (question.options?.find((o) => o.value === currentAnswer)?.requireText &&
      !currentDetail?.trim());

  // Card Back handler — bring user back one step so they can change answers
  const handleCardBack = () => {
    setTerminated(false);
    setCard(null);
    // move back to previous question index where decision was made.
    // For safety, move back one question unless we can detect a more appropriate previous.
    setCurrent((c) => (c > 0 ? c - 1 : 0));
  };

  return (
    <div className={classes.container}>
      <h2 className={classes.title}>Question {question.id}</h2>
      <p className={classes.questionText}>{question.text}</p>

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
            }}
          >
            <button
              onClick={handleCardBack}
              className={`${classes.button} ${classes.prevButton}`}
            >
              Back
            </button>
          </div>
        </div>
      )}

      {!terminated && (
        <div className={classes.nav}>
          <button
            onClick={() => setCurrent((c) => (c > 0 ? c - 1 : 0))}
            className={`${classes.button} ${classes.prevButton}`}
            disabled={current === 0}
          >
            Back
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
