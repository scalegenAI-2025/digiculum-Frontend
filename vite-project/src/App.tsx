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
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Journey from "./pages/Journey/Journey"; // example additional page
import Ecosystem from "./pages/Ecosystem/ecosystem";
//import Contact from "./pages/contact/Contact"; // example additional page

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/Journey" element={<Journey />} />
        {/* Add more routes as needed */}
        <Route path="/ecosystem" element={<Ecosystem />} />
      </Routes>
    </Router>
  );
}

export default App;
