import React from 'react'

const Navbar = () => {
  return (  
      <div className='bg-purple-600 '>
          <div className="mycontainer flex justify-between px-4 py-5 h-14 items-center">
              <div className="logo font-bold">
                  <span className="bg-green-600">&lt;</span>
                   PassMg
                  <span className="bg-green-600">&gt;</span>
              </div>
          <ul className="flex gap-4 text-white items-center">
              <li className='hover:bg-sky-400 p-4'>Home</li>
              <li className='hover:bg-sky-400 p-4'>Contact</li>
              <li className='hover:bg-sky-400 p-4'>About Me</li>
              <li className='hover:bg-sky-400 p-4'>Download</li>
          </ul>
          </div>
      </div>
  )
}

export default Navbar;