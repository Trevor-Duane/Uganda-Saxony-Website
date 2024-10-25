import React from "react";
import axios from "axios";
import "./Partner.css";
import { NavLink } from "react-router-dom";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import OrganisationCard from "../../components/OrganisationCard/OrganisationCard";

const PartnerCSO = () => {
  const [organisations, setOrganisations] = React.useState([]);
  const [selectedContent, setSelectedContent] = React.useState("NGO");
  const [partnershipStatus, setPartnershipStatus] = React.useState("all"); // State for partnership status

  React.useEffect(() => {
    const fetchOrganisations = async () => {
      try {
        const response = await axios.get(
          "https://uganda-saxonypartnership.org/cms/wp-json/acf/v3/organisations"
        );
        console.log("organisations", response.data);
        setOrganisations(response.data);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchOrganisations();
  }, []);

  const handleLinkClick = (contentId) => {
    setSelectedContent(contentId);
  };

  const handlePartnershipFilter = (status) => {
    setPartnershipStatus(status);
  };

  const filterOrganisations = (registrationStatus) => {
    return organisations.filter(
      (organisation) =>
        organisation.acf.registration_status === registrationStatus &&
        (partnershipStatus === "all" ||
          (partnershipStatus === "in partnership" &&
            organisation.acf.partnership_status === "in partnership") ||
          (partnershipStatus === "not in partnership" &&
            organisation.acf.partnership_status === "not in partnership"))
    );
  };

  const NGO = () => {
    const filteredOrganisations = filterOrganisations("ngo");

    return (
      <div className="content-column">
        {/* Filter Buttons */}
        <div className="buttons-row">
          <button
            onClick={() => handlePartnershipFilter("all")}
            className={partnershipStatus === "all" ? "active-button" : ""}
          >
            All
          </button>
          <button
            onClick={() => handlePartnershipFilter("in partnership")}
            className={
              partnershipStatus === "in partnership" ? "active-button" : ""
            }
          >
            In Partnership
          </button>
          <button
            onClick={() => handlePartnershipFilter("not in partnership")}
            className={
              partnershipStatus === "not in partnership" ? "active-button" : ""
            }
          >
            Not In Partnership
          </button>
        </div>
        <div className="content-row">
        {filteredOrganisations.length > 0 ? (
            filteredOrganisations.map((organisation) => (
            <OrganisationCard
              key={organisation.id}
              organisation={organisation}
            />
          ))
          ) : (
            <p>No data to display</p>
          )}
        </div>
      </div>
    );
  };

  const CBO = () => {
    const filteredOrganisations = filterOrganisations("cbo");

    return (
      <div className="content-column">
        {/* Filter Buttons */}
        <div className="buttons-row">
          <button
            onClick={() => handlePartnershipFilter("all")}
            className={partnershipStatus === "all" ? "active-button" : ""}
          >
            All
          </button>
          <button
            onClick={() => handlePartnershipFilter("in partnership")}
            className={
              partnershipStatus === "in partnership" ? "active-button" : ""
            }
          >
            In Partnership
          </button>
          <button
            onClick={() => handlePartnershipFilter("not in partnership")}
            className={
              partnershipStatus === "not in partnership" ? "active-button" : ""
            }
          >
            Not In Partnership
          </button>
        </div>
        <div className="content-row">
          {filteredOrganisations.length > 0 ? (
            filteredOrganisations.map((organisation) => (
            <OrganisationCard
              key={organisation.id}
              organisation={organisation}
            />
          ))
          ) : (
            <p>No data to display</p>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="container partnership-page gx-0">
      <div className="partner-side-links">
        <div className="side-links">
          <NavLink
            onClick={() => handleLinkClick("NGO")}
            className={
              selectedContent === "NGO" ? "side-link-active" : "side-link"
            }
          >
            Non Government Organisations{" "}
            {selectedContent === "NGO" ? (
              <MdOutlineKeyboardDoubleArrowRight />
            ) : (
              ""
            )}
          </NavLink>
          <NavLink
            onClick={() => handleLinkClick("CBO")}
            className={
              selectedContent === "CBO" ? "side-link-active" : "side-link"
            }
          >
            Community Based Organisations{" "}
            {selectedContent === "CBO" ? (
              <MdOutlineKeyboardDoubleArrowRight />
            ) : (
              ""
            )}
          </NavLink>
        </div>
      </div>
      <div className="partner-content">
        {selectedContent === "NGO" ? <NGO /> : <CBO />}
      </div>
    </div>
  );
};

export default PartnerCSO;
