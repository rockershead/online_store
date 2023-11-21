const { User } = require("../../models");
const {
  poolData,
  poolRegion,
  userPool,
  AmazonCognitoIdentity,
} = require("../../utils");

//only needed if verification code sent to the email.If its verification link then no need

const confirmRegistrationWithCognito = () => async (req, res, next) => {
  const { code, username, email, name, contact, age } = req.body; //username get from cognitoUser.username

  var userData = {
    Username: username,
    Pool: userPool,
  };
  var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);

  cognitoUser.confirmRegistration(code, true, async (err, result) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(result);
    }
  });
};

module.exports = { confirmRegistrationWithCognito };
