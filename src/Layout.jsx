import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Layout() {


 return  (
    <div className='dark:bg-background text-foreground'>
      <div className="w-full min-h-screen">
        <div className="sticky flex z-20 top-1 justify-center">
          <Header />
        </div>
        <Outlet /> 
      <Footer />
      </div>
     </div> 
  ) 
  
}