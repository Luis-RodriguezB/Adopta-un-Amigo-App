import { combineReducers } from "redux";
import DogsReducer from "./DogsReducer";
import ActivitiesReducer from "./ActivitiesReducer";
import AdoptionReducer from "./AdoptionReducer";

export default combineReducers({
  dogsState: DogsReducer,
  activitiesState: ActivitiesReducer,
  adoptionsState: AdoptionReducer,
});

