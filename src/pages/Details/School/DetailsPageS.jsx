import { useState, useEffect } from "react";
import "./DetailsPageS.css";
import DOMPurify from "dompurify";
import { useLocation, useNavigate, useParams, Link } from "react-router-dom";
import axios from "axios";
import defaultLogo from "../../../assets/logo512.png";

const DetailsPageS = () => {
  const params = useParams();
  const rawId = params.id || params.id_6532ec;
  const schoolId = rawId ? rawId.split("_")[0] : null;

  const location = useLocation();
  const navigate = useNavigate();

  const [school, setSchool] = useState(location.state?.school || null);
  const [loading, setLoading] = useState(!location.state?.school);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (school) return;

    const fetchSchool = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://uganda-saxonypartnership.org/cms/wp-json/acf/v3/schools"
        );
        const found = response.data?.find(
          (item) => String(item.id) === String(schoolId)
        );
        if (found) {
          setSchool(found);
        } else {
          setError(true);
        }
      } catch (err) {
        console.error("Failed to load school details", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    if (schoolId) {
      fetchSchool();
    } else {
      setLoading(false);
      setError(true);
    }
  }, [schoolId, school]);

  if (loading) {
    return (
      <div className="container py-5 text-center">
        <div className="spinner-border text-success" role="status">
          <span className="visually-hidden">Loading school details...</span>
        </div>
        <p className="mt-3 text-muted">Loading school information...</p>
      </div>
    );
  }

  if (error || !school) {
    return (
      <div className="container py-5 text-center">
        <h4 className="text-secondary mb-3">School Not Found</h4>
        <p className="text-muted mb-4">
          We could not find the requested school profile or the information is temporarily unavailable.
        </p>
        <Link to="/partner_schools" className="btn btn-success">
          &larr; Back to Partner Schools
        </Link>
      </div>
    );
  }

  const badgeSrc = school.acf?.badge || defaultLogo;
  const schoolName = school.acf?.name || "School Profile";
  const partnershipStatus = school.acf?.partnership_status || "Registered";
  const detailsHtml = school.acf?.details ? DOMPurify.sanitize(school.acf.details) : "<p>No details provided.</p>";

  return (
    <div className="container school-details-wrapper gx-0">
      <div className="mb-3">
        <button
          onClick={() => navigate("/partner_schools")}
          className="btn btn-outline-success btn-sm"
        >
          &larr; Back to Partner Schools
        </button>
      </div>
      <div className="school-details">
        <div className="school-badge">
          <img
            className="img-thumbnail"
            src={badgeSrc}
            alt={schoolName}
            onError={(e) => {
              e.currentTarget.src = defaultLogo;
            }}
          />
        </div>
        <div className="school-name-status">
          <span className="school-name">{schoolName}</span>
          <span className="school-partnership-status">({partnershipStatus})</span>
        </div>
        <div
          className="school-bio"
          dangerouslySetInnerHTML={{ __html: detailsHtml }}
        />
      </div>
    </div>
  );
};

export default DetailsPageS;
