import axios from "axios";
// import "../components/Form/index";

export default {
    //return all players
    getPlayers: () => axios.get("/api/players"),

    // Gets the player with the given id
    getPlayer: function (id) {
        return axios.get("/api/players/" + id);
    },

    // Gets team by user log in name
    getTeam: function(id) {
        return axios.get("/api/team/" + id)
    },

    // Creates new team for user
    createNewTeam: function(data){
        return axios.post("/api/team", data)
    },

    // Deletes the player with the given id
    deletePlayer: function (id) {
        console.log("clicked");
        return axios.delete("/api/players/" + id);
    },

    // Saves a player to the database
    savePlayer: function (playerData) {
        // console.log(playerData);
        console.log(playerData.player.displayName + " has been added");
        document.getElementById("added").innerHTML = playerData.player.displayName + " has been added to your team";
        return axios.post("/api/players", playerData);
    }
};