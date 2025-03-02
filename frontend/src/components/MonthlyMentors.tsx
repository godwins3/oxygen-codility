'use client';

import Image from "next/image";

const MonthlyMentors = () => {
    return (
        <div className="mt-6">
          <h3 className="text-lg font-semibold">Monthly Mentors</h3>
          <div className="grid grid-cols-2 gap-4 mt-3">
            <div className="bg-white p-4 rounded-lg shadow-md flex items-center space-x-4">
              <Image
                src="/assets/mentor1.png"
                alt="Mentor"
                width={50}
                height={50}
                className="rounded-full"
              />
              <div>
                <h4 className="font-semibold">Curious George</h4>
                <p className="text-sm text-gray-600">UI/UX Design</p>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md flex items-center space-x-4">
              <Image
                src="/assets/mentor1.png"
                alt="Mentor"
                width={50}
                height={50}
                className="rounded-full"
              />
              <div>
                <h4 className="font-semibold">Abraham Lincoln</h4>
                <p className="text-sm text-gray-600">3D Design</p>
              </div>
            </div>
          </div>
        </div>
    )
}

export default MonthlyMentors;