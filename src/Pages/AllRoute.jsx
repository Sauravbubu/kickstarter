import React from "react";
import Login from "./Login";
import Home from "./HomePage/Home";
import { Routes, Route } from "react-router-dom";
import EachPage from "../Components/EachPage";
import Explore from "../Components/Explore";
import Signup from "./HomePage/SignUp";
const AllRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home/:page" element={<EachPage />} />
      <Route path="/home/:page/:each" element={<Explore />} />
      <Route  path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default AllRoute;
