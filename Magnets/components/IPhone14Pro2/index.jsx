import React from "react";
import "./IPhone14Pro2.css";

function IPhone14Pro2(props) {
  const { letsCreateYourAlbum, inputType, inputPlaceholder, title } = props;

  return (
    <div className="container-center-horizontal">
      <form className="iphone-14-pro-2 screen" name="form6" action="form6" method="post">
        <div className="flex-row-3">
          <a href="javascript:SubmitForm('form6')">
            <img className="vector-4" src="/img/vector.svg" alt="Vector" />
          </a>
          <div className="lets-create-your-album poppins-bold-white-18px">{letsCreateYourAlbum}</div>
        </div>
        <div className="overlap-group-2">
          <input
            className="album-name poppins-medium-white-26px"
            name="albumname"
            placeholder={inputPlaceholder}
            type={inputType}
          />
          <img className="line-1-1" src="/img/line-1.svg" alt="Line 1" />
        </div>
        <img className="vector-5" src="/img/vector-1.svg" alt="Vector" />
        <a href="javascript:SubmitForm('form6')">
          <div className="button-orange-3">
            <h1 className="title-2 nunitosans-bold-white-42px">{title}</h1>
          </div>
        </a>
      </form>
    </div>
  );
}

export default IPhone14Pro2;
