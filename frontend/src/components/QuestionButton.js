import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export const QuestionButton = ({value, lock, questionRow, questionId}) => {
    const [isButtonLocked, setIsButtonLocked] = useState(false);

    useEffect(() => {

        lock ? setIsButtonLocked(lock) : setIsButtonLocked(false)

    }, [lock])

    return (
        <div className="questionButton">
            {!isButtonLocked ?
                (<Link to={`/${questionRow}/${questionId}`}>{value}</Link>)
                : (<p>{value}</p>)
            }

        </div>
    )
}