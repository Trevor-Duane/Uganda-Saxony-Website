import React from "react";
import { RiExternalLinkFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import "./About.css";
import CustomSlider from "../../components/Slider/CustomSlider";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const About = () => {
  return (
    <>
      <CustomSlider />
      <section className="aboutUsContent container-fluid gx-0">
        <div className="container gx-0">
          <div className="aboutUsSectionTextWrapper">
            <div className="aboutUsSectionText">
              <h6 className="sectionHeader">Partnership Project Background</h6>
              <p className="sectionParaText">
                The Uganda-Saxony Partnership project aims at fostering and
                promoting partnerships between organizations and schools in
                Uganda and organizations and schools in the Free State of
                Saxony. The project is coordinated by Katosi Women Development
                Trust and The Development Policy Network
                (Entwicklungspolitisches Netzwerk Sachsen e.V, The ENS.)
              </p>
              <p className="sectionParaText">
                Together, we aim to build and support existing partnerships
                between schools and Civil Society Organisations working in
                different areas of interventions such as; WASH, Health, Gender
                and women empowerment, Youth skilling, environment, culture,
                art, etc
              </p>
            </div>
          </div>

          {/* <div className="aboutUsSectionTextWrapper">
            <div className="aboutUsSectionText">
              <h6 className="sectionHeader">Partnership Objective</h6>
              <p className="sectionParaText">
                The partnership project seeks to strengthen cooperation of
                actors in Uganda and Saxony that work in different areas of
                sustainable development including Civil Society Organisations
                (CSOs), schools, cultural institutions, social institutions,
                sciences, business sector and municipalities interested in
                social and sustainable development
              </p>
            </div>

            <div className="aboutUsSectionText">
              <h6 className="sectionHeader">Partnership Goal</h6>
              <p className="sectionParaText">
                The closer cooperation/partnership of the Free State of Saxony
                with Uganda is professionally supported and accompanied by civil
                society. Participating civil society actors are strengthened and
                advised. A network partner in Uganda contributes its expertise
                to the partnership.
              </p>
            </div>
          </div> */}

          <div className="aboutUsSectionText">
            <h6 className="sectionHeader">Coordinating Partners</h6>
          </div>

          <div className="aboutUsSectionTextWrapper">
            <div className="aboutUsSectionTextOther">
              <div>
                <div className="memberSubSection">
                  <p className="sectionParaText">
                    Katosi Women Development Trust(KWDT)
                  </p>
                </div>
                <div>
                  <p className="sectionParaText">
                    Katosi Women Development Trust (KWDT) is a registered
                    Non-Governmental Organization with a registration number
                    S.5914/6911 under the Non-Governmental Organizations
                    Registration Statute of 1989. KWDT’s goal is to improve
                    living standards of poor, rural fisher communities in Uganda
                    by empowering them to engage in their development processes.
                    KWDT has been working with women and female youth for more
                    than 25 years and has been instrumental in creating change
                    in the lives of the rural and fisher women and their
                    communities. KWDT currently works with 1050 women organised
                    in 44 women groups in Mukono; sub counties of Ntenjeru,
                    Mpatta, Mpunge, Nama, Nakisunga and Katosi Town Council, and
                    other districts; Buvuma, Kalangala, Wakiso and Buikwe
                  </p>
                  <p className="sectionParaText">
                    <b>Thematic areas</b>
                  </p>
                  <p className="sectionParaText">
                    KWDT intervenes in rural and fisher communities through
                    women groups as entry points with interventions benefiting
                    members and the entire communities categorised under the
                    following thematic areas:-{" "}
                  </p>
                  <ul className="sectionParaList">
                    <li>Economic empowerment</li>
                    <li>Water Sanitation and Hygiene (WASH)</li>
                    <li>Education and</li>
                    <li>Environment</li>
                  </ul>

                  {/* <p className="sectionParaText">
                    The Economic Empowerment program engages women in integrated
                    sustainable agriculture, fishing and fish processing, food
                    processing & trade, with access to micro credit accelerating
                    diversification of rural livelihoods.
                  </p> */}
                  {/* <p className="sectionParaText">
                    Increase to Water Sanitation and Hygiene through
                    construction of water sources, rain water harvesting,
                    construction of latrines, bathing facilities, dish drying
                    racks waste bins, handwashing facilities at households,
                    schools and communal places is complemented by hygiene
                    training and sensitization campaigns.Women are skilled in
                    construction and maintance of WASH facilities.
                  </p>

                  <p className="sectionParaText">
                    Education program seeks to improve infrastructure in rural
                    and fisher communities , access to WASH facilities in
                    schools, while the knowledge and skills empowerment for
                    adults: seeks to build women and female youth’ capacities by
                    equipping them with functional knowledge and skills to make
                    informed decisions and take up new leadership roles and
                    responsibilities.
                  </p>

                  <p className="sectionParaText">
                    Environment: seeks to ensure development is cognisant of the
                    environment by supporting women to engage in practices that
                    conserve land, water resources and forests
                  </p> */}

                  {/* <p className="sectionParaText">
                    Health: Sexual and Reproductive Health and Rights (SRHR) and
                    HIV/ AIDs are mainstreamed during implementation of all the
                    activities to ensure that women live productive and healthy
                    lives. To promote social inclusion of every woman and female
                    youth in all programs, KWDT ensures that gender, disability
                    and youth is mainstreamed to ensure that vulnerable groups
                    including men, People With Disability, and youth have equal
                    access to opportunities and that KWDT’s interventions don’t
                    reinforce negative effects of vulnerability and
                    discrimination in planning, designing and implementation of
                    programs
                  </p> */}

                  {/* <p className="sectionParaText">
                    <b>Networks and partnerships</b>
                  </p>

                  <p className="sectionParaText"s>
                    KWDT has been working with arche noVa e.V, a Germany based
                    organisation for over 10 years to provide access to WASH
                    facilities in rural communities
                  </p> */}

                  <p className="sectionParaText">
                    More information about our activities can be accessed via our website link below
                  </p>
                </div>
              </div>
              <div className="referrer-link">
                <a href="https://katosi.org/" target="_blank" rel="noreferrer">
                  Visit KWDT Website <MdOutlineKeyboardDoubleArrowRight />
                </a>
              </div>
            </div>

            <div className="aboutUsSectionTextOther">
              <div>
                <div className="memberSubSection">
                  <p className="sectionParaText">
                    The Development Policy Network Saxony(ENS)
                  </p>
                </div>
                <div className="">
                  <p className="sectionParaText">
                    <b>
                      The Uganada-Saxony Partnership project is organised by the
                      Entwicklungspolitisches Netzwerk Sachsen e.V. (Development
                      Policy Network Saxony)
                    </b>
                  </p>

                  <p className="sectionParaText">
                    The Entwicklungspolitische Netzwerk Sachsen e. V. (ENS) is
                    an association of groups, initiatives and organisations that
                    are committed to sustainable development and global justice.
                    The ENS was founded in 1995 as an association and is now a
                    platform for development policy and intercultural
                    initiatives in Saxony.
                  </p>
                  <p className="sectionParaText">
                    We want to set out on the path to a just, peaceful and
                    environmentally friendly global society that enables
                    everyone to live a life worth living.
                  </p>

                  <p className="sectionParaText">
                    <b>The fields of activity of our members include;</b>
                  </p>
                  <ul className="sectionParaList">
                    <li>Partnership-based development cooperation</li>
                    <li>
                      Development policy education and public relations work
                    </li>
                    <li>Fair trade, business and sustainability</li>
                    <li>Linking environment protection and social justice</li>
                    <li>Intercultural and interreligious education</li>
                    <li>Human rights and anti-racism work</li>
                  </ul>

                  <p className="sectionParaText">
                    <b>
                      As part of the ENS network, we work together to improve
                      the framework conditions for development policy
                      stakeholders in Saxony and our international partners
                    </b>
                  </p>
                  <ul className="sectionParaList">
                    <li>
                      <b>Representing interests at state and national level:</b>{" "}
                      We talk to decision-makers in politics, business and
                      society and convince them with our own ideas
                    </li>
                    <li>
                      <b>Coordination and cooperation:</b> We support the
                      cooperation of various stakeholders regionally, nationally
                      and internationally
                    </li>
                    <li>
                      <b>Service:</b> We advise associations, initiatives and
                      individuals on organisational and content-related issues
                    </li>
                    <li>
                      <b>Press and public relations work:</b> We show global
                      connections and ways to live more justice.
                    </li>
                    <li>
                      <b>Education:</b> We organise seminars, workshops, panels
                      and conferences and facilitate thematic and methodological
                      exchange
                    </li>
                  </ul>
                </div>
              </div>

              <div className="referrer-link">
                <a
                  href="https://www.einewelt-sachsen.de/en/ens-homepage/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit ENS website <MdOutlineKeyboardDoubleArrowRight />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-fluid participantsSection">
        <div className="container participantsWrapper">
          <div className="participantGroupings">
            <h6 className="sectionHeader">Participant Groupings</h6>
          </div>

          <table>
            <tr>
              <th>Main Group</th>
              <th>Subgroups</th>
              {/* <th>Details</th>   */}
            </tr>
            <tr>
              <td>Civil Society Organisations</td>
              <td>
                <ul>
                  <li>Non Government Organisations</li>
                  <li>Community Based Organisations</li>
                </ul>
              </td>
              {/* <td>NGOs & CBOs</td> */}
            </tr>
            <tr>
              <td>Schools</td>
              <td>
                <ul>
                  <li>Primary Schools</li>
                  <li>Secondary Schools</li>
                  <li>Vocational Institutes</li>
                </ul>
              </td>
              {/* <td></td> */}
            </tr>
            <tr>
              <td>Others</td>
              <td>
                <ul>
                  <li>Cultural Institutions</li>
                  <li>Social Institutions</li>
                  <li>Business Sectors</li>
                  <li>Municipalities</li>
                </ul>
              </td>
              {/* <td>All other interested in social and sustainable development</td> */}
            </tr>
          </table>
        </div>
      </section>
    </>
  );
};

export default About;
