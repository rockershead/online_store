const { Order } = require("../../models");
//implememt search feature
const list = () => async (req, res, next) => {
  if (req.query) {
    console.log(req.query);
  }

  Order.find()
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

module.exports = { list };
