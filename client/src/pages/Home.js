import React, { useEffect } from "react";
import API from "../utils/API.js"

import * as NFLIcons from 'react-nfl-logos';


const Home = () => {
    useEffect(()=>{
        console.log("message from frontend")
        API.getMessage().then(message=>{
            console.log(message)
        })
    }, [])
    console.log(NFLIcons)
    return (
        <>
       
      <div className="container maindiv">
        
       <h2><center>An App for creating your very own, personalized dream team</center></h2>
          <form class="form-inline my-2 my-lg-0">
            <input id="findinput" class="form-control mr-sm-2" type="search" placeholder="Find A Player" aria-label="Search"/>
      
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
          
          
      </div>
      <br/>
      <div className="container">
      <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Find A Player" aria-label="Search"/>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
          </div>
          <div>
      <NFLIcons.ARI />
      <NFLIcons.MIN /> 
      <NFLIcons.DET />
      <NFLIcons.BAL />
      <NFLIcons.ATL />
      <NFLIcons.BUF />
      <NFLIcons.CAR />
      <NFLIcons.CHI />
      <NFLIcons.CIN />
      <NFLIcons.CLE />
      <NFLIcons.DAL />
      <NFLIcons.DEN />
      <NFLIcons.DET />
      <NFLIcons.GB />
      <NFLIcons.HOU />
      <NFLIcons.IND />
      <NFLIcons.JAX />
      <NFLIcons.KC />
      <NFLIcons.LAC />
      <NFLIcons.LAR />
      <NFLIcons.LV />
      <NFLIcons.MIA />
      <NFLIcons.NE />
      <NFLIcons.NO />
      <NFLIcons.NYG />
      <NFLIcons.NYJ />
      <NFLIcons.PHI />
      <NFLIcons.PIT />
      <NFLIcons.SEA />
      <NFLIcons.SF />
      <NFLIcons.TB />
      <NFLIcons.TEN />
      <NFLIcons.WAS />
     
  


    </div>
    </>

      
    );
  }
  
  export default Home;