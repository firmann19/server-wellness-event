const express = require("express");
const router = express();
const { create, update, index, getOne, destroy } = require("./controller");
// const { authenticateUser, authorizeRoles } = require("../../middlewares/auth");

router.post(
  "/categoryName",
  // authenticateUser,
  // authorizeRoles("Staff IT", "Manager IT"),
  create
);
router.get(
  "/categoryName",
  // authenticateUser,
  // authorizeRoles("Staff IT", "Manager IT"),
  index
);
router.get(
  "/categoryName/:id",
  // authenticateUser,
  // authorizeRoles("Staff IT", "Manager IT"),
  getOne
);
router.put(
  "/categoryName/:id",
  // authenticateUser,
  // authorizeRoles("Staff IT", "Manager IT"),
  update
);
router.delete(
  "/categoryName/:id",
  // authenticateUser,
  // authorizeRoles("Staff IT", "Manager IT"),
  destroy
);

module.exports = router;
