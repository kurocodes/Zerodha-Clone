import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";

import Navbar from "./Landing_page/Navbar";
import Footer from "./Landing_page/Footer";
import HomePage from "./Landing_page/Home/HomePage";
import Signup from "./Landing_page/Signup/Signup";
import AboutPage from "./Landing_page/About/AboutPage";
import ProductsPage from "./Landing_page/Products/ProductsPage";
import PricingPage from "./Landing_page/Pricing/PricingPage";
import SupportPage from "./Landing_page/Support/SupportPage";
import NotFound from "./Landing_page/NotFount";
import { ToastContainer } from "react-toastify";
import Login from "./Landing_page/Login/Login";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/support" element={<SupportPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
    <ToastContainer />
  </BrowserRouter>
);
