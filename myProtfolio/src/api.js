import axios from "axios";

const API = axios.create({
  baseURL: "https://portfolio-backend-vweo.onrender.com",
});

export default API;
