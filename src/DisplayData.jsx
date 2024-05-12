import { useEffect, useState } from "react"
import {productData} from './data'
import './DisplayData.css'

const DisplayData = () => {

    let username = ['ritesh', 'rinky', 'vivek', 'ritik', 'yogesh', 'deepak', 'mulkesh', 'sakshi', 'pawan']
    // let productData = []
    // // console.log(productData)


    return (
        <>
            <ul>
                {username.map((name, i) => {
                    return (
                        <li key={i}>{name}</li>
                    ) 
                })}
            </ul>
            <div className="container">
                {
                    productData.map((product, index) => {
                        return (
                            <div key={index} className="card">
                                <img src={product.image}/>
                                <h4>{product.title}</h4>
                                <p>{product.category}</p>
                                <p><strong>${product.price}</strong></p>
                            </div>
                        )

                    })
                }
            </div>
        </>
    )
}


export default DisplayData
{/* {
    username.map((name, i) => {
        return (
            <h3 key={i}> {name} </h3>
        )
    })
} */}