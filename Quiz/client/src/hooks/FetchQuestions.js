import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import * as Action from '../redux/question_reducer';
// import data, { answers } from "../database/data";
import { getServerData } from "../help/helper"; // getServerData
//  fetch question hook to fetch api data and set value to store
export const useFetchQuestion = () => {
    const dispatch = useDispatch(); 
    const [getData, setGetData] = useState({ isLoading: false, apiData: [], srverError: null });
    useEffect(() => {
        setGetData(prev => ({ ...prev, isLoading: true }));
        // async function fetch backend data
        (async () => {
            try {
                // let questions = await data; 
               const[{question , answers}] = await getServerData(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/questions`,(data)=>data);
                // const q = await getServerData('http://localhost:5000/api/questions');
                // const[{question , answers}] = q;
            
                console.log({question , answers});
                if (question.length > 0) {
                    setGetData(prev => ({ ...prev, isLoading: false })); 
                    setGetData(prev => ({ ...prev, apiData:  question }));
                    // dispatch an action
                    dispatch(Action.startExamAction({ question:question, answers}));
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