import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function EditItem() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    brand: "",
    size: "",
    condition: "",
    value: "",
    location: "",
    image: "",
  });

  useEffect(() => {
    fetchItem();
  }, []);

  const fetchItem = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/clothes/${id}`
      );

      setFormData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(
        `http://localhost:5000/api/clothes/${id}`,
        formData
      );

      alert("Item Updated Successfully");
      navigate("/");
    } catch (error) {
      console.log(error);
      alert("Update Failed");
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white p-6 rounded-xl shadow">
      <h1 className="text-3xl font-bold mb-6">
        Edit Item
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        <input
          type="text"
          name="brand"
          value={formData.brand}
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        <input
          type="text"
          name="size"
          value={formData.size}
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        <input
          type="text"
          name="condition"
          value={formData.condition}
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        <input
          type="number"
          name="value"
          value={formData.value}
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg"
        >
          Update Item
        </button>
      </form>
    </div>
  );
}

export default EditItem;