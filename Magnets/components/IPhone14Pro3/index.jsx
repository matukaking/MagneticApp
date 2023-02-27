import React from "react";
import "./IPhone14Pro3.css";

function IPhone14Pro3(props) {
  const { whereHaveYouBeen, inputType, inputPlaceholder, title } = props;

  return (
    <div className="container-center-horizontal">
      <form className="iphone-14-pro-3 screen" name="form4" action="form4" method="post">
        <div className="flex-row-2">
          <a href="javascript:SubmitForm('form4')">
            <img className="vector-2" src="/img/vector-4.svg" alt="Vector" />
          </a>
          <div className="where-have-you-been poppins-bold-white-18px">{whereHaveYouBeen}</div>
        </div>
        <div className="overlap-group-1">
          <input
            className="location poppins-medium-white-26px"
            name="location"
            placeholder={inputPlaceholder}
            type={inputType}
          />
          <img className="line-1" src="/img/line-1.svg" alt="Line 1" />
        </div>
        <img className="vector-3" src="/img/vector-1.svg" alt="Vector" />
        <a href="javascript:SubmitForm('form4')">
          <div className="button-orange-2">
            <h1 className="title-1 nunitosans-bold-white-42px">{title}</h1>
          </div>
        </a>
      </form>
    </div>
  );
}

export default IPhone14Pro3;
