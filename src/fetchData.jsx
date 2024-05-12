import axios from 'axios'
import { useEffect } from 'react'

const FetchData = () => {

    // fetch('https://fakestoreapi.com/products')
    // .then(response => response.json())
    // .then(result => console.log(result))
    // .catch(error => console.log(error))

    axios.get('https://fakestoreapi.com/products')
    .then(response => console.log(response))
    .catch(error => console.log(error))


    return (
        <h1>fetchData</h1>
    )
}

export default FetchData