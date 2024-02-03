const asyncHandler = require('express-async-handler');
const Task = require('../models/TaskModel');

const addTask = asyncHandler(async (req, res) => {
    const { userId, taskId } = req.body;

    if (!taskId)
        throw new Error("Invalid task");

    const existingTask = await Task.findOne({ userId });

    if (!existingTask) {

        const taskData = await Task.create({
            userId,
            tasksId: [taskId],
        });

        res.status(200).json({
            _id: taskData.id,
            userId: taskData.userId,
            taskId: taskData.tasksId[0],
        });
    } else {
        existingTask.tasksId.push(taskId);
        await existingTask.save();

        res.status(200).json({
            _id: existingTask.id,
            userId: existingTask.userId,
            taskId: taskId,
        });
    }
});

const getAllTask = asyncHandler(async (req, res) => {
    const { userId } = req.params;

    const user = await Task.findOne({ userId: userId });

    if (!user) {
        res.status(404).json({ message: "No tasks created for the user" });
    } else {
        res.status(200).json({
            tasksId: user.tasksId
        });
    }
});

const removeTask = asyncHandler(async (req, res) => {
    const { userId } = req.params;
    const { taskId } = req.body;

    if (!userId || !taskId) {
        res.status(404);
        throw new Error("Invalid task or User Id");
    }

    const user = await Task.findOneAndUpdate(
        { userId: userId },
        { $pull: { tasksId: taskId } },
        { new: true }
    );
    if (!user) {
        res.status(404)
        throw new Error("No Task to be Deleted");
    } else {
        res.status(200)
        res.json(user);
    }
})
module.exports = { addTask, getAllTask, removeTask };