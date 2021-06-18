
export const emptyField = (adoption) => {
    const { name, lastName, telephone, email, direction, description } = adoption;
    let error = false;

    if (name.trim() === "" || 
    lastName.trim() === "" ||
    telephone.trim() === "" ||
    email.trim() === "" ||
    description.trim() === "" ||
    direction.trim() === "") {
    error = true;
  }
  return error;
}

export const validateEmail = (email) => {
    const emailValidate = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    let error = false;
    if (!emailValidate.test(email)) {
        error = true;
    }
    return error;
}