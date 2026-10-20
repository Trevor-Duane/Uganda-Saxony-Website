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
              <h2 className="sectionHeader">Partnership Project Background</h2>
              <p className="sectionParaText">
                The Uganda-Saxony Partnership project aims at fostering and
                promoting partnerships between organizations and schools in
                Uganda and organizations and schools in the Free State of
                Saxony. The project is coordinated by Katosi Women Development
                Trust and the Development Policy Network
                (Entwicklungspolitisches Netzwerk Sachsen e.V. - ENS).
              </p>
              <p className="sectionParaText">
                Together, we aim to build and support existing partnerships
                between schools and Civil Society Organisations working in
                different areas of intervention such as Water Sanitation and
                Hygiene (WASH), Health, Gender and women empowerment, Youth
                skilling, environment, culture, and art.
              </p>
            </div>
          </div>

          <div className="aboutUsSectionText">
            <h2 className="sectionHeader">Coordinating Partners</h2>
          </div>

          <div className="aboutUsSectionTextWrapper">
            <div className="aboutUsSectionTextOther">
              <div>
                <div className="memberSubSection">
                  <p className="sectionParaText">
                    Katosi Women Development Trust (KWDT)
                  </p>
                </div>
                <div>
                  <p className="sectionParaText">
                    Katosi Women Development Trust (KWDT) is a registered
                    Non-Governmental Organization (registration S.5914/6911)
                    under the Non-Governmental Organizations Registration Statute.
                    KWDT’s goal is to improve the living standards of poor, rural
                    fisher communities in Uganda by empowering them to engage in
                    their development processes. KWDT has been working with
                    women and female youth for more than 25 years and has been
                    instrumental in creating change in the lives of rural and
                    fisher women and their communities. KWDT currently works with
                    over 1,050 women organized in 44 women groups in Mukono and
                    surrounding districts.
                  </p>
                  <p className="sectionParaText">
                    <strong>Thematic areas:</strong>
                  </p>
                  <ul className="sectionParaList">
                    <li>Economic empowerment and sustainable livelihoods</li>
                    <li>Water, Sanitation and Hygiene (WASH)</li>
                    <li>Education and functional skills development</li>
                    <li>Environment and natural resource conservation</li>
                  </ul>
                  <p className="sectionParaText">
                    More information about our activities can be accessed via our official website:
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
                    The Development Policy Network Saxony (ENS)
                  </p>
                </div>
                <div>
                  <p className="sectionParaText">
                    <strong>
                      The Uganda-Saxony Partnership project is co-coordinated by the
                      Entwicklungspolitisches Netzwerk Sachsen e.V. (Development
                      Policy Network Saxony).
                    </strong>
                  </p>

                  <p className="sectionParaText">
                    The Entwicklungspolitisches Netzwerk Sachsen e.V. (ENS) is
                    an association of groups, initiatives, and organisations
                    committed to sustainable development and global justice.
                    Founded in 1995, ENS serves as the central platform for
                    development policy and intercultural initiatives across the
                    Free State of Saxony.
                  </p>
                  <p className="sectionParaText">
                    We strive towards a just, peaceful, and environmentally
                    friendly global society that enables everyone to live a life
                    of dignity and opportunity.
                  </p>

                  <p className="sectionParaText">
                    <strong>The fields of activity of our members include:</strong>
                  </p>
                  <ul className="sectionParaList">
                    <li>Partnership-based development cooperation</li>
                    <li>Development policy education and public relations</li>
                    <li>Fair trade, ethical business, and sustainability</li>
                    <li>Linking environmental protection with social justice</li>
                    <li>Intercultural and interreligious education</li>
                    <li>Human rights and anti-racism initiatives</li>
                  </ul>
                </div>
              </div>

              <div className="referrer-link">
                <a
                  href="https://www.einewelt-sachsen.de/en/ens-homepage/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit ENS Website <MdOutlineKeyboardDoubleArrowRight />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-fluid participantsSection">
        <div className="container participantsWrapper">
          <div className="participantGroupings">
            <h2 className="sectionHeader">Participant Groupings</h2>
          </div>

          <div className="table-responsive">
            <table className="table table-bordered participant-table">
              <thead>
                <tr>
                  <th scope="col">Main Group</th>
                  <th scope="col">Subgroups</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Civil Society Organisations</td>
                  <td>
                    <ul className="mb-0">
                      <li>Non-Governmental Organisations (NGOs)</li>
                      <li>Community-Based Organisations (CBOs)</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>Schools</td>
                  <td>
                    <ul className="mb-0">
                      <li>Primary Schools</li>
                      <li>Secondary Schools</li>
                      <li>Vocational Institutes</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>Others</td>
                  <td>
                    <ul className="mb-0">
                      <li>Cultural & Educational Institutions</li>
                      <li>Social Institutions</li>
                      <li>Business Sector & Cooperatives</li>
                      <li>Municipalities & Local Authorities</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
