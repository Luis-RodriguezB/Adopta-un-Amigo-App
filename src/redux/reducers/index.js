import { combineReducers } from "redux";
import DogsReducer from "./DogsReducer";
import ActivitiesReducer from "./ActivitiesReducer";

export default combineReducers({
  dogsState: DogsReducer,
  activitiesState: ActivitiesReducer,
});

