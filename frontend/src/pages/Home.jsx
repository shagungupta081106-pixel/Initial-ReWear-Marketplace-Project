import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import ClothingCard from "../components/ClothingCard";
import { Link } from "react-router-dom";

function Home() {
const [clothes, setClothes] = useState([]);
const [search, setSearch] = useState("");

useEffect(() => {
fetchClothes();
}, []);

const fetchClothes = async () => {
try {
const res = await axios.get(
"http://localhost:5000/api/clothes"
);

  setClothes(res.data);
} catch (error) {
  console.log(error);
}

};

const filteredClothes = clothes.filter((item) =>
item.title
.toLowerCase()
.includes(search.toLowerCase())
);

return (
<>
<Navbar />

  {/* Premium Hero Section */}

<div
  className="text-white"
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=80')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  <div className="bg-black/60 py-36">
    <div className="max-w-6xl mx-auto px-6 text-center">

  <div className="inline-block bg-green-500 px-4 py-2 rounded-full mb-6 text-white font-semibold">
    🌍 Sustainable Fashion Platform
  </div>

  <h1 className="text-6xl md:text-7xl font-extrabold mb-6">
    ♻️ ReWear Marketplace
  </h1>

  <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
    Exchange Clothes, Reduce Waste, Save Money
    and Promote Sustainable Fashion.
  </p>

  <div className="flex flex-wrap justify-center gap-4">

    <a
  href="#items"
  className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-xl text-lg font-bold shadow-xl inline-block"
>
  Browse Items
</a>

    <Link
  to="/add-item"
  className="bg-white text-black hover:bg-gray-200 px-8 py-4 rounded-xl text-lg font-bold shadow-xl"
>
  Start Swapping
</Link>

  </div>

  <div className="grid md:grid-cols-3 gap-6 mt-16">

    <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
      <h2 className="text-4xl font-bold">500+</h2>
      <p>Items Listed</p>
    </div>

    <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
      <h2 className="text-4xl font-bold">150+</h2>
      <p>Successful Swaps</p>
    </div>

    <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
      <h2 className="text-4xl font-bold">200+</h2>
      <p>Happy Users</p>
    </div>

  </div>

</div>

  </div>
</div>

  {/* Search */}
  <div className="max-w-6xl mx-auto px-6 mt-8">
    <input
      type="text"
      placeholder="🔍 Search clothes..."
      value={search}
      onChange={(e) =>
        setSearch(e.target.value)
      }
     className="w-full p-5 rounded-2xl shadow-2xl bg-white border border-gray-200 focus:outline-none focus:ring-4 focus:ring-green-300 transition-all"
    />
  </div>

  {/* Categories */}
  <div className="max-w-6xl mx-auto px-6 mt-10">
    <h2 className="text-3xl font-bold mb-6">
      Browse Categories
    </h2>

    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">

      <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:scale-105 transition">
        👕
        <p className="font-bold mt-2">
          T-Shirts
        </p>
      </div>

      <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:scale-105 transition">
        👖
        <p className="font-bold mt-2">
          Jeans
        </p>
      </div>

      <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:scale-105 transition">
        🧥
        <p className="font-bold mt-2">
          Jackets
        </p>
      </div>

      <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:scale-105 transition">
        👗
        <p className="font-bold mt-2">
          Dresses
        </p>
      </div>

      <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:scale-105 transition">
        👟
        <p className="font-bold mt-2">
          Shoes
        </p>
      </div>

    </div>
  </div>
   
   <div className="max-w-6xl mx-auto py-12 px-6">
  <div className="bg-white rounded-3xl shadow-xl p-8">
    <h2 className="text-3xl font-bold mb-6">
      Why Choose ReWear? ♻️
    </h2>

    <div className="grid md:grid-cols-3 gap-6">
      <div>
        <h3 className="font-bold text-xl">
          🌍 Eco Friendly
        </h3>
        <p>
          Reduce textile waste and help the environment.
        </p>
      </div>

      <div>
        <h3 className="font-bold text-xl">
          💰 Save Money
        </h3>
        <p>
          Exchange clothes instead of buying new ones.
        </p>
      </div>

      <div>
        <h3 className="font-bold text-xl">
          👥 Community Driven
        </h3>
        <p>
          Connect with fashion-conscious people.
        </p>
      </div>
    </div>
  </div>
</div>

  {/* Statistics */}
  <div className="max-w-6xl mx-auto px-6 mt-12">
    <div className="grid md:grid-cols-3 gap-6">

      <div className="bg-white shadow-xl rounded-xl p-6 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
        <h2 className="text-5xl font-extrabold text-green-600">
          {clothes.length}
        </h2>
        <p>Total Listings</p>
      </div>

      <div className="bg-white shadow-xl rounded-xl p-6 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
        <h2 className="text-4xl font-bold text-blue-600">
          150+
        </h2>
        <p>Successful Swaps</p>
      </div>

      <div className="bg-white shadow-xl rounded-xl p-6 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
        <h2 className="text-4xl font-bold text-purple-600">
          200+
        </h2>
        <p>Happy Users</p>
      </div>

    </div>
  </div>

  <h2 className="text-5xl font-extrabold text-center mt-16 mb-4 text-gray-800">
  Featured Fashion Collection ✨
</h2>

<p className="text-center text-gray-500 text-lg mb-12 max-w-2xl mx-auto">
  Discover unique, stylish and sustainable fashion pieces shared by our growing community.
</p>

  {/* Items */}
  <div
  id="items"
  className="max-w-6xl mx-auto p-6 mt-10"
>
    <h2 className="text-3xl font-bold mb-6">
      Available Clothing Items
    </h2>

    {filteredClothes.length === 0 ? (
      <p className="text-gray-500">
        No clothing items found.
      </p>
    ) : (
      <div className="grid md:grid-cols-3 gap-6">
        {filteredClothes.map((item) => (
          <ClothingCard
            key={item._id}
            item={{
              _id: item._id,
              name: item.title,
              brand: item.brand,
              size: item.size,
              condition: item.condition,
              location: item.location,
              image: item.image,
            }}
          />
        ))}
      </div>
    )}
  </div>

  <div className="max-w-6xl mx-auto px-6 py-16">
  <div className="bg-gradient-to-r from-green-600 to-emerald-500 text-white rounded-3xl p-10 text-center">

    <h2 className="text-4xl font-bold mb-4">
      Ready to Start Swapping?
    </h2>

    <p className="text-lg mb-6">
      Join our sustainable fashion community today.
    </p>

    <Link
  to="/add-item"
  className="inline-block bg-white text-green-600 px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transition"
>
  Add Your First Item
</Link>

  </div>
</div>

  {/* Footer */}
  <footer className="bg-gray-950 text-white mt-16">
    <div className="max-w-6xl mx-auto px-6 py-10">

      <h2 className="text-4xl font-extrabold tracking-wide">
  ♻️ ReWear Marketplace
</h2>

      <p className="mt-3 text-gray-400">
        Exchange clothes, reduce waste and
        promote sustainable fashion.
      </p>

      <hr className="my-6 border-gray-700" />

      <p className="text-center text-gray-500">
  © 2026 ReWear Marketplace. All Rights Reserved.
</p>

<p className="text-center text-gray-600 mt-2 text-sm">
  Made with 💚 for Sustainable Fashion
</p>

    </div>
  </footer>
</>

);
}

export default Home;