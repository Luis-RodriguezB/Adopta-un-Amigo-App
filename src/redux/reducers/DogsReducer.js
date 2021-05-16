import { dogsTypes } from "../types";

const initialState = {
  dogs: [],
  error: null,
  loading: false,
};

const DogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case dogsTypes.GET_ALL_DOGS:
      return {
        ...state,
        loading: true,
      };
    case dogsTypes.GET_ALL_DOGS_SUCCESFULL:
      return {
        ...state,
        dogs: [...action.payload],
        loading: false,
      };
    case dogsTypes.GET_ALL_DOGS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case dogsTypes.GET_DOG_BY_ID:
      return {
        ...state,
        loading: true,
      };
    case dogsTypes.GET_DOG_BY_ID_SUCCESFULL:
      return {
        ...state,
        dogs: [...action.payload],
        loading: false,
      };
    case dogsTypes.GET_DOG_BY_ID_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default DogsReducer;
