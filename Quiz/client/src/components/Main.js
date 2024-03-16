import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { setUserId } from '../redux/result_reducer'
const Main = () => {
    const inputRef = useRef(null);
    const dispatch = useDispatch();
    function startQuiz() {
        if (inputRef.current?.value) {
            dispatch(setUserId(inputRef.current.value));
        }
    }
  return (
  <div class="flex flex-col items-center space-y-8">
    <h1 class="text-4xl mb-8 text-green-600 font-semibold underline inline-block animate-bounce delay-200">Quiz Application</h1>
    <ol class="w-full max-w-screen-sm bg-white rounded-lg shadow-md">
        <li class="border-b border-gray-200 p-4">You will be asked 10 questions one after another.</li>
        <li class="border-b border-gray-200 p-4">10 points will be awarded for each correct answer</li>
        <li class="border-b border-gray-200 p-4">Each question has 3 options</li>
        <li class="border-b border-gray-200 p-4">You can review and change answers</li>
        <li class="border-b border-gray-200 p-4">The result will be declared at the end</li>
    </ol>
    <form id="form" class="w-full max-w-screen-sm">
        <input class="border border-gray-300 rounded-md px-4 py-2 w-full mb-8 focus:outline-none focus:border-green-600" ref={inputRef} type="text" placeholder="Username" id="submit" />
    </form>
    <div class="start">
        <Link class="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-colors duration-300" to="/quiz" onClick={startQuiz}>Start Quiz</Link>
    </div>
</div>


  )
}

export default Main