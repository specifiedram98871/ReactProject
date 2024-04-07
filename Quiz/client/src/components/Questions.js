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
        <div className='bg-white p-6 rounded-lg shadow-md'>
            <h2 className='text-xl font-semibold mb-4'>{questions?.question}</h2>
            <ul>
                {questions?.options.map((q, i) => (
                    <li key={i} className='flex items-center mb-4'>
                        <input
                            type='radio'
                            value={false}
                            name='options'
                            id={`q${i}-option`}
                            onChange={() => onSelect(i)}
                            className='mr-2'
                        />
                        <label htmlFor={`q${i}-option`}>{q}</label>
                        {result[trace] === i && <div className='bg-green-500 w-4 h-4 rounded-full ml-2'></div>}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Questions;
