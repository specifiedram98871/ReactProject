import Copyright from "./components/copyrite"
import Inspiration from "./components/inspiration"
export default function App() {
  return (
    <>
      Hello world!
      <Inspiration>
        <Copyright year={2000} />
    </Inspiration>
    </>
  )
}