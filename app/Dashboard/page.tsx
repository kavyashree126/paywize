import TaskList from "./components/taskList";
import TaskGraph from "./components/taskGraph";

import { CheckCircle, Clock, Zap } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-full mx-auto">
        <section className="flex items-center justify-between mb-6">
          <div className="flex justify-between w-full">
            {/* Finished */}
            <div className="text-center flex flex-col items-center flex-1">
              <CheckCircle className="h-6 w-6 text-green-600 mb-1" />
              <p className="text-sm text-gray-500">Finished</p>
              <p className="font-semibold text-green-600">18</p>
            </div>

            {/* Tracked */}
            <div className="text-center flex flex-col items-center flex-1">
              <Clock className="h-6 w-6 text-red-600 mb-1" />
              <p className="text-sm text-gray-500">Tracked</p>
              <p className="font-semibold text-red-600">31h</p>
            </div>

            {/* Efficiency */}
            <div className="text-center flex flex-col items-center flex-1">
              <Zap className="h-6 w-6 text-blue-600 mb-1" />
              <p className="text-sm text-gray-500">Efficiency</p>
              <p className="font-semibold text-blue-600">93%</p>
            </div>
          </div>
        </section>
        <TaskGraph />
        <TaskList />
      </div>
    </main>
  );
}
