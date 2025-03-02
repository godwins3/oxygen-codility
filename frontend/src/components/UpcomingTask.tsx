'use client';
import { Card } from "./ui/card";
import { Progress } from "./ui/progress";
import Image from "next/image";

const UpcomingTask = () => {
    return (
        <div className="mt-6">
            <h3 className="text-lg font-semibold">Upcoming Task</h3>
            <div className="flex grid grid-cols-2 mt-2 gap-4">
            <Card className="p-4">
                <Image
                    src="/assets/task.png"
                    alt="Task"
                    width={650}
                    height={150}
                    className="rounded-lg"
                />
                <h3 className="text-lg font-semibold">Upcoming Task</h3>
                <div className="mt-4">
                <p className="font-semibold">Creating Mobile App Design</p>
                <Progress value={75} className="mt-2" />
                <p className="text-sm text-gray-500 mt-2">3 Days Left</p>
                </div>
            </Card>
            <Card className="p-4">
                <Image
                    src="/assets/task.png"
                    alt="Task"
                    width={650}
                    height={150}
                    className="rounded-lg"
                />
                <h3 className="text-lg font-semibold">Upcoming Task</h3>
                <div className="mt-4">
                <p className="font-semibold">Creating Mobile App Design</p>
                <Progress value={75} className="mt-2" />
                <p className="text-sm text-gray-500 mt-2">3 Days Left</p>
                </div>
            </Card>
            </div>
        </div>
    )
}

export default UpcomingTask;