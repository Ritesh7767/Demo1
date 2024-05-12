import { useState } from "react"

const Form = () => {

    // let [username , setUsername] = useState('')
    // let [password , setPassword] = useState('')

    let [userData, setUserData] = useState({
        username : '',
        password : '',
        hobbie : ''
    })

    let [finalData, setFinalData] = useState([])

    console.log(finalData)
    console.log(userData)
    const handleSubmit = event => {
        event.preventDefault()
        // setFinalData(prev => {
        //     return [...prev , userData]
        // })
        setFinalData(previous => {
            return [...previous, userData]
        })
        setUserData({
            username : '',
            password : '',
            hobbie : ''
        })
    }

    const handleChange = event => {
        // console.log(event.target.name)
        // console.log(event.target.value)
        setUserData((previous) => {
            return {...previous, [event.target.name] : event.target.value }
        } )
    }

    // let username = {
    //     ritesh : 'ritesh',
    //     ritesh : 'ritik'
    // }

    // console.log(username.ritesh)

    // const handleUsername = event => {
    //     console.log(event.target.value)
    //     setUsername(event.target.value)
    // }

    // const handlePassword = event => {
    //     setPassword(event.target.value)
    // }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Enter your username</label><br />
                <input type="text" placeholder="Enter your username here" name="username" onChange={event => handleChange(event)} value={userData.username} /><br />
                <label htmlFor="">Enter your password</label><br />
                <input type="text" placeholder="Enter your password" name="password" onChange={event => {handleChange(event)}} value={userData.password} /><br />
                <label htmlFor="">Enter your hobbie</label><br />
                <input type="text" placeholder="Enter your hobbie here" name="hobbie" onChange={event => handleChange(event)} value={userData.hobbie} /><br/>
                <input type="submit" />
            </form>
            <h1>Username :- {userData.username} </h1>
            <h1>Password :- {userData.password} </h1>
            <h1>hobbie :- {userData.hobbie} </h1>
        </>
    )
}

export default Form