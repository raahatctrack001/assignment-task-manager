import React, { useState } from "react";
import type { ITask } from "../../utils/types";

interface TaskEditModalProps {
  task: ITask;
  onClose: () => void;
  onSave: (updatedTask: ITask) => void;
}

const TaskEditModal: React.FC<TaskEditModalProps> = ({ task, onClose, onSave }) => {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description || "");
  const [priority, setPriority] = useState<"High" | "Medium" | "Low">(task.priority);
  const [dueDate, setDueDate] = useState(task.dueDate);

  const handleSave = () => {
    const updatedTask: ITask = {
      ...task,
      title,
      description,
      priority,
      dueDate,
    };
    onSave(updatedTask);
    onClose();
  };

  return (
    <div className="fixed inset-0 w-full opacity-100 flex items-center justify-center z-50">
      <div className="p-6 bg-gray-100 rounded-lg shadow-lg w-full max-w-5xl">
        <h2 className="text-xl font-bold mb-4 text-gray-800 ">Edit Task</h2>

        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-3 py-2 mb-3 rounded border border-gray-300  focus:outline-none"
          placeholder="Task Title"
        />

        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full px-3 py-2 mb-3 rounded border border-gray-300 focus:outline-none"
          placeholder="Description"
        />

        <div className="flex gap-3 mb-3">
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value as "High" | "Medium" | "Low")}
            className="flex-1 px-3 py-2 rounded border border-gray-300  focus:outline-none"
          >
            <option value="High">High Priority</option>
            <option value="Medium">Medium Priority</option>
            <option value="Low">Low Priority</option>
          </select>

          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="flex-1 px-3 py-2 rounded border border-gray-300  focus:outline-none"
          />
        </div>

        <div className="flex justify-end gap-3 mt-4">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm rounded bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-gray-200 hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 text-sm rounded bg-blue-600 text-white hover:bg-blue-700"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskEditModal;
