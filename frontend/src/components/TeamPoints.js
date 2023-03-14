import { useState, useEffect } from 'react'

export const TeamPoints = ({ earnedBluePoints, earnedRedPoints }) => {

    const [ blueTeamPoints, setBlueTeamPoints ] = useState(0);
    const [ redTeamPoints, setRedTeamPoints ] = useState(0);

    useEffect(() => {
        setBlueTeamPoints(blueTeamPoints + earnedBluePoints)
        setRedTeamPoints(redTeamPoints + earnedRedPoints)
    }, [earnedBluePoints, earnedRedPoints, blueTeamPoints, redTeamPoints])

    return (
        <>
            <div>
                {`BLUE TEAM: ` + blueTeamPoints}
            </div>
            <div>
                {`RED TEAM: ` + redTeamPoints}
            </div>
        </>
    )
}