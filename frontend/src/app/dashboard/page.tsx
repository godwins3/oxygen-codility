"use client";

import Image from "next/image";
import Sidebar from "@/components/Sidebar";
import ActivityChart from "@/components/ActivityChart";
import { Calendar } from "@/components/ui/calendar";
import TaskToday from "@/components/TaskToday";
import RunningTask from "@/components/RunningTask";
import UpcomingTask from "@/components/UpcomingTask";
import MonthlyMentors from "@/components/MonthlyMentors";

export default function Dashboard() {

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-auto">
        <header className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-semibold">Hi, Praise Godwins</h2>
            <p className="text-gray-600">Let&#39;s finish your task today!</p>
          </div>
          <Image
            src="/assets/avatar1.png"
            alt="User"
            width={40}
            height={40}
            className="rounded-full"
          />
        </header>

        <div className="grid grid-cols-3 gap-6 mt-6">
          {/* Running Task */}
          <RunningTask />

          {/* Activity Graph */}
          <ActivityChart />
        </div>

        {/* Monthly Mentors */}
        
        <MonthlyMentors />
        {/* Upcoming Tasks */}
  
        <UpcomingTask />
      </main>

      {/* Right Sidebar */}
      <aside className="w-72 bg-white p-5 border-l shadow-md">
        <Calendar />
        <TaskToday />
      </aside>
    </div>
  );
}
