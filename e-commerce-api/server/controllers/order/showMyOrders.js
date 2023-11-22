const { populateProductInfo } = require("./list");
const { Order, Product } = require("../../models");
//pagination
const showMyOrders = () => async (req, res, next) => {
  const decodedToken = res.locals.result;
  const email = decodedToken.email;

  try {
    const orders = await Order.find({ email: email }).lean().exec(); //so that can modify the objects or else cannot

    const populatedOrdersWithProductInfo = await populateProductInfo(orders);

    res.status(200).send(populatedOrdersWithProductInfo);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = { showMyOrders };
