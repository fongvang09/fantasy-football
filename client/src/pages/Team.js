import React, { useEffect, useState } from "react";
import * as NFLIcons from 'react-nfl-logos';
import { useAuth0 } from "@auth0/auth0-react";
import { List, ListItem } from "../components/List";
import DeleteBtn from "../components/DeleteBtn";
// import { Link } from "react-router-dom";
import API from "../utils/API";

const Team = () => {
  const { user } = useAuth0();
  const { loginWithRedirect } = useAuth0();

  const [teamPlayers, setTeamPlayers] = useState([]);
  const [team, setTeam] = useState({});
  useEffect(()=> {
    checkUserLogin()
  }, [])

  function checkUserLogin() {
    if(!user){
      loginWithRedirect()
    } else {
      getUserTeam();
    }
  }

  function getUserTeam(){
    API.getTeam(user.name)
      .then(res => {
        setTeam(res.data)
        setTeamPlayers(res.data.players);
      })
  }

  // function populateData(team){
  //   if(!team){
  //     console.log("no team, gotta sign up");
  //   } else {
  //     console.log(team);
  //   }
  // }

  return (
        <>
      
      <div className="container maindiv">
        <center>
      <h3>Current Team</h3>
      </center>
      <p className="divided">
        <span className="divider"></span>
    </p>
    <div className="container">
    <center>
      <h4>{team.name}</h4>
    </center>
    {user ? (
    <List>
      {teamPlayers.map(player => (
        <ListItem key={user.name}>
          <strong>
            {player.firstName + " " + player.lastName + " "}
            {player.team + " "}
            {player.position + " "}
          </strong>
          <DeleteBtn /> 
        </ListItem>
      ))}
    </List>) : (<h3>No Results to Display</h3>)}
    </div>
     


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
      </>
    );
  }


  
  
  export default Team;