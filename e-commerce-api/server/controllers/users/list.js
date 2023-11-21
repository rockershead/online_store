const { User } = require("../../models");
const { ROLES } = require("../../../library/Constants");
const list = () => async (req, res, next) => {
  //pagination,search
  const decodedToken = res.locals.result;
  const role = decodedToken["custom:role"];
  if (role == ROLES.SUPERADMIN) {
    User.find()
      .then((result) => {
        res.status(200).send(result);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  } else {
    res.status(400).send("Not authorised");
  }
};

module.exports = { list };
