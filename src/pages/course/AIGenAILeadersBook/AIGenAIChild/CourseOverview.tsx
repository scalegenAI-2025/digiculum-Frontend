// // CourseOverview.tsx
// import React from "react";
// import { createUseStyles } from "react-jss";
// import Framework from "../../../../assets/framework.png";
// //import speaker from "../../../../assets/amitsirfirstpic.png";

// const useStyles = createUseStyles({
//   container: {
//     display: "flex",
//     flexDirection: "row",
//     padding: "2rem",
//     fontFamily: "Arial, sans-serif",
//     justifyContent: "space-between",
//     flexWrap: "wrap",
//     backgroundColor: "#fff",
//     color: "#000",
//   },
//   leftColumn: {
//     flex: "1 1 50%",
//     paddingRight: "1rem",
//     minWidth: "300px",
//   },
//   rightColumn: {
//     flex: "1 1 40%",
//     paddingLeft: "1rem",
//     minWidth: "300px",
//   },
//   sectionTitle: {
//     fontSize: "1.5rem",
//     fontWeight: "bold",
//     margin: "1rem 0 0.5rem",
//     color: "#002c3e",
//   },
//   sectionTitleTop: {
//     fontSize: "40px",
//     fontWeight: "bold",
//     margin: "0px",
//     //color: "#002c3e",
//     fontFamily: "Arial, sans-serif",
//     paddingLeft: "2rem",
//     paddingTop: "1rem",
//   },
//   list: {
//     paddingLeft: "1.5rem",
//     lineHeight: 1.6,
//   },
//   bold: {
//     fontWeight: "bold",
//   },
//   purpleText: {
//     color: "#8000ff",
//   },
//   image: {
//     width: "100%",
//     margin: "1rem 0",
//     borderRadius: "6px",
//     objectFit: "contain",
//   },
// });

// const CourseOverview: React.FC = () => {
//   const classes = useStyles();

//   return (
//     <>
//       <h2 className={classes.sectionTitleTop}>Course</h2>
//       <div className={classes.container}>
//         {/* Left Column */}

//         <div className={classes.leftColumn}>
//           <h3 className={classes.sectionTitle}>PROBLEM</h3>
//           <ul className={classes.list}>
//             <li>
//               In the digital era of AI/genAI, customer experience, industry
//               dynamics, business models, competence requirements, project
//               parameters change
//             </li>
//             <li>
//               But the leadership required to drive these changes has not changed
//               much
//             </li>
//             <li>
//               Most leaders still use the pre-digital style of leadership to
//               drive risky and uncertain AI transformation projects
//             </li>
//             <li>This results in their slow adoption or even failure</li>
//           </ul>

//           <h3 className={classes.sectionTitle}>SOLUTION</h3>
//           <ul className={classes.list}>
//             <li>
//               To drive AI transformation successfully, a digital leader must
//               demonstrate the following four essential behaviors:{" "}
//               <span className={classes.bold}>
//                 learning new skills, connecting with people, leveraging data,
//                 and delivering results
//               </span>
//             </li>
//             <li>
//               Which requires cultivation of the following 4 key competencies:{" "}
//               <span className={classes.bold}>
//                 Growth Mindset, Empathy, Informed decision-making and Fast
//                 Execution
//               </span>
//             </li>
//             <li>Each competency uniquely maps to a behavior</li>
//             <li>
//               Digital Leadership Framework providing step-by-step guidelines to
//               cultivate these competencies
//             </li>
//           </ul>

//           <h3 className={classes.sectionTitle}>FORMAT</h3>
//           <ul className={classes.list}>
//             <li>Instructor-driven online or classroom based</li>
//             <li>Duration: 12 hours spanning over 2 days</li>
//             <li>
//               <span className={classes.purpleText}>Target Audience:</span> All
//               Leaders/Managers at levels L1, L2, L3 and L4
//             </li>
//           </ul>
//         </div>

//         {/* Right Column */}
//         <div className={classes.rightColumn}>
//           <h3 className={classes.sectionTitle}>DIGITAL LEADERSHIP FRAMEWORK</h3>
//           <img
//             src={Framework}
//             alt="Digital Leadership Framework"
//             className={classes.image}
//           />

//           <h3 className={classes.sectionTitle}>
//             WHAT MAKES THIS COURSE UNIQUE?
//           </h3>
//           <ul className={classes.list}>
//             <li>
//               <span className={classes.purpleText}>Coaching</span> to ensure
//               practical application of competencies at workplace
//             </li>
//             <li>
//               <span className={classes.purpleText}>Call-to-Action</span> to
//               speed up your organization's AI/GenAI deployment
//             </li>
//             <li>
//               <span className={classes.purpleText}>Content</span> customization
//               to differentiate from competitors
//             </li>
//             <li>
//               <span className={classes.purpleText}>Collaboration</span> through
//               ecosystem
//             </li>
//           </ul>

//           <h3 className={classes.sectionTitle}>INTRODUCTORY TALK</h3>
//           <ul className={classes.list}>
//             <li>30-minute overview + 15 minutes of Q&A</li>
//             <li>Optional and free of charge</li>
//           </ul>
//         </div>
//       </div>
//     </>
//   );
// };

// export default CourseOverview;

import React from "react";
import { createUseStyles } from "react-jss";
import Framework from "../../../../assets/framework.png";
//import { useNavigate } from "react-router-dom";

const useStyles = createUseStyles({
  container: {
    padding: "2rem",
    //  fontFamily: "Arial, sans-serif",
    backgroundColor: "#fff",
    color: "#000",
    maxWidth: "1000px",
    margin: "0 auto",
  },
  sectionTitleTop: {
    fontSize: "40px",
    fontWeight: "bold",
    margin: "0px",
    marginTop: "60px",
    // fontFamily: "Arial, sans-serif",
    //  paddingLeft: "2rem",
    display: "flex",
    justifyContent: "center",
    paddingTop: "1rem",
    "@media (max-width: 600px)": {
      paddingLeft: "0rem",
    },
  },
  sectionTitle: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    margin: "2rem 0 1rem",
    // color: "#002c3e",
  },
  list: {
    paddingLeft: "1.5rem",
    lineHeight: 1.6,
  },
  bold: {
    fontWeight: "bold",
  },
  purpleText: {
    // color: "#8000ff",
    fontWeight: "bold",
  },
  image: {
    width: "80%",
    //  margin: "1rem 0",
    margin: "auto",
    borderRadius: "6px",
    objectFit: "contain",
  },
  button: {
    backgroundColor: "#1e3a5f",
    color: "white",
    border: "none",
    //  margin: "20px",
    borderRadius: "8px",
    padding: "16px 32px",
    fontSize: "1.1rem",
    fontWeight: "500",
    cursor: "pointer",
    transition: "all 0.3s ease",
    margin: "-30px auto" /* auto margins center block elements horizontally */,
    display: "block",
    boxShadow: "0 6px 12px rgba(92, 94, 95, 0.6)",
    gap: "10px",
    textDecoration: "none",
    "&:hover": {
      backgroundColor: "#2c4a6b",
      transform: "translateY(-2px)",
      boxShadow: "0 4px 12px rgba(30, 58, 95, 0.3)",
    },
    "&:active": {
      transform: "translateY(0)",
    },
    "@media (max-width: 768px)": {
      padding: "14px 28px",
      fontSize: "1rem",
    },
  },
});

const CourseOverview: React.FC = () => {
  const classes = useStyles();
  //const navigate = useNavigate();

  // const handleClick = () => {
  //   navigate("/member");
  // };
  const handleClick = () => {
    const mailtoLink =
      "mailto:info@scalinggenai.com?subject=Scaling GenAI consultation request&body=Hello,%0D%0A%0D%0AI would like to know more about Scaling GenAI.%0D%0A%0D%0AName:%0D%0ACompany:%0D%0AEmail:%0D%0APhone:%0D%0A%0D%0ARegards,%0D%0Aname";
    window.location.href = mailtoLink;
  };
  return (
    <>
      <button className={classes.button} onClick={handleClick}>
        Book a Consultation →
      </button>
      <h2 className={classes.sectionTitleTop}>Course</h2>
      <div className={classes.container}>
        {/* PROBLEM */}
        <h3 className={classes.sectionTitle}>PROBLEM</h3>
        <ul className={classes.list}>
          <li>
            In the digital era of AI/genAI, customer experience, industry
            dynamics, business models, competence requirements, project
            parameters change
          </li>
          <li>
            But the leadership required to drive these changes has not changed
            much
          </li>
          <li>
            Most leaders still use the pre-digital style of leadership to drive
            risky and uncertain AI transformation projects
          </li>
          <li>This results in their slow adoption or even failure</li>
        </ul>

        {/* SOLUTION */}
        <h3 className={classes.sectionTitle}>SOLUTION</h3>
        <ul className={classes.list}>
          <li>
            To drive AI transformation successfully, a digital leader must
            demonstrate the following four essential behaviors:{" "}
            <span className={classes.bold}>
              learning new skills, connecting with people, leveraging data, and
              delivering results
            </span>
          </li>
          <li>
            Which requires cultivation of the following 4 key competencies:{" "}
            <span className={classes.bold}>
              Growth Mindset, Empathy, Informed decision-making and Fast
              Execution
            </span>
          </li>
          <li>Each competency uniquely maps to a behavior</li>
          <li>
            Digital Leadership Framework provides step-by-step guidelines to
            cultivate these competencies
          </li>
        </ul>

        {/* DIGITAL LEADERSHIP FRAMEWORK */}
        <h3 className={classes.sectionTitle}>DIGITAL LEADERSHIP FRAMEWORK</h3>
        <img
          src={Framework}
          alt="Digital Leadership Framework"
          className={classes.image}
        />

        {/* FORMAT */}
        <h3 className={classes.sectionTitle}>FORMAT</h3>
        <ul className={classes.list}>
          <li>Instructor-driven online or classroom based</li>
          <li>Duration: 12 hours spanning over 2 days</li>
          <li>
            <span className={classes.purpleText}>Target Audience:</span> All
            Leaders/Managers at levels L1, L2, L3 and L4
          </li>
        </ul>

        {/* WHAT MAKES THIS COURSE UNIQUE */}
        <h3 className={classes.sectionTitle}>WHAT MAKES THIS COURSE UNIQUE?</h3>
        <ul className={classes.list}>
          <li>
            <span className={classes.purpleText}>Coaching</span> to ensure
            practical application of competencies at workplace
          </li>
          <li>
            <span className={classes.purpleText}>Call-to-Action</span> to speed
            up your organization's AI/GenAI deployment
          </li>
          <li>
            <span className={classes.purpleText}>Content</span> customization to
            differentiate from competitors
          </li>
          <li>
            <span className={classes.purpleText}>Collaboration</span> through
            ecosystem
          </li>
        </ul>

        {/* INTRODUCTORY TALK */}
        <h3 className={classes.sectionTitle}>INTRODUCTORY TALK</h3>
        <ul className={classes.list}>
          <li>30-minute overview + 15 minutes of Q&A</li>
          <li>Optional and free of charge</li>
        </ul>
      </div>
    </>
  );
};

export default CourseOverview;
