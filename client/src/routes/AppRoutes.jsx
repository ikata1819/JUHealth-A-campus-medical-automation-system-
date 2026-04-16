import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

import Landing from "../pages/Landing";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Emergency from "../pages/Emergency";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />

      <div className="layout">
        <Sidebar />

        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/emergency" element={<Emergency />} />
        </Routes>
      </div>
       <Footer /> 
    </BrowserRouter>
  );
}

export default AppRoutes;