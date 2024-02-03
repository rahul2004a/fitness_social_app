const mongoose = require('mongoose');

const TaskSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    tasksId: [{ type: "String", unique: true }]
})

const Task = mongoose.model('Task', TaskSchema);

module.exports = Task;