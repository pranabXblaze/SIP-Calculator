import React from "react";
import { Link } from "react-router-dom";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useState } from "react";
export default function Header() {

  const [darkmode, setDarkmode] = useState(false);
  const changeTheme = () => {
    setDarkmode(!darkmode);
  };
  return (
    <>
      <header className="sticky top-1 z-20 bg-[#CAF0F8] shadow-md py-5 px-5 rounded-t-lg">
        <nav className="mx-auto flex justify-between">
          <div className="font-bold text-xl">Funds Stocks & SIP Calculator</div>
          <ul className="flex space-x-5 my-2">
            <li>
              <a href="/" className="hover:text-blue-500 text-bold">
                Home
              </a>
            </li>
            <li>
              <a href="/explore" className="hover:text-blue-500 text-bold">
                Explore
              </a>
            </li>
          
          </ul>
          <div className="flex justify-end">
            <Link
              className="bg-gradient-to-r from-blue-500 to-blue-700 hover:bg-gradient-to-l text-white py-2 px-4 rounded"
              to="/loginSignup"
            >
              Login/Register
            </Link>
          
              <button href="/" className="w-1/2 py-2 px-4 mx-4">
                {
                darkmode ? (<MdDarkMode onClick={changeTheme}/>) : (<MdLightMode onClick={changeTheme}/>)
              }
              </button>
          </div>
        </nav>
      </header>
    </>
  );
}
