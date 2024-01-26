const express = require('express')
const router = express.Router()
const {getTareas, createTask, updateTask, deleteTask} = require('../controllers/tasksControles')


router.route('/').get(getTareas).post(createTask)
/*
esto es lo mismo que la linea de arriba
router.get('/', getTareas)

router.post('/', createTask)


router.put('/:id', updateTask)

router.delete('/:id', deleteTask)
es lo mismo que la de abajo
*/

router.route('/:id').delete(deleteTask).put(updateTask)

module.exports = router