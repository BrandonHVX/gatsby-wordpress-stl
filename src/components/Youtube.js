import React, { Component } from 'react';
import { Divider, Grid, Image, Segment } from 'semantic-ui-react';
import { Button } from 'react-bootstrap';

const API = 'AIzaSyC1usrmp1dSP7Q-fxffkfOnlamcgZcoWrk';
const channelID = "UClKdrIM2kd7p69vFY6NSynA";
const result = 10;

// THS IS THE DOCUMENTATION PAGE FOR YOUTUBE SEARCH API
// https://developers.google.com/youtube/v3/docs/search/list#usage

// THIS IS BASE URL 
// https://www.googleapis.com/youtube/v3/search


// THIS IS OUR FINAL URL WE HAVE GIVEN THE PARAMETERS
// https://www.googleapis.com/youtube/v3/search?key=AIzaSyBXScYINJ7hV_BOJHK1w00Df7qzHybO33o&channelId=UCAIlMG6LplmiRb14UFtcKCg&part=snippet,id&order=date&maxResults=10

// FINAL URL HAS BEEN RECONSTRUCTED
let finalUrl = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelID}&part=snippet,id&order=date&maxResults=${result}`;


class Youtube extends Component {
    constructor(props) {
        super(props)

        this.state = {
            resultyt: [],
            title: []
        };

        this.clicked = this.clicked.bind(this);
    }
    clicked() {
        console.log("Clicked");
        fetch(finalUrl)
            .then(res => res.json())
            .then(resJson => {
                // console.log(resJson);
                // MAKING ENTIRE LINK FOR ALL VIDEOS
                const resultyt = resJson.items.map(obj => "https://youtube.com/embed/" + obj.id.videoId);



                this.setState({ resultyt });

            })
            .catch(err => console.log(err));

    }



    render() {
        console.log(finalUrl);
        console.log(this.state.resultyt);


        return (
            <>

                <div class="mt-3" style={{ display: "flex", justifyContent: "center" }}>
                    <Button onClick={this.clicked}>Get Youtube Videos</Button>
                </div>
                <div>
                    <Divider inverted />


                    <Grid stackable columns={2}>
                        {

                            this.state.resultyt.map((link, i) => {
                                console.log(link);




                                return (
                                    <div class="container">
                                        <Grid.Column key={i}> <Segment >


                                            <iframe width="540" height="315" src={link} frameBorder="0" controls="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>


                                            <p>



                                            </p>

                                        </Segment>

                                        </Grid.Column>
                                    </div>

                                );
                            })
                        }
                    </Grid>
                </div>
            </>
        );
    }
}

export default Youtube;