import React from "react";

export default function Footer() {
  return (
    <footer className="w-full py-8 my-4 bg-blue-400 text-gray-200">
     <div className="bg-[#727a9a] max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:px-4 lg:px-6 rounded-lg shadow-xl">
        <div className="px-4 py-4">
          <h2 className="text-white font-semibold text-lg mb-4">About Me</h2>
          <p className="mb-4">
            Hello, I'am Pranab Kumar , an aspiring web developer specialising in react.
             This is a learning project developed by me.
          </p>
        </div>
        <div className="px-4 py-4 "> 
          <h2 className="text-white font-semibold text-lg mb-4">Quick Links</h2>
          <ul>
            <li>
              <a href="/" className="hover:textwhite transition-colors duration-300">Home</a>
            </li>
            <li>
              <a href="/stocks" className="hover:textwhite transition-colors duration-300">Stocks</a>
            </li>
            <li>
              <a href="/mutual-funds" className="hover:textwhite transition-colors duration-300">Mutual Funds</a>
            </li>
          </ul>
        </div>
        <div className="px-4 py-4">
          <h2 className="text-white font-semibold text-lg mb-4">Follow Me</h2>
          <div className="flex space-x-4">
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Github
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Twitter
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <div className="px-4 py-4">Made with ❤️ by Pranab Kumar</div>
        <p className="mb-4">&copy; Funds, Stocks & SIP Calculator Copyright 2024</p>
      </div>
     
    </footer>
  );
}