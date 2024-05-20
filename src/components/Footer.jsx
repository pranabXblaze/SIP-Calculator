import React from "react";

export default function Footer() {
  return (
    <div className="mx-auto flex h-[200px] w-full px-5 py-5">
      <footer className=" container flex justify-between shadow-lg">
        <div className="px-4 py-4 items-end justify-center">SIP Calculator</div>
        <div>&copy; Copyright 2024</div>
        <div className="px-5 py-5">Made with ❤️ by Pranab Kumar</div>
      </footer>
    </div>
  );
}
