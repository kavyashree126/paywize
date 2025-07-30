"use client";

import React, { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { AccountCircle, CalendarToday } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import { FaPhone, FaVideo, FaEllipsisV } from "react-icons/fa";
import ChatBox from "./profile";

const Navbar = ({ onMenuClick }: { onMenuClick: () => void }) => {
  const [currentDate, setCurrentDate] = useState("");
  const router = useRouter();
  const [showProfile, setShowProfile] = useState(false);
  useEffect(() => {
    const today = new Date();
    const formatted = today.toLocaleDateString(undefined, {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    });
    setCurrentDate(formatted);
  }, []);

  return (
    <div className="w-full bg-white shadow-md flex items-center justify-between px-4 py-3 sticky top-0 z-40 relative">
      <div className="flex items-center gap-4">
        <button
          className="lg:hidden text-gray-700 hover:text-black"
          onClick={onMenuClick}
        >
          <MenuIcon />
        </button>
        <div className="flex flex-col space-y-2 ml-4 mt-2">
          <h1 className="text-xl font-bold text-black">Hello, Margaret</h1>
          <p className="text-sm text-gray-500">
            Track team progress here. You almost reach a goal!
          </p>
        </div>
      </div>
      <div className="hidden sm:flex items-center gap-1 text-sm text-gray-600">
        <span>{currentDate}</span>
        <CalendarToday fontSize="small" />
      </div>
      <button
        className="text-gray-700 cursor-pointer relative z-30"
        onClick={() => setShowProfile(true)}
      >
        <AccountCircle fontSize="large" />
      </button>

      {showProfile && (
        <div
          className="absolute top-full right-0 mt-2 bg-white rounded shadow-lg w-96 max-w-full z-50"
          style={{ minWidth: "300px" }}
        >
          {/* Close button */}
          <button
            className="absolute top-2 right-2 text-gray-500"
            onClick={() => setShowProfile(false)}
          >
            &times;
          </button>

          <div className="flex flex-col items-center p-6">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg mb-4">
              <AccountCircle fontSize="large" />
            </div>

            <h1 className="text-xl font-semibold text-gray-800 mb-4">
              Megan Norton
            </h1>

            {/* Icons */}
            <div className="flex items-center gap-6 mb-6 text-gray-600">
              <button className="hover:text-blue-500">
                <FaPhone size={20} />
              </button>
              <button className="hover:text-blue-500">
                <FaVideo size={20} />
              </button>
              <button className="hover:text-blue-500">
                <FaEllipsisV size={20} />
              </button>
            </div>

            <div className="mt-4 w-full">
              <ChatBox />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
