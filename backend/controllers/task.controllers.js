
import Task from '../models/tasks.model.js';

//create a task
const createTask = async (req, res) => {
    try {
        const { title, description, category, due, time } = req.body;
        const task = await Task.create({ title, description, category, due, time });
        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//get all tasks
const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


//update a task
const updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, category, due, time } = req.body;
        const task = await Task.findByIdAndUpdate(id, { title, description, category, due, time }, { new: true });
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


//delete a task
const deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        await Task.findByIdAndDelete(id);
        res.status(200).json({ message: "Task deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


//export the controllers
export { createTask, getTasks, updateTask, deleteTask };







