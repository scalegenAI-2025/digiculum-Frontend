/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useContext, useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { getProfile } from "../../apis/auth";
import { AuthContext } from "../../context/AuthContext";
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
  },
  greeting: { fontSize: "4rem", margin: "0 0 10px 0", fontWeight: "bold" },
  email: { fontSize: "1.5rem", margin: "0", opacity: 0.9 },
  bottomSection: {
    flex: 1,
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  buttonGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "12px",
    padding: "20px",
  },
  button: {
    padding: "15px 30px",
    fontSize: "1.2rem",
    borderRadius: "8px",
    border: "none",
    fontWeight: "bold",
    transition: "transform 0.2s",
    "&:hover": { transform: "scale(1.05)" },
  },
});

const roles = [
  { name: "Fine Tuner", link: "/fine-tuner" },
  { name: "Agent Architect", link: "/agent-architect" },
  { name: "Data Annotator", link: "/data-annotator" },
  { name: "DAC Consultant", link: "/dac-consultant" },
  { name: "Sales Advocate", link: "/sales-advocate" },
  { name: "Compliance Guardian", link: "/compliance-guardian" },
  { name: "Security Specialist", link: "/security-specialist" },
  { name: "AI Executive", link: "/ai-executive" },
  { name: "Program Overseer", link: "/program-overseer" },
  { name: "Infrastructure Catalyst", link: "/infrastructure-catalyst" },
  { name: "VITA Creator", link: "/vita-creator" },
  { name: "Domain Visionary", link: "/domain-visionary" },
  { name: "Foundational Track", link: "/foundational-track" },
];

const Profile: React.FC = () => {
  const classes = useStyles();
  const { email } = useParams<{ email: string }>();
  const { user } = useContext(AuthContext);
  const [profileMessage, setProfileMessage] = useState("");
  const [targetRole, setTargetRole] = useState<string | null>(null);

  const location = useLocation();
  const navigate = useNavigate();

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

  // Get targetRole from navigation state
  useEffect(() => {
    const state = location.state as { targetRole?: string } | undefined;
    if (state?.targetRole) setTargetRole(state.targetRole);
  }, [location.state]);

  const handleAssessment = () => navigate("/assessments");

  return (
    <>
      <Navbar />
      <div className={classes.container}>
        <div className={classes.topSection}>
          <h1 className={classes.greeting}>Hiii</h1>
          <p className={classes.email}>{user?.email}</p>
          {/* <p>{profileMessage}</p> */}
        </div>

        <div className={classes.bottomSection}>
          {!targetRole ? (
            <button className={classes.button} onClick={handleAssessment}>
              Take Assessment
            </button>
          ) : (
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
                    onClick={() => isActive && navigate(role.link)}
                  >
                    {role.name}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Profile;
