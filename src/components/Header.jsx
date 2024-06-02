import React from "react";
import { Link } from "react-router-dom";
import { ModeToggle } from "./mode-toggle";

export default function Header() {

  

  return (
    <>
      <header className="sticky top-1 z-20 bg-[#CAF0F8] shadow-md py-5 px-5 rounded-t-lg min-w-[440px] min-h-[20px]">
        <nav className="flex justify-between align-middle gap-4">
          <div className="font-bold text-xl">Stocks & Fundulator</div>
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
          <div className="flex justify-end space-x-2">
            <Link
              className="bg-gradient-to-r from-blue-500 to-blue-700 hover:bg-gradient-to-l flex align-middle text-center min-h-[2px] text-white py-2 px-4 rounded-lg"
              to="/loginSignup"
            >
              Login/Signup
            </Link>
            <div className="flex">
            <ModeToggle/>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
