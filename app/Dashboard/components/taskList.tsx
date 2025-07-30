// app/components/TaskList.tsx
"use client";
import React, { useState } from "react";
import TaskCard from "./taskCard";

type TaskStatus = "In progress" | "On hold" | "Done";

interface Task {
  title: string;
  status: TaskStatus;
  hours: number;
}

const allTasks: Task[] = [
  { title: "Product Review for U18 Market", status: "In progress", hours: 4 },
  { title: "UX Research for Product", status: "On hold", hours: 8 },
  { title: "App design and development", status: "Done", hours: 32 },
  { title: "Marketing Planning", status: "In progress", hours: 5 },
  { title: "SEO Optimization", status: "Done", hours: 6 },
  { title: "Team Meeting", status: "On hold", hours: 2 },
];

const TaskList: React.FC = () => {
  const tasksPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(allTasks.length / tasksPerPage);
  const start = (currentPage - 1) * tasksPerPage;
  const currentTasks = allTasks.slice(start, start + tasksPerPage);

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mt-6 w-full">
      <div className="flex justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Current Tasks</h3>
        <span className="text-sm text-gray-500">Done 30%</span>
      </div>

      {currentTasks.map((task, i) => (
        <TaskCard key={i} {...task} />
      ))}

      <div className="flex justify-center mt-4 space-x-2">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`w-8 h-8 rounded-full text-sm ${
              currentPage === i + 1
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
