import { useEffect, useState } from "react";
import type { ITask } from "../../utils/types";
import TaskFilterDropdown from "./FilterDropDown";
import TaskCard from "./TaskCard";
import TaskEditModal from "./EditTask";
import { handleDelete, handleToggleComplete, saveEdit } from "../../services/services";

interface ITaskItem {
    tasks: ITask[],
    setTasks: React.Dispatch<React.SetStateAction<ITask[]>>
}
export default function TaskItems ({tasks, setTasks}: ITaskItem){
    const [filter, setFilter] = useState<"All"|"Completed"|"Pending">("All");
    const [currentTasks, setCurrentTasks] = useState<ITask[]|[]>(tasks);
    const [editPopup, setEditPopup] = useState<boolean>(false);
    const [taskToEdit, setTaskToEdit] = useState<ITask>();

    useEffect(()=>{
        if(filter === 'All'){
            setCurrentTasks(tasks);
        }
        else if(filter === 'Completed'){
            const completedTask = tasks.filter(task => task.completed);
            setCurrentTasks(completedTask);
        }
        else if(filter === 'Pending'){
            const pendingTasks = tasks.filter(task => !task.completed);
            setCurrentTasks(pendingTasks);
        }
    }, [filter, tasks])   
    
    return (
        <div>
            {editPopup && taskToEdit && <TaskEditModal task={taskToEdit} onSave={ (task)=> saveEdit(task, setTasks)} onClose={()=> setEditPopup(false)}/>}        
            <div className="flex justify-between mb-5">
                <div></div>
                <div className="w-full max-w-2xl">

                <TaskFilterDropdown selectedFilter={filter} onChange={(fltr) => setFilter(fltr)} taskLength={currentTasks.length || 0}/>
                </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {currentTasks.map((task) => (
                    <TaskCard
                    key={task.id}
                    task={task}
                    onToggleComplete={(id: number) => handleToggleComplete(id, tasks, setTasks)}
                    onDelete={(id: number) => handleDelete(id, tasks, setTasks)}
                    onEdit={(task) => { setTaskToEdit(task); setEditPopup(true)}}
                    />
                ))}
            </div>
        </div>
    )
}