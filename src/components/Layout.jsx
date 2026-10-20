import { Outlet, Link } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './footer/Footer';
import CookieConsent from 'react-cookie-consent';

const Layout = () => {
  return (
    <div className="container-fluid gx-0 app-layout">
      <Header />
      <main className="content container-fluid gx-0 gy-0">
        <Outlet />
      </main>
      <section className="container-fluid footerContainer gx-0">
        <Footer />
      </section>

      <CookieConsent
        location="bottom"
        buttonText="Accept All Cookies"
        declineButtonText="Essential Only"
        enableDeclineButton
        cookieName="uganda_saxony_cookie_consent"
        style={{
          background: "#1f2923",
          padding: "12px 20px",
          alignItems: "center",
          fontSize: "14px",
          zIndex: 99999,
          boxShadow: "0 -2px 10px rgba(0, 0, 0, 0.15)",
        }}
        buttonStyle={{
          backgroundColor: "#1e8e2c",
          color: "#ffffff",
          fontSize: "13px",
          fontWeight: 600,
          borderRadius: "4px",
          padding: "8px 18px",
        }}
        declineButtonStyle={{
          backgroundColor: "transparent",
          border: "1px solid #778877",
          color: "#d0d8d0",
          fontSize: "13px",
          borderRadius: "4px",
          padding: "7px 16px",
        }}
        expires={180}
      >
        <span>
          We use cookies to improve your browsing experience and understand our audience.
          Read our <Link to="/cookie_policy" style={{ color: "#74d481", textDecoration: "underline" }}>Cookie Policy</Link> to learn more.
        </span>
      </CookieConsent>
    </div>
  );
};

export default Layout;