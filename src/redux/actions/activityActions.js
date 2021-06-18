import { activitiesTypes } from "../types";
import { db } from "../../firebase/firebase-config";

export const GetActivities = () => {
  return (dispatch) => {
    try {
      dispatch(initGetActivities());
      db.collection("actividades").onSnapshot( async (querySnapshot) => {
        let activities = [];
        querySnapshot.forEach((doc) => {
          activities = [...activities, { ...doc.data(), id: doc.id }];
        });
        dispatch(getActivitiesSuccessfull(activities));
      });
    } catch (error) {
      dispatch(getActivitiesError(error));
    }
  };
};

const initGetActivities = () => {
  return {
    type: activitiesTypes.GET_ALL_ACTIVITIES,
  };
};

export const getActivitiesSuccessfull = (activities) => {
  return {
    type: activitiesTypes.GET_ALL_ACTIVITIES_SUCCESFULL,
    payload: activities,
  };
};

export const getActivitiesError = (error) => {
  return {
    type: activitiesTypes.GET_ALL_ACTIVITIES_ERROR,
    payload: error,
  };
};

