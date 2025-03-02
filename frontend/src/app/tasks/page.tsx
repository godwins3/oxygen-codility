'use state';

import { FaSearch, FaFilter, FaBell } from "react-icons/fa";
import Image from "next/image";
import { Progress } from "@/components/ui/progress";
import Sidebar from "@/components/Sidebar";

const tasks = [
  {
    category: "Time Limit",
    data: [
      { title: "Creating Awesome Mobile Apps", progress: 90, time: "1 Hour", img: "/assets/task.png", users: 5 },
      { title: "Creating Fresh Website", progress: 85, time: "2 Hour", img: "/assets/task.png", users: 4 },
      { title: "Creating Color Palettes", progress: 100, time: "1 Hour", img: "/assets/task.png", users: 6 },
    ],
  },
  {
    category: "New Task",
    data: [
      { title: "Creating Mobile App Design", progress: 75, time: "3 Days Left", img: "/assets/task.png", users: 5 },
      { title: "Creating Perfect Website", progress: 85, time: "4 Days Left", img: "/assets/task.png", users: 4 },
      { title: "Mobile App Design", progress: 65, time: "3 Days Left", img: "/assets/task.png", users: 6 },
    ],
  },
];

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      
      <main className="flex-1 p-6">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">Explore Task</h1>
          <div className="flex gap-3 items-center">
            <div className="relative">
              <input type="text" placeholder="Search Task" className="border p-2 rounded-lg" />
              <FaSearch className="absolute right-2 top-2 text-gray-500" />
            </div>
            <button className="border p-2 rounded-lg flex items-center"><FaFilter /> Category</button>
            <button className="border p-2 rounded-lg flex items-center">Sort By: Deadline</button>
            <FaBell className="text-xl" />
            <Image
                src="/assets/avatar1.png"
                alt="User"
                width={40}
                height={40}
                className="rounded-full"
            />
          </div>
        </header>

        {tasks.map((section) => (
          <div key={section.category} className="mb-6">
            <h2 className="text-xl font-bold mb-3">{section.category}</h2>
            <div className="grid grid-cols-3 gap-4">
              {section.data.map((task) => (
                <div key={task.title} className="bg-white p-4 rounded-lg shadow-md">
                  <img src={task.img} alt={task.title} className="w-full h-40 object-cover rounded" />
                  <h3 className="text-lg font-semibold mt-3">{task.title}</h3>
                  <Progress value={task.progress} />
                  <p className="text-gray-600 mt-2">{task.time}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}
