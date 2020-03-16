
import React from "react"
import { Modal, Button } from "react-bootstrap";
import spotifywhite from "../images/spotify-white.png";
import SpotifyPlayer from 'react-spotify-web-playback';
import PlayWidget from 'react-spotify-widgets';
import curbservice from "../images/CURBSERVICE.jpg";
import spotifygreen from "../images/Spotify_Icon_RGB_Green.png";


function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered

        >

            <Modal.Body style={{ color: "white", backgroundColor: "#000000b7" }} >

                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={curbservice} alt="" />
                        </div>
                        <div className="col-md-6">
                            <PlayWidget
                                width="100%"
                                height={80}
                                uri={'spotify:album:4uiEuhrSjXoypRHIUqL2aU'}
                                lightTheme={true}
                                viewCoverArt={true}

                            />
                        </div>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

function App() {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <a variant="primary" onClick={() => setModalShow(true)}>
                <div class="play-btn color6">
                    <img src={spotifygreen} alt="" />
                </div>

            </a>

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}


export default App;