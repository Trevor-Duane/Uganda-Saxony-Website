import React from "react";
import axios from "axios";
import "./Partner.css";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { NavLink } from "react-router-dom";
import SchoolCard from "../../components/SchoolCard/SchoolCard";

const PartnerSchools = () => {
  const [schools, setSchools] = React.useState([]);
  const [selectedContent, setSelectedContent] = React.useState("Primary");
  const [partnershipStatus, setPartnershipStatus] = React.useState("all"); // State for partnership status

  React.useEffect(() => {
    const fetchSchools = async () => {
      try {
        const response = await axios.get(
          "https://uganda-saxonypartnership.org/cms/wp-json/acf/v3/schools"
        );
        console.log("schools", response.data);
        setSchools(response.data);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchSchools();
  }, []);

  const handleLinkClick = (contentId) => {
    setSelectedContent(contentId);
  };

  const handlePartnershipFilter = (status) => {
    setPartnershipStatus(status);
  };

  const filterSchools = (registrationStatus) => {
    return schools.filter(
      (school) =>
        school.acf.registration_status === registrationStatus &&
        (partnershipStatus === "all" ||
          (partnershipStatus === "in partnership" &&
            school.acf.partnership_status === "in partnership") ||
          (partnershipStatus === "not in partnership" &&
            school.acf.partnership_status === "not in partnership"))
    );
  };

  const Primary = () => {
    const filteredSchools = filterSchools("primary");

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
          {filteredSchools.length > 0 ? (
            filteredSchools.map((school) => (
              <SchoolCard key={school.id} school={school} />
            ))
          ) : (
            <p>No data to display</p>
          )}
        </div>
      </div>
    );
  };

  const Secondary = () => {
    const filteredSchools = filterSchools("secondary");

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
          {filteredSchools.length > 0 ? (
            filteredSchools.map((school) => (
              <SchoolCard key={school.id} school={school} />
            ))
          ) : (
            <p>No data to display</p>
          )}
        </div>
      </div>
    );
  };

  const Vocational = () => {
    const filteredSchools = filterSchools("vocational");

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
          {filteredSchools.length > 0 ? (
            filteredSchools.map((school) => (
              <SchoolCard key={school.id} school={school} />
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
            onClick={() => handleLinkClick("Primary")}
            className={
              selectedContent === "Primary" ? "side-link-active" : "side-link"
            }
          >
            Primary Schools{" "}
            {selectedContent === "Primary" ? (
              <MdOutlineKeyboardDoubleArrowRight />
            ) : (
              ""
            )}
          </NavLink>
          <NavLink
            onClick={() => handleLinkClick("Secondary")}
            className={
              selectedContent === "Secondary" ? "side-link-active" : "side-link"
            }
          >
            Secondary Schools{" "}
            {selectedContent === "Secondary" ? (
              <MdOutlineKeyboardDoubleArrowRight />
            ) : (
              ""
            )}
          </NavLink>
          <NavLink
            onClick={() => handleLinkClick("Vocational")}
            className={
              selectedContent === "Vocational"
                ? "side-link-active"
                : "side-link"
            }
          >
            Vocational Institutes{" "}
            {selectedContent === "Vocational" ? (
              <MdOutlineKeyboardDoubleArrowRight />
            ) : (
              ""
            )}
          </NavLink>
        </div>
      </div>
      <div className="partner-content">
        {selectedContent === "Primary" ? (
          <Primary />
        ) : selectedContent === "Secondary" ? (
          <Secondary />
        ) : (
          <Vocational />
        )}
      </div>
    </div>
  );
};

export default PartnerSchools;
