const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name : {
        type : String,
        required : [true, 'msg']
    },
    completed : {
        type : Boolean,
        default : false
    }
})

const task = mongoose.model('task',schema)

module.exports = task