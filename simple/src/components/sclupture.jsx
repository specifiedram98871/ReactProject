import sculptureList from './data';
import React, { useState } from 'react'

 const Sclupture = () => {
    const [index, setIndex] = useState(0);
    const [showMore,setShowMore] = useState(false); // [showmore]
    function handleClick() {
        setIndex(index + 1);
     }
     
    function handleShowMore() {
        setShowMore(!showMore);
    }
    let sculpture = sculptureList[index];
  return (
      <div className='flex flex-col justify-center items-center'>
          <button className='py-2 px-5 bg-violet-500 text-white font-semibold rounded-full' onClick={handleClick}>Next</button> 
          <h1 className='text-2xl p-5'><i>
              {sculpture.name}
          </i>
              by {sculpture.artist}
          </h1>
          <button className='py-2 px-5 bg-violet-500 text-white font-semibold rounded-full' onClick={handleShowMore}>{showMore ? 'Hide' : 'Show'} details</button>
          {showMore && <p className='text-xl p-5 font-normal italic'>{sculpture.description}</p>
          }
          <h3><img className='rounded-full' src={sculpture.url} alt={sculpture.alt} /></h3>

    </div>
  )
}

export default Sclupture;