import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  "@global": {
    "*, *::before, *::after": {
      boxSizing: "border-box",
    },
    body: {
      margin: 0,
      padding: 0,
      overflowX: "hidden",
      // fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      backgroundColor: "#000",
    },
  },

  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    paddingTop: "150px",
    paddingLeft: "1rem",
    paddingRight: "1rem",
    minHeight: "100vh",
    color: "#fff",
    overflowX: "hidden",
    maxWidth: "100vw",
    "@media (max-width: 500px)": {
      minHeight: "80vh",
    },
  },

  homeHeader: {
    //display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "1.5rem",
    width: "100%",
    // backgroundColor: "rgba(0, 0, 0, 0.1)", // optional overlay behind text
    padding: "1rem 2rem",
    borderRadius: "12px",
    "@media (max-width: 500px)": {
      marginBottom: "30px",
    },
  },

  homeHeaderLine: {
    margin: 0,
    fontSize: "clamp(2.2rem, 6vw, 5rem)",
    fontWeight: 700,
    lineHeight: 1.1,
    textShadow: "2px 2px 8px rgba(0, 0, 0, 0.7)",
  },

  homeHeader3: {
    marginTop: "1.5rem",
    fontWeight: 400,
    fontSize: "clamp(1.2rem, 4vw, 2rem)",
    color: "#ffffff",
    maxWidth: "90%",
    textShadow: "2px 2px 6px rgba(0, 0, 0, 0.7)",
  },

  "@media (max-width: 600px)": {
    container: {
      paddingTop: "100px",
      paddingBottom: "50px",
    },
    homeHeaderLine: {
      fontSize: "clamp(1.8rem, 8vw, 2.5rem)",
    },
    homeHeader3: {
      fontSize: "clamp(1rem, 5vw, 1.2rem)",
    },
  },
});

const EcosystemTop = () => {
  const classes = useStyles();

  return (
    // <div className={classes.backgroundWrapper}>
    <div className={classes.container}>
      <div className={classes.homeHeader}>
        <h1 className={classes.homeHeaderLine}>
          How fast a firm scales GenAI largely depends on it’s ability to work
          in Ecosystems
        </h1>
      </div>
      <h3 className={classes.homeHeader3}>
        Scale 3X faster through ecosystems
      </h3>
    </div>
    // </div>
  );
};

export default EcosystemTop;
