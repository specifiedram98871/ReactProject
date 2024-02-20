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
      <>
          <p>Your inspirational quote is:</p>
          <Fancy text={quote} />
          <button onClick={next}>Click for quote</button>
          {children}
    </>
  )
}

export default Inspiration