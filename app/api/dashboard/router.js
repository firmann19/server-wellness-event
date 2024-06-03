const express = require("express");
const { AllApproved, AllRejected } = require("./controller");
const { authenticateUser, authorizeRoles } = require("../../middlewares/auth");
const router = express();

router.get(
  "/allApproved",
  authenticateUser,
  authorizeRoles("HR", "Vendor"),
  AllApproved
);
router.get(
  "/allRejected",
  authenticateUser,
  authorizeRoles("HR", "Vendor"),
  AllRejected
);

module.exports = router;
