import React from 'react'

const Manager = () => {
  return (
      <div className='mycontainer bg-slate-600 max-w-lg' >
      <h1>PassOp</h1>
      <p>Password Manager</p>
          <div className='text-white flex flex-col'>
              <input className='rounded-full' type="text" name='' id='' />
              <div className="flex">
                  <input type="text" name='' id=''/>
                  <input type="text" name='' id=''/>
              </div>
          </div>
    </div>
  )
}

export default Manager