import React from "react";
import "./IPhone14Pro5.css";

function IPhone14Pro5(props) {
  const {
    hereIsYourAlbum,
    myAmazingTrip,
    place,
    rectangle221,
    rectangle261,
    rectangle271,
    rectangle272,
    rectangle222,
    rectangle262,
    rectangle273,
    vector2,
    vector3,
    polygon5,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="iphone-14-pro-5 screen">
        <div className="flex-row-4">
          <div className="here-is-your-album poppins-bold-white-18px">{hereIsYourAlbum}</div>
          <div className="group-22">
            <div className="ellipse-13"></div>
            <div className="ellipse-14"></div>
            <div className="ellipse-15"></div>
          </div>
        </div>
        <div className="my-amazing-trip">{myAmazingTrip}</div>
        <div className="overlap-group-3">
          <div className="place-1">{place}</div>
          <img className="rectangle-22-3" src={rectangle221} alt="Rectangle 2.2" />
          <img className="rectangle-26-3" src={rectangle261} alt="Rectangle 2.6" />
          <img className="rectangle-27-3" src={rectangle271} alt="Rectangle 2.7" />
          <img className="rectangle-27-4" src={rectangle272} alt="Rectangle 2.7" />
          <img className="rectangle-22-4" src={rectangle222} alt="Rectangle 2.2" />
          <img className="rectangle-26-4" src={rectangle262} alt="Rectangle 2.6" />
          <img className="rectangle-27-5" src={rectangle273} alt="Rectangle 2.7" />
          <img className="vector-6" src="/img/vector@2x.png" alt="Vector" />
          <img className="vector-7" src={vector2} alt="Vector" />
          <img className="vector-8" src={vector3} alt="Vector" />
          <img className="polygon-5" src={polygon5} alt="Polygon 5" />
        </div>
      </div>
    </div>
  );
}

export default IPhone14Pro5;
