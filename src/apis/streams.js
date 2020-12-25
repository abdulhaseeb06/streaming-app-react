import axios from "axios";

const baseStreamAPI = axios.create({
  baseURL: "http://localhost:3001",
});

export default baseStreamAPI;
