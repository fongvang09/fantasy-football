import React, { useEffect } from "react";
import "../utils/API.js";
import Players from "../components/Players";
import Icons from "../components/Icons";

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
          <h5><div id="added" /></h5>
          
        </center>
        <Icons />
      </div>
     
    </>
  );
};

export default Home;