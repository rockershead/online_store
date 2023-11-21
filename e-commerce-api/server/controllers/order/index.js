const { Router: router } = require("express");

const { create } = require("./create");
const { list } = require("./list");
const { show } = require("./show");
const { update } = require("./update");
const { deleteOrder } = require("./deleteOrder");

module.exports = () => {
  const api = router();

  api.post("/", create());
  api.get("/", list());
  api.get("/:orderId", show());
  api.put("/:orderId", update());
  api.delete("/:orderId", deleteOrder());

  return api;
};
