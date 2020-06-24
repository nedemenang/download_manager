import { combineReducers } from "redux";
import downloads from "./downloads";
import errors from "./errors";

export default combineReducers({
  downloads,
  errors,
});
