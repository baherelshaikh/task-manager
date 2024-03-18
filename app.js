const express = require('express')
const app = express()
const {router}  = require('./routes/router')
const {connect} = require('./DB/db')
const notFound = require('./middleware/notFound')
const errorHandler = require('./middleware/errorHandler')
require('dotenv').config()
const port = process.env.PORT || 5000;

//Middleware
app.use(express.static('./public'))
app.use(express.json())

// routes
app.use('/api/v1/tasks', router)

app.use(notFound)
app.use(errorHandler)

const connection = async ()=>{
    try{
        await connect(process.env.MONGO_URL)
        app.listen(port,()=>console.log('Server is listening on port 5000 ...'))
    }catch(err){
        console.log(err)
    }
}
connection()

