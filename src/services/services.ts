import type React from "react";
import type { ITask } from "../utils/types";

//invoked when task is marked as completed
/**
 * 
 * @param id: task id
 * @param tasks: global task data
 * @param setTasks: state setter to set the task state
 */
export const handleToggleComplete = (
    id: number, 
    tasks: ITask[], 
    setTasks: React.Dispatch<React.SetStateAction<ITask[]>>
) => {
        // alert("completed ")
        const updated = tasks.map((task) =>
          task.id === id ? { ...task, completed: !task.completed } : task
        );
        setTasks(updated);
    };

/**
 * invoked when task is deleted
 * @param id 
 * @param tasks 
 * @param setTasks 
 * @returns 
 */
export const handleDelete = (
    id: number, 
    tasks: ITask[], 
    setTasks: React.Dispatch<React.SetStateAction<ITask[]>>
) => {  
        const confirm = window.confirm("Are you sure you want to delete this task?");
        console.log("id: ", id)
        if (!confirm) return;
        const updated = tasks.filter((task) => task.id !== id);
        setTasks(updated);
    };

/**
 * 
 * @param updatedTask task data that has been updated
 * @param setTasks set state of the tasks
 */
export const saveEdit = (
    updatedTask: ITask, 
    setTasks: React.Dispatch<React.SetStateAction<ITask[]>>
) => {
    setTasks((tasks)=>{
        return tasks.map(task => task?.id === updatedTask.id ? updatedTask : task);
    })
}

/**
 * 
 * @param task the task the has been newly created
 * @param tasks previosly created tasks
 * @param setTasks 
 * @param setAddTask state that triggers the mounting of taskform 
 * @returns 
 */
export const onAddTask = (
    task: ITask, 
    tasks: ITask[], 
    setTasks: React.Dispatch<React.SetStateAction<ITask[]>>,
    setAddTask: React.Dispatch<React.SetStateAction<boolean>>
)=>{
    if(!tasks)
        return;
    setTasks((tasks) => [...tasks, task]);
    setAddTask(false);
  }