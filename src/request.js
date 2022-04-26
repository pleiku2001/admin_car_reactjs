import axios from "axios";

const URL = "http://localhost:5000/api/";

const TOKEN = "fsff";
  export const publicRequest = axios.create({
      baseURL: URL
  })
export const userRequest = axios.create({
  baseURL: URL,
  headers: { token: `Bearer ${TOKEN}` },
});

