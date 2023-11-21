const mongoose = require("mongoose");
const { v4: uuid } = require("uuid");

const User = new mongoose.Schema({
  userId: { type: String, required: true },
  email: { type: String, required: true },
  name: { type: String, required: true },
  phone_number: { type: String, required: true },
});

const Item = new mongoose.Schema({
  productId: { type: String, require: true },
  description: {
    type: String,
    required: true,
  },
  productImageUrl: {
    type: String,
    required: true,
  }, //will be a s3 url
  path: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  currency: {
    type: String,
    required: true,
  },
});

const Order = {
  name: "Order",
  define: {
    _id: { type: String, require: true, default: uuid },
    user: { type: User, required: true },
    items: {
      type: [Item],
      required: true,
    },
    totalCost: {
      type: Number,
      required: true,
    },

    currency: {
      type: String,
      required: true,
    },

    deletedAt: { type: Date, select: false },
  },
  options: {
    autoCreate: false,
    timestamps: true,
  },
};

const schema = mongoose.Schema(Order.define, Order.options);

// this function helps to ignore deleted documents
//setPreIgnoreDeletedDocuments(schema);

module.exports = mongoose.model(Order.name, schema);
