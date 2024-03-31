import React from "react";
import Navbar from "./component/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Manager from "./component/Manager";
// import Table from "./component/table";
const App = () => {
  const routes = [
    {
      path: "/",
      element: <Manager />,
    },
    // {
    //   path: "/table",
    //   element: <Table />,
    // },
  ];
  return (
    <>
      {/* <h1 className='text-3xl text-red-600 underline'>Hello World</h1> */}
      <Navbar />
      <RouterProvider router={createBrowserRouter(routes)} />
    </>
  );
};
export default App;
