import { createUseStyles } from "react-jss";
import book from "../../../../assets/digital.webp";
import speaker from "../../../../assets/amitsirsecondpic.png";
import qr from "../../../../assets/QR.png";

const useStyles = createUseStyles({
  container: {
    backgroundColor: "#fff", // changed to white
    color: "#000",
    // minHeight: "100vh",
    padding: "40px 20px",
    //fontFamily: `'Helvetica Neue', Arial, sans-serif`,
    display: "flex",
    marginTop: "100px",
    flexDirection: "column",
  },
  heading: {
    fontSize: "30px",
    fontWeight: 600,
    lineHeight: 1.2,
    marginBottom: "50px",
    //  textAlign: "center",
  },
  contentRow: {
    display: "flex",
    justifyContent: "space-between",
    //  gap: "40px", // spacing between sections
    width: "100%",
    flexWrap: "wrap",
    alignItems: "stretch", // make text & images equal height
  },
  left: {
    flex: "1 1 300px",
    display: "flex",
    flexDirection: "column",
    //justifyContent: "space-between",
    minWidth: "250px",
  },
  center: {
    flex: "1 1 300px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minWidth: "250px",
  },
  right: {
    flex: "1 1 300px",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    minWidth: "250px",
  },
  subtitle: {
    fontSize: "20px",
    marginBottom: "10px",
    fontWeight: 500,
  },
  role: {
    fontStyle: "italic",
    fontSize: "16px",
    marginBottom: "20px",
  },
  contact: {
    fontSize: "16px",
    lineHeight: 1.5,
  },
  qr: {
    width: "80px",
    margin: "10px 0",
  },
  linkedin: {
    color: "#d4a0f0",
    fontStyle: "italic",
  },
  book: {
    width: "100%",
    maxWidth: "250px",
    height: "auto",
  },
  speaker: {
    width: "100%",
    maxWidth: "320px",
    height: "auto",
  },
  "@media (max-width: 1024px)": {
    contentRow: {
      flexDirection: "column",
      gap: "30px",
      alignItems: "center",
    },
    left: {
      textAlign: "center",
      alignItems: "center",
    },
    right: {
      justifyContent: "center",
    },
  },
  orderButton: {
    backgroundColor: "#002c3e",
    color: "white",
    border: "none",
    padding: "15px 30px",
    fontSize: "18px",
    fontWeight: "bold",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    "&:hover": {
      backgroundColor: "#1e4a66",
      transform: "translateY(-2px)",
    },
  },
});

export default function OrderFirstBook() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.contentRow}>
        {/* LEFT SECTION */}

        <div className={classes.right}>
          <img src={speaker} alt="Amit Prabhu" className={classes.speaker} />
        </div>
        {/* CENTER SECTION */}

        <div className={classes.left}>
          <div className={classes.heading}>A Course by Amit Prabhu</div>
          <div className={classes.role}>
            AI Consultant, Author, Speaker, Business Trainer, Policymaker,
            Entrepreneur, and Career Coach
          </div>
          <div className={classes.contact}>
            amit@amitprabhu.net <br />
            <a
              href="https://www.amitprabhu.net"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "rgb(22 105 189)" }}
            >
              www.amitprabhu.net
            </a>
            <br />
            <img src={qr} alt="QR Code" className={classes.qr} />
            <div className={classes.linkedin}>Connect on LinkedIn</div>
          </div>
        </div>
        {/* RIGHT SECTION */}
        <div className={classes.center}>
          <div className={classes.contact}>Based on his book</div>
          <img src={book} alt="Book" className={classes.book} />
          <div className={classes.contact}>Available on Amazon</div>
          <button
            className={classes.orderButton}
            onClick={() =>
              (window.location.href =
                "https://www.amazon.com/Scaling-Generative-Operational-Readiness-Enterprises/dp/1637427980")
            }
          >
            Order →
          </button>
        </div>
      </div>
    </div>
  );
}
