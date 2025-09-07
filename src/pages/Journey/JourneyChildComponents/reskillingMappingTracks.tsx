// import React from "react";
// import { createUseStyles } from "react-jss";

// import MapDai from "../../../assets/MAP_DAI.png";
// import MapExe from "../../../assets/MAP_Executive.png";
// import MapFin from "../../../assets/MAP_Finance.png";
// import MapHr from "../../../assets/MAP_HR.png";
// import MapIt from "../../../assets/MAP_IT.png";
// import MapLeg from "../../../assets/MAP_Legal.png";
// import MapMar from "../../../assets/MAP_Marketing.png"; // ✅ corrected
// import MapOper from "../../../assets/MAP_Operations.png";
// import MapProd from "../../../assets/MAP_PROJ_MANAGE.png";
// import Mapdev from "../../../assets/MAP_Prod_Dev.png";
// import Mapsales from "../../../assets/MAP_Sales.png";

// import track1 from "../../../assets/tracks1.png";
// import track2 from "../../../assets/tracks2.png";
// import track_role_map from "../../../assets/Track_role_map.png";

// // Styles
// const useStyles = createUseStyles({
//   container: {
//     width: "100%",
//     height: "100vh",
//     overflowY: "auto",
//     overflowX: "hidden",
//   },
//   section: {
//     height: "100vh",
//     width: "100%",
//     backgroundPosition: "center",
//     backgroundRepeat: "no-repeat",
//   },

//   // 🎨 Different style groups
//   first: {
//     backgroundSize: "cover",
//     border: "5px solid red",
//   },
//   second: {
//     backgroundSize: "contain",
//     backgroundColor: "#111",
//   },
//   middle: {
//     backgroundSize: "cover",
//     filter: "grayscale(50%)",
//   },
//   last: {
//     backgroundSize: "contain",
//     borderTop: "10px solid blue",
//   },
// });

// // Image list
// const images: string[] = [
//   track1,
//   track2,
//   MapDai,
//   MapExe,
//   MapFin,
//   MapHr,
//   MapIt,
//   MapLeg,
//   MapMar,
//   MapOper,
//   MapProd,
//   Mapdev,
//   Mapsales,
//   track_role_map,
// ];

// const FullScreenImages: React.FC = () => {
//   const classes = useStyles();

//   return (
//     <div className={classes.container}>
//       {images.map((img, idx) => {
//         let sectionClass = classes.middle;

//         if (idx === 0) sectionClass = classes.first; // First image
//         else if (idx === 1) sectionClass = classes.second; // Second image
//         else if (idx === images.length - 1) sectionClass = classes.last; // Last image

//         return (
//           <div
//             key={idx}
//             className={`${classes.section} ${sectionClass}`}
//             style={{ backgroundImage: `url(${img})` }}
//           />
//         );
//       })}
//     </div>
//   );
// };

// export default FullScreenImages;
import React, { useState } from "react";
import { createUseStyles } from "react-jss";

import MapDai from "../../../assets/MAP_DAI.png";
import MapExe from "../../../assets/MAP_Executive.png";
import MapFin from "../../../assets/MAP_Finance.png";
import MapHr from "../../../assets/MAP_HR.png";
import MapIt from "../../../assets/MAP_IT.png";
import MapLeg from "../../../assets/MAP_Legal.png";
import MapMar from "../../../assets/MAP_Legal.png";
import MapOper from "../../../assets/MAP_Operations.png";
import MapProd from "../../../assets/MAP_PROJ_MANAGE.png";
import Mapdev from "../../../assets/MAP_Prod_Dev.png";
import Mapsales from "../../../assets/MAP_Sales.png";

import track1 from "../../../assets/Tracks n courses.png";
import track2 from "../../../assets/tracks2.png";
import track_role_map from "../../../assets/Track_role_map.png";
import FooterContact from "../../home/homechildComponents/FooterContact";
import Navbar from "../../home/homechildComponents/Navbar";
import MappingVideoSection from "./mappingVideo";
import AIReskillingAssessment from "./AIReskillingAssessment";

const useStyles = createUseStyles({
  "@global": {
    html: {
      margin: 0,
      padding: 0,
      overflowX: "hidden",
    },
    body: {
      margin: 0,
      padding: 0,
      overflowX: "hidden",
    },
  },

  container: {
    width: "100%",
    overflowY: "auto",
    overflowX: "hidden",
    position: "relative",
    backgroundColor: "#fff",
  },
  section: {
    width: "90%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    flexDirection: "column",
    padding: "20px 0",
    margin: "0 auto",
  },
  first: {
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  last: {
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
  sliderContainer: {
    width: "85%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    backgroundColor: "#fff",
    borderRadius: "15px",
    padding: "20px",
    margin: "0 auto",
  },
  sliderImg: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
    borderRadius: "12px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
    transition: "transform 0.6s ease, opacity 0.6s ease",
  },
  navButton: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    backgroundColor: "rgba(200,200,200,0.8)",
    border: "none",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
    transition: "all 0.3s ease",
    "& svg": {
      color: "#000",
      width: "20px",
      height: "20px",
    },
    "&:hover": {
      backgroundColor: "rgba(150,150,150,0.8)",
      transform: "translateY(-50%) scale(1.1)",
    },
    "&:disabled": {
      opacity: 0.4,
      cursor: "not-allowed",
      boxShadow: "none",
    },
  },
  prevButton: {
    left: "10px",
  },
  nextButton: {
    right: "10px",
  },
  para: {
    color: "black",
    fontSize: "20px",
    //textAlign: "center",
    paddingLeft: "70px",
    paddingTop: "30px",
    paddingRight: "70px",
  },
});

const images: string[] = [
  track1,
  track2,
  MapIt,
  MapDai,
  MapMar,
  Mapsales,
  MapLeg,
  Mapdev,
  MapProd,
  MapOper,
  MapHr,
  MapFin,
  MapExe,
  track_role_map,
];

const FullScreenImages: React.FC = () => {
  const classes = useStyles();
  const middleImages = images.slice(2, images.length - 1);
  const [currentIndex, setCurrentIndex] = useState(0);

  const goNext = () =>
    setCurrentIndex((prev) =>
      prev === middleImages.length - 1 ? prev : prev + 1
    );

  const goPrev = () => setCurrentIndex((prev) => (prev === 0 ? 0 : prev - 1));

  return (
    <>
      <Navbar />
      <MappingVideoSection />
      <div className={classes.container}>
        {/* First static section */}

        {/* Last static section */}
        <div className={`${classes.section} ${classes.last}`} />
        <div className={`${classes.section} ${classes.last}`}>
          <img
            src={images[images.length - 1]}
            alt="Track role map"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
            }}
          />
        </div>
        <p className={classes.para}>
          Each reskilling track comprises mandatory courses: Generative AI
          Fundamentals, Prompt Engineering, Bias and Hallucination; and
          track-specific courses. see the mapping below:
        </p>
        <div className={`${classes.section} ${classes.first}`} />
        <img
          src={images[0]}
          alt="Track 1"
          style={{
            width: "90%",
            height: "auto",
            display: "block",
            margin: "0 auto",
          }}
        />
        <p className={classes.para}>
          The reskilling assessment algorithm considers user's current
          background, experience with AI, and future AI aspirations, if any, and
          accordingly provides a target role. If a user is unclear about his/her
          AI career aspirations, the algorithm considers the current background
          and selects the natural progression or gradual climb mapping to a
          target role. It avoids the steep curve mapping. You can find the
          different function-specific target role mappings below:
        </p>

        {/* Slider */}
        <div className={classes.section}>
          <div className={classes.sliderContainer}>
            <img
              key={currentIndex}
              src={middleImages[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              className={classes.sliderImg}
            />

            <button
              onClick={goPrev}
              className={`${classes.navButton} ${classes.prevButton}`}
              disabled={currentIndex === 0}
            >
              {"<"}
            </button>

            <button
              onClick={goNext}
              className={`${classes.navButton} ${classes.nextButton}`}
              disabled={currentIndex === middleImages.length - 1}
            >
              {">"}
            </button>
          </div>
        </div>
      </div>
      <AIReskillingAssessment />
      <FooterContact />
    </>
  );
};

export default FullScreenImages;
