const { Order } = require("../../models");

const update = () => async (req, res, next) => {
  const { orderId } = req.params;

  const order = await Order.findOne({ _id: orderId });

  if (order) {
    const res = await Order.updateOne({ _id: orderId }, req.body);
    res.status(200).send(res);
  } else {
    res.status(400).send("This order does not exist");
  }
};

module.exports = { update };
