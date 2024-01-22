import React from "react";
import "./resourceStyles.css";
import Footer from "../components/Footer";
import { organisations } from "../components/OrganisaationData";
import { ParticipantCard } from "../components/ParticipantCard";
import axios from 'axios';



// const participants = [
//   {
//     id: 0,
//     name: "All",
//     slang: "All",
//   },
//   {
//     id: 1,
//     name: "Primary Schools",
//     slang: "Primary School",
//   },
//   {
//     id: 2,
//     name: "Secondary Schools",
//     slang: "Secondary School",
//   },
//   {
//     id: 3,
//     name: "Vocational Institutes",
//     slang: "Vocational Institutes",
//   },
//   {
//     id: 4,
//     name: "Non Government Organisations",
//     slang: "NGOs",
//   },
//   {
//     id: 5,
//     name: "Community Based Organisations",
//     slang: "CBOs",
//   },
// ];


const Resources = () => {
  const [participants, setParticipants] = React.useState([]);

  const [activeButton, setActiveButton] = React.useState(0);

  const fetchParticipants = () => {
    axios.get(`https://uganda-saxonypartnership.org/cms/wp-json/acf/v3/organisation-types`)
    .then((response) => {
      console.log(response.data)
      setParticipants((response.data).reverse())
    })
    .catch((error) => {
      console.log(error)
    })
  }

  React.useEffect(() => {
    fetchParticipants()
  }, [])

  return (
    <>
      <section className="resourcesContainer container-fluid">
        <div className="resourcesWrapper container">
          <h6 className="resourceTitle">RESOURCE CENTER</h6>
        </div>
      </section>

      <section className="resourceContentSection container-fluid">
        <div className="container resourceContentWrapper">
          <div className="participantTitle">
            <h6>Participating Organisations in Uganda</h6>
          </div>

          <div className="participantsNavWrapper">
            <nav className="participantsNav">
              {participants.map((item, index) => (
                <button
                  onClick={() => setActiveButton(item.id)}
                  className={`${
                    activeButton === item.id
                      ? "activeParticipantButton"
                      : "participantButton"
                  }`}
                  key={item.id}
                >
                  {item.acf.organisation_type_name}
                </button>
              ))}
            </nav>
          </div>

          {activeButton === 0 ? (
            <div className="participantsCards">
              {organisations.map((item, index) => (
                <ParticipantCard
                  key={item.id}
                  id={item.id}
                  image={item.image}
                  organisation_name={item.organisation_name}
                  organisation_type={item.organisation_type}
                  actor_type={item.actor_type}
                  bio={item.bio}
                />
              ))}
            </div>
          ) : (
            <div className="participantsCards">
              {organisations &&
                organisations
                  .filter(
                    (organisation) =>
                      organisation.participant_id === activeButton
                  )
                  .map((item, index) => (
                    <ParticipantCard
                      key={item.id}
                      id={item.id}
                      image={item.image}
                      organisation_name={item.organisation_name}
                      organisation_type={item.organisation_type}
                      actor_type={item.actor_type}
                      bio={item.bio}
                    />
                  ))}
            </div>
          )}
        </div>
      </section>

      <section className="container-fluid footerContainer">
        <Footer />
      </section>
    </>
  );
};

export default Resources;
