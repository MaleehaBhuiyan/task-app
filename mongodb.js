// Testing 

// CRUD -> create, update, read, delete

const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database')
    }
    
    const db = client.db(databaseName)

    // db.collection('users').insertOne({
    //     name: 'Maleeha',
    //     age: 21
    // }, (error, result) => {
    //     if(error){
    //         return console.log("Unable to insert user")
    //     }

    //     console.log(result.ops)
    // })


//     db.collection('users').insertMany([
//         {
//             name: 'Sadeyah',
//             age: 19
//         },
//         {
//             name: 'Jose',
//             age: 24
//         }
       
//     ], (error,result) => {
//         if(error){
//             return console.log("Unable to insert users.")
//         }
//         console.log(result.ops)
//     })

    db.collection('tasks').insertMany([
        {
            description: "Brush teeth.",
            completed: true
        },
        {
            description: "Brush hair.",
            completed: false
        },
        {
            description: "Eat breakfast.",
            completed: true
        }
    ], (error, result) => {
        if(error) {
            return console.log("Data unable to be inserted")
        }
        else {
            console.log(result.ops)
        }
    })
})   

