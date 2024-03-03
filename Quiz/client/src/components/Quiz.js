import React from 'react'
import Questions from './Questions';

const Quiz = () => {
    function handlePrevious(){
        console.log('previous');
    }
    function handleNext(){
        console.log('next');
    }
  return (
      <div className='container'>
          <h1 className='title text-light'>Quiz Application</h1>

          {/* display questions */}
          <Questions/>
          <div>
              <button className='btn' onClick={handlePrevious}>Previous</button>
              <button className='btn' onClick={handleNext}>Next</button>
          </div>
    </div>
  )
}

export default Quiz