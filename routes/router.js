const express = require('express')
const router = express.Router()
const {getAllTasks,
    postTask,
    getSingleTask,
    patchTask,
    deleteTask} = require('../controllers/tasks')

router.route('/').get(getAllTasks).post(postTask)
router.route('/:id').get(getSingleTask).patch(patchTask).delete(deleteTask)

module.exports = {router}