import React from "react";

interface TaskFilterDropdownProps {
  selectedFilter: "All" | "Completed" | "Pending";
  onChange: (filter: "All" | "Completed" | "Pending") => void;
  taskLength: number
}

const TaskFilterDropdown: React.FC<TaskFilterDropdownProps> = ({
  selectedFilter,
  onChange,
  taskLength,
}) => {
  return (
    <div className="relative">
      <select
        value={selectedFilter}
        onChange={(e) => onChange(e.target.value as "All" | "Completed" | "Pending")}
        className="w-full max-w-2xl px-3 py-2 rounded border  focus:outline-none"
      >
        <option value="All">All Tasks {selectedFilter === 'All' && taskLength} </option>
        <option value="Completed">Completed { selectedFilter === 'Completed' && taskLength} </option>
        <option value="Pending">Pending {selectedFilter === 'Pending' && taskLength} </option>
      </select>
    </div>
  );
};

export default TaskFilterDropdown;
