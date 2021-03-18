import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { List, ListItem } from "../components/List";
import DeleteBtn from "../components/DeleteBtn";
import { Input } from "../components/Form"
import API from "../utils/API";
import Icons from "../components/Icons";

const Team = () => {
  // Getting user data and login link from Auth0
  const { user, loginWithRedirect } = useAuth0();

  // State hooks. teamPlayers are the players on your team.  
  // team is to keep track of team information (i.e. name, owner email and name, etc)
  const [teamPlayers, setTeamPlayers] = useState([]);
  const [team, setTeam] = useState({});

  // On load, check user log in
  useEffect(() => {
    checkUserLogin()
  }, [])

  // Not logged in, direct to login. Otherwise, get team and populate
  function checkUserLogin() {
    if (!user) {
      loginWithRedirect()
    } else {
      getUserTeam();
    }
  }

  // Call teamPlayers data from the database. Sets owner key in team.
  function getUserTeam() {
    API.getTeam(user.email)
      .then(res => {
        if (res.data != null) {
          setTeam(res.data)
          setTeamPlayers(res.data.players);
        }
      })
      .catch(err => console.log(err))
    setTeam({ ...team, owner: user.email })
  }

  // Create a new team if no team exists, save to db.
  function createTeam(e) {
    e.preventDefault()
    API.createNewTeam(team)
      .then(res => console.log("well done"))
      .catch(err => console.log(err))
  }

  // JSX to return to the homepage
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
          {team.name != null && team.players ? (
            <>
              <center>
                <h4>{team.name}</h4>
              </center>
              {team.players != [] ? (
                <List>
                  {teamPlayers.map(player => (
                    <ListItem key={player._id}>
                      <strong>
                        {player.firstName + " " + player.lastName + " "}
                        {player.team + " "}
                        {player.position + " "}
                      </strong>
                      <DeleteBtn owner={user.email} id={player._id}/>
                    </ListItem>
                  ))}
                </List>) : (<p>Nothing Yet</p>)}
            </>) : (
            <>
              <center>
                <h3>Create your team!</h3>
                <form id="new-team">
                  <Input onChange={(e) => setTeam({ ...team, name: e.target.value })} value={team.name} key="team-name" id="new-name" placeholder="Add a team name" />
                  <button id="team-name" form="new-team" onClick={(createTeam)} type="submit" className="my-2 btn btn-secondary btn-sm" >
                    Create
                  </button>
                </form>
              </center>
            </>
          )}
        </div>
        <Icons />
      </div>
    </>
  );
}

export default Team;