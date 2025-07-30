// app/components/TaskCard.tsx
import React from "react";

interface TaskCardProps {
  title: string;
  status: "In progress" | "On hold" | "Done";
  hours: number;
}

const statusColors: Record<string, string> = {
  "In progress": "text-orange-500",
  "On hold": "text-blue-500",
  Done: "text-green-500",
};

const TaskCard: React.FC<TaskCardProps> = ({ title, status, hours }) => {
  return (
    <div className="flex items-center justify-between py-3 border-b">
      <div>
        <h4 className="text-sm font-medium text-gray-800">{title}</h4>
        <p className={`text-xs ${statusColors[status]}`}>{status}</p>
      </div>
      <div className="text-sm text-gray-600">{hours}h</div>
    </div>
  );
};

export default TaskCard;
