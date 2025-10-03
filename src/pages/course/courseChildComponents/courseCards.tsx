// import { createUseStyles } from "react-jss";
// import CourseImage1 from "../../../assets/CourseImage1.png";
// import CourseImage2 from "../../../assets/CourseImage2.png";
// import CourseImage3 from "../../../assets/CourseImage3.png";

// const useStyles = createUseStyles({
//   gridContainer: {
//     display: "grid",
//     gridTemplateColumns: "1fr",
//     backgroundColor: "#e5d8cf",
//     padding: "40px",
//     //gap: "1rem",
//     fontFamily: 'Georgia, "Times New Roman", serif',
//     alignItems: "stretch", // stretch children to equal height

//     "@media (min-width: 768px)": {
//       gridTemplateColumns: "repeat(3, 1fr)",
//     },
//   },
//   card: {
//     display: "flex",
//     flexDirection: "column",
//     backgroundColor: "#e5d8cf",
//     boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
//     marginBottom: "20px",
//   },
//   imageWrapper: {
//     height: "12rem",
//     overflow: "hidden",
//   },
//   image: {
//     width: "100%",
//     height: "100%",
//     objectFit: "cover",
//   },
//   content: {
//     flex: 1,
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "space-between",
//     padding: "10px",
//     border: "1px solid black",
//   },
//   title: {
//     fontSize: "35px",
//     fontWeight: "bold",
//     marginBottom: "0.5rem",
//     marginTop: "0.5rem",
//     borderBottom: "1px solid #000",
//     paddingBottom: "0.25rem",
//   },
//   button: {
//     marginTop: "1rem",
//     backgroundColor: "#000",
//     color: "#fff",
//     padding: "0.5rem 1rem",
//     border: "none",
//     cursor: "pointer",
//     alignSelf: "flex-start",
//   },
//   description: {
//     margin: "4px 0",
//   },
// });

// const courseImages = [
//   CourseImage1,
//   CourseImage2,
//   CourseImage3,
//   CourseImage3,
//   CourseImage2,
//   CourseImage1,
// ];

// const courses = [
//   {
//     title: "Essential Competencies of AI/GenAI Leader",
//     audience: "For executives and middle managers",
//     hours: "12 hours",
//     mode: "Instructor-led",
//     delivery: "Online or In-person",
//   },
//   {
//     title: "Generative AI Technical Masterclass",
//     audience: "For Technical professionals",
//     hours: "30 hours",
//     mode: "Instructor-led",
//     delivery: "Online or in-person",
//   },
//   {
//     title: "AI/GenAI Transformation Strategy",
//     audience: "For executives and middle managers",
//     hours: "12  hours",
//     mode: "Instructor-led",
//     delivery: "Online or in-person",
//   },
//   {
//     title: "Essential Competencies of AI Leader",
//     audience: "For executives and middle managers",
//     hours: "12 hours",
//     mode: "Instructor-led",
//     delivery: "Online or In-person",
//   },
//   {
//     title: "Cultivating AI/GenAI Mindset",
//     audience: "For executives and middle managers",
//     hours: "12  hours",
//     mode: "Instructor-led",
//     delivery: "Online or in-person",
//   },
//   {
//     title: "AI/GenAI Operational Readiness",
//     audience: "For executives and middle managers",
//     hours: "12 hours",
//     mode: "Instructor-led",
//     delivery: "Online or In-person",
//   },
// ];

// export default function CourseCards() {
//   const classes = useStyles();

//   return (
//     <div className={classes.gridContainer}>
//       {courses.map((course, index) => (
//         <div key={index} className={classes.card}>
//           <div className={classes.imageWrapper}>
//             <img
//               src={courseImages[index]}
//               alt="Course Visual"
//               className={classes.image}
//             />
//           </div>
//           <div className={classes.content}>
//             <div>
//               <h3 className={classes.title}>{course.title}</h3>
//               <p className={classes.description}>{course.audience}</p>
//               <p className={classes.description}>{course.hours}</p>
//               <p className={classes.description}>{course.mode}</p>
//               <p className={classes.description}>{course.delivery}</p>
//             </div>
//             <button className={classes.button} >Explore</button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }
// import { createUseStyles } from "react-jss";
// import { useNavigate } from "react-router-dom";
// import CourseImage1 from "../../../assets/Book cover_final_DSF.jpg";
// import CourseImage2 from "../../../assets/Echo_Final.jpg";
// import CourseImage3 from "../../../assets/Scaling GenAI_Cover.jpg";

// const useStyles = createUseStyles({
//   gridContainer: {
//     display: "grid",
//     gridTemplateColumns: "repeat(3, 1fr)", // 3 columns
//     gap: "20px",
//     backgroundColor: "#ffffff",
//     padding: "40px",
//     fontFamily: 'Georgia, "Times New Roman", serif',
//     alignItems: "stretch",

//     "@media (max-width: 768px)": {
//       gridTemplateColumns: "1fr", // Stack on smaller screens
//     },
//   },
//   card: {
//     display: "flex",
//     flexDirection: "column",
//     backgroundColor: "#000000",
//     boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
//     borderRadius: "8px",
//     overflow: "hidden",
//     width: "100%",
//   },
//   imageWrapper: {
//     height: "20rem",
//     display: "flex",
//     paddingTop: "20px",
//     paddingBottom: "20px",
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: "#000000",
//     overflow: "hidden",
//   },
//   image: {
//     maxHeight: "100%",
//     width: "auto",
//     objectFit: "contain",
//   },
//   content: {
//     flex: 1,
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "space-between",
//     padding: "10px",
//     color: "#ffffff",
//     border: "1px solid black",
//   },
//   title: {
//     fontSize: "20px",
//     fontWeight: "bold",
//     marginBottom: "0.5rem",
//     marginTop: "0.5rem",
//     color: "#ffffff",
//     borderBottom: "1px solid #fff",
//     paddingBottom: "0.25rem",
//   },
//   button: {
//     marginTop: "1rem",
//     backgroundColor: "#000",
//     color: "#fff",
//     padding: "0.5rem 1rem",
//     //border: "none",
//     cursor: "pointer",
//     alignSelf: "flex-start",
//     border: "1px solid #fff",
//     borderRadius: "20px",
//   },
//   description: {
//     margin: "4px 0",
//   },
// });

// const courseImages = [
//   CourseImage2,

//   CourseImage3,
//   CourseImage1,
//   CourseImage3,
//   CourseImage2,
//   CourseImage1,
// ];

// const courses = [
//   {
//     title: "Essential Competencies of AI/GenAI Leader",
//     audience: "For executives and middle managers",
//     hours: "12 hours",
//     mode: "Instructor-led",
//     delivery: "Online or In-person",
//   },
//   {
//     title: "Generative AI Technical Masterclass",
//     audience: "For Technical professionals",
//     hours: "30 hours",
//     mode: "Instructor-led",
//     delivery: "Online or in-person",
//   },
//   {
//     title: "AI/GenAI Transformation Strategy",
//     audience: "For executives and middle managers",
//     hours: "12 hours",
//     mode: "Instructor-led",
//     delivery: "Online or in-person",
//   },
//   {
//     title: "Cultivating AI/GenAI Mindset",
//     audience: "For executives and middle managers",
//     hours: "12 hours",
//     mode: "Instructor-led",
//     delivery: "Online or in-person",
//   },
//   {
//     title: "AI/GenAI Operational Readiness",
//     audience: "For executives and middle managers",
//     hours: "12 hours",
//     mode: "Instructor-led",
//     delivery: "Online or In-person",
//   },
// ];

// export default function CourseCards() {
//   const classes = useStyles();
//   const navigate = useNavigate();

//   const handleExploreClick = (index: number) => {
//     navigate(`/courses/course${index + 1}`);
//   };

//   return (
//     <div className={classes.gridContainer}>
//       {courses.map((course, index) => (
//         <div key={index} className={classes.card}>
//           <div className={classes.imageWrapper}>
//             <img
//               src={courseImages[index % courseImages.length]}
//               alt={`Image for ${course.title}`}
//               className={classes.image}
//             />
//           </div>
//           <div className={classes.content}>
//             <div>
//               <h3 className={classes.title}>{course.title}</h3>
//               <p className={classes.description}>{course.audience}</p>
//               <p className={classes.description}>{course.hours}</p>
//               <p className={classes.description}>{course.mode}</p>
//               <p className={classes.description}>{course.delivery}</p>
//             </div>
//             <button
//               className={classes.button}
//               onClick={() => handleExploreClick(index)}
//             >
//               Explore
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }
import { createUseStyles } from "react-jss";
import { useNavigate } from "react-router-dom";
import CourseImage5 from "../../../assets/Operational readiness.jpg";
import CourseImage1 from "../../../assets/leadership_pic.jpg";
import CourseImage4 from "../../../assets/Mindset.jpg";
import CourseImage2 from "../../../assets/Technical_masterclass.jpg";
import CourseImage3 from "../../../assets/Strategy.jpg";

const useStyles = createUseStyles({
  container: {
    backgroundColor: "#000",
    padding: 40,
    position: "relative",
  },
  header: {
    color: "white",
    marginBottom: 40,
    margin: 0,
    fontSize: 40,
    fontWeight: "bold",
    //textAlign: "center",
    "@media (max-width: 500px)": {
      fontSize: "33px", // stack on mobile
    },
  },
  cardsContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)", // 3 in a row
    gap: 24,
    "@media (max-width: 1024px)": {
      gridTemplateColumns: "repeat(2, 1fr)", // 2 on medium
    },
    "@media (max-width: 768px)": {
      gridTemplateColumns: "1fr", // stack on mobile
    },
  },
  darkCard: {
    backgroundColor: "#111",
    color: "white",
    borderRadius: 12,
    overflow: "hidden",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    display: "flex",
    boxShadow: "0 10px 20px rgba(255, 255, 255, 0.2)",
    flexDirection: "column",
    justifyContent: "space-between",
    "&:hover": {
      transform: "translateY(-5px)",
      boxShadow: "0 10px 20px rgba(255,255,255,0.1)",
    },
  },
  darkCardImage: {
    width: "100%",
    height: 250,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#222",
    overflow: "hidden",
    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
  },
  cardContent: {
    padding: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    flex: 1,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 12,
    lineHeight: 1.3,
    borderBottom: "1px solid #fff",
    paddingBottom: 6,
  },
  cardDescription: {
    fontSize: 14,
    marginBottom: 6,
    opacity: 0.9,
  },
  darkButton: {
    marginTop: "1rem",
    backgroundColor: "transparent",
    border: "1px solid white",
    padding: "10px 20px",
    borderRadius: 24,
    fontSize: 14,
    cursor: "pointer",
    alignSelf: "flex-start",
    color: "white",
    transition: "all 0.3s ease",
    "&:hover": {
      backgroundColor: "white",
      color: "#111",
    },
  },
});

const courseImages = [
  CourseImage1,
  CourseImage2,
  CourseImage3,
  CourseImage4,
  CourseImage5,
];

const courses = [
  {
    title: "Essential Competencies for AI/GenAI Leaders",
    audience: "For executives and middle managers",
    hours: "12 hours",
    mode: "Instructor-led",
    delivery: "Online or in-person",
  },
  {
    title: "Generative AI Technical Masterclass",
    audience: "For technical professionals",
    hours: "18 hours",
    mode: "Instructor-led",
    delivery: "Online or in-person",
  },
  {
    title: "AI/GenAI Transformation Strategy",
    audience: "For executives and middle managers",
    hours: "6 hours",
    mode: "Instructor-led",
    delivery: "Online or in-person",
  },
  {
    title: "Cultivating AI/GenAI Mindset",
    audience: "For executives, middle managers, and early career professionals",
    hours: "4 hours",
    mode: "Instructor-led",
    delivery: "Online or in-person",
  },
  {
    title: "AI/GenAI Operational Readiness",
    audience: "For executives and middle managers",
    hours: "12 hours",
    mode: "Instructor-led",
    delivery: "Online or in-person",
  },
];

export default function CourseCards() {
  const classes = useStyles();
  const navigate = useNavigate();

  const courseRoutes = [
    "/courses/Essential-Competencies-of-AI/GenAI-Leader",
    "/courses/Generative-AI-Technical-Masterclass",
    "/courses/AI/GenAI-Transformation-Strategy",

    "/courses/AI/GenAI-Operational-Readiness",
    "/courses/Cultivating-AI/GenAI-Mindset",
  ];
  const handleExploreClick = (index: number) => {
    if (index >= 0 && index < courseRoutes.length) {
      navigate(courseRoutes[index]);
    } else {
      console.error("No course route for index", index);
    }
  };

  return (
    <div className={classes.container}>
      <h1 className={classes.header}>Instructor-led Courses</h1>
      <div className={classes.cardsContainer}>
        {courses.map((course, index) => (
          <div key={index} className={classes.darkCard}>
            <div className={classes.darkCardImage}>
              <img
                src={courseImages[index % courseImages.length]}
                alt={course.title}
                loading="lazy"
              />
            </div>
            <div className={classes.cardContent}>
              <div>
                <h2 className={classes.cardTitle}>{course.title}</h2>
                <p className={classes.cardDescription}>{course.audience}</p>
                <p className={classes.cardDescription}>{course.hours}</p>
                <p className={classes.cardDescription}>{course.mode}</p>
                <p className={classes.cardDescription}>{course.delivery}</p>
              </div>
              <button
                className={classes.darkButton}
                onClick={() => handleExploreClick(index)}
              >
                Explore
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
