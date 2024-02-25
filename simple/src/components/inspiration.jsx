import React from 'react'
import Fancy from './fancy'
import { useState } from 'react'
import quotes from './quote'
import Color from './color';
const Inspiration = ({ children }) => {
    const [index, setIndex] = useState(0);
    const quote = quotes[index];
    const next = () => {
        setIndex((index+1)% quotes.length)
    }
  return (
      <div className='flex flex-col justify-center items-center bg-slate-400 '>
          <p className='text-2xl'>Your inspirational {quote.type} is:</p>
      {quote.type === 'quote' ?
        <Fancy text={quote.value} /> :
        <Color value={quote.value} />
      }
          <button className='py-2 px-5 bg-violet-500 text-white font-semibold rounded-full' onClick={next}>Click for quote</button>
      {children}
     
    </div>
  )
}

export default Inspiration