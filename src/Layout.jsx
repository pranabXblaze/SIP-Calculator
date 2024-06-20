import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Layout() {
//const tclass = 'bg-gradient-to-r from-[#cad0ff] to-[#e3e3e3]'
  return (
    <div className='bg-background text-foreground'>
      <div className="w-[440px] sm:w-full min-h-screen">
        <div className="sticky flex z-20 top-1 justify-center">
          <Header />
        </div>
        <Outlet /> 
      <Footer />
      </div>
     </div> 
  );
}