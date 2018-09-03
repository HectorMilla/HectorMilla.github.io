import React, { Component } from "react";

class Location extends Component {
  render() {
    return (
      <div id="location">
        <h5 className="location-heading">
          {" "}
          10 Great Locations to Serve You!!{" "}
        </h5>

        <div className="locations">
          <div className="cities">
            <span>Please Click on The Location Nearest you!</span>
            <div className="btn btn-primary btn-sm">Mebane</div>
            <div className="btn btn-primary btn-sm">Smithfield</div>
            <div className="btn btn-primary btn-sm">Clayton</div>
            <div className="btn btn-primary btn-sm">Roxboro</div>
            <div className="btn btn-primary btn-sm">
              Burlington
              {"(Church St)"}
            </div>
            <div className="btn btn-primary btn-sm">
              Burlington
              {"(Huffman Mill RD)"}
            </div>
            <div className="btn btn-primary btn-sm">Garner</div>
            <div className="btn btn-primary btn-sm">Cary</div>
            <div className="btn btn-primary btn-sm">Morrisville</div>
            <div className="btn btn-primary btn-sm">Hope Mills</div>
          </div>
          <div className="map">
            <iframe
              width="300"
              height="200"
              frameBorder="0"
              style={{ border: "0" }}
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDronWZhbtHjPQ9vXt4M-ptKeUEwDOqABw
    &q=La+Cocina+Mexican+Restaurant,Mebane,NC+27302"
              allowFullScreen
              title="map"
            />
          </div>
        </div>
      </div>
    );
  }
}
export default Location;
