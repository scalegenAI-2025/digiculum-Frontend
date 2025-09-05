import { createUseStyles } from "react-jss";
import book from "../../../../assets/leadership_pic.jpg";

const useStyles = createUseStyles({
  container: {
    backgroundImage: `url(${book})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "#fff",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center", // center vertically
    alignItems: "center", // center horizontally
    padding: "40px",
    textAlign: "center",
    "@media (max-width: 600px)": {
      gridTemplateColumns: "1fr",
      minHeight: "80vh",
    },
  },
  heading: {
    fontSize: "clamp(38px, 6vw, 90px)", // scales between mobile and desktop
    fontWeight: 900,
    lineHeight: 1.2,
    textShadow: `
      4px 4px 15px rgba(0, 0, 0, 0.9),
      0px 0px 10px rgba(0, 0, 0, 0.6)
    `,
    maxWidth: "90%",
    wordBreak: "break-word",
    "@media (max-width: 500px)": {
      fontSize: "clamp(30px, 6vw, 90px)",
    },
  },
});

export default function LandingSlide() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h1 className={classes.heading}>
        Essential Competencies <br />
        for AI/GenAI Leaders
      </h1>
    </div>
  );
}
