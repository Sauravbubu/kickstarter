import React from "react";
import Login from "./Login";
import Home from "./HomePage/Home";
import { Routes, Route } from "react-router-dom";
import EachPage from "../Components/EachPage";
import Explore from "../Components/Explore";
const AllRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home/:page" element={<EachPage />} />
      <Route path="/home/:page/:each" element={<Explore />} />
    </Routes>
  );
};

export default AllRoute;
