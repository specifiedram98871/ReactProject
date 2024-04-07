// import { useEffect } from "react";
import { postServerData } from "../help/helper";
import * as Action from "../redux/result_reducer";

export const PushAnswer = (result) => async (dispatch) => {
    try {
        await dispatch(Action.pushResultAction(result));
    } catch (error) {
        console.log(error);
    }
}

export const updateResult = (index )=> async(dispatch) => {
    try {
        dispatch(Action.updateResultAction(index));
    } catch (error) {
        console.log(error);
    }
}

// insert user data
export const usePublishResult = (resultData) => {
    const { result, username } = resultData;
    (async () => {
        try {
            if(result !== [] && !username) throw new Error("username not found");
            await postServerData(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/result`, resultData, (data) => data);
        } catch (error) {
            console.log(error);
        }
    })();
}
// export const usePublishResult = (resultData) => {
//     useEffect(() => {
//         const publishData = async () => {
//             const { result, username } = resultData;
//             try {
//                 if (result.length !== 0 && username) {
//                     await postServerData(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/result`, resultData);
//                 } else {
//                     throw new Error("Username not found or result is empty.");
//                 }
//             } catch (error) {
//                 console.log(error);
//             }
//         };

//         publishData();
//     }, [resultData]);
// };
