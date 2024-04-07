import React, {  useState } from 'react'
import Questions from './Questions';
import { useSelector, useDispatch } from 'react-redux';
import { MoveNextQuestion, MovePreviousQuestion } from '../hooks/FetchQuestions';
import { PushAnswer } from '../hooks/setResult';
import { Navigate } from 'react-router-dom';

// redux store import
const Quiz = () => {
    // const trace = useSelector((state) => state.questions.trace);
    const[check, setCheck] = useState(undefined);
    const result = useSelector((state) => state.result.result);
    const {queue , trace} = useSelector((state) => state.questions)
    const dispatch = useDispatch();

    
    function handlePrevious() {
        if(trace > 0) {
            
            dispatch(MovePreviousQuestion())
        }
    }
    function handleNext() {
        if (trace < queue.length) {
            
            // update trace value by 1
            dispatch(MoveNextQuestion());
            //insert new array in result
            if(result.length <= trace){
                dispatch(PushAnswer(check));
            }
            // dispatch(PushAnswer(check));
        }
        // reset the value of the checked
        setCheck(undefined);
    }

    function onChecked(check) {
    
        setCheck(check);
    }
    // finish exam
    if (result.length && result.length >= queue.length) {
        return (
            <Navigate to={'/result'} replace="true"></Navigate>
        )
    } 
    

  return (
      <div class='container mx-auto mt-8'>
          <h1 class='text-3xl text-center'>Quiz Application</h1>

          {/* display questions */}
          <Questions onChecked={onChecked} />
          <div>
              {trace > 0 ? <button className='btn' onClick={handlePrevious}>Previous</button> : <div></div>}
              {/* <button className='btn' onClick={handlePrevious}>Previous</button> */}
              <button class='h-10 px-6 font-semibold rounded-md bg-black text-white' onClick={handleNext}>Next</button>
          </div>
    </div>
  )
}

export default Quiz
