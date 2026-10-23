import { useNavigate } from "react-router-dom";
import { getPlainTextSnippet } from "../../utils/textUtils";
import "./SchoolCard.css";

const SchoolCard = ({ school }) => {
  const navigate = useNavigate();

  const navigateToDetails = () => {
    navigate(`/school_details/${school.id}`, { state: { school } });
  };

  const name = school?.acf?.name || "School";
  const rawDetails = school?.acf?.details || "";
  const snippet = getPlainTextSnippet(rawDetails, 350);
  const schoolType = school?.acf?.school_type || "School";

  return (
    <div className="col school-profile-card">
      <div className="school-info">
        <p className="school-info-name">{name}</p>
        <p className="school-info-details">{snippet}</p>
      </div>
      <div className="school-info-button">
        <div className="school-type">
          <p>{schoolType}</p>
        </div>
        <button onClick={navigateToDetails} aria-label={`View details for ${name}`}>
          More
        </button>
      </div>
    </div>
  );
};

export default SchoolCard;
