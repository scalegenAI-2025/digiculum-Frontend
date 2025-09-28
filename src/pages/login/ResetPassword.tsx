/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useParams } from "react-router-dom";
import { createUseStyles } from "react-jss";
import api from "../../utils/api";
const useStyles = createUseStyles({
  container: {
    maxWidth: 450,
    margin: "60px auto",
    padding: 35,
    borderRadius: 12,
    background: "#f9f9f9",
    textAlign: "center",
  },
  input: {
    width: "100%",
    padding: 12,
    margin: "10px 0",
    borderRadius: 6,
    border: "1px solid #ccc",
  },
  button: {
    width: "100%",
    padding: 12,
    marginTop: 15,
    borderRadius: 6,
    border: "none",
    backgroundColor: "#007bff",
    color: "#fff",
    cursor: "pointer",
  },
  link: { marginTop: 15, fontSize: 14 },
  error: { color: "red", marginTop: 10 },
  success: { color: "green", marginTop: 10 },
  title: { marginBottom: 20 },
});

export default function ResetPassword() {
  const classes = useStyles();
  const { token } = useParams<{ token: string }>();
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  if (!token) {
    return <div className={classes.container}>Invalid reset link.</div>;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setLoading(true);

    try {
      const res = await api.post(`/auth/reset-password/${token}`, { password });
      // Safely cast response
      const responseData = res.data as { msg?: string };
      setSuccess(responseData.msg || "Password reset successful!");
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
      <h2 className={classes.title}>Reset Password</h2>
      <form onSubmit={handleSubmit}>
        <input
          className={classes.input}
          type="password"
          placeholder="New Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className={classes.button} type="submit" disabled={loading}>
          {loading ? "Resetting..." : "Reset Password"}
        </button>
      </form>
      {error && <div className={classes.error}>{error}</div>}
      {success && <div className={classes.success}>{success}</div>}
    </div>
  );
}
