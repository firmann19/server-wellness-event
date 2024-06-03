const WellnessEvent = require("../../api/wellnessEvent/model");
const { NotFoundError } = require("../../errors");

module.exports = {
  createWellnessEvent: async (req, res) => {
    const {
      NamaPerusahaan,
      JudulEvent,
      EventCategoryName,
      PostalCode,
      StreetName,
      VendorName,
    } = req.body;

    const createWellnessEvent = await WellnessEvent.create({
      Date_created: new Date(),
      NamaPerusahaan,
      JudulEvent,
      EventCategoryName,
      PostalCode,
      StreetName,
      VendorName,
    });

    return createWellnessEvent;
  },

  getAllWellnessEvent: async (req, res) => {
    const results = await WellnessEvent.find()
      .populate({
        path: "EventCategoryName",
        select: "_id name",
      })
      .populate({
        path: "Purposed_Date",
        select: "_id purposed_date",
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
        path: "EventCategoryName",
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

  RejectedWellnessEvent: async (req, res) => {
    const { id } = req.params;
    const { StatusEvent, Remarks } = req.body;

    const updatedStatusEvent = Remarks ? "Rejected" : StatusEvent;

    const result = await WellnessEvent.findOneAndUpdate(
      { _id: id },
      {
        StatusEvent: updatedStatusEvent,
        Remarks,
      },
      { new: true, runValidators: true }
    );

    return result;
  },

  ApproveWellnessEvent: async (req, res) => {
    const { id } = req.params;
    const { StatusEvent, Purposed_Date } = req.body;

    const updatedStatusEvent = Purposed_Date ? "Approve" : StatusEvent;

    const result = await WellnessEvent.findOneAndUpdate(
      { _id: id },
      {
        StatusEvent: updatedStatusEvent,
        Purposed_Date,
      },
      { new: true, runValidators: true }
    );

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
