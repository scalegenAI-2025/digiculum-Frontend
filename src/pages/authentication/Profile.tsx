/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProfile } from "../../apis/auth";
import { AuthContext } from "../../context/AuthContext";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    maxWidth: "600px",
    margin: "40px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    textAlign: "center",
  },
  heading: {
    fontSize: "1.5rem",
    marginBottom: "20px",
  },
});

const Profile: React.FC = () => {
  const classes = useStyles();
  const { email } = useParams<{ email: string }>();
  const { user } = useContext(AuthContext);
  const [message, setMessage] = useState("");

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

  return (
    <div className={classes.container}>
      <h2 className={classes.heading}>Profile Page</h2>
      <p>
        <strong>Logged in as:</strong> {user?.email}
      </p>
      <p>{message}</p>
    </div>
  );
};

export default Profile;
