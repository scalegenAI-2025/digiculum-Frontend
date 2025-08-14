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
    textAlign: "center",
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
  title: { marginBottom: 20 },
  success: { color: "green", marginTop: 10 },
  error: { color: "red", marginTop: 10 },
});

export default function ForgotPassword() {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setLoading(true);

    try {
      const res = await api.post("/auth/forgot-password", { email });
      const data = res.data as { msg?: string };
      setSuccess(data.msg || "Reset link sent!");
    } catch (err: unknown) {
      if (
        typeof err === "object" &&
        err !== null &&
        "response" in err &&
        typeof (err as any).response?.data?.msg === "string"
      ) {
        setError((err as any).response.data.msg);
      } else if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Something went wrong");
      }
    } finally {
      setLoading(false);
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
        <button className={classes.button} type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send Reset Link"}
        </button>
      </form>
      {error && <div className={classes.error}>{error}</div>}
      {success && <div className={classes.success}>{success}</div>}
    </div>
  );
}
