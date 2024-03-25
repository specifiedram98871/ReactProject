import React, { useState } from "react";

const Manager = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className="mycontainer bg-slate-600 w-full">
      <div className="logo text-center p-2">
        <h1 className="text-4xl font-bold">
          {" "}
          <span className="text-sky-600">&lt;</span>
          Pass <span className="text-sky-600">Mg</span>
          <span className="text-sky-600"> /&gt;</span>
        </h1>
        <p className="text-2xl text-sky-500">Password Manager</p>
      </div>
      <div className="text-black flex p-4 flex-col items-center gap-8">
        <input
          className="rounded-full border border-sky-500 w-full p-4 py-1"
          type="text"
          name=""
          id=""
        />
        <div className="flex w-full justify-between gap-9">
          <input
            className="rounded-full border border-sky-500 w-full p-4 py-1"
            type="text"
            name=""
            id=""
          />
          <div className="relative">
            <input
              className="rounded-full border border-sky-500 w-full p-4 py-1"
              type={showPassword ? "text" : "password"}
              name=""
              id=""
            />
            <span
              className="absolute right-0 top-1 cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? (
                <lord-icon
                  src="https://cdn.lordicon.com/vfczflna.json"
                  trigger="in"
                  delay="1500"
                  style={{ width: "30px", height: "30px" }}
                ></lord-icon>
              ) : (
                <lord-icon
                  src="https://cdn.lordicon.com/vfczflna.json"
                  trigger="in"
                  delay="1500"
                  state="hover-cross"
                  style={{ width: "30px", height: "30px" }}
                ></lord-icon>
              )}
            </span>
          </div>
        </div>

        <button className="flex items-center bg-sky-600  rounded-full w-fit px-4 hover:bg-sky-400">
          <lord-icon
            src="https://cdn.lordicon.com/zrkkrrpl.json"
            trigger="in"
            style={{ width: "40px", height: "40px", color: "white" }}
          ></lord-icon>
          Add password
        </button>
      </div>
    </div>
  );
};

export default Manager;
