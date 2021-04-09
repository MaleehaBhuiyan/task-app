const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', { 
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})


const Task = mongoose.model('Task', {
    description: {
        type: String,
        require: true, 
        trim: true 
    }, 
    completed: {
        type: Boolean, 
        default: false 
    }
})

const taskOne = new Task({
    description: "Take a nap.",
})

taskOne.save().then((taskOne) => {
    console.log(taskOne)
}).catch((error) => {
    console.log(error)
})