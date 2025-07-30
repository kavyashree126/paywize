// "use client";

// import React from "react";
// import {
//   Home,
//   Settings,
//   Work,
//   Task,
//   Group,
//   Help,
//   Logout,
// } from "@mui/icons-material";

// const Sidebar = () => {
//   return (
//     <div className="sidebar fixed top-0 left-0 h-screen w-64 bg-white shadow-lg flex flex-col justify-between z-50">
//       <div>
//         <h2 className="text-2xl font-bold text-black mb-6 px-4 pt-6">logip</h2>
//         <ul className="space-y-4 px-4">
//           <li className="flex items-center gap-3 text-black hover:bg-gray-100 rounded-lg px-3 py-2 cursor-pointer transition">
//             <Home fontSize="small" /> <span>Home</span>
//           </li>
//           <li className="flex items-center gap-3 text-black hover:bg-gray-100 rounded-lg px-3 py-2 cursor-pointer transition">
//             <Work fontSize="small" /> <span>Projects</span>
//           </li>
//           <li className="flex items-center gap-3 text-black hover:bg-gray-100 rounded-lg px-3 py-2 cursor-pointer transition">
//             <Task fontSize="small" /> <span>Tasks</span>
//           </li>
//           <li className="flex items-center gap-3 text-black hover:bg-gray-100 rounded-lg px-3 py-2 cursor-pointer transition">
//             <Group fontSize="small" /> <span>Team</span>
//           </li>
//           <li className="flex items-center gap-3 text-black hover:bg-gray-100 rounded-lg px-3 py-2 cursor-pointer transition">
//             <Settings fontSize="small" /> <span>Settings</span>
//           </li>
//         </ul>
//       </div>

//       <div className="px-4 pb-16 mt-1">
//         <div className="bg-blue-50 rounded-lg p-4 mb-12 flex flex-col items-start">
//           <span className="text-black font-semibold mb-2">Upgrade to Pro</span>
//           <span className="text-sm text-gray-600 mb-3">
//             Get 1 month free and unlock premium features
//           </span>
//           <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition font-medium">
//             Upgrade
//           </button>
//         </div>
//         <ul className="space-y-4">
//           <li className="flex items-center gap-3 text-black hover:bg-gray-100 rounded-lg px-3 py-2 cursor-pointer transition">
//             <Help fontSize="small" /> <span>Help and information</span>
//           </li>
//           <li className="flex items-center gap-3 text-black hover:bg-gray-100 rounded-lg px-3 py-2 cursor-pointer transition">
//             <Logout fontSize="small" /> <span>Log Out</span>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;

"use client";

import {
  Home,
  Settings,
  Work,
  Task,
  Group,
  Help,
  Logout,
  PlusOne,
} from "@mui/icons-material";

const Sidebar = () => {
  return (
    <div className="h-full w-64 bg-white shadow-lg flex flex-col justify-between z-50">
      <div>
        <h2 className="text-2xl font-bold text-black mb-6 px-4 pt-6">logip</h2>
        <ul className="space-y-4 px-4">
          {[
            { icon: <Home fontSize="small" />, label: "Home" },
            { icon: <Work fontSize="small" />, label: "Projects" },
            { icon: <Task fontSize="small" />, label: "Tasks" },
            { icon: <Group fontSize="small" />, label: "Team" },
            { icon: <Settings fontSize="small" />, label: "Settings" },
          ].map(({ icon, label }) => (
            <li
              key={label}
              className="flex items-center gap-3 text-black hover:bg-gray-100 rounded-lg px-3 py-2 cursor-pointer transition"
            >
              {icon}
              <span>{label}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="px-4 pb-6 mt-4 mb-12">
        <div className="bg-blue-50 rounded-lg p-4 mb-6">
          <span className="text-black font-semibold mb-2 block">
            Upgrade to Pro
          </span>
          <span className="text-sm text-gray-600 mb-3 block">
            Get 1 month free and unlock premium features
          </span>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition font-medium">
            Upgrade
          </button>
        </div>
        <ul className="space-y-4 mt-12">
          <li className="flex items-center gap-2 text-black hover:underline cursor-pointer">
            <Help fontSize="small" /> <span>Help</span>
          </li>
          <li className="flex items-center gap-2 text-black hover:underline cursor-pointer ">
            <Logout fontSize="small" /> <span>Logout</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
