import axios from "axios";

export default {
    getMessage:() =>axios.get("/route"),
    getBulkData:() =>axios.get("/api/players")
}