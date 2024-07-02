"use client"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "@/components/common/Footer";
import NavBar from "@/components/common/NavBar";
import BackToTop from "@/components/common/BackToTop";
import Home from "@/pages/Home";
import Players from "@/pages/Players";
import Login from "@/pages/Login";
import Indivigual from "@/pages/Indivigual";

export default function MainApp() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Login />} />
        <Route path="/Packs" element={<Indivigual />} />
        <Route path="/services" element={<Players />} />
      </Routes>
      <Footer />
      <BackToTop />
    </Router>
  );
}
