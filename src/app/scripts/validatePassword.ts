const validatePassword = (password: string) => {
  /*
    The password is at least 8 characters long (?=.{8,}).
    The password has at least one uppercase letter (?=.*[A-Z]).
    The password has at least one lowercase letter (?=.*[a-z]).
    The password has at least one digit (?=.*[0-9]).
    The password has at least one special character ([^A-Za-z0-9]).

    Strong: The password has to meet all the requirements
    Medium: If the password is at least six characters long and doesn't have special character, but meets all the other requirements, 
    or has no digit but meets the rest of the requirements.
  */
  const strongReg = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})');
  const mediumReg = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.{8,}))');

  if (strongReg.test(String(password))) {
    return "strong";
  }
  if (mediumReg.test(String(password))) {
    return "medium";
  }
  return "weak";
};

export default validatePassword;