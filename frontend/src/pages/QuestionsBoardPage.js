//import { useState, useEffect } from 'react'
import { Link } from "react-router-dom" 

import { QuestionCategories } from "../components/QuestionCategories"
import { QuestionButton } from "../components/QuestionButton"
import { TeamPoints } from "../components/TeamPoints"

export const QuestionsBoardPage = () => {

    //const [ question, setQuestion ] = useState([])

    /*useEffect (()=> {
        const retrieveQuestions = async () => {
            
        }
        },[])*/

    return (
        <>
            <Link to="/">Return Home</Link>
            <h1>Welcome to Jeopardy!</h1>
            <div>
                <QuestionCategories name={`Category 1`}/>
                <QuestionButton value={200} lock={false} questionRow={"200_questions"} questionId={"1"} />
                <QuestionButton value={200} lock={false} questionRow={"200_questions"} questionId={"2"} />
                <QuestionButton value={200} lock={false} questionRow={"200_questions"} questionId={"3"} />
                <QuestionButton value={200} lock={false} questionRow={"200_questions"} questionId={"4"} />
                <QuestionButton value={200} lock={false} questionRow={"200_questions"} questionId={"5"} />
            </div><br/>
            <div>
                <QuestionCategories name={`Category 2`}/>
                <QuestionButton value={400} lock={false} questionRow={"400_questions"} questionId={"1"} />
                <QuestionButton value={400} lock={false} questionRow={"400_questions"} questionId={"2"} />
                <QuestionButton value={400} lock={false} questionRow={"400_questions"} questionId={"3"} />
                <QuestionButton value={400} lock={false} questionRow={"400_questions"} questionId={"4"} />
                <QuestionButton value={400} lock={false} questionRow={"400_questions"} questionId={"5"} />
            </div><br/>
            <div>
                <QuestionCategories name={`Category 3`}/>
                <QuestionButton value={800} lock={false} questionRow={"800_questions"} questionId={"1"} />
                <QuestionButton value={800} lock={false} questionRow={"800_questions"} questionId={"2"} />
                <QuestionButton value={800} lock={false} questionRow={"800_questions"} questionId={"3"} />
                <QuestionButton value={800} lock={false} questionRow={"800_questions"} questionId={"4"} />
                <QuestionButton value={800} lock={false} questionRow={"800_questions"} questionId={"5"} />
            </div><br/>
            <div>
                <QuestionCategories name={`Category 4`}/>
                <QuestionButton value={1000} lock={false} questionRow={"1000_questions"} questionId={"1"} />
                <QuestionButton value={1000} lock={false} questionRow={"1000_questions"} questionId={"2"} />
                <QuestionButton value={1000} lock={false} questionRow={"1000_questions"} questionId={"3"} />
                <QuestionButton value={1000} lock={false} questionRow={"1000_questions"} questionId={"4"} />
                <QuestionButton value={1000} lock={false} questionRow={"1000_questions"} questionId={"5"} />
            </div><br/>
            <div>
                <QuestionCategories name={`Category 5`}/>
                <QuestionButton value={2000} lock={false} questionRow={"2000_questions"} questionId={"1"} />
                <QuestionButton value={2000} lock={false} questionRow={"2000_questions"} questionId={"2"} />
                <QuestionButton value={2000} lock={false} questionRow={"2000_questions"} questionId={"3"} />
                <QuestionButton value={2000} lock={false} questionRow={"2000_questions"} questionId={"4"} />
                <QuestionButton value={2000} lock={false} questionRow={"2000_questions"} questionId={"5"} />
            </div>

            <TeamPoints />
            
        </>
    )
}