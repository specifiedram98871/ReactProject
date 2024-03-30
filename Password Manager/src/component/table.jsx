import React, { useEffect, useState } from "react";

const Table = ({ passwords }) => {
  const [passwordList, setPasswordList] = useState(passwords);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("password"));
    if (storedData) {
      setPasswordList(storedData);
    }
  }, []);

  const handleDelete = (index) => {
    const newPasswordList = passwordList.filter((_, i) => i !== index);
    setPasswordList([...newPasswordList]);
    localStorage.setItem("password", JSON.stringify(newPasswordList));
  };

  const handleEdit = (index) => {
    const newPasswordList = passwordList.filter((_, i) => i !== index);
    setPasswordList([...newPasswordList]);
    localStorage.setItem("password", JSON.stringify(newPasswordList));
  };

  return (
    <div>
      {passwordList.length === 0 ? (
        <h1 className="text-2xl text-sky-400 font-bold text-start m-8">
          No Passwords Found
        </h1>
      ) : (
        <div className="mycontainer overflow-x-auto">
          <h1 className="text-2xl font-bold text-start my-8">
            Your Saved Passwords
          </h1>
          <div className="table-container">
            <table className="table-auto w-full border-collapse">
              <thead>
                <tr className="bg-sky-300">
                  <th className="px-4 py-2">Site</th>
                  <th className="px-4 py-2">Username</th>
                  <th className="px-4 py-2">Password</th>
                  <th className="px-4 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {passwordList.map((p, index) => {
                  return (
                    <tr key={index}>
                      <td className="border px-4 py-2">{p.site}</td>
                      <td className="border px-4 py-2">{p.username}</td>
                      <td className="border px-4 py-2">{p.password}</td>
                      <td>
                        <div className="flex justify-around p-1">
                          <button
                            onClick={() => handleEdit(index)}
                            className="bg-sky-600 text-white px-4 py-2 rounded-lg"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDelete(index)}
                            className="bg-red-600 text-white px-4 py-2 rounded-lg"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Table;
