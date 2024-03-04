import React, { useEffect, useState } from 'react'
import data from '../database/data'
const Questions = () => {
    const [checked, setChecked] = useState(undefined); 
    const question = data[0];
    useEffect(()=>{
        console.log(question);
    })
    function onSelect() {
        
        console.log('radio button changed');
    }
  return (
      <div className='questions'>
          <h2>{question.question}</h2>
          <ul key={question.id}>
              
              {question.options.map((q, i) => 
                  (<li key={i}>
                  <input type='radio'
                      value={false}
                      name='options'
                      onChange={onSelect}
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