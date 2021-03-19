import React from "react";
import "../utils/API.js";
import Players from "../components/Players";
import Icons from "../components/Icons";
import "../index.css";
import "../components/List/style.css";

const Home = () => {
  return (
    <>
      <div className="container maindiv">
        <center><h1>Fantasy Football</h1>
          <p className="divided">
            <span className="divider"></span>
          </p>
          <h4>Create your dream team</h4>
          <Players />
          <h4><div id="added" /></h4>
        </center>
        <Icons />
      </div>
    </>
  );
};

export default Home;