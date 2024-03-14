import React, { useEffect, useState } from 'react'
import { getServerData } from '../help/helper'
const ResultTable = () => {
    const[data,setData] = useState([])
    useEffect(() => {
        getServerData(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/result`, (res) => setData(res));
    },[])
  return (
      <div>
          <table>
              <thead>
                  <tr>
                      <td>Name</td>
                      <td>Attempts</td>
                      <td>Earn Points</td>
                      <td>Result</td>
                  </tr>
              </thead>
              <tbody>
                  {!data ?? <div>No data</div>}
                  {
                      data.map((v, i) => {
                   return(       
                  <tr key={i} >
                      <td>{v.username}</td>
                      <td>{v.attempts}</td>
                      <td>{v.points}</td>
                      <td>{v.achieved}</td>
                  </tr>)
                      })
                  }
              </tbody>
          </table>
    </div>
  )
}

export default ResultTable