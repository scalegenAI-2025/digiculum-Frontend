/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { activateAccount } from "../../apis/auth"; // ✅ import

export default function ActivateAccount() {
  const { email, token } = useParams();
  const [message, setMessage] = useState("Activating...");

  useEffect(() => {
    const activate = async () => {
      try {
        const res = await activateAccount(email!, token!); // ✅ call API wrapper
        setMessage(res.data.message);
      } catch (err: any) {
        setMessage(err.response?.data?.message || "Activation failed.");
      }
    };
    activate();
  }, [email, token]);

  return <h2>{message}</h2>;
}
