import axios from "axios";

export default {
    getMessage:() => axios.get("/route"),
    getPlayers:() => axios.get("/api/players")
}