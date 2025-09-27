/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
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
    backgroundColor: "#6a0dad", // purple
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "60px 20px",
  },
  greeting: {
    fontSize: "4rem",
    margin: "0 0 10px 0",
    fontWeight: "bold",
  },
  email: {
    fontSize: "1.5rem",
    margin: "0",
    opacity: 0.9,
  },
  bottomSection: {
    flex: 1,
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    padding: "15px 30px",
    fontSize: "1.2rem",
    backgroundColor: "#6a0dad",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "transform 0.2s, background-color 0.3s",
    "&:hover": {
      transform: "scale(1.05)",
      backgroundColor: "#520d91",
    },
  },
});

const Profile: React.FC = () => {
  const classes = useStyles();
  const { email } = useParams<{ email: string }>();
  const { user } = useContext(AuthContext);
  const [_message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      if (email) {
        try {
          const res = await getProfile(email);
          setMessage(res.data.message);
        } catch (err: any) {
          setMessage(err.response?.data?.message || "Error fetching profile");
        }
      }
    };
    fetchProfile();
  }, [email]);

  const handleAssessment = () => {
    navigate("/assessments"); // update with correct path
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
          <button className={classes.button} onClick={handleAssessment}>
            Take Assessment
          </button>
        </div>
      </div>
    </>
  );
};

export default Profile;
