import React from 'react'
import { Link } from 'react-router-dom'
import ResultTable from './ResultTable';
import { useDispatch } from 'react-redux';
import { resetAllAction } from '../redux/question_reducer';
import { resetResultAction } from '../redux/result_reducer';

const Result = () => {
  const dispatch = useDispatch();
  function handleStart() {
    dispatch(resetAllAction());
    dispatch(resetResultAction());
  }
  return (
    <div className='container'>
      <h1>Quiz Application</h1>
      <div className='result flex-center'>
        <div className='flex'>
          <span className='username'>Username</span>
          <span className='bold'>Makyuri</span>
        </div>
          <div className='flex'>
          <span className='username'>Total Quiz points:</span>
          <span className='bold'>90</span>
        </div>
          <div className='flex'>
          <span className='username'>Total Questions:</span>
          <span className='bold'>05</span>
          </div>
          <div className='flex'>
          <span className='username'>Total Attempts:</span>
          <span className='bold'>70</span>
          </div>
          <div className='flex'>
          <span className='username'>Total Earn Points:</span>
          <span className='bold'>30</span>
          </div>
          <div className='flex'>
          <span className='username'>Quiz Result</span>
          <span className='bold'>Pass</span>
          </div>
      </div>
      <div className='start'>
        <Link className='btn' to={'/'}  onClick={handleStart}>Restart</Link>
      </div>
      <div className='container'>
        <ResultTable/>
      </div>
    </div>
  )
}

export default Result