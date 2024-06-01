const { StatusCodes } = require("http-status-codes");
const {
  createPurposedDate,
  getAllPurposedDate,
  getOnePurposedDate,
  deletePurposedDate,
  updatePurposedDate,
} = require("../../services/mongoose/purposed_date");

const create = async (req, res, next) => {
  try {
    const result = await createPurposedDate(req);

    res.status(StatusCodes.CREATED).json({
      data: result,
    });
  } catch (error) {
    next(error);
    console.log(error)
  }
};

const index = async (req, res, next) => {
  try {
    const result = await getAllPurposedDate(req);

    res.status(StatusCodes.OK).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getOne = async (req, res, next) => {
  try {
    const result = await getOnePurposedDate(req);

    res.status(StatusCodes.OK).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  try {
    const result = await updatePurposedDate(req);

    res.status(StatusCodes.OK).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const destroy = async (req, res, next) => {
  try {
    const result = await deletePurposedDate(req);

    res.status(StatusCodes.OK).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  create,
  index,
  getOne,
  update,
  destroy,
};
