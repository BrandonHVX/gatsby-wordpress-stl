import React from "react"
import { graphql } from "gatsby"
import PrimaryLayout from "../layouts/PrimaryLayout"
import Post from "../components/Post"
import bg1 from "../images/stl-header-image.jpg";
import curbservice from "../images/CURBSERVICE.jpg";
import spotifylogo from "../images/spotify-logo.png";
import testimage from "../images/testimony-img.png";
import mdgdamob from "../images/mdgdamob.jpg";
import whitbobby from "../images/whit-bobby.jpg";
import spotifywhite from "../images/spotify-white.png";
import spotifygreen from "../images/Spotify_Icon_RGB_Green.png";

import stlprofile from "../images/LilStLouis-5330.jpg";
import stlprofile1 from "../images/lilstlouis7434.jpg";
import curbvideoimage from "../images/curbvideoimage.png";
import curb from "../images/curb.jpg";
import cameup from "../images/cameup.jpg";
import edu from "../images/lilstlpic.png";
import youtubelogo from "../images/yt_logo_rgb_dark.png";
import testimony from "../images/testimony-img.png";
import content from '../components/content';
import Gallery from '../components/Gallery';
import Slider from 'react-animated-slider';
import SpotifyPlayer from 'react-spotify-player';
import Youtube from '../components/Youtube';
import Header from '../components/Header';
import Came from '../components/Came';
import HeaderImage from '../components/bgImage';
import PlayWidget from 'react-spotify-widgets';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee, faPlay, FaPlayCircle } from '@fortawesome/free-solid-svg-icons'
import { Button } from 'react-bootstrap';
import { fas } from '@fortawesome/free-solid-svg-icons'
import FaPlayCircleO from 'react-icons/lib/fa/play-circle-o';
import Img from "gatsby-image";
import FaYoutubePlay from 'react-icons/lib/fa/youtube-play';



const bgImage = {
  backgroundImage: `url(${bg1})`,
  // backgroundColor: '#000874',
  backgroundPosition: 'bottom',
  paddingBottom: '90px',



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
  backgroundSize: '200%',
  backgroundPosition: 'center',

  backgroundRepeat: 'no-repeat'
}


const spotifyImage = {
  backgroundImage: `url(${curbvideoimage})`,
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


const profile = {
  backgroundImage: `url(${stlprofile})`,
  backgroundSize: '200%',
  backgroundPosition: 'top center',


};

const profiletube = {
  backgroundImage: `url(${stlprofile1})`,
  backgroundSize: '120%',

  backgroundRepeat: 'no-repeat',
  backgroundPosition: ' center',

};




export default ({ data }) => {
  console.log(data)
  return (
    <PrimaryLayout column="col-xs-6"  >

      <div class="parallax">
      </div>
      <div class="hero-wrap" style={bgImage}>

        <div class="overlay" ></div>
        <div class="container">

        </div>
      </div>

      <div class="ftco-section  ftco-volunteer">
        <div class="container">
          <div class="row">
            <div class="col img-volunteer" style={spotifyImage} >



            </div>
            <div class="col-md-5 d-flex align-items-center video-top">

              <div class="about-text py-5 pl-md-1">
                <h2 class="about-text"> CURB SERVICE</h2>
                <p>MUSIC VIDEO</p>
                <p><a class="btn icon-btn " href="#"><span class="glyphicon btn-glyphicon "><FaPlayCircleO /></span>Watch Now</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div class="ftco-section ftco-no-pt ftco-no-pb ftco-volunteer">
        <div class="">
          <div class="">

            <div class="">
              <div class="artist__header">

                <div class="artist__info">

                  <div class="profile__img" style={profile} >



                  </div>

                  <div class="artist__info__meta">

                    <div class="artist__info__type">Artist</div>

                    <div class="artist__info__name">LIL STL</div>

                    <div class="artist__info__actions">

                      <p><a class="btn icon-btn-spotify " href="https://open.spotify.com/artist/4QxkxOOCdlAeNKKjBzW3uB" ><span class="glyphicon btn-glyphicon-spotify "><img src={spotifywhite} width={20} /></span>Follow</a></p>





                    </div>

                  </div>


                </div>

                <div class="artist__listeners">

                  <img src={spotifylogo} alt="" />

                </div>

                <div class="artist__navigation">



                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      <div >
        <section class="ftco-counter img ftco-section ftco-no-pt ftco-no-pb" id="about">
          <div class="container">
            <div class="row d-flex justify-content-center">
              <div class="col-md-6 col-lg-5 d-flex ">
                <div class="img d-flex align-self-stretch align-items-center" style={eduImage}>
                </div>
              </div>
              <div class="col-md-6 col-lg-7 pl-lg-5 py-5">





                <div class="row justify-content-center ">
                  <div class="col-sm">

                    <div class="trailer-wrapper mobile">

                      <div class="tr-coming-soon">

                        <div class="music-cards">
                          <img src={curb} alt="" />
                          <div >
                            <Came />
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm"> <div class="trailer-wrapper mobile">

                    <div class="tr-coming-soon">

                      <div class="music-cards">
                        <img src={cameup} alt="" />
                        <div class="play-btn color6">
                          <img src={spotifygreen} alt="" />
                        </div>

                      </div>
                    </div>
                  </div></div>
                  <div class="col-sm">
                    <div class="trailer-wrapper mobile">

                      <div class="tr-coming-soon">

                        <div class="music-cards">
                          <img src={whitbobby} alt="" />
                          <div class="play-btn color6">
                            <img src={spotifygreen} alt="" />
                          </div>

                        </div>



                      </div>
                    </div>

                  </div>
                  <div class="col-sm">
                    <div class="trailer-wrapper mobile">

                      <div class="tr-coming-soon">

                        <div class="music-cards">
                          <img src={mdgdamob} alt="" />
                          <div class="play-btn color6">
                            <img src={spotifygreen} alt="" />

                          </div>

                        </div>



                      </div>
                    </div>

                  </div>





                </div>


              </div>

            </div>
          </div>
          <div>

          </div>
        </section>
      </div>




      <div class="ftco-section-youtube ftco-no-pt ftco-no-pb ftco-volunteer">
        <div class="">

          <div class="artist__header">

            <div class="artist__info">

              <div class="profile__img" style={profiletube}>



              </div>

              <div class="artist__info__meta">

                <div class="artist__info__type">Artist</div>

                <div class="artist__info__name">LILSTLVEVO</div>

                <div class="artist__info__actions">

                  <p><a class="btn icon-btn-youtube " href="https://www.youtube.com/channel/UClKdrIM2kd7p69vFY6NSynA/?sub_confirmation=1" ><span class="glyphicon btn-glyphicon-youtube "><FaYoutubePlay /></span>Subscribe</a></p>


                </div>
              </div>
            </div>

            <div class="artist__listeners">

              <img class="mt-2" src={youtubelogo} alt="" />

            </div>

            <div class="artist__navigation">



            </div>
          </div>

          <section class="ftco-counter2 img ftco-section ftco-no-pt ftco-no-pb" id="about">

            <div>
              <Youtube />



            </div>

          </section>
          <section class=" ftco-section ftco-no-pt ftco-no-pb bg-black" id="about">

            <div>


              <Gallery />

            </div>

          </section>

        </div>

      </div>









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





    </PrimaryLayout >
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
