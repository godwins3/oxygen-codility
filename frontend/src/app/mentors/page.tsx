'use client';

import { useState } from "react";
import { Search, Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Sidebar from "@/components/Sidebar";

const mentors = [
  { name: "Jessica Jane", role: "Web Developer", tasks: 40, rating: 4.7, reviews: 750, followed: false },
  { name: "Abraham Lincoln", role: "3D Design", tasks: 32, rating: 4.9, reviews: 510, followed: true },
  { name: "Curious George", role: "UI/UX Design", tasks: 40, rating: 4.7, reviews: 750, followed: false },
  { name: "Alex Stanton", role: "UI/UX Designer", tasks: 60, rating: 4.9, reviews: 970, followed: true },
  { name: "Antoine Griezmann", role: "Android Developer", tasks: 50, rating: 4.8, reviews: 830, followed: false },
  { name: "Anna White", role: "3D Design", tasks: 60, rating: 4.8, reviews: 870, followed: true },
  { name: "Richard Kyle", role: "2D Design", tasks: 60, rating: 4.7, reviews: 730, followed: false },
  { name: "Julia Philips", role: "iOS Developer", tasks: 60, rating: 4.9, reviews: 910, followed: false },
];

export default function ExploreMentors() {
  const [mentorList, setMentorList] = useState(mentors);

  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 p-6 overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Explore Mentors</h2>
          <div className="flex gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search Mentors"
                className="pl-10 pr-4 py-2 border rounded-lg"
              />
            </div>
            <Button variant="outline">Category</Button>
            <Button variant="outline">Sort By: Popular</Button>
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-4">Recent Mentors</h3>
        <div className="grid grid-cols-3 gap-4">
          {mentorList.slice(0, 3).map((mentor, index) => (
            <Card key={index} className="p-4 flex justify-between items-center">
              <div>
                <h4 className="font-semibold">{mentor.name}</h4>
                <p className="text-gray-500 text-sm">{mentor.role}</p>
                <p className="text-gray-600 text-sm mt-2">{mentor.tasks} Task</p>
                <p className="flex items-center text-yellow-500">
                  <Star size={16} /> {mentor.rating} ({mentor.reviews} Reviews)
                </p>
              </div>
              <Button variant="link" className="text-blue-600">
                {mentor.followed ? "Followed" : "+ Follow"}
              </Button>
            </Card>
          ))}
        </div>
        <h3 className="text-xl font-semibold mt-6 mb-4">Mentors</h3>
        <div className="grid grid-cols-2 gap-4">
          {mentorList.map((mentor, index) => (
            <Card key={index} className="p-4">
              <h4 className="font-semibold">{mentor.name}</h4>
              <p className="text-gray-500 text-sm">{mentor.role}</p>
              <p className="text-gray-600 text-sm mt-2">{mentor.tasks} Task</p>
              <p className="flex items-center text-yellow-500">
                <Star size={16} /> {mentor.rating} ({mentor.reviews} Reviews)
              </p>
              <Button variant="link" className="text-blue-600 mt-2">
                {mentor.followed ? "Followed" : "+ Follow"}
              </Button>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
