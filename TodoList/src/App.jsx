import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InputForm from './components/Child'
import Header from './components/Header'
import MyTodos from './components/MyTodo'

function App() {
  

  return (
    <> 
      <Header/>
      <InputForm />
      <MyTodos/>
    </>
  )
}

export default App
