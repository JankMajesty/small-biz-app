import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import LocationOnIcon from "@material-ui/icons/LocationOn";

const AnyReactComponent = ({ text }) => (
  <div>
    <LocationOnIcon />
  </div>
);

class Map extends Component {
  render() {
    const defaultProps = {
      center: {
        lat: this.props.lat,
        lng: this.props.lng,
      },
      zoom: 11,
    };
    return (
      // Important! Always set the container height explicitly
      <div
        style={{
          height: "40vh",
          width: "420px",
          marginLeft: "50px",
          paddingBottom: "30px",
        }}
      >
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDjULikPHmrPzrmZbtyphQaevW2iqFUWPU" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent
            lat={this.props.lat}
            lng={this.props.lng}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;