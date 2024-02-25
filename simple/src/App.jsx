import Copyright from "./components/copyrite"
import Inspiration from "./components/inspiration"
import Fancy from "./components/fancy"
import Sclupture from "./components/sclupture"
export default function App() {
  return (
    <div className="flex flex-col max-w-7xl bg-slate-300 mx-auto max-h-screen">
      <Fancy className="text-3xl text-black" title text="Get Inspired"/>
      <Inspiration>
        <Copyright year={2000} />
      </Inspiration>
      <Sclupture />
    </div>
  )
}