import { createUseStyles } from "react-jss";
import {
  Handshake,
  Compass,
  Users,
  Settings,
  Brain,
  ArrowRight,
} from "lucide-react";

const useStyles = createUseStyles({
  AIReskillingJourney: {
    padding: 32,
    textAlign: "center",
  },
  banner: {
    backgroundColor: "#e5e5e5",
    color: "#4b5563",
    padding: 16,
    fontSize: 14,
  },
  heading: {
    fontSize: 24,
    fontWeight: 600,
    marginTop: 16,
    "& span": {
      color: "#7e22ce",
    },
  },
  contentWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    marginTop: 40,
    gap: 60,
    flexWrap: "wrap",
    position: "relative",
  },
  verticalDivider: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: "calc(50% + 80px)",
    width: 1,
    borderLeft: "2px dotted #999",
    transform: "translateX(-50%)",
    "@media (max-width: 1100px)": {
      display: "none",
    },
  },
  leftSide: {
    display: "flex",
    alignItems: "center",
    gap: 16,
    zIndex: 1,
  },
  step: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontSize: 14,
    maxWidth: 160,
  },
  arrow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  iconCircle: {
    border: "1px solid black",
    borderRadius: "50%",
    width: 60,
    height: 60,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 28,
  },
  rightSide: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: 24,
    maxWidth: 400,
    zIndex: 1,
  },
  devItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontSize: 14,
    textAlign: "center",
  },
  caption: {
    fontSize: 12,
    fontStyle: "italic",
    marginTop: 24,
    color: "#6b7280",
  },
  footerText: {
    marginTop: 32,
    fontSize: 14,
    color: "#6b7280",
  },
  purple: {
    color: "#7e22ce",
  },
});

export default function AIReskillingJourney() {
  const classes = useStyles();

  return (
    <div className={classes.AIReskillingJourney}>
      <div className={classes.contentWrapper}>
        <div className={classes.verticalDivider} />

        <div className={classes.leftSide}>
          <div className={classes.step}>
            <div className={classes.iconCircle}>👤</div>
            <p>
              An individual <span className={classes.purple}>starts</span> with{" "}
              <br />
              <strong>AI/GenAI Reskilling Assessment</strong>
            </p>
          </div>
          <div className={classes.arrow}>
            <ArrowRight size={32} />
          </div>
          <div className={classes.step}>
            <Handshake size={60} />
            <p>
              <span className={classes.purple}>Commits</span> to <br />
              <strong>reskilling</strong> to new AI/GenAI role
            </p>
          </div>
          <div className={classes.arrow}>
            <ArrowRight size={32} />
          </div>
          <div className={classes.step}>
            <div className={classes.iconCircle}>🛤️</div>
            <p>
              <span className={classes.purple}>Completes</span> <br />
              prescribed <strong>reskilling tracks</strong>
            </p>
          </div>
        </div>

        <div className={classes.rightSide}>
          <div className={classes.devItem}>
            <Compass size={40} />
            <p>
              <span className={classes.purple}>Coaching</span> on <br />
              <strong>application of skills</strong> at workplace
            </p>
          </div>
          <div className={classes.devItem}>
            <Users size={40} />
            <p>
              <span className={classes.purple}>Collaborates</span> with other
              individuals <br />
              through <strong>ecosystem</strong>
            </p>
          </div>
          <div className={classes.devItem}>
            <Settings size={40} />
            <p>
              <span className={classes.purple}>Builds</span> on/for the job{" "}
              <br />
              <strong>skills</strong>
            </p>
          </div>
          <div className={classes.devItem}>
            <Brain size={40} />
            <p>
              <span className={classes.purple}>Updates</span>{" "}
              <strong>AI/GenAI knowledge</strong>
            </p>
          </div>
        </div>
      </div>

      <div className={classes.caption}>Continuous Competence Development</div>
    </div>
  );
}
