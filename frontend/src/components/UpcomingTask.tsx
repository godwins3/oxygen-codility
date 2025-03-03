'use client';

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "./ui/card";
import { Progress } from "./ui/progress";
import Image from "next/image";
import { fetchTasks } from "@/store/tasksSlice";
import { RootState, AppDispatch } from "@/store/store";

const UpcomingTask = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { tasks, loading, error } = useSelector((state: RootState) => state.tasks);

    useEffect(() => {
        dispatch(fetchTasks());
    }, [dispatch]);
    return (
        <div className="mt-6">
          <h3 className="text-lg font-semibold">Upcoming Task</h3>
          <div className="flex grid grid-cols-2 mt-2 gap-4">
            {tasks.slice(0, 2).map((task) => (
              <Card key={task.id} className="p-4">
                <Image
                  src={task.img || "/assets/task.png"}
                  alt={task.title}
                  width={650}
                  height={150}
                  className="rounded-lg"
                />
                <h3 className="text-lg font-semibold">{task.title}</h3>
                <div className="mt-4">
                  <p className="font-semibold">{task.description}</p>
                  <Progress value={task.progress} className="mt-2" />
                  <p className="text-sm text-gray-500 mt-2">{task.time}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
    )
}

export default UpcomingTask;