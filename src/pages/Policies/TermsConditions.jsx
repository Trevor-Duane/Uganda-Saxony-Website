import "./policyStyles.css";

const TermsConditions = () => {
  return (
    <div className="policy-container container-fluid">
      <div className="policy-wrapper container">
        <h1 className="policy-title">Terms & Conditions</h1>
        <p className="policy-updated">Last updated: October 2024</p>

        <section className="policy-section">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using the Uganda-Saxony Partnership website, you agree to comply with
            and be bound by these Terms and Conditions. If you do not agree, please discontinue use
            of this site.
          </p>
        </section>

        <section className="policy-section">
          <h2>2. Use of Site Content</h2>
          <p>
            All information, publications, documents, workshop materials, and reports provided on this website
            are intended for educational, non-commercial, and partnership promotion purposes. You may download
            freely provided resources (such as partnership templates and reports) for organizational use in
            furthering Uganda-Saxony cooperation.
          </p>
        </section>

        <section className="policy-section">
          <h2>3. User Submissions & Partnership Profiles</h2>
          <p>
            When submitting organization profiles, school questionnaires, or inquiries, you warrant that
            the information supplied is accurate, truthful, and authorized by your respective institution.
          </p>
        </section>

        <section className="policy-section">
          <h2>4. External Links & Third-Party Resources</h2>
          <p>
            This website provides links to external websites (including funding bodies, partner NGOs, and
            government entities). The Uganda-Saxony Partnership does not control or endorse the content
            of external websites and bears no liability for third-party practices.
          </p>
        </section>

        <section className="policy-section">
          <h2>5. Amendments</h2>
          <p>
            We reserve the right to modify these Terms and Conditions at any time. Changes will be posted
            directly on this page with an updated revision date.
          </p>
        </section>

        <section className="policy-section">
          <h2>6. Contact</h2>
          <p>
            For questions regarding these terms, please contact us at:{" "}
            <a href="mailto:info@uganda-saxonypartnership.org">info@uganda-saxonypartnership.org</a>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsConditions;
