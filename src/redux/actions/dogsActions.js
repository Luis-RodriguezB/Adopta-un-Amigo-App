import { dogsTypes } from "../types/index";
import { db } from "../../firebase/firebase-config";

export const GetDogs = () => {
  return (dispatch) => {
    try {
      dispatch(initGetDogs());
      db.collection("perros").onSnapshot(async (querySnapshot) => {
        let dogs = [];
        querySnapshot.forEach((doc) => {
          dogs = [...dogs, { ...doc.data(), id: doc.id }];
        });
        dispatch(getDogsSuccessfull(dogs));
      });
    } catch (error) {
      dispatch(getDogsError(error));
    }
  };
};

const initGetDogs = () => {
  return {
    type: dogsTypes.GET_ALL_DOGS,
  };
};

export const getDogsSuccessfull = (dogs) => {
  return {
    type: dogsTypes.GET_ALL_DOGS_SUCCESFULL,
    payload: dogs,
  };
};

export const getDogsError = (error) => {
  return {
    type: dogsTypes.GET_ALL_DOGS_ERROR,
    payload: error,
  };
};

export const GetDogById = (id) => {
  return async (dispatch) => {
    dispatch(initGetDogById());
    try {
      let dog = [];
      const response = await db.collection("perros").doc(id).get();
      dog = [...dog, { ...response.data(), id: response.id }];
      dispatch(getDogByIdSuccessfull(dog));
    } catch (error) {
      dispatch(getDogByIdError(error));
    }
  };
};

const initGetDogById = () => {
  return {
    type: dogsTypes.GET_DOG_BY_ID,
  };
};

export const getDogByIdSuccessfull = (dog) => {
  return {
    type: dogsTypes.GET_DOG_BY_ID_SUCCESFULL,
    payload: dog,
  };
};

export const getDogByIdError = (error) => {
  return {
    type: dogsTypes.GET_DOG_BY_ID_ERROR,
    payload: error,
  };
};
