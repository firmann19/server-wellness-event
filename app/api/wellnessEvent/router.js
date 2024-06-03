const express = require("express");
const { create, index, getOne, destroy, rejected, approve } = require("./controller");
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
  "/rejectedWellnessEvent/:id",
  // authenticateUser,
  // authorizeRoles("Staff IT", "Manager IT"),
  rejected
);
router.put(
  "/approveWellnessEvent/:id",
  // authenticateUser,
  // authorizeRoles("Staff IT", "Manager IT"),
  approve
);
router.delete("/wellnessEvent/:id", destroy);

module.exports = router;
