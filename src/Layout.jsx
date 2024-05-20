import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Layout() {
  return (
    <div className="bg-[#E5E5E5] bg-blend-screen">
      <Header />
      <div className="flex">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
