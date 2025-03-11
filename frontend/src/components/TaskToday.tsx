'use client';

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Progress } from "./ui/progress";
import Image from "next/image";
// import { fetchTasks } from "@/store/tasksSlice";
import { fetchTasks } from "@/lib/api";
import { RootState, AppDispatch } from "@/store/store";


const TaskToday = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { tasks, loading, error } = useSelector((state: RootState) => state.tasks);

    useEffect(() => {
        dispatch(fetchTasks());
    }, [dispatch]);
    return (
        <div className="mt-6">
          <h3 className="text-lg font-semibold">Task Today</h3>
          {tasks.length > 0 && (
            <div className="bg-gray-100 p-4 rounded-lg mt-3">
              <Image
                src={tasks[0].img || "/assets/task.png"}
                alt={tasks[0].title}
                width={250}
                height={150}
                className="rounded-lg"
              />
              <h4 className="font-semibold mt-2">{tasks[0].title}</h4>
              <Progress value={tasks[0].progress} className="mt-2" />
              <p className="text-sm text-gray-600 mt-1">{tasks[0].time}</p>
            </div>
          )}
          <div className="mt-6">
            <h4 className="font-semibold">Detail Task</h4>
            <ul className="mt-2 space-y-2">
              <li className="text-sm">1. {tasks[0]?.description}</li>
            </ul>
            <button className="mt-4 bg-blue-500 text-white w-full py-2 rounded">
              Go To Detail
            </button>
          </div>
        </div>
    )
}

export default TaskToday;