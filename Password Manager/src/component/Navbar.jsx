import React from 'react'

const Navbar = () => {
  return (
      <div
          className='bg-purple-600 flex justify-between items-center h-full'>
          <div className="logo font-bold">P</div>
          <ul className="flex gap-4 text-white items-center">
              <li className='hover:bg-sky-400 p-4'>Home</li>
              <li className='hover:bg-sky-400 p-4'>Contact</li>
              <li className='hover:bg-sky-400 p-4'>About Me</li>
              <li className='hover:bg-sky-400 p-4'>Download</li>
          </ul>
      </div>
  )
}

export default Navbar