import React, { useState } from 'react';
import Questions from './Questions';
import { useSelector, useDispatch } from 'react-redux';
import { MoveNextQuestion, MovePreviousQuestion } from '../hooks/FetchQuestions';
import { PushAnswer } from '../hooks/setResult';
import { Navigate } from 'react-router-dom';

const Quiz = () => {
    const [check, setCheck] = useState(undefined);
    const result = useSelector((state) => state.result.result);
    const { queue, trace } = useSelector((state) => state.questions);
    const dispatch = useDispatch();
    
    function handlePrevious() {
        if (trace > 0) {
            dispatch(MovePreviousQuestion());
        }
    }
    
    function handleNext() {
        if (trace < queue.length) {
            dispatch(MoveNextQuestion());
            if (result.length <= trace) {
                dispatch(PushAnswer(check));
            }
        }
        setCheck(undefined);
    }

    function onChecked(check) {
        setCheck(check);
    }

    if (result.length && result.length >= queue.length) {
        return <Navigate to={'/result'} replace={true} />;
    } 

    return (
        <div className="container mx-auto mt-8">
            <h1 className="text-3xl text-center">Quiz Application</h1>
            
            <Questions onChecked={onChecked} />
            
            <div className="flex justify-between mt-4">
                {trace > 0 && (
                    <button className="btn" onClick={handlePrevious}>Previous</button>
                )}
                <button className="h-10 px-6 font-semibold rounded-md bg-black text-white" onClick={handleNext}>Next</button>
            </div>
        </div>
    );
};

export default Quiz;
