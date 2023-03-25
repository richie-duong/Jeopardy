import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export const QuestionsBoard = () => {

    const [questionsBoard, setQuestionsBoard] = useState({ categories: [], lock: [], buttonLabel: [], completed_questions: null });

    useEffect(() => {
        const loadQuestionBoard = async () => {
            const response = await axios.get('http://localhost:8000/questions_board')
            const boardData = response.data
            setQuestionsBoard(boardData)
        }
        loadQuestionBoard()
    }, [])

    return (
        <div className='questionsBoard'>
            {questionsBoard.completed_questions === 30 ? <h3>DONE</h3> :
                <table>
                    <tbody>
                        <tr>
                            {questionsBoard.categories.map((category, index) => (<th key={index}>{category}</th>))}
                        </tr>
                        <tr>
                            {questionsBoard.buttonLabel.slice(0,6).map((button, index) => (
                                !questionsBoard.lock[index] ? <td key={index}><Link to={`/question/${(index + 1)}`}>{button}</Link></td>
                                : <td key={index}>--</td>))}
                        </tr>
                        <tr>
                        {questionsBoard.buttonLabel.slice(6,12).map((button, index) => (
                                !questionsBoard.lock[index + 7] ? <td key={index+7}><Link to={`/question/${(index + 7)}`}>{button}</Link></td>
                                : <td key={index}>--</td>))}
                        </tr>
                        <tr>
                        {questionsBoard.buttonLabel.slice(12,18).map((button, index) => (
                                !questionsBoard.lock[index + 13] ? <td key={index}><Link to={`/question/${(index + 13)}`}>{button}</Link></td>
                                : <td key={index}>--</td>))}
                        </tr>
                        <tr>
                        {questionsBoard.buttonLabel.slice(18,24).map((button, index) => (
                                !questionsBoard.lock[index + 19] ? <td key={index}><Link to={`/question/${(index + 19)}`}>{button}</Link></td>
                                : <td key={index}>--</td>))}
                        </tr>
                        <tr>
                        {questionsBoard.buttonLabel.slice(24,30).map((button, index) => (
                                !questionsBoard.lock[index + 25] ? <td key={index}><Link to={`/question/${(index + 25)}`}>{button}</Link></td>
                                : <td key={index}>--</td>))}
                        </tr>
                    </tbody>
                </table>
            }
        </div>
    )
}