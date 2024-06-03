const express = require("express");
const { create, index, getOne, destroy } = require("./controller");
const { authenticateUser, authorizeRoles } = require("../../middlewares/auth");
const router = express();

router.post(
  "/purposedDate",
  authenticateUser,
  authorizeRoles("HR", "Vendor"),
  create
);
router.get(
  "/purposedDate",
  authenticateUser,
  authorizeRoles("HR", "Vendor"),
  index
);
router.get(
  "/purposedDate/:id",
  authenticateUser,
  authorizeRoles("HR", "Vendor"),
  getOne
);
router.delete(
  "/purposedDate/:id",
  authenticateUser,
  authorizeRoles("HR", "Vendor"),
  destroy
);

module.exports = router;
