import React, { useState } from "react";
import type { ITask } from "../../utils/types";

type Task = {
  id: number;
  title: string;
  description?: string;
  priority: "High" | "Medium" | "Low";
  completed: boolean;
  createdAt: string;
  dueDate: string;
};

interface AddTaskFormProps {
  onAddTask: (newTask: Task) => void;
}

const TaskForm: React.FC<AddTaskFormProps> = ({ onAddTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState<"High" | "Medium" | "Low">("Medium");
  const [dueDate, setDueDate] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (title.trim() === "") {
      setError("Task title is required.");
      return;
    }

    const newTask: ITask = {
      id: Date.now(),
      title: title.trim(),
      description: description.trim(),
      priority,
      completed: false,
      createdAt: new Date().toISOString(),
      dueDate: dueDate || new Date().toISOString().substring(0, 10),
    };

    onAddTask(newTask);

    // Clear form
    setTitle("");
    setDescription("");
    setPriority("Medium");
    setDueDate("");
    setError(null);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" border rounded-lg p-5 shadow-md flex flex-col gap-4"
    >
      <h2 className="text-xl font-semibold ">
        Add New Task
      </h2>

      <input
        type="text"
        placeholder="Task title"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
          setError(null);
        }}
        className="px-3 py-2 rounded border border-gray-300  focus:outline-none"
      />

      <textarea
        placeholder="Description (optional)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="px-3 py-2 rounded border border-gray-300  focus:outline-none"
      />

      <div className="flex flex-col sm:flex-row gap-4">
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value as "High" | "Medium" | "Low")}
          className="px-3 py-2 rounded border border-gray-300  focus:outline-none"
        >
          <option value="High">High Priority</option>
          <option value="Medium">Medium Priority</option>
          <option value="Low">Low Priority</option>
        </select>

        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="px-3 py-2 rounded border border-gray-300  focus:outline-none"
        />
      </div>

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
