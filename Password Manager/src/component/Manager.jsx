import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";
import "react-toastify/dist/ReactToastify.css";
// import Table from "./table";
// let id = 0;

const Manager = () => {
  const [formData, setFormData] = useState({
    site: "",
    username: "",
    password: "",
  });
  // const navigate = useNavigate();
  const [passArr, setPassArr] = useState([]);
  const [showPassword, setShowPassword] = useState(false);
  const [showTable, setShowTable] = useState(false);

  useEffect(() => {
    let passwords = localStorage.getItem("password");
    if (passwords) {
      setPassArr(JSON.parse(passwords));
    }
  }, []);

  const togglePasswordVisibility = (text) => {
    setShowPassword((prevState) => !prevState);
    toast("🦄Baby Dancy", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: "Bounce",
    });
    navigator.clipboard.writeText(text);
  };

  const toggleTable = () => {
    setShowTable((prevState) => !prevState);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const savePassword = () => {
    setPassArr([...passArr, { ...formData, id: uuidv4() }]);
    localStorage.setItem(
      "password",
      JSON.stringify([...passArr, { ...formData, id: uuidv4() }])
    );
    console.log(passArr);
  };

  const handleDelete = (id) => {};
  const handleEdit = (id) => {};

  return (
    <div>
      <ToastContainer
        position="buttom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition="Bounce"
      />
      {/* Same as */}
      <ToastContainer />
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
            value={formData.site}
            onChange={handleChange}
            name="site"
            id=""
            placeholder="Site"
          />
          <div className="flex w-full justify-between gap-9">
            <input
              className="rounded-full border border-sky-500 w-full p-4 py-1"
              type="text"
              onChange={handleChange}
              value={formData.username}
              name="username"
              id=""
              placeholder="Username"
            />
            <div className="relative">
              <input
                className="rounded-full border border-sky-500 w-full p-4 py-1"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={handleChange}
                name="password"
                id=""
                placeholder="Password"
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

          <button
            onClick={savePassword}
            className="flex items-center bg-sky-600  rounded-full w-fit px-4 hover:bg-sky-400"
          >
            <lord-icon
              src="https://cdn.lordicon.com/zrkkrrpl.json"
              trigger="in"
              style={{ width: "40px", height: "40px", color: "white" }}
            ></lord-icon>
            Add password
          </button>
        </div>
        <div className="text-black flex p-4 flex-col  gap-8">
          <button
            className="bg-green-600  rounded-full w-fit p-2 hover:bg-red-400"
            onClick={toggleTable}
          >
            Show Passwords <span className="text-white"> &gt;</span>
          </button>
        </div>
      </div>
      {showTable === true ? (
        <div className="mycontainer">
          <table className="table-auto w-full border-collapse">
            <thead>
              <tr className="bg-sky-300">
                <th className="px-4 py-2">Site</th>
                <th className="px-4 py-2">Username</th>
                <th className="px-4 py-2">Password</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {passArr.map((password, i) => (
                <tr
                  key={i}
                  className={i % 2 === 0 ? "bg-gray-200" : "bg-white"}
                >
                  <td className="border px-4 py-2">{password.site}</td>
                  <td className="border px-4 py-2">{password.username}</td>
                  <td className="border px-4 py-2">{password.password}</td>
                  <td className="border px-4 py-2 flex justify-around">
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                      onClick={() => {
                        handleEdit(password.id);
                      }}
                    >
                      Edit
                    </button>{" "}
                    <button
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                      onClick={() => handleDelete(password.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}
    </div>
  );
};

export default Manager;
