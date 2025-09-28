/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useContext } from "react";
import { login } from "../../apis/auth";
import { AuthContext } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { createUseStyles } from "react-jss";
import Navbar from "../home/homechildComponents/Navbar";
import FooterContact from "../home/homechildComponents/FooterContact";

const useStyles = createUseStyles({
  container: {
    maxWidth: "400px",

    margin: "140px auto",
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
  loginLink: {
    marginTop: "20px",
    display: "block",
    color: "#444394",
    textDecoration: "none",
    fontWeight: "bold",
    "&:hover": {
      textDecoration: "underline",
    },
  },
});

const Login: React.FC = () => {
  const classes = useStyles();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const { loginUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await login(formData);
      loginUser({ email: formData.email });
      setMessage(res.data.message);
      navigate(`/profile/${formData.email}`);
    } catch (err: any) {
      setMessage(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <>
      <Navbar />
      <div className={classes.container}>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
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
            Login
          </button>
        </form>
        <p>
          <a href="/send-reset-link">Forgot password</a>
        </p>
        {message && <p className={classes.message}>{message}</p>}
        <Link className={classes.loginLink} to="/signup">
          Register
        </Link>
      </div>
      <FooterContact />
    </>
  );
};

export default Login;
