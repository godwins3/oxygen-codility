import Sidebar from "@/components/Sidebar";
import React from "react";
import Image from "next/image";

const TaskDetail = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-50">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Detail Task</h2>
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Search Task"
              className="border px-4 py-2 rounded-lg"
            />
            <button className="border px-4 py-2 rounded-lg">Category</button>
            <button className="border px-4 py-2 rounded-lg">Sort By: Deadline</button>
            {/* <div className="w-10 h-10 rounded-full bg-gray-300"></div> */}
            <Image
                src="/assets/avatar1.png"
                alt="User"
                width={40}
                height={40}
                className="rounded-full"
            />
          </div>
        </div>

        {/* Task Detail */}
        <div className="grid grid-cols-3 gap-6">
          {/* Video & Description */}
          <div className="col-span-2 bg-white p-6 rounded-lg shadow-md">
            <div className="relative mb-4">
              <img
                src="/assets/task.png"
                alt="Task Preview"
                className="w-full rounded-lg"
              />
              <div className="absolute bottom-4 left-4 bg-black text-white px-4 py-2 rounded-full">
                ▶ 2:20 / 10:00
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2">Creating Awesome Mobile Apps</h3>
            <p className="text-gray-500 mb-4">UI/UX Design · Apps Design</p>
            <p className="text-gray-700 mb-4">
              Follow the video tutorial above. Learn how to use Figma for design,
              spacing, typography, and content structuring.
            </p>
            <h4 className="font-semibold mb-2">Essence of Assessment</h4>
            <ul className="list-disc pl-6">
              <li>Understanding the tools in Figma</li>
              <li>Understanding the basics of making designs</li>
            </ul>
          </div>

          {/* Student Assignment Panel */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-bold text-lg mb-4">Assigned Assignments</h3>
            <p className="text-gray-600 mb-2">Creating Awesome Mobile Apps</p>
            <div className="mb-4">
              <p className="text-gray-600">Student&#39;s Name: <span className="font-medium">Praise Godwins</span></p>
              <p className="text-gray-600">Student Class: <span className="font-medium">MIPA 2</span></p>
              <p className="text-gray-600">Student Number: <span className="font-medium">10</span></p>
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
};

export default TaskDetail;
