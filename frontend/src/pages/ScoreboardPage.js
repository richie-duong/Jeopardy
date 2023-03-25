import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export const ScoreboardPage = () => {

    const [score, setScore] = useState({ blue_points: null, red_points: null })

    useEffect(() => {
        const getScores = async () =>{
            const response = await axios.get('http://localhost:8000/scoreboard')
            const teamScores = response.data
            setScore(teamScores)
        }
        getScores()
    }, [])


    return (
        <>
            <h2>BLUE TEAM:</h2>
                <h3 className='points'>${(score.blue_points)}</h3>
            <h2>RED TEAM:</h2>
                <h3 className='points'>${(score.red_points)}</h3>
            <Link to='/questions_board'>Continue</Link>
        </>
    )

}