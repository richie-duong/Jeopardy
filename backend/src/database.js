import { MongoClient } from 'mongodb'

let db

async function connectToDb(cb) {
    const client = new MongoClient('mongodb+srv://admin:admin@richiesblog.8s2m2no.mongodb.net/?retryWrites=true&w=majority')
    await client.connect()
    db = client.db('jeopardy')
    cb()
}

export {
    db,
    connectToDb
}