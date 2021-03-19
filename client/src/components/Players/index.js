import React, { useState, useEffect } from "react";
import { List, ListItem } from "../List";
// import DeleteBtn from "../DeleteBtn";
import { Input, FormBtn } from "../Form";
// import { Link } from "react-router-dom";
import API from "../../utils/API";
import { useAuth0 } from "@auth0/auth0-react";

// import { load } from "dotenv/types";
const Players = () => {
  const { user, loginWithRedirect } = useAuth0();

  // Setting our component's initial state
  const [players, setPlayers] = useState([])
  const [display, setDisplayState] = useState([])

  // Load all players and store them with setplayers
  useEffect(() => {
    loadPlayers()
  }, [])

  // Loads all players and sets them to players
  function loadPlayers() {
    API.getPlayers()
      .then(res => {
        setPlayers(res.data)
        setDisplayState(res.data)
      })
      .catch(err => console.log(err));
  };

  // // Deletes a player from the database with a given id, then reloads teams from the db
  // function deletePlayer(id) {
  //   API.deletePlayer(id)
  //     .then(res => loadPlayers())
  //     .catch(err => console.log(err));
  // }

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { value } = event.target;
    searchPlayer(value.toLowerCase());
  };

  // Search players based on input
  function searchPlayer(search) {
    let playerList = players
    var searchResults = playerList.filter(player => player.displayName.toLowerCase().includes(search) || player.position.toLowerCase().includes(search) || player.team.toLowerCase().includes(search))
    setDisplayState(searchResults)
  };

  // When the form is submitted, use the API.savePlayer method to save the player data
  // Then reload players from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (!user) {
      loginWithRedirect();
    }
    let myPlayer = players.filter(player => event.target.id === player._id)[0]
    API.savePlayer({
      player: myPlayer,
      owner: user.email
    })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  //Return JSX
  return (
    <>
      {/* <div className="container ">
      </div> */}
      <div className="container1">
        <form>
          <Input
            onChange={handleInputChange}
            name="player"
            placeholder="Search Player"
          />
        </form>
        {display.length ? (
          <List>
            {display.map(player => (
              <ListItem key={player._id}>
                <strong>
                  {player.displayName + " "}
                  {player.team + " "}
                  {player.position + " "}
                </strong>
                <FormBtn
                  id={player._id}
                  onClick={handleFormSubmit}
                >
                </FormBtn>
              </ListItem>
            ))}
          </List>
        ) : (
          <h3>No Results to Display</h3>
        )}
      </div>
    </>
  );
}
export default Players;