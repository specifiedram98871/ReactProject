import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import '../style/App.css';
import Result from './Result';
import Quiz from './Quiz';
import Main from './Main';
import { CheckUserExist } from '../help/helper';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main/>,
  },
  {
    path : '/quiz',
    element:  <CheckUserExist><Quiz /></CheckUserExist>,
  },
  {
    path: '/result',
    element:  <CheckUserExist><Result /></CheckUserExist>,
  },
])
function App() {
  return (
    <div class='container mx-auto mt-8'>
      <RouterProvider router={router} />
      {/* <h2 class="text-blue-600 text-center text-4xl font-extrabold">Hello</h2> */}
    </div>
  );
}

export default App;
