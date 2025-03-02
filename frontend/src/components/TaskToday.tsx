'use client';

import { Progress } from "./ui/progress";
import Image from "next/image";

const TaskToday = () => {
    return (
        <div>
            <h3 className="text-lg font-semibold">Task Today</h3>
            <div className="bg-gray-100 p-4 rounded-lg mt-3">
            <Image
                src="/assets/task.png"
                alt="Task"
                width={250}
                height={150}
                className="rounded-lg"
            />
            <h4 className="font-semibold mt-2">Creating Awesome Mobile Apps</h4>
            <Progress value={90} className="mt-2" />
            <p className="text-sm text-gray-600 mt-1">1 Hour</p>
            </div>
            <div className="mt-6">
            <h4 className="font-semibold">Detail Task</h4>
            <ul className="mt-2 space-y-2">
                <li className="text-sm">1. Understanding the tools in Figma</li>
                <li className="text-sm">2. Basics of making designs</li>
                <li className="text-sm">3. Design a mobile application</li>
            </ul>
            <button className="mt-4 bg-blue-500 text-white w-full py-2 rounded">
                Go To Detail
            </button>
            </div>
        </div>
    )
}

export default TaskToday;