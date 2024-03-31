import React, { useState, useEffect } from "react";
let nextId = 0;
const Todo = () => {
  const [name, setName] = useState("");
  const [artists, setArtists] = useState([]);

  // Load data from local storage on component mount
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("data"));
    if (storedData) {
      setArtists(storedData);
    }
  }, []);

  function handleClick() {
    const newArtist = { id: nextId++, name: name };
    setArtists([...artists, newArtist]);
    localStorage.setItem("data", JSON.stringify([...artists, newArtist]));
    setName("");
  }

  function handleDelete(id) {
    const updatedArtists = artists.filter((a) => a.id !== id);
    setArtists(updatedArtists);
    localStorage.setItem("data", JSON.stringify(updatedArtists));
  }

  return (
    <div className="flex flex-col justify-center items-center bg-slate-200">
      <h1 className="text-3xl text-center underline font-bold">Todo List:</h1>
      <input
        className="py-2 px-5 bg-slate-300 text-black font-semibold rounded-full outline-none"
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button
        className="py-2 px-5 bg-green-500 text-white font-semibold rounded-full"
        onClick={handleClick}
      >
        Add
      </button>
      <ul>
        {artists.map((a) => (
          <li
            className="text-1xl bg-slate-200 flex justify-center items-center "
            key={a.id}
          >
            {a.name}
            <button
              className="py-2 px-5 mx-10 my-2 bg-red-500 text-white font-semibold rounded-full"
              onClick={() => handleDelete(a.id)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
