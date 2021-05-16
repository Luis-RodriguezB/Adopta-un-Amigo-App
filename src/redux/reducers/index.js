import { combineReducers } from "redux";
import DogsReducer from "./DogsReducer";

export default combineReducers({
  dogsState: DogsReducer,
});
