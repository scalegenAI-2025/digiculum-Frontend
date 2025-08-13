// //import "./App.css";
// import Navbar from "./components/navbar/Navbar";
// import Home from "./pages/home/Home";

// function App() {
//   return (
//     <>
//       <div>
//         <Navbar />
//         <Home />
//       </div>
//     </>
//   );
// }

// export default App;

// import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Journey from "./pages/Journey/Journey"; // example additional page
import Ecosystem from "./pages/Ecosystem/ecosystem";
import Course from "./pages/course/course";
import AIGenAILeadersBook from "./pages/course/AIGenAILeadersBook/AIGenAILeadersBook";
import GenerativeAI from "./pages/course/GenerativeAI/GenerativeAI";
import GenAITransformation from "./pages/course/GenAITransformation/GenAITransformation";
import GenAIOperational from "./pages/course/GenAIOperational/GenAIOperational";
import GenAIMindset from "./pages/course/GenAIMindset/GenAIMindset";
import AboutAs from "./pages/about/aboutAs";
import Register from "./pages/login/Register";
import Login from "./pages/login/Login";
import ForgotPassword from "./pages/login/ForgotPassword";
import ResetPassword from "./pages/login/ResetPassword";
//import Contact from "./pages/contact/Contact"; // example additional page

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/Journey" element={<Journey />} />
        <Route path="/about-us" element={<AboutAs />} />
        {/* Add more routes as needed */}
        <Route path="/ecosystem" element={<Ecosystem />} />

        <Route path="/masterclass" element={<Course />} />
        <Route path="/courses" element={<Course />} />
        <Route
          path="/masterclass/masterclass1"
          element={<AIGenAILeadersBook />}
        />
        <Route path="/masterclass/masterclass2" element={<GenerativeAI />} />
        <Route
          path="/masterclass/masterclass3"
          element={<GenAITransformation />}
        />
        <Route
          path="/masterclass/masterclass5"
          element={<GenAIOperational />}
        />
        <Route path="/masterclass/masterclass4" element={<GenAIMindset />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
