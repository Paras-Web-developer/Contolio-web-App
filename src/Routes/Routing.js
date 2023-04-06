import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Feature from "../pages/Feature";
import Pricing from "../pages/Pricing";
import Comparison from "../pages/Comparison";
import Footer from "../component/Footer";
import Form from "../component/Form";
import Booking from "../pages/booking";
export default function Routing() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="Feature" element={<Feature />}></Route>
          <Route path="Comparison" element={<Comparison />}></Route>
          <Route path="Pricing" element={<Pricing />}></Route>
          <Route path="Form" element={<Form />}></Route>
          <Route path="booking" element={<Booking />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
