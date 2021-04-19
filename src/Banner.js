import React, { useState } from "react";
import "./Banner.css";
import { Button } from "@material-ui/core";
import Search from "./Search";
import { useHistory } from "react-router";
function Banner() {
  const history = useHistory();
  const [showDate, setShowDate] = useState(false);
  return (
    <div className="banner">
      <div className="banner__Search">
        {showDate && <Search />}
        <Button
          onClick={() => setShowDate(!showDate)}
          className="banner__searchButton"
          variant="outlined"
        >
          {showDate ? "Hide" : "Search Dates"}
        </Button>
      </div>
      <div className="banner__info">
        <h1>Get out and stretch your imagination</h1>
        <h5>
          Plan a different kind of gateaway to uncover the hidden gems near you.
        </h5>

        <Button onClick={() => history.push("/search")} variant="outlined">
          Explore Nearby
        </Button>
      </div>
    </div>
  );
}
// bg image :
export default Banner;
