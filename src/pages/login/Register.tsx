/* eslint-disable @typescript-eslint/no-explicit-any */
// import React, { useState } from "react";
// import { createUseStyles } from "react-jss";
// import api from "../../api/apis";
// import { Link } from "react-router-dom";
// import logo from "../../assets/logo.png";
// import { GoogleLogin } from "@react-oauth/google";
// import { AxiosError } from "axios";
// const useStyles = createUseStyles({
//   wrapper: {
//     minHeight: "100vh",
//     background: "#f5f7fa",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   card: {
//     background: "#fff",
//     padding: 30,
//     borderRadius: 12,
//     boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
//     width: "100%",
//     maxWidth: 400,
//     textAlign: "center",
//   },
//   logo: {
//     width: 88,
//     height: 48,
//     marginBottom: 10,
//     opacity: 0.8,
//   },
//   heading: {
//     fontSize: 22,
//     marginBottom: 20,
//     color: "#333",
//   },
//   input: {
//     width: "90%",
//     padding: 12,
//     margin: "10px 0",
//     borderRadius: 6,
//     border: "1px solid #ddd",
//     fontSize: 14,
//   },
//   submitBtn: {
//     width: "100%",
//     padding: 12,
//     marginTop: 10,
//     background: "#d633ff",
//     color: "#fff",
//     border: "none",
//     borderRadius: 6,
//     fontWeight: "bold",
//     cursor: "pointer",
//   },
//   error: {
//     background: "#ffefef",
//     color: "#d00",
//     padding: 10,
//     borderRadius: 6,
//     marginBottom: 10,
//     fontSize: 13,
//   },
//   success: {
//     background: "#e6ffef",
//     color: "#14804a",
//     padding: 10,
//     borderRadius: 6,
//     marginBottom: 10,
//     fontSize: 13,
//   },
//   googleBtn: {
//     display: "flex",
//     justifyContent: "center",
//     marginBottom: 16,
//   },
//   divider: {
//     position: "relative",
//     margin: "20px 0",
//     "& span": {
//       background: "#fff",
//       padding: "0 10px",
//       position: "relative",
//       zIndex: 2,
//     },
//     "&::before": {
//       content: '""',
//       position: "absolute",
//       top: "50%",
//       left: 0,
//       width: "100%",
//       height: 1,
//       background: "#ccc",
//       zIndex: 1,
//     },
//   },
//   links: {
//     fontSize: 13,
//     marginTop: 20,
//     "& a": {
//       color: "#d633ff",
//       textDecoration: "none",
//     },
//   },
// });

// const Register: React.FC = () => {
//   const classes = useStyles();
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     password: "",
//     password2: "",
//   });
//   const [message, setMessage] = useState("");
//   const [error, setError] = useState("");

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   // const handleSubmit = async (e: React.FormEvent) => {
//   //   e.preventDefault();
//   //   setMessage("");
//   //   setError("");

//   //   try {
//   //     const res = await api.post("/register", form);
//   //     setMessage(res.data.message);
//   //   } catch (err: any) {
//   //     const msg =
//   //       err.response?.data?.error ||
//   //       err.response?.data?.errors?.[0] ||
//   //       "Registration failed";
//   //     setError(msg);
//   //   }
//   // };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setMessage("");
//     setError("");

//     try {
//       const res = await api.post("/register", form);
//       setMessage(res.data.message);
//     } catch (err: unknown) {
//       let msg = "Registration failed";

//       if (err instanceof AxiosError) {
//         msg =
//           err.response?.data?.error ||
//           err.response?.data?.errors?.[0] ||
//           "Registration failed";
//       }

//       setError(msg);
//     }
//   };
//   return (
//     <div className={classes.wrapper}>
//       <div className={classes.card}>
//         <img src={logo} alt="Logo" className={classes.logo} />
//         <h2 className={classes.heading}>Create your account</h2>

//         {error && <div className={classes.error}>{error}</div>}
//         {message && <div className={classes.success}>{message}</div>}

//         {/* ✅ Google Login Button */}
//         <div className={classes.googleBtn}>
//           <GoogleLogin
//             onSuccess={(credentialResponse) => {
//               console.log("Google Credential:", credentialResponse);
//               // Optional: send to backend
//               // api.post("/auth/google", { token: credentialResponse.credential });
//             }}
//             onError={() => {
//               console.log("Google Login Failed");
//               setError("Google login failed.");
//             }}
//           />
//         </div>

//         <div className={classes.divider}>
//           <span>or</span>
//         </div>

//         <form onSubmit={handleSubmit}>
//           <input
//             className={classes.input}
//             name="name"
//             placeholder="Full Name"
//             onChange={handleChange}
//             required
//           />
//           <input
//             className={classes.input}
//             name="email"
//             placeholder="Email"
//             type="email"
//             onChange={handleChange}
//             required
//           />
//           <input
//             className={classes.input}
//             type="password"
//             name="password"
//             placeholder="Password"
//             onChange={handleChange}
//             required
//           />
//           <input
//             className={classes.input}
//             type="password"
//             name="password2"
//             placeholder="Confirm Password"
//             onChange={handleChange}
//             required
//           />
//           <button className={classes.submitBtn}>Register</button>
//         </form>

//         <div className={classes.links}>
//           <p>
//             Already have an account? <Link to="/login">Login</Link>
//           </p>
//           <p>
//             Forgot your password? <Link to="/forgot">Reset</Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

import { useState } from "react";
import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";
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
});

export default function Register() {
  const classes = useStyles();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setLoading(true);

    try {
      const res = await api.post("/auth/register", form);
      const data = res.data as { msg?: string };
      setSuccess(data.msg || "Registration successful!");
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
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          className={classes.input}
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
        />
        <input
          className={classes.input}
          name="phone"
          placeholder="Phone"
          value={form.phone}
          onChange={handleChange}
        />
        <input
          className={classes.input}
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />
        <input
          className={classes.input}
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
        />
        <button className={classes.button} type="submit" disabled={loading}>
          {loading ? "Registering..." : "Register"}
        </button>
      </form>
      {error && <div className={classes.error}>{error}</div>}
      {success && <div className={classes.success}>{success}</div>}
      <div className={classes.link}>
        Already have an account? <Link to="/login">Login</Link>
      </div>
    </div>
  );
}
