import React from "react";

const Table = ({ passwords }) => {
  return (
    <div className="mycontainer overflow-x-auto">
      <h1 className="text-3xl font-bold text-center my-8">
        Your Saved Passwords
      </h1>
      <table className="table-auto w-full border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">Site</th>
            <th className="px-4 py-2">Username</th>
            <th className="px-4 py-2">Password</th>
          </tr>
        </thead>
        <tbody>
          {passwords.map((p, index) => {
            return (
              <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : ""}>
                <td className="border px-4 py-2">{p.site}</td>
                <td className="border px-4 py-2">{p.username}</td>
                <td className="border px-4 py-2">{p.password}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
