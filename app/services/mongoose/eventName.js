const { NotFoundError, BadRequestError } = require("../../errors");
const EventName = require("../../api/eventCategory/model");

module.exports = {
  createEventName: async (req, res) => {
    const { name } = req.body;

    const check = await EventName.findOne({ name });

    if (check) throw new BadRequestError("nama event duplikat");

    const createEventName = await EventName.create({
      name,
    });
    return createEventName;
  },

  getAllEventName: async (req, res) => {
    const result = await EventName.find();

    return result;
  },

  getOneEventName: async (req, res) => {
    const { id } = req.params;

    const result = await EventName.findOne({
      _id: id,
    });

    if (!result)
      throw new NotFoundError(`Tidak ada nama event dengan id :  ${id}`);

    return result;
  },

  updateEventName: async (req, res) => {
    const { id } = req.params;

    const { name } = req.body;

    const check = await EventName.findOne({
      name,
      _id: { $ne: id },
    });

    if (check) throw new BadRequestError("nama event duplikat");

    const result = await EventName.findOneAndUpdate(
      { _id: id },
      { name },
      { new: true, runValidators: true }
    );

    if (!result)
      throw new NotFoundError(`Tidak ada nama event dengan id : ${id}`);

    return result;
  },

  deleteEventName: async (req, res) => {
    const { id } = req.params;

    const result = await EventName.findOne({
      _id: id,
    });

    if (!result)
      throw new NotFoundError(`Tidak ada nama event dengan id :  ${id}`);

    await result.remove();

    return result;
  },
};
