import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';

export const QuestionPage = () => {

    const [questions, setQuestions] = useState({ answer: [], value: [], question: [] })
    const [showAnswer, setShowAnswer] = useState(false)
    const [winningTeam, setWinningTeam] = useState('')

    const { questionId } = useParams()

    useEffect(() => {
        const getQuestion = async () => {
            const response = await axios.get('http://localhost:8000/question/:questionId')
            const questionData = response.data
            setQuestions(questionData)
        }
        getQuestion()
    }, [questionId])

    const updateGame = async () => {
        await axios.post('http://localhost:8000/question/:questionId/update', {
            teamName: winningTeam,
            points: questions.value[questionId - 1]
        }).then((redirect) => {window.location.replace('/scoreboard')})
    }


    return (
        <div>
            {!showAnswer ?
                <>
                    <h1>{questions.question[questionId - 1]}</h1>
                    <button>Start Timer</button>
                    <button onClick={() => setShowAnswer(true)}>REVEAL ANSWER</button>
                </>
                :
                <>
                    <h1>{questions.answer[questionId - 1]}</h1>
                    <h3>Award points to:</h3>
                    <label>
                        <input type="radio" name="award" onChange={() => setWinningTeam('blue_points')} />
                        Blue Team
                    </label>
                    <label>
                        <input type="radio" name="award" onChange={() => setWinningTeam('red_points')} />
                        Red Team
                    </label>
                    <button onClick={() => updateGame()}>Submit</button>
                </>
            }
        </div>

    )
}