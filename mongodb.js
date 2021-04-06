// Testing 

// CRUD -> create, update, read, delete

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database')
    }
    
    const db = client.db(databaseName)

    db.collection('tasks').findOne({ _id: new ObjectID("606c5e1feaec6276a108364b") }, (error, task) => {
        if(error) {
            return console.log("Counld not fetch.")
        }
        return console.log(task)
    })

    db.collection('tasks').find({ completed:false }).toArray((errors, tasks) => {
        if(error) {
            return console.log("Could not fetch.")
        }
        return console.log(tasks)
    })


})   

