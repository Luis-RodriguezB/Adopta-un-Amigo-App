import { adoptionTypes } from "../types";

const initialState = {
  adoption: [],
  error: null,
  loading: false,
};
const AdoptionReducer = (state = initialState, action) => {
  switch (action.type) {
    case adoptionTypes.CREATE_ADOPTION:
      return {
        ...state,
        loading: true,
      };
    case adoptionTypes.CREATE_ADOPTION_SUCCESFULL:
      return {
        ...state,
        loading: false,
        adoption: [action.payload, ...state.adoption],
      };
    case adoptionTypes.CREATE_ADOPTION_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default AdoptionReducer;
