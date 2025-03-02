'use client';
import { Progress } from "./ui/progress";
import '@/styles/radialProgress.css';

const RunningTask = () => {
    return (
        <div className="bg-white p-5 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">Running Task</h3>
            <div className="flex items-center justify-between mt-4">
              <div>
                <p className="text-3xl font-bold">65</p>
                <p className="text-gray-600">Total Tasks</p>
              </div>
              <div className="relative w-40 h-40 hidden lg:block">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                    
                    <circle
                    className="text-gray-200 stroke-current"
                    stroke-width="10"
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    ></circle>
                    <circle
                    className="text-indigo-500  progress-ring__circle stroke-current"
                    stroke-width="10"
                    stroke-linecap="round"
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    stroke-dasharray="251.2" 
                    stroke-dashoffset="calc(251.2px - (251.2px * 70) / 100)"
                    ></circle>
                    
                    <text x="50" y="50" font-family="Verdana" font-size="12" text-anchor="middle" alignment-baseline="middle">70%</text>

                </svg>
                </div>
            </div>
        </div>
    )
}

export default RunningTask;