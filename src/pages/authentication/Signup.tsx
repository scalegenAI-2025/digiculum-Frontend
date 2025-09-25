/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { signup } from "../../apis/auth";
import { useNavigate } from "react-router-dom";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    maxWidth: "400px",
    margin: "50px auto",
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

const Signup: React.FC = () => {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await signup(formData);
      setMessage(res.data.message);
      setTimeout(() => navigate("/login"), 2000);
    } catch (err: any) {
      setMessage(err.response?.data?.message || "Error during signup");
    }
  };

  return (
    <div className={classes.container}>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <input
          className={classes.input}
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          className={classes.input}
          name="email"
          placeholder="Email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          className={classes.input}
          name="password"
          placeholder="Password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button className={classes.button} type="submit">
          Signup
        </button>
      </form>
      {message && <p className={classes.message}>{message}</p>}
    </div>
  );
};

export default Signup;
