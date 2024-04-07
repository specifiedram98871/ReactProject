import React, { useEffect, useState } from 'react';
import { useFetchQuestion } from '../hooks/FetchQuestions';
import { useDispatch, useSelector } from 'react-redux';
import { updateResult } from '../hooks/setResult';

const Questions = ({ onChecked }) => {
    const { trace } = useSelector((state) => state.questions);
    const result = useSelector((state) => state.result.result);
    const [checked, setChecked] = useState(undefined);
    const [{ isLoading, serverError }] = useFetchQuestion();
    const questions = useSelector((state) => state.questions.queue[state.questions.trace]);
    
    const dispatch = useDispatch();

    useEffect(() => {
        console.log({ trace, checked });
        dispatch(updateResult({ trace, checked }));
    }, [checked]); // Second arg is needed in useEffect to avoid infinite loop.

    function onSelect(i) {
        onChecked(i);
        setChecked(i);
    }

    if (isLoading) return <h3 className='text-light'>Loading...</h3>;
    if (serverError) return <h3 className='text-light'>{serverError || 'Unknown Error'}</h3>;

    return (
        <div className=''>
            <h2>{questions?.question}</h2>
            <ul className=''>
                {questions?.options.map((q, i) => (
                    <li key={i} className='flex items-center mb-4'>
                        <input
                            type='radio'
                            value={false}
                            name='options'
                            id={`q${i}-option`}
                            onChange={() => onSelect(i)}
                        />
                        <label htmlFor={`q${i}-option`} className='ml-2'>{q}</label>
                        <div className={`check ml-2 ${result[trace] === i ? 'checked' : ''}`}></div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Questions;
