import React, { useEffect } from 'react'
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
  useEffect(() => {
    console.log(flag);
  })

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
    <div className='container'>
      <h1>Quiz Application</h1>
      <div className='result flex-center'>
        <div className='flex'>
          <span className='username'>Username:</span>
          <span className='bold'>{userId}</span>
        </div>
          <div className='flex'>
          <span className='username'>Total Quiz points:</span>
          <span className='bold'>{ totalPoints}</span>
        </div>
          <div className='flex'>
          <span className='username'>Total Questions:</span>
          <span className='bold'>{queue.length}</span>
          </div>
          <div className='flex'>
          <span className='username'>Total Attempts:</span>
          <span className='bold'>{attempts}</span>
          </div>
          <div className='flex'>
          <span className='username'>Total Earn Points:</span>
          <span className='bold'>{earnPoints || 0}</span>
          </div>
          <div className='flex'>
          <span className='username'>Quiz Result</span>
          <span className='bold'>{ flag ?'Pass':'Fail'}</span>
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