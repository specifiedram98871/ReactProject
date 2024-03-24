import React from "react";

const Manager = () => {
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
          <input
            className="rounded-full border border-sky-500 w-full p-4 py-1"
            type="text"
            name=""
            id=""
          />
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
