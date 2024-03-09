import React, { useEffect, useState } from 'react'

import { useFetchQuestion } from '../hooks/FetchQuestions';
import { useDispatch, useSelector } from 'react-redux';
import { updateResult } from '../hooks/setResult';
import { updateResultAction } from '../redux/result_reducer';


const Questions = ({ onChecked }) => {
    const {trace} = useSelector((state) => state.questions)
    const result = useSelector((state) => state.result.result)
    const [checked, setChecked] = useState(undefined); 
    const [{ isLoading, serverError }] = useFetchQuestion();
    const questions = useSelector((state) => state.questions.queue[state.questions.trace])
    
    const dispatch = useDispatch();
    useEffect(()=>{
        console.log({trace, checked});
        dispatch(updateResult({trace,checked}))
    },[checked]) //second arg is needed in useeffect otherwise it will be infinite loop
    function onSelect(i) {
        onChecked(i);
        setChecked(i);
        // dispatch(updateResult({ trace, checked }));
    }

    if(isLoading) return<h3 className='text-light'>loading..</h3>
    if(serverError) return<h3 className='text-light'>{serverError||'Unknown Error'}</h3>
    
  return (
      <div className='questions'>
          <h2>{questions?.question}</h2>
          <ul key={questions?.id}>
              
              {questions?.options.map((q, i) => 
                  (<li key={i}>
                  <input type='radio'
                      value={false}
                      name='options'
                      onChange={()=>onSelect(i)}
                  id={`q${i}-option`}/>
                  <label htmlFor={`q${i}-option`}>{q}</label>
                  <div className={`check ${result[trace] === i ? 'checked' : ''}`}>
                      
                  </div>
              </li>)
              )}
              {/* <li>
                  <input type='radio'
                      value={false}
                      name='options'
                      onChange={onSelect}
                  id='q1-option'/>
                  <label htmlFor='q1-option'>Option</label>
                  <div className='checkc checked'>
                      
                  </div>
              </li> */}
         </ul>
    </div>
  )
}

export default Questions

