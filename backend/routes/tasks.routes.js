import express from "express";
import { createTask, getTasks, updateTask, deleteTask } from "../controllers/task.controllers.js";

const Taskrouter = express.Router();


Taskrouter.post("/", createTask);
Taskrouter.get("/", getTasks);
Taskrouter.put("/:id", updateTask);
Taskrouter.delete("/:id", deleteTask);

export default Taskrouter;


