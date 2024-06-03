const express = require("express");
const router = express();
const {
  register,
  login,
  index,
  getOne,
  update,
  destroy,
} = require("./controller");
const { authenticateUser, authorizeRoles } = require("../../middlewares/auth");

router.post("/auth/register", register);
router.post("/auth/login", login);
router.get("/user", authenticateUser, authorizeRoles("HR", "Vendor"), index);
router.get(
  "/user/:id",
  authenticateUser,
  authorizeRoles("HR", "Vendor"),
  getOne
);
router.put(
  "/user/:id",
  authenticateUser,
  authorizeRoles("HR", "Vendor"),
  update
);
router.delete(
  "/user/:id",
  authenticateUser,
  authorizeRoles("HR", "Vendor"),
  destroy
);

module.exports = router;
