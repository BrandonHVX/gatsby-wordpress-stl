import React from "react"
import { graphql } from "gatsby"
import PrimaryLayout from "../layouts/PrimaryLayout"
import Post from "../components/Post"
import bg1 from "../images/stl-header-image.jpg";
import curbservice from "../images/CURBSERVICE.jpg";
import testimage from "../images/testimony-img.png";
import edu from "../images/lilstlpic.png";
import testimony from "../images/testimony-img.png";
import content from '../components/content';
import Slider from 'react-animated-slider';
import SpotifyPlayer from 'react-spotify-player';

const bgImage = {
  backgroundImage: `url(${bg1})`,
  // backgroundColor: '#000874',
  backgroundPosition: 'bottom',
  paddingBottom: '90px',
  filter: 'grayscale(100%)',


}


const test = {
  backgroundRepeat: 'no-repeat',
  backgroundSize: '60%',
  backgroundPosition: 'top',
  display: 'absolute',
}


const testiImage = {
  backgroundImage: `url(${testimony})`,
}



const bgImage2 = {
  backgroundImage: `url(${bg1})`,
  backgroundSize: '100%',

  backgroundRepeat: 'no-repeat'
}


const spotifyImage = {
  backgroundImage: `url(${curbservice})`,
  dataStellarBackgroundRatio: "0.5"
}

const eduImage = {
  backgroundImage: `url(${edu})`,
  dataStellarBackgroundRatio: "0.5",


}

const size = {
  width: '100%',
  height: '80px',
  backgroundPosition: 'center',
};
const view = 'coverart'; // or 'coverart'
const theme = 'white'; // or 'white'


export default ({ data }) => {
  console.log(data)
  return (
    <PrimaryLayout column="col-xs-6"  >
      <div class="parallax">
      </div>
      <div class="hero-wrap" style={bgImage} >
        <div class="overlay"></div>
        <div class="container">
          <div class="row no-gutters slider-text align-items-center justify-content-end" data-scrollax-parent="true">
            <div class="col-md-6 order-md-last  mt-5" data-scrollax=" properties: { translateY: '70%' }">
              <h1 class="mb-4 hero-text" data-scrollax="properties: { translateY: '30%' }"> CURB SERVICE </h1>
              <p><a href="#" class="btn btn-black py-3 px-4">WATCH NOW</a></p>
            </div>
            <div class="col-md-6 d-none d-md-block">
              <div class="play-video pb-5 d-flex align-items-center">
                <p><a href="https://vimeo.com/45830194" class="popup-vimeo"><span class="icon"><i class="ion-ios-play "></i></span> <span class="play">Play video</span></a></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="ftco-section ftco-no-pt ftco-no-pb ftco-volunteer">
        <div class="container">
          <div class="row">
            <div class="col img-volunteer" style={spotifyImage} >
              <SpotifyPlayer
                uri="spotify:album:4uiEuhrSjXoypRHIUqL2aU"
                size={size}
                view={view}
                theme={theme}
              />

            </div>
            <div class="col-md-5 d-flex align-items-center bg-black">
              <div class="about-text py-5 pl-md-5">
                <h2> Upcoming Events</h2>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics</p>
                <p><a href="#" class="btn btn-black py-3 px-4">Donate now</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div class="ftco-section ftco-no-pt ftco-no-pb ftco-volunteer">
        <div class="container">
          <Slider autoplay={3000}>
            {content.map((item, index) => (
              <div
                key={index}
                style={{ background: `url('${item.image}') no-repeat center center` }}
              >
                <div className="center">
                  <h1>{item.title}</h1>
                  <p>{item.description}</p>
                  <button>{item.button}</button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>


      <section class="ftco-counter img ftco-section ftco-no-pt ftco-no-pb" id="about">
        <div class="container">
          <div class="row d-flex">
            <div class="col-md-6 col-lg-5 d-flex ">
              <div class="img d-flex align-self-stretch align-items-center" style={eduImage}>
              </div>
            </div>
            <div class="col-md-6 col-lg-7 pl-lg-5 py-5">
              <div class="py-md-5">

                <div class="row no-gutters justify-content-center mb-5">
                  <div class="col-md-8 text-center heading-section ftco-animate">
                    <span class="subheading">About Us</span>
                    <h2 class="mb-4">What is 1st Take?</h2>
                    <p>Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia.
      It is a paradisematic country</p>
                    <p></p>
                  </div>
                </div>






                <div class="row justify-content-start ">

                  <div class="col-md-12 heading-section ">
                    <span class="subheading"></span>
                    <h5 class="mb-3">MISSION</h5>
                    <p>Our mission is to enrich the young minds of our community by providing them with hands-on training that centers around the complete process of filmmaking. 1st Take Youth Film Program introduces youth to socially responsible filmmaking while empowering them to tell the stories of their community. Our educational outreach program caters to students ages 12-18 and has become an outlet for opportunity youth to express their creativity and exercise new skills that can be utilized in everyday life.</p>
                  </div>
                </div>
              </div>
              <div class="py-md-5">
                <div class="row justify-content-start pb-5">
                  <div class="col-md-12 heading-section mt-3">
                    <span class="subheading"></span>
                    <h5 class="mb-4">PURPOSE</h5>
                    <p>To inspire our youth to strive for greatness by using the fundamentals of the filmmaking process to turn their visions into reality.students ages 12-18 and has become an outlet for opportunity youth to express their creativity and exercise new skills that can be utilized in everyday life.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
          </div>
        </div>
      </section>


      <section class="testimony-section" style={test} id="services">
        <div class="container">

        </div>
      </section>

      {/* <section class="testimony-section">
  <div class="container">
    <div class="row ftco-animate justify-content-center">
      <div class="col-md-6 d-flex">
        <div class="testimony-img" style={testiImage}></div>
      </div>
      <div class="col-md-6 py-5">



      </div>
    </div>
  </div>
</section> */}

      <section class="team-section" id="team">
        <div >

          <div class="container">
            <div class="row no-gutters justify-content-center mb-5">
              <div class="col-md-6 text-center heading-section ftco-animate">
                <span class="subheading">Team</span>
                <h2 class="mb-4">Meet The Team</h2>
                <p>Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia.
      It is a paradisematic country</p>
                <p></p>
              </div>
            </div>

            <div class="row">

              <div class="col-lg-3 col-md-6">
                <div class="member text-center">
                  <div class="img">
                    <img src="https://i.postimg.cc/YC3kJnKb/team-1.jpg" class="img-fluid" alt="" />
                  </div>
                  <div class="m_text">
                    <h3>Nabed Khan</h3>
                    <h5>Front-End Developer</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio provident dolores.</p>
                  </div>
                  <div class="m_menu">
                    <ul class="list-inline">
                      <li class="list-inline-item"><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                      <li class="list-inline-item"><a href="#"><i class="fab fa-instagram"></i></a></li>
                      <li class="list-inline-item"><a href="#"><i class="fab fa-twitter"></i></a></li>
                      <li class="list-inline-item"><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-md-6">
                <div class="member text-center">
                  <div class="img">
                    <img src="https://i.postimg.cc/YC3kJnKb/team-1.jpg" class="img-fluid" alt="" />
                  </div>
                  <div class="m_text">
                    <h3>Emilia Noah</h3>
                    <h5>Creative Designer</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio provident dolores.</p>
                  </div>
                  <div class="m_menu">
                    <ul class="list-inline">
                      <li class="list-inline-item"><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                      <li class="list-inline-item"><a href="#"><i class="fab fa-instagram"></i></a></li>
                      <li class="list-inline-item"><a href="#"><i class="fab fa-twitter"></i></a></li>
                      <li class="list-inline-item"><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-md-6">
                <div class="member text-center">
                  <div class="img">
                    <img src="https://i.postimg.cc/CLbw4Mvy/team-2.jpg" class="img-fluid" alt="" />
                  </div>
                  <div class="m_text">
                    <h3>Emilia Noah</h3>
                    <h5>Digital Marketer</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio provident dolores.</p>
                  </div>
                  <div class="m_menu">
                    <ul class="list-inline">
                      <li class="list-inline-item"><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                      <li class="list-inline-item"><a href="#"><i class="fab fa-instagram"></i></a></li>
                      <li class="list-inline-item"><a href="#"><i class="fab fa-twitter"></i></a></li>
                      <li class="list-inline-item"><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-md-6">
                <div class="member text-center">
                  <div class="img">
                    <img src="https://i.postimg.cc/jSKt3V9D/team-3.jpg" class="img-fluid" alt="" />
                  </div>
                  <div class="m_text">
                    <h3>Emilia Noah</h3>
                    <h5>Back-End Developer</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio provident dolores.</p>
                  </div>
                  <div class="m_menu">
                    <ul class="list-inline">
                      <li class="list-inline-item"><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                      <li class="list-inline-item"><a href="#"><i class="fab fa-instagram"></i></a></li>
                      <li class="list-inline-item"><a href="#"><i class="fab fa-twitter"></i></a></li>
                      <li class="list-inline-item"><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>




      <footer class="ftco-footer ftco-section">
        <div class="container">
          <div class="row mb-5">
            <div class="col-md">
              <div class="ftco-footer-widget mb-4">
                <h2 class="ftco-heading-2">Aid.</h2>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                <ul class="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                  <li class="ftco-animate"><a href="#"><span class="icon-twitter"></span></a></li>
                  <li class="ftco-animate"><a href="#"><span class="icon-facebook"></span></a></li>
                  <li class="ftco-animate"><a href="#"><span class="icon-instagram"></span></a></li>
                </ul>
              </div>
            </div>
            <div class="col-md">
              <div class="ftco-footer-widget mb-4 ml-md-5">
                <h2 class="ftco-heading-2">Information</h2>
                <ul class="list-unstyled">
                  <li><a href="#" class="py-2 d-block">Donation</a></li>
                  <li><a href="#" class="py-2 d-block">Privacy</a></li>
                  <li><a href="#" class="py-2 d-block">Terms Condition</a></li>
                </ul>
              </div>
            </div>
            <div class="col-md">
              <div class="ftco-footer-widget mb-4">
                <h2 class="ftco-heading-2">Links</h2>
                <ul class="list-unstyled">
                  <li><a href="#" class="py-2 d-block">Home</a></li>
                  <li><a href="#" class="py-2 d-block">Who we are</a></li>
                  <li><a href="#" class="py-2 d-block">Causes</a></li>
                  <li><a href="#" class="py-2 d-block">Blog</a></li>
                  <li><a href="#" class="py-2 d-block">Contact</a></li>
                </ul>
              </div>
            </div>
            <div class="col-md">
              <div class="ftco-footer-widget mb-4">
                <h2 class="ftco-heading-2">Have a Questions?</h2>
                <div class="block-23 mb-3">
                  <ul>
                    <li><span class="icon icon-map-marker"></span><span class="text">203 Fake St. Mountain View, San Francisco, California, USA</span></li>
                    <li><a href="#"><span class="icon icon-phone"></span><span class="text">+2 392 3929 210</span></a></li>
                    <li><a href="#"><span class="icon icon-envelope"></span><span class="text">info@yourdomain.com</span></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 text-center">


            </div>
          </div>
        </div>
      </footer>





    </PrimaryLayout>
  )
}

export const query = graphql`
  {
  allWordpressPost{
    nodes {
      slug
      title
      excerpt
      featured_media {
        source_url
        slug
      }
    }
  }
}
`
