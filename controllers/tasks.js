const task = require('../models/schema')
const asyncWrapper = require('../middleware/async')
const {createCustomError} = require('../errors/custom_Error')

const getAllTasks = asyncWrapper(async (req,res)=>{
        const tasks = await task.find({})
        res.status(200).json({tasks})
})
const postTask = asyncWrapper( async (req,res)=>{
        const Task = await task.create(req.body) 
        res.status(200).json({Task})
})
const getSingleTask = asyncWrapper( async (req,res,next)=>{
        const {id : task_id} = req.params
        const tasks = await task.findOne({_id:task_id})
        if(!tasks){
            return next(createCustomError(`no task with id : ${task_id}`, 404))
        }
        res.status(200).json({tasks})
})
const patchTask = asyncWrapper( async (req,res,next)=>{
        const {id : task_id} = req.params
        const tasks = await task.findOneAndUpdate({_id:task_id}, req.body,{
            new: true,
            runValidators: true
        })
        if(!tasks){
            return next(createCustomError(`no task with id : ${task_id}`, 404))
        }
        res.status(200).json({tasks})
})
const deleteTask = asyncWrapper( async (req,res,next)=>{  
        const {id : task_id} = req.params
        const tasks = await task.findOneAndRemove({_id:task_id})
        if(!tasks){
            return next(createCustomError(`no task with id : ${task_id}`, 404))
        }
        res.status(200).json({tasks})
})

module.exports = {
    getAllTasks,
    postTask,
    getSingleTask,
    patchTask,
    deleteTask
}