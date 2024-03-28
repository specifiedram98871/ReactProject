import React from "react";

const Navbar = () => {
  return (
    <div className="bg-slate-800 ">
      <div className="mycontainer flex justify-between px-4 py-5 h-14 items-center">
        <div className="logo font-bold">
          <span className="text-sky-600">&lt;</span>
          Pass <span className="text-sky-600">Mg</span>
          <span className="text-sky-600"> /&gt;</span>
        </div>
        <ul className="flex gap-4 text-white items-center">
          <li className="hover:bg-sky-600 p-4">Home</li>
          <li className="hover:bg-sky-600 p-4">Contact</li>
          <li className="hover:bg-sky-600 p-4">About Me</li>
          <li className="hover:bg-sky-600 p-4">Download</li>
        </ul>
        <div className="bg-sky-600 text-white border-2px border-sky-600 rounded-full p-1">
          <img src="" alt="" />
          <span>GitHub</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
