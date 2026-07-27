import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

function Dashboard() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const res = await axios.get(
        "http://https://initial-rewear-marketplace-project-1.onrender.com/api/clothes"
      );

      setItems(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-4xl font-bold mb-8">
          My Dashboard
        </h1>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white shadow-lg p-6 rounded-xl">
            <h2 className="text-xl font-bold">
              My Listings
            </h2>

            <p className="mt-3 text-2xl font-semibold text-green-600">
              {items.length}
            </p>

            <p className="text-gray-500">
              Total Items Listed
            </p>
          </div>

          <div className="bg-white shadow-lg p-6 rounded-xl">
            <h2 className="text-xl font-bold">
              Swap Requests
            </h2>

            <p className="mt-3 text-2xl font-semibold text-blue-600">
              0
            </p>

            <p className="text-gray-500">
              Pending Requests
            </p>
          </div>

          <div className="bg-white shadow-lg p-6 rounded-xl">
            <h2 className="text-xl font-bold">
              Completed Swaps
            </h2>

            <p className="mt-3 text-2xl font-semibold text-purple-600">
              0
            </p>

            <p className="text-gray-500">
              Successful Swaps
            </p>
          </div>

        </div>

        <div className="mt-10 bg-white shadow-lg rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4">
            Recent Listings
          </h2>

          {items.length === 0 ? (
            <p>No Items Added Yet</p>
          ) : (
            <div className="space-y-3">
              {items.slice(0, 5).map((item) => (
                <div
                  key={item._id}
                  className="border p-4 rounded-lg"
                >
                  <h3 className="font-bold">
                    {item.title}
                  </h3>

                  <p>
                    {item.brand} | {item.size}
                  </p>

                  <p>
                    Condition: {item.condition}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </>
  );
}

export default Dashboard;