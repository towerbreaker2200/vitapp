import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Navbar from "./nav/navbar";
import Home from "../Routes/Home";
import Login from "../Routes/Login";

const AppRouter = ({ isLoggedIn }) => {
  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};
export default AppRouter;
