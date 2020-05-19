import React, { Component, createRef } from "react";

export default class VideoPlayer extends Component {
  state = {};
  PlayerRef = createRef();

  play = () => this.PlayerRef.current.play();
  pause = () => this.PlayerRef.current.pause();

  render() {
    console.log(this.PlayerRef);
    return (
      <div>
        <video
          src="https://cdn.videvo.net/videvo_files/video/free/2019-03/small_watermarked/190111_08_BuildingsTraffic_Drone_19_preview.webm"
          ref={this.PlayerRef}
        />
        <div>
          <button onClick={this.play}>Play</button>
          <button onClick={this.pause}>Pause</button>
        </div>
      </div>
    );
  }
}
