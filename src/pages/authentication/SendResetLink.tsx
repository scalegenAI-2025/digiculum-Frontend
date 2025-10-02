/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { sendResetLink } from "../../apis/auth";
import { createUseStyles } from "react-jss";
import FooterContact from "../home/homechildComponents/FooterContact";
import Navbar from "../home/homechildComponents/Navbar";

const useStyles = createUseStyles({
  container: {
    maxWidth: "400px",
    margin: "50px auto",
    marginTop: "140px",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
  },
  input: {
    width: "100%",
    padding: "8px",
    margin: "10px 0",
  },
  button: {
    width: "100%",
    padding: "10px",
    background: "#444394",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  message: {
    marginTop: "10px",
  },
});

const SendResetLink: React.FC = () => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await sendResetLink({ email });
      setMessage(res.data.message);
    } catch (err: any) {
      setMessage(err.response?.data?.message || "Error sending reset link");
    }
  };

  return (
    <>
      <Navbar />
      <div className={classes.container}>
        <h2>Send Password Reset Link</h2>
        <form onSubmit={handleSubmit}>
          <input
            className={classes.input}
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button className={classes.button} type="submit">
            Send Link
          </button>
        </form>
        {message && <p className={classes.message}>{message}</p>}
      </div>
      <FooterContact />
    </>
  );
};

export default SendResetLink;
