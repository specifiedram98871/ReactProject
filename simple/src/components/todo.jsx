import React from 'react'
import { useState } from 'react'
let id = 0;
const Todo = () => {
    const [name, setName] = useState('');
    const [artists, setArtists] = useState([]);
    function handleClick() {
      setArtists([...artists, { id: id++, name: name }]);
      setName('');
    }
    function handleDelete(id){
      setArtists(artists.filter(a => a.id !== id));
      
    }
  return (
      <div className='flex flex-col justify-center items-center bg-slate-200'>
          <h1 className='text-3xl text-center underline font-bold'>Todo List:</h1>
          <input className='py-2 px-5 bg-slate-300 text-black font-semibold rounded-full outline-none' type="text" value={name} onChange={(e) => { setName(e.target.value) }} />
          <button className='py-2 px-5 bg-green-500 text-white font-semibold rounded-full' onClick={handleClick}>Add</button>
          <ul>
              {artists.map(artists => (<li className='text-1xl bg-slate-200 flex justify-center items-center ' key={artists.id} >{artists.name}
                <button className='py-2 px-5 mx-10 my-2 bg-red-500 text-white font-semibold rounded-full' onClick={handleDelete}>Remove</button>
              </li>
              
              ))}
          </ul>
    </div>
  )
}

export default Todo