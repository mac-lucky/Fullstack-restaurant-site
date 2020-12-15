import React, { Component } from "react";
import "./Opinions.css";
import googlePlaces from "google-maps-reviews";


class Opinions extends Component {
  render() {
    return (
      <>
        {googlePlaces}
        <div id="google-reviews"></div>
      </>
    );
  }
}

export default Opinions;
