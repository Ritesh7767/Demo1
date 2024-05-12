import { useEffect, useState } from "react"
import Form from "./Form"
import DisplayData from "./DisplayData"
import FetchData from "./fetchData"

function App() {

  let [counter, setCounter] = useState(0)
  
  fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.log(error))

  // console.log('hello world')
  // let [form, setform] = useState(true)
  
  useEffect(() => {}, [])

  return (
    <>

      <h1>Couter Value :- {counter}</h1>
      <button onClick={() => setCounter(prev => prev + 1)} >Update counter</button>



      {/* {
        form ? <Form/> : <DisplayData/>
      }

      <button onClick={() => setform(!form)}>Change Component</button> */}

      {/* <Form/>
      <DisplayData/> */}
      {/* <FetchData/> */}
    </>
  )
}

export default App
