import React, { useState } from "react";
import Welcome from "./Welcome";
import SetAlbum from "./SetAlbum";
import SetLocation from "./SetLocation";
import SetAlbumName from "./SetAlbumName";

function Form() {
  const [page, setPage] = useState(1);

  const FormTitles = [
    "Welcome",
    "Lets create your album!",
    "Where have you been?",
    "Upload your photos and videos of your trip",
  ];

  //amelyik page vagyunk azt jeleniti meg a body tagbe, mert ott hivjuk meg ezt a fuggvenyt
  const PageDisplay = () => {
    if (page === 0) {
      return <Welcome />;
    } else if (page === 1) {
      return <SetAlbumName />;
    } else if (page === 2) {
      return <SetLocation />;
    } else {
      return <SetAlbum />;
    }
  };

  return (
    <div className="form">
      <div className="progressbar">
        <div
          style={{
            width:
              page === 0
                ? "25%"
                : page == 1
                ? "50%"
                : page == 2
                ? "75%"
                : "100%",
          }}
        ></div>
      </div>
      <div className="form-container">
        <div className="header">
          <h1>{FormTitles[page]}</h1>
        </div>
        <div className="body">{PageDisplay()}</div>

        <div className="footer">
          <button
            disabled={page === 0} //megakadalyooza h ne tudjon ranyomni ha az első elemnél vagyunk
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            Prev
          </button>
          <button
            disabled={page === FormTitles.length - 1} //megakadalyooza h ne tudjon ranyomni ha az utolso elemnél vagyunk
            onClick={() => {
              setPage((currPage) => currPage + 1);
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Form;
