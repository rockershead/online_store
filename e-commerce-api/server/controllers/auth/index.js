const { Router: router } = require("express");

//const { register } = require("./register");

const { registerWithCognito } = require("./registerWithCognito");
//const {
// confirmRegistrationWithCognito,
//} = require("./confirmRegistrationWithCognito");
const { loginWithCognito } = require("./loginWithCognito");
const { resetPassword, confirmPassword } = require("./resetPassword");
const { logout } = require("./logout");

module.exports = () => {
  const api = router();

  api.post("/register", registerWithCognito());
  //api.post("/verification", confirmRegistrationWithCognito());

  api.post("/login", loginWithCognito());
  api.post("/resetPassword", resetPassword());
  api.post("/confirmResetPassword", confirmPassword());
  api.post("/logout", logout());

  return api;
};
