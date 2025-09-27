/* eslint-disable react-hooks/exhaustive-deps */
// /* eslint-disable @typescript-eslint/no-unused-vars */
// /* eslint-disable @typescript-eslint/no-explicit-any */
// import React, { useContext, useEffect, useState } from "react";
// import { useParams, useLocation, useNavigate } from "react-router-dom";
// import { getProfile } from "../../apis/auth";
// import { AuthContext } from "../../context/AuthContext";
// import { createUseStyles } from "react-jss";
// import Navbar from "../home/homechildComponents/Navbar";

// const useStyles = createUseStyles({
//   container: {
//     marginTop: "100px",
//     height: "100vh",
//     width: "100%",
//     display: "flex",
//     flexDirection: "column",
//   },
//   topSection: {
//     backgroundColor: "#6a0dad",
//     color: "white",
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//     padding: "60px 20px",
//   },
//   greeting: { fontSize: "4rem", margin: "0 0 10px 0", fontWeight: "bold" },
//   email: { fontSize: "1.5rem", margin: "0", opacity: 0.9 },
//   bottomSection: {
//     flex: 1,
//     backgroundColor: "white",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     flexDirection: "column",
//   },
//   buttonGrid: {
//     display: "grid",
//     gridTemplateColumns: "repeat(4, 1fr)",
//     gap: "12px",
//     padding: "20px",
//   },
//   button: {
//     padding: "15px 30px",
//     fontSize: "1.2rem",
//     borderRadius: "8px",
//     border: "none",
//     fontWeight: "bold",
//     transition: "transform 0.2s",
//     "&:hover": { transform: "scale(1.05)" },
//   },
// });

// const roles = [
//   { name: "Fine Tuner", link: "/fine-tuner" },
//   { name: "Agent Architect", link: "/agent-architect" },
//   { name: "Data Annotator", link: "/data-annotator" },
//   { name: "DAC Consultant", link: "/dac-consultant" },
//   { name: "Sales Advocate", link: "/sales-advocate" },
//   { name: "Compliance Guardian", link: "/compliance-guardian" },
//   { name: "Security Specialist", link: "/security-specialist" },
//   { name: "AI Executive", link: "/ai-executive" },
//   { name: "Program Overseer", link: "/program-overseer" },
//   { name: "Infrastructure Catalyst", link: "/infrastructure-catalyst" },
//   { name: "VITA Creator", link: "/vita-creator" },
//   { name: "Domain Visionary", link: "/domain-visionary" },
//   { name: "Foundational Track", link: "/foundational-track" },
// ];

// const Profile: React.FC = () => {
//   const classes = useStyles();
//   const { email } = useParams<{ email: string }>();
//   const { user } = useContext(AuthContext);
//   const [_profileMessage, setProfileMessage] = useState("");
//   const [targetRole, setTargetRole] = useState<string | null>(null);

//   const location = useLocation();
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchProfile = async () => {
//       if (email) {
//         try {
//           const res = await getProfile(email);
//           setProfileMessage(res.data.message);
//         } catch (err: any) {
//           setProfileMessage(
//             err.response?.data?.message || "Error fetching profile"
//           );
//         }
//       }
//     };
//     fetchProfile();
//   }, [email]);

//   // Get targetRole from navigation state
//   useEffect(() => {
//     const state = location.state as { targetRole?: string } | undefined;
//     if (state?.targetRole) setTargetRole(state.targetRole);
//   }, [location.state]);

//   const handleAssessment = () => navigate("/assessments");

//   return (
//     <>
//       <Navbar />
//       <div className={classes.container}>
//         <div className={classes.topSection}>
//           <h1 className={classes.greeting}>Hiii</h1>
//           <p className={classes.email}>{user?.email}</p>
//           {/* <p>{profileMessage}</p> */}
//         </div>

//         <div className={classes.bottomSection}>
//           {!targetRole ? (
//             <button className={classes.button} onClick={handleAssessment}>
//               Take Assessment
//             </button>
//           ) : (
//             <div className={classes.buttonGrid}>
//               {roles.map((role) => {
//                 const isActive = role.name === targetRole;
//                 return (
//                   <button
//                     key={role.name}
//                     className={classes.button}
//                     style={{
//                       backgroundColor: isActive ? "#6a0dad" : "#ccc",
//                       color: isActive ? "#fff" : "#666",
//                       cursor: isActive ? "pointer" : "not-allowed",
//                     }}
//                     disabled={!isActive}
//                     onClick={() => isActive && navigate(role.link)}
//                   >
//                     {role.name}
//                   </button>
//                 );
//               })}
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Profile;
import React, { useContext, useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { createUseStyles } from "react-jss";
import Navbar from "../home/homechildComponents/Navbar";

const useStyles = createUseStyles({
  container: {
    marginTop: "100px",
    minHeight: "100vh",
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
  {
    name: "Fine Tuner",
    link: "/https://reskill.digiculum.com/courses/Fine-Tuner-68d7e97f4ef2d036835b31b7",
  },
  {
    name: "Agent Architect",
    link: "/https://reskill.digiculum.com/courses/Agent-Architect-68d7ea4517fe8b631668bdb8",
  },
  {
    name: "Data Annotator",
    link: "/https://reskill.digiculum.com/courses/Data-Annotator-68d7eab774cfc34612ee1f1a",
  },
  {
    name: "DAC Consultant",
    link: "/https://reskill.digiculum.com/courses/DAC-Consultant-68d7ead516db9f465f7edf20",
  },
  {
    name: "Sales Advocate",
    link: "/https://reskill.digiculum.com/courses/Sales-Advocate-68d7eb234b4f7668c01c2c14",
  },
  {
    name: "Compliance Guardian",
    link: "/https://reskill.digiculum.com/courses/Compliance-Guardian-68d7eb4d96afaa2133af2122",
  },
  {
    name: "Security Specialist",
    link: "/https://reskill.digiculum.com/courses/Security-Specialist-68d7ebe2ddafb77e68e9a571",
  },
  {
    name: "AI Executive",
    link: "/https://reskill.digiculum.com/courses/AI-Executive-68d7ebfd14701e6af8167004",
  },
  {
    name: "Program Overseer",
    link: "/https://reskill.digiculum.com/courses/Program-Overseer-68d7ecc896afaa2133af2186",
  },
  {
    name: "Infrastructure Catalyst",
    link: "/https://reskill.digiculum.com/courses/Infrastructure-Catalyst-68d7ece5c0c04119ff3d2db9",
  },
  {
    name: "VITA Creator",
    link: "/https://reskill.digiculum.com/courses/VITA-Creator-68d7ea61be54aa2549953fe9",
  },
  {
    name: "Domain Visionary",
    link: "/https://reskill.digiculum.com/courses/Domain-Visionary-68d7eb6e865e214e68a24356",
  },
  {
    name: "Foundational Track",
    link: "/https://reskill.digiculum.com/courses/Foundational-Track-68d82167569dd422ebd2144d",
  },
];

const Profile: React.FC = () => {
  const classes = useStyles();
  const { email } = useParams<{ email: string }>();
  const { user } = useContext(AuthContext);
  const [targetRole, setTargetRole] = useState<string | null>(null);
  const [isAssessmentDone, setIsAssessmentDone] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const storageKeyRole = `targetRole_${email}`;
  const storageKeyDone = `assessmentDone_${email}`;

  useEffect(() => {
    const state = location.state as { targetRole?: string } | undefined;
    if (state?.targetRole) {
      setTargetRole(state.targetRole);
      setIsAssessmentDone(true);
      localStorage.setItem(storageKeyRole, state.targetRole);
      localStorage.setItem(storageKeyDone, "true");
    } else {
      const storedRole = localStorage.getItem(storageKeyRole);
      const assessmentDone = localStorage.getItem(storageKeyDone);
      if (storedRole && assessmentDone === "true") {
        setTargetRole(storedRole);
        setIsAssessmentDone(true);
      } else {
        setTargetRole(null);
        setIsAssessmentDone(false);
      }
    }
  }, [location.state, email]);

  const handleAssessment = () => {
    navigate("/assessments");
  };

  return (
    <>
      <Navbar />
      <div className={classes.container}>
        <div className={classes.topSection}>
          <h1 className={classes.greeting}>Hiii</h1>
          <p className={classes.email}>{user?.email}</p>
        </div>

        <div className={classes.bottomSection}>
          {!isAssessmentDone ? (
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
