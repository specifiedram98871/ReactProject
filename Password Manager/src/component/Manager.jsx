import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Table from "./table";
const Manager = ({}) => {
  const [formData, setFormData] = useState({
    site: "",
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const [passArr, setPassArr] = useState([]);
  const [showPassword, setShowPassword] = useState(false);
  const [showTable, setShowTable] = useState(false);
  useEffect(() => {
    let password = localStorage.getItem("password");
    if (password) {
      setPassArr(JSON.parse(password)); //parses string to object as{a:'b',c:d}
    }
  }, []);
  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
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
    // console.log(formData);
    setPassArr([...passArr, formData]);
    localStorage.setItem("password", JSON.stringify([...passArr, formData])); //saves password locally  in string format{ "a":"b","c":"d"}
    console.log(passArr);
  };

  return (
    <div>
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
          />
          <div className="flex w-full justify-between gap-9">
            <input
              className="rounded-full border border-sky-500 w-full p-4 py-1"
              type="text"
              onChange={handleChange}
              value={formData.username}
              name="username"
              id=""
            />
            <div className="relative">
              <input
                className="rounded-full border border-sky-500 w-full p-4 py-1"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={handleChange}
                name="password"
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
            ShowPassword
            <span className="text-white"> &gt;</span>
          </button>
        </div>
      </div>
      {showTable && <Table passwords={passArr} />}
    </div>
  );
};

export default Manager;
