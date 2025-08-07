/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import api from "../../api/axios";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import google from "../../assets/Google.webp";
import { useUser } from "../../context/userContext";
import { toast } from "react-toastify";

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
  error: {
    background: "#ffefef",
    color: "#d00",
    padding: 10,
    borderRadius: 6,
    marginBottom: 10,
    fontSize: 13,
  },
  googleBtn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    width: "100%",
    padding: 12,
    background: "#fff",
    color: "#333",
    border: "1px solid #ccc",
    borderRadius: 6,
    fontWeight: "bold",
    cursor: "pointer",
    marginBottom: 16,
  },
  divider: {
    position: "relative",
    margin: "20px 0",
    "& span": {
      background: "#fff",
      padding: "0 10px",
      position: "relative",
      zIndex: 2,
    },
    "&::before": {
      content: '""',
      position: "absolute",
      top: "50%",
      left: 0,
      width: "100%",
      height: 1,
      background: "#ccc",
      zIndex: 1,
    },
  },
  links: {
    fontSize: 13,
    marginTop: 20,
    "& a": {
      color: "#d633ff",
      textDecoration: "none",
    },
  },
});

// const Login: React.FC = () => {
//   const classes = useStyles();
//   const [form, setForm] = useState({ email: "", password: "" });
//   const [error, setError] = useState("");

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError("");

//     try {
//       const res = await api.post("/login", form);
//       localStorage.setItem("token", res.data.token);
//       window.location.href = "/dashboard";
//     } catch (err: any) {
//       setError(err.response?.data?.error || "Login failed");
//     }
//   };

//   return (
//     <div className={classes.wrapper}>
//       <div className={classes.card}>
//         <img src={logo} alt="Logo" className={classes.logo} />
//         <h2 className={classes.heading}>Welcome back</h2>

//         {error && <div className={classes.error}>{error}</div>}

//         <button className={classes.googleBtn}>
//           <img src={google} alt="Google" style={{ width: 20 }} />
//           Continue with Google
//         </button>

//         <div className={classes.divider}>
//           <span>or</span>
//         </div>

//         <form onSubmit={handleSubmit}>
//           <input
//             className={classes.input}
//             name="email"
//             placeholder="Email"
//             onChange={handleChange}
//           />
//           <input
//             className={classes.input}
//             type="password"
//             name="password"
//             placeholder="Password"
//             onChange={handleChange}
//           />
//           <button className={classes.submitBtn}>Login</button>
//         </form>

//         <div className={classes.links}>
//           <p>
//             Forgot your password? <Link to="/forgot">Reset</Link>
//           </p>
//           <p>
//             Don’t have an account? <Link to="/register">Register</Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

const Login: React.FC = () => {
  const classes = useStyles();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { setUser } = useUser(); // ✅ from context

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setError("");

  //   try {
  //     const res = await api.post("/login", form);
  //     localStorage.setItem("token", res.data.token); // ✅ Save token
  //     setUser(res.data.user); // ✅ Update context
  //     navigate("/"); // ✅ Navigate
  //   } catch (err: any) {
  //     setError(err.response?.data?.error || "Login failed");
  //   }
  // };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const res = await api.post("/login", form);
      localStorage.setItem("token", res.data.token); // ✅ Save token
      setUser(res.data.user); // ✅ Update context
      toast.success("Login successful!"); // ✅ Show success toast
      navigate("/"); // ✅ Navigate
    } catch (err: any) {
      const errorMsg = err.response?.data?.error || "Login failed";
      setError(errorMsg);
      toast.error(errorMsg); // ✅ Show error toast
    }
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.card}>
        <img src={logo} alt="Logo" className={classes.logo} />
        <h2 className={classes.heading}>Welcome back</h2>

        {error && <div className={classes.error}>{error}</div>}

        <button className={classes.googleBtn}>
          <img src={google} alt="Google" style={{ width: 20 }} />
          Continue with Google
        </button>

        <div className={classes.divider}>
          <span>or</span>
        </div>

        <form onSubmit={handleSubmit}>
          <input
            className={classes.input}
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
          />
          <input
            className={classes.input}
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />
          <button className={classes.submitBtn}>Login</button>
        </form>

        <div className={classes.links}>
          <p>
            Forgot your password? <Link to="/forgot">Reset</Link>
          </p>
          <p>
            Don’t have an account? <Link to="/register">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
