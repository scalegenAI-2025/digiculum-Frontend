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
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
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
import React from "react";
import FullScreenImages from "./pages/Journey/JourneyChildComponents/reskillingMappingTracks";
import PrivacyPolicy from "./pages/home/homechildComponents/PrivacyPolicy";
import CookiePolicy from "./pages/home/homechildComponents/CookiePolicy";
import GeneralTerms from "./pages/home/homechildComponents/TermsAndCondition";
import RefundPolicy from "./pages/home/homechildComponents/RefundPolicy";
//import Contact from "./pages/contact/Contact"; // example additional page
function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // scroll to top on every route change
  }, [pathname]);

  return null;
}
function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/Reskilling" element={<Journey />} />
        <Route path="/about-us" element={<AboutAs />} />
        {/* Add more routes as needed */}
        <Route path="/ecosystem" element={<Ecosystem />} />

        <Route path="/courses" element={<Course />} />
        <Route
          path="/courses/Essential-Competencies-of-AI/GenAI-Leader"
          element={<AIGenAILeadersBook />}
        />
        <Route
          path="/courses/Generative-AI-Technical-Masterclass"
          element={<GenerativeAI />}
        />
        <Route
          path="/courses/AI/GenAI-Transformation-Strategy"
          element={<GenAITransformation />}
        />
        <Route
          path="/courses/Cultivating-AI/GenAI-Mindset"
          element={<GenAIOperational />}
        />
        <Route
          path="/courses/AI/GenAI-Operational-Readiness"
          element={<GenAIMindset />}
        />
        <Route path="/masterclass/masterclass4" element={<GenAIMindset />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route path="/about-us" element={<AboutAs />} />
        <Route path="/tracks" element={<FullScreenImages />} />

        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/cookies" element={<CookiePolicy />} />
        <Route path="/terms" element={<GeneralTerms />} />
        <Route path="/refund" element={<RefundPolicy />} />
      </Routes>
    </Router>
  );
}

export default App;
