import React from "react";
import { createUseStyles } from "react-jss";
import Navbar from "./Navbar";
import FooterContact from "./FooterContact";

const useStyles = createUseStyles({
  container: {
    maxWidth: 900,
    margin: "0 auto",
    padding: 24,
    //fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: "#f9f9f9",
    borderRadius: 12,
    marginTop: "100px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },
  heading: {
    fontSize: 24,
    marginBottom: 16,
    fontWeight: 600,
    color: "#333",
  },
  section: {
    marginBottom: 24,
  },
  text: {
    marginBottom: 12,
    lineHeight: 1.6,
    color: "#555",
  },
});

const GeneralTerms: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <Navbar />
      <div className={classes.container}>
        <h1 className={classes.heading}>General Terms</h1>
        <div className={classes.section}>
          <p className={classes.text}>
            Confidential or professional or business Information on this website
            or any material, knowledge, information and data (verbal,
            electronic, written or any other form) concerning to this Firm or
            its businesses not generally known to the public consisting of, but
            not limited to, inventions, discoveries, plans, concepts, designs,
            blueprints, drawings, models, devices, equipment, apparatus,
            products, prototypes, formulae, algorithms, techniques, research
            projects, computer programs, software, firmware, hardware, business
            development and marketing plans, merchandising systems, financial
            and pricing data, information concerning investors, customers,
            suppliers, consultants and employees, and any other concepts, ideas
            or information involving or related to the business which, if
            misused or disclosed, could adversely affect the firms business thus
            may attract strict legal action against the violator and be booked
            under law.
          </p>
          <p className={classes.text}>
            As the original purchaser of content sold on Digiculum, you are
            entitled to access and use the content which is identified in the
            course and which is on the Digiculum website, at
            www.digiculum.com(&quot;Website&quot;). In order to access and use
            this content, you must register with Digiculum and create a password
            to use in accessing the content on the Website.
          </p>
          <p className={classes.text}>
            Your password is unique and exclusive to you, and you may not
            transfer your password to any other person or allow any other person
            to use your password to access or use content on the Website. You
            agree to notify Digiculum immediately if any other person makes
            unauthorized use of your password. Digiculum reserves the right to
            suspend or revoke your password in the event of any misuse of your
            password or any use of your password in violation of these Terms and
            Conditions. In the event of any such suspension or revocation, you
            will not be entitled to any refund or payment.
          </p>
          <p className={classes.text}>
            Your password is unique and exclusive to you, and you may not
            transfer your password to any other person or allow any other person
            to use your password to access or use content on the Website. You
            agree to notify Digiculum immediately if any other person makes
            unauthorized use of your password. Digiculum reserves the right to
            suspend or revoke your password in the event of any misuse of your
            password or any use of your password in violation of these Terms and
            Conditions. In the event of any such suspension or revocation, you
            will not be entitled to any refund or payment.
          </p>
          <p className={classes.text}>
            These General Terms govern your access to and use of the Website and
            the content on the Website. By accessing and using the Website, you
            agree to these Terms of Use. If you do not agree to any of these
            Terms of Use, you may not access or use the site. Digiculum reserves
            the right to modify these Terms of Use at any time and in its sole
            discretion. Your use of the site following any modification will
            constitute your assent to and acceptance of the modifications.
          </p>
          <p className={classes.text}>
            Upon registration, Digiculum grants you a non-exclusive,
            non-transferable, non- assignable, personal license to access and
            use the Digiculum content identified in the content you purchased
            via an online/offline reader.
          </p>
          <p className={classes.text}>
            Digiculum not be liable for any delay or interruption in your access
            to the site or any content located on the site, or for any
            transmission errors, equipment or software incompatibilities, force
            majeure or other failure of performance. Digiculum will use
            reasonable efforts to correct any failure of performance, but
            Digiculum will not be required to make any changes to any equipment
            or software used by Digiculum or its contractors or agents to ensure
            compatibility with any equipment or software used by you. You may
            not use the site or the content on the site for any commercial
            purpose, including but not limited to the use of any of the content
            to market or sell goods or services to any person. You agree not to
            launch any automated system,including without limitation,
            &quot;robots,&quot; &quot;spiders,&quot; or &quot;offline
            readers,&quot; to access the site.
          </p>
          <p className={classes.text}>
            Digiculum reserves the right to change, suspend access to, or remove
            any or all of the content on the Website at any time, for any
            reason, in its sole discretion. Digiculum also reserves the right to
            discontinue the Website at any time, either temporarily or
            permanently. In the event of the removal of any content from the
            Website or the termination of the Website, you will not be entitled
            to any refund or payment.
          </p>

          <p className={classes.text}>
            YOU AGREE THAT YOUR USE OF THE SITE SHALL BE AT YOUR SOLE RISK, AND
            Digiculum WILL NOT BE HELD LIABLE IN ANY WAY FOR YOUR USE OF THE
            SITE OR FOR ANY INFORMATION CONTAINED ON THE SITE. ALL CONTENT
            CONTAINED IN OR REFERRED TO ON THE SITE IS PROVIDED &quot;AS
            IS,&quot; WITHOUT ANY REPRESENTATIONS OR WARRANTIES, EXPRESS OR
            IMPLIED. TO THE FULLEST EXTENT PERMITTED BY LAW, Digiculum DISCLAIMS
            ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING, WITHOUT LIMITATION,
            ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A
            PARTICULAR PURPOSE. Digiculum MAKES NO WARRANTIES THAT THE SITE WILL
            BE ERROR-FREE, OR THAT ANY ERRORS WILL BE CORRECTED, OR THAT THE
            SITE OR THE SERVER FROM WHICH THE SITE IS OPERATED WILL BE FREE OF
            VIRUSES OR OTHER POTENTIALLY HARMFUL CODES. UNDER NO CIRCUMSTANCES,
            INCLUDING NEGLIGENCE, SHALL Digiculum BE HELD LIABLE FOR ANY DIRECT,
            INDIRECT, INCIDENTAL, SPECIAL OR CONSEQUENTIAL DAMAGES AND EXPENSES
            OF ANY KIND (INCLUDING, WITHOUT LIMITATION, PERSONAL INJURY OR
            PROPERTY DAMAGE, LOST PROFITS, AND DAMAGES ARISING FROM COMPUTER
            VIRUSES, BUSINESS INTERRUPTION, LOST DATA, UNAUTHORIZED ACCESS TO OR
            USE OF SITE SERVERS OR ANY PERSONAL INFORMATION STORED THEREIN, OR
            ANY INTERRUPTION OR CESSATION OF OPERATION OF THE SITE) ARISING OUT
            OF OR IN ANY WAY CONNECTED WITH THE USE OF THE SITE OR ANY
            INFORMATION CONTAINED ON THE SITE, WHETHER SUCH DAMAGES ARE BASED ON
            CONTRACT, TORT, STRICT LIABILITY OR OTHERWISE, EVEN IF ADVISED OF
            THE POSSIBILITY OF SUCH DAMAGES.
          </p>

          <p className={classes.text}>
            You agree to indemnify, hold harmless and defend Digiculum from and
            against any and all claims, damages, losses, liabilities, judgments,
            awards, settlements, costs and expenses (including attorney&#39;s
            fees and court costs) arising out of or resulting from your use of
            this Website or the violation by you of any of these Terms of Use.
          </p>
          <p className={classes.text}>
            YOU AGREE THAT ANY CAUSE OF ACTION ARISING OUT OF OR RELATED TO THIS
            SITE OR YOUR USE OF THIS SITE MUST COMMENCE WITHIN ONE (1) YEAR
            AFTER THE CAUSE OF ACTION ACCRUES, AND WILL THEREAFTER BE
            PERMANENTLY BARRED.
          </p>
          <p className={classes.text}>
            These Terms of Use constitute the entire agreement between you and
            Digiculum concerning your use of the Website and the contents of the
            Website. If any provision is deemed invalid by a court of competent
            jurisdiction, the remaining provisions shall remain in full force
            and effect. No waiver of any the Terms of Use shall be deemed a
            further or continuing waiver of such term or condition or any other
            term or condition, and any failure by Digiculum to assert any right
            or provision under these Terms of Use shall not constitute a waiver
            of such right or provision.
          </p>
        </div>
      </div>
      <FooterContact />
    </>
  );
};

export default GeneralTerms;
