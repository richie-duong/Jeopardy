import { useState, useEffect } from 'react'

import { TeamPoints } from '../components/TeamPoints';

export const QuestionPage = ({value, question, choices, answer}) => {

    const [ showAnswer, setShowAnswer ] = useState(false);

    useEffect(() => {

    },[showAnswer])



    return (
        <>
            {!showAnswer ? 
                (<h1>{question}</h1>) 
                : (<h1>{answer}</h1>)
            }
            
            {!showAnswer ? 
                (<button onClick={setShowAnswer(true)}>Reveal Answer</button>)
                : (<h3>Award Point To:</h3> +
                    <button onClick={<TeamPoints earnedBluePoints={0} earnedRedPoints={0}/>}>Blue Team</button> +
                    <button onclick={<TeamPoints earnedBluePoints={0} earnedRedPoints={0}/>}>Red Team</button> )
            }

            <TeamPoints />
        </>
    )
}