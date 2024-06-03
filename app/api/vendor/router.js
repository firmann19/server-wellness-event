const express = require("express");
const router = express();
const { create, index, find, update, destroy } = require("./controller");
// const {
//   authenticateUser,
//   authorizeRoles,
// } = require("../../../middlewares/auth");

router.get("/vendor", index);
router.get("/vendor/:id", find);
router.put("/vendor/:id", update);
router.delete("/vendor/:id", destroy);
router.post("/vendor", create);

module.exports = router;
