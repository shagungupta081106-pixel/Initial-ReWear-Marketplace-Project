import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ItemDetails() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    fetchItem();
  }, []);

  const fetchItem = async () => {
  try {
    const res = await axios.get(
      `http://localhost:5000/api/clothes/${id}`
    );

    console.log("Item Data:", res.data);

    setItem(res.data);
  } catch (error) {
    console.log(error);
  }
};

  const handleSwapRequest = async () => {
    try {
      const user = JSON.parse(
        localStorage.getItem("user")
      );

      await axios.post(
        "http://localhost:5000/api/swaps",
        {
          requesterName:
            user?.name || "Shagun",

          itemName: item.title,

          ownerName:
            item.owner || "Shagun",

          status: "Pending",
        }
      );

      alert("Swap Request Sent Successfully");
    } catch (error) {
      console.log(error);
      alert("Failed to Send Request");
    }
  };

  if (!item) {
    return (
      <h2 className="text-center mt-10 text-xl">
        Loading...
      </h2>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white shadow-xl rounded-xl overflow-hidden">

        <img
          src={
            item.image ||
            "https://via.placeholder.com/800x500?text=No+Image"
          }
          alt={item.title}
          className="w-full h-96 object-cover"
        />

        <div className="p-6">
          <h1 className="text-4xl font-bold mb-4">
            {item.title}
          </h1>

          <div className="space-y-3 text-lg">

            <p>
              <strong>Brand:</strong>{" "}
              {item.brand}
            </p>

            <p>
              <strong>Size:</strong>{" "}
              {item.size}
            </p>

            <p>
              <strong>Condition:</strong>{" "}
              {item.condition}
            </p>

            <p>
              <strong>Swap Value:</strong> ₹
              {item.value}
            </p>

            <p>
              <strong>Location:</strong>{" "}
              {item.location}
            </p>

            <p>
              <strong>Owner:</strong>{" "}
              {item.owner}
            </p>

            <p>
              <strong>Status:</strong>{" "}
              {item.status}
            </p>

          </div>

          <button
            onClick={handleSwapRequest}
            className="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg"
          >
            Request Swap
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemDetails;