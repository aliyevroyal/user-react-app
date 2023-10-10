import axios from "axios";

export default axios.create({
  baseURL: "http://user.eu-north-1.elasticbeanstalk.com",
  headers: {
    "Content-Type": "application/json",
  },
});
