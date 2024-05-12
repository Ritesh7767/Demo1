import { useEffect, useState } from "react"
import Form from "./Form"
import DisplayData from "./DisplayData"
import FetchData from "./fetchData"
import DisplayFootball from "./DisplayFootball"

function App() {

  // let [counter, setCounter] = useState(0)
  // let [fetchData, setFetchData] = useState(0)
  
  // console.log('hello world')
  // let [form, setform] = useState(true)
  
  // useEffect(() => {}, [])
  // console.log("rerender")

  // useEffect(() => {

  //   fetch('https://fakestoreapi.com/products')
  //   .then(response => response.json())
  //   .then(result => console.log(result))
  //   .catch(error => console.log(error))

  // },[fetchData])
  
  return (
    <>

      {/* <h1>Couter Value :- {counter}</h1>
      <button onClick={() => setCounter(prev => prev + 1)} >Update counter</button><br />
      <button onClick={() => setFetchData(prev => prev + 1)} >fetchData</button> */}
      {/* {
        form ? <Form/> : <DisplayData/>
      }

      <button onClick={() => setform(!form)}>Change Component</button> */}

      {/* <Form/> */}
      {/* <DisplayData/> */}
      {/* <FetchData/> */}
      <DisplayFootball/>
    </>
  )
}

export default App
