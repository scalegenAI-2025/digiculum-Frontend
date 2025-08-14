/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { createUseStyles } from "react-jss";
import api from "../../utils/api";

const useStyles = createUseStyles({
  container: {
    maxWidth: 400,
    margin: "50px auto",
    padding: 20,
    border: "1px solid #ccc",
    borderRadius: 8,
    background: "#f9f9f9",
  },
  input: {
    display: "block",
    width: "100%",
    padding: 10,
    margin: "10px 0",
    borderRadius: 4,
    border: "1px solid #ccc",
  },
  button: {
    width: "100%",
    padding: 10,
    backgroundColor: "#ffc107",
    color: "#fff",
    border: "none",
    borderRadius: 4,
    cursor: "pointer",
  },
  title: { textAlign: "center", marginBottom: 20 },
});

export default function ForgotPassword() {
  const classes = useStyles();
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await api.post("/auth/forgot-password", { email });
      // Fix: assert type of res.data
      const responseData = res.data as { msg: string };
      alert(responseData.msg);
    } catch (err: any) {
      alert(err.response?.data.msg || "Error");
    }
  };

  return (
    <div className={classes.container}>
      <h2 className={classes.title}>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <input
          className={classes.input}
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className={classes.button} type="submit">
          Send Reset Link
        </button>
      </form>
    </div>
  );
}
