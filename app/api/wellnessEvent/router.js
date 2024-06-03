const express = require("express");
const {
  create,
  index,
  getOne,
  destroy,
  rejected,
  approve,
} = require("./controller");
const { authenticateUser, authorizeRoles } = require("../../middlewares/auth");
const router = express();

router.post(
  "/wellnessEvent",
  authenticateUser,
  authorizeRoles("HR", "Vendor"),
  create
);
router.get(
  "/wellnessEvent",
  authenticateUser,
  authorizeRoles("HR", "Vendor"),
  index
);
router.get(
  "/wellnessEvent/:id",
  authenticateUser,
  authorizeRoles("HR", "Vendor"),
  getOne
);
router.put(
  "/rejectedWellnessEvent/:id",
  authenticateUser,
  authorizeRoles("HR", "Vendor"),
  rejected
);
router.put(
  "/approveWellnessEvent/:id",
  authenticateUser,
  authorizeRoles("HR", "Vendor"),
  approve
);
router.delete("/wellnessEvent/:id", destroy);

module.exports = router;
