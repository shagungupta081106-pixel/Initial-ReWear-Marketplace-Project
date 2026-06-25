import { useEffect, useState } from "react";
import axios from "axios";

function SwapRequests() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    fetchRequests();
  }, []);

  const fetchRequests = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/swaps"
      );

      setRequests(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const updateStatus = async (id, status) => {
    try {
      await axios.put(
        `http://localhost:5000/api/swaps/${id}`,
        { status }
      );

      alert("Status Updated");

      fetchRequests();
    } catch (error) {
      console.log(error);
      alert("Update Failed");
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">
        Swap Requests
      </h1>

      {requests.length === 0 ? (
        <p>No Swap Requests Found</p>
      ) : (
        <div className="space-y-4">
          {requests.map((request) => (
            <div
              key={request._id}
              className="bg-white shadow-md rounded-lg p-4"
            >
              <p>
                <strong>Requester:</strong>{" "}
                {request.requesterName}
              </p>

              <p>
                <strong>Item:</strong>{" "}
                {request.itemName}
              </p>

              <p>
                <strong>Owner:</strong>{" "}
                {request.ownerName}
              </p>

              <p>
                <strong>Status:</strong>{" "}
                {request.status}
              </p>

              <div className="mt-4 flex gap-3">
                <button
                  onClick={() =>
                    updateStatus(
                      request._id,
                      "Accepted"
                    )
                  }
                  className="bg-green-600 text-white px-4 py-2 rounded"
                >
                  Accept
                </button>

                <button
                  onClick={() =>
                    updateStatus(
                      request._id,
                      "Rejected"
                    )
                  }
                  className="bg-red-600 text-white px-4 py-2 rounded"
                >
                  Reject
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SwapRequests;