// import React from "react";
// import { createUseStyles } from "react-jss";

// const useStyles = createUseStyles({
//   container: {
//     backgroundColor: "white",
//     padding: "60px 40px",
//     fontFamily: "Arial, sans-serif",
//     minHeight: "100vh",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   title: {
//     fontSize: "48px",
//     fontWeight: "bold",
//     color: "#333",
//     textAlign: "center",
//     marginBottom: "80px",
//     letterSpacing: "2px",
//   },
//   diagramContainer: {
//     position: "relative",
//     width: "800px",
//     height: "400px",
//     margin: "0 auto",
//   },
//   column: {
//     position: "absolute",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     gap: "40px",
//   },
//   leftColumn: {
//     left: "0",
//     top: "0",
//   },
//   rightColumn: {
//     right: "0",
//     top: "0",
//   },
//   skillBox: {
//     width: "200px",
//     height: "50px",
//     border: "2px solid #666",
//     backgroundColor: "white",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     fontSize: "18px",
//     color: "#666",
//     fontWeight: "500",
//   },
//   columnLabel: {
//     fontSize: "20px",
//     fontWeight: "bold",
//     color: "#5a5fc7",
//     marginBottom: "20px",
//     textAlign: "center",
//   },
//   roleLabel: {
//     fontSize: "18px",
//     color: "#666",
//     marginTop: "30px",
//     textAlign: "center",
//     fontWeight: "500",
//   },
//   skillLevelsLabel: {
//     position: "absolute",
//     left: "-80px",
//     top: "50%",
//     transform: "translateY(-50%) rotate(-90deg)",
//     fontSize: "18px",
//     color: "#666",
//     fontStyle: "italic",
//     fontWeight: "500",
//   },
//   arrow: {
//     position: "absolute",
//     stroke: "#666",
//     strokeWidth: "2",
//     fill: "none",
//     markerEnd: "url(#arrowhead)",
//   },
//   upArrow: {
//     position: "absolute",
//     left: "50%",
//     transform: "translateX(-50%)",
//     fontSize: "24px",
//     color: "#666",
//   },
//   leftUpArrow: {
//     top: "-30px",
//   },
//   rightUpArrow: {
//     top: "-30px",
//   },
//   reskillLabel: {
//     position: "absolute",
//     left: "50%",
//     top: "50%",
//     transform: "translate(-50%, -50%)",
//     fontSize: "20px",
//     fontWeight: "bold",
//     color: "#5a5fc7",
//   },
//   bottomText: {
//     fontSize: "20px",
//     color: "#666",
//     textAlign: "center",
//     marginTop: "60px",
//     maxWidth: "800px",
//     lineHeight: "1.4",
//   },
//   highlight: {
//     fontWeight: "bold",
//     color: "#333",
//   },
// });

// const ReskillingDiagram: React.FC = () => {
//   const classes = useStyles();

//   return (
//     <div className={classes.container}>
//       <h1 className={classes.title}>We focus on RESKILLING</h1>

//       <div className={classes.diagramContainer}>
//         {/* SVG for arrows */}
//         <svg
//           style={{
//             position: "absolute",
//             width: "100%",
//             height: "100%",
//             zIndex: 1,
//           }}
//         >
//           <defs>
//             <marker
//               id="arrowhead"
//               markerWidth="10"
//               markerHeight="7"
//               refX="9"
//               refY="3.5"
//               orient="auto"
//             >
//               <polygon points="0 0, 10 3.5, 0 7" fill="#666" />
//             </marker>
//           </defs>

//           {/* Arrow from left beginner to right beginner */}
//           <line x1="220" y1="250" x2="580" y2="250" className={classes.arrow} />

//           {/* Arrow from left intermediate to right beginner */}
//           <line x1="220" y1="190" x2="580" y2="250" className={classes.arrow} />

//           {/* Arrow from left advanced to right beginner */}
//           <line x1="220" y1="130" x2="580" y2="250" className={classes.arrow} />
//         </svg>

//         {/* Left Column */}
//         <div className={`${classes.column} ${classes.leftColumn}`}>
//           <div className={classes.columnLabel}>Upskilling</div>
//           <div className={`${classes.upArrow} ${classes.leftUpArrow}`}>▲</div>
//           <div className={classes.skillBox}>Advanced</div>
//           <div className={classes.skillBox}>Intermediate</div>
//           <div className={classes.skillBox}>Beginner</div>
//           <div className={classes.roleLabel}>Current non-AI/GenAI Role</div>
//         </div>

//         {/* Right Column */}
//         <div className={`${classes.column} ${classes.rightColumn}`}>
//           <div className={classes.columnLabel}>Upskilling</div>
//           <div className={`${classes.upArrow} ${classes.rightUpArrow}`}>▲</div>
//           <div className={classes.skillBox}>Advanced</div>
//           <div className={classes.skillBox}>Intermediate</div>
//           <div className={classes.skillBox}>Beginner</div>
//           <div className={classes.roleLabel}>AI/GenAI Role</div>
//         </div>

//         {/* Skill levels label */}
//         <div className={classes.skillLevelsLabel}>Skill levels</div>

//         {/* Reskilling label */}
//         <div className={classes.reskillLabel}>Reskilling</div>
//       </div>

//       <div className={classes.bottomText}>
//         Our primary focus is{" "}
//         <span className={classes.highlight}>Reskilling</span> individuals from
//         current non-AI/GenAI role to AI/GenAI role
//       </div>
//     </div>
//   );
// };

// export default ReskillingDiagram;

import React from "react";
import { createUseStyles } from "react-jss";
import image from "../../../assets/about-us.png";
const useStyles = createUseStyles({
  container: {
    display: "flex",

    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: "1rem",
    boxSizing: "border-box",
    "@media (max-width: 768px)": {
      justifyContent: "flex-start",
      // maxWidth: "80%",
    },
  },
  image: {
    maxWidth: "80%",
    width: "100%",
    height: "auto",
    objectFit: "contain",
    "@media (max-width: 1024px)": {
      maxWidth: "90%",
    },
    "@media (max-width: 768px)": {
      maxWidth: "80%",
    },
    "@media (max-width: 480px)": {
      maxWidth: "50%",
    },
  },
});

const ReskillingDiagram: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <img
        src={image} // replace with your image path
        alt="Reskilling Diagram"
        className={classes.image}
      />
    </div>
  );
};

export default ReskillingDiagram;
