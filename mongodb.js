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

    // db.collection('users').updateOne({
    //     _id: new ObjectID("606c555829e09174900216b8")
    // }, {
    //     $set: {
    //         name: "Sara"
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('users').updateOne({
    //     _id: new ObjectID("606c555829e09174900216b8")
    // }, {
    //     $inc: {
    //         age: 2 
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error), () => {
    //     console.log(error)
    // })

    db.collection('tasks').updateMany({
        completed: false
    }, {
        $set: {
            completed: true 
        }
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })

})   

