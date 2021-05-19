import { activitiesTypes } from "../types";

const initialState = {
  activities: [],
  error: null,
  loading: false,
};
const ActivitiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case activitiesTypes.GET_ALL_ACTIVITIES:
      return {
        ...state,
        loading: true,
      };
    case activitiesTypes.GET_ALL_ACTIVITIES_SUCCESFULL:
      return {
        ...state,
        activities: [...action.payload],
        loading: false,
      };
    case activitiesTypes.GET_ALL_ACTIVITIES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case activitiesTypes.GET_ACTIVITY_BY_ID:
      return {
        ...state,
        loading: true,
      };
    case activitiesTypes.GET_ACTIVITY_BY_ID_SUCCESFULL:
      return {
        ...state,
        activities: [...action.payload],
        loading: false,
      };
    case activitiesTypes.GET_ACTIVITY_BY_ID_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default ActivitiesReducer;
