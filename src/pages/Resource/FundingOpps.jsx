import React from "react";
import "./Resources.css";
import { NavLink } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

import ToggeableDiv from "../../components/ToggeableDiv/ToggeableDiv";

const FundingOpps = () => {
  const [selectedContent, setSelectedContent] =
    React.useState("SchoolPartnerships");

  const handleLinkClick = (contentId) => {
    setSelectedContent(contentId);
  };

  const YouthOffice = () => {
    return (
      <>
        <div className="about-saxony">
          <p className="resource-main-head">
            About the German-African Youth Office
          </p>
          <p className="resource-text">
            The aim of the German-African Youth Office (DAJW) is to bring young
            people from Germany and African countries into contact with each
            other so that they can work together for socially, ecologically and
            economically sustainable development. Through its two programme
            lines Teams up! and Team works! programme lines, the DAJW
            facilitates exchanges between youth groups in extracurricular
            activities as well as work shadowing opportunities for young people.
          </p>
        </div>
        <>
          <p className="toggeable-main-head">Teams Up!</p>

          <ToggeableDiv
            question="What is funded?"
            answer="Funding is provided for international youth exchanges and associated accompanying or model projects that deal with the 17 Sustainable Development Goals (SDGs). In addition to bilateral encounters, multilateral cooperation with two African partners and, in exceptional cases, triangular cooperation between Germany, an African country, and a non-African country from the DAC list are also possible."
          />
          <ToggeableDiv
            question="Target Group"
            answer="Young people between the ages of 16 and 30"
          />
          <ToggeableDiv
            question="Objectives"
            answer='Participants "develop an understanding of what it means to take responsibility in a globalised world and how important it is to shape their own actions consciously and sustainably." (DAJW website) Multipliers also have the opportunity to gain further qualifications'
          />
          <ToggeableDiv
            question="What requirements must be met?"
            answer="There must be a German and an African partner who are both non-profit organisations. Both partners must not be missionary, state or commercially active. The German partner must have undergone an audit of the organisation. The project is planned and implemented in close cooperation between the two partners."
          />
          <ToggeableDiv
            question="Application"
            answer={() => {
              return (
                <>
                  <p>
                    An expression of interest in the form of a brief concept
                    must be submitted no later than 8 weeks before the
                    application is submitted, which contains the most important
                    content-related and financial points and establishes the SDG
                    relevance of the project
                  </p>
                  <p>
                    In addition to the technical and educational concept, the
                    project application must contain a precise programme
                    schedule. It should be clear from the application how the
                    SDGs will be addressed. The implementation of the funding
                    principles of partnership, sustainability and diversity
                    should also be presented.
                  </p>
                  <span>
                    The course of the project should be described in the
                    following phases
                  </span>
                  <ul>
                    <li>Preparation Phase</li>
                    <li>Initial meeting in one of the two partner countries</li>
                    <li>Intermediate phase</li>
                    <li>Return visit to the second partner country</li>
                    <li>Follow-up phase</li>
                  </ul>
                  <p>
                    Detailed criteria for the various phases can be found in the
                    funding guidelines in the document centre
                  </p>

                  <p>
                    The application also contains the financial plan and a
                    security and crisis concept. This serves to demonstrate that
                    the project partners involved have appropriate strategies in
                    place to ensure the safety of participants and in the event
                    of a crisis.
                  </p>

                  <span>The security and crisis concept includes</span>

                  <ul>
                    <li>
                      a description of the communication channels and measures
                      in the event of a crisis
                    </li>
                    <li>Emergency addresses for the meeting times</li>
                    <li>
                      an emergency telephone number that can be reached by all
                      participants at all times
                    </li>
                  </ul>

                  <span>
                    All German participants are obliged to register on the
                    "ELEFAND" crisis preparedness list of the Federal Foreign
                    Office.
                  </span>

                  <p>
                    The respective application deadlines can be found here.
                    Information events on how to apply can be found here
                  </p>

                  <span>What is funded?</span>

                  <p>Duration: The maximum project duration is 2 years.</p>
                  <span>Funding</span>
                  <ul>
                    <li>
                      This is proportional funding of max. 75% of the total
                      expenditure. The expenditure should be divided equally
                      between the project partners.
                    </li>
                    <li>
                      Travelling expenses are calculated in accordance with the
                      Federal Travel Expenses Act (BRKG).
                    </li>
                    <li>Personnel costs and fees can be included</li>
                    <li>No lump sums can be entered</li>
                  </ul>
                  <p>
                    All necessary documents can be downloaded from the document
                    centre
                  </p>
                </>
              );
            }}
          />
        </>

        <>
          <p className="toggeable-main-head">Team Works</p>

          <ToggeableDiv
            question="What is funded?"
            answer="Team works! is a tandem programme in which young and experienced professionals work together. Young professionals (trainees, career starters) have the opportunity to complete a 2.5 to 6-week work shadowing programme in an African country or in Germany. They are accompanied by experts from the Senior Expert Service (SES). The work shadowing placements can be in companies, administration, social or medical institutions. The programme also offers inclusive internships. As part of the exchange, they deal with topics relating to sustainable development"
          />
          <ToggeableDiv
            question="Target Group"
            answer="Young people in training occupations from Germany and African countries"
          />
          <ToggeableDiv
            question="Objectives"
            answer="The programme aims to promote partnership-based cooperation from a global learning perspective as well as professional exchange and commitment to sustainable development. Young people are to be supported in exploring global connections and their own opportunities for action"
          />

          <ToggeableDiv
            question="Work shadowing in an African country"
            answer={() => {
              return (
                <>
                  <ToggeableDiv
                    question="Prerequisites"
                    answer={() => {
                      return (
                        <ul>
                          <li>
                            For young German skilled workers in training
                            occupations aged 18 - 30 years
                          </li>
                          <li>
                            Those interested must be at least in the 3rd year of
                            an apprenticeship
                          </li>
                        </ul>
                      );
                    }}
                  />

                  <ToggeableDiv
                    question="Procedure"
                    answer={() => {
                      return (
                        <ul>
                          <li>
                            Interested parties create a profile at SES,
                            registration is possible at any time
                          </li>
                          <li>
                            Comparison with upcoming SES assignments and
                            possible work shadowing placements in the database
                          </li>
                          <li>
                            SES contacts interested parties if a suitable work
                            shadowing position is available
                          </li>
                          <li>
                            There is a 2-day preparatory meeting for the tandem
                            before the start of the trip
                          </li>
                          <li>SES takes care of the visa application</li>
                          <li>
                            all German participants should register on the
                            ELEFAND crisis preparedness list of the Federal
                            Foreign Office
                          </li>
                          <li>
                            the experienced professional is the first point of
                            contact for the young professional during the stay;
                            the SES also provides support from Germany in the
                            event of questions and problems
                          </li>
                        </ul>
                      );
                    }}
                  />

                  <ToggeableDiv
                    question="Accomodation"
                    answer={() => {
                      return (
                        <ul>
                          <li>usually near the work shadowing centre</li>
                          <li>
                            Young professional and experienced professional
                            usually live in the same accommodation
                          </li>
                        </ul>
                      );
                    }}
                  />

                  <ToggeableDiv
                    question="What is financed"
                    answer={() => {
                      return (
                        <>
                          <ul>
                            <li>Flight costs</li>
                            <li>Costs for meals and accommodation</li>
                            <li>Costs for any preparatory seminars</li>
                          </ul>
                          <span>
                            Costs for individual excursions and pocket money
                            must be borne by the participant. There are no costs
                            for your own training centre or employer, but they
                            must release the interested person from work for the
                            duration of the exchange
                          </span>
                        </>
                      );
                    }}
                  />

                  <ToggeableDiv
                    question="Insurance Cover"
                    answer={() => {
                      return (
                        <>
                          <span>
                            Trainees have the following insurance cover during
                            their exchange
                          </span>
                          <ul>
                            <li>International health insurance</li>
                            <li>Liability insurance</li>
                            <li>Luggage insurance</li>
                            <li>Repatriation and accident insurance</li>
                          </ul>
                        </>
                      );
                    }}
                  />
                </>
              );
            }}
          />

          <ToggeableDiv
            question="Work shadowing in Germany"
            answer={() => {
              return (
                <>
                  <ToggeableDiv
                    question="Prerequisites"
                    answer={() => {
                      return (
                        <ul>
                          <li>
                            for young African skilled workers in training
                            occupations aged 18 - 30 years
                          </li>
                          <li>
                            Interested must be at least in the 3rd year of an
                            apprenticeship
                          </li>
                        </ul>
                      );
                    }}
                  />

                  <ToggeableDiv
                    question="Procedure"
                    answer={() => {
                      return (
                        <ul>
                          <li>
                            Interested parties create a profile at SES,
                            registration is possible at any time
                          </li>
                          <li>
                            Comparison with possible work shadowing positions in
                            Germany
                          </li>
                          <li>
                            SES contacts interested parties if a suitable work
                            shadowing position is available
                          </li>
                          <li>
                            Digital preparatory meeting with the job shadowing
                            centre and the SES mentor
                          </li>
                          <li>
                            Participation in intercultural and language online
                            training is possible
                          </li>
                          <li>
                            During the stay, there is a permanent contact person
                            at the job shadowing centre and an SES expert
                            provides additional support as a mentor
                          </li>
                        </ul>
                      );
                    }}
                  />

                  <ToggeableDiv
                    question="Accomodation"
                    answer={() => {
                      return (
                        <ul>
                          <li>usually near the work shadowing centre</li>
                          <li>SES takes care of the accommodation</li>
                        </ul>
                      );
                    }}
                  />

                  <ToggeableDiv
                    question="What is financed"
                    answer={() => {
                      return (
                        <>
                          <ul>
                            <li>Flight and visa costs</li>
                            <li>Costs for meals and accommodation</li>
                            <li>Costs for any preparatory seminars</li>
                            Pocket money for the duration of the internship
                            <li></li>
                          </ul>
                          <span>
                            There are no costs for your own training centre or
                            employer, but they must release those interested for
                            the duration of the exchange
                          </span>
                        </>
                      );
                    }}
                  />

                  <ToggeableDiv
                    question="Insurance Cover"
                    answer={() => {
                      return (
                        <>
                          <span>
                            Trainees have the following insurance cover during
                            their exchange
                          </span>
                          <ul>
                            <li>International health insurance</li>
                            <li>Accident and personal liability insurance</li>
                          </ul>
                        </>
                      );
                    }}
                  />
                </>
              );
            }}
          />
        </>
      </>
    );
  };

  const SchoolPartnerships = () => {
    return (
      <>
        <div className="about-saxony">
          <p className="resource-main-head">
            ENSA - Development Policy School Exchange Programme
          </p>
          <p className="resource-text">
            ENSA promotes school partnerships between schools in Germany and
            countries in the Global South and South-East Europe. The aim is for
            students to familiarise themselves with different perspectives,
            better understand global interrelationships and work together for a
            sustainable world
          </p>

          <p className="resource-main-head">Educational programmes</p>
          <p className="resource-text">
            ENSA offers various training formats and networking events to
            support teachers or employees of accompanying organisations and to
            strengthen the integration of global learning/education for
            sustainable development (ESD) topics in the classroom
          </p>

          <p className="resource-main-head">Funding programme</p>
          <p className="resource-text">
            When it comes to reciprocal visits between partner schools, ENSA
            offers funding for the financing of initiation and exchange trips.
            ENSA also offers regular information events on this programme.
          </p>
        </div>
        <>
          <p className="toggeable-main-head">Initiation Trips</p>

          <p className="resource-text">
            Initiation trips serve to get to know each other personally in new
            school partnerships. The participants can exchange ideas,
            expectations or even fears and thus deepen the school partnership
          </p>
          <ToggeableDiv
            question="Who is eligible to apply?"
            answer={() => {
              return (
                <>
                <ul>
                    <li>Public or private general education and vocational schools based in Germany</li>
                    <li>Non-profit non-governmental organisations or school support associations based in Germany</li>
                </ul>
                  <span>
                    Group size
                  </span>
                  <ul>
                    <li>Minimum of 4 and maximum of 6 people, including at least 2  students</li>
                    <li>Minimum age of the students is 14 years</li>
                  </ul>

                  <span>
                    Duration of the trip
                  </span>
                  <ul>
                    <li>Two trips are always applied for: one from the German school to the partner school (outgoing) and one from the partner school to the German school (incoming).</li>
                    <li>The travel period must be between 1 March and 31 October of each year</li>
                    <li>A maximum of 7 programme days plus arrival and departure days are eligible for funding</li>
                    <li>The trip can be extended by a maximum of 5 additional days, even without programme content. However, these days are not eligible for funding and must be paid for by the participants.</li>
                  </ul>

                  <p>Further information can be found <a className="link-toggeable" href="#">here</a></p>

                  <span>Pedagogic support</span>
                  <ul>
                    <li>In the case of ENSA funding, participants from the German school are obliged to take part in the accompanying kick-off and final conferences as well as an evaluation workshop in the year of the trip.</li>
                    <li>The conferences serve to prepare and reflect on the trip and take place in spring and autumn</li>
                  </ul>

                  <span>Financial support</span>
                  <ul>
                    <li>Funding via the ENSA programme amounts to a maximum of 75% of the eligible expenses</li>
                    <li>25% of the total costs must be covered by own funds or third-party funds; third-party funds may not be additional federal funds</li>
                    <li>Maximum standard funding: €14,000</li>
                    <li>Increase of €1,000 possible for special inclusion requirements</li>
                    <li>Travel costs and expenses for the implementation of the agreed programme are funded</li>
                    <li>NO personnel costs are funded</li>
                  </ul>

                  <span>Application</span>
                  <ul>
                    <li>from July to September for initiation trips in the following year</li>
                    <li>Notification is issued in December</li>
                    <li>A step-by-step explanation of the application process can be found here</li>
                  </ul>
                </>
              );
            }}
          />
        </>

        <>
          <p className="toggeable-main-head">Exchange Trips</p>

          <p className="resource-text">
            On exchange trips, students have the opportunity to visit the
            partner school in the Global South (outgoing) or students from the
            partner school travel to the German school (incoming). Exchange
            trips are only possible if the school partnership has existed for at
            least one year. The aim of exchange visits is to consolidate the
            partnership, with the focus being on working together on a topic of
            the school's choice in the field of education for sustainable
            development.
          </p>
          <ToggeableDiv
            question="Who is eligible to apply?"
            answer={() => {
                return (
                  <>
                  <ul>
                      <li>Public or private general education and vocational schools based in Germany</li>
                      <li>Non-profit non-governmental organisations or school support associations based in Germany</li>
                  </ul>
                    <span>
                      Group size
                    </span>
                    <ul>
                      <li>Minimum of 6 and maximum of 12 participants (students and accompanying persons)</li>
                      <li>Additional accompanying persons must cover their own costs and are not eligible for funding</li>
                      <li>Minimum age of the students is 14 years</li>
                    </ul>
  
                    <span>
                     Trip duration
                    </span>
                    <ul>
                      <li>Travel period must be between 1 March and 31 October of a year</li>
                      <li>10 to 14 programme days plus arrival and departure days</li>
                      <li>The trip can be extended by a maximum of 5 additional days, even without programme content. However, these days are not eligible for funding and must be paid for by the participants.</li>
                    </ul>
  
                    <p>Further information on ENSA can be found <a className="link-toggeable" href="#">here</a>.</p>
  
                    <span>Pedagogic support</span>
                    <ul>
                      <li>If the programme is funded by ENSA, the participants from the German school are obliged to take part in the accompanying kick-off and final conferences as well as an evaluation workshop in the year of the trip</li>
                      <li>The conferences serve to prepare and reflect on the trip and take place in spring and autumn  </li>
                    </ul>
  
                    <span>Financial support</span>
                    <ul>
                      <li>Funding via the ENSA programme amounts to a maximum of 75% of the eligible expenses</li>
                      <li>25% of the total costs must be covered by own funds or third-party funds; third-party funds may not be additional federal funds</li>
                      <li>Maximum standard funding: €14,000</li>
                      <li>Increase of €1,000 possible for special inclusion requirements</li>
                      <li>Travel costs and expenses for the implementation of the agreed programme are funded</li>
                      <li>NO personnel costs are funded</li>
                    </ul>
  
                    <span>Application</span>
                    <ul>
                      <li>from July to September for initiation trips in the following year</li>
                      <li>Notification is issued in December</li>
                      <li>A step-by-step explanation of the application process can be found here</li>
                    </ul>
                  </>
                );
              }}
          />
        </>
      </>
    );
  };

  return (
    <>
      <div className="saxony-cover">
        <div className="container gx-0">
          <div className="uganda-cover-text">
            <div>
              <FaLocationDot color="#fff" size={18} />
            </div>
            <div>
              <span> Elbe River</span>
            </div>
          </div>
        </div>
      </div>
      <div className="container resources-page gx-0">
        <div className="res-side-links">
          <div className="side-links">
            <NavLink
              onClick={() => handleLinkClick("SchoolPartnerships")}
              className={
                selectedContent === "SchoolPartnerships"
                  ? "side-link-active"
                  : "side-link"
              }
            >
              School Partnerships{" "}
              {selectedContent === "SchoolPartnerships" ? (
                <MdOutlineKeyboardDoubleArrowRight />
              ) : (
                ""
              )}
            </NavLink>
            <NavLink
              onClick={() => handleLinkClick("YouthOffice")}
              className={
                selectedContent === "YouthOffice"
                  ? "side-link-active"
                  : "side-link"
              }
            >
              German-African Youth Office{" "}
              {selectedContent === "YouthOffice" ? (
                <MdOutlineKeyboardDoubleArrowRight />
              ) : (
                ""
              )}
            </NavLink>
          </div>
        </div>
        <div className="res-content">
          {selectedContent === "SchoolPartnerships" ? (
            <SchoolPartnerships />
          ) : (
            <YouthOffice />
          )}
        </div>
      </div>
    </>
  );
};

export default FundingOpps;
