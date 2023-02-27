import React from "react";
import "./IPhone14Pro4.css";

function IPhone14Pro4(props) {
  const {
    uploadYourPhotosA,
    title,
    rectangle221,
    rectangle222,
    rectangle223,
    rectangle261,
    rectangle262,
    rectangle263,
    rectangle271,
    rectangle272,
    rectangle273,
    gallery,
    text1,
    serverStorage,
    x200Mb86Mb,
  } = props;

  return (
    <div className="container-center-horizontal">
      <form className="iphone-14-pro-4 screen" name="form2" action="form2" method="post">
        <div className="flex-row">
          <a href="javascript:SubmitForm('form2')">
            <img className="vector" src="/img/vector-3.svg" alt="Vector" />
          </a>
          <div className="overlap-group2">
            <p className="upload-your-photos-a poppins-bold-white-18px">{uploadYourPhotosA}</p>
            <h1 className="title">{title}</h1>
          </div>
        </div>
        <div className="overlap-group1">
          <img className="vector-1" src="/img/vector-1.svg" alt="Vector" />
          <img className="rectangle-22" src={rectangle221} alt="Rectangle 2.2" />
          <img className="rectangle-22-1" src={rectangle222} alt="Rectangle 2.2" />
          <img className="rectangle-22-2" src={rectangle223} alt="Rectangle 2.2" />
          <img className="rectangle-26" src={rectangle261} alt="Rectangle 2.6" />
          <img className="rectangle-26-1" src={rectangle262} alt="Rectangle 2.6" />
          <img className="rectangle-26-2" src={rectangle263} alt="Rectangle 2.6" />
          <img className="rectangle-27" src={rectangle271} alt="Rectangle 2.7" />
          <img className="rectangle-27-1" src={rectangle272} alt="Rectangle 2.7" />
          <img className="rectangle-27-2" src={rectangle273} alt="Rectangle 2.7" />
          <div className="ellipse-12"></div>
          <div className="rectangle-69"></div>
          <div className="ellipse-12-1"></div>
          <div className="rectangle-69-1"></div>
          <div className="ellipse-12-2"></div>
          <div className="rectangle-69-2"></div>
          <div className="ellipse-12-3"></div>
          <div className="rectangle-69-3"></div>
          <div className="ellipse-12-4"></div>
          <div className="rectangle-69-4"></div>
          <div className="ellipse-12-5"></div>
          <div className="rectangle-69-5"></div>
          <div className="ellipse-12-6"></div>
          <div className="rectangle-69-6"></div>
          <div className="ellipse-12-7"></div>
          <div className="rectangle-69-7"></div>
          <div className="ellipse-12-8"></div>
          <div className="rectangle-69-8"></div>
        </div>
        <div className="flex-row-1">
          <div className="group-20">
            <img className="gallery" src={gallery} alt="gallery" />
            <div className="text-1 nunitosans-bold-white-14px">{text1}</div>
          </div>
          <div className="button-orange-1">
            <div className="overlap-group">
              <div className="rectangle-17"></div>
              <div className="rectangle-18"></div>
            </div>
          </div>
          <div className="group-21">
            <img className="server-storage" src={serverStorage} alt="server-storage" />
            <div className="x200-mb86-mb nunitosans-bold-white-14px">{x200Mb86Mb}</div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default IPhone14Pro4;
