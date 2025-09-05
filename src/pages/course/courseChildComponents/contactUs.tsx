import { useState } from "react";
import { createUseStyles } from "react-jss";
import { toast } from "react-toastify";
const useStyles = createUseStyles({
  container: {
    backgroundColor: "#ffffff",
    padding: 40,
    display: "flex",

    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    "@media (max-width: 700px)": {
      padding: 20,
    },
  },
  hireButton: {
    position: "absolute",
    top: 20,
    right: 40,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    color: "#000",
    border: "none",
    padding: "12px 24px",
    borderRadius: 25,
    fontSize: 16,
    cursor: "pointer",
    fontWeight: 500,
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.2)",
    },
    "@media (max-width: 700px)": {
      position: "static",
      marginBottom: 20,
      width: "100%",
    },
  },
  title: {
    fontSize: "35px",
    fontWeight: 400,
    color: "#fff",
    marginBottom: 20,
    paddingLeft: "60px",
    letterSpacing: "-0.5px",
    "@media (max-width: 700px)": {
      fontSize: 28,
      textAlign: "center",
    },
  },
  separator: {
    width: "100%",
    height: "1.3px",
    backgroundColor: "#000",
    marginBottom: 40,
  },
  mainContent: {
    display: "flex",
    //  alignItems: "flex-start",
    gap: 120,
    maxWidth: 1400,
    "@media (max-width: 700px)": {
      flexDirection: "column",
      gap: 40,
    },
  },
  leftSection: {
    flex: 1,
    maxWidth: 500,
    "@media (max-width: 700px)": {
      maxWidth: "100%",
    },
  },
  subtitle: {
    fontSize: "50px",
    fontWeight: 400,
    color: "#000",
    lineHeight: 1.1,
    letterSpacing: "-1px",
    "@media (max-width: 700px)": {
      fontSize: 36,
      textAlign: "center",
    },
  },
  formSection: {
    flex: 1,
    maxWidth: 600,
    "@media (max-width: 700px)": {
      maxWidth: "100%",
    },
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
  },
  inputRow: {
    display: "flex",
    gap: 20,
    flexWrap: "nowrap",
    "@media (max-width: 700px)": {
      flexDirection: "column",
      gap: 12,
    },
  },
  input: {
    flex: 1,
    padding: "12px 20px",
    border: "1.3px solid #000",
    borderRadius: 25,
    backgroundColor: "transparent",
    fontSize: 16,
    color: "#000",
    outline: "none",
    "&:focus": {
      backgroundColor: "rgba(0, 0, 0, 0.05)",
    },
    "&::placeholder": {
      color: "#000",
    },
  },
  fullWidthInput: {
    flex: 1,
    padding: "12px 20px",
    border: "1.3px solid #000",
    borderRadius: 25,
    backgroundColor: "transparent",
    fontSize: 16,
    color: "#000",
    outline: "none",
    //  width: "95%",
    "&:focus": {
      backgroundColor: "rgba(0, 0, 0, 0.05)",
    },
    "&::placeholder": {
      color: "#000",
    },
  },
  textarea: {
    extend: "input",
    minHeight: 120,
    resize: "vertical",
    color: "#000",
    fontFamily: 'Georgia, "Times New Roman", serif',
    "&::placeholder": {
      color: "#000",
    },
  },
  submitButton: {
    alignSelf: "flex-end",
    padding: "12px 32px",
    border: "2px solid #000",
    borderRadius: 25,
    backgroundColor: "transparent",
    fontSize: 16,
    color: "#000",
    cursor: "pointer",
    fontWeight: 500,
    marginTop: 20,
    transition: "all 0.3s ease",
    "&:hover": {
      backgroundColor: "#000",
      color: "#FF4500",
    },
    "@media (max-width: 700px)": {
      alignSelf: "center",
    },
  },
});

const ContactUsCourse = () => {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    organization: "",
    role: "",
    moreDetails: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:9000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          organization: formData.organization,
          role: formData.role,
          moreDetails: formData.moreDetails,
        }),
      });

      const result = await response.json();

      if (!response.ok) throw new Error(result.error || "Submission failed");

      toast.success("Message sent successfully!");

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        organization: "",
        role: "",
        moreDetails: "",
      });
    } catch (err: unknown) {
      if (err instanceof Error) {
        toast.error("Error: " + err.message);
      } else {
        toast.error("An unknown error occurred");
      }
    }
  };

  return (
    <>
      <h1 className={classes.title}>Contact us</h1>
      <div className={classes.container}>
        <div>
          <div className={classes.separator}></div>
        </div>

        <div className={classes.mainContent}>
          <div className={classes.leftSection}>
            <h2 className={classes.subtitle}>We'd love to hear from you.</h2>
          </div>

          <div className={classes.formSection}>
            <form className={classes.form} onSubmit={(e) => e.preventDefault()}>
              <div className={classes.inputRow}>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className={classes.input}
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className={classes.input}
                />
              </div>

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                className={classes.fullWidthInput}
              />

              <div className={classes.inputRow}>
                <input
                  type="text"
                  name="organization"
                  placeholder="Organization"
                  value={formData.organization}
                  onChange={handleInputChange}
                  className={classes.input}
                />
                <input
                  type="text"
                  name="role"
                  placeholder="Role"
                  value={formData.role}
                  onChange={handleInputChange}
                  className={classes.input}
                />
              </div>

              <textarea
                name="moreDetails"
                placeholder="More Details"
                value={formData.moreDetails}
                onChange={handleInputChange}
                className={classes.textarea}
              />

              <button
                type="button"
                onClick={handleSubmit}
                className={classes.submitButton}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUsCourse;
