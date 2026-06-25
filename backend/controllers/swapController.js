const SwapRequest = require("../models/SwapRequest");

const createSwapRequest = async (req, res) => {
  try {
    const swap = await SwapRequest.create(req.body);

    res.status(201).json({
      message: "Swap Request Sent",
      swap,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getAllRequests = async (req, res) => {
  try {
    const requests = await SwapRequest.find();

    res.status(200).json(requests);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const updateSwapStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const swap = await SwapRequest.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    res.status(200).json(swap);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createSwapRequest,
  getAllRequests,
  updateSwapStatus,
};