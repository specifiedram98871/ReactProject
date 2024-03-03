import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

const Main = () => {
    const inputRef = useRef(null)
  return (
      <div className='container'>
          <h1 className='title text-light'>Quiz Application</h1>
          <ol>
           <li>You will be asked 10 questions one after another.</li>
           <li>10 points will be awarded for each correct answer</li>
           <li>Each question has 3 options</li>
           <li>You can review and change answers</li>
           <li>The result will be declared at the end</li>
          </ol>
          <form id='form'>
              <input ref={inputRef} type='text' placeholder='Username' id='submit' />
          </form>
          <div className='start'>
              <Link className='btn' to={"/quiz"}>Start Quiz</Link>
          </div>
    </div>
  )
}

export default Main