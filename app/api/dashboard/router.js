const express = require("express");
const { AllApproved, AllRejected } = require("./controller");
const router = express();

router.get(
  "/allApproved",
  // authenticateUser,
  AllApproved
);
router.get(
  "/allRejected",
  // authenticateUser,
  AllRejected
);

module.exports = router;
