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
      
      
      <div className="container maindiv">
        
       <h2><center>An App for creating your very own dream team</center></h2>
          <form class="form-inline my-2 my-lg-0">
            <input id="findinput" class="form-control mr-sm-2" type="search" placeholder="Find A Player" aria-label="Search"/>
      
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
          
          
     
      <br/>
      <br/>
      <br/>

      <br/>
      <br/>
      <br/>

  <section class="slider-container">
 <div class="image-container">
  <div class="slider-image" ><NFLIcons.ARI />
  </div>
  <div class="slider-image" ><NFLIcons.MIN />
  </div>
  <div class="slider-image" ><NFLIcons.DET />
  </div>
  <div class="slider-image" > <NFLIcons.BAL />
  </div>
  <div class="slider-image" > <NFLIcons.ATL />
  </div>
  <div class="slider-image" > <NFLIcons.BUF />
  </div>
  <div class="slider-image" > <NFLIcons.CAR />
  </div>
  <div class="slider-image" >  <NFLIcons.CHI />
  </div>
  <div class="slider-image" > <NFLIcons.CIN />
  </div>
  <div class="slider-image" ><NFLIcons.CLE />
  </div>
  <div class="slider-image" ><NFLIcons.DAL />
  </div>
  <div class="slider-image" ><NFLIcons.DEN />
  </div>
  <div class="slider-image" ><NFLIcons.DET />
  </div>
  <div class="slider-image" > <NFLIcons.GB />
  </div>
  <div class="slider-image" > <NFLIcons.HOU />
  </div>
  <div class="slider-image" ><NFLIcons.IND />
  </div>
  <div class="slider-image" > <NFLIcons.WAS />
  </div>
  <div class="slider-image" > <NFLIcons.TEN />
  </div>
  <div class="slider-image" ><NFLIcons.TB />
  </div> 
  <div class="slider-image" > <NFLIcons.SF />
  </div>
  <div class="slider-image" ><NFLIcons.SEA />
  </div>
  <div class="slider-image" ><NFLIcons.PIT />
  </div>
  <div class="slider-image" > <NFLIcons.PHI />
  </div>
  <div class="slider-image" > <NFLIcons.NYJ />
  </div>
  <div class="slider-image" > <NFLIcons.NYG />
  </div>
  <div class="slider-image" > <NFLIcons.NO />
  </div> 
  <div class="slider-image" >  <NFLIcons.NE />
  </div>
  <div class="slider-image" ><NFLIcons.MIA />
  </div>
  <div class="slider-image" > <NFLIcons.LV />
  </div>
  <div class="slider-image" ><NFLIcons.LAR />
  </div>
  <div class="slider-image" > <NFLIcons.LAC />
  </div>
  <div class="slider-image" > <NFLIcons.KC />
  </div>
  <div class="slider-image" > <NFLIcons.JAX />
  </div>

</div>
</section>


    </div>
      
    );
  }
  
  export default Home;