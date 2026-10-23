import "./policyStyles.css";

const CookiePolicy = () => {
  return (
    <div className="policy-container container-fluid">
      <div className="policy-wrapper container">
        <h1 className="policy-title">Cookie Policy</h1>
        <p className="policy-updated">Last updated: October 2024</p>

        <section className="policy-section">
          <h2>Introduction</h2>
          <p>
            The Uganda-Saxony Partnership uses cookies and related technologies to ensure
            our website functions effectively, enhance your browsing experience, and understand
            how visitors interact with our content.
          </p>
        </section>

        <section className="policy-section">
          <h2>What Are Cookies?</h2>
          <p>
            Cookies are small text files placed on your device by websites you visit. They are
            widely used to enable essential website operations, enhance security, and remember
            user preferences.
          </p>
        </section>

        <section className="policy-section">
          <h2>How We Use Cookies</h2>
          <p>We use cookies for the following purposes:</p>
          <ul>
            <li><strong>Essential Cookies:</strong> Required for the fundamental functionality and navigation of our website.</li>
            <li><strong>Preference Cookies:</strong> Remember your settings, such as cookie preferences and display options.</li>
            <li><strong>Analytics Cookies:</strong> Help us measure visitor engagement anonymously to improve our partnership outreach and informational resources.</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>Managing Your Cookies</h2>
          <p>
            You can modify your cookie settings at any time using your web browser preferences.
            Most browsers allow you to refuse or delete cookies. Please note that disabling essential cookies
            may affect the functionality of certain website features.
          </p>
        </section>

        <section className="policy-section">
          <h2>Contact Us</h2>
          <p>
            If you have questions about our Cookie Policy, please contact us at:{" "}
            <a href="mailto:info@uganda-saxonypartnership.org">info@uganda-saxonypartnership.org</a>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default CookiePolicy;
