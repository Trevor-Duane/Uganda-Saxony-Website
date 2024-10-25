import React from "react";
import axios from "axios";
import "./Partner.css";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { NavLink, useNavigate, useNavigation } from "react-router-dom";
import SchoolCard from "../../components/SchoolCard/SchoolCard";

const PartnerSchools = () => {
  const navigate = useNavigate();

  const [schools, setSchools] = React.useState([]);
 
  const [selectedContent, setSelectedContent] = React.useState("Primary");

  React.useEffect(() => {
    const fetchSchools = async () => {
      try {
        const response = await axios.get(
          "https://uganda-saxonypartnership.org/cms/wp-json/acf/v3/schools"
        );
        console.log("schools", response.data)
        setSchools(response.data);
      } catch (err) {
        console.log(err.message)
      }
    };
    fetchSchools();
  }, []);

  const handleLinkClick = (contentId) => {
    setSelectedContent(contentId);
  };


  const Primary = () => {
    return (
      <div>
        {(schools.filter(school => school.acf.registration_status === 'primary')).map((school, index) => (
          <SchoolCard key={school.id} school={school} />
        ))}
      </div>
    );
  };

  const Secondary = () => {
    return (
      <div>
        {(schools.filter(school => school.acf.registration_status === 'secondary')).map((school, index) => (
          <SchoolCard key={school.id} school={school} />
        ))}
      </div>
    );
  };

  const Vocational = () => {
    return (
      <div>
        {(schools.filter(school => school.acf.registration_status === 'vocational')).map((school, index) => (
          <SchoolCard key={school.id} school={school} />
        ))}
      </div>
    );
  };

  return (
    <div className="container partnership-page gx-0">
      <div className="partner-side-links">
        <div className="side-links">
          <NavLink
            onClick={() => handleLinkClick("Primary")}
            className={selectedContent === "Primary" ? "side-link-active" : "side-link"}
          >
            Primary Schools {selectedContent === "Primary" ? <MdOutlineKeyboardDoubleArrowRight /> : ""}
          </NavLink>
          <NavLink
            onClick={() => handleLinkClick("Secondary")}
            className={selectedContent === "Secondary" ? "side-link-active" : "side-link"}
          >
            Secondary Schools {selectedContent === "Secondary" ? <MdOutlineKeyboardDoubleArrowRight /> : ""}
          </NavLink>
          <NavLink
            onClick={() => handleLinkClick("Vocational")}
            className={selectedContent === "Vocational" ? "side-link-active" : "side-link"}
          >
            Vocational Institutes {selectedContent === "Vocational" ? <MdOutlineKeyboardDoubleArrowRight /> : ""}
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
