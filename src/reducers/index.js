import { combineReducers } from "redux";
import auth from "./auth";
import temp from "./temp";
export default combineReducers({
  auth,
  temp,
});