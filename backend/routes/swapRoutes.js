const express = require("express");
const router = express.Router();

const {
  createSwapRequest,
  getAllRequests,
  updateSwapStatus,
} = require("../controllers/swapController");

router.post("/", createSwapRequest);
router.get("/", getAllRequests);
router.put("/:id", updateSwapStatus);

module.exports = router;