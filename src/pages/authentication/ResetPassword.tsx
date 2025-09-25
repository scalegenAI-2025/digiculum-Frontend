/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { resetPassword } from "../../apis/auth";

export default function ResetPassword() {
  const { email: encodedEmail, token } = useParams();
  const email = decodeURIComponent(encodedEmail!); // decode email
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await resetPassword({ email, token: token!, password });
      const data = res.data; // now TypeScript knows it matches AuthResponse
      setMessage(data.message);
      if (data.success) {
        setTimeout(() => navigate("/login"), 2000);
      }
    } catch (err: any) {
      setMessage(err.response?.data?.message || "Reset failed.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Reset Password</h2>
      <input
        type="password"
        placeholder="New Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Reset</button>
      <p>{message}</p>
    </form>
  );
}
