import React from 'react';
import { FaBookmark, FaFacebook, FaFile, FaInstagram, FaLink, FaTwitter } from "react-icons/fa";
import Slider from "react-slick";
import './app.css'
import Footer from './components/Footer';
import { Link } from 'react-router-dom';
import axios from 'axios';



function App() {
  const settings = {
    dots: false,
    lazyload: true,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 6000,
    adaptiveHeight: true,
    slidesToScroll: 1
  };

  const [active, setActive] = React.useState("cso");
  const [recent, setRecent] = React.useState([]);


  const fetchMostRecentEvent = () => {
    axios.get(`https://uganda-saxonypartnership.org/cms/wp-json/acf/v3/partnership-events`)
      .then((response) => {
        const recentPost = []
        recentPost.push(response.data[0])
        console.log("most recent post", recentPost)


        setRecent(recentPost)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  React.useEffect(() => {
    fetchMostRecentEvent()
  }, [])

  return (
    <>
      <div className="container-fluid p-0 homeContainer">
        <Slider {...settings} className="sliderWrapper">
          <div className="slidesContainer">
            <img
              className="img-fluid w-100"
              src="https://uganda-saxonypartnership.org/cms/wp-content/uploads/2024/01/slider1.jpg"
              alt="First slide"
            />
            <div className="heroContent">
              <div className="heroText container row">
                <div className='col-sm-5 gradient-head'>
                  <h2>Welcome to<br></br>Uganda - Saxony <br></br>Partnership</h2>
                </div>

                <div className="col-sm-7 gradient-text">
                  <p>Strengthening cooperation of civil society organizations in Uganda and Saxony that work in different areas.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="slidesContainer">
            <img
              className="img-fluid w-100"
              src="https://uganda-saxonypartnership.org/cms/wp-content/uploads/2024/01/slider2.jpg"
              alt="First slide"
            />

            <div className="heroContent">
              <div className="heroText container row">
                <div className='col-sm-5 gradient-head'>
                  <h2>Welcome to<br></br>Uganda - Saxony <br></br>Partnership</h2>
                </div>

                <div className="col-sm-7 gradient-text">
                  <p>Strengthening cooperation of civil society organizations in Uganda and Saxony that work in different areas.</p>
                </div>
              </div>
            </div>
          </div>


          <div className="slidesContainer">
            <img
              className="img-fluid w-100"
              src="https://uganda-saxonypartnership.org/cms/wp-content/uploads/2024/01/slider3-scaled.jpg"
              alt="First slide"
            />

            <div className="heroContent">
              <div className="heroText container row">
                <div className='col-sm-5 gradient-head'>
                  <h2>Welcome to<br></br>Uganda - Saxony <br></br>Partnership</h2>
                </div>

                <div className="col-sm-7 gradient-text">
                  <p>Strengthening cooperation of civil society organizations in Uganda and Saxony that work in different areas.</p>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>

      <section className="container-fluid p-0 aboutContainer">
        <div className="container aboutSection">
          <div className="row aboutRow">
            <div className="col-md-8 col-sm-12">
              <h6 className="sectionHeader">About the Uganda - Saxony Partnership</h6>
              <p className="sectionParaText">
                The Uganda-Saxony Partnership is a project funded by the free state
                of Saxony, through the Entwicklungspolitisches Netzwerk Sachsen,
                ENS e.V (Development Policy Network Saxony); The partnership
                project seeks to strengthen cooperation of actors in Uganda and
                Saxony that work in different areas of sustainable development
                including Civil Society Organisations (CSOs), schools, cultural institutions
                sciences, business sector and municipalities interested in social
                and sustainable development. The project directly contirbutes to the
                implementation of  SDG 17: “Partnerships to achieve the sustainable
                Development Goals”
              </p>
              <p className="sectionParaText">

                Katosi Women Development Trust is coordinating the Uganda-Saxony
                partnership, a project which cooprates with the Development
                Policy Network Saxony. The partnership seeks to strengthen cooperation
                of civil society organizations in uganda and saxony that work in different
                areas such as development cooperation or education for sustainable
                development.
              </p>

              <div>
                <Link to="/our_work" className="sectionLink">
                  <FaLink color="#1E8E2C" size={18} />
                  <span className="linkText">Read more..</span>
                </Link>
              </div>

            </div>

            <div className="col-md-4 col-sm-12">
              <h6 className="sectionHeader">Events</h6>

              <div>
                {recent.length !== 0 ?

                  <div>
                    {recent.map((item, index) => (
                      <div className="newzTop" key={item.id}>
                        <img src={item.acf.event_images[0]} className="img-fluid newzCardImage" alt="" />
                        <div className="dateWrapper">
                          <span>{item.acf.event_date}</span>
                        </div>
                        <div className="titleWrapper">
                          <h6 className="newz-title">{item.acf.event_title}</h6>
                        </div>
                      </div>
                    ))}

                    <div>
                      <Link to="/events" className="sectionLink">
                        <FaLink color="#1E8E2C" size={18} />
                        <span>View all events</span>
                      </Link>
                    </div>
                  </div>

                  :
                  <div className="newzTop emptyNewzTop">
                    <span>No Recent Events</span>
                  </div>
                }
              </div>


              <hr></hr>

              <>
                <h6 className="sectionSubHeader">Follow the Uganda Saxony Partnership</h6>
                <hr></hr>
                <div className="follow-links">
                  <h6>Saxony Uganda</h6>
                  <ul>
                    <li>
                      <FaTwitter size={24} className="followIcon" color="#433f3f" />
                      <a href='https://twitter.com/uganda_saxony' target='_blank' rel='noreferrer'>Twitter</a>
                    </li>

                    <li>
                      <FaFacebook size={24} className="followIcon" color="#433f3f" />
                      <a href='https://www.facebook.com/profile.php?id=100094606894335' target='_blank' rel='noreferrer'>Facebook</a>

                    </li>

                    <li>
                      <FaInstagram size={24} className="followIcon" color="#433f3f" />
                      <a href='https://www.instagram.com/uganda_saxony_partnership/' target='_blank' rel='noreferrer'>Instagram</a>

                    </li>
                  </ul>
                </div>

                <div className="follow-links">
                  <h6>Saxony Germany</h6>
                  <ul>
                    <li>
                      <FaFacebook size={22} className="followIcon" color="#433f3f" />
                      <a href='https://www.facebook.com/profile.php?id=100094409740783' target='_blank' rel='noreferrer'>Facebook</a>

                    </li>

                    <li>
                      <FaInstagram size={24} className="followIcon" color="#433f3f" />
                      <a href='https://www.instagram.com/ugandasachsenpartnerschaft/' target='_blank' rel='noreferrer'>Instagram</a>

                    </li>
                  </ul>
                </div>
              </>


            </div>

          </div>

        </div>

      </section>

      <section className="container-fluid actorsContainer">
        <div className="container actorsWrapper">
          <h6 className="actorsSectionHead">Actors in Uganda</h6>
          <p className="sectionParaText">The role of the partnership is to bring actors in Saxony and Uganda together and the following are the target actor groups</p>

          <div className="actorButtonGroup">
            <button
              onClick={() => setActive("cso")}
              id="actorButton1"
              className={`${active === "cso" ? 'activeActorButton' : 'actorButton'}`}
            >
              Civil Society Organisations
            </button>
            <button
              onClick={() => setActive("schools")}
              id="actorButton2"
              className={`${active === "schools" ? 'activeActorButton' : 'actorButton'}`}
            >
              Schools
            </button>
          </div>

          {active === "cso" &&

            <div className="actorsComponent">
              <div className="actorCard">
                <h6>Non Government Organisation<br></br>NGO's</h6>
              </div>
              <div className="actorCard">
                <h6>Community Based Organisation<br></br>CBO's</h6>
              </div>
            </div>
          }

          {active === "schools" &&
            <div className="actorsComponent">
              <div className="actorCard">
                <h6>Primary Schools</h6>
              </div>
              <div className="actorCard">
                <h6>Secondary Schools</h6>
              </div>
              <div className="actorCard">
                <h6>Vocational Institutes</h6>
              </div>
            </div>
          }

        </div>

      </section>

      <section className="container-fluid membersContainer">
        <div className="container membersWrapper">
          <h6 className="memberSectionHead">Project Parties/Members</h6>
          <p className="sectionParaText">The partnership seeks to collaborate Civil Society Organisations in Uganda and Germany, as well as schools, municipalities people from the science and business sector, who does what?</p>
          <div className="d-flex gap-5 mt-5">
            <div>
              <img src="https://uganda-saxonypartnership.org/cms/wp-content/uploads/2024/01/KWDT_LOGO.jpg" height="120" width="100" alt="" />
              <h6 className="memberName">Project Coordinator</h6>
            </div>
            <div>
              <img src="https://uganda-saxonypartnership.org/cms/wp-content/uploads/2024/01/ENS-Logo.png" height="120" width="120" alt="" />
              <h6 className="memberName">Collaborative Partner</h6>
            </div>
          </div>
        </div>
      </section>

      <section className="container-fluid interestContainer">
        <div className="container interestWrapper">
          <h6 className="interestSectionHead">Express Interest</h6>
          <p className="sectionParaText">
            Civil Society and Schools that need to express interest in partnering with the German organization
            under the Uganda-Saxony Partnership
          </p>
          <div className="interestCardWrapper">
            <div className="d-flex interestCard ">
              <FaFile size={18} color="#1e8e2c" />
              <span>Download Registration Template</span>
            </div>

            <div className="d-flex interestCard">
              <FaBookmark size={18} color="#1e8e2c" />
              <span>Fill Onlines Template</span>
            </div>
          </div>
        </div>

      </section>

      <section className="container-fluid galleryContainer">
        <div className="container galleryWrapper">
          <h6 className="gallerySectionHead">Project Gallery</h6>
          <p className="gallerySectionPara">We are always onto something, workshops, discussion, plus any other activities and this is how we keep you posted.</p>


          <div className="gallery-link">
            <Link className="galleryLink">
              <FaLink color="#FAF9f6" size={18} />
              <span>Gallery</span>
            </Link>
          </div>

          <div className="d-flex gap-4">
            <div className="galleryImageContainer">
              <img src="https://uganda-saxonypartnership.org/cms/wp-content/uploads/2024/01/PXL_20230714_063057105-scaled.jpg" className="img-fluid gallery-image" height="350" width="400" alt="" />
            </div>

            <div className="galleryImageContainer">
              <img src="https://uganda-saxonypartnership.org/cms/wp-content/uploads/2024/01/PXL_20230714_091336892-scaled.jpg" className="img-fluid gallery-image" height="350" width="400" alt="" />
            </div>
          </div>

        </div>

      </section>

      <section className="container-fluid saxonyContainer">
        <div className="container saxonyWrapper">
          <img className="img-fluid" src="https://uganda-saxonypartnership.org/cms/wp-content/uploads/2024/01/saxony.png" alt="" />
        </div>

      </section>

      <section className="container-fluid footerContainer">
        <Footer />
      </section>
    </>
  )
}

export default App;
