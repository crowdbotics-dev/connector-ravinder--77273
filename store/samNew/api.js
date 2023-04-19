import axios from "axios";
import { SAMNEW_SECRET } from "react-native-dotenv";
const samNew = axios.create({
  baseURL: "https://youtubve.com",
  params: {
    private_key: SAMNEW_SECRET
  },
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

function samnew_get_seleniumcomm_read(payload) {
  return samNew.get(`/selenium.comm`);
}

export const apiService = {
  samnew_get_seleniumcomm_read
};