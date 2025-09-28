// // ReskillingDownload.tsx
// import React from "react";
// import { createUseStyles } from "react-jss";
// import starImage from "../../../assets/reskillgear.png";

// const useStyles = createUseStyles({
//   outerContainer: {
//     background: "#F9F7F2",
//     //height: "90vh",
//   },
//   container: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "space-between",
//     padding: 24,
//     maxWidth: 1100,
//     margin: "20px auto",
//     gap: 20,

//     background: "#F9F7F2",
//     borderRadius: 12,
//     // boxShadow: "0 6px 16px rgba(0, 0, 0, 0.15)",

//     "@media (max-width: 768px)": {
//       flexDirection: "column-reverse",
//       textAlign: "center",
//     },
//   },
//   left: {
//     flex: 1,
//     display: "flex",
//     flexDirection: "column",
//     gap: 16,
//     alignItems: "center", // centers both heading and button
//     textAlign: "center",
//   },

//   heading: {
//     fontSize: 40,
//     fontWeight: 600,
//     margin: 0,
//     "@media (max-width: 600px)": {
//       fontSize: 32,
//     },
//   },
//   // inside createUseStyles
//   button: {
//     backgroundColor: "#f9b233",
//     color: "#000",
//     width: "40%",
//     border: "none",
//     padding: "12px 24px",
//     borderRadius: 4,
//     fontSize: 16,
//     cursor: "pointer",
//     transition: "background 0.3s ease",
//     alignSelf: "center", // <-- centers this button horizontally
//   },

//   right: {
//     flex: 1,
//     "& img": {
//       width: "100%",
//       height: "auto",
//       borderRadius: 8,
//       objectFit: "cover",
//     },
//   },
// });

// type ReskillingDownloadProps = {
//   title?: string;

//   onDownload?: () => void;
// };

// const ReskillingDownload: React.FC<ReskillingDownloadProps> = ({
//   title = "AI/GenAI Reskilling Whitepaper",

//   onDownload,
// }) => {
//   const classes = useStyles();

//   return (
//     <div className={classes.outerContainer}>
//       <div className={classes.container}>
//         <div className={classes.left}>
//           <h2 className={classes.heading}>{title}</h2>
//           <button className={classes.button} onClick={onDownload}>
//             Download
//           </button>
//         </div>
//         <div className={classes.right}>
//           <img src={starImage} alt="Reskilling" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ReskillingDownload;

// ReskillingDownload.tsx
import React, { useContext } from "react";
import { createUseStyles } from "react-jss";
import { AuthContext } from "../../../context/AuthContext"; // adjust path
import { useNavigate } from "react-router-dom";
import starImage from "../../../assets/reskillgear.png"; // image
import pdfFile from "../../../assets/Whitepaper.pdf"; // PDF

const useStyles = createUseStyles({
  outerContainer: {
    background: "#F9F7F2",
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 24,
    maxWidth: 1100,
    margin: "20px auto",
    gap: 20,
    background: "#F9F7F2",
    borderRadius: 12,
    "@media (max-width: 768px)": {
      flexDirection: "column-reverse",
      textAlign: "center",
    },
  },
  left: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: 16,
    alignItems: "center",
    textAlign: "center",
  },
  heading: {
    fontSize: 40,
    fontWeight: 600,
    margin: 0,
    "@media (max-width: 600px)": {
      fontSize: 32,
    },
  },
  button: {
    backgroundColor: "#f9b233",
    color: "#000",
    width: "40%",
    border: "none",
    padding: "12px 24px",
    borderRadius: 4,
    fontSize: 16,
    cursor: "pointer",
    transition: "background 0.3s ease",
    alignSelf: "center",
    "@media (max-width: 768px)": {
      width: "80%",
    },
    "&:hover": {
      backgroundColor: "#e0a620",
    },
  },
  right: {
    flex: 1,
    "& img": {
      width: "100%",
      height: "auto",
      borderRadius: 8,
      objectFit: "cover",
      maxWidth: 500,
    },
  },
});

type ReskillingDownloadProps = {
  title?: string;
};

const ReskillingDownload: React.FC<ReskillingDownloadProps> = ({
  title = "AI/GenAI Reskilling Whitepaper",
}) => {
  const classes = useStyles();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleDownload = () => {
    if (!user) {
      // redirect to login if not logged in
      navigate("/login");
      return;
    }

    // trigger PDF download
    const link = document.createElement("a");
    link.href = pdfFile;
    link.download = "AI_Reskilling_Whitepaper.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={classes.outerContainer}>
      <div className={classes.container}>
        <div className={classes.left}>
          <h2 className={classes.heading}>{title}</h2>
          <button className={classes.button} onClick={handleDownload}>
            Download
          </button>
        </div>
        <div className={classes.right}>
          <img src={starImage} alt="Reskilling" />
        </div>
      </div>
    </div>
  );
};

export default ReskillingDownload;
