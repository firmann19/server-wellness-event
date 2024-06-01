const express = require("express");
const router = express();
const { create, update, index, getOne, destroy } = require("./controller");
// const { authenticateUser, authorizeRoles } = require("../../middlewares/auth");

router.post(
  "/eventName",
  // authenticateUser,
  // authorizeRoles("Staff IT", "Manager IT"),
  create
);
router.get(
  "/eventName",
  // authenticateUser,
  // authorizeRoles("Staff IT", "Manager IT"),
  index
);
router.get(
  "/eventName/:id",
  // authenticateUser,
  // authorizeRoles("Staff IT", "Manager IT"),
  getOne
);
router.put(
  "/eventName/:id",
  // authenticateUser,
  // authorizeRoles("Staff IT", "Manager IT"),
  update
);
router.delete(
  "/eventName/:id",
  // authenticateUser,
  // authorizeRoles("Staff IT", "Manager IT"),
  destroy
);

module.exports = router;
