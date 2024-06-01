const express = require("express");
const { create, index, getOne, update, destroy } = require("./controller");
// const { authenticateUser, authorizeRoles } = require("../../middlewares/auth");
const router = express();

router.post(
  "/wellnessEvent",
  // authenticateUser,
  // authorizeRoles("User", "Staff IT", "Manager IT"),
  create
);
router.get(
  "/wellnessEvent",
  // authenticateUser,
  // authorizeRoles("User", "Staff IT", "Manager IT"),
  index
);
// router.get(
//   "/checkoutbyiduser",
//   authenticateUser,
//   //authorizeRoles("User", "Staff IT", "Manager IT"),
//   getCheckoutIdUser
// );
// router.get(
//   "/checkoutbydepartementuser",
//   authenticateUser,
//   //authorizeRoles("User", "Staff IT", "Manager IT"),
//   getCheckoutDepartementUser
// );
router.get(
  "/wellnessEvent/:id",
  // authenticateUser,
  // authorizeRoles("User", "Staff IT", "Manager IT"),
  getOne
);
router.put(
  "/wellnessEvent/:id",
  // authenticateUser,
  // authorizeRoles("Staff IT", "Manager IT"),
  update
);
router.delete("/wellnessEvent/:id", destroy);

module.exports = router;
