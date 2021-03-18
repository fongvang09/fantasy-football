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
    deletePlayer: function (data) {
        return axios.delete("/api/players/delete", data);
    },

    // Saves a player to the database
    savePlayer: function (playerData) {
        // console.log(playerData);
        console.log(playerData.player.displayName + " has been added!");
        document.getElementById("added").innerHTML = playerData.player.displayName + " has been added!";

        var timer = document.getElementById("added");
        timer.setAttribute("class", "notification fade-in");
        setTimeout(function() {
            timer.setAttribute("class", "notification fade-in hide");
        }, 2000);

        return axios.post("/api/players", playerData);
    }
};