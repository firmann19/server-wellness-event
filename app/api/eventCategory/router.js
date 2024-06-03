const express = require("express");
const router = express();
const { create, update, index, getOne, destroy } = require("./controller");
const { authenticateUser, authorizeRoles } = require("../../middlewares/auth");

router.post(
  "/categoryName",
  authenticateUser,
  authorizeRoles("HR", "Vendor"),
  create
);
router.get(
  "/categoryName",
  authenticateUser,
  authorizeRoles("HR", "Vendor"),
  index
);
router.get(
  "/categoryName/:id",
  authenticateUser,
  authorizeRoles("HR", "Vendor"),
  getOne
);
router.put(
  "/categoryName/:id",
  authenticateUser,
  authorizeRoles("HR", "Vendor"),
  update
);
router.delete(
  "/categoryName/:id",
  authenticateUser,
  authorizeRoles("HR", "Vendor"),
  destroy
);

module.exports = router;
