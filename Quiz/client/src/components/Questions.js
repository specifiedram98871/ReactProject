import React, { useEffect, useState } from 'react'

import { useFetchQuestion } from '../hooks/FetchQuestions';
import { useSelector } from 'react-redux';


const Questions = ({onChecked}) => {
    const [checked, setChecked] = useState(undefined); 
    const [{ isLoading, apiData, serverError },setGetData] = useFetchQuestion();
  
    const  questions  = useSelector((state) => state.questions.queue[state.questions.trace])
    useEffect(()=>{
        // console.log(questions);
        
    })
    function onSelect(i) {
        
        onChecked(i)
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
                  <div className='check checked'>
                      
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

