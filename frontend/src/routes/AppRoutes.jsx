import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddItem from "../pages/AddItem";
import ItemDetails from "../pages/ItemDetails";
import SwapRequests from "../pages/SwapRequests";
import Dashboard from "../pages/Dashboard";
import AdminDashboard from "../pages/AdminDashboard";
import EditItem from "../pages/EditItem";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/add-item" element={<AddItem />} />
        <Route path="/item/:id" element={<ItemDetails />} />
        <Route path="/swap-requests" element={<SwapRequests />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/edit-item/:id" element={<EditItem />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;