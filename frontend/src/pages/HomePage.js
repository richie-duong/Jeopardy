import { Link } from "react-router-dom"

export const HomePage = () => {

    return (
        <>
            <h1>JEOPARDY!</h1>
            <Link to= "/questions">Start Game </Link><br/>
            <Link to= "/edit">Edit Questions</Link>
        </>
        
    )
}
