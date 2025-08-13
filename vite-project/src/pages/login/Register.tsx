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

// export default Register;
import { useState } from "react";
import api from "../../utils/api";
import { createUseStyles } from "react-jss";

const useFormStyles = createUseStyles({
  container: {
    maxWidth: 450,
    margin: "60px auto",
    padding: 35,
    borderRadius: 12,
    background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
    boxShadow: "0 12px 30px rgba(0,0,0,0.12)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontFamily: "'Roboto', sans-serif",
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: 700,
    marginBottom: 25,
    color: "#333",
  },
  input: {
    width: "100%",
    padding: "14px 18px",
    margin: "12px 0",
    borderRadius: 8,
    border: "1px solid #ddd",
    fontSize: 16,
    outline: "none",
    "&:focus": {
      borderColor: "#007bff",
      boxShadow: "0 0 6px rgba(0,123,255,0.3)",
    },
  },
  button: {
    width: "100%",
    padding: 14,
    marginTop: 20,
    borderRadius: 8,
    border: "none",
    backgroundColor: "#007bff",
    color: "#fff",
    fontSize: 16,
    fontWeight: 600,
    cursor: "pointer",
    transition: "0.3s",
    "&:hover": {
      backgroundColor: "#0056b3",
    },
  },
  link: {
    marginTop: 15,
    fontSize: 14,
    color: "#007bff",
    cursor: "pointer",
    "&:hover": { textDecoration: "underline" },
  },
});

export default function Register() {
  const classes = useFormStyles();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await api.post("/auth/register", form);
      alert(res.data.msg);
    } catch (err: any) {
      alert(err.response?.data.msg || "Error");
    }
  };

  return (
    <div className={classes.container}>
      <h2 className={classes.title}>Register</h2>
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
          placeholder="Phone Number"
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
        <button className={classes.button} type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
