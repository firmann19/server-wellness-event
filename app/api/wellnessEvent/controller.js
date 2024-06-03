const { StatusCodes } = require("http-status-codes");
const {
  createWellnessEvent,
  getAllWellnessEvent,
  getOneWellnessEvent,
  updateWellnessEvent,
  deleteWellnessEvent,
  RejectedWellnessEvent,
  ApproveWellnessEvent,
} = require("../../services/mongoose/welnessEvent");

const create = async (req, res, next) => {
  try {
    const result = await createWellnessEvent(req);

    res.status(StatusCodes.CREATED).json({
      data: result,
    });
  } catch (error) {
    next(error);
    console.log(error);
  }
};

const index = async (req, res, next) => {
  try {
    const result = await getAllWellnessEvent(req);

    res.status(StatusCodes.OK).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// const getCheckoutIdUser = async (req, res, next) => {
//   try {
//     const result = await getCheckoutByIdUser(req);

//     res.status(StatusCodes.OK).json({
//       data: result,
//     });
//   } catch (error) {
//     next(error);
//   }
// };

// const getCheckoutDepartementUser = async (req, res, next) => {
//   try {
//     const result = await getCheckoutByDepartementUser(req);

//     res.status(StatusCodes.OK).json({
//       data: result,
//     });
//   } catch (error) {
//     next(error);
//   }
// };

const getOne = async (req, res, next) => {
  try {
    const result = await getOneWellnessEvent(req);

    res.status(StatusCodes.OK).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const rejected = async (req, res, next) => {
  try {
    const result = await RejectedWellnessEvent(req);

    res.status(StatusCodes.OK).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const approve = async (req, res, next) => {
  try {
    const result = await ApproveWellnessEvent(req);

    res.status(StatusCodes.OK).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const destroy = async (req, res, next) => {
  try {
    const result = await deleteWellnessEvent(req);

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
  rejected,
  approve,
  destroy,
};
