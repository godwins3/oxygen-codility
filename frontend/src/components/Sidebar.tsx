'use client';

import Link from 'next/link';
import { FiSettings, FiMessageSquare } from "react-icons/fi";
import { FaTasks } from "react-icons/fa";
import { HiOutlineUsers } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";

export default function Sidebar() {
  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-white p-5 border-r shadow-md">
        <h1 className="text-2xl font-bold mb-8">Oxygene</h1>
        <nav>
          <ul className="space-y-4">
            <li>
              <Link href="/dashboard" className="flex items-center space-x-3 text-gray-700 hover:text-blue-500 cursor-pointer">
                <MdOutlineDashboard size={20} />
                <span>Overview</span>
              </Link>
            </li>
            <li>
              <Link href="/tasks" className="flex items-center space-x-3 text-gray-700 hover:text-blue-500 cursor-pointer">
                <FaTasks size={20} />
                <span>Task</span>
              </Link>
            </li>
            <li>
              <Link href="/mentors" className="flex items-center space-x-3 text-gray-700 hover:text-blue-500 cursor-pointer">
                <HiOutlineUsers size={20} />
                <span>Mentors</span>
              </Link>
            </li>
            <li>
              <Link href="/settings" className="flex items-center space-x-3 text-gray-700 hover:text-blue-500 cursor-pointer">
                <FiSettings size={20} />
                <span>Settings</span>
              </Link>
            </li>
          </ul>
        </nav>
        <br />
        <div className="mt-10 bg-gray-200 p-4 rounded-lg text-center absolute bottom-4 w-54">
          <p className="text-sm">Having Trouble? Contact Support.</p>
          <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
            Help Center
          </button>
        </div>
      </aside>
    </div>
  );
}
