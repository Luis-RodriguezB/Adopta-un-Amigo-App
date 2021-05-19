import { activitiesTypes } from "../types";
import { db } from "../../firebase/firebase-config";

export const CreateActivityAction = (activity, history) => {
  return async (dispatch) => {
    dispatch(initAddActivity());
    try {
      await db.collection("actividades").doc().set(activity);
      dispatch(addActivitySuccessfull(activity));
    } catch (error) {
      dispatch(addActivityError(true));
    }
    history.push(Routes.Activities);
  };
};

const initAddActivity = () => ({
  type: activitiesTypes.CREATE_ACTIVITY,
});

const addActivitySuccessfull = (activity) => ({
  type: activitiesTypes.CREATE_ACTIVITY_SUCCESFULL,
  payload: activity,
});

const addActivityError = (hasError) => ({
  type: activitiesTypes.CREATE_ACTIVITY_ERROR,
  payload: hasError,
});

export const GetActivities = () => {
  return (dispatch) => {
    dispatch(initGetActivities());
    try {
      db.collection("actividades").onSnapshot((querySnapshot) => {
        let activities = [];
        querySnapshot.forEach((doc) => {
          activities = [...activities, { ...doc.data(), id: doc.id }];
          dispatch(getActivitiesSuccessfull(activities));
        });
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

export const GetActivityById = (id) => {
  return async (dispatch) => {
    dispatch(initGetActivityById());
    try {
      let activity = [];
      const response = await db.collection("actividades").doc(id).get();
      activity = [...activity, { ...response.data(), id: response.id }];
      dispatch(getActivityByIdSuccessfull(activity));
    } catch (error) {
      dispatch(getActivityByIdError(error));
    }
  };
};

const initGetActivityById = () => {
  return {
    type: activitiesTypes.GET_ACTIVITY_BY_ID,
  };
};

export const getActivityByIdSuccessfull = (activity) => {
  return {
    type: activitiesTypes.GET_ACTIVITY_BY_ID_SUCCESFULL,
    payload: activity,
  };
};

export const getActivityByIdError = (error) => {
  return {
    type: activitiesTypes.GET_ACTIVITY_BY_ID_ERROR,
    payload: error,
  };
};

