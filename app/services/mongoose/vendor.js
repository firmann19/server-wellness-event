const { NotFoundError, BadRequestError } = require("../../errors");
const Vendor = require("../../api/vendor/model");

module.exports = {
  createVendor: async (req, res) => {
    const { name } = req.body;

    const check = await Vendor.findOne({ name });

    if (check) throw new BadRequestError("nama vendor duplikat");

    const createVendor = await Vendor.create({
      name,
    });
    return createVendor;
  },

  getAllVendor: async (req, res) => {
    const result = await Vendor.find();

    return result;
  },

  getOneVendor: async (req, res) => {
    const { id } = req.params;

    const result = await Vendor.findOne({
      _id: id,
    });

    if (!result)
      throw new NotFoundError(`Tidak ada nama vendor dengan id :  ${id}`);

    return result;
  },

  updateVendor: async (req, res) => {
    const { id } = req.params;

    const { name } = req.body;

    const check = await Vendor.findOne({
      name,
      _id: { $ne: id },
    });

    if (check) throw new BadRequestError("nama vendor duplikat");

    const result = await Vendor.findOneAndUpdate(
      { _id: id },
      { name },
      { new: true, runValidators: true }
    );

    if (!result)
      throw new NotFoundError(`Tidak ada nama vendor dengan id : ${id}`);

    return result;
  },

  deleteVendor: async (req, res) => {
    const { id } = req.params;

    const result = await Vendor.findOne({
      _id: id,
    });

    if (!result)
      throw new NotFoundError(`Tidak ada nama vendor dengan id :  ${id}`);

    await result.remove();

    return result;
  },
};
