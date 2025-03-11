"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "next/navigation"; // ✅ Correct method
import { FaSearch, FaFilter, FaBell } from "react-icons/fa";
import Image from "next/image";
import Sidebar from "@/components/Sidebar";
// import { fetchTasks } from "@/store/tasksSlice";
import { fetchTasks } from "@/lib/api";
import { RootState, AppDispatch } from "@/store/store";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function TaskDetailPage() {
  const dispatch = useDispatch<AppDispatch>();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const [showErrorModal, setShowErrorModal] = useState(false);

  const { tasks, loading, error } = useSelector((state: RootState) => state.tasks);
  const task = tasks.find((t) => t.id === id);

  useEffect(() => {
    if (!tasks.length) {
      dispatch(fetchTasks());
    }
  }, [dispatch, tasks.length]);

  useEffect(() => {
    if (error) {
      setShowErrorModal(true);
    }
  }, [error]);

  if (loading || showErrorModal) return <TaskSkeleton />;

  if (!task) return <p>Task not found.</p>;

  return (
    <ProtectedRoute>
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
            <p className="text-gray-700 mb-4">{task.description}</p>
            <h4 className="font-semibold mb-2">Essence of Assessment</h4>
            <ul className="list-disc pl-6">
              <li>{task.description}</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-bold text-lg mb-4">Assigned Assignments</h3>
            <p className="text-gray-600 mb-2">{task.title}</p>
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
    </ProtectedRoute>
  );
}

// Skeleton Loader Component
function TaskSkeleton() {
  return (
    <div className="flex h-screen bg-gray-100 animate-pulse">
      <Sidebar />
      <main className="flex-1 p-6">
        <header className="flex justify-between items-center mb-6">
          <div className="w-40 h-6 bg-gray-300 rounded"></div>
          <div className="flex gap-3 items-center">
            <div className="w-32 h-10 bg-gray-300 rounded"></div>
            <div className="w-32 h-10 bg-gray-300 rounded"></div>
            <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
            <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
          </div>
        </header>

        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-2 bg-white p-6 rounded-lg shadow-md">
            <div className="w-full h-40 bg-gray-300 rounded mb-4"></div>
            <div className="w-3/4 h-6 bg-gray-300 rounded mb-2"></div>
            <div className="w-full h-20 bg-gray-300 rounded mb-4"></div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-3/4 h-6 bg-gray-300 rounded mb-4"></div>
            <div className="w-full h-20 bg-gray-300 rounded mb-4"></div>
            <div className="w-full h-10 bg-gray-300 rounded"></div>
          </div>
        </div>
      </main>
    </div>
  );
}


// Error Popup Component
function ErrorPopup({ error, onClose }: { error: string; onClose: () => void }) {
  const router = useRouter();

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-lg font-semibold text-red-600">Error</h2>
        <p className="text-gray-600">{error}</p>
        <div className="flex justify-end gap-4 mt-4">
          <button className="bg-gray-300 px-4 py-2 rounded" onClick={onClose}>
            Go Back
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={() => router.push("/dashboard")}>
            Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}