import React from "react";
import { createUseStyles } from "react-jss";
//import Framework from "../../../../assets/transformer.png";

// Section Headings
const HEADINGS = {
  course: "Course",
  problem: "PROBLEM",
  solution: "SOLUTION",
  ///  framework: "DIGITAL LEADERSHIP FRAMEWORK",
  format: "FORMAT",
  unique: "WHAT MAKES THIS COURSE UNIQUE?",
  talk: "INTRODUCTORY TALK",
};

const useStyles = createUseStyles({
  container: {
    padding: "2rem",
    // fontFamily: "Arial, sans-serif",
    backgroundColor: "#fff",
    color: "#000",
    maxWidth: "1000px",
    margin: "0 auto",
  },
  sectionTitleTop: {
    fontSize: "2.5rem", // consistent with rem
    fontWeight: "bold",
    margin: "0",
    // paddingLeft: "2rem",
    paddingTop: "1rem",
    display: "flex",
    justifyContent: "center",
    //fontFamily: "Arial, sans-serif",
    marginTop: "60px",
    "@media (max-width: 600px)": {
      paddingLeft: "0rem",
    },
  },
  sectionTitle: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    margin: "2rem 0 1rem",
    color: "#000",
  },
  list: {
    paddingLeft: "1.5rem",
    lineHeight: 1.6,
  },
  purpleText: {
    color: "#000",
    fontWeight: "bold",
  },
  image: {
    // width: "100%",

    height: "500px",
    borderRadius: "6px",
    //objectFit: "contain",
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
  const handleClick = () => {
    const mailtoLink =
      "mailto:info@scalinggenai.com?subject=Scaling GenAI consultation request&body=Hello,%0D%0A%0D%0AI would like to know more about Scaling GenAI.%0D%0A%0D%0AName:%0D%0ACompany:%0D%0AEmail:%0D%0APhone:%0D%0A%0D%0ARegards,%0D%0Aname";
    window.location.href = mailtoLink;
  };
  return (
    <>
      {" "}
      <button className={classes.button} onClick={handleClick}>
        Book a Consultation →
      </button>
      <main>
        <header>
          <h2 className={classes.sectionTitleTop}>{HEADINGS.course}</h2>
        </header>

        <div className={classes.container}>
          {/* PROBLEM */}
          <section>
            <h3 className={classes.sectionTitle}>{HEADINGS.problem}</h3>
            <ul className={classes.list}>
              <li>
                GenAI is a digital transformation technology that can enable
                business transformation
              </li>
              <li>
                Based on transformer architecture, an evolution of neural
                networks — the foundation of deep learning
              </li>
              <li>
                A wealth of GenAI content exists: research papers, articles,
                blogs, videos, and social media
              </li>
              <li>
                These materials are often filled with technical jargon and
                complex visuals intended for researchers
              </li>
              <li>
                This makes it difficult for professionals and students to fully
                grasp the concepts
              </li>
            </ul>
          </section>

          {/* SOLUTION */}
          <section>
            <h3 className={classes.sectionTitle}>{HEADINGS.solution}</h3>
            <ul className={classes.list}>
              <li>
                Technical reskilling is critical to leading AI/GenAI
                transformation
              </li>
              <li>
                This masterclass simplifies complex GenAI concepts, delivering
                high-quality applicable knowledge
              </li>
              <li>
                Covers GenAI 2.0: scaling, operational readiness, multimodal
                capabilities, and advanced LLM features
              </li>
            </ul>
          </section>

          {/* DIGITAL LEADERSHIP FRAMEWORK */}
          <section>
            {/* <h3 className={classes.sectionTitle}>{HEADINGS.framework}</h3> */}
            {/* <img
            src={Framework}
            alt="Digital Leadership Framework"
            className={classes.image}
          /> */}
          </section>

          {/* FORMAT */}
          <section>
            <h3 className={classes.sectionTitle}>{HEADINGS.format}</h3>
            <ul className={classes.list}>
              <li>Instructor-led: online or in-class options</li>
              <li>Duration: 18 hours</li>
              <li>
                <span className={classes.purpleText}>Target Audience:</span>{" "}
                Solution architects, developers, project managers, consultants,
                test engineers, system administrators
              </li>
            </ul>
          </section>

          {/* WHAT MAKES THIS COURSE UNIQUE */}
          <section>
            <h3 className={classes.sectionTitle}>{HEADINGS.unique}</h3>
            <ul className={classes.list}>
              <li>
                <span className={classes.purpleText}>Coaching</span> ensures
                workplace application of skills
              </li>
              <li>
                <span className={classes.purpleText}>Call-to-Action</span>{" "}
                accelerates GenAI deployment in organizations
              </li>
              <li>
                <span className={classes.purpleText}>Content</span>{" "}
                customization to stand out in your domain
              </li>
              <li>
                <span className={classes.purpleText}>Collaboration</span>{" "}
                through partnerships and ecosystems
              </li>
            </ul>
          </section>

          {/* INTRODUCTORY TALK */}
          <section>
            <h3 className={classes.sectionTitle}>{HEADINGS.talk}</h3>
            <ul className={classes.list}>
              <li>30-minute overview + 15-minute Q&A</li>
              <li>Optional and free of charge</li>
            </ul>
          </section>
        </div>
      </main>
    </>
  );
};

export default CourseOverview;
