import "./CoordinatorCard.css";
import defaultAvatar from "../../assets/logo512.png";

const CoordinatorCard = ({ coordinator }) => {
  const name = coordinator?.acf?.name || "Coordinator";
  const role = coordinator?.acf?.role || "Partnership Coordinator";
  const email = coordinator?.acf?.email || "info@uganda-saxonypartnership.org";
  const phone = coordinator?.acf?.phone || "";
  const photo = coordinator?.acf?.photo || defaultAvatar;

  return (
    <div className="coordinator-card">
      <div className="coordinator-img">
        <img
          src={photo}
          alt={name}
          onError={(e) => {
            e.currentTarget.src = defaultAvatar;
          }}
        />
      </div>
      <div className="coordinator-info">
        <div className="coordinator-name">
          <p>{name}</p>
          <p>{role}</p>
        </div>

        <div className="coordinator-details">
          <span>Contact Details</span>
          {email && (
            <span>
              Email: <a href={`mailto:${email}`}>{email}</a>
            </span>
          )}
          {phone && (
            <span>
              Phone: <a href={`tel:${phone}`}>{phone}</a>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default CoordinatorCard;
