import { adoptionTypes } from "../types";
import { db } from "../../firebase/firebase-config";

export const CreateAdoptionAction = (adoption) => {
  return async (dispatch) => {
    dispatch(initAddAdoption());
    await db
      .collection("adopcion")
      .doc()
      .set(adoption)
      .then(() => dispatch(addAdoptionSuccessfull(adoption)))
      .catch((e) => dispatch(addAdoptionError(e)));
  };
};

const initAddAdoption = () => ({
  type: adoptionTypes.CREATE_ADOPTION,
});

const addAdoptionSuccessfull = (formAdoption) => ({
  type: adoptionTypes.CREATE_ADOPTION_SUCCESFULL,
  payload: formAdoption,
});

const addAdoptionError = (hasError) => ({
  type: adoptionTypes.CREATE_ADOPTION_ERROR,
  payload: hasError,
});
