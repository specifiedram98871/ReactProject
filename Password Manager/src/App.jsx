import React from "react";
import Navbar from "./component/Navbar";
import Manager from "./component/Manager";
const App = () => {
  return (
    <div>
      {/* <h1 className='text-3xl text-red-600 underline'>Hello World</h1> */}
      <Navbar />
      <Manager />
    </div>
  )
}
export default App;