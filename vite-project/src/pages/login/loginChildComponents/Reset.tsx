/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { createUseStyles } from "react-jss";
import api from "../../../api/apis";
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

const Reset: React.FC = () => {
  const classes = useStyles();
  //const { id } = useParams();
  const [form, setForm] = useState({ password: "", password2: "" });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const { token } = useParams();

  useEffect(() => {
    if (!token) {
      setError("Reset link is missing or invalid.");
    }
  }, [token]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");
    setError("");

    if (!form.password || !form.password2) {
      return setError("Both password fields are required.");
    }

    if (form.password !== form.password2) {
      return setError("Passwords do not match.");
    }

    try {
      const res = await api.post(`/reset/${token}`, form);
      setMessage(res.data.message || "Password reset successfully");
    } catch (err: any) {
      const errMsg =
        err.response?.data?.error ||
        err.response?.data?.errors?.[0] ||
        "Failed to reset password";
      setError(errMsg);
      console.error("Reset error:", errMsg); // 🔍 Helpful log
    }
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.card}>
        <img src={logo} alt="Logo" className={classes.logo} />
        <h2 className={classes.heading}>Reset Your Password</h2>

        {error && <div className={classes.error}>{error}</div>}
        {message && <div className={classes.success}>{message}</div>}

        <form onSubmit={handleSubmit}>
          <input
            className={classes.input}
            type="password"
            name="password"
            placeholder="New Password"
            onChange={handleChange}
          />
          <input
            className={classes.input}
            type="password"
            name="password2"
            placeholder="Confirm Password"
            onChange={handleChange}
          />
          <button className={classes.submitBtn}>Reset Password</button>
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

export default Reset;
