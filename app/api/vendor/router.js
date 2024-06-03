const express = require("express");
const router = express();
const { create, index, find, update, destroy } = require("./controller");
const { authenticateUser, authorizeRoles } = require("../../middlewares/auth");

router.get("/vendor", authenticateUser, authorizeRoles("HR", "Vendor"), index);
router.get(
  "/vendor/:id",
  authenticateUser,
  authorizeRoles("HR", "Vendor"),
  find
);
router.put(
  "/vendor/:id",
  authenticateUser,
  authorizeRoles("HR", "Vendor"),
  update
);
router.delete(
  "/vendor/:id",
  authenticateUser,
  authorizeRoles("HR", "Vendor"),
  destroy
);
router.post(
  "/vendor",
  authenticateUser,
  authorizeRoles("HR", "Vendor"),
  create
);

module.exports = router;
