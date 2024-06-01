const WellnessEvent = require("../../api/wellnessEvent/model");
const { NotFoundError, BadRequestError } = require("../../errors");

module.exports = {
  createWellnessEvent: async (req, res) => {
    const {
      NamaPerusahaan,
      EventName,
      PostalCode,
      StreetName,
      VendorName,
      StatusEvent,
      Remarks,
    } = req.body;

    const createWellnessEvent = await WellnessEvent.create({
      Date_created: new Date(),
      NamaPerusahaan,
      EventName,
      PostalCode,
      StreetName,
      VendorName,
      StatusEvent,
      Remarks,
    });

    return createWellnessEvent;
  },

  getAllWellnessEvent: async (req, res) => {
    const results = await WellnessEvent.find()
      .populate({
        path: "WellnessEventName",
        select: "_id name",
      })
      .populate({
        path: "VendorName",
        select: "_id name",
      });

    return results;
  },

  getOneWellnessEvent: async (req, res) => {
    const { id } = req.params;

    const result = await WellnessEvent.findOne({
      _id: id,
    })
      .populate({
        path: "WellnessEventName",
        select: "_id name",
      })
      .populate({
        path: "VendorName",
        select: "_id name",
      });

    if (!result)
      throw new NotFoundError(`Tidak ada welness event dengan id :  ${id}`);

    return result;
  },

  // getCheckoutByIdUser: async (req, res) => {
  //   const { id } = req.user;

  //   const getCheckoutByIdUser = await Checkout.find({ UserRequest: id })
  //     .populate({
  //       path: "UserRequest",
  //       select: "_id nama",
  //     })
  //     .populate({
  //       path: "Departement",
  //       select: "_id namaDepartement",
  //     });

  //   return getCheckoutByIdUser;
  // },

  updateWellnessEvent: async (req, res) => {
    const { id } = req.params;
    const {
      NamaPerusahaan,
      EventName,
      PostalCode,
      StreetName,
      VendorName,
      StatusEvent,
      Remarks,
    } = req.body;

    const result = await WellnessEvent.findOneAndUpdate(
      { _id: id },
      {
        NamaPerusahaan,
        EventName,
        PostalCode,
        StreetName,
        VendorName,
        StatusEvent,
        Remarks,
      },
      { new: true, runValidators: true }
    );

    if (!result)
      throw new NotFoundError(`Tidak ada welness event dengan id :  ${id}`);

    return result;
  },

  deleteWellnessEvent: async (req, res) => {
    const { id } = req.params;

    const result = await WellnessEvent.findOne({
      _id: id,
    });

    if (!result)
      throw new NotFoundError(`Tidak ada welness event dengan id :  ${id}`);

    await result.remove();

    return result;
  },
};
