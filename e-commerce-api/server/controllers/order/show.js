const { Order } = require("../../models");

const show = () => async (req, res, next) => {
  const { orderId } = req.params;

  const order = await Order.findOne({ _id: orderId });
  if (order) {
    res.status(200).send(order);
  } else {
    res.status(400).send("This order does not exist");
  }
};

module.exports = { show };
