import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";
import api from "./../../../api/axios";
import logo from "./../../../assets/logo2.png";

const useStyles = createUseStyles({
  wrapper: {
    minHeight: "100vh",
    background: "#f5f7fa",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    background: "#fff",
    padding: 30,
    borderRadius: 12,
    boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
    width: "100%",
    maxWidth: 400,
    textAlign: "center",
  },
  logo: {
    width: 88,
    height: 48,
    marginBottom: 10,
    opacity: 0.8,
  },
  heading: {
    fontSize: 22,
    marginBottom: 20,
    color: "#333",
  },
  input: {
    width: "90%",
    padding: 12,
    margin: "10px 0",
    borderRadius: 6,
    border: "1px solid #ddd",
    fontSize: 14,
  },
  submitBtn: {
    width: "100%",
    padding: 12,
    marginTop: 10,
    background: "#d633ff",
    color: "#fff",
    border: "none",
    borderRadius: 6,
    fontWeight: "bold",
    cursor: "pointer",
  },
  success: {
    background: "#e6ffef",
    color: "#14804a",
    padding: 10,
    borderRadius: 6,
    marginBottom: 10,
    fontSize: 13,
  },
  error: {
    background: "#ffefef",
    color: "#d00",
    padding: 10,
    borderRadius: 6,
    marginBottom: 10,
    fontSize: 13,
  },
  backLink: {
    marginTop: 15,
    fontSize: 13,
    "& a": {
      color: "#d633ff",
      textDecoration: "none",
    },
  },
});

const Forgot: React.FC = () => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");
    setError("");

    if (!email) return setError("Email is required.");

    try {
      const res = await api.post("/forgot", { email });
      setMessage(res.data.message || "Reset link sent.");
    } catch {
      setError("Something went wrong.");
    }
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.card}>
        <img src={logo} alt="Logo" className={classes.logo} />
        <h2 className={classes.heading}>Forgot Password</h2>

        {message && <div className={classes.success}>{message}</div>}
        {error && <div className={classes.error}>{error}</div>}

        <form onSubmit={handleSubmit}>
          <input
            className={classes.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
          <button className={classes.submitBtn}>Send Reset Link</button>
        </form>

        <div className={classes.backLink}>
          <p>
            Back to <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Forgot;
