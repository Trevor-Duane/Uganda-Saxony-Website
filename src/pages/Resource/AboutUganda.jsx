import React from "react";
import "./Resources.css";
import { NavLink, useNavigate } from "react-router-dom";
import { FaLocationDot, FaLocationPin } from "react-icons/fa6";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const AboutUganda = () => {
  const [selectedContent, setSelectedContent] = React.useState("Uganda");

  const handleLinkClick = (contentId) => {
    setSelectedContent(contentId);
  };

  const Uganda = () => {
    return (
      <>
        <div className="about-uganda">
          <p className="resource-main-head">Uganda country information</p>
          <p className="resource-text">
            Uganda, popularly known as the ‘The Pearl of Africa’ is located in
            East Africa and lies astride the equator. It is a land-locked
            country bordered by Kenya in the East, Tanzania in the South, Rwanda
            in the Southwest, Democratic Republic of Congo in the West and Sudan
            in the North. The southern part of the country includes a
            substantial portion of Lake Victoria, shared with Kenya and
            Tanzania, situating the country in the African Great Lakes region
          </p>
          <p className="resource-text">
            Uganda also lies within the Nile basin, and has a varied but
            generally equatorial climate. Uganda takes its name from the Buganda
            kingdom, which encompasses a large portion of the south of the
            country including the capital Kampala.
          </p>

          <p className="resource-headers">Hospitality and culture</p>
          <p className="resource-text">
            Ugandans are known for their hospitality and friendliness towards
            each other and visitors alike. However, it is advisable to be
            cautious when dealing with strangers. Police officers are very
            helpful and are easily identified by their uniforms
          </p>

          <p className="resource-text">
            Uganda has a very strong cultural heritage. Many regions in Uganda
            have kingdoms including Buganda, Busoga, Bunyoro and Toro. Ugandans
            are remarkably hospital and hail from a diversity of rich cultures
            and lifestyles. Culture and traditions are also expressed through a
            wide range of arts and crafts
          </p>

          <p className="resource-headers">Climate</p>
          <p className="resource-text">
            Uganda enjoys a tropical climate, with abundant sunshine all year
            round. Uganda's temperatures are moderate throughout the year. In
            Kampala, near Lake Victoria, average daily temperatures range from
            18° to 28° C (65° to 83° F) in January and from 17° to 25° C (62° to
            77° F) in July. The climate is tropical; generally rainy with two
            dry seasons (December to February, June to August). It is semiarid
            East Sudanian savanna in north near Sudan
          </p>
        </div>
        <div className="uganda-map">
          <p className="resource-headers">Map of uganda</p>
          <figure className="figure">
            <img
              className="img-thumbnail"
              src="https://uganda-saxonypartnership.org/cms/wp-content/uploads/2024/07/Map-of-Uganda-showing-the-neighbouring-countries-and-administrative-districts.png"
              alt=""
            />
            <figcaption className="figure-caption mt-2 text-success">
              Uganda Districts
            </figcaption>
          </figure>
        </div>
      </>
    );
  };

  const Schools = () => {
    return (
      <div className="uganda-schooling">
        <p className="resource-main-head">The Uganda school system</p>
        <p className="resource-text">
          Uganda is one of the most diverse and dynamic countries in Africa that
          considers education a basic human right The system of education in
          Uganda has a structure of 7 years of primary education, 6 years of
          secondary education (divided into 4 years of lower secondary and 2
          years of upper secondary school), and 3 to 5 years of post-secondary
          education. All throughout the levels in the education structure,
          modules are taught and assessed in English
        </p>
        <div className="uganda-school">
          <p className="resource-headers">
            Early Childhood Development and Nursery
          </p>
          <p className="resource-text">
            National Integrated Early Childhood Development Policy and Action
            Plan of Uganda was developed to guide the process of developing the
            full potential of children from conception to 8 years of age.
            Therefore the parents and caregivers are expected to help the
            children grow and thrive physically, mentally, emotionally,
            spiritually, morally and socially. Early childhood centres include
            pre-school, nursery schools and day care centres
          </p>
        </div>

        <div className="uganda-school">
          <p className="resource-headers">Primary Education</p>
          <p className="resource-text">
            Despite its best intentions, there a few really free state schools
            in Uganda, and the quality of paid private schools varies
            tremendously too. The education program that runs from February
            through to December, begins with 7 years of primary school
            education. For pupils in a class size of up to one hundred who fail
            to pass their leaving examinations, this ends their hopes.
          </p>
        </div>

        <div className="uganda-school">
          <p className="resource-headers">Middle Education</p>
          <p className="resource-text">
            The first phase of secondary academic education takes 4 years, at
            the end of which time students must pass their O-Levels before
            proceeding further. Alternatively they may attend a technical
            college for 3 years instead, and then go on to study at a technical
            institute, or primary teacher training college for example
          </p>
        </div>

        <div className="uganda-school">
          <p className="resource-headers">Secondary Education</p>
          <p className="resource-text">
            Like so much of Ugandan education, secondary schooling still follows
            the British academic model where traditional subjects continue to be
            taught. A successful A-Level pass opens up the possibility of
            tertiary education for the lucky few who made it this far
          </p>
        </div>

        <div className="uganda-school">
          <p className="resource-headers">Vocational Education</p>
          <p className="resource-text">
            Uganda is riddled with unemployment and young people without much
            hope. An urgent need exists to kick-start the economy. Many foreign
            aid agencies and governments are working hand in hand with local
            authorities, in an attempt to turn this into a reality
          </p>
        </div>

        <div className="uganda-school">
          <p className="resource-headers">Tertiary Education</p>
          <p className="resource-text">
            There are 5 state universities, 11 religiously-affiliated
            universities, and 10 private secular universities in Uganda. There
            are also 4 technical colleges, of which 1 is private. Of the Ugandan
            students who qualify for tertiary education less than 50% find
            places though. The second oldest, and by far the largest institution
            is the University of Makarere founded in 1922 and sited on a hill
            overlooking Kampala. It has a number of campuses, and 8 halls of
            residence, of which 2 are for women
          </p>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="uganda-cover">
        <div className="container gx-0">
          <div className="uganda-cover-text">
            <div>
              <FaLocationDot color="#fff" size={18} />
            </div>
            <div>
              <span> Lake Bunyonyi Hills</span>
            </div>
          </div>
        </div>
      </div>
      <div className="container resources-page gx-0">
        <div className="res-side-links">
          <div className="side-links">
            <NavLink
              onClick={() => handleLinkClick("Uganda")}
              className={selectedContent === "Uganda" ? "side-link-active" : "side-link"}
            >
              About Uganda {selectedContent === "Uganda" ? <MdOutlineKeyboardDoubleArrowRight /> : ""}
            </NavLink>
            <NavLink
              onClick={() => handleLinkClick("Schools")}
              className={selectedContent === "Schools" ? "side-link-active" : "side-link"}
            >
              Uganda School System {selectedContent === "Schools" ? <MdOutlineKeyboardDoubleArrowRight /> : ""}
            </NavLink>
          </div>
        </div>
        <div className="res-content">
          {selectedContent === "Uganda" ? <Uganda /> : <Schools />}
        </div>
      </div>
    </>
  );
};

export default AboutUganda;
