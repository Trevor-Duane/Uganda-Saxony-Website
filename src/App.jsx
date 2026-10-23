import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "./components/Layout";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import AboutUganda from "./pages/Resource/AboutUganda";
import Contact from "./pages/Contact/Contact";
import Events from "./pages/Events/Events";
import Join from "./pages/Join/Join";
import AboutSaxony from "./pages/Resource/AboutSaxony";
import PartnerSchools from "./pages/Partners/PartnerSchools";
import PartnerCSO from "./pages/Partners/PartnerCSO";
import DetailsPageO from "./pages/Details/Organisation/DetailsPageO";
import DetailsPageS from "./pages/Details/School/DetailsPageS";
import EventDetails from "./pages/Details/Event/EventDetails";
import FundingOpps from "./pages/Resource/FundingOpps";
import Gallery from "./pages/Gallery/Gallery";

import CookiePolicy from "./pages/Policies/CookiePolicy";
import PrivacyPolicy from "./pages/Policies/PrivacyPolicy";
import TermsConditions from "./pages/Policies/TermsConditions";
import NotFound from "./pages/NotFound/NotFound";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => {
  return (
    <div className="container-fluid gx-0">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about_us" element={<About />} />
          <Route path="uganda_information" element={<AboutUganda />} />
          <Route path="saxony_information" element={<AboutSaxony />} />
          <Route path="contact" element={<Contact />} />
          <Route path="events" element={<Events />} />
          <Route path="partner_schools" element={<PartnerSchools />} />
          <Route path="partner_cso" element={<PartnerCSO />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="funding_opportunities" element={<FundingOpps />} />
          <Route path="join_partnership" element={<Join />} />

          {/* Details routes (with legacy slug backwards compatibility) */}
          <Route path="school_details/:id" element={<DetailsPageS />} />
          <Route path="organisation_details/:id" element={<DetailsPageO />} />
          <Route path="event_details/:id" element={<EventDetails />} />

          {/* Policy and Legal Pages */}
          <Route path="cookie_policy" element={<CookiePolicy />} />
          <Route path="cookie-policy" element={<CookiePolicy />} />
          <Route path="privacy_policy" element={<PrivacyPolicy />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms_and_conditions" element={<TermsConditions />} />
          <Route path="terms-conditions" element={<TermsConditions />} />

          {/* 404 Catch-All */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
