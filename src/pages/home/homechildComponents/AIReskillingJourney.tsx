// import { createUseStyles } from "react-jss";
// import {
//   // Handshake,
//   // Compass,
//   // Users,
//   // Settings,
//   // Brain,
//   ArrowRight,
// } from "lucide-react";
// import human from "../../../assets/human.png";
// import handshake from "../../../assets/handshake.png";
// import track from "../../../assets/tracks.png";
// import compass from "../../../assets/compass.png";
// import gear from "../../../assets/gear.png";
// import oval from "../../../assets/oval.png";
// import mind from "../../../assets/mind.png";

// const useStyles = createUseStyles({
//   AIReskillingJourney: {
//     padding: 32,
//     textAlign: "center",
//     "@media (max-width: 1100px)": {
//       padding: 16,
//     },
//     "@media (max-width: 400px)": {
//       transform: "scale(0.7)", // scales down the entire component
//       transformOrigin: "top center", // anchor to top center
//       padding: 8,
//     },
//   },
//   banner: {
//     backgroundColor: "#e5e5e5",
//     color: "#4b5563",
//     padding: 16,
//     fontSize: 14,
//     "@media (max-width: 400px)": {
//       fontSize: 12,
//       padding: 8,
//     },
//   },
//   heading: {
//     fontSize: 24,
//     fontWeight: 600,
//     marginTop: 16,
//     "& span": {
//       color: "#7e22ce",
//     },
//     "@media (max-width: 400px)": {
//       fontSize: 18,
//       marginTop: 12,
//     },
//   },
//   iconImage: {
//     width: "60%",
//     height: "60%",
//     objectFit: "contain",
//   },
//   contentWrapper: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "flex-start",
//     marginTop: 40,
//     gap: 60,
//     flexWrap: "wrap",
//     position: "relative",
//     "@media (max-width: 400px)": {
//       gap: 24,
//       marginTop: 20,
//     },
//   },
//   verticalDivider: {
//     position: "absolute",
//     top: 0,
//     bottom: 0,
//     left: "calc(50% + 80px)",
//     width: 1,
//     borderLeft: "2px dotted #999",
//     transform: "translateX(-50%)",
//     "@media (max-width: 1100px)": {
//       display: "none",
//     },
//   },
//   leftSide: {
//     display: "flex",
//     alignItems: "center",
//     gap: 16,
//     zIndex: 1,
//     "@media (max-width: 400px)": {
//       gap: 12,
//     },
//   },
//   step: {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     fontSize: 14,
//     maxWidth: 160,
//     "@media (max-width: 400px)": {
//       maxWidth: 120,
//       fontSize: 12,
//     },
//   },
//   arrow: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     "@media (max-width: 400px)": {
//       "& svg": {
//         width: 24,
//         height: 24,
//       },
//     },
//   },
//   iconCircle: {
//     border: "1px solid black",
//     borderRadius: "50%",
//     width: 60,
//     height: 60,
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     fontSize: 28,
//     "@media (max-width: 400px)": {
//       width: 40,
//       height: 40,
//       fontSize: 20,
//     },
//   },
//   rightSide: {
//     display: "grid",
//     gridTemplateColumns: "repeat(2, 1fr)",
//     gap: 24,
//     maxWidth: 400,
//     zIndex: 1,
//     "@media (max-width: 400px)": {
//       gap: 16,
//       maxWidth: 280,
//     },
//   },
//   devItem: {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     fontSize: 14,
//     textAlign: "center",
//     "@media (max-width: 400px)": {
//       fontSize: 12,
//     },
//   },
//   caption: {
//     fontSize: 12,
//     fontStyle: "italic",
//     marginTop: 24,
//     color: "#6b7280",
//     "@media (max-width: 400px)": {
//       fontSize: 10,
//       marginTop: 16,
//     },
//   },
//   footerText: {
//     marginTop: 32,
//     fontSize: 14,
//     color: "#6b7280",
//     "@media (max-width: 400px)": {
//       fontSize: 12,
//       marginTop: 20,
//     },
//   },
//   purple: {
//     color: "#7e22ce",
//   },
// });

// export default function AIReskillingJourney() {
//   const classes = useStyles();

//   return (
//     <div className={classes.AIReskillingJourney}>
//       <div className={classes.contentWrapper}>
//         <div className={classes.verticalDivider} />

//         <div className={classes.leftSide}>
//           <div className={classes.step}>
//             <div className={classes.iconCircle}>
//               <img src={human} alt="Handshake" className={classes.iconImage} />
//             </div>
//             <p>
//               An individual <span className={classes.purple}>starts</span> with{" "}
//               <br />
//               <strong>AI/GenAI Reskilling Assessment</strong>
//             </p>
//           </div>
//           <div className={classes.arrow}>
//             <ArrowRight size={32} />
//           </div>

//           <div className={classes.step}>
//             <div className={classes.iconCircle}>
//               <img
//                 src={handshake}
//                 alt="Handshake"
//                 className={classes.iconImage}
//               />
//             </div>
//             <p>
//               <span className={classes.purple}>Commits</span> to <br />
//               <strong>reskilling</strong> to new AI/GenAI role
//             </p>
//           </div>
//           <div className={classes.arrow}>
//             <ArrowRight size={32} />
//           </div>
//           <div className={classes.arrow}></div>
//           <div className={classes.step}>
//             <div className={classes.iconCircle}>
//               <img src={track} alt="Handshake" className={classes.iconImage} />
//             </div>
//             <p>
//               <span className={classes.purple}>Completes</span> <br />
//               prescribed <strong>reskilling tracks</strong>
//             </p>
//           </div>
//         </div>

//         <div className={classes.rightSide}>
//           <div className={classes.devItem}>
//             <div className={classes.iconCircle}>
//               <img
//                 src={compass}
//                 alt="Handshake"
//                 className={classes.iconImage}
//               />
//             </div>
//             <p>
//               <span className={classes.purple}>Coaching</span> on <br />
//               <strong>application of skills</strong> at workplace
//             </p>
//           </div>
//           <div className={classes.devItem}>
//             <div className={classes.iconCircle}>
//               <img src={oval} alt="Handshake" className={classes.iconImage} />
//             </div>
//             <p>
//               <span className={classes.purple}>Collaborates</span> with other
//               individuals <br />
//               through <strong>ecosystem</strong>
//             </p>
//           </div>
//           <div className={classes.devItem}>
//             <div className={classes.iconCircle}>
//               <img src={gear} alt="Handshake" className={classes.iconImage} />
//             </div>
//             <p>
//               <span className={classes.purple}>Builds</span> on/for the job{" "}
//               <br />
//               <strong>skills</strong>
//             </p>
//           </div>
//           <div className={classes.devItem}>
//             <div className={classes.iconCircle}>
//               <img src={mind} alt="Handshake" className={classes.iconImage} />
//             </div>
//             <p>
//               <span className={classes.purple}>Updates</span>{" "}
//               <strong>AI/GenAI knowledge</strong>
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className={classes.caption}>Continuous Competence Development</div>
//     </div>
//   );
// }

import React from "react";
import { createUseStyles } from "react-jss";
import ccd from "../../../assets/ccd.png";
// Define styles with react-jss
const useStyles = createUseStyles({
  container: {
    width: "100%",
    //overflowX: "hidden",
  },
  section: {
    height: "100vh", // Full screen height
    /// width: "80%", // Full screen width
    // backgroundSize: "cover",
    // backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
});

// Image list (replace URLs with your own)
const images: string[] = [ccd];

const AIReskillingJourney: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      {images.map((img, idx) => (
        <div
          key={idx}
          className={classes.section}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}
    </div>
  );
};

export default AIReskillingJourney;
