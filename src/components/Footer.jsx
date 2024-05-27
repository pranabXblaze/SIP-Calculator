import React from "react";

export default function Footer() {
  return (
    <div className="mx-auto flex h-[200px] w-full px-5 py-5">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#CAF0F8" fill-opacity="1" 
      d="M0,320L48,314.7C96,309,192,299,288,250.7C384,203,480,117,576,122.7C672,128,768,224,864,250.7C960,277,1056,235,1152,186.7C1248,139,1344,85,1392,58.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
       </path>
      </svg>
      <footer className=" container flex justify-between shadow-lg">
        <div className="px-4 py-4 items-end justify-center">SIP Calculator</div>
        <div>&copy; Copyright 2024</div>
        <div className="px-5 py-5">Made with ❤️ by Pranab Kumar</div>
      </footer>
    </div>
  );
}
