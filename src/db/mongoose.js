const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', { 
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

const User = mongoose.model('User', {
    name: { 
        type: String,
        required: true,
        trim: true  
    }, 
    age: { 
        type: Number, 
        default: 0,
        validate(value){
            if(value < 0){
                throw new Error('Age must be a positive number.')
            }
        }
    },
    email: {
        type: String,
        required: true, 
        trim: true,
        lowercase: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is invalid.')
            }
        }
    },
    password: {
        type: String, 
        required: true, 
        trim: true,
        minLength: 7,
        validate(value){
             if(value.includes('password')){
                throw new Error('Password cannot contain the word "password".')
            }
        }, 

    }
})

// const me = new User({
//     name: "Molly ", 
//     email: "MoLLy123@gmail.com  ",
//     password: "  himYnAME  "
// })

// me.save().then((me) => {
//     console.log(me)
// }).catch((error) => {
//     console.log("ERROR", error)
// })


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