const express = require("express");
const router = express.Router();

const {
  addClothing,
  getAllClothes,
  getClothingById,
  deleteClothing,
  updateClothing,
} = require("../controllers/clothingController");

router.post("/", addClothing);
router.get("/", getAllClothes);
router.get("/:id", getClothingById);

router.put("/:id", updateClothing);

router.delete("/:id", deleteClothing);

module.exports = router;