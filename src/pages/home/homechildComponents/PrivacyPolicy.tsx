import React from "react";
import { createUseStyles } from "react-jss";
import Navbar from "./Navbar";
import FooterContact from "./FooterContact";
const useStyles = createUseStyles({
  page: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f4f4f4",
    padding: "2rem",
    marginTop: "100px",
  },
  heading: {
    fontSize: 24,
    marginBottom: 16,
    fontWeight: 600,
    color: "#333",
  },
  container: {
    maxWidth: "1000px",
    background: "#fff",
    borderRadius: "1rem",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
    padding: "2rem",
    fontFamily: "Arial, sans-serif",
  },
  header: {
    fontSize: "2rem",
    fontWeight: 700,
    marginBottom: "1.5rem",
    color: "#222",
  },
  section: {
    marginBottom: "1.5rem",
  },
  sectionTitle: {
    fontSize: "1.25rem",
    fontWeight: 600,
    marginBottom: "0.75rem",
    color: "#333",
  },
  content: {
    fontSize: "1rem",
    color: "#444",
    lineHeight: 1.6,
  },
  list: {
    listStyleType: "disc",
    paddingLeft: "1.5rem",
    color: "#444",
    fontSize: "1rem",
    lineHeight: 1.6,
  },

  listItem: {
    marginBottom: 6,
  },
  subHeading: {
    fontWeight: 600,
    marginBottom: 8,
    fontSize: 18,
    color: "#444",
  },
  text: {
    marginBottom: 12,
    lineHeight: 1.6,
    color: "#555",
  },
  subList: {
    paddingLeft: 20,
    marginTop: 6,
    marginBottom: 6,
  },
});

const PrivacyPolicy: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <Navbar />
      <main className={classes.page}>
        <article className={classes.container}>
          <h1 className={classes.header}>Privacy Policy</h1>

          <section className={classes.section}>
            <h2 className={classes.sectionTitle}>Introduction</h2>
            <p className={classes.content}>
              This Privacy Policy (the &quot;Policy&quot;) governs the manner in
              which the Platform collects, uses, maintains and discloses
              information of its users. The Policy also describes the practices
              that We apply to such user information, user&#39;s privacy rights
              and choices regarding their information. To clarify, this Policy
              applies to all users of the Platform (referred to as
              &quot;Learners&quot;, &quot;You&quot;, &quot;Your&quot;). By
              accessing and using the Platform, providing Your Personal
              Information, or by otherwise signalling Your agreement when the
              option is presented to You, You consent to the collection, use,
              and disclosure of information described in this Policy and Terms
              of Use and we disclaim all the liabilities arising therefrom. If
              You do not agree with any provisions of this Policy and/or the
              Terms of Use, You should not access or use the Platform or engage
              in communications with us and are required to leave the Platform
              immediately. If any information You have provided or uploaded on
              the Platform violates the terms of this Policy or Terms of Use, we
              may be required to delete such information upon informing You of
              the same and revoke Your access if required without incurring any
              liability to You. Capitalized terms used but not defined in this
              Privacy Policy can be found in our General Terms. Please read this
              Policy carefully prior to accessing our Platform and using any of
              the services or products offered therein. If you have any
              questions, please contact us at info@digiculum.com
            </p>
          </section>

          <section className={classes.section}>
            <h2 className={classes.sectionTitle}>Personal Information</h2>
            <p className={classes.content}>
              &quot;Personal Information&quot; shall mean the information which
              identifies a Learner i.e., first and last name, identification
              number, email address, age, gender, location, photograph and/or
              phone number provided at the time of registration or any time
              thereafter on the Platform. &quot;Sensitive Personal
              Information&quot; shall include (i) passwords and financial data
              (except the truncated last four digits of credit/debit card), (ii)
              health data, (iii) official identifier (such as biometric data,
              social security number, driver&#39;s license, passport, etc.),
              (iv) information about sexual life, sexual identifier, race,
              ethnicity, political or religious belief or affiliation, (v)
              account details and passwords, or (vi) other data/information
              categorized as &#39;sensitive personal data&#39; or &#39;special
              categories of data&#39; under the Information Technology
              (Reasonable Security Practices and Procedures and Sensitive
              Personal Data or Information) Rules, 2011, General Data Protection
              Regulation (GDPR) and / or the California Consumer Privacy Act
              (CCPA) (&quot;Data Protection Laws&quot;) and in context of this
              Policy or other equivalent / similar legislations. Usage of the
              term &#39;Personal Information&#39; shall include &#39;Sensitive
              Personal Information&#39; as may be applicable to the context of
              its usage.
            </p>
          </section>

          {/* Added UL Section */}
          <section className={classes.section}>
            <h2 className={classes.sectionTitle}>INFORMATION WE COLLECT</h2>
            <p className={classes.content}>
              We may collect both personal and non-personal identifiable
              information from You in a variety of ways, including, but not
              limited to, when You visit our Platform, register on the Platform,
              and in connection with other activities, services, features or
              resources we make available on our Platform. However, please note
              that-
            </p>
            <ul className={classes.list}>
              <li>
                We do not ask You for Personal Information unless we truly need
                it; like when You are registering for any Content on the
                Platform.
              </li>
              <li>
                We do not share Your Personal Information with anyone except to
                comply with the applicable laws, develop our products and
                services, or protect our rights.
              </li>
              <li>
                We do not store Personal Information on our servers unless
                required for the on-going operation of our Platform.
              </li>
            </ul>
            <p className={classes.content}>
              Personal Identifiable Information: We may collect
              personal-identifiable information such as Your name and emails
              address to enable Your access to the Platform and
              services/products offered therein. We will collect
              personal-identifiable information from You only if such
              information is voluntarily submitted by You to us. You can always
              refuse to provide such personal identification information;
              however, it may prevent You from accessing services or products
              provided on the Platform or from engaging in certain activities on
              the Platform.
            </p>
            <p className={classes.content}>
              Non-Personal Identifiable Information: When You interact with our
              Platform, we may collect non-personal-identifiable information
              such as the browser name, language preference, referring site, and
              the date and time of each user request, operating system and the
              Internet service providers utilized and other similar information.
            </p>
          </section>

          <section className={classes.section}>
            <h2 className={classes.sectionTitle}>
              HOW WE USE and SHARE THE INFORMATION COLLECTED
            </h2>
            <p className={classes.content}>
              We may collect and use Your Personal Information for the following
              purposes:
            </p>
            <p className={classes.content}>
              a. To provide access to our Platform and/or the services/products
              offered therein: We use the Your information as collected by us to
              allow You to access the Platform and the services/products offered
              therein, including without limitation to provide customer service,
              fulfil purchases through the Platform, verify User information and
              to resolve any glitches with our Platform. The legal basis for
              this processing is consent or, where applicable, our legitimate
              interests in the proper administration of our Platform, and/or the
              performance of a contract between You and us.
            </p>
            <p className={classes.content}>
              b. To improve our Platform and maintain safety: We use Your
              information to improve and customize the Platform and
              services/products offered by us. Further, we also use Your
              information to prevent, detect, investigate, and take measures
              against criminal activity, fraud, misuse of or damage to our
              Platform or network, and other threats and violations to a third
              party&#39;s or our rights and property, or the safety of our
              Users, or others. The legal basis for this processing is consent
              or, where applicable, our legitimate interests in the proper
              administration of our Platform, and/or the performance of a
              contract between You and us.
            </p>
            <p className={classes.content}>
              c. To communicate with You or market our services/products: We may
              use the email address submitted by You to communicate with You
              about Your orders on our Platform, our offers, new products,
              services or even receive Your feedback on the Platform or any
              services/products offered therein. It may also be used to respond
              to Your inquiries, questions, and/or other requests. If at any
              time You would like to unsubscribe from receiving future emails,
              please write to us at the contact information provided below. The
              legal basis for this processing is consent or, where applicable,
              our legitimate interests in the proper administration of our
              Platform, and/or the performance of a contract between You and us.
            </p>
            <p className={classes.content}>
              We do not use Personal Information for making any automated
              decisions affecting or creating profiles other than what is
              described in this Policy.
            </p>
            <p className={classes.content}>
              We do not sell, trade, or otherwise exploit Your
              personal-identifiable information to others. Limited to the
              purposes stated hereinabove, we may share generic aggregated
              demographic information not linked to any personal-identifiable
              information regarding visitors and Users with our business
              partners and trusted affiliates.
            </p>
          </section>

          <section className={classes.section}>
            <h2 className={classes.sectionTitle}>YOUR RIGHTS</h2>
            <p className={classes.content}>
              In general, all Learners have the rights specified herein this
              section. However, depending on where you are situated, you may
              have certain specific rights in respect of your Personal
              Information accorded by the laws of the country you are situated
              in. To understand Your rights, please refer to the Country
              Specific Additional Rights below.
            </p>
            <p className={classes.content}>
              If you are a Learner, you may exercise any of these rights by
              using the options provided to you within the Platform upon your
              login. If however, you are facing any issues or require any
              clarifications, you can always write to us at the address noted in
              the &#39;Grievances&#39; section below, and we will address your
              concerns to the extent required by the applicable law.
            </p>
            <p className={classes.content}>
              a. Right to Confirmation and Access: You have the right to get
              confirmation and access to your Personal Information that is with
              us along with other supporting information.
            </p>
            <p className={classes.content}>
              b. Right to Correction: You have the right to ask us to rectify
              your Personal Information that is with us that you think is
              inaccurate. You also have the right to ask us to update your
              Personal Information that you think is incomplete or out-of-date
            </p>
            <p className={classes.content}>
              c. Right to be Forgotten: You have the right to restrict or
              prevent the continuing disclosure of your Personal Information
              under certain circumstances.
            </p>
            <p className={classes.content}>
              d. Right to Erasure: If you wish to withdraw/remove your Personal
              Information from our Platform, you have the right to request
              erasure of your Personal Information from our Platform. However,
              please note that such erasure will remove all your Personal
              Information from our Platform (except as specifically stated in
              this Policy) and may result in deletion of your account on the
              Platform permanently, and the same will not be retrievable.
            </p>
            <p className={classes.content}>
              Remember, you are entitled to exercise your rights as stated above
              only with respect to your information, including Personal
              Information, and not that of other Learners. Further, when we
              receive any requests or queries over email to the address
              specified in the &#39;Grievances&#39; section below, then, as per
              the applicable Data Protection Laws, we may need to ask you a few
              additional information to verify your identity in association with
              the Platform and the request received.
            </p>
          </section>
          <section className={classes.section}>
            <h2 className={classes.sectionTitle}>
              PROTECTION OF YOUR INFORMATION
            </h2>
            <p className={classes.content}>
              We take all measures reasonably necessary to protect against the
              unauthorized access, use, alteration or destruction of Personal
              Information or such other data on the Platform. Our disclosure of
              any such information is limited to-
            </p>
            <p className={classes.content}>
              a, our employees, contractors and affiliated organizations (if
              any) that (i) need to know that information in order to process it
              on our behalf or to provide services available on our Platform,
              and (ii) that have agreed not to disclose it to others.
            </p>
            <p className={classes.content}>
              b. a response to a court order, or other governmental request.
              Without imitation to the foregoing, we reserve the right to
              disclose such information where we believe in good faith that such
              disclosure is necessary to comply with applicable laws,
              regulations, court orders, government and law enforcement agencies
              requests, protect and defend a third party&#39;s or our rights and
              property, or the safety of our users, our employees, or others or
              prevent, detect, investigate and take measures against criminal
              activity, fraud and misuse or unauthorized use of our Platform
              and/or to enforce our Terms of Use or other agreements or
              policies.
            </p>
            <p className={classes.content}>
              To the extent permitted by law, we will attempt to give You prior
              notice before disclosing Your information in response to such a
              request.
            </p>
          </section>
          <section className={classes.section}>
            <h2 className={classes.sectionTitle}>THIRD PARTY WEBSITES</h2>
            <p className={classes.content}>
              You may find links to the websites and services of our partners,
              suppliers, advertisers, sponsors, licensors and other third
              parties. The content or links that appear on these sites are not
              controlled by us in any manner and we are not responsible for the
              practices employed by such websites. Further, these websites/links
              thereto, including their content, may be constantly changing and
              the may have their own terms of use and privacy policies. Browsing
              and interaction on any other website, including websites which
              have a link to our Site, is subject to that terms and policies
              published on such websites.
            </p>
          </section>
          <section className={classes.section}>
            <h2 className={classes.sectionTitle}>CROSS BORDER DATA TRANSFER</h2>
            <p className={classes.content}>
              Your information including any Personal Information is stored,
              processed, and transferred in and to the Amazon Web Service (AWS)
              servers and databases located in India. We may also store,
              process, and transfer information in and to servers in other
              countries depending on the location of our affiliates and service
              providers. Please note that these countries may have differing
              (and potentially less stringent) privacy laws and that Personal
              Information can become subject to the laws and disclosure
              requirements of such countries, including disclosure to
              governmental bodies, regulatory agencies, and private persons, as
              a result of applicable governmental or regulatory inquiry, court
              order or other similar process. If you use our Platform from
              outside India, including in the USA, EU, EEA, and UK, your
              information may be transferred to, stored, and processed in India.
              By accessing our Platform or otherwise giving us information, you
              consent to the transfer of information to India and other
              countries outside your country of residence.
            </p>
          </section>
          <section className={classes.section}>
            <h2 className={classes.sectionTitle}>
              DURATION FOR WHICH YOUR INFORMATION IS STORED
            </h2>
            <p className={classes.content}>
              We will retain Your information for as long as it is required for
              us to retain for the purposes stated hereinabove, including for
              the purpose of complying with legal obligation or business
              compliances. Further, please note that we may not be able to
              delete all communications or photos, files, or other documents
              publicly made available by you on the Platform (for example:
              comments, feedback, etc.), however, we shall anonymize your
              Personal Information in such a way that you can no longer be
              identified as an individual in association with such information
              made available by you on the Platform. We will never disclose
              aggregated or de-identified information in a manner that could
              identify you as an individual. Note: If you wish to exercise any
              of your rights (as specified in &#39;Your Rights&#39; section
              below) to access, modify and delete any or all information stored
              about you, then you may do so by using the options provided within
              the Platform. You can always write to us at info@digiculum.com
            </p>
          </section>
          <section className={classes.section}>
            <h2 className={classes.sectionTitle}>
              MODIFICATION TO PRIVACY POLICY
            </h2>
            <p className={classes.content}>
              We may modify, revise or change our Policy from time to time; when
              we do, we will revise the &#39;updated date&#39; at the beginning
              of this page. We encourage You to check our Platform frequently to
              see the recent changes. Unless stated otherwise, our current
              Policy applies to all information that we have about You.
            </p>
          </section>
          <section className={classes.section}>
            <h2 className={classes.sectionTitle}>Grievances</h2>
            <p className={classes.content}>
              If you have any questions about this Policy or concerns about
              privacy or grievances, please write to us at:{" "}
              <strong>info@digiculum.com</strong>
            </p>
          </section>

          <section className={classes.section}>
            <h2 className={classes.sectionTitle}>
              COUNTRY SPECIFIC ADDITIONAL RIGHTS
            </h2>
            <h2 className={classes.sectionTitle}>
              TERMS APPLICABLE IF YOU ARE A RESIDENT OF UNITED KINGDOM (UK), A
              EUROPEAN UNION (EU) COUNTRY OR EUROPEAN ECONOMIC AREA (EEA)
            </h2>
            <p className={classes.content}>
              A. Your Rights: If you are located in the United Kingdom (UK) or
              European Union (EU) or European Economic Area (EEA), you have the
              following rights under the UK and EU General Data Protection
              Regulation (GDPR) respectively. All requests should be sent to the
              address noted in the &quot;Grievances&quot; section above, and we
              will fulfil requests to the extent required by applicable law.
            </p>
            <p className={classes.content}>
              1. Right to access Your Personal Information: You have the right
              to receive confirmation as to whether or not Personal Information
              concerning you is being processed and, where that is the case,
              access to the Personal Information can be sought;
            </p>
            <p className={classes.content}>
              2. Right to Rectification: Our goal is to keep your Personal
              Information accurate, current and complete. Please contact us if
              you believe your information is inaccurate or incomplete;
            </p>
            <p className={classes.content}>
              3. Right to Erasure: In some cases, you have a legal right to
              request that we erase your Personal information;
            </p>
            <p className={classes.content}>
              4. Right to object to Processing: You have the right to object to
              our processing of your Personal Information under certain
              conditions;
            </p>
            <p className={classes.content}>
              5.Right to object to Processing: You have the right to object to
              our processing of your Personal Information under certain
              conditions;
            </p>
            <p className={classes.content}>
              6. Right to object to Processing: You have the right to object to
              our processing of your Personal Information under certain
              conditions;
            </p>
            <p className={classes.content}>
              7. Right to make a complaint to a government supervisory
              authority: If you believe we have not processed your Personal
              Information in accordance with applicable provisions of the GDPR,
              we encourage you to contact us at email address provided in the
              &#39;Grievances&#39; section above. You also have the right to
              make a GDPR complaint to the relevant Supervisory Authority or
              seek a remedy through the courts. A list of Supervisory
              Authorities is available
              at:https://edpb.europa.eu/about-edpb/board/members_en. If you need
              further assistance regarding your rights, please contact us using
              the contact information provided below, and we will consider your
              request in accordance with applicable law. You can identify the
              supervising authority of your concern by visiting
              https://edpb.europa.eu/about-edpb/board/members_en.
            </p>
            <p className={classes.content}>
              8.Right to not be subject to automated decision-making, including
              profiling: You have the right not to be subject to a decision
              based solely on automated processing, including profiling, which
              produces legal or similarly significant effects concerning you..
            </p>
            <p className={classes.content}>
              We collect and process Personal Information about you only where
              we have a legal rationale to do so. Specific legal rationale
              applied for the same will depend on the type of Personal
              Information collected and the context in which the same is being
              processed, including the Services involved.
            </p>
          </section>
          <section className={classes.section}>
            <h2 className={classes.sectionTitle}>
              TERMS APPLICABLE IF YOU ARE AN INDIAN RESIDENT
            </h2>
            <p className={classes.content}>
              A. Your Rights: If you are located in India, you may have the
              following rights under the Personal Data Protection Bill (PDPB)
              when it becomes a legislation. All requests can be made by using
              the option provided to you within the Platform upon your login.
              You may also write to us as stated in the &quot;Grievances&quot;
              section above, and we will address you concerns to the extent
              required by law.
            </p>
            <p className={classes.content}>
              1. Right to Confirmation and Access: You have the right to get
              confirmation and access to your Personal Information that is with
              us along with other supporting information.
            </p>
            <p className={classes.content}>
              2. Right to Correction: You have the right to ask us to rectify
              your Personal Information that is with us that you think is
              inaccurate. You also have the right to ask us to update your
              Personal Information that you think is incomplete or out-of-date.
            </p>
            <p className={classes.content}>
              3. Right to Data Portability: You have the right to ask that we
              transfer the Personal Information you gave us to another
              organisation, or to you, under certain circumstances.
            </p>
            <p className={classes.content}>
              4. Right to be Forgotten: You have the right to restrict or
              prevent the continuing disclosure of your Personal Information
              under certain circumstances.
            </p>
            <p className={classes.content}>
              5. Right to Erasure: If you wish to withdraw/remove your Personal
              Information from our Platform, you have the right to request
              erasure of your Personal Information from our Platform. However,
              please note that such erasure will remove all your Personal
              Information from our Platform (except as specifically stated in
              this Policy) and may result in deletion of your account on the
              Platform permanently, and the same will not be retrievable.
            </p>
          </section>
          <section className={classes.section}>
            <h2 className={classes.sectionTitle}>
              TERMS APPLICABLE IF YOU ARE A CALIFORNIA STATE RESIDENT
            </h2>
            <p className={classes.content}>
              A. If you are a California state resident, then you have the
              following rights to the extent, and in the manner, set out in the
              CCPA: The right to access the Personal Information that we hold on
              you;
            </p>
            <p className={classes.content}>
              1. The right to know what Personal Information we intend on
              collecting from them before the point of collection;
            </p>
            <p className={classes.content}>
              2. The right to opt in or out of marketing, analytics, and other
              similar activities;
            </p>
            <p className={classes.content}>
              3. The right to equal services without discrimination; and
            </p>
            <p className={classes.content}>
              4. The right to request deletion of Personal Information.
            </p>
            <p className={classes.content}>
              The above rights, the manner in which you can exercise the same
              and the category of and the manner in which we collect your
              information, are detailed below.
            </p>
          </section>
          <section className={classes.section}>
            <h2 className={classes.sectionTitle}>
              A.CCPA NOTICE AT COLLECTION:
            </h2>
            <p className={classes.content}>
              For purposes of the CCPA, in collecting the information described
              above, we collect the categories of Personal Information listed
              below from you:
            </p>
            <p className={classes.content}>
              1. Identifiers: We may collect your name, email address, mobile
              number, username, unique personal identifier, and Internet
              Protocol (IP) address. We use Identifiers as set forth in the
              &quot;How We Use and Share the Information Collected&quot; section
              of this Policy, like your name, contact information, and device
              and online identifiers.
            </p>
            <p className={classes.content}>
              2. Characteristics of Personal Information described in the
              California Customer Records statute: We may collect your name,
              email address, username, unique personal identifier, and gender.
              We use Categories of Personal Information described in the
              California Consumer Records statute as set forth in the &#39;How
              We Use and Share the Information Collected&#39; section of this
              Policy.
            </p>
            <p className={classes.content}>
              3. Internet or other electronic network activity information: We
              collect cookies as described above, we will automatically receive
              information from your browser and your device, which includes the
              date and time of your visit to the Platform as well as your
              location, Internet Protocol (IP) address, domain server, browser
              type, access time, and data about which pages you visit on the
              Platform. We use Internet or other electronic network activity
              information as set forth in the &quot;How We Use and Share the
              Information Collected&quot; section of this Policy.
            </p>
            <p className={classes.content}>
              4. Geolocation data: We may collect your IP address. We may use
              Geolocation Data as set forth in the &quot;How We Use and Share
              the Information Collected&quot; section of this Policy.
            </p>
            <p className={classes.content}>
              5. Audio, electronic, visual or similar information: We may
              collect your profile picture or other audio or visual information
              uploaded as content to the Platform. We use audio, electronic,
              visual or similar information as set forth in the &quot;How We Use
              and Share the Information Collected&quot; section of this Policy.
            </p>
            <p className={classes.content}>
              6. Inferences: We may make inferences based upon the Personal
              Information collected (such as likelihood of retention or
              attrition). We use Inference information as set forth in the
              &quot;How We Use and Share the Information Collected&quot; section
              of this Policy.
            </p>
          </section>
          <div className={classes.container}>
            <h1 className={classes.heading}>
              CCPA Data Practices During the Last 12 Months
            </h1>

            {/* Data Collection */}
            <div className={classes.section}>
              <p className={classes.text}>
                <strong>Personal Information collected:</strong> As described in
                this Policy, we have collected the categories of Personal
                Information listed below during the preceding 12 months:
              </p>
              <ul className={classes.list}>
                <li>Identifiers</li>
                <li>
                  Characteristics described in the California Customer Records
                  statute
                </li>
                <li>
                  Internet or other electronic network activity information
                </li>
                <li>Geolocation data</li>
                <li>Commercial information</li>
                <li>
                  Audio, electronic, visual, thermal, olfactory, or similar
                  information
                </li>
                <li>Inferences</li>
              </ul>
            </div>

            {/* Sources */}
            <div className={classes.section}>
              <p className={classes.text}>
                <strong>Categories of sources:</strong> We have collected the
                Personal Information identified in this Policy from you and our
                payment processors.
              </p>
            </div>

            {/* Business Purpose */}
            <div className={classes.section}>
              <p className={classes.text}>
                <strong>
                  Business and commercial purposes for collecting:
                </strong>
              </p>
              <ul className={classes.list}>
                <li>Operate the Platform</li>
                <li>Provide our Services to you</li>
                <li>Honor our Terms and Conditions and contracts</li>
                <li>
                  Ensure the privacy and security of our Platform and Services
                </li>
                <li>Manage our relationships with you</li>
                <li>Communicate with you</li>
                <li>Analyze use of the Platform and our Services</li>
                <li>Enhance your experience</li>
                <li>Track visits to the Platform</li>
                <li>Provide a more personal and interactive experience</li>
                <li>Usage analytics purposes</li>
              </ul>
            </div>

            {/* Personal Information Sales/Disclosure */}
            <div className={classes.section}>
              <p className={classes.text}>
                <strong>Personal Information sold:</strong> We have not sold
                categories of Personal Information during the preceding 12
                months.
              </p>
            </div>

            <div className={classes.section}>
              <p className={classes.text}>
                <strong>
                  Personal Information disclosed for a business purpose:
                </strong>
              </p>
              <ul className={classes.list}>
                <li>Identifiers</li>
                <li>
                  Characteristics described in the California Customer Records
                  statute
                </li>
                <li>
                  Internet or other electronic network activity information
                </li>
                <li>Geolocation data</li>
                <li>Commercial information</li>
                <li>
                  Audio, electronic, visual, thermal, olfactory, or similar
                  information
                </li>
                <li>Inferences</li>
              </ul>
            </div>

            <div className={classes.section}>
              <p className={classes.text}>
                <strong>Categories of third parties disclosed to:</strong>
              </p>
              <ul className={classes.list}>
                <li>Corporate parents, subsidiaries, and affiliates</li>
                <li>Advisors (accountants, attorneys)</li>
                <li>
                  Service providers (data analytics, storage, mailing,
                  marketing, support)
                </li>
                <li>Operating systems and platforms</li>
              </ul>
            </div>

            {/* Consumer Rights Section */}
            <h2 className={classes.heading}>
              1. Consumer Rights and Requests Under the CCPA
            </h2>

            <div className={classes.section}>
              <p className={classes.text}>
                The CCPA gives consumers the right to request that we (1)
                disclose what Personal Information we collect, use, disclose,
                and sell, and (2) delete certain Personal Information that we
                have collected or maintained.
              </p>
              <p className={classes.text}>
                If a request is submitted in an improper manner or is deficient
                in some way, we will either (i) treat it as if properly
                submitted or (ii) provide instructions to correct it.
              </p>
            </div>

            {/* Request to Know */}
            <div className={classes.section}>
              <p className={classes.subHeading}>1. Request to Know</p>
              <p className={classes.text}>You may request the following:</p>
              <ul className={classes.list}>
                <li>Specific pieces of Personal Information we collected</li>
                <li>Categories of Personal Information we collected</li>
                <li>Sources of that information</li>
                <li>Categories of Personal Information sold and to whom</li>
                <li>
                  Categories of Personal Information disclosed and to whom
                </li>
                <li>Business or commercial purpose for collecting/selling</li>
                <li>Categories of third parties with whom we share it</li>
              </ul>
              <p className={classes.text}>
                Our response will cover the 12-month period before we receive a
                verifiable request.
              </p>
            </div>

            {/* Request to Delete */}
            <div className={classes.section}>
              <p className={classes.subHeading}>2. Request to Delete</p>
              <p className={classes.text}>
                You may request the deletion of your Personal Information. We
                will delete it and instruct our service providers to do the same
                unless an exemption applies.
              </p>
            </div>

            {/* Submitting a Request */}
            <div className={classes.section}>
              <p className={classes.subHeading}>3. Submitting a Request</p>
              <p className={classes.text}>
                <strong>Submission:</strong> Requests may be sent via email (see
                the 'Grievances' section) or via mail to the address provided in
                our Terms of Use or Platform page.
              </p>
              <p className={classes.text}>
                <strong>Verification:</strong> You must verify your identity
                using information such as name, email, and mobile number. If we
                cannot verify identity:
              </p>
              <ul className={classes.subList}>
                <li>
                  Requests for categories may be denied, but we’ll direct you to
                  our Privacy Policy.
                </li>
                <li>
                  Requests for specific pieces will be denied due to legal
                  restrictions.
                </li>
                <li>
                  Requests to delete may be denied if identity cannot be
                  confirmed.
                </li>
              </ul>
            </div>

            {/* Authorized Agents */}
            <div className={classes.section}>
              <p className={classes.subHeading}>4. Authorized Agents</p>
              <p className={classes.content}>
                {" "}
                If we cannot verify the identity of the person making a request
                to delete, we may deny the request. If there is no reasonable
                method by which we can verify the identity of the requestor to
                the degree of certainty required, we will state this in our
                response and explain why we have no reasonable method by which
                we can verify the identity of the requestor.
              </p>
              <p className={classes.text}>
                Authorized agents may submit requests via the methods identified
                in this Policy. If you use an authorized agent to submit a
                request to know or a request to delete, we may require you to:
                (1) provide the authorized agent with signed permission to do
                so; (2) verify your identity directly with us; and (3) directly
                confirm with us that you provided the authorized agent
                permission to submit the request. However, we will not require
                these actions if you have provided the authorized agent with
                power of attorney pursuant to the California Probate Code.
              </p>
            </div>

            {/* Excessive Requests */}
            <div className={classes.section}>
              <p className={classes.subHeading}>5. Excessive Requests</p>
              <p className={classes.text}>
                If requests from a User are manifestly unfounded or excessive,
                in particular because of their repetitive character, we may
                either (1) charge a reasonable fee, or (2) refuse to act on the
                request and notify the User of the reason for refusing the
                request. If we charge a fee, the amount will be based upon the
                administrative costs of providing the information or
                communication or taking the action requested.
              </p>
            </div>

            {/* Non-Discrimination */}
            <div className={classes.section}>
              <p className={classes.subHeading}>6. CCPA Non-Discrimination</p>
              <p className={classes.text}>
                You have the right not to receive discriminatory treatment by us
                due to your exercise of the rights provided by the CCPA. We do
                not offer financial incentives and price or service differences,
                and we do not discriminate against Users/consumers for
                exercising their rights under the CCPA.s.
              </p>
            </div>
          </div>
        </article>
      </main>
      <FooterContact />
    </>
  );
};

export default PrivacyPolicy;
