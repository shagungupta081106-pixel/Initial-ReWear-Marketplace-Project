import { Link } from "react-router-dom";

function Navbar() {
const handleLogout = () => {
localStorage.removeItem("user");
localStorage.removeItem("token");

window.location.href = "/login";

};

return (
<nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-lg border-b">
<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

    <Link
      to="/"
      className="flex items-center gap-2"
    >
      <span className="text-3xl">♻️</span>

      <h1 className="text-3xl font-extrabold">
  ♻️ ReWear
</h1>
    </Link>

    <div className="flex gap-5 items-center text-gray-700 font-medium">

      <Link
        to="/"
        className="hover:text-green-600 transition"
      >
        Home
      </Link>

      <Link
        to="/add-item"
        className="hover:text-green-600 transition"
      >
        Add Item
      </Link>

      <Link
        to="/swap-requests"
        className="hover:text-green-600 transition"
      >
        Swaps
      </Link>

      <Link
        to="/dashboard"
        className="hover:text-green-600 transition"
      >
        Dashboard
      </Link>

      <Link
        to="/admin"
        className="hover:text-green-600 transition"
      >
        Admin
      </Link>

      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-2 rounded-xl hover:bg-red-600 transition shadow-md"
      >
        Logout
      </button>

    </div>
  </div>
</nav>

);
}

export default Navbar;