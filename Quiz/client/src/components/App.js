import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import '../style/App.css';
import Result from './Result';
import Quiz from './Quiz';
import Main from './Main';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main/>,
  },
  {
    path : '/quiz',
    element: <Quiz />,
  },
  {
    path: '/result',
    element: <Result />,
  },
])
function App() {
  return (
    <>
    <RouterProvider router={router} />
    </>
  );
}

export default App;
