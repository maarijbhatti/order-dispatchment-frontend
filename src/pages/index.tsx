import React from "react";
//import { } from "react-router";

import Login from "./login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Orders from './orders';

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/orders" element={<Orders />} />

        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}
