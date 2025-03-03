'use client';

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { FaSearch, FaFilter, FaBell } from "react-icons/fa";
import Image from "next/image";
import Sidebar from "@/components/Sidebar";
import { fetchTasks } from "@/store/tasksSlice";
import { RootState, AppDispatch } from "@/store/store";


export default function TaskDetailPage() {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const { id } = router.query;
  const { tasks, loading, error } = useSelector((state: RootState) => state.tasks);
  const task = tasks.find((t) => t.id === id);

  useEffect(() => {
    if (!tasks.length) {
      dispatch(fetchTasks());
    }
  }, [dispatch, tasks.length]);

  if (loading) return <p>Loading task details...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;
  if (!task) return <p>Task not found.</p>;

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-6">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">Task Detail</h1>
          <div className="flex gap-3 items-center">
            <div className="relative">
              <input type="text" placeholder="Search Task" className="border p-2 rounded-lg" />
              <FaSearch className="absolute right-2 top-2 text-gray-500" />
            </div>
            <button className="border p-2 rounded-lg flex items-center"><FaFilter /> Category</button>
            <button className="border p-2 rounded-lg flex items-center">Sort By: Deadline</button>
            <FaBell className="text-xl" />
            <Image src="/assets/avatar1.png" alt="User" width={40} height={40} className="rounded-full" />
          </div>
        </header>
        
        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-2 bg-white p-6 rounded-lg shadow-md">
            <div className="relative mb-4">
              <img src={task.img || "/assets/task.png"} alt="Task Preview" className="w-full rounded-lg" />
            </div>
            <h3 className="text-xl font-bold mb-2">{task.title}</h3>
            {/* <p className="text-gray-500 mb-4">{task.category}</p> */}
            <p className="text-gray-700 mb-4">{task.description}</p>
            <h4 className="font-semibold mb-2">Essence of Assessment</h4>
            <ul className="list-disc pl-6">
              <li>{task.description}</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-bold text-lg mb-4">Assigned Assignments</h3>
            <p className="text-gray-600 mb-2">{task.title}</p>
            <div className="mb-4">
              {/* <p className="text-gray-600">Student Name: <span className="font-medium">Praise Godwins</span></p>
              <p className="text-gray-600">Student Class: <span className="font-medium">MIPA 2</span></p>
              <p className="text-gray-600">Student Number: <span className="font-medium">10</span></p> */}
            </div>
            <h4 className="font-semibold mb-2">File Task</h4>
            <p className="text-gray-500 text-sm">Last Modified: 1 July 2022</p>
            <div className="border-2 border-dashed border-gray-400 p-10 text-center my-4">
              <p className="text-gray-500">Drag or browse from device</p>
            </div>
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg">
              Submit
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
