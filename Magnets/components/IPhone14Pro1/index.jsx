import React from "react";
import { Link } from "react-router-dom";
import "./IPhone14Pro1.css";

function IPhone14Pro1(props) {
  const { welcomeTo, storeAllOfYourMe, place } = props;

  return (
    <div className="container-center-horizontal">
      <form
        className="iphone-14-pro-1 screen"
        onclick="window.open('iphone-14-pro-2.html', '_self');"
        name="form1"
        action="form1"
        method="post"
      >
        <div className="welcome-to">{welcomeTo}</div>
        <img className="magnetic-memories-logo" src="/img/magnetic-memories-logo.svg" alt="Magnetic Memories Logo" />
        <p className="store-all-of-your-me">{storeAllOfYourMe}</p>
        <a href="javascript:SubmitForm('form1')">
          <div className="button-orange">
            <h1 className="place">{place}</h1>
          </div>
        </a>
      </form>
    </div>
  );
}

export default IPhone14Pro1;
