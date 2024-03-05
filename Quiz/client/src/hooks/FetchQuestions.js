import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import * as Action from '../redux/question_reducer';
import data from "../database/data";
//  fetch question hook to fetch api data and set value to store
export const useFetchQuestion = () => {
    const dispatch = useDispatch(); 
    const [getData, setGetData] = useState({ isLoading: false, apiData: [], srverError: null });
    useEffect(() => {
        setGetData(prev => ({ ...prev, isLoading: true }));
        // async function fetch backend data
        (async () => {
            try {
                let question =  await data; 
                if (question.length > 0) {
                    setGetData(prev => ({ ...prev, isLoading: false }));
                    setGetData(prev => ({ ...prev, apiData: question }));
                    // dispatch an action
                    dispatch(Action.startExamAction(question));
                } else {
                    throw new Error("No question available");
                }
            }
            catch (error) {
                setGetData(prev => ({ ...prev, isLoading: false }));
                setGetData(prev => ({ ...prev, serverError: error }));
            }
        })();
    }, [dispatch])
    return[getData, setGetData]
}

// move action dispatch function

export const MoveNextQuestion = () =>async(dispatch)=> {
    try {
        dispatch(Action.moveNextAction())
    }
    catch (error) {
        
    }
}
export const MovePreviousQuestion = () =>async(dispatch)=> {
    try {
        dispatch(Action.movePreviousAction())
    }
    catch (error) {
        
    }
}