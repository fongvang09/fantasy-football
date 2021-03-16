import React, { useState, useEffect } from "react";
import { List, ListItem } from "../List";
import DeleteBtn from "../DeleteBtn";
import { Input, FormBtn } from "../Form";
import { Link } from "react-router-dom";
import API from "../../utils/API";
// import { load } from "dotenv/types";
const Players = () => {
  // Setting our component's initial state
  let [teams, setTeams] = useState([])
  const [formObject, setFormObject] = useState({})
  const [display, setDisplayState] = useState([])
  // Load all teams and store them with setTeams
  useEffect(() => {
    loadPlayers()
  }, [])
  // Loads all teams and sets them to teams
  function loadPlayers() {
    API.getPlayers()
      .then(res => {
        setTeams([...teams, res.data])
        // displayPlayers()
        setDisplayState([...display, teams])
        // console.log(teams);
      })
        // .then(res => {
        // // setDisplayState(teams)
        // console.log(teams);
        // })
      .catch(err => console.log(err));
  };
  // Deletes a player from the database with a given id, then reloads teams from the db
  function deletePlayer(id) {
    API.deletePlayer(id)
      .then(res => loadPlayers())
      .catch(err => console.log(err));
  }
  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    // console.log(name,value);
    setFormObject({[name]:value})
    // console.log(formObject);
    searchPlayer(formObject[name]);

  };
  function searchPlayer(search) {
      // console.log(search);
      let teamList = teams[0]
      // console.log(teamList);
    // const searchValue = search.toLowerCase().trim();
    // || player.position === search || player.team === search
    var searchResults = teamList.filter(player => player.displayName.includes(search) || player.position.includes(search) || player.team.includes(search))
    // console.log(searchResults);
    if (searchResults == ""){
      loadPlayers()
    } else {
      setTeams(searchResults)
    }
  }
  // When the form is submitted, use the API.savePlayer method to save the player data
  // Then reload players from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.player) {
      API.savePlayer({
        player: formObject.player
      })
        .then(res => loadPlayers())
        .catch(err => console.log(err));
    }
  };
  return (
    <>
      <div className="container maindiv">
        <center>
          <h3>Find a player</h3>
        </center>
        <p className="divided">
          <span className="divider"></span>
        </p>
        <form>
          <Input
            onChange={handleInputChange}
            name="player"
            placeholder="Player"
          />
          <FormBtn
            disabled={!(formObject.player)}
            onClick={handleFormSubmit}
          >
            Draft Player
          </FormBtn>
        </form>
        {teams[0].length ? (
          <List>
            {teams.map(player => (
              <ListItem key={player._id}>
                <Link to={"/teams/" + player._id}>
                  <strong>
                    {player.displayName + " "}
                    {player.team + " "}
                    {player.position + " "}
                    {player.playerId + " "}
                    {/* {player._id} */}
                  </strong>
                </Link>
                <DeleteBtn onClick={() => deletePlayer(player._id)} />
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