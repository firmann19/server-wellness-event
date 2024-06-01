const User = require("../../api/user/model");
const {
  BadRequestError,
  NotFoundError,
  UnauthorizedError,
} = require("../../errors");
const { createJWT, createTokenUser, createRefreshJWT } = require("../../utils");
const { createUserRefreshToken } = require("./refreshToken");

module.exports = {
  signUp: async (req, res) => {
    const { name, username, role, password } = req.body;

    const createdUser = await User.create({
      name,
      username,
      role,
      password,
    });

    return createdUser;
  },

  signIn: async (req) => {
    const { username, password } = req.body;

    if (!username || !password) {
      throw new BadRequestError("Please provide username and password");
    }

    const result = await User.findOne({ email: email });

    if (!result) {
      throw new UnauthorizedError("Invalid Credentials");
    }

    const isPasswordCorrect = await result.comparePassword(password);

    if (!isPasswordCorrect) {
      throw new UnauthorizedError("Incorrect Password");
    }

    const token = createJWT({ payload: createTokenUser(result) });

    const refreshToken = createRefreshJWT({ payload: createTokenUser(result) });
    await createUserRefreshToken({
      refreshToken,
      user: result._id,
    });

    return {
      token,
      refreshToken,
      user: result.name,
      role: result.role.name,
    };
  },

  getAllUser: async (req, res) => {
    const { keyword } = req.query;

    let condition = {};

    if (keyword) {
      condition = { ...condition, name: { $regex: keyword, $options: "i" } };
    }

    const result = await User.find(condition);

    return result;
  },

  getOneUser: async (req, res) => {
    const { id } = req.params;

    const result = await User.findOne({
      _id: id,
    });

    if (!result) throw new NotFoundError(`Tidak ada User dengan id :  ${id}`);

    return result;
  },

  updateUser: async (req, res) => {
    const { id } = req.params;

    const { name, username, role, password } = req.body;

    const result = await User.findOneAndUpdate(
      { _id: id },
      {
        name,
        username,
        role,
        password,
      },
      { new: true, runValidators: true }
    );

    if (!result) throw new NotFoundError(`Tidak ada User dengan id :  ${id}`);

    return result;
  },

  deleteUser: async (req, res) => {
    const { id } = req.params;

    const result = await User.findOne({
      _id: id,
    });

    if (!result) throw new NotFoundError(`Tidak ada user dengan id :  ${id}`);

    await result.remove();

    return result;
  },
};
