import React, { useEffect, useState } from "react";

import TaskForm from "../components/tasks/TaskForm";
import type { ITask } from "../utils/types";
import sampleTasks from "../seeder/tasks";
import { onAddTask } from "../services/services";
import TaskItems from "../components/tasks/TaskItems";


const Dashboard: React.FC = () => {
  const [tasks, setTasks] = useState<ITask[]>(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks") as string) || [];
    storedTasks.sort(
      (a: ITask, b: ITask) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
    return storedTasks;
  });

  const [addTask, setAddTask] = useState<boolean>(false);
  
  useEffect(()=>{
    if(tasks.length === 0){
      setTasks(sampleTasks);
    }
  }, [])


  // Update localStorage whenever tasks change
  useEffect(() => {
    tasks.sort(
      (a: ITask, b: ITask) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);  

  return (
    <div className="min-h-screen p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">
          📋 My Tasks ({tasks?.length || 0})
        </h1>
        <button
            onClick={()=>setAddTask(!addTask)}
            className="w-full max-w-xl mb-2 bg-yellow-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            {addTask ? "Discard": "Add Task"}
        </button>
      </div>
      {/* add task */}
      {addTask && <TaskForm onAddTask={(task)=>onAddTask(task, tasks, setTasks, setAddTask)} />}
      {/* Grid layout for cards */}
      {tasks && tasks.length > 0 ? <TaskItems tasks={tasks} setTasks={setTasks} /> : <div> No tasks found </div>}
    </div>
  );
};

export default Dashboard;
