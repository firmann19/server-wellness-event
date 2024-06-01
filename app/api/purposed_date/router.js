const express = require("express");
const {
  create,
  index,
  getOne,
  destroy,
} = require("./controller");
// const { authenticateUser, authorizeRoles } = require("../../middlewares/auth");
const router = express();

router.post(
  "/purposedDate",
  // authenticateUser,
  // authorizeRoles("Staff IT", "Manager IT"),
  create
);
router.get(
  "/purposedDate",
  // authenticateUser,
  // authorizeRoles("Staff IT", "Manager IT"),
  index
);
router.get(
  "/purposedDate/:id",
  // authenticateUser,
  // authorizeRoles("Staff IT", "Manager IT"),
  getOne
);
router.delete(
  "/purposedDate/:id",
  // authenticateUser,
  // authorizeRoles("Staff IT", "Manager IT"),
  destroy
);

module.exports = router;
