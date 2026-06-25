const Clothing = require("../models/Clothing");

const addClothing = async (req, res) => {
  try {
    const clothing = await Clothing.create(req.body);

    res.status(201).json({
      message: "Clothing Added Successfully",
      clothing,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getAllClothes = async (req, res) => {
  try {
    const clothes = await Clothing.find();

    res.status(200).json(clothes);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getClothingById = async (req, res) => {
  try {
    const clothing = await Clothing.findById(req.params.id);

    res.status(200).json(clothing);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const deleteClothing = async (req, res) => {
  try {
    await Clothing.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Item Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const updateClothing = async (req, res) => {
  try {
    const clothing =
      await Clothing.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );

    res.status(200).json({
      message: "Item Updated Successfully",
      clothing,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  addClothing,
  getAllClothes,
  getClothingById,
  deleteClothing,
  updateClothing,
};