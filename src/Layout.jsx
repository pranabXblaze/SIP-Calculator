import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Layout() {
  return (
    <div className="bg-[#E5E5E5] min-w-[520px] sm:w-full">
      <Header />
      <div className="flex">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
