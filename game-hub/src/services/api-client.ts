import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "fc8ed4b2478c41f282002e2b15c408b8",
  },
});
