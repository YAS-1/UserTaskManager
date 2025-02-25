import mongoose from 'mongoose';

const TaskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  due: { type: Date, required: true },
  time: { type: String, required: true },
  isCompleted: { type: Boolean, default: false },
}, {
  timestamps: true,
});

const Task = mongoose.model('Task', TaskSchema);
export default Task;
