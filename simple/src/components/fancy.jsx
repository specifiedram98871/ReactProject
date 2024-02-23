export default function Fancy({title, text}) {
  return title
    ? <h1 className='text-3xl text-center my-8 font-bold underline text-sky-500'>{text}</h1>
    : <h3 className='fancy cursive text-4xl font-semibold text-lime-200 m-5'>{text}</h3>
}
