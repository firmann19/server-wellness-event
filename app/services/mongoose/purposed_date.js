const { NotFoundError, BadRequestError } = require("../../errors");
const PurposedDate = require("../../api/purposed_date/model");

module.exports = {
  createPurposedDate: async (req, res) => {
    const { purposed_date } = req.body;

    const check = await PurposedDate.findOne({ purposed_date });

    if (check) throw new BadRequestError("tanggal pemilihan duplikat");

    const createEventName = await PurposedDate.create({
        purposed_date,
    });
    return createEventName;
  },

  getAllPurposedDate: async (req, res) => {
    const result = await PurposedDate.find();

    return result;
  },

  getOnePurposedDate: async (req, res) => {
    const { id } = req.params;

    const result = await PurposedDate.findOne({
      _id: id,
    });

    if (!result)
      throw new NotFoundError(`Tidak ada tanggal pemilihan dengan id :  ${id}`);

    return result;
  },

  updatePurposedDate: async (req, res) => {
    const { id } = req.params;

    const { purposed_date } = req.body;

    const check = await PurposedDate.findOne({
        purposed_date,
      _id: { $ne: id },
    });

    if (check) throw new BadRequestError("tanggal pemilihan duplikat");

    const result = await PurposedDate.findOneAndUpdate(
      { _id: id },
      { purposed_date },
      { new: true, runValidators: true }
    );

    if (!result)
      throw new NotFoundError(`Tidak ada tanggal pemilihan dengan id : ${id}`);

    return result;
  },

  deletePurposedDate: async (req, res) => {
    const { id } = req.params;

    const result = await PurposedDate.findOne({
      _id: id,
    });

    if (!result)
      throw new NotFoundError(`Tidak ada tanggal pemilihan dengan id :  ${id}`);

    await result.remove();

    return result;
  },
};
