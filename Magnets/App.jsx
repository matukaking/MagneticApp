import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import IPhone14Pro1 from "./components/IPhone14Pro1";
import IPhone14Pro4 from "./components/IPhone14Pro4";
import IPhone14Pro3 from "./components/IPhone14Pro3";
import IPhone14Pro2 from "./components/IPhone14Pro2";
import IPhone14Pro5 from "./components/IPhone14Pro5";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|iphone-14-pro-1)">
          <IPhone14Pro1
            welcomeTo="Welcome to"
            storeAllOfYourMe="Store all of your memories on your fridge about your unforgettable trip"
            place="Start"
          />
        </Route>
        <Route path="/iphone-14-pro-4">
          <IPhone14Pro4 {...iPhone14Pro4Data} />
        </Route>
        <Route path="/iphone-14-pro-3">
          <IPhone14Pro3
            whereHaveYouBeen="Where have you been?"
            inputType="text"
            inputPlaceholder="Location"
            title="Next"
          />
        </Route>
        <Route path="/iphone-14-pro-2">
          <IPhone14Pro2
            letsCreateYourAlbum="Let’s create your album!"
            inputType="text"
            inputPlaceholder="Album name"
            title="Next"
          />
        </Route>
        <Route path="/iphone-14-pro-5">
          <IPhone14Pro5 {...iPhone14Pro5Data} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const iPhone14Pro4Data = {
    uploadYourPhotosA: "Upload your photos and videos of your trip",
    title: "Done",
    rectangle221: "/img/rectangle-2-2-2@2x.png",
    rectangle222: "/img/rectangle-2-2-3@2x.png",
    rectangle223: "/img/rectangle-2-2-4@2x.png",
    rectangle261: "/img/rectangle-2-6-2@2x.png",
    rectangle262: "/img/rectangle-2-6-3@2x.png",
    rectangle263: "/img/rectangle-2-6-2@2x.png",
    rectangle271: "/img/rectangle-2-7-3@2x.png",
    rectangle272: "/img/rectangle-2-7-4@2x.png",
    rectangle273: "/img/rectangle-2-7-5@2x.png",
    gallery: "/img/gallery@2x.png",
    text1: "50/18",
    serverStorage: "/img/server-storage@2x.png",
    x200Mb86Mb: "200MB/86MB",
};

const iPhone14Pro5Data = {
    hereIsYourAlbum: "Here is your album",
    myAmazingTrip: "My amazing trip",
    place: "Dubai",
    rectangle221: "/img/rectangle-2-2@2x.png",
    rectangle261: "/img/rectangle-2-6@2x.png",
    rectangle271: "/img/rectangle-2-7@2x.png",
    rectangle272: "/img/rectangle-2-7-1@2x.png",
    rectangle222: "/img/rectangle-2-2-1@2x.png",
    rectangle262: "/img/rectangle-2-6-1@2x.png",
    rectangle273: "/img/rectangle-2-7-2@2x.png",
    vector2: "/img/vector-1@2x.png",
    vector3: "/img/vector-2@2x.png",
    polygon5: "/img/polygon-5@2x.png",
};

