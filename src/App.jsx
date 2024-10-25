import { Routes, Route } from "react-router-dom";
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

const App = () => {
  return (
    <div className="container-fluid gx-0">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about_us" element={<About />} />
          <Route path="uganda_information" element={<AboutUganda />} />
          <Route path="contact" element={<Contact />} />
          <Route path="events" element={<Events />} />
          <Route path="uganda_information" element={<AboutUganda />} />
          <Route path="saxony_information" element={<AboutSaxony />} />
          <Route path="partner_schools" element={<PartnerSchools />} />
          <Route path="partner_cso" element={<PartnerCSO />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="funding_opportunities" element={<FundingOpps/>} />
          <Route path="school_details/:id_6532ec" element={<DetailsPageS />} />
          <Route path="organisation_details/:id_ee163d" element={<DetailsPageO />} />
          <Route path="event_details/:id_2ea070" element={<EventDetails />} />
          <Route path="join_partnership" element={<Join />} />
          <Route path="*" element={<p>Not found!</p>} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
