import {useState} from 'react'
import { useEffect } from "react"

const DisplayFootball = () => {
 
    let [footBall, setFootBall] = useState({})

    useEffect(() => {
        fetch('https://jsonmock.hackerrank.com/api/football_matches?page=1')
        .then(response => response.json())
        .then(result => setFootBall(result.data))
    }, [])

    console.log(footBall)

    return (
        <>
            <h1>DisplayFootbal</h1>
            <table>
                <thead>
                    <tr>
                        <th>Competition</th>
                        <th>Year</th>
                        <th>Round</th>
                        <th>Team1</th>
                        <th>Team2</th>
                        <th>Team1Goal</th>
                        <th>Team2Goal</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        footBall?.map(ele => {
                            return (
                                <tr>
                                    <td>{ele.competition}</td>
                                    <td>{ele.year}</td>
                                    <td>{ele.round}</td>
                                    <td>{ele.team1}</td>
                                    <td>{ele.team2}</td>
                                    <td>{ele.team1goals}</td>
                                    <td>{ele.team2goals}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default DisplayFootball