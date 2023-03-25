import { Link } from "react-router-dom"

import { QuestionsBoard } from "../components/QuestionsBoard"

export const QuestionsBoardPage = () => {

    return (
        <>
            <Link to='/'>Back to Home</Link>
            <Link to='/scoreboard'>Team Scores</Link>
            <QuestionsBoard />
        </>
    )
}