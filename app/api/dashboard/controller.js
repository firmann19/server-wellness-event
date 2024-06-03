const { StatusCodes } = require("http-status-codes");
const {
  CountApproved,
  CountRejected,
} = require("../../services/mongoose/dashboard");

const AllApproved = async (req, res, next) => {
  try {
    const result = await CountApproved(req);

    res.status(StatusCodes.OK).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const AllRejected = async (req, res, next) => {
  try {
    const result = await CountRejected(req);

    res.status(StatusCodes.OK).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  AllApproved,
  AllRejected,
};
