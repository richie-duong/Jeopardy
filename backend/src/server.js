import express from 'express';
import { MongoClient } from 'mongodb';

// Create the app object
const app = express();

app.use(express.json());


app.get('/questions/:questionRow/:questionId', (req, res) => {

    const { questionRow } = req.params;
    const { questionId } = req.params;

    res.send(`Here is the question id: ${questionId}`)
    res.json()
})


app.listen(8000, () => {
    console.log("Server is listening on port 8000")
})

