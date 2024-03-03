import React, { useState } from 'react'

const Questions = () => {
    const[checked , setChecked] = useState(undefined);  
    function onSelect() {
        
        console.log('radio button changed');
    }
  return (
      <div className='questions'>
          <h2>Simple Question 1</h2>
          <ul>
              <li>
                  <input type='radio'
                      value={true}
                      name='options'
                      onChange={onSelect}
                  id='q1-option'/>
                  <label htmlFor='q1-option'>Option</label>
                  <div className='check'>
                      
                  </div>
              </li>
         </ul>
    </div>
  )
}

export default Questions