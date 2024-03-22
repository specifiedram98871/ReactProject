import React from 'react';

const Manager = () => {
  return (
      <div className='mycontainer bg-slate-600 w-full' >
      <div className="logo font-bold text-center p-2">
                  <span className="text-sky-600">&lt;</span>
                   Pass   <span className='text-sky-600'>Mg</span>
                  <span className="text-sky-600"> /&gt;</span>
      <p>Password Manager</p>
              </div>
          <div className='text-white flex flex-col'>
              <input className='rounded-full' type="text" name='' id='' />
              <div className="flex justify-between py-4">
                  <input className='rounded-full w-full mr-3' type="text" name='' id=''/>
                  <input className='rounded-full' type="password" name='' id=''/>
              </div>
          </div>
    </div>
  )
}

export default Manager