import axios from "axios";


const http = axios.create({
    baseURL: process.env.NODE_ENV === "production" ? null : "http://localhost:9000",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
});
export default http;