import React from "react";
import "./Resources.css";
import { NavLink, useNavigate } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const AboutSaxony = () => {
  const [selectedContent, setSelectedContent] = React.useState("Saxony");

  const handleLinkClick = (contentId) => {
    setSelectedContent(contentId);
  };

  const Saxony = () => {
    return (
      <>
        <div className="about-saxony">
          <p className="resource-main-head">The Free State of Saxony</p>
          <p className="resource-text">
            Saxony is a federal state in the east of the Federal Republic of
            Germany. Until 1990, the territory of today's Free State of Saxony
            was part of the GDR. Around 4.1 million people live in saxony. The
            average age is 46.8years, which is higher than the national average,
            which was 44.7years in 2021.The{" "}
            <b>
              three largest cities in Saxony are Dresdan, Leipzig and Chemnitz
            </b>
            . Dresdan is also the capital of the Free State and the seat of the
            Saxon governments
          </p>
        </div>
        <div className="saxon-maps">
          <figure className="figure">
            <img
              className="img-thumbnail"
              src="https://uganda-saxonypartnership.org/cms/wp-content/uploads/2024/07/Saxon-Districts.png"
              alt=""
            />
            <figcaption className="figure-caption mt-2 text-success">
              Saxon Districts
            </figcaption>
          </figure>

          <figure className="figure">
            <img
              className="img-thumbnail"
              src="https://uganda-saxonypartnership.org/cms/wp-content/uploads/2024/07/Map_Saxony.png"
              alt=""
            />
            <figcaption className="figure-caption mt-2 text-success">
              Map Saxony
            </figcaption>
          </figure>
        </div>
        <div className="about-saxony">
          <p className="resource-text">
            Saxony borders Poland to the east and the Czech Republic to the
            south. Lusatia,the eastern part of Saxony, has been home to the
            Sorbs, a Slavic ethnic group with its own culture and labuage, for
            more than 1,000 years.
          </p>
          <p className="resource-headers">Climate</p>
          <p className="resource-text">
            Due to its locationin the east of Germany and its distance from the
            Atlantic ocean, the climatein Saxony is more continental in
            character than in other German federal states. This means that there
            is generally less rainfall and it is colder in winter and warmer in
            summer compared to other federal states.
          </p>
          <p className="resource-text">
            In general, the climate is characterised by the seasons of spring,
            summer, autumn and winter. In spring (March - May), a rainer period
            begins and temperatures rise increasingly to an average of 5&deg; to
            15&deg; Celsius.There can be big differences between day and night
            temperatures. Untill mid-may, frost can still occurat night,
            especially in the mountainous regions in the south of Saxony.summer
            (June - August) is the warmest and brightest season with
            temperaturesranging from 20&deg; to over 30&deg; Celcius. Due to the
            high temperatures, thunderstorms with heavy rain, lightning and
            thunder occur more frequently. In autumn (September - November) ,
            the days get shorter again and it gets colder. Temperatures range
            from 18&deg; to 5&deg; Celcius and it rains more frequently again
            especially in November. Winter (December - February) is the coldest
            season with average temperatures between 5&deg; and -5&deg; Celcius.
            The days are short with often little sunshine
          </p>

          <p className="resource-text">
            Vegetation follows the seasons,which means that nature comes back to
            life in spring after a dormant period in winter. the trees and
            plants begin to grow and blossom and produce their fruit over the
            course of the summer. The late summerand early autumn is the main
            harvest time in Saxony. After this, the trees lose their leaves due
            to the falling temperatures, the plants wither and nature comes to
            rest untill the next spring beings.
          </p>
        </div>
      </>
    );
  };

  const Schools = () => {
    return (
      <div className="saxony-schooling">
        <p className="resource-main-head">The Saxon school system</p>
        <p className="resource-text">
          In Saxony, as in the rest of Germany, children start school at the age
          of 6. Starting school is often a big family celebration at which the
          children recieve gifts such as sugar cones filled with sweets. Similar
          to uganda, there are different types of schools, starting with primary
          school, secondary school and grammar school. Pupils then have the
          opportunity to learn a profession or got to university
        </p>
        <div className="saxony-school">
          <p className="resource-headers">Primary school</p>
          <p className="resource-text">
            Pupils attend primary school (Grundschule) forn the first 4years,
            where they learn basic skills such as reading, writing and maths.
            With around 20 pupils, classes are usually smaller than in other
            types of school.
          </p>

          <p className="resource-text">
            The children learn in the morning and then either go home or are
            looked after in the after-school care centre in the afternoon. there
            they can do their homework or simply play with friends. At the end
            of primary school, the pupils recieve a recommendation for secondary
            school from the school, i.e. whether they should attend secondary or
            rather grammar school.
          </p>
        </div>

        <div className="saxony-school">
          <p className="resource-headers">Secondary school</p>
          <p className="resource-text">
            At the secondary school(Oberschule), students can complete two
            different school-leaving qualifications, the Hauptschulabschluss
            after year 9 or the RealSchulabschluss after year 10. The students
            study general subjects as well as technical, business, language or
            artistic subjects and prepare for later vocational training.
          </p>
          <p className="resource-text">
            The class size in the secondary schoolis around 25 to 30 students
          </p>
        </div>

        <div className="saxony-school">
          <p className="resource-headers">Grammar school</p>
          <p className="resource-text">
            At grammar school(Gymnasium), studentsstudyfrom year 5 to year 12.
            At the end, they take exams in several subjects, the Abitur. The
            Abitur entitlesthem to study at a college or university. However,
            there are also some vocational training programmes for which the
            Abituris required, such as bank clerk, media designer or
            laboratorytechnician.
          </p>
          <p className="resource-text">
            Studentscan choose a grammar school with a language, science orart
            specialisation according to their individual interests. The size of
            the classes is similar to that of the secondary school.
          </p>
        </div>

        <div className="saxony-school">
          <p className="resource-headers">Community school</p>
          <p className="resource-text">
            The special thing about community school (Gemeinschaftsschule) is
            that students continue to learn together at the same school after
            primary and can, in principle,complete all of the above mentioned
            school-leaving qualifications.
          </p>
        </div>

        <div className="saxony-school">
          <p className="resource-headers">Special school</p>
          <p className="resource-text">
            This typeof school aims to educate students with special educational
            needs and to enable them to lead as independent a life as possible.
            At a special school (Forderschule), students can complete a
            Hauptschule or Realschule qualification. They also have the option
            of transferring to one of the other types of school.
          </p>
        </div>

        <div className="saxony-school">
          <p className="resource-headers">Inclusion</p>
          <p className="resource-text">
            The system, which is divided into mainstream schools and special
            schools, has longbeen criticised for its unequal treatment of
            students. Students with special educational needs therefore also
            have the right to attend a regular primary, secondary or grammar
            school. The decision to do so lies with the parents.
          </p>
          <p className="resource-text">
            The inclusive organisation of schools and lessons is a long process,
            the goal of which is equal opportunities for all students.
          </p>
        </div>

        <div className="saxony-school">
          <p className="resource-headers">Vocational school</p>
          <p className="resource-text">
            After completing general schooling, students have the opportunity to
            learn a profession in a dual system. Dual means that students attend
            a vocational school (Berufsschule) that provides them with
            theoretical knowledge for their chosen profession and at the same
            time they learn practical skills in a training company such as a
            hospital, a joinery or a law firm. An apprenticeship usually lasts
            two to three years.
          </p>
        </div>

        <div className="saxony-school">
          <p className="resource-headers">University</p>
          <p className="resource-text">
            The Abitur entitles students to study at a college or
            university/university of applied sciences. Depending on the degree
            programme, they can complete a three-year bachelor's degree or a
            diploma.The diploma degree is only offered in some degree programmes
            and takes around five years to complete. After the Bachelor'sdegree,
            there is also the option of completing a postgraduate programme that
            ends with a master's degree
          </p>

          <p className="resource-text">
            Universities of applied sciences are generally more
            practice-oriented than universities and usually specilise in certain
            subject areas
          </p>
        </div>

        <div className="saxony-school">
          <p className="resource-headers"> Education is the responsibilityof the federal states</p>
          <p className="resource-text">
            n Germany, education is the responsibility of the individual federal
            states. This is why there are a few differences from state to state.
            For example, students in Saxony go to school for a maximum of 12
            years, while in North Rhine-Westphalia it is 13 years in some cases.
            The curricula are decided by the education ministries of the
            individual federal states and can differ from one another.
          </p>
        </div>

        <div className="saxony-school">
          <p className="resource-headers">The school year</p>
          <p className="resource-text">
            The school year in Saxony begins in August and is divided into 2
            semesters. The 1st half-year runs from August to February. Students
            receive their half-year reports in February. The 2nd half-year runs
            from the end of February/beginning of March to June/July. Students
            then have a 6-week summer holiday. The school holidays also vary
            from state to state. You can find out exactly when the school
            holidays are in Saxony here
          </p>
        </div>
      </div>
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
              onClick={() => handleLinkClick("Saxony")}
             className={selectedContent === "Saxony" ? "side-link-active" : "side-link"}
            >
              About Saxony {selectedContent === "Saxony" ? <MdOutlineKeyboardDoubleArrowRight /> : ""}
            </NavLink>
            <NavLink
              onClick={() => handleLinkClick("Schools")}
             className={selectedContent === "Schools" ? "side-link-active" : "side-link"}
            >
              Saxony School System {selectedContent === "Schools" ? <MdOutlineKeyboardDoubleArrowRight /> : ""}
            </NavLink>
          </div>
        </div>
        <div className="res-content">
          {selectedContent === "Saxony" ? <Saxony /> : <Schools />}
        </div>
      </div>
    </>
  );
};

export default AboutSaxony;
