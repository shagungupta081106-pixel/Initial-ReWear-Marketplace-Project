import { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

function AddItem() {
  const [formData, setFormData] = useState({
    title: "",
    brand: "",
    size: "",
    condition: "",
    value: "",
    location: "",
    image: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/clothes",
        formData
      );

      alert(res.data.message);

      setFormData({
        title: "",
        brand: "",
        size: "",
        condition: "",
        value: "",
        location: "",
        image: "",
        description: "",
      });
    } catch (error) {
      console.log(error);
      alert("Failed to Add Item");
    }
  };

  return (
    <>
      <Navbar />

      <div className="max-w-2xl mx-auto mt-10 bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Add Clothing Item
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            name="title"
            placeholder="Clothing Name"
            value={formData.title}
            onChange={handleChange}
            className="w-full border p-3 rounded"
          />

          <input
            type="text"
            name="brand"
            placeholder="Brand Name"
            value={formData.brand}
            onChange={handleChange}
            className="w-full border p-3 rounded"
          />

          <input
            type="text"
            name="size"
            placeholder="Size"
            value={formData.size}
            onChange={handleChange}
            className="w-full border p-3 rounded"
          />

          <input
            type="text"
            name="condition"
            placeholder="Condition"
            value={formData.condition}
            onChange={handleChange}
            className="w-full border p-3 rounded"
          />

          <input
            type="number"
            name="value"
            placeholder="Swap Value"
            value={formData.value}
            onChange={handleChange}
            className="w-full border p-3 rounded"
          />

          <input
            type="text"
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
            className="w-full border p-3 rounded"
          />

          <input
            type="text"
            name="image"
            placeholder="Paste Image URL"
            value={formData.image}
            onChange={handleChange}
            className="w-full border p-3 rounded"
          />

          <textarea
            name="description"
            placeholder="Item Description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            className="w-full border p-3 rounded"
          ></textarea>

          {formData.image && (
            <img
              src={formData.image}
              alt="Preview"
              className="w-full h-64 object-cover rounded-lg"
            />
          )}

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg font-bold hover:bg-green-700"
          >
            Add Item
          </button>

        </form>
      </div>
    </>
  );
}

export default AddItem;