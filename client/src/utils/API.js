import axios from "axios";

export default {
    getMessage: () => axios.get("/route"),
    getPlayers: () => axios.get("/api/players"),

    // Gets the book with the given id
    getPlayer: function (id) {
        return axios.get("/api/players/" + id);
    },

    // Deletes the player with the given id
    deletePlayer: function (id) {
        return axios.delete("/api/players/" + id);
    },
    // Saves a player to the database
    savePlayer: function (playerData) {
        return axios.post("/api/players", playerData);
    }
};