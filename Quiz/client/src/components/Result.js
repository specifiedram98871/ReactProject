import React from 'react'
import { Link } from 'react-router-dom'
import ResultTable from './ResultTable';
import { useDispatch, useSelector } from 'react-redux';
import { resetAllAction } from '../redux/question_reducer';
import { resetResultAction } from '../redux/result_reducer';
import { attempts_Number ,earnPoints_Number, flagResult} from '../help/helper';
import { usePublishResult } from '../hooks/setResult';

const Result = () => {
  const dispatch = useDispatch();
  const { questions: { queue, answers }, result: { result, userId } } = useSelector(state => state);
  const attempts = attempts_Number(result);

  const totalPoints = queue.length * 10;
  const earnPoints = earnPoints_Number(result, answers, 10);
  const flag = flagResult(totalPoints, earnPoints);
  // store result in backend
  usePublishResult({ result, username: userId ,attempts,points:earnPoints,totalPoints,achieved:flag?"Pass":"Fail" });
  function handleStart() {
    dispatch(resetAllAction());
    dispatch(resetResultAction());
  }
  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-3xl font-bold mb-4'>Quiz Application</h1>
      <div className='result bg-gray-100 rounded p-4'>
        <div className='flex justify-between mb-2'>
          <span className='text-gray-600'>Username:</span>
          <span className='font-bold'>{userId}</span>
        </div>
        <div className='flex justify-between mb-2'>
          <span className='text-gray-600'>Total Quiz points:</span>
          <span className='font-bold'>{ totalPoints}</span>
        </div>
        <div className='flex justify-between mb-2'>
          <span className='text-gray-600'>Total Questions:</span>
          <span className='font-bold'>{queue.length}</span>
        </div>
        <div className='flex justify-between mb-2'>
          <span className='text-gray-600'>Total Attempts:</span>
          <span className='font-bold'>{attempts}</span>
        </div>
        <div className='flex justify-between mb-2'>
          <span className='text-gray-600'>Total Earn Points:</span>
          <span className='font-bold'>{earnPoints || 0}</span>
        </div>
        <div className='flex justify-between mb-2'>
          <span className='text-gray-600'>Quiz Result</span>
          <span className='font-bold'>{ flag ? 'Pass' : 'Fail'}</span>
        </div>
      </div>
      <div className='start mt-4'>
        <Link className='btn bg-blue-500 text-white py-2 px-4 rounded inline-block' to={'/'}  onClick={handleStart}>Restart</Link>
      </div>
      <div className='container'>
        <ResultTable/>
      </div>
    </div>
  )
}

export default Result;
