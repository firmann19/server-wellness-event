const { UnauthenticatedError, UnauthorizedError } = require("../errors");
const { isTokenValid } = require("../utils");

const authenticateUser = async (req, res, next) => {
  try {
    let token;

    // check header
    const authHeader = req.headers.authorization;

    if (authHeader && authHeader.startsWith("Bearer")) {
      token = authHeader.split(" ")[1];
    }

    if (!token) {
      throw new UnauthenticatedError("Authentication invalid");
    }

    const payload = isTokenValid({ token });

    // Attach the user and his permissions to the req object
    req.user = {
      name: payload.name,
      username: payload.username,
      role: payload.role,
      id: payload.userId,
    };

    next();
  } catch (err) {
    next(err);
  }
};


const authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role.role)) {
      throw new UnauthorizedError("Unauthorized to access this route");
    }
    next();
  };
};

module.exports = { authenticateUser, authorizeRoles };
