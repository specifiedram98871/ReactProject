import React, { useEffect } from 'react'
import Questions from './Questions';
import { useSelector, useDispatch } from 'react-redux';
import { MoveNextQuestion, MovePreviousQuestion } from '../hooks/FetchQuestions';
import { PushAnswer } from '../hooks/setResult';

// redux store import

const Quiz = () => {
    // const trace = useSelector((state) => state.questions.trace);
    const {queue , trace} = useSelector((state) => state.questions)
    const dispatch = useDispatch();
    useEffect(()=>{console.log(trace)})
    function handlePrevious() {
        if(trace > 0) {
            
            dispatch(MovePreviousQuestion())
        }
    }
    function handleNext() {
        if (trace < queue.length) {
            
            // update trace value by 1
            dispatch(MoveNextQuestion())
            dispatch(PushAnswer(1))
        }
    }

    function onChecked(check) {
        console.log(check)
    }
  return (
      <div className='container'>
          <h1 className='title text-light'>Quiz Application</h1>

          {/* display questions */}
          <Questions onChecked={onChecked}/>
          <div>
              <button className='btn' onClick={handlePrevious}>Previous</button>
              <button className='btn' onClick={handleNext}>Next</button>
          </div>
    </div>
  )
}

export default Quiz
