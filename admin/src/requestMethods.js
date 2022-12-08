import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOTIxNGNlNTFmNDM1ZDcyMjVjOWFjMSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NzA1MTc5NzcsImV4cCI6MTY3MDc3NzE3N30.-x9jFBbc7g3m7lDPDPPXhMxbHhbp-YfH1tv8N2HEEpg"
//const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});


export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
