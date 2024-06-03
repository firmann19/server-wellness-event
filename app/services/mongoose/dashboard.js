const WellnessEvent = require("../../api/wellnessEvent/model");

module.exports = {
  CountApproved: async (req, res) => {
    const CountApproved = await WellnessEvent.countDocuments({
      StatusEvent: "Approve",
    });

    return CountApproved;
  },
  CountRejected: async (req, res) => {
    const CountRejected = await WellnessEvent.countDocuments({
      StatusEvent: "Rejected",
    });

    return CountRejected;
  },
};
