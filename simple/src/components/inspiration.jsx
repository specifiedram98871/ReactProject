import React from 'react'
import Fancy from './fancy'
import { useState } from 'react'
import quotes from './quote'

const Inspiration = ({ children }) => {
    const [index, setIndex] = useState(0);
    const quote = quotes[index];
    const next = () => {
        setIndex((index+1)% quotes.length)
    }
  return (
      <div className='flex flex-col justify-center  bg-slate-400 '>
          <p className='text-2xl'>Your inspirational quote is:</p>
          <Fancy text={quote} />
          <button className='py-2 px-5 bg-violet-500 text-white font-semibold rounded-full ' onClick={next}>Click for quote</button>
          {children}
    </div>
  )
}

export default Inspiration