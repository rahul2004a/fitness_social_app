const express = require('express');
const router = express.Router();
const { addTask, getAllTask, removeTask } = require('../controllers/taskController.js');

router.post('/', addTask);
router.put('/:userId', removeTask);
router.get('/:userId', getAllTask);

module.exports = router;