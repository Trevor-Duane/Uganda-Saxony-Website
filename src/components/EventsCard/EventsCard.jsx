import { useNavigate } from "react-router-dom";
import { getPlainTextSnippet } from "../../utils/textUtils";
import "./EventsCard.css";

const EventsCard = ({ event }) => {
  const navigate = useNavigate();

  const navigateToDetails = () => {
    navigate(`/event_details/${event.id}`, { state: { event } });
  };

  const title = event?.acf?.event_title || "Event";
  const date = event?.acf?.event_date || "";
  const rawDetails = event?.acf?.event_details || "";
  const snippet = getPlainTextSnippet(rawDetails, 260);
  const eventType = event?.acf?.event_type || "Event";

  return (
    <div
      className="eventsCard"
      onClick={navigateToDetails}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          navigateToDetails();
        }
      }}
      aria-label={`View details for ${title}`}
    >
      <div className="eventCardTop">
        <div className="eventTitle">
          <p>{title}</p>
        </div>

        {date ? (
          <div className="eventDate">
            <p>{date}</p>
          </div>
        ) : null}
      </div>

      <div className="eventCardMiddle">
        <p className="eventBody">{snippet}</p>
      </div>

      <div className="eventCardBottom">
        <div className="eventSlang">
          <p>{eventType}</p>
        </div>
      </div>
    </div>
  );
};

export default EventsCard;
