import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { List, ListItem } from "../components/List";
import DeleteBtn from "../components/DeleteBtn";
import { Input } from "../components/Form"
import API from "../utils/API";
import Icons from "../components/Icons";

const Team = () => {
  const { user } = useAuth0();
  const { loginWithRedirect } = useAuth0();

  const [teamPlayers, setTeamPlayers] = useState([]);
  const [team, setTeam] = useState({});

  useEffect(() => {
    checkUserLogin()
  }, [])

  function checkUserLogin() {
    if (!user) {
      loginWithRedirect()
    } else {
      getUserTeam();
    }
  }

  function getUserTeam() {
    // if(team.owner === user.email)
    API.getTeam(user.email)
      .then(res => {
        // console.log(res);
        if (res.data != null) {
          setTeam(res.data)
          setTeamPlayers(res.data.players);
        }
      })
    setTeam({ ...team, owner: user.email })
  }

  function createTeam(e) {
    e.preventDefault()
    API.createNewTeam(team)
      .then(res => window.location.reload())
  }

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
                    <ListItem key={player.id}>
                      <strong>
                        {player.firstName + " " + player.lastName + " "}
                        {player.team + " "}
                        {player.position + " "}
                      </strong>
                      <DeleteBtn />
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