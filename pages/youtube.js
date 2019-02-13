import React, { Component } from "react";
import VideoPlayer from "../components/Youtube";

const API_KEY = "AIzaSyBdrdmszpVcI7r-BLyGE3bI822Z7Mohy4g";

class Youtube extends Component {
  state = {
    active: null,
    gapiLoaded: false,
    brodcast: null,
    videoId: null
  };

  loadYoutubeApi = () => {
    const script = document.createElement("script");
    script.src = "https://apis.google.com/js/client.js";

    script.onload = () => {
      gapi.load("client", () => {
        gapi.client.setApiKey(API_KEY);
        gapi.client.load("youtube", "v3", () => {
          this.setState({ gapiLoaded: true });
        });
      });
    };

    document.body.appendChild(script);
  };

  componentDidMount() {
    this.loadYoutubeApi();
  }

  request = async () => {
    const response = await fetch(
      "https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCmDM6zuSTROOnZnjlt2RJGQ&eventType=live&type=video&key=AIzaSyBdrdmszpVcI7r-BLyGE3bI822Z7Mohy4g"
    );
    const json = await response.json();
    console.log(json);
    const data = json.items[0];
    console.log(data);
    this.setState({
      brodcast: data.snippet,
      active: data.snippet.liveBroadcastContent ? "live" : false,
      videoId: data.id.videoId
    });
  };

  render() {
    const { active, gapiLoaded } = this.state;

    if (!gapiLoaded) {
      return <h1>Nije jos</h1>;
    }

    return (
      <>
        <p>
          <button onClick={this.request}>Check live</button>
          Status <strong>{active || "unkown"}</strong>
        </p>
        {active && (
          <div>
            <h3>{this.state.brodcast.title}</h3>
            <img src={this.state.brodcast.thumbnails.high.url} />
            <VideoPlayer
              width={400}
              height={400}
              videoId={`${this.state.videoId}`}
            />
          </div>
        )}
      </>
    );
  }
}

export default Youtube;
