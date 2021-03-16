import React, { useEffect } from "react";
import API from "../utils/API.js"
import "../styles/Home.css"
import PlayerCard from "../components/PlayerCard"

import * as NFLIcons from 'react-nfl-logos';
let playerObj;

const Home = () => {
    // useEffect(()=>{
    //     console.log("message from frontend")
    //     API.getMessage().then(message=>{
    //         console.log(message.data)
    //     })
    // }, [])
    useEffect(() => {
        API.getPlayers()
          .then(players => {
              players.data.forEach(player => {
                playerObj = {
                  name: player.displayName,
                  position: player.position,
                  team: player.team
                }
                document.getElementById("players-list").append(<PlayerCard name={playerObj.name} position={playerObj.position} team={playerObj.team} />)
              })
          })
          .catch(err => {
            console.log(err);
          })
    }, [])
    // console.log(NFLIcons)
    return (
      <>
    
      <div className="container maindiv">
        
        
       <center><h1>Fantasy Football</h1>
       <p class="divided">
        <span class="divider"></span>
    </p>


      <h4>Create your dream team.</h4>
       
       
         <form className=" my-2 my-lg-0 searchField">
            <input id="findinput" className="mr-sm-2" type="search" placeholder="Find a Player" aria-label="Search"/>
    
            <button className="btntwo my-2 my-sm-0" type="submit">Search</button>
          </form>
        
      <br/>
    
     
      </center>
  <section className="slider-container">
 <div className="image-container">
 <div className="slider-image" ><NFLIcons.ARI />
  </div>
  <div className="slider-image" ><NFLIcons.MIN />
  </div>
  <div className="slider-image" ><NFLIcons.DET />
  </div>
  <div className="slider-image" > <NFLIcons.BAL />
  </div>
  <div className="slider-image" > <NFLIcons.ATL />
  </div>
  <div className="slider-image" > <NFLIcons.BUF />
  </div>
  <div className="slider-image" > <NFLIcons.CAR />
  </div>
  <div className="slider-image" >  <NFLIcons.CHI />
  </div>
  <div className="slider-image" > <NFLIcons.CIN />
  </div>
  <div className="slider-image" ><NFLIcons.CLE />
  </div>
  <div className="slider-image" ><NFLIcons.DAL />
  </div>
  <div className="slider-image" ><NFLIcons.DEN />
  </div>
  <div className="slider-image" ><NFLIcons.DET />
  </div>
  <div className="slider-image" > <NFLIcons.GB />
  </div>
  <div className="slider-image" > <NFLIcons.HOU />
  </div>
  <div className="slider-image" ><NFLIcons.IND />
  </div>
  <div className="slider-image" > <NFLIcons.WAS />
  </div>
  <div className="slider-image" > <NFLIcons.TEN />
  </div>
  <div className="slider-image" ><NFLIcons.TB />
  </div> 
  <div className="slider-image" > <NFLIcons.SF />
  </div>
  <div className="slider-image" ><NFLIcons.SEA />
  </div>
  <div className="slider-image" ><NFLIcons.PIT />
  </div>
  <div className="slider-image" > <NFLIcons.PHI />
  </div>
  <div className="slider-image" > <NFLIcons.NYJ />
  </div>
  <div className="slider-image" > <NFLIcons.NYG />
  </div>
  <div className="slider-image" > <NFLIcons.NO />
  </div> 
  <div className="slider-image" >  <NFLIcons.NE />
  </div>
  <div className="slider-image" ><NFLIcons.MIA />
  </div>
  <div className="slider-image" > <NFLIcons.LV />
  </div>
  <div className="slider-image" ><NFLIcons.LAR />
  </div>
  <div className="slider-image" > <NFLIcons.LAC />
  </div>
  <div className="slider-image" > <NFLIcons.KC />
  </div>
  <div className="slider-image" > <NFLIcons.JAX />
  </div>

</div>
</section>


    </div>
    <div id="players-list">
      
    </div>
      </>
    );
  }
  
  export default Home;