import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Layout() {

  return (
      <div className="w-[440px] sm:w-full min-h-screen ">
      <Header />
        <Outlet />
      <Footer />
      </div>
  );
}
