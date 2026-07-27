import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

function AdminDashboard() {
  const [users, setUsers] = useState(0);
  const [listings, setListings] = useState(0);
  const [requests, setRequests] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const clothesRes = await axios.get(
        "http://https://initial-rewear-marketplace-project-1.onrender.com/api/clothes"
      );

      const swapsRes = await axios.get(
        "http://https://initial-rewear-marketplace-project-1.onrender.com/api/swaps"
      );

      setListings(clothesRes.data.length);
      setRequests(swapsRes.data.length);

      // Temporary user count
      setUsers(10);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-8">
          Admin Dashboard
        </h1>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white shadow-lg p-6 rounded-xl">
            <h2 className="text-xl font-bold">
              Total Users
            </h2>
            <p className="text-3xl mt-3">
              {users}
            </p>
          </div>

          <div className="bg-white shadow-lg p-6 rounded-xl">
            <h2 className="text-xl font-bold">
              Total Listings
            </h2>
            <p className="text-3xl mt-3">
              {listings}
            </p>
          </div>

          <div className="bg-white shadow-lg p-6 rounded-xl">
            <h2 className="text-xl font-bold">
              Total Swap Requests
            </h2>
            <p className="text-3xl mt-3">
              {requests}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminDashboard;