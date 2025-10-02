/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { getProfile } from "../../apis/auth";
//import { AuthContext } from "../../context/AuthContext";
import { createUseStyles } from "react-jss";
import Navbar from "../home/homechildComponents/Navbar";

const useStyles = createUseStyles({
  container: {
    marginTop: "100px",
    height: "100vh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  topSection: {
    backgroundColor: "#6a0dad",
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "60px 20px",
    textAlign: "center",
  },
  greeting: { fontSize: "2.5rem", margin: "0 0 10px 0", fontWeight: "bold" },
  email: { fontSize: "1.2rem", margin: "0", opacity: 0.9 },
  bottomSection: {
    flex: 1,
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    padding: "20px",
  },
  buttonGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "12px",
    width: "100%",
    maxWidth: "900px",
    "@media (max-width: 1024px)": {
      gridTemplateColumns: "repeat(2, 1fr)", // tablets
    },
    "@media (max-width: 600px)": {
      gridTemplateColumns: "1fr", // phones → vertical
    },
  },
  button: {
    padding: "15px 20px",
    fontSize: "1rem",
    borderRadius: "8px",
    border: "none",
    fontWeight: "bold",
    transition: "transform 0.2s",
    width: "100%",
    "&:hover": { transform: "scale(1.05)" },
  },
  bigButton: {
    maxWidth: "400px", // keeps it neat on desktop
    width: "100%", // fills space on mobile
    margin: "100px 0",
    fontSize: "1.2rem",
    padding: "18px 24px",
    backgroundColor: "#6a0dad",
    color: "#fff",
    cursor: "pointer",
  },
});

const roles = [
  {
    name: "Fine Tuner",
    link: "https://reskill.digiculum.com/courses/Fine-Tuner-68d7e97f4ef2d036835b31b7",
  },
  {
    name: "Agent Architect",
    link: "https://reskill.digiculum.com/courses/Agent-Architect-68d7ea4517fe8b631668bdb8",
  },
  {
    name: "Data Annotator",
    link: "https://reskill.digiculum.com/courses/Data-Annotator-68d7eab774cfc34612ee1f1a",
  },
  {
    name: "DAC Consultant",
    link: "https://reskill.digiculum.com/courses/DAC-Consultant-68d7ead516db9f465f7edf20",
  },
  {
    name: "Sales Advocate",
    link: "https://reskill.digiculum.com/courses/Sales-Advocate-68d7eb234b4f7668c01c2c14",
  },
  {
    name: "Compliance Guardian",
    link: "https://reskill.digiculum.com/courses/Compliance-Guardian-68d7eb4d96afaa2133af2122",
  },
  {
    name: "Security Specialist",
    link: "https://reskill.digiculum.com/courses/Security-Specialist-68d7ebe2ddafb77e68e9a571",
  },
  {
    name: "AI Executive",
    link: "https://reskill.digiculum.com/courses/AI-Executive-68d7ebfd14701e6af8167004",
  },
  {
    name: "Program Overseer",
    link: "https://reskill.digiculum.com/courses/Program-Overseer-68d7ecc896afaa2133af2186",
  },
  {
    name: "Infrastructure Catalyst",
    link: "https://reskill.digiculum.com/courses/Infrastructure-Catalyst-68d7ece5c0c04119ff3d2db9",
  },
  {
    name: "VITA Creator",
    link: "https://reskill.digiculum.com/courses/VITA-Creator-68d7ea61be54aa2549953fe9",
  },
  {
    name: "Domain Visionary",
    link: "https://reskill.digiculum.com/courses/Domain-Visionary-68d7eb6e865e214e68a24356",
  },
  {
    name: "Foundational Track",
    link: "https://reskill.digiculum.com/courses/Foundational-Track-68d82167569dd422ebd2144d",
  },
];

const Profile: React.FC = () => {
  const classes = useStyles();
  const { email } = useParams<{ email: string }>();
  const [_profileMessage, setProfileMessage] = useState("");
  const [targetRole, setTargetRole] = useState<string | null>(null);

  const location = useLocation();
  const navigate = useNavigate();

  // 🔹 On mount, check if role already saved
  useEffect(() => {
    const savedRole = localStorage.getItem("targetRole");
    if (savedRole) {
      setTargetRole(savedRole);
    } else {
      const state = location.state as { targetRole?: string } | undefined;
      if (state?.targetRole) {
        setTargetRole(state.targetRole);
        localStorage.setItem("targetRole", state.targetRole);
      }
    }
  }, [location.state]);

  useEffect(() => {
    const fetchProfile = async () => {
      if (email) {
        try {
          const res = await getProfile(email);
          setProfileMessage(res.data.message);
        } catch (err: any) {
          setProfileMessage(
            err.response?.data?.message || "Error fetching profile"
          );
        }
      }
    };
    fetchProfile();
  }, [email]);

  const handleAssessment = () => navigate("/assessments");

  return (
    <>
      <Navbar />
      <div className={classes.container}>
        <div className={classes.topSection}>
          <h1 className={classes.greeting}>Hello</h1>
          {/* {email && <p className={classes.email}>{email}</p>}
          {_profileMessage && <p>{_profileMessage}</p>} */}
        </div>

        <div className={classes.bottomSection}>
          {!targetRole ? (
            <>
              <p>
                You will be provided a set of questions. Based on the response
                you provide, you shall get a target AI role from a set of 12 new
                AI/GenAI roles. Note that this version 1.0 of the reskilling
                assessment maps you to one of the 12 new AI/GenAI roles. In the
                future versions, we shall add sub-roles, skills and competencies
                to it.
              </p>
              <button className={classes.bigButton} onClick={handleAssessment}>
                Take Assessment
              </button>
            </>
          ) : (
            <>
              <p>
                🎉 You’ve been mapped to a role! Click your role button below to
                continue:
              </p>
              <div className={classes.buttonGrid}>
                {roles.map((role) => {
                  const isActive = role.name === targetRole;
                  return (
                    <button
                      key={role.name}
                      className={classes.button}
                      style={{
                        backgroundColor: isActive ? "#6a0dad" : "#ccc",
                        color: isActive ? "#fff" : "#666",
                        cursor: isActive ? "pointer" : "not-allowed",
                      }}
                      disabled={!isActive}
                      onClick={() => {
                        if (isActive && role.link) {
                          window.open(role.link, "_blank");
                        }
                      }}
                    >
                      {role.name}
                    </button>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Profile;
