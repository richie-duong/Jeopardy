import express from 'express';
import { db, connectToDb } from './database.js';
import cors from 'cors'

// Create the app object
const app = express();
app.use(express.json());
app.use(cors());

// Jeopardy questions board endpoint: Displays category labels
app.get('/questions_board', async (req, res) => {
    const result = await db.collection('jeopardy').findOne({ "feature": "questions_board" })
    res.json(result)
})

app.get('/question/:questionId', async (req, res) => {
    const questionsData = await db.collection('jeopardy').findOne({ "feature": "question" })
    res.json(questionsData)
})

app.get('/scoreboard', async (req, res) => {
    const result = await db.collection('jeopardy').findOne({ "feature": "scoreboard" })
    res.json(result)
})

app.post('/question/:questionId/update', async (req, res) => {
    const { teamName } = req.body
    const { points } = req.body
    const redir = {redirect: '/scoreboard'}

    if (teamName === 'blue_points') {
        await db.collection('jeopardy').updateOne({ "feature": "scoreboard" },
            { $inc: { blue_points: points } }
        )
    } else {
        await db.collection('jeopardy').updateOne({ "feature": "scoreboard" },
            { $inc: { red_points: points } }
        )
    }

    await db.collection('jeopardy').updateOne({ "feature": "questions_board" },
        { $inc: { completed_questions: 1 } }
    )
    res.json(redir)
})

connectToDb(() => {
    console.log('Successfully connected to MongoDB!')

    app.listen(8000, () => {
        console.log("Server is listening on port 8000")
    })
})


