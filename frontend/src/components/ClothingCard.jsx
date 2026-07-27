import { Link } from "react-router-dom";
import axios from "axios";

function ClothingCard({ item }) {
const handleDelete = async () => {
const confirmDelete = window.confirm(
"Are you sure you want to delete this item?"
);

if (!confirmDelete) return;

try {
  await axios.delete(
    `http://https://initial-rewear-marketplace-project-1.onrender.com/api/clothes/${item._id}`
  );

  alert("Item Deleted Successfully");
  window.location.reload();
} catch (error) {
  console.log(error);
  alert("Delete Failed");
}

};

return (
<div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative">

  {/* Featured Badge */}
  <span className="absolute top-3 left-3 z-10 bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-bold">
    ⭐ Featured
  </span>

  {/* Heart Button */}
  <button className="absolute top-3 right-3 z-10 bg-white p-2 rounded-full shadow-lg hover:scale-110 transition">
    ❤️
  </button>

  {/* Image */}
  <div className="overflow-hidden">
    <img
      src={
        item.image ||
        "https://via.placeholder.com/400x300?text=No+Image"
      }
      alt={item.name}
      className="w-full h-64 object-cover hover:scale-110 transition duration-500"
    />
  </div>

  {/* Content */}
  <div className="p-5">

    <h2 className="text-2xl font-bold text-gray-800 mb-3">
      {item.name}
    </h2>

    <div className="space-y-2 text-gray-600">

      <p>
        <strong>🏷 Brand:</strong> {item.brand}
      </p>

      <p>
        <strong>📏 Size:</strong> {item.size}
      </p>

      <p>
        <strong>✨ Condition:</strong> {item.condition}
      </p>

      <p>
        <strong>📍 Location:</strong>{" "}
        {item.location || "Not Available"}
      </p>

      <p className="text-green-600 font-bold">
        ♻ Swap Available
      </p>

    </div>

    <div className="flex gap-2 mt-5">

      <Link
        to={`/item/${item._id}`}
        className="flex-1 text-center bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
      >
        View
      </Link>

      <Link
        to={`/edit-item/${item._id}`}
        className="flex-1 text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
      >
        Edit
      </Link>

      <button
        onClick={handleDelete}
        className="flex-1 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700"
      >
        Delete
      </button>

    </div>

  </div>
</div>

);
}

export default ClothingCard;