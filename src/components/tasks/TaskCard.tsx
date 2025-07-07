import React from "react";
import { differenceInDays, formatDistanceToNow } from "date-fns";
import { Edit, Trash2, CheckCircle, Circle } from "lucide-react";
import type { ITask } from "../../utils/types";

interface TaskCardProps {
  task: ITask;
  onToggleComplete: (id: number) => void;
  onDelete: (id: number) => void;
  onEdit: (task: ITask) => void;
}

const TaskCard: React.FC<TaskCardProps> = ({
  task,
  onToggleComplete,
  onDelete,
  onEdit,
}) => {
  const priorityColor = {
    High: "bg-red-600",
    Medium: "bg-yellow-500",
    Low: "bg-green-600",
  };

  const dayDifference = () =>
    differenceInDays(new Date(task.dueDate), new Date());

  return (
    <div
      className={`rounded-xl p-5 shadow-sm border border-gray-200 dark:border-gray-700 transition duration-300 
      bg-white dark:bg-gray-900 hover:shadow-lg dark:hover:shadow-md flex flex-col gap-4
      ${
        task.completed
          ? "opacity-70 line-through hover:opacity-100"
          : "hover:scale-[1.01]"
      }`}
    >
      <div className="flex justify-between items-start">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
          {task.title}
        </h2>
        <span
          className={`text-xs text-white px-2 py-1 rounded-full ${priorityColor[task.priority]}`}
        >
          {task.priority}
        </span>
      </div>

      {task.description && (
        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
          {task.description}
        </p>
      )}

      <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400">
        <span>
          Created {formatDistanceToNow(new Date(task.createdAt))} ago
        </span>

        <div className="flex flex-col text-right">
          <span>Due: {task.dueDate}</span>
          {task.completed ? (
            <span className="font-semibold text-green-500 text-sm">Completed</span>
          ) : (
            <span className="font-medium">
              {dayDifference() >= 0 ? (
                <span className="text-yellow-600">{dayDifference()} days left</span>
              ) : (
                <span className="text-red-600">Missed</span>
              )}
            </span>
          )}
        </div>
      </div>

      <div className="flex items-center justify-between mt-2">
        <button
          onClick={() => onToggleComplete(task.id)}
          className="flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 hover:underline transition"
        >
          {task.completed ? (
            <>
              <CheckCircle size={18} />
              Mark Incomplete
            </>
          ) : (
            <>
              <Circle size={18} />
              Mark Complete
            </>
          )}
        </button>

        <div className="flex gap-2">
          <button
            onClick={() => onEdit(task)}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            title="Edit Task"
          >
            <Edit size={18} />
          </button>
          <button
            onClick={() => onDelete(task.id)}
            className="p-2 rounded-full hover:bg-red-100 dark:hover:bg-red-900 transition"
            title="Delete Task"
          >
            <Trash2 size={18} className="text-red-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
