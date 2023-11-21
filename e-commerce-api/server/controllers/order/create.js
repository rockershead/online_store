const { Order } = require("../../models");
const { uuid } = require("uuidv4");

const create = () => async (req, res, next) => {
  const { items, currency } = req.body;
  const decodedToken = res.locals.result;
  const user = {
    email: decodedToken.email,
    name: decodedToken.name,
    phone_number: decodedToken.phone_number,
  };
  let total_cost = 0;
  items.forEach((item) => {
    total_cost = total_cost + item.price;
  });

  const order = new Order({
    items: items,
    user: user,
    currency: currency,
    total_cost: total_cost,
  });

  //order successful.can send email
  order
    .save()
    .then((result) => {
      res.send(200).send(result);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

module.exports = { create };
