import axios from "axios"
import { NEW_RAVINDER_TESTER_TOKEN } from "react-native-dotenv"
const newRavindertester = axios.create({
  baseURL: "https://youtube.com",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${NEW_RAVINDER_TESTER_TOKEN}`
  }
})
function newravindertester_get__read(payload) {
  return newRavindertester.get(`/`)
}
function newravindertester_post_testercom_create(payload) {
  return newRavindertester.post(`/tester.com`)
}
export const apiService = {
  newravindertester_get__read,
  newravindertester_post_testercom_create
}
