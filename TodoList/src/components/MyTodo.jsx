import React from "react";

const MyTodos =(props)=>{
      
    const myArr = props.todos ?? [];
    return myArr.map((obj)=>{
    
        return(
            <>
            <h1>{obj.text}</h1>
            </>
        )
    })
}
export default MyTodos