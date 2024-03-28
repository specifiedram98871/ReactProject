import React from "react";

const Table = ({ passwords }) => {
  return (
    <div>
      {passwords.length === 0 ? (
        <h1 className="text-2xl text-sky-400 font-bold text-start m-8">
          No Passwords Found
        </h1>
      ) : (
        <div className="mycontainer overflow-x-auto">
          <h1 className="text-2xl font-bold text-start my-8">
            Your Saved Passwords
          </h1>
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
              {passwords.map((p, index) => {
                return (
                  <tr key={index}>
                    <td className="border px-4 py-2">{p.site}</td>
                    <td className="border px-4 py-2">{p.username}</td>
                    <td className="border px-4 py-2">{p.password}</td>
                    <div className=" border flex justify-around p-1">
                      <button className="bg-sky-600 text-white px-4 py-2 rounded-lg">
                        Edit
                      </button>
                      <button className="bg-red-600 text-white px-4 py-2 rounded-lg">
                        Delete
                      </button>
                    </div>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Table;
