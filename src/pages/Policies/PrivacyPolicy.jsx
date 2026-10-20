import "./policyStyles.css";

const PrivacyPolicy = () => {
  return (
    <div className="policy-container container-fluid">
      <div className="policy-wrapper container">
        <h1 className="policy-title">Privacy Policy</h1>
        <p className="policy-updated">Last updated: October 2024</p>

        <section className="policy-section">
          <h2>1. Overview</h2>
          <p>
            The Uganda-Saxony Partnership, coordinated by Katosi Women Development Trust (KWDT)
            in Uganda and the Entwicklungspolitisches Netzwerk Sachsen e.V. (ENS) in Germany,
            is committed to protecting your privacy and personal data.
          </p>
        </section>

        <section className="policy-section">
          <h2>2. Information We Collect</h2>
          <p>We may collect information you choose to provide directly to us, including:</p>
          <ul>
            <li>Contact details (name, email address, phone number, postal address) submitted through our contact form.</li>
            <li>Partnership profile submissions for schools, CSOs, and participating organisations.</li>
            <li>Information provided when expressing interest in exchange programs and workshop activities.</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>3. How We Use Your Information</h2>
          <p>We process collected information to:</p>
          <ul>
            <li>Facilitate matchmaking between schools and civil society organizations in Uganda and Saxony.</li>
            <li>Respond to your inquiries, questions, and feedback.</li>
            <li>Share announcements about workshops, partnership events, and funding opportunities.</li>
            <li>Maintain records required by the Free State of Saxony and project funding guidelines.</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>4. Data Sharing & Retention</h2>
          <p>
            We do not sell or rent personal information to third parties. Data is shared exclusively
            between the coordinating teams (KWDT and ENS) for partnership implementation. We retain
            data only as long as necessary to fulfill the partnership goals or comply with legal requirements.
          </p>
        </section>

        <section className="policy-section">
          <h2>5. Your Rights & Inquiries</h2>
          <p>
            You have the right to request access to, correction of, or deletion of your personal data.
            For any privacy inquiries or to exercise your rights, please reach us at:{" "}
            <a href="mailto:info@uganda-saxonypartnership.org">info@uganda-saxonypartnership.org</a>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
