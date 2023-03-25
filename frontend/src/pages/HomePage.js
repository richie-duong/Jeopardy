import { Link } from "react-router-dom"

export const HomePage = () => {

    return (
        <div>
            <h1>JEOPARDY!</h1>
            <Link to= "/questions_board">Start Game </Link><br/>
            <Link to= "/edit">Edit Questions</Link>
        </div>
        
    )
}
